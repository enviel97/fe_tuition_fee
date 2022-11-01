import { BillCard } from "@routes/Main/pages/Home/components/Bills/styles/decorates/bill.decorate";
import styled from "styled-components";

export const BillItemEmptyContainer = styled(BillCard)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 31.875rem;
  color: ${({ theme }) => theme.disableColor};
  font-weight: bold;
`;

const BillItemEmpty = () => {
  return (
    <BillItemEmptyContainer>
      <h5 className='decorate notice'>Empty bill</h5>
    </BillItemEmptyContainer>
  );
};

export default BillItemEmpty;
