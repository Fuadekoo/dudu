import React from "react";
import Image from "next/image";
import Insta from "../public/insta.png";
import Tiktok from "../public/tiktok2.png";
import whatsapp from "../public/wa.png";
import telegram from "../public/tg.png";
import Youtube from "../public/yt.png";
import Website from "../public/web.png";
import scan from "../public/scan2.png";
import Qrcode from "../public/qrcode.png";
import Link from "next/link";

function Contact() {
  return (
    <div
      id="contact"
      className="grid lg:grid-cols-2 gap-6 p-6 max-w-4xl mx-auto bg-white/90 rounded-xl shadow-lg bg-gradient-to-br from-green-50 via-white to-emerald-100"
    >
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
          <Link
            href="https://www.instagram.com/prime_rental1/profilecard/?igsh=bXEzZTNuZnY1dmdy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <Image src={Insta} alt="Instagram" width={40} height={40} />
          </Link>
          <Link
            href="https://www.tiktok.com/@prime_rental?_t=ZM-8ygWMSDW7jp&_r=1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <Image src={Tiktok} alt="TikTok" width={40} height={40} />
          </Link>
          <Link
            href="https://youtube.com/@primeplc?si=cev2DQIr7IlXU6v0"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <Image src={Youtube} alt="YouTube" width={40} height={40} />
          </Link>
          <Link
            href="https://primeaddis.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <Image src={Website} alt="Website" width={40} height={40} />
          </Link>
          <Link
            href="https://wa.me/qr/XFZIVZ2X5SKWF1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <Image src={whatsapp} alt="WhatsApp" width={40} height={40} />
          </Link>
          <Link
            href="https://t.me/Rental_house"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <Image src={telegram} alt="Telegram" width={40} height={40} />
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-start justify-center p-6 w-full">
        <div className=" p-5 w-full space-y-5">
          <h3 className="text-2xl font-semibold text-emerald-800 mb-2">
            Get in Touch
          </h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <span className="text-gray-700 font-medium">Email:</span>
              <a
                href="mailto:primeplcaddis@gmail.com"
                className="text-emerald-600 hover:underline"
              >
                natnaelyohannes1212@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-700 font-medium">Phone:</span>
              <a
                href="tel:+251911234567"
                className="text-emerald-600 hover:underline"
              >
                +2519-33571691
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-700 font-medium">Address:</span>
              <span className="text-gray-600"> Addis Ababa, Ethiopia</span>
            </div>
          </div>
        </div>
      </div>
      {/* Scan Section */}
      <div className="flex flex-col justify-evenly p-0 space-y-4">
        <div className="items-start mb-2">
          <span className="text-primary-500 font-extrabold text-xl">
            Scan to connect:
          </span>
        </div>
        <div className="flex justify-end">
          <Image
            src={scan}
            alt="Scan QR Code"
            width={180}
            height={180}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
