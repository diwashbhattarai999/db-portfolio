import CardWrapper from "@/components/auth/card-wrapper";
import MotionDiv from "@/components/motion-div";

const ProjectsForm = () => {
  return (
    <MotionDiv delayOffset={0.1} className="w-full">
      <CardWrapper
        headerLabel="Projects"
        subHeaderLabel="Change your Projects Page Contents"
        // disabled={isPending}
        maxWidthFull
        className="my-20"
      >
        Projects Form
      </CardWrapper>
    </MotionDiv>
  );
};

export default ProjectsForm;
