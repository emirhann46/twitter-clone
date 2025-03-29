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
          <div className="w-[26.25px] h-[26.25px] relative">
            <svg viewBox="0 0 24 24" ><path fill="#fff" d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z"></path></svg>

          </div>
          <div className="pr-4 text-xl">
            Daha fazla
          </div>


        </div>

      </button>

      <Button size="md">Gönder</Button>
    </nav>
  )
}