import { ButtonText } from "@components/Button";
import { useModals } from "@components/Modal/hooks/useModals";
import { ModalConfirmContainer } from "@components/Modal/styles/decorates/MdalConfirm.decorate";
import { parseId, parseName, praseMoney } from "@helpers/string";
import useAuthenticate from "@hooks/useAuthenticate";
import { toast } from "react-toastify";
import styled from "styled-components";
import { confirmPayment } from "../../../repo/payment";

interface ModalConfirmProps {
  id: string;
  totalBill: number;
  billId: string;
  beneficiary: User;
  otp: string;
  onSuccessPayment?: () => void;
  onErrorPayment?: () => void;
}

const KModalConfirmContainer = styled(ModalConfirmContainer)`
  & p {
    display: flex;
    flex-direction: column;
    text-align: left;

    & span {
      font-size: inherit;
      &.notice {
        margin-top: 1em;
        padding: 0.8em 1em;
        background-color: ${({ theme }) => theme.secondaryColor};
        color: ${({ theme }) => theme.onSecondaryColor};
        font-weight: bold;
      }
    }

    & strong {
      color: ${({ theme }) => theme.secondaryColor};
      font-size: 1.1em;
    }
  }
`;

const ModalPaymentConfirmOtp = (props: ModalConfirmProps) => {
  const { setAuth } = useAuthenticate();
  const controller = useModals();

  const closeButton = () => {
    controller.close(props.id);
  };
  const confirm = async () => {
    await confirmPayment(parseId(props.beneficiary), props.otp, props.billId)
      .then((res) => {
        setAuth((auth) => {
          if (!auth.currentUser) return auth;
          const user = auth.currentUser;
          return {
            ...auth,
            currentUser: {
              ...user,
              amount: user.amount - props.totalBill,
            },
          };
        });
        toast.success(res.message, {
          position: "top-center",
        });
        props.onSuccessPayment && props.onSuccessPayment();
      })
      .catch((error) => {
        toast.error(error?.message ?? "Unknown error", {
          position: "top-center",
          pauseOnFocusLoss: false,
          pauseOnHover: false,
        });
        if ((error?.code ?? 400) === 402) {
          props.onErrorPayment && props.onErrorPayment();
        }
      })
      .finally(closeButton);
  };

  return (
    <KModalConfirmContainer>
      <p>
        <span>
          Payer: <strong>{parseName(props.beneficiary.name)}</strong>
        </span>
        <span>
          Beneficiary: <strong>{parseName(props.beneficiary.name)}</strong>
        </span>
        <span>
          Total bill: <strong>{praseMoney(props.totalBill)}</strong>
        </span>
        <span className='notice'>* Are you sure to pay this bill?</span>
      </p>
      <div className='row'>
        <div className='row'>
          <ButtonText
            type='submit'
            color='#212121'
            textColor='#cacaca'
            width='fit-content'
            text='Confirm'
            onClick={confirm}
          />
          <ButtonText
            color='#aa0000'
            textColor='#cacaca'
            width='fit-content'
            text='Back'
            onClick={closeButton}
          />
        </div>
      </div>
    </KModalConfirmContainer>
  );
};

export default ModalPaymentConfirmOtp;
