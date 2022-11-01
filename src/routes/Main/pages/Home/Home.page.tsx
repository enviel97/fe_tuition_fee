import styled from "styled-components";
import Bills from "./components/Bills";

const HomePageContainer = styled.div`
  height: 100%;
  width: 100%;
  align-items: center;
  flex-direction: column;
  display: flex;
`;

const HomePage = () => {
  return (
    <HomePageContainer>
      <Bills />
    </HomePageContainer>
  );
};

export default HomePage;
