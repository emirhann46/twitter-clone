import { Link, NavLink } from "react-router-dom";
import classNames from "classnames";
import menu from "../constans";
import Button from "~/components/button";

export default function Menu() {
  return (
    <nav className="mt-0.5 mb-1">
      {menu.map((menuItem, index) => (
        <NavLink
          key={index}
          to={typeof menuItem.path === 'function' ? menuItem.path() : menuItem.path}
          className={({ isActive }) =>
            classNames("py-1 block group", {
              "font-bold": isActive
            })
          }
        >
          {({ isActive }) => (
            <div className={classNames("inline-flex items-center gap-5 py-2 p-3 rounded-full transition-colors group-hover:bg-[#eff3f41a]")}>
              <div className="relative">
                {menuItem.notification > 0 && (
                  <span className="absolute -top-2 -right-2 flex items-center justify-center bg-[#1d9bf0] text-white text-[10px] font-bold rounded-full w-5 h-5 min-w-[1.25rem]">
                    {menuItem.notification > 99 ? '99+' : menuItem.notification}
                  </span>
                )}
                {isActive ? menuItem.icon.active : menuItem.icon.inactive}
              </div>
              
              <div className="text-xl hidden xl:block">
                {menuItem.title}
              </div>
            </div>
          )}
       </NavLink>
      ))}
      <button className="py-1 block group">
  <div className="p-3 rounded-full transition-colors inline-flex items-center gap-5 group-hover:bg-[#eff3f41a]">



 </div>      

     </button>

      <Button size="md">Gönder</Button>
    </nav>
  )
}