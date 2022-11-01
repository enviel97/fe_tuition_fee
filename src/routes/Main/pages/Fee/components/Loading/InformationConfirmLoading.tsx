import { pxToRem } from "@helpers/cast";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import {
  FormContainer,
  FormRow,
  FormTitle,
} from "../../styles/decorates/form.decorate";

const InformationConfirmLoading = () => {
  return (
    <SkeletonTheme
      highlightColor='#121212'
      baseColor='#212121'
      height={pxToRem(44.4)}
    >
      <FormContainer>
        <FormTitle>User Information</FormTitle>
        <FormRow>
          <div>
            <Skeleton />
          </div>
          <div>
            <Skeleton />
          </div>
        </FormRow>
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </FormContainer>
    </SkeletonTheme>
  );
};

export default InformationConfirmLoading;
