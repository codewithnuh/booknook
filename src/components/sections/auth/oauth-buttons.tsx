import { Button } from "@/components/ui/button";
import { OAuthStrategy } from "@clerk/types";
import { FaFacebook, FaMicrosoft, FaGoogle } from "react-icons/fa";
// type SignInWithFunction = (strategy: OAuthStrategy) => void;
export const OAuthButtons: React.FC<{
  signInWith: (strategy: OAuthStrategy) => void;
}> = ({ signInWith }) => {
  return (
    <div className="space-y-2">
      {/* CAPTCHA Widget */}
      <div id="clerk-captcha"></div>
      <Button
        variant="outline"
        className="w-full"
        onClick={() => signInWith("oauth_google")}
      >
        <FaGoogle />
        Sign in with Google
      </Button>
      <Button
        variant="outline"
        className="w-full"
        onClick={() => signInWith("oauth_microsoft")}
      >
        <FaMicrosoft />
        Sign in with Microsoft
      </Button>
      <Button
        variant="outline"
        className="w-full"
        onClick={() => signInWith("oauth_facebook")}
      >
        <FaFacebook />
        Sign in with Facebook
      </Button>
    </div>
  );
};
