import React from "react";
import Image from "next/image";
import Insta from "../public/insta.png";
import Tiktok from "../public/tiktok.png";
import whatsapp from "../public/wa.png";
import telegram from "../public/tg.png";
import scan from "../public/scan2.png";
import person from "../public/p.png";
import Qrcode from "../public/qrcode.png";

function Contact() {
  return (
    <div className="grid lg:grid-cols-2 max-lg:grid-rows-2 gap-1 h-svh">
      {/* Social Media Section (now first) */}
      <div className="">
        <div className="flex flex-col items-center justify-center h-full p-8 space-y-2">
          <Image src={Qrcode} alt="QR Code" width={200} height={200} />
          <h2 className="text-2xl font-bold text-white mb-4">Contact Me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
            recusandae iste rerum fuga cum dolor ullam dolorem excepturi qui
            nobis.
          </p>
          <div className="flex flex-row space-x-3">
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <Image src={Insta} alt="Instagram" width={48} height={48} />
            </a>
            <a
              href="https://tiktok.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <Image src={Tiktok} alt="TikTok" width={48} height={48} />
            </a>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <Image src={whatsapp} alt="WhatsApp" width={48} height={48} />
            </a>
            <a
              href="https://t.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <Image src={telegram} alt="Telegram" width={48} height={48} />
            </a>
          </div>
        </div>
      </div>
      {/* Scan Section (now second) */}
      <div className=" ">
        <div>
          <span className="text-primary-400 mb-1">Scan to connect:</span>
        </div>
        <div className="flex flex-col items-end ">
          <Image
            src={scan}
            alt="Scan QR"
            width={300}
            height={200}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
