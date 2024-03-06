import CardWrapper from "@/components/auth/card-wrapper";
import MotionDiv from "@/components/motion-div";

const ContactForm = () => {
  return (
    <MotionDiv delayOffset={0.1} className="w-full">
      <CardWrapper
        headerLabel="Contact"
        subHeaderLabel="Change your Contact details"
        // disabled={isPending}
        maxWidthFull
        className="my-20"
      >
        Contact Form
      </CardWrapper>
    </MotionDiv>
  );
};

export default ContactForm;
