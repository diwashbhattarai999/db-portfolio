import CardWrapper from "@/components/auth/card-wrapper";
import MotionDiv from "@/components/motion-div";

const AboutForm = () => {
  return (
    <MotionDiv delayOffset={0.1} className="w-full">
      <CardWrapper
        headerLabel="About"
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
