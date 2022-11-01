import { Cube, LoaderContainer } from "./styles";

const CircleLoading = () => {
  return (
    <LoaderContainer>
      {Array.from({ length: 3 }, (_, index) => (
        <Cube key={index} datataget={index} />
      ))}
    </LoaderContainer>
  );
};

export default CircleLoading;
