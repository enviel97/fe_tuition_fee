import styled from "styled-components";
import emptyDocument from "@assets/images/empty-document.png";

const EmptyContainer = styled.div`
  height: 100%;
  color: ${({ theme }) => theme.disableColor};
  display: flex;
  flex-direction: column;
  & .img {
    height: 24vh;
    user-select: none;
  }
`;

const Empty = () => {
  return (
    <EmptyContainer className='f-center'>
      <h5>YO! You don't have any bills in this semester</h5>
      <div className='img'>
        <img src={emptyDocument} alt='Bill not found' loading='lazy' />
      </div>
    </EmptyContainer>
  );
};

export default Empty;
