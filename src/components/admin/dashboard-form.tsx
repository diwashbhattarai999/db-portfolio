import CardWrapper from "@/components/ui/card-wrapper";
import MotionDiv from "@/components/motion-div";
import { LayoutDashboard } from "lucide-react";

const DashboardForm = () => {
  return (
    <MotionDiv delayOffset={0.1} className="w-full">
      <CardWrapper
        headerLabel="Dashboard"
        HeaderIcon={LayoutDashboard}
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
