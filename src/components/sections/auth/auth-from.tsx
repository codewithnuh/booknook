"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { OAuthButtons } from "./oauth-buttons";
import { useSignIn, useSignUp } from "@clerk/nextjs";
import { OAuthStrategy } from "@clerk/types";
export function AuthForm() {
  const { signIn } = useSignIn();
  const { signUp } = useSignUp();

  if (!signIn || !signUp) return null;

  const signInWith = (strategy: OAuthStrategy) => {
    signIn.authenticateWithRedirect({
      strategy,
      redirectUrl: "/register/sso-callback",
      redirectUrlComplete: "/",
    });
  };
  return (
    <Card className="w-full max-w-[300px] mx-auto py-5">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Welcome
        </CardTitle>
        <CardDescription className="text-center">
          SignIn or SignUp to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <OAuthButtons signInWith={signInWith} />
      </CardContent>
    </Card>
  );
}
