import CardWrapper from "@/components/auth/card-wrapper";
import MotionDiv from "@/components/motion-div";

const HomeForm = () => {
  return (
    <MotionDiv delayOffset={0.1} className="w-full">
      <CardWrapper
        headerLabel="Home"
        subHeaderLabel="Change your Home Page Contents"
        // disabled={isPending}
        maxWidthFull
        className="my-20"
      >
        Home Form
      </CardWrapper>
    </MotionDiv>
  );
};

export default HomeForm;
