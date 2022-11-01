import Divider from "@components/Divider";
import { parseDate, praseMoney } from "@helpers/string";
import { useMemo } from "react";
import { fadeInOut } from "@common/variants";
import {
  BillCard,
  CardHeader,
  CardStatus,
  CardSubjects,
  CardSubjectsFooter,
} from "@routes/Main/pages/Home/components/Bills/styles/decorates/bill.decorate";

interface BillItemProps {
  bill: Bill;
}

const BillItem = (props: BillItemProps) => {
  const { bill } = props;

  const { subjects } = useMemo(
    () => ({
      subjects: bill.subjects.sort((a, b) => b.money - a.money),
      total: bill.subjects.reduce((sum, value) => sum + value.money, 0),
    }),
    [bill.subjects]
  );

  return (
    <BillCard variants={fadeInOut}>
      <CardHeader>
        <h5 className='header-title'>{bill.name}</h5>
        <p className='header-subtitle'>
          {bill.from.name} - {bill.from.position}
        </p>
      </CardHeader>
      <Divider label='Subjects' />
      <CardSubjects>
        {subjects.map((subj, index) => {
          return (
            <span key={`${index}-${subj.name}`} className='subjects-row'>
              <span className='f-4'>{subj.name}</span>
              <span className='text-right f-1'>{subj.credits}p</span>
              <strong>{praseMoney(subj.money)}</strong>
            </span>
          );
        })}
      </CardSubjects>

      <Divider label='~' />
      <CardSubjectsFooter>
        <span>Expired date</span>
        {bill.status !== "paid" ? (
          <span className='expired'>{`* ${parseDate(bill.expiredDate)}`}</span>
        ) : (
          <span>&nbsp;</span>
        )}
      </CardSubjectsFooter>
      <CardStatus className={`${bill.status}`}>
        <span>{bill.status}</span>
      </CardStatus>
    </BillCard>
  );
};

export default BillItem;
