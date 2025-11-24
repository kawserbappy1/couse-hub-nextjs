"use client";
import React, { useState } from "react";

const ContactUs = () => {
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

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
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

  const contactMethods = [
    {
      icon: "📧",
      title: "Email Us",
      details: "hello@learnhub.com",
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
      details: "123 Education Street, Tech City",
      description: "Come say hello at our office",
    },
    {
      icon: "💬",
      title: "Live Chat",
      details: "Start Chat",
      description: "24/7 student support",
    },
  ];

  const faqs = [
    {
      question: "How do I enroll in a course?",
      answer:
        "Simply browse our courses, click 'Enroll Now', and complete the payment process. You'll get immediate access to the course content.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "Yes, we offer a 30-day money-back guarantee if you're not satisfied with the course.",
    },
    {
      question: "Are the certificates recognized?",
      answer:
        "Our certificates are widely recognized in the industry and can be shared on LinkedIn and other professional platforms.",
    },
    {
      question: "Can I learn at my own pace?",
      answer:
        "Absolutely! All our courses are self-paced, so you can learn whenever it's convenient for you.",
    },
  ];

  return (
    <section
      className="py-20 bg-gradient-to-br from-base-100 to-base-200"
      id="contact"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">
                Get In Touch
              </h2>
              <p className="text-base-content/70 text-lg">
                Whether you're a student with questions or someone interested in
                partnering with us, we're here to help you succeed in your
                learning journey.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="grid sm:grid-cols-2 gap-6">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className="bg-base-100 p-6 rounded-2xl shadow-lg border border-base-300 hover:shadow-xl transition-all duration-300 hover:border-primary/50"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-2xl p-3 bg-gradient-to-r from-primary to-secondary rounded-xl text-primary-content">
                      {method.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-base-content mb-1">
                        {method.title}
                      </h3>
                      <p className="text-base-content font-semibold mb-1">
                        {method.details}
                      </p>
                      <p className="text-base-content/60 text-sm">
                        {method.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* FAQ Section */}
            <div className="bg-base-100 rounded-2xl p-6 shadow-lg border border-base-300">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="collapse collapse-plus bg-base-200"
                  >
                    <input type="radio" name="faq-accordion" />
                    <div className="collapse-title text-lg font-medium">
                      {faq.question}
                    </div>
                    <div className="collapse-content">
                      <p className="text-base-content/70">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-base-100 rounded-3xl shadow-2xl p-8 border border-base-300">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold text-primary mb-2">
                  Message Sent!
                </h3>
                <p className="text-base-content/70">
                  Thank you for your message. We'll get back to you within 24
                  hours.
                </p>
              </div>
            ) : (
              <>
                <h2 className="text-3xl font-bold text-primary mb-2">
                  Send us a Message
                </h2>
                <p className="text-base-content/70 mb-8">
                  Fill out the form below and we'll be in touch soon.
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
                      placeholder="Tell us how we can help you..."
                      className="textarea textarea-bordered w-full focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn w-full text-lg font-semibold transition-all ${
                      isSubmitting
                        ? "btn-disabled"
                        : "bg-gradient-to-r from-primary to-secondary border-none text-primary-content hover:shadow-lg"
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="loading loading-spinner"></span>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <span className="ml-2">🚀</span>
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
