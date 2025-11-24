"use client";
import { useState } from "react";

const FeatureComponent = () => {
  const [activeFeature, setActiveFeature] = useState(1);

  const features = [
    {
      id: 1,
      title: "Lightning Fast",
      description:
        "Experience blazing-fast performance with optimized rendering and efficient state management.",
      icon: "⚡",
    },
    {
      id: 2,
      title: "Fully Responsive",
      description:
        "Looks perfect on all devices - from mobile phones to large desktop screens.",
      icon: "📱",
    },
    {
      id: 3,
      title: "Easy Customization",
      description:
        "Highly customizable components that adapt to your brand and design system.",
      icon: "🎨",
    },
    {
      id: 4,
      title: "Secure & Reliable",
      description:
        "Built with security best practices and reliable error handling.",
      icon: "🛡️",
    },
  ];

  const activeFeatureData = features.find((f) => f.id === activeFeature);

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-base-100 to-base-200">
      <div className=" container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Amazing Features <span className="text-secondary">Course Hub</span>
          </h2>
          <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
            Discover the powerful features that make our product stand out from
            the crowd
          </p>
        </div>

        {/* Main Feature Display */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Feature Cards */}
          <div className="space-y-6">
            {features.map((feature) => (
              <div
                key={feature.id}
                className={`p-6 rounded-2xl transition-all duration-300 cursor-pointer border-2 ${
                  activeFeature === feature.id
                    ? "border-primary bg-primary/10 shadow-lg scale-105"
                    : "border-base-300 bg-base-100 hover:border-primary/50 hover:shadow-md"
                }`}
                onClick={() => setActiveFeature(feature.id)}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`text-2xl p-3 rounded-xl ${
                      activeFeature === feature.id
                        ? "bg-primary text-primary-content"
                        : "bg-secondary text-secondary-content"
                    }`}
                  >
                    {feature.icon}
                  </div>
                  <div>
                    <h3
                      className={`text-xl font-semibold mb-2 ${
                        activeFeature === feature.id
                          ? "text-primary"
                          : "text-base-content"
                      }`}
                    >
                      {feature.title}
                    </h3>
                    <p className="text-base-content/70">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Feature Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary to-secondary p-1 rounded-3xl shadow-2xl">
              <div className="bg-base-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">{activeFeatureData?.icon}</div>
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    {activeFeatureData?.title}
                  </h3>
                  <p className="text-base-content/70">
                    {activeFeatureData?.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-xl"></div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "99.9%", label: "Uptime" },
            { number: "2.5x", label: "Faster" },
            { number: "500+", label: "Users" },
            { number: "24/7", label: "Support" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-base-100 rounded-xl shadow-sm border border-base-300"
            >
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-base-content/70 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureComponent;
