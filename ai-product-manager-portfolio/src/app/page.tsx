"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerChildren = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Scroll to section function
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 font-[family-name:var(--font-geist-sans)]">
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="bg-gray-800 text-white p-4 sticky top-0 z-50"
      >
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            Agung Pratama
          </Link>
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          {/* Desktop menu */}
          <div className="hidden md:flex space-x-4">
            <Link
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("about");
              }}
              className="hover:text-gray-300"
            >
              About
            </Link>
            <button
              onClick={() => scrollToSection("skills")}
              className="hover:text-gray-300"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("achievements")}
              className="hover:text-gray-300"
            >
              Achievements
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="hover:text-gray-300"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-gray-300"
            >
              Contact
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-gray-800 p-4 flex flex-col space-y-4"
          >
            <Link
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("about");
                setIsMenuOpen(false);
              }}
              className="hover:text-gray-300"
            >
              About
            </Link>
            <button
              onClick={() => {
                scrollToSection("skills");
                setIsMenuOpen(false);
              }}
              className="hover:text-gray-300 text-left"
            >
              Skills
            </button>
            <button
              onClick={() => {
                scrollToSection("achievements");
                setIsMenuOpen(false);
              }}
              className="hover:text-gray-300 text-left"
            >
              Achievements
            </button>
            <button
              onClick={() => {
                scrollToSection("testimonials");
                setIsMenuOpen(false);
              }}
              className="hover:text-gray-300 text-left"
            >
              Testimonials
            </button>
            <button
              onClick={() => {
                scrollToSection("contact");
                setIsMenuOpen(false);
              }}
              className="hover:text-gray-300 text-left"
            >
              Contact
            </button>
          </motion.div>
        )}
      </motion.nav>

      {/* Main content */}
      <main className="flex-grow container mx-auto px-4 py-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        {/* Hero section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
          className="text-center mb-16 px-4"
        >
          <motion.div variants={fadeInUp} className="mb-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/zProfPic.png"
                alt="Agung Pratama"
                width={200}
                height={200}
                className="rounded-full mx-auto border-4 border-gray-300 shadow-lg object-cover w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56"
              />
            </motion.div>
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-2">
            Agung Pratama
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-600 mb-4">
            Lead Product Manager | Growth, Automation, & Analytics Specialist
          </motion.p>
          <motion.p
            variants={fadeInUp}
            className="text-base md:text-lg max-w-2xl mx-auto mb-4 px-4"
          >
            Dedicated Lead Product Manager with expertise in e-commerce and OTA,
            focusing on data-driven decision-making, automation, and scalability.
            Passionate about seamless user experiences and growth through
            innovation and operational excellence.
          </motion.p>
        </motion.section>

        {/* About section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          id="about"
          className="mb-16 px-4"
        >
          <h2 className="text-xl md:text-2xl font-bold mb-4">About Me</h2>
          <p className="text-base md:text-lg">
            Currently leading multiple transport verticals at Tiket.com, I bring
            a wealth of experience in product development, data analytics, and
            strategic automation. I've successfully launched new verticals and
            scaled platforms to drive both revenue and engagement growth.
            Leveraging agile methodologies and robust analytics, I work to
            enhance operational efficiency and create impactful products.
          </p>
        </motion.section>

        {/* Skills section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerChildren}
          id="skills"
          className="mb-16 px-4"
        >
          <motion.h2 variants={fadeInUp} className="text-xl md:text-2xl font-bold mb-4">
            Skills & Expertise
          </motion.h2>
          <motion.ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base md:text-lg">
            {[
              "Strategic Product Development",
              "Data Analytics & Dynamic Pricing",
              "Process Automation & Optimization",
              "Agile Methodologies",
              "User Experience (UX) Design",
              "Platform Scaling & Integration",
            ].map((skill, index) => (
              <motion.li
                key={index}
                variants={fadeInUp}
                className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                <span className="h-2 w-2 rounded-full bg-blue-500 mr-3"></span>
                {skill}
              </motion.li>
            ))}
          </motion.ul>
        </motion.section>

        {/* Tools section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerChildren}
          id="tools"
          className="mb-16 px-4"
        >
          <motion.h2 variants={fadeInUp} className="text-xl md:text-2xl font-bold mb-4">
            Specialized Tools and Technologies
          </motion.h2>
          <motion.ul className="grid grid-cols-2 md:grid-cols-3 gap-3 text-base md:text-lg">
            {[
              "SQL",
              "MongoDB",
              "JIRA",
              "Confluence",
              "Google Apps Script",
              "Google BigQuery",
              "Google Sheet",
              "Google Slides",
              "Google Docs",
              "Tableau",
              "Looker",
            ].map((tool, index) => (
              <motion.li
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500 mr-2"></span>
                {tool}
              </motion.li>
            ))}
          </motion.ul>
        </motion.section>

        {/* Achievement Highlights section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerChildren}
          id="achievements"
          className="mb-16 px-4"
        >
          <motion.h2 variants={fadeInUp} className="text-xl md:text-2xl font-bold mb-4">
            Achievement Highlights
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Tiket.com Achievements */}
            <motion.div variants={fadeInUp} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <span className="text-xl mr-2">🎫</span>
                <span className="dark:text-gray-100">Tiket.com</span>
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-blue-500 flex-shrink-0">•</span>
                  <span className="dark:text-gray-300">Led the launch of two major transport verticals, driving billions in daily revenue</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-500 flex-shrink-0">•</span>
                  <span className="dark:text-gray-300">Boosted train insurance revenue through dynamic pricing strategies</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-500 flex-shrink-0">•</span>
                  <span className="dark:text-gray-300">Achieved 5x productivity boost through streamlined analytics processes</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-500 flex-shrink-0">•</span>
                  <span className="dark:text-gray-300">Enhanced UX with optimized data points and improved CS efficiency</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-500 flex-shrink-0">•</span>
                  <span className="dark:text-gray-300">Pioneered data-driven platform for critical operations</span>
                </li>
              </ul>
            </motion.div>

            {/* Tokopedia & Lion Parcel Achievements */}
            <motion.div variants={fadeInUp} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <span className="text-xl mr-2">🛍️</span>
                <span className="dark:text-gray-100">Tokopedia & Lion Parcel</span>
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-blue-500 flex-shrink-0">•</span>
                  <span className="dark:text-gray-300">Enhanced Seller Fulfillment Platform with new features and optimizations</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-500 flex-shrink-0">•</span>
                  <span className="dark:text-gray-300">Led cross-functional project squad integrating digital-first approach</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-500 flex-shrink-0">•</span>
                  <span className="dark:text-gray-300">Significantly improved customer satisfaction and user experience</span>
                </li>
              </ul>
            </motion.div>

            {/* Sorabel Achievements */}
            <motion.div variants={fadeInUp} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <span className="text-xl mr-2">👗</span>
                <span className="dark:text-gray-100">Sorabel</span>
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-blue-500 flex-shrink-0">•</span>
                  <span className="dark:text-gray-300">Developed enterprise solutions ensuring seamless operational flows</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-500 flex-shrink-0">•</span>
                  <span className="dark:text-gray-300">Implemented data-driven alerting systems for proactive decision-making</span>
                </li>
              </ul>
            </motion.div>

            {/* Jualo & Grab Achievements */}
            <motion.div variants={fadeInUp} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <span className="text-xl mr-2">🚗</span>
                <span className="dark:text-gray-100">Jualo & Grab</span>
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-blue-500 flex-shrink-0">•</span>
                  <span className="dark:text-gray-300">Boosted feature engagement through strategic backlog prioritization</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-500 flex-shrink-0">•</span>
                  <span className="dark:text-gray-300">Achieved KPIs in user engagement and core feature usage</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-500 flex-shrink-0">•</span>
                  <span className="dark:text-gray-300">Led e-commerce and driver referral initiatives at Grab</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.section>

        {/* Company Logos section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerChildren}
          id="experience"
          className="mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-2xl font-bold mb-4 text-center"
          >
            Companies I've Worked With
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-600 dark:text-gray-400 mb-6 text-center"
          >
            Collaborating with industry leaders to drive innovation and growth.
          </motion.p>
          <motion.div className="flex justify-center mb-8">
            <motion.div
              variants={fadeInUp}
              className="h-1 w-24 bg-blue-600 rounded"
            ></motion.div>
          </motion.div>
          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {companyLogos.map((company, index) => (
              <motion.a
                key={index}
                href={company.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeInUp}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex justify-center bg-white dark:bg-gray-800 p-4 rounded-lg"
              >
                <Image
                  src={company.src}
                  alt={company.alt}
                  width={120}
                  height={120}
                  className="object-contain filter dark:invert hover:grayscale-0 transition-all duration-300"
                />
              </motion.a>
            ))}
          </motion.div>
        </motion.section>

        {/* Testimonials section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerChildren}
          id="testimonials"
          className="mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-2xl font-bold mb-8 text-center dark:text-gray-100"
          >
            What My Peers Say
          </motion.h2>
          <motion.div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                <p className="text-gray-800 dark:text-gray-200 text-lg italic mb-4">
                  {testimonial.text}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm text-right">
                  {testimonial.author}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Contact section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
          id="contact"
          className="text-center"
        >
          <h2 className="text-2xl font-bold mb-4 dark:text-gray-100">Get in Touch</h2>
          <p className="text-lg mb-4 dark:text-gray-300">
            I'm open to new opportunities, insights sharing, or collaboration on
            innovative projects. Reach out through any of the channels below.
          </p>
          <div className="flex justify-center space-x-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={social.className}
              >
                <Image
                  src={social.icon}
                  alt={social.alt}
                  width={32}
                  height={32}
                />
              </motion.a>
            ))}
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-gray-800 text-white text-center p-4"
      >
        <p>&copy; 2024 Agung Pratama. All rights reserved.</p>
      </motion.footer>
    </div>
  );
}

// Helper arrays
const testimonials = [
  {
    text: "Agung is an exemplary leader excelling in various areas, particularly in data processing. His role as a mentor encourages me to continuously improve and develop new skills.",
    author: "— Anonymous Peer",
  },
  {
    text: "He has great product acumen and understands the business concepts very well. He is super effective in delivering products in record timelines along with managing all the stakeholders.",
    author: "— Anonymous Peer",
  },
  {
    text: "Agung's strategic thinking has been instrumental in steering projects, aligning them with the broader objectives of the company.",
    author: "— Anonymous Peer",
  },
  {
    text: "He is a valuable asset to the team. His extensive knowledge and ability to quickly grasp new concepts make him indispensable.",
    author: "— Anonymous Peer",
  },
  {
    text: "He created a lot of monitoring tools using Google Apps Script and BigQuery integration. Sometimes he backs up the tech team by creating alerts for issues related to orders.",
    author: "— Anonymous Peer",
  },
  {
    text: "His willingness to learn and analytical skills made me nominate him as one of the best people in the company right now.",
    author: "— Anonymous Peer",
  },
  {
    text: "He can back up the tech team's work, like creating alerts using Apps Script and BigQuery. He inspires me with his initiatives and technical prowess.",
    author: "— Anonymous Peer",
  },
  {
    text: "Agung is the PM with such a comprehensive skill set. He consistently seeks improvements for both product outcomes and processes, demonstrating a serious commitment to learning about machine learning.",
    author: "— Anonymous Peer",
  },
];

const socialLinks = [
  {
    href: "https://linkedin.com/in/apprtm/",
    className: "text-blue-600 hover:text-blue-800",
    icon: "/linkedin-icon.svg",
    alt: "LinkedIn",
  },
  {
    href: "https://github.com/apprtm28",
    className: "text-gray-800 hover:text-gray-600",
    icon: "/github-icon.svg",
    alt: "GitHub",
  },
  {
    href: "https://twitter.com/apprtm",
    className: "text-blue-400 hover:text-blue-600",
    icon: "/twitter-icon.svg",
    alt: "Twitter",
  },
  {
    href: "mailto:agung.pprtm@gmail.com",
    className: "text-red-600 hover:text-red-800",
    icon: "/email-icon.svg",
    alt: "Email",
  },
];

const companyLogos = [
  {
    src: "/tiket-icon.svg",
    alt: "Tiket.com",
    href: "https://www.tiket.com/",
  },
  {
    src: "/tokopedia-icon.svg",
    alt: "Tokopedia",
    href: "https://www.tokopedia.com/",
  },
  {
    src: "/lionparcel-icon.svg",
    alt: "Lion Parcel",
    href: "https://lionparcel.com/",
  },
  {
    src: "/grab-icon.svg",
    alt: "Grab",
    href: "https://www.grab.com/",
  },
];