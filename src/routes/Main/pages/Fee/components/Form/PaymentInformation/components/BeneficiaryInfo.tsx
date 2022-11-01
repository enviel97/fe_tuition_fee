import { ButtonIconNeumorphism } from "@components/Button";
import Dropdown from "@components/Dropdown";
import { ItemProp } from "@components/Dropdown/type/base";
import { TextFieldNeumorphism } from "@components/TextInput";
import { parseName } from "@helpers/string";
import { FormRow } from "@routes/Main/pages/Fee/styles/decorates/form.decorate";
import { getBills } from "@routes/Main/pages/Home/components/Bills/repos/bill.repo";
import { RiUserSearchFill } from "react-icons/ri";
import { Fragment, useRef, useState } from "react";
import { useForm } from "react-hook-form";

interface FormValue {
  id: string;
}

interface BeneficiaryInfoProps {
  onSelectedBill: (bill?: Bill) => void;
  accountId?: string;
}

const BeneficiaryInfo = (props: BeneficiaryInfoProps) => {
  const errorMess = useRef<string>();
  const [beneficiary, setBeneficiary] = useState<User>();
  const listBill = useRef<Bill[]>([]);
  const itemDropdown = useRef<ItemProp[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>({});

  const resetForm = (error: any) => {
    errorMess.current = error.message ?? "Unknown error";
    setBeneficiary(undefined);
    listBill.current = [];
    itemDropdown.current = [];
    props.onSelectedBill(undefined);
  };

  const confirmForm = (res: { code: number; message: any; data: any }) => {
    errorMess.current = "";
    setBeneficiary(res.data.user);
    const bills = res.data?.bills ?? [];
    listBill.current = bills;
    itemDropdown.current = bills.map((value: any) => ({
      name: value.name,
      value: value._id,
    }));
  };

  const onSubmitted = async (data: FormValue) => {
    await getBills({ friendlyId: data.id }).then(confirmForm).catch(resetForm);
  };

  return (
    <Fragment>
      <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmitted)}>
        <FormRow className='center'>
          <TextFieldNeumorphism
            label='Id'
            register={register("id", {
              required: "Please enter id",
              minLength: {
                value: 12,
                message: "Id must equal 12 character",
              },
            })}
            errorMess={errors.id?.message || errorMess.current}
          />
          <ButtonIconNeumorphism
            type='submit'
            icon={<RiUserSearchFill size={24} />}
          />
        </FormRow>
      </form>
      <TextFieldNeumorphism
        label='Name'
        initValue={parseName(beneficiary?.name)}
        placeholder='Name of beneficiary'
        readOnly
      />
      <TextFieldNeumorphism
        label='Email'
        initValue={beneficiary?.email ?? "No email"}
        placeholder='Name of beneficiary'
        readOnly
      />
      <Dropdown
        initialValue={0}
        disabled={listBill.current.length === 0}
        data={itemDropdown.current}
        placeholder='Select bill'
        onSelected={(item) => {
          const bill = listBill.current.find((bill) => bill._id === item.value);
          if (!!bill) props.onSelectedBill(bill);
        }}
      />
    </Fragment>
  );
};

export default BeneficiaryInfo;
