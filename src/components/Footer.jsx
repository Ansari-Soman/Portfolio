import React from "react";

const Footer = () => {
  return (
    <div
      data-aos="zoom"
      className="mt-20 max-w-[1600px] mx-auto container   px-4 lg:px-8 xl:px-[12%] overflow-x-hidden"
    >
      <div className="text-center">
        <img src="/assets/logo-1.png" className="w-36 mx-auto mb-2" alt="" />

        <div className="w-max flex items-center gap-2 mx-auto">
          <img src="/assets/mail_icon.png" className="w-6" alt="" />
          ansarisoman4077@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400  mt-12 py-6">
        <p>© 2025 Ansari Soman. All rights reserved.</p>
        <ul className="flex items-center justify-center gap-10 mt-4 sm:mt-0">
          <li>
            <a href="https://github.com/Ansari-Soman" target="_blank">
              Github
            </a>
          </li>
          <li>
            <a
              href="www.linkedin.com/in/ansari-soman-919165363"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
