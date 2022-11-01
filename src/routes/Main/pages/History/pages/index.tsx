import Divider from "@components/Divider";
import useBreakpoint from "@hooks/useBreakpoint";
import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import { TablePaymentContainer } from "../../Fee/pages/Payment/styles/Table.decorate";
import Empty from "../components/Empty";
import TransactionLoading from "../components/TransactionLoading";
import TransactionTable from "../components/TransactionTable";
import { HistoryContainer } from "../styles/decorate/history.decorate";
import { TableContainer, Table } from "../styles/decorate/table.decorate";

const HistoryPage = () => {
  const history = useLoaderData();

  const breakpoint = useBreakpoint();
  return (
    <HistoryContainer>
      <h5>Transaction history</h5>
      <TableContainer>
        <Table className='table'>
          <thead>
            <tr>
              <th scope='col'>Datetime</th>
              <th scope='col'>Content</th>
              <th scope='col'>Status</th>
              {breakpoint.up("tablet") && (
                <>
                  <th scope='col'>Creator</th>
                  <th scope='col'>Destination</th>
                </>
              )}
            </tr>
          </thead>
          <Suspense fallback={<TransactionLoading />}>
            <Await
              resolve={(history as any).transactions}
              errorElement={<Empty />}
            >
              {(transaction) => {
                return transaction.data?.length === 0 ? (
                  <Empty />
                ) : (
                  <TransactionTable data={transaction.data} />
                );
              }}
            </Await>
          </Suspense>
        </Table>
        <Divider />
        <TablePaymentContainer />
      </TableContainer>
    </HistoryContainer>
  );
};

export default HistoryPage;
