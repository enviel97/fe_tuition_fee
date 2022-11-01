import { LabelTextContainer } from "../styles/LabelText.decorate";

interface LabelTextProps {
  className?: string;
  label: string;
  value: string;
}

const LabelText = (props: LabelTextProps) => {
  const { className, label, value } = props;

  return (
    <LabelTextContainer className={className}>
      <label>{label}:</label>
      <span>{value}</span>
    </LabelTextContainer>
  );
};

export default LabelText;
