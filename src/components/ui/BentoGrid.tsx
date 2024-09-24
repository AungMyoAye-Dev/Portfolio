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
        "grid  grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mx-auto ",
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
}: {
  id: number;
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  image?: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none   dark:border-white/[0.2]  border border-transparent justify-between flex flex-col space-y-4 relative",
        className
      )}
    >
      <div className="h-full">
        {image && (
          <div className="relative h-full w-full">
            <Image
              src={image}
              fill
              alt="image"
              className="object-cover object-center"
            />
          </div>
        )}

        <div className="group-hover/bento:translate-x-2 transition duration-200"></div>
      </div>
    </div>
  );
};
