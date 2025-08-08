import React from "react";
import Image from "next/image";
import Insta from "../public/insta.png";
import Tiktok from "../public/tiktok.png";
import whatsapp from "../public/wa.png";
import telegram from "../public/tg.png";
import scan from "../public/scan2.png";
import Qrcode from "../public/qrcode.png";

function Contact() {
  return (
    <div className="grid lg:grid-cols-2 gap-6 p-6 max-w-4xl mx-auto bg-white/90 rounded-xl shadow-lg">
      {/* Social Media Section */}
      <div className="flex flex-col items-center justify-center p-6 space-y-4">
        <Image
          src={Qrcode}
          alt="QR Code"
          width={120}
          height={120}
          className="rounded-md shadow"
        />
        <h2 className="text-2xl font-bold text-gray-800">Contact Me</h2>
        <p className="text-gray-600 text-center">
          Feel free to reach out via any platform below!
        </p>
        <div className="flex flex-row space-x-4">
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <Image src={Insta} alt="Instagram" width={40} height={40} />
          </a>
          <a
            href="https://tiktok.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <Image src={Tiktok} alt="TikTok" width={40} height={40} />
          </a>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <Image src={whatsapp} alt="WhatsApp" width={40} height={40} />
          </a>
          <a
            href="https://t.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <Image src={telegram} alt="Telegram" width={40} height={40} />
          </a>
        </div>
      </div>
      {/* Scan Section */}
      <div className="flex flex-col justify-end items-end p-6 space-y-4">
        <span className="text-primary-500 font-semibold">Scan to connect:</span>
        <Image
          src={scan}
          alt="Scan QR Code"
          width={180}
          height={180}
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}

export default Contact;
