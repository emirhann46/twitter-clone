import PropTypes from "prop-types";
import { createElement } from "react";
import classNames from "classnames";

export default function Button({ size = "normal", children }) {
  return createElement(
    "button",
    {
      className: classNames("bg-[#1d9bf0] text-white font-bold flex items-center justify-center hover:bg-[#1a8cd8] py-2 rounded-full transition-colors cursor-pointer", {
        "px-2 h-7 text-sm": size === "small",
        "px-4 h-9 text-sm": size === "normal",
        "px-4 h-[52px] text-base w-full": size === "md",
        "px-4 h-[52px] text-lg w-full": size === "lg",
      })
    },
    children
  );
}

Button.propTypes = {
  size: PropTypes.oneOf(["normal", "md", "lg"]),
  children: PropTypes.node.isRequired
};

Button.defaultProps = {
  size: "normal"
};