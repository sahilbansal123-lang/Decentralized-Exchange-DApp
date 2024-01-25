import React from "react";

import { Twitter, FaceBook, Insta, Logo } from "./index";

const Footer = () => {
  const footerMenu = ["Features", "Integrations", "Pricing", "FAQ"];
  const footerMenu2 = ["Privacy", "Terms of Service"];

  return (
    <footer className="px-4 divide-y bg-[#1A1A1A] text-gray-100">
      <div
        className="container flex flex-col justify-between py-10 mx-auto space-y-8
      lg:flex-row lg:space-y-0"
      >
        <div className="lg:w-1/3">
          <a
            rel="noopener noreferrer"
            href="#"
            className="flex justify-center space-x-3 lg:justify-start"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-fullbg-violet-400">
              <Logo />
            </div>

            <span className="self-center text-2xl font-semibold text-gray-50">
              Crypto Swap
            </span>
          </a>
        </div>
        <div
          className="grid grid-cols-2 text-sm gap-x-2 gap-y-8 lg:w-2/3
        sm:grid-cols-4"
        >
          <div className="space-y-3">
            <h3 className="tracki upercase text-[#7765F3]"> Product </h3>
            <ul className="space-y-1 text-gray-50">
              {footerMenu.map((menu, i) => (
                <li key={i + 1}>
                  <a rel="noopener noreferrer" href="#">
                    {menu}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="tracki upercase text-[#7765F3]">Company</h3>
            <ul className="space-y-1 text-gray-50">
              {["privacy", "Terms od Services"].map((menu, i) => (
                <li key={i + 1}>
                  <a rel="noopener noreferrer" href="#">
                    {menu}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="tracki upercase text-[#7765F3]">Developer</h3>
            <ul className="space-y-1 text-gray-50">
              {["Public API", "Documentation", "Data"].map((menu, i) => (
                <li key={i + 1}>
                  <a rel="noopener noreferrer" href="#">
                    {menu}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <div className="tracki upercase text-[#7765F3]">Social Media</div>
            <div className="flex justify-start space-x-3 text-gray-50">
              <a
                rel="noopener noreferrer"
                href="#"
                title="Facebook"
                className="flex items-center p-1"
              >
                <FaceBook />
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                title="Facebook"
                className="flex items-center p-1"
              >
                <Twitter />
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                title="Facebook"
                className="flex items-center p-1"
              >
                <Insta />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="py-6 text-sm text-center border-[#7765F3] border-t-[3px]
      text-gray-400"
      >
        @ 2023 @theSahilBansal's co. All copyright reserved
      </div>
    </footer>
  );
};

export default Footer;
