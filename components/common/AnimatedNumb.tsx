import { useEffect, useState } from "react";
import CountUp from "react-countup";

interface AnimatedNumbProps {
  endValue: number;
}
const AnimatedNumb: React.FC<AnimatedNumbProps> = ({ endValue }) => {
  const [startAnimation, setStartAnimation] = useState(false);
  useEffect(() => {
    setStartAnimation(true);
  }, []);

  return (
    <CountUp
      start={startAnimation ? 0 : undefined}
      end={endValue}
      duration={3}
      decimals={0}
    />
  );
};

export default AnimatedNumb;
