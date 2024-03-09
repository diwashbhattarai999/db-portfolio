import CardWrapper from "@/components/ui/card-wrapper";
import MotionDiv from "@/components/motion-div";
import { CircleUserRound } from "lucide-react";

const AboutForm = () => {
  return (
    <MotionDiv delayOffset={0.1} className="w-full">
      <CardWrapper
        headerLabel="About"
        HeaderIcon={CircleUserRound}
        subHeaderLabel="Change your About Page Contents"
        // disabled={isPending}
        maxWidthFull
        className="my-20"
      >
        About Form
      </CardWrapper>
    </MotionDiv>
  );
};

export default AboutForm;
