import { TextFieldNeumorphism } from "@components/TextInput";
import { praseMoney } from "@helpers/string";
import useAuthenticate from "@hooks/useAuthenticate";
import { Fragment } from "react";
import { FormRow, FormTitle } from "../../styles/decorates/form.decorate";
import InformationConfirmLoading from "../Loading/InformationConfirmLoading";

export const FORM_INFORMATION_CONFIRM = "form-information-confirm";

const FormInformationConfirm = () => {
  const { auth } = useAuthenticate();
  if (!auth?.currentUser) {
    return <InformationConfirmLoading />;
  }

  const currentUser = auth.currentUser;

  return (
    <Fragment>
      <FormTitle>User Information</FormTitle>
      <TextFieldNeumorphism
        readOnly
        label='ID'
        initValue={currentUser.friendlyId}
      />
      <FormRow>
        <TextFieldNeumorphism
          className='flex__1'
          label='First Name'
          readOnly
          initValue={currentUser.name.firstname}
        />
        <TextFieldNeumorphism
          className='flex__2'
          label='Last Name'
          readOnly
          initValue={currentUser.name.lastname}
        />
      </FormRow>

      <FormRow>
        <TextFieldNeumorphism
          className='flex__3'
          label='Email'
          readOnly
          initValue={currentUser.email}
        />
        <TextFieldNeumorphism
          className='flex__2'
          label='Available Balance'
          readOnly
          initValue={praseMoney(currentUser.amount)}
        />
      </FormRow>
    </Fragment>
  );
};

export default FormInformationConfirm;
