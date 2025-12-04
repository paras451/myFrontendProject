import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function AdminDashboard() {
  const location = useLocation();
  const [pagesOpen, setPagesOpen] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  // Pages for the dropdown
  const pages = [
    // { name: "Login", path: "login" },
    { name: "🏠Home", path: "/home" },
    { name: "🛠️Services", path: "services" },
    { name: "🛒Advanced Ecommerce", path: "advanced-ecommerce" },
    { name: "👥About Us", path: "about-us" },
    { name: "🧩Solutions", path: "solutions" },
    { name: "🏭Industries", path: "industries" },
    { name: "✉️Contact", path: "contact" },
  ];

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    setTimeout(() => {
      navigate("/admin-login", { replace: true });
    }, 0);
  };
  return (
    <div className="flex h-screen bg-gray-100">
      {/* 🔥 Mobile top bar */}
      <div className="md:hidden w-full bg-blue-800 text-white p-4 flex justify-between items-center fixed top-0 left-0 z-20">
        <span className="font-bold text-xl">Custom Tech Admin Panel</span>
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
          ☰
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`
           text-white flex flex-col w-64 z-30
          md:static md:translate-x-0 bg-blue-600
          fixed top-0 h-full transition-transform duration-300
          ${menuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* <div className="p-6 text-2xl font-bold"> Custom Tech Admin Panel</div> */}
        <nav className="flex-1">
          <ul>
            <li className="p-4 hover:bg-blue-400/80">
              <Link to="/admindashboard/dash">Dashboard Home</Link>
            </li>
            {/* Pages Dropdown */}
            <li>
              <button
                onClick={() => setPagesOpen(!pagesOpen)}
                className="w-full text-left p-4 hover:bg-blue-400/80 flex justify-between items-center"
              >
                📄 Pages
                <span>{pagesOpen ? "▲" : "▼"}</span>
              </button>

              {pagesOpen && (
                <ul className="">
                  {pages.map((page) => (
                    <li
                      key={page.path}
                      className={`pl-8 py-2 hover:bg-blue-400/80 ${
                        location.pathname.includes(
                          `/admindashboard/${page.path}`
                        )
                          ? "bg-blue-400"
                          : ""
                      }`}
                    >
                      <Link to={`/admindashboard/${page.path}`}>
                        {page.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li className="p-4 hover:bg-blue-400/80">
              <Link to="/admindashboard/users">👥 Users</Link>
            </li>
            <li className="p-4 hover:bg-blue-400/80">
              <Link to="/admindashboard/settings">
                <span
                  className="animate-spin"
                  style={{ animationDuration: "1.1s", display: "inline-block" }}
                >
                  ⚙️
                </span>
                Settings
              </Link>
            </li>
          </ul>
        </nav>
        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="mt-auto bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded font-medium transition-colors w-full"
        >
          Logout
        </button>
      </aside>
      {/* Main content */}
      <main className="flex-1 p-3 overflow-auto mt-15 lg:mt-0 md:mt-0 sm:mt-0">
        <h1 className="text-3xl font-bold mb-6">Welcome to Admin Dashboard</h1>
        {/* This is where nested routes can render */}
        <Outlet />
      </main>
    </div>
  );
}

export default AdminDashboard;
