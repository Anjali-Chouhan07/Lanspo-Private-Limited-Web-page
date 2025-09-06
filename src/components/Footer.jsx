import React from "react";
import { Link } from "react-router-dom";
import styles from "../style";

import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <h1 className="text-white font-bold text-2xl">
          Lanspo <span className="font-light">Private Limited</span>
        </h1>

        <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
          Innovating for a better tomorrow.
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div
            key={footerlink.title}
            className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
          >
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  <Link to={link.link}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    {/* Copyright */}
    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins text-[16px] leading-[24px] text-dimWhite text-center">
        Copyright Ⓒ 2025 Lanspo Private Limited. All Rights Reserved.
        <br />
        <Link to="/privacy-policy" className="hover:text-secondary cursor-pointer">
          Privacy Policy |
        </Link>{" "}
        <Link to="/terms" className="hover:text-secondary cursor-pointer">
          Terms & Condition |
        </Link>{" "}
        <Link to="/disclaimer" className="hover:text-secondary cursor-pointer">
          Disclaimer
        </Link>
      </p>

      <div className="flex flex-row gap-[24px] md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className="w-[21px] h-[21px] object-contain cursor-pointer social-media"
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>

    
  </section>
);

export default Footer;
