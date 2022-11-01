import Divider from "@components/Divider";
import { AnimatePresence } from "framer-motion";
import FormInformationConfirm from "../components/Form/InformationConfirm";
import FormPaymentInformation from "../components/Form/PaymentInformation";
import { FeeContainer } from "../styles/decorates/fee.decorates";
import { FormContainer } from "../styles/decorates/form.decorate";
import {
  FeeUserConfirm,
  FeePaymentConfirm,
} from "../styles/variants/fee.variants";

const FeePage = () => {
  return (
    <AnimatePresence mode='wait'>
      <FeeContainer>
        <FormContainer
          key={1}
          variants={FeeUserConfirm}
          initial='default'
          animate='fadeIn'
        >
          <FormInformationConfirm />
        </FormContainer>
        <Divider label='Bill' />
        <FormContainer
          key={2}
          variants={FeePaymentConfirm}
          initial='default'
          animate='fadeIn'
        >
          <FormPaymentInformation />
        </FormContainer>
      </FeeContainer>
    </AnimatePresence>
  );
};

export default FeePage;
