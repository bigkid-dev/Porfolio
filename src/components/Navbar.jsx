// import React from 'react'
import { links } from "../data";
import "../styles/elevations.css";
const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "#F4F5FA" }}>
      <div className="align-element py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8">
        <h2 className="text-3xl font-bold">
          Web<span className="text-emerald-600">Dev</span>
        </h2>
        <div >
          <div className="flex gap-x-3 shadowFour h-12 rounded-full justify-center items-center" style={{justifyContent: "space-around"}}>
            {links.map((link) => {
              const { id, href, text } = link;
              return (
                <a
                  key={id}
                  href={href}
                  className="capitalize text-lg tracking-wide hover:text-emerald-600 duration-300"
                >
                  {text}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
