import { AuthForm } from "@/components/sections/auth/auth-from";
import React from "react";

const LoginPage = () => {
  return (
    <section className="min-h-[calc(100vh-120px)] flex items-center justify-center">
      <AuthForm />
    </section>
  );
};

export default LoginPage;
