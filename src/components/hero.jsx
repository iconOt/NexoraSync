import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-slate-50 dark:bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center max-w-4xl mx-auto">

          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white leading-tight">
            Manage Your Team and Projects
            <span className="text-blue-600"> Smarter</span>
          </h1>

          <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Nexora helps teams organize projects, track performance,
            and improve productivity through a modern dashboard experience.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/signup"
              className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-600/25"
            >
              Get Started
            </Link>

            <Link
              to="/login"
              className="px-8 py-4 border border-slate-300 dark:border-slate-600 rounded-xl font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              Login
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
