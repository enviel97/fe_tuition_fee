import { forwardRef, memo, useEffect, useImperativeHandle } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import { TimerCountdownContainer } from "./decorates/styles";
import useCountDown from "./hooks/useCountDown";

export interface TimerCountdownController {
  reset: () => void;
}

interface TimerCountDownProps {
  size?: string;
  limit?: number;
  onTimeUp?: () => void;
}

const oneTimeCall = (callback: () => void) => {
  let executed = false;
  if (!executed) {
    callback();
    executed = true;
  }
};

const TimerCountdown = forwardRef<
  TimerCountdownController,
  TimerCountDownProps
>((props, ref) => {
  const { size = "5rem", limit = 10, onTimeUp } = props;
  const { tick, reset } = useCountDown(limit);

  useEffect(() => {
    if (tick === 0 && !!onTimeUp) {
      oneTimeCall(onTimeUp);
    }
    // eslint-disable-next-line
  }, [tick]);

  useImperativeHandle(
    ref,
    () => ({
      reset: reset,
    }),
    [reset]
  );

  return (
    <TimerCountdownContainer size={size}>
      <CircularProgressbar
        value={(tick / limit) * 100}
        text={`${tick}s`}
        strokeWidth={10}
      />
    </TimerCountdownContainer>
  );
});

export default memo(TimerCountdown);
