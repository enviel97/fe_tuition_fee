import styled from "styled-components";
import emptyDocument from "@assets/images/empty-document.png";
import { Navigate, useAsyncError } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";
import useBreakpoint from "@hooks/useBreakpoint";
import useAuthenticate from "@hooks/useAuthenticate";

const EmptyContainer = styled.div`
  height: 90vh;
  color: ${({ theme }) => theme.disableColor};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  & .img {
    height: 24vh;
    user-select: none;
  }
`;

const Empty = () => {
  const error: any = useAsyncError();
  const breakpoint = useBreakpoint();
  const { setIsAuthenticate } = useAuthenticate();
  useEffect(() => {
    if (!error) return;
    if (error && error.code === 401) {
      setIsAuthenticate(false);
      <Navigate to={"auth"} replace />;
      return;
    }
    toast.error(`${error?.message ?? "Unknown error"}`, {
      position: "top-center",
    });
    // eslint-disable-next-line
  }, [error]);

  return (
    <tbody>
      <tr>
        <td colSpan={breakpoint.up("tablet") ? 6 : 3}>
          <EmptyContainer>
            <h5>YO! You don't have any transaction</h5>
            <div className='img'>
              <img
                src={emptyDocument}
                alt='Transaction history not found'
                loading='lazy'
              />
            </div>
          </EmptyContainer>
        </td>
      </tr>
    </tbody>
  );
};

export default Empty;
