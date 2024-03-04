"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { signIn } from "next-auth/react";

import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

import { Google, GitHub } from "@/components/ui/Icons";
import Button from "@/components/ui/Button";

const AUTH_SOCIAL_LINKS = [
  {
    label: "google",
    icon: Google,
  },
  {
    label: "github",
    icon: GitHub,
  },
];

const AuthSocial = ({ disabled }: { disabled?: boolean }) => {
  const [isMounted, setIsMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSocialLogin = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };

  return (
    <div className="w-full flex items-center justify-between gap-4">
      {AUTH_SOCIAL_LINKS.map((link) => {
        return (
          <Button
            key={link.label}
            className="bg-border flex items-center justify-center p-3"
            full
            onClick={() =>
              handleSocialLogin(link.label === "google" ? "google" : "github")
            }
            disabled={disabled}
          >
            <link.icon
              fillColor={
                isMounted
                  ? theme === "light"
                    ? "#1d1d1d"
                    : "#ebebeb"
                  : "#7c7c7c"
              }
            />
          </Button>
        );
      })}
    </div>
  );
};

export default AuthSocial;
