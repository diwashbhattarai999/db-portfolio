import CardWrapper from "@/components/auth/card-wrapper";
import MotionDiv from "@/components/motion-div";

const DashboardForm = () => {
  return (
    <MotionDiv delayOffset={0.1} className="w-full">
      <CardWrapper
        headerLabel="Dashboard"
        subHeaderLabel="Change your Dashboard Page Contents"
        // disabled={isPending}
        maxWidthFull
        className="my-20"
      >
        Dashboard Form
      </CardWrapper>
    </MotionDiv>
  );
};

export default DashboardForm;
