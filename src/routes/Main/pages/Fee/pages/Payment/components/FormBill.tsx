import { parseDate, parseName } from "@helpers/string";
import useBreakpoint from "@hooks/useBreakpoint";
import { useAsyncValue } from "react-router-dom";
import {
  FormColumn,
  FormContainer,
  FormRow,
  FormTitle,
} from "../../../styles/decorates/form.decorate";
import LabelText from "./LabelText";
import SubjectTable from "./SubjectTable";

const FormBill = () => {
  const response: any = useAsyncValue();
  const bill: Bill = response.data;
  const beneficiary = bill.to as User;
  const breakPoint = useBreakpoint();
  return (
    <FormContainer>
      {breakPoint.down("mobile") ? (
        <>
          <FormColumn className='flex__1'>
            <FormTitle>Beneficiary</FormTitle>
            <LabelText label='Name' value={parseName(beneficiary.name)} />
            <LabelText label='email' value={beneficiary.email} />
          </FormColumn>
          <FormColumn className='flex__1'>
            <FormTitle>Bill Info</FormTitle>
            <LabelText label='Name' value={bill.name} />
            <LabelText
              className='notification'
              label='Expired date'
              value={parseDate(bill.expiredDate)}
            />
          </FormColumn>
        </>
      ) : (
        <FormRow>
          <FormColumn className='flex__1'>
            <FormTitle>Beneficiary</FormTitle>
            <LabelText label='Name' value={parseName(beneficiary.name)} />
            <LabelText label='email' value={beneficiary.email} />
          </FormColumn>
          <FormColumn className='flex__1'>
            <FormTitle>Bill Info</FormTitle>
            <LabelText label='Name' value={bill.name} />
            <LabelText
              className='notification'
              label='Expired date'
              value={parseDate(bill.expiredDate)}
            />
          </FormColumn>
        </FormRow>
      )}
      <FormTitle>Subjects</FormTitle>
      <LabelText
        label='Creator'
        value={`${bill.from.staff} - ${bill.from.position}`}
      />
      <SubjectTable data={bill.subjects} />
    </FormContainer>
  );
};

export default FormBill;
