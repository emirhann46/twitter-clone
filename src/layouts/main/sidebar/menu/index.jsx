import { Link, NavLink } from "react-router-dom";
import classNames from "classnames";

export default function Menu() {
  return (
    <nav className="mt-0.5 mb-1">
      <NavLink to="/" className={({ isActive }) =>
        classNames("py-1 block group", {
          "font-bold": isActive
        })
      }>
        {({ isActive }) => (
          <div className={classNames("inline-flex items-center gap-5 py-2 p-3 rounded-full transition-colors group-hover:bg-[#eff3f41a]")}>
            {isActive ? (
              <svg viewBox="0 0 24 24" width={26.25} height={26.25} className="block">
              <path fill="#e7e9ea" d="M21.591 7.146L12.52 1.157c-.316-.21-.724-.21-1.04 0l-9.071 5.99c-.26.173-.409.456-.409.757v13.183c0 .502.418.913.929.913H9.14c.51 0 .929-.41.929-.913v-7.075h3.909v7.075c0 .502.417.913.928.913h6.165c.511 0 .929-.41.929-.913V7.904c0-.301-.158-.584-.408-.758z" />
            </svg>
             
            ) : (
              
               <svg viewBox="0 0 24 24" width={26.25} height={26.25} className="block">
               <path fill="#e7e9ea" d="M21.591 7.146L12.52 1.157c-.316-.21-.724-.21-1.04 0l-9.071 5.99c-.26.173-.409.456-.409.757v13.183c0 .502.418.913.929.913h6.638c.511 0 .929-.41.929-.913v-7.075h3.008v7.075c0 .502.418.913.929.913h6.639c.51 0 .928-.41.928-.913V7.904c0-.301-.158-.584-.408-.758zM20 20l-4.5.01.011-7.097c0-.502-.418-.913-.928-.913H9.44c-.511 0-.929.41-.929.913L8.5 20H4V8.773l8.011-5.342L20 8.764z" />
             </svg>
            )}

            <div className="text-xl">
              Anasayfa
            </div>
          </div>
        )}
      </NavLink>
    </nav>
  )
}