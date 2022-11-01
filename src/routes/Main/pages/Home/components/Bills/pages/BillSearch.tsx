import { TextFieldSearchNeumorphism } from "@components/TextInput";
import styled from "styled-components";

const BillSearchContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
`;

const BillsSearch = () => {
  const onSearch = (search?: string) => {
    alert(search);
  };

  return (
    <BillSearchContainer>
      <TextFieldSearchNeumorphism onSearch={onSearch} />
    </BillSearchContainer>
  );
};

export default BillsSearch;
