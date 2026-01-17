import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  GraduationCap,
  Building2,
  Plus,
  Menu,
  X,
} from "lucide-react";
import logo from "../../../assets/hat.png";
import logoText from "../../../assets/textlogo.png";
import { useState } from "react";

const Sidebar = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  const menu = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "courses", label: "Courses", icon: GraduationCap },
    { id: "colleges", label: "Colleges", icon: Building2 },
    { id: "addons", label: "Addons", icon: Plus },
  ];

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="lg:hidden fixed top-5 left-5 z-50 bg-white border border-gray-200 p-2 rounded-lg shadow-sm hover:shadow-md transition-shadow"
        aria-label="Toggle menu"
      >
        {open ? <X size={20} className="text-gray-700" /> : <Menu size={20} className="text-gray-700" />}
      </button>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/20 z-40 lg:hidden backdrop-blur-[2px]"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64
        bg-white border-r border-gray-100
        transition-transform duration-300 ease-out
        ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        <div className="flex flex-col h-full">

          {/* Header */}
<div className="px-6 py-8 border-b border-gray-100">
  <div className="flex items-center gap-3">
    <div className=" rounded-lg -mt-5 flex items-center justify-center">
      <img
        src={logo}
        alt="Adotzee Logo"
        className="h-16 w-auto object-contain"
      />
    </div>
     <div className="flex flex-col">
      <img
        src={logoText}
        alt="Adotzee Text Logo"
        className="h-6 w-auto object-contain"
      />
      <p className="text-xs text-gray-500 mt-0">College Management</p>
    </div>
  </div>
</div>



          {/* Navigation */}
          <nav className="flex-1 px-4 py-6">
            <ul className="space-y-2 p-0 list-none">
              {menu.map(({ id, label, icon: Icon }) => {
                const to = `/admin/${id}`;
                const active = pathname.startsWith(to);

                return (
                  <li key={id}>
                    <NavLink
                      to={to}
                      onClick={() => setOpen(false)}
                      className={`
                        group flex items-center gap-4 px-3 py-2.5 rounded-lg
                        transition-all duration-200
                        ${
                          active
                            ? "bg-gray-900 text-white shadow-sm"
                            : "text-gray-700 hover:bg-gray-50"
                        }
                      `}
                    >
                      <Icon 
                        size={18} 
                        className={`transition-colors ${
                          active ? "text-white" : "text-gray-500 group-hover:text-gray-700"
                        }`}
                      />

                      <span className={`text-sm font-medium ${
                        active ? "text-white" : "text-gray-700"
                      }`}>
                        {label}
                      </span>

                      {/* Active indicator dot */}
                      {active && (
                        <span className="ml-auto w-1.5 h-1.5 rounded-full bg-white" />
                      )}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Footer */}
          <div className="px-6 py-4 border-t border-gray-100">
            <p className="text-xs text-gray-400 text-center">
              © {new Date().getFullYear()} Adotzee
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;