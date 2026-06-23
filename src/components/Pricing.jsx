const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$0",
      description: "Perfect for individuals getting started.",
      features: [
        "1 Dashboard",
        "Basic Analytics",
        "5 Projects",
        "Email Support",
      ],
    },
    {
      name: "Pro",
      price: "$19",
      description: "For growing teams and businesses.",
      popular: true,
      features: [
        "Unlimited Projects",
        "Advanced Analytics",
        "Team Collaboration",
        "Priority Support",
      ],
    },
    {
      name: "Enterprise",
      price: "$49",
      description: "Best for large organizations.",
      features: [
        "Everything in Pro",
        "Custom Integrations",
        "Dedicated Support",
        "Advanced Security",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
            Simple Pricing
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Choose the plan that fits your needs. No hidden fees.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                plan.popular
                  ? "bg-blue-600 text-white shadow-xl shadow-blue-600/25 scale-105 border-2 border-blue-400"
                  : "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-lg dark:hover:shadow-slate-800/50 text-slate-900 dark:text-white"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs font-semibold px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              <h3 className={`text-2xl font-bold ${plan.popular ? "text-white" : "text-slate-900 dark:text-white"}`}>
                {plan.name}
              </h3>

              <p className={`mt-2 ${plan.popular ? "text-blue-100" : "text-slate-500 dark:text-slate-400"}`}>
                {plan.description}
              </p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-5xl font-bold">{plan.price}</span>
                <span className={plan.popular ? "text-blue-100" : "text-slate-500 dark:text-slate-400"}>
                  /month
                </span>
              </div>

              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-center gap-2 ${
                      plan.popular ? "text-blue-50" : "text-slate-600 dark:text-slate-300"
                    }`}
                  >
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full mt-8 py-3 rounded-xl font-semibold transition ${
                  plan.popular
                    ? "bg-white text-blue-600 hover:bg-blue-50"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                {plan.name === "Starter" ? "Get Started Free" : "Subscribe Now"}
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Pricing;
