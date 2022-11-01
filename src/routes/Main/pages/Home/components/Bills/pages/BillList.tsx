import Divider from "@components/Divider";
import { parseDate, praseMoney } from "@helpers/string";
import { useMemo } from "react";
import {
  BillCard,
  BillListContainer,
  CardHeader,
  CardStatus,
  CardSubjects,
  CardSubjectsFooter,
  CardSubjectsMore,
} from "../styles/decorates/bill.decorate";

import { CgMore } from "react-icons/cg";
import { fadeInOut } from "@common/variants";
import { billItemAnimate } from "../styles/variants/bill.variant";

interface BillListProps {
  bills: Bill[];
}

interface BillItemProps {
  bill: Bill;
}

export const BillItem = (props: BillItemProps) => {
  const { bill } = props;

  const { subjects, total } = useMemo(
    () => ({
      subjects: bill.subjects.sort((a, b) => b.money - a.money).slice(0, 3),
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
            <p key={`${index}-${subj.name}`} className='subjects-row'>
              <span>{subj.name}</span>
              <strong>{praseMoney(subj.money)}</strong>
            </p>
          );
        })}
        {bill.subjects.length > 3 && (
          <CardSubjectsMore>
            <CgMore className='icon' />
            More <span>{bill.subjects.length - 3}+</span>
            <CgMore className='icon' />
          </CardSubjectsMore>
        )}
      </CardSubjects>

      <Divider label='~' />
      <CardSubjectsFooter>
        <span>
          Total: <strong>{praseMoney(total)}</strong>
        </span>
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

const BillList = (props: BillListProps) => {
  const { bills } = props;
  return (
    <BillListContainer variants={billItemAnimate}>
      {bills.map((bill) => (
        <BillItem key={bill.id ?? bill._id} bill={bill} />
      ))}
    </BillListContainer>
  );
};

export default BillList;
