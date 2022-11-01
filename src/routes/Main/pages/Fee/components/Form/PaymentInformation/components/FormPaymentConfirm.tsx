import { ButtonTextNeumorphism } from "@components/Button";
import Divider from "@components/Divider";
import { useModals } from "@components/Modal/hooks/useModals";
import { praseMoney, parseId } from "@helpers/string";
import { PaymentRow } from "@routes/Main/pages/Fee/styles/decorates/FormPaymentLoading.decorate";
import { verifyPayment } from "@routes/Main/pages/Fee/repo/payment";
import { Fragment, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import PaymentConfirmLoading from "../../../Loading/PaymentConfirmLoading";

interface FormPaymentConfirmProps {
  bill?: Bill;
}

const FormPaymentConfirm = (props: FormPaymentConfirmProps) => {
  const { bill } = props;
  const modal = useModals();
  const navigate = useNavigate();

  const billPayment = useMemo(() => {
    const money =
      bill?.subjects.reduce((sum, current) => sum + current.money, 0) ?? 0;
    return {
      fee: money,
      service: money * 0.001,
      total: money * 1.001,
    };
  }, [bill]);

  const onPaymentConfirm = async () => {
    const id = "payment_pending";
    if (!bill) {
      toast.error("Missing bill data !!", { position: "top-center" });
      return;
    }
    modal.show(<PaymentConfirmLoading />, {
      height: "100px",
      width: "650px",
      key: id,
      isDialog: true,
      showCloseButton: false,
    });

    await verifyPayment(parseId(bill?.to), parseId(bill))
      .then((res) => {
        toast.success(res.message, { position: "top-center" });
        navigate(`payment/${bill.id ?? bill._id}`, {
          state: { bill: bill },
        });
      })
      .catch((error) => {
        toast.error(error.message ?? "Unknown error", {
          position: "top-center",
        });
      })
      .finally(() => modal.close(id));
  };

  return (
    <Fragment>
      <Divider label='Payment info' />
      <PaymentRow>
        <span>Tuition Fee:</span>
        <strong>{praseMoney(billPayment.fee)}</strong>
      </PaymentRow>
      <PaymentRow>
        <span>Service:</span>
        <strong>{praseMoney(billPayment.service)}</strong>
      </PaymentRow>
      <PaymentRow>
        <span>Total:</span>
        <strong>{praseMoney(billPayment.total)}</strong>
      </PaymentRow>

      <ButtonTextNeumorphism
        text='Payment'
        width='50%'
        onClick={onPaymentConfirm}
        disabled={!bill || bill.status !== "debt"}
      />
    </Fragment>
  );
};

export default FormPaymentConfirm;
