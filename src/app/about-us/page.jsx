// components/AboutUs.js
import React from "react";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "10+ years of experience in web development and education",
      avatar: "👩‍💼",
      skills: ["React", "Node.js", "Leadership"],
    },
    {
      name: "Mike Chen",
      role: "Lead Instructor",
      bio: "Former senior developer at tech giants, passionate about teaching",
      avatar: "👨‍💻",
      skills: ["JavaScript", "Python", "MongoDB"],
    },
    {
      name: "Emily Davis",
      role: "UI/UX Designer",
      bio: "Award-winning designer with focus on user experience",
      avatar: "👩‍🎨",
      skills: ["Figma", "Tailwind", "UI/UX"],
    },
    {
      name: "David Wilson",
      role: "Backend Specialist",
      bio: "Database architect and cloud infrastructure expert",
      avatar: "👨‍💼",
      skills: ["AWS", "Docker", "SQL"],
    },
  ];

  const stats = [
    { number: "10,000+", label: "Students Enrolled" },
    { number: "50+", label: "Courses Available" },
    { number: "15+", label: "Expert Instructors" },
    { number: "98%", label: "Satisfaction Rate" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-base-100 to-base-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            About LearnHub
          </h1>
          <p className="text-xl text-base-content/70 max-w-3xl mx-auto leading-relaxed">
            We're on a mission to make quality education accessible to everyone.
            Our platform brings together industry experts and passionate
            learners to create transformative learning experiences.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-base-100 p-6 rounded-2xl shadow-lg border border-base-300"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-base-content/70 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-base-100 p-8 rounded-3xl shadow-xl border border-primary/20">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold text-primary mb-4">
              Our Mission
            </h3>
            <p className="text-base-content/70 leading-relaxed">
              To democratize education by providing high-quality, affordable
              courses that empower individuals to advance their careers and
              pursue their passions in the ever-evolving tech landscape.
            </p>
          </div>

          <div className="bg-base-100 p-8 rounded-3xl shadow-xl border border-secondary/20">
            <div className="text-4xl mb-4">🔮</div>
            <h3 className="text-2xl font-bold text-secondary mb-4">
              Our Vision
            </h3>
            <p className="text-base-content/70 leading-relaxed">
              We envision a world where anyone, anywhere can transform their
              life through accessible education, bridging the gap between
              ambition and achievement in the digital age.
            </p>
          </div>
        </div>

        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Meet Our Team
            </h2>
            <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
              Passionate educators and industry professionals dedicated to your
              success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-base-100 rounded-2xl p-6 text-center shadow-lg border border-base-300 hover:shadow-xl transition-all duration-300 hover:border-primary/50"
              >
                <div className="text-5xl mb-4">{member.avatar}</div>
                <h3 className="text-xl font-bold text-base-content mb-2">
                  {member.name}
                </h3>
                <div className="text-primary font-semibold mb-3">
                  {member.role}
                </div>
                <p className="text-base-content/70 text-sm mb-4">
                  {member.bio}
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="badge badge-outline badge-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="bg-base-100 rounded-3xl p-8 shadow-xl border border-base-300">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "💡",
                title: "Innovation",
                description:
                  "Constantly evolving our teaching methods and course content",
              },
              {
                icon: "🤝",
                title: "Community",
                description:
                  "Building supportive learning communities for all students",
              },
              {
                icon: "🎯",
                title: "Excellence",
                description:
                  "Maintaining the highest standards in education quality",
              },
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-base-content mb-3">
                  {value.title}
                </h3>
                <p className="text-base-content/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
