import React from "react";
import { fbIcon, linkedinIcon, youtubeIcon } from "../../lib/myIcons";

const Footer = () => {
  return (
    <section className="w-full bg-navi2">
      <div className="w-full max-w-7xl mx-auto pt-16 lg:pt-32 px-8 lg:px-0 flex flex-col items-center">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 text-white">
          <div className="flex flex-col gap-8">
            <img
              src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/02/logo-white-2.png"
              className="w-32"
            />
            <p className="text-gray-400">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum.
            </p>
            <div>
              <ul className="flex flex-row gap-4">
                <li className="bg-gray-600 rounded-md px-2 py-2 flex flex-row items-center text-4xl text-gray-200">
                  {fbIcon}
                </li>
                <li className="bg-gray-600 rounded-md px-2 py-2 flex flex-row items-center text-4xl text-gray-200">
                  {linkedinIcon}
                </li>
                <li className="bg-gray-600 rounded-md px-2 py-2 flex flex-row items-center text-4xl text-gray-200">
                  {youtubeIcon}
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Explore UINJKT</h3>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Links PPB</h3>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-400">
              Jl. Ir H. Juanda No.95, Cemp. Putih, Kec. Ciputat Tim., Kota
              Tangerang Selatan, Banten 15412 Phone: (021) 7401925 Email:
              pusatbahasa@uinjkt.ac.id
            </p>
          </div>
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto py-8">
        <h3 className="text-gray-500 mt-8 text-center">
          Pusat Pengembangan Bahasa © 2023. <br /> All Rights Reserved.
        </h3>
        <p className="text-center text-gray-300 text-xs">
          Lembaga Pusat Pengembangan Bahasa, UIN Syarif Hidayatullah Jakarta
        </p>
      </div>
    </section>
  );
};

export default Footer;
