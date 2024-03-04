import Link from "next/link";
import Button from "@/components/ui/button";

interface ErrorCardProps {
  backButtonLabel: string;
  backButtonHref: string;
}

const ErrorCard = ({ backButtonHref, backButtonLabel }: ErrorCardProps) => {
  return (
    <section className="flex h-[calc(100vh_-_90px)] w-full flex-col items-center justify-center gap-4">
      <h2 className="text-4xl">Oops! Something went wrong!</h2>
      <p>Could not find requested resource</p>
      <Link href={backButtonHref}>
        <Button>{backButtonLabel}</Button>
      </Link>
    </section>
  );
};

export default ErrorCard;
