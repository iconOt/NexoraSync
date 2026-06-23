import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-300 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid gap-10 md:grid-cols-3">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              NexoraSync
            </h2>

            <p className="mt-4 text-slate-400">
              A modern dashboard system built for teams to manage projects,
              track performance, and improve productivity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/login" className="hover:text-white transition-colors">
                  Login
                </Link>
              </li>

              <li>
                <Link to="/signup" className="hover:text-white transition-colors">
                  Signup
                </Link>
              </li>

              <li>
                <Link to="/dashboard" className="hover:text-white transition-colors">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Contact
            </h3>

            <p className="text-slate-400">
              Email: support@nexora.com
            </p>

            <p className="text-slate-400 mt-2">
              Location: Remote / Global
            </p>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 dark:border-slate-700 mt-10 pt-6 text-center text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} NexoraSync. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
