import Link from "next/link";
import Button from "@/components/ui/Button";
import MotionDiv from "../motion-div";

interface ErrorCardProps {
  backButtonLabel: string;
  backButtonHref: string;
}

const ErrorCard = ({ backButtonHref, backButtonLabel }: ErrorCardProps) => {
  return (
    <section className="flex h-[calc(100vh_-_90px)] w-full flex-col items-center justify-center gap-4">
      <MotionDiv delayOffset={0}>
        <h2 className="text-4xl">Oops! Something went wrong!</h2>
      </MotionDiv>
      <MotionDiv delayOffset={0.1}>
        <p>Could not find requested resource</p>
      </MotionDiv>
      <MotionDiv delayOffset={0.2}>
        <Link href={backButtonHref}>
          <Button>{backButtonLabel}</Button>
        </Link>
      </MotionDiv>
    </section>
  );
};

export default ErrorCard;
