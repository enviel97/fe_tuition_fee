import { praseFullDateTime } from "@helpers/string";
import useBreakpoint from "@hooks/useBreakpoint";
import { motion } from "framer-motion";
import { praseTransactionName } from "../helper/string";
import { TBodyAnimation, TrAnimation } from "../styles/variants/tabe.variants";

interface TransactionTableProps {
  data: Transaction[];
}

const TransactionTable = (props: TransactionTableProps) => {
  const { data } = props;
  const breakpoint = useBreakpoint();
  return (
    <>
      <motion.tbody variants={TBodyAnimation} initial='hidden' animate='show'>
        {data.map((row) => {
          const { date, time } = praseFullDateTime(row.createdAt, {
            isSorted: breakpoint.down("tablet"),
          });
          return (
            <motion.tr key={row._id ?? row.id} variants={TrAnimation}>
              <th scope='row'>
                {date}
                <br />
                {time}
              </th>
              <td className='content'>{row.content}</td>
              <td className={row.status}>{row.status}</td>
              {breakpoint.up("tablet") && (
                <>
                  <td>{praseTransactionName(row.payer)}</td>
                  <td>
                    <strong>{`${row.receiverType}: `}</strong>
                    {praseTransactionName(row.receiver)}
                  </td>
                </>
              )}
            </motion.tr>
          );
        })}
      </motion.tbody>
    </>
  );
};
export default TransactionTable;
