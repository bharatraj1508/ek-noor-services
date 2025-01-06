import { cn } from "@/lib/utils";
import {
  IconCreditCardRefund,
  IconCarSuv,
  IconMotorbike,
  IconCar,
  IconId,
  IconTrain,
  IconBrandGoogleFit,
  IconEPassport,
  IconClipboardHeart,
  IconTag,
  IconBrandCashapp,
  IconDog,
} from "@tabler/icons-react";

export function Services() {
  const features = [
    {
      title: "Passport Sewa",
      description:
        "We assist you in applying for your passport. Simply upload a few documents, book your appointment, and you’re all set!",
      icon: <IconEPassport />,
    },
    {
      title: "Vehicle RC Sewa",
      description:
        "Should you need to transfer your RC or make any updates, we are here to assist you with a seamless process.",
      icon: <IconCar />,
    },
    {
      title: "Driving License Sewa",
      description:
        "Looking to apply for a learning driver’s license, schedule your test, or even take the test at our premises? We are here to assist you every step of the way.",
      icon: <IconMotorbike />,
    },
    {
      title: "Health Insurance",
      description:
        "Looking to apply for health insurance or get assistance with your coverage? We’re here to guide you through the process.",
      icon: <IconBrandGoogleFit />,
    },
    {
      title: "Vehicle Insurance",
      description:
        "We offer comprehensive vehicle insurance to protect against all types of damages.",
      icon: <IconCarSuv />,
    },
    {
      title: "Railway Tickets",
      description:
        "We provide railway ticket booking services through IRCTC for a seamless travel experience.",
      icon: <IconTrain />,
    },
    {
      title: "Pan Card",
      description:
        "Want to apply for a pan card ? Don't worry, we also cover that.",
      icon: <IconCreditCardRefund />,
    },
    {
      title: "Ayushman Card",
      description:
        "Apply for the Ayushman Card, providing coverage for your medical expenses and complimentary health checkups.",
      icon: <IconId />,
    },
    {
      title: "Abha Card",
      description:
        "We also apply for abha card that allows Indian citizens to access healthcare benefits, store medical information.",
      icon: <IconClipboardHeart />,
    },
    {
      title: "Fast Tag",
      description:
        "Build your fast tag with us that allows you to pay toll electronically.",
      icon: <IconTag />,
    },
    {
      title: "PMSYM",
      description:
        "Apply for the pension scheme that provides social security and old age protection to unorganized workers.",
      icon: <IconBrandCashapp />,
    },
    {
      title: "Pet Registration",
      description:
        "Register your pet with the corporation and get the token number for your pet.",
      icon: <IconDog />,
    },
  ];
  return (
    <>
      <div id="services">
        <div className="flex justify-center items-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-800">
            Services that we offer
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto h-screen">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <>
      <div
        className={cn(
          "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800 rounded-sm hover:scale-105 hover:shadow-xl transition-all duration-500 cursor-pointer",
          (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
          index < 4 && "lg:border-b dark:border-neutral-800"
        )}
      >
        {index < 4 && (
          <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-tr from-purple-50 to-purple-100 pointer-events-none" />
        )}
        {index >= 4 && (
          <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-purple-50 to-purple-100 pointer-events-none" />
        )}
        <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
          {icon}
        </div>
        <div className="text-lg font-bold mb-2 relative z-10 px-10">
          <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-purple-700 transition-all duration-200 origin-center" />
          <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
            {title}
          </span>
        </div>
        <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
          {description}
        </p>
      </div>
    </>
  );
};
