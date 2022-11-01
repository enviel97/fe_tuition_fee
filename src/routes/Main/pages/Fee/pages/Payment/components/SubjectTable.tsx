import Divider from "@components/Divider";
import { parseDate, praseMoney } from "@helpers/string";
import useBreakpoint from "@hooks/useBreakpoint";
import { useMemo } from "react";
import { PaymentRow } from "../../../styles/decorates/FormPaymentLoading.decorate";
import {
  Table,
  TableContainer,
  TablePaymentContainer,
} from "../styles/Table.decorate";

interface SubjectTableProps {
  data: Subject[];
}

const SubjectTable = (props: SubjectTableProps) => {
  const { data } = props;
  const breakPoint = useBreakpoint();
  const billPayment = useMemo(() => {
    const money = data.reduce((sum, current) => sum + current.money, 0) ?? 0;
    return {
      fee: money,
      service: money * 0.001,
      total: money * 1.001,
    };
  }, [data]);

  return (
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
          {data.map((row, index) => {
            return (
              <tr key={row._id ?? row.id}>
                <th scope='row'>{index + 1}</th>
                <td>{row.name}</td>
                <td>
                  {row.credits} {!breakPoint.down("mobile") ? "point" : "p"}
                </td>
                <td>{praseMoney(row.money)}</td>

                {!breakPoint.down("mobile") && (
                  <td>{parseDate(row.createdAt)}</td>
                )}
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Divider />
      <TablePaymentContainer>
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
      </TablePaymentContainer>
    </TableContainer>
  );
};

export default SubjectTable;
