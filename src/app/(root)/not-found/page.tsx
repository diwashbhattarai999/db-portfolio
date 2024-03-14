import { Metadata } from "next";

import ErrorCard from "@/components/auth/error-card";

export const metadata: Metadata = {
  title: "Page Not Found | Diwash Bhattarai",
  description:
    "Sorry, the page you're looking for could not be found. Explore my portfolio of projects, showcasing diverse skills and experiences.",
};

const NotFoundPage = () => {
  return <ErrorCard backButtonHref="/" backButtonLabel="Go back to home" />;
};

export default NotFoundPage;
