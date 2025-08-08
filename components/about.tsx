import React from "react";
import { Handshake, HandCoins, Home } from "lucide-react";

function About() {
  return (
    <div
      id="about"
      className="bg-gradient-to-br from-green-50 via-white to-emerald-100"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center">
            <div className="mx-auto w-12 h-12 mb-4 rounded-full flex items-center justify-center bg-blue-100 text-blue-500 text-xl">
              <span className="material-icons">
                <HandCoins />
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2">Property Valuation</h3>
            <p className="text-gray-600">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
          {/* Service 2 */}
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center">
            <div className="mx-auto w-12 h-12 mb-4 rounded-full flex items-center justify-center bg-orange-100 text-orange-500 text-xl">
              <span className="material-icons">
                <Home />
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2">Buying &amp; Selling</h3>
            <p className="text-gray-600">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
          {/* Service 3 */}
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center">
            <div className="mx-auto w-12 h-12 mb-4 rounded-full flex items-center justify-center bg-green-100 text-green-500 text-xl">
              <span className="material-icons">
                <Handshake />
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2">Contract Negotiation</h3>
            <p className="text-gray-600">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
