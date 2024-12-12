import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="container  items-center justify-center overflow-hidden px-8">
      {children}
    </main>
  );
};

export default RootLayout;
