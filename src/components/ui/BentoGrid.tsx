import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBackground";
import Image from "next/image";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid  grid-cols-1 md:grid-cols-5 gap-4 md:gap-8 mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  className,
  title,
  description,
  image,
  titleClassName,
}: {
  id: number;
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  image?: string;
  titleClassName?: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none   dark:border-white/[0.2]  border border-transparent justify-between flex flex-col space-y-4 relative",
        className
      )}
    >
      <div className="h-full ">
        <div className="h-full w-full absolute">
          {image && (
            <div className="relative h-full w-full ">
              <Image
                src={image}
                fill
                alt="image"
                className="object-cover object-center "
              />
            </div>
          )}
        </div>

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <p className="font-extralight  md:text-base">{description}</p>
          <h1 className=" text-lg md:text-xl font-bold z-10">{title}</h1>
        </div>
      </div>
    </div>
  );
};
