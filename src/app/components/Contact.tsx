"use client";

import { IconPhone, IconMapPin, IconMail } from "@tabler/icons-react";

export default function Contact() {
  return (
    <>
      <div
        id="contact"
        className="flex flex-col justify-evenly bg-neutral-800 p-10 gap-y-8"
      >
        <div className="flex justify-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white orbitron">
            GET IN TOUCH
          </h2>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 md:gap-10 md:mx-10 gap-5 dm-serif-text">
          <div className="text-white flex items-center justify-center flex-col gap-y-6 border border-gray-400 p-4 rounded-2xl">
            <IconPhone size={40} />
            <p className="text-sm underline">+91 8728013007</p>

            <p>
              You can reach us via phone call or WhatsApp for any inquiries or
              assistance.
            </p>
          </div>
          <div className="text-white flex items-center justify-center flex-col gap-y-6 border border-gray-400 p-4 rounded-2xl">
            <IconMapPin size={40} />
            <p className="text-sm underline">
              H.No 596 GK Estate Mundian Khurd Chandigarh Road Ludhiana
            </p>

            <p>
              Visit our premises for personalized assistance with our services,
              or apply conveniently with us.
            </p>
          </div>
          <div className="text-white flex items-center justify-center flex-col gap-y-6 border border-gray-400 p-4 rounded-2xl">
            <IconMail size={40} />
            <p className="text-sm underline">bharat.raj1508@gmail.com</p>

            <p>
              Email us for detail inquiries about the services that we offer, or
              book an appointmnent with us for visit.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
