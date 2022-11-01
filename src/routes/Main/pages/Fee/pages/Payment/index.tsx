import Divider from "@components/Divider";
import { AnimatePresence } from "framer-motion";
import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import FormInformationConfirm from "../../components/Form/InformationConfirm";
import { FeeContainer } from "../../styles/decorates/fee.decorates";
import {
  FormContainer,
  FormNotification,
  FormRow,
} from "../../styles/decorates/form.decorate";
import FormBill from "./components/FormBill";
import FormConfirm from "./components/FormConfirm";
import FormPaymentConfirmLoading from "./components/FormLoading";

const PaymentPage = () => {
  const data: any = useLoaderData();
  return (
    <AnimatePresence mode='wait'>
      <FeeContainer>
        <FormNotification>
          * Please check all information before confirming payment
          <br />* If you don't confirm within 5 minutes, this payment will
          automatically decline
        </FormNotification>
        <FormContainer>
          <FormInformationConfirm />
        </FormContainer>
        <Divider label='Bill' />
        <Suspense fallback={<FormPaymentConfirmLoading />}>
          <Await resolve={data.bill}>
            <FormBill />
          </Await>
          <Await resolve={data.bill}>
            <FormRow className='end'>
              <FormConfirm />
            </FormRow>
          </Await>
        </Suspense>
      </FeeContainer>
    </AnimatePresence>
  );
};

export default PaymentPage;
