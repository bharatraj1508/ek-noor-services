import aboutImg from "../../../public/pictures/about.jpg";
import Image from "next/image";

export default function About() {
  return (
    <div id="about">
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col md:flex-row w-full mx-4 md:mx-10">
          <div className="flex-1 flex flex-col justify-center gap-y-8 px-5">
            <div className="flex justify-center">
              <h2 className="text-3xl md:text-4xl text-neutral-800 font-extrabold">
                ABOUT US
              </h2>
            </div>

            <p className="text-base md:text-lg">
              At Ek Noor Services, we pride ourselves on providing a wide range
              of essential services to simplify your everyday needs. From{" "}
              <strong>Driving License Sewa</strong> and{" "}
              <strong>Vehicle RC Sewa</strong> to facilitating{" "}
              <strong>Passport Sewa</strong>, we are dedicated to offering
              reliable and efficient solutions. Our expertise extends to{" "}
              <strong>Health Insurance</strong>,{" "}
              <strong>Vehicle Insurance</strong>, and{" "}
              <strong>Pet Registration</strong>, ensuring that you and your
              assets are well-protected.
              <br /> <br />
              We also cater to your travel and identification needs with
              services like <strong>Railway Tickets</strong>,{" "}
              <strong>Pan Card</strong>, <strong>Voter Card</strong>,{" "}
              <strong>Ayushman Card</strong>, <strong>Abha Card</strong>, and{" "}
              <strong>PVC Aadhaar</strong>. Additionally, we assist with digital
              services such as <strong>FastTag</strong> and{" "}
              <strong>PMSYM</strong>, making us your trusted partner for both
              government and non-government services.
              <br /> <br />
              With a commitment to excellence and customer satisfaction, we aim
              to be your one-stop destination for all your service requirements.
              Your convenience is our priority!
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
  );
}
