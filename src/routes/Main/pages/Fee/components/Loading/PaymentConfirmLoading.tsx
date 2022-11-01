import CircleLoading from "@components/Loading/CircleLoading";
import LoadingType from "@components/Loading/LoadingType";
import { ModalContainer } from "../../styles/decorates/modal.decorates";

const PaymentConfirmLoading = () => {
  return (
    <ModalContainer>
      <div className='loading'>
        <CircleLoading />
      </div>
      <div className='typing'>
        <LoadingType text='payment...' />
      </div>
    </ModalContainer>
  );
};

export default PaymentConfirmLoading;
