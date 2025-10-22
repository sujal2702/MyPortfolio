import React from "react";
import { ContainerScroll } from "../ui/ContainerScrollAnimation";

export const HeroScrollDemo: React.FC = () => {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-brand-dark">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-black mt-1 leading-none bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Scroll Animations
              </span>
            </h1>
          </>
        }
      >
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&h=720&fit=crop&q=80"
          alt="Dashboard preview"
          className="mx-auto rounded-2xl object-cover h-full object-left-top w-full"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
};
