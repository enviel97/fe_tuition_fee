import { pxToRem } from "@helpers/cast";
import useBreakpoint from "@hooks/useBreakpoint";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import {
  FormColumn,
  FormContainer,
  FormRow,
  FormTitle,
} from "../../../styles/decorates/form.decorate";
import { Table, TableContainer } from "../styles/Table.decorate";

const FormPaymentConfirmLoading = () => {
  const breakPoint = useBreakpoint();
  return (
    <SkeletonTheme
      baseColor='#121212'
      highlightColor='#212121'
      height={pxToRem(32)}
    >
      <FormContainer>
        {breakPoint.down("mobile") ? (
          <>
            <FormColumn className='flex__1'>
              <FormTitle>Beneficiary</FormTitle>
              <Skeleton />
              <Skeleton />
            </FormColumn>
            <FormColumn className='flex__1'>
              <FormTitle>Bill Info</FormTitle>
              <Skeleton />
              <Skeleton />
            </FormColumn>
          </>
        ) : (
          <FormRow>
            <FormColumn className='flex__1'>
              <FormTitle>Beneficiary</FormTitle>
              <Skeleton />
              <Skeleton />
            </FormColumn>
            <FormColumn className='flex__1'>
              <FormTitle>Bill Info</FormTitle>
              <Skeleton />
              <Skeleton />
            </FormColumn>
          </FormRow>
        )}
        <FormTitle>Subjects</FormTitle>
        <Skeleton />
        <TableContainer>
          <Table className='table'>
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Name</th>
                <th scope='col'>Credits</th>
                <th scope='col'>Money</th>
                {!breakPoint.down("mobile") && <th scope='col'>Add at</th>}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={8}>
                  <Skeleton count={6} />
                </td>
              </tr>
            </tbody>
          </Table>
        </TableContainer>
      </FormContainer>
    </SkeletonTheme>
  );
};
export default FormPaymentConfirmLoading;
