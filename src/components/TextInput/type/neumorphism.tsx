import { AnimatePresence } from "framer-motion";
import { Neumorphism, Error } from "../decorate/neumorphism";
import BaseTextField from "./base";
import { fadeInOut } from "@common/variants";
import { TbInfoCircle } from "react-icons/tb";
import { memo } from "react";

const TextFieldNeumorphism = (props: TextFieldProps) => {
  const {
    height = "fit-content",
    width = "100%",
    className,
    label,
    errorMess,
    ...prop
  } = props;
  const identity = label ?? props.register?.name ?? "Label";
  return (
    <Neumorphism className={className} height={height} width={width}>
      <BaseTextField className='base' label={label} {...prop} />

      <AnimatePresence>
        {errorMess && (
          <Error
            role='alert'
            variants={fadeInOut}
            initial='out'
            animate='in'
            exit='out'
            transition={{ type: "spring", damping: 10, stiffness: 100 }}
          >
            <TbInfoCircle key={`${identity}-ico`} strokeWidth={"2px"} />
            <small key={`${identity}-notice`} className='mess'>
              {errorMess}
            </small>
          </Error>
        )}
      </AnimatePresence>
    </Neumorphism>
  );
};

export default memo(TextFieldNeumorphism);
