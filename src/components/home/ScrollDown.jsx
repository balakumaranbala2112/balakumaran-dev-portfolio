import { FaAngleDown } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";

import "../../styles/components/ScrollDown.css";

const ScrollDown = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("about");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="scroll-down-wrapper" onClick={handleScroll}>
      <FaChevronDown className="scroll-down-icon" />
    </div>
  );
};

export default ScrollDown;
