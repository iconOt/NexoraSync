const Testimonials = () => {
  const testimonials = [
    {
      name: "Aisha Bello",
      role: "Project Manager",
      message:
        "Nexora completely changed how our team manages projects. Everything is now organized and easy to track.",
    },
    {
      name: "John Martins",
      role: "Software Engineer",
      message:
        "The dashboard is clean, fast, and very intuitive. It feels like a real production SaaS product.",
    },
    {
      name: "Fatima Yusuf",
      role: "Team Lead",
      message:
        "We improved productivity massively after switching to Nexora. Collaboration has never been easier.",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
            What Users Say
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Feedback from teams using Nexora daily.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm dark:shadow-slate-800/50 border border-slate-100 dark:border-slate-700 hover:shadow-md dark:hover:shadow-slate-700/50 transition-shadow"
            >
              <p className="text-slate-600 dark:text-slate-300 italic leading-relaxed">
                &ldquo;{item.message}&rdquo;
              </p>

              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold text-sm">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">
                    {item.name}
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
