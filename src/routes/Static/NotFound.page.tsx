import { Navigate, useRouteError } from "react-router-dom";
import styled from "styled-components";

const NotFoundContainer = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  & h1 {
    color: ${({ theme }) => theme.secondaryColor};
    font-weight: bold;
  }

  & p {
    font-family: "Source Code Pro", monospace;
    font-size: 2.125rem;

    & i {
      font-size: 2.125rem;
      font-weight: 100;
      text-transform: uppercase;
      color: ${({ theme }) => theme.disableColor};
    }
  }
`;

const NotFound = () => {
  const error: any = useRouteError();

  if (error && error.status === 401) {
    return <Navigate to={"auth"} />;
  }
  let message = error.statusText || error.message || "404 Not Found";

  if (error instanceof TypeError) {
    message = "Client error";
  }

  return (
    <NotFoundContainer id='error-page' className='f-center f-column'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{message}</i>
      </p>
    </NotFoundContainer>
  );
};

export default NotFound;
