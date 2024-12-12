import React from "react";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section className="flex items-center justify-center relative ">
      <div className="absolute w-96 h-96"></div>
      <div className="py-12 text-center max-w-[700px] flex flex-col gap-8 items-center ">
        <h1 className="text-foreground text-4xl md:text-6xl font-bold">
          Easiest way to power global teams.
        </h1>
        <p className="max-w-[600px]">
          Acme makes running global teams simple. HR, Payroll, International
          Employment, contractor management and more.
        </p>
        {/* Group Buttons */}
        <div className="flex gap-4 items-center justify-center">
          <Button variant={"secondary"}>Become a author</Button>
          <Button>Find Books</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
