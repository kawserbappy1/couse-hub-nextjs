"use client";
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    { name: "Web Development", href: "/services/web-dev" },
    { name: "Mobile Apps", href: "/services/mobile" },
    { name: "UI/UX Design", href: "/services/design" },
    { name: "Digital Marketing", href: "/services/marketing" },
    { name: "SEO Optimization", href: "/services/seo" },
    { name: "Consulting", href: "/services/consulting" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Disclaimer", href: "/disclaimer" },
  ];

  const socialLinks = [
    { name: "Twitter", icon: <FaTwitter />, href: "https://twitter.com" },
    { name: "LinkedIn", icon: <FaLinkedin />, href: "https://linkedin.com" },
    { name: "GitHub", icon: <FaGithub />, href: "https://github.com" },
    { name: "Instagram", icon: <FaInstagram />, href: "https://instagram.com" },
    { name: "Facebook", icon: <FaFacebook />, href: "https://facebook.com" },
    { name: "YouTube", icon: <FaYoutube />, href: "https://youtube.com" },
  ];

  const contactInfo = [
    { icon: "📧", text: "hello@example.com" },
    { icon: "📞", text: "+1 (555) 123-4567" },
    { icon: "📍", text: "123 Business Street, City, State 12345" },
  ];

  return (
    <footer className="bg-base-200 text-base-content bg-gradient-to-r from-fuchsia-600 to-purple-600">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl font-bold text-base-100">
                Course Hub
              </span>
            </div>
            <p className="text-base-100 mb-6 leading-relaxed">
              Building amazing digital experiences that drive results. We
              specialize in creating innovative solutions for modern businesses.
            </p>

            {/* Newsletter Signup */}
            <div className="mb-6">
              <h4 className="font-semibold text-lg mb-3 text-base-100">
                Stay Updated
              </h4>
              <div className="join w-full">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered join-item flex-1 focus:border-primary"
                />
                <button className="btn join-item bg-primary border-none text-primary-content hover:shadow-lg transition-all">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-lg mb-3 text-base-100">
                Follow Us
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-12 h-12 bg-base-100 rounded-xl flex items-center justify-center text-xl hover:bg-primary hover:text-primary-content transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-lg"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-base-100">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-base-content/70 hover:text-primary transition-colors duration-200 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-base-100">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-base-content/70 hover:text-secondary transition-colors duration-200 hover:translate-x-1 transform inline-block"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-lg mb-6 text-base-100">
              Get In Touch
            </h4>
            <div className="space-y-4 mb-6">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-base-100 rounded-lg flex items-center justify-center text-primary shadow-sm">
                    {contact.icon}
                  </div>
                  <span className="text-base-content/70">{contact.text}</span>
                </div>
              ))}
            </div>

            {/* Business Hours */}
            <div className="bg-base-100 rounded-xl p-4 shadow-sm">
              <h5 className="font-semibold mb-2 text-secondary">
                Business Hours
              </h5>
              <div className="text-sm text-base-content/70 space-y-1">
                <div className="flex justify-between">
                  <span>Mon - Fri:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-base-300">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-base-content/70 text-sm">
              © {currentYear} course hub. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap gap-6 text-sm">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-base-content/70 hover:text-primary transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Payment Methods */}
            <div className="flex items-center gap-2">
              <span className="text-base-content/70 text-sm mr-2">
                We accept:
              </span>
              <div className="flex gap-1">
                {["💳", "🅿️", "💰", "💵"].map((icon, index) => (
                  <div
                    key={index}
                    className="w-8 h-6 bg-base-100 rounded text-xs flex items-center justify-center shadow-sm"
                    title="Payment Method"
                  >
                    {icon}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
        title="Back to Top"
      >
        <span className="text-lg">↑</span>
      </button>
    </footer>
  );
};

export default Footer;
