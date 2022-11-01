import Spacing from "@components/Spacing";
import useBreakpoint from "@hooks/useBreakpoint";
import { Fragment, useState } from "react";
import {
  FormTitle,
  FormRow,
  FormColumn,
} from "../../../styles/decorates/form.decorate";
import BeneficiaryInfo from "./components/BeneficiaryInfo";
import BillItem from "./components/BillItem";
import BillItemEmpty from "./components/BillItemEmpty";
import FormPaymentConfirm from "./components/FormPaymentConfirm";
import FormPaymentTerm from "./components/FormPaymentTerm";

const FormPaymentInformation = () => {
  const [bill, setBill] = useState<Bill>();
  const breakpoint = useBreakpoint();
  const largeScreenBuild = (
    <FormRow>
      <FormColumn className='flex__3'>
        <FormTitle>Beneficiary information</FormTitle>
        <BeneficiaryInfo onSelectedBill={setBill} />
        <Spacing.Vertical />
        <FormRow>
          <FormColumn className='flex__1'>
            <FormPaymentTerm />
          </FormColumn>
          <FormColumn className='flex__2 flex__end'>
            <FormPaymentConfirm bill={bill} />
          </FormColumn>
        </FormRow>
      </FormColumn>
      <FormColumn className='flex__4'>
        {!bill && <BillItemEmpty />}
        {bill && <BillItem bill={bill} />}
      </FormColumn>
    </FormRow>
  );

  const smallScreensBuild = (
    <FormColumn>
      <FormTitle>Beneficiary information</FormTitle>
      <BeneficiaryInfo onSelectedBill={setBill} />
      <Spacing.Vertical />
      <FormColumn>
        {!bill && <BillItemEmpty />}
        {bill && <BillItem bill={bill} />}
      </FormColumn>
      <FormRow>
        <FormColumn className='flex__2'>
          <FormPaymentTerm />
        </FormColumn>
        <FormColumn className='flex__1 flex__end'>
          <FormPaymentConfirm bill={bill} />
        </FormColumn>
      </FormRow>
    </FormColumn>
  );
  return (
    <Fragment>
      {breakpoint.up("tablet") ? largeScreenBuild : smallScreensBuild}
    </Fragment>
  );
};

export default FormPaymentInformation;
