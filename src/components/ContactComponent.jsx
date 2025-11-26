"use client";
import { useState } from "react";
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
const ContactComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  const socials = [
    { name: "Twitter", icon: <FaTwitter />, color: "hover:text-primary" },
    { name: "LinkedIn", icon: <FaLinkedin />, color: "hover:text-primary" },
    { name: "GitHub", icon: <FaGithub />, color: "hover:text-secondary" },
    { name: "Instagram", icon: <FaInstagram />, color: "hover:text-secondary" },
  ];
  const contactInfo = [
    {
      icon: "📧",
      title: "Email Us",
      details: "hello@example.com",
      description: "Send us an email anytime",
    },
    {
      icon: "📞",
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Mon to Fri 9am to 6pm",
    },
    {
      icon: "📍",
      title: "Visit Us",
      details: "123 Business St, City",
      description: "Come say hello at our office",
    },
    {
      icon: "💬",
      title: "Live Chat",
      details: "Start Chat",
      description: "24/7 customer support",
    },
  ];

  return (
    <section
      className="py-20 px-4 bg-gradient-to-br from-base-100 to-base-200"
      id="contact"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
            Ready to start your next project? Let's talk about how we can help
            you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">
                Contact Information
              </h3>
              <p className="text-base-content/70 mb-8">
                Fill out the form and our team will get back to you within 24
                hours. Or contact us through any of the channels below.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="bg-base-100 p-6 rounded-2xl shadow-lg border border-base-300 hover:shadow-xl transition-all duration-300 hover:border-primary/50 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-2xl p-3 bg-gradient-to-r from-fuchsia-600 to-purple-600 rounded-xl text-primary-content group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-base-content mb-1">
                        {item.title}
                      </h4>
                      <p className="text-base-content font-semibold mb-1">
                        {item.details}
                      </p>
                      <p className="text-base-content/60 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="bg-base-100 p-6 rounded-2xl shadow-lg border border-base-300">
              <h4 className="font-bold text-lg text-base-content mb-4">
                Follow Us
              </h4>
              <div className="flex gap-4">
                {socials.map((social, index) => (
                  <button
                    key={index}
                    className={`text-2xl p-3 bg-base-200 rounded-xl transition-all duration-300 hover:scale-110 ${social.color}`}
                    title={social.name}
                  >
                    {social.icon}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-base-100 rounded-3xl shadow-2xl p-8 border border-base-300">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold text-primary mb-2">
                  Message Sent!
                </h3>
                <p className="text-base-content/70">
                  Thank you for your message. We'll get back to you soon.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-primary mb-2">
                  Send us a Message
                </h3>
                <p className="text-base-content/70 mb-8">
                  We'd love to hear from you. Fill out the form below and we'll
                  be in touch.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-semibold">
                          Your Name
                        </span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="input input-bordered w-full focus:border-primary focus:ring-2 focus:ring-primary/20"
                        required
                      />
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-semibold">
                          Email Address
                        </span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="input input-bordered w-full focus:border-primary focus:ring-2 focus:ring-primary/20"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">Subject</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      className="input input-bordered w-full focus:border-primary focus:ring-2 focus:ring-primary/20"
                      required
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">Message</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      placeholder="Tell us about your project..."
                      className="textarea textarea-bordered w-full focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn w-full text-lg font-semibold transition-all duration-300 ${
                      isSubmitting
                        ? "btn-disabled"
                        : "bg-gradient-to-r from-primary to-secondary border-none text-primary-content hover:shadow-lg"
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="loading loading-spinner"></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <span className="text-xl ml-2">🚀</span>
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-primary mb-8">
            Frequently Asked Questions
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                question: "How quickly do you respond?",
                answer:
                  "We typically respond within 2-4 hours during business days.",
              },
              {
                question: "Do you offer custom solutions?",
                answer:
                  "Yes! We specialize in tailored solutions for unique business needs.",
              },
              {
                question: "What's your pricing model?",
                answer:
                  "We offer flexible pricing based on project scope and requirements.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-base-100 p-6 rounded-2xl shadow-lg border border-base-300 text-left"
              >
                <h4 className="font-bold text-base-content mb-2">
                  {faq.question}
                </h4>
                <p className="text-base-content/70 text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactComponent;
