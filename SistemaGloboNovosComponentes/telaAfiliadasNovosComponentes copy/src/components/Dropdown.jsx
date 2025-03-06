import React, { useState } from "react";

const Dropdown = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-800 font-bold flex items-center gap-1 px-4 py-2 hover:bg-gray-300 rounded-md"
      >
        {title}
        <i className={`fas ${isOpen ? "fa-chevron-up" : "fa-chevron-down"} text-xs`}></i>
      </button>

      {isOpen && (
        <ul
          className="absolute md:relative md:flex md:flex-row md:gap-2 left-0 mt-2 bg-gray-300 shadow-md rounded-md p-2 flex flex-col gap-2 w-48 md:w-auto"
        >
          {items.map((item, index) => (
            <li key={index}>
              <a href={item.link} className="block px-4 py-2 text-gray-700 hover:bg-gray-400 rounded uppercase text-sm">
                {item.titulo}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default Dropdown;
