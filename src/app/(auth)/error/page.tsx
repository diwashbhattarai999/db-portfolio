import ErrorCard from "@/components/auth/error-card";

const AuthErrorPage = () => {
  return (
    <div>
      <ErrorCard backButtonHref="/login" backButtonLabel="Go back to Login" />
    </div>
  );
};

export default AuthErrorPage;
