import aboutImg from "../../../public/pictures/about.jpg";
import Image from "next/image";

export default function About() {
  return (
    <div id="about">
      <div className="h-screen dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0"></div>
        <div className="flex justify-center items-center h-screen">
          <div className="flex flex-col md:flex-row w-full mx-4 md:mx-10">
            <div className="flex-1 flex flex-col justify-center gap-y-8 px-5">
              <div className="flex justify-center">
                <h2 className="text-3xl md:text-4xl text-neutral-800 font-extrabold orbitron">
                  ABOUT US
                </h2>
              </div>

              <p className="text-base md:text-lg dm-serif-text">
                At Ek Noor Services, we pride ourselves on providing a wide
                range of essential services to simplify your everyday needs.
                From Driving License Sewa and Vehicle RC Sewa to facilitating
                Passport Sewa, we are dedicated to offering reliable and
                efficient solutions. Our expertise extends to Health Insurance
                Vehicle Insurance, and Pet Registration, ensuring that you and
                your assets are well-protected.
                <br /> <br />
                We also cater to your travel and identification needs with
                services like Railway Tickets, Pan Card, Voter Card, Ayushman
                Card, Abha Card, and PVC Aadhaar. Additionally, we assist with
                digital services such as FastTag and PMSYM, making us your
                trusted partner for both government and non-government services.
                <br /> <br />
                With a commitment to excellence and customer satisfaction, we
                aim to be your one-stop destination for all your service
                requirements. Your convenience is our priority!
              </p>
            </div>
            <div className="hidden md:block md:w-[40rem] md:mt-0">
              <Image
                src={aboutImg}
                alt="about"
                className="rounded-2xl shadow-xl h-full w-full border border-gray-200"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
