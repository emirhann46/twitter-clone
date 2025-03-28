import { Link, NavLink } from "react-router-dom";
import classNames from "classnames";
import menu from "../constans";

export default function Menu() {
  return (
    <nav className="mt-0.5 mb-1">
      {menu.map((menuItem, index) => (
        <NavLink
          key={index}
          to={menuItem.path}
          className={({ isActive }) =>
            classNames("py-1 block group", {
              "font-bold": isActive
            })
          }
        >
          {({ isActive }) => (
            <div className={classNames("inline-flex items-center gap-5 py-2 p-3 rounded-full transition-colors group-hover:bg-[#eff3f41a]")}>
              {isActive ? menuItem.icon.active : menuItem.icon.inactive}
              <div className="text-xl hidden xl:block ">
                {menuItem.title}
              </div>
            </div>
          )}
        </NavLink>
      ))}
    </nav>
  )
}