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
  size: PropTypes.oneOf(["small","normal", "md", "lg"]),
  children: PropTypes.node.isRequired
};

Button.defaultProps = {
  size: "normal"
};
export const colors = [
	{
		primary: '#1d9bf0',
		secondary: '#8ecdf8'
	},
	{
		primary: '#ffd400',
		secondary: '#ffea80'
	},
	{
		primary: '#f91880',
		secondary: '#fc8cc0'
	},
	{
		primary: '#7856ff',
		secondary: '#bcabff'
	},
	{
		primary: '#ff7a00',
		secondary: '#ffbd80'
	},
	{
		primary: '#00ba7c',
		secondary: '#80ddbe'
	}
]

export const fontSizes = [
	14,
	15,
	16,
	18,
	19
]