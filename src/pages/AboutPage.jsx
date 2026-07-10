import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  UserGroupIcon,
  HeartIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import AboutImage from "../assets/images/about.png";

const AboutPage = () => {
  return (
    <div className="">
      <Helmet>
        <title>About Us | Motion Zip Ltd</title>
        <meta
          name="description"
          content="Learn about Motion Zip Ltd's mission, ethics, and our commitment to being your trusted local workshop in Ruiru."
        />
        <link rel="canonical" href="https://motionzipltd.com/about" />
      </Helmet>

      {/* Header */}
      <div className="bg-dark text-white py-20 text-center">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Passionate about cars, committed to our community.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="section-padding bg-white dark:bg-dark">
        <div className="container-custom">
          {/* Mission Section */}
          <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
            <div className="w-full md:w-1/2">
              <div className="rounded-2xl overflow-hidden shadow-2xl h-80 flex items-center justify-center">
                <img
                  src={AboutImage}
                  alt="Our Expert Mechanics Team"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                We're passionate about cars and committed to our customers. Our
                goal is simple: to keep your vehicle running safely and smoothly
                through expert care, transparent pricing, and trusted service
                you can count on.
              </p>
              <div className="flex items-start gap-4 mb-4">
                <HeartIcon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">
                    Customer First
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    You're not just another customer, you're part of our car
                    family.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 text-center">
            {[
              { label: "Years Experience", value: "10+" },
              { label: "Happy Clients", value: "15,000+" },
              { label: "Certified Mechanics", value: "15+" },
              { label: "Satisfaction Rate", value: "100%" },
            ].map((stat, idx) => (
              <div key={idx} className="glass-card p-6 bg-white dark:bg-dark-lighter/50 border border-gray-150 dark:border-white/5 rounded-3xl shadow-sm">
                <p className="text-4xl font-extrabold text-primary">{stat.value}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 font-medium uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <div className="glass-card p-8 bg-gray-50 dark:bg-dark-lighter/30 border border-gray-150 dark:border-white/5 rounded-3xl">
              <ShieldCheckIcon className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Ethics & Integrity
              </h3>
              <p className="text-gray-655 dark:text-gray-400 font-light leading-relaxed">
                Honesty and Loyalty in Every Repair. Finding a mechanic you can
                truly trust is key. At Motion Zip Ltd, we value long-term
                relationships, deliver quality workmanship, and ensure
                transparent pricing with no hidden fees or surprises.
              </p>
            </div>
            <div className="glass-card p-8 bg-gray-50 dark:bg-dark-lighter/30 border border-gray-150 dark:border-white/5 rounded-3xl">
              <UserGroupIcon className="w-10 h-10 text-secondary mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                The Local Advantage
              </h3>
              <p className="text-gray-650 dark:text-gray-400 font-light leading-relaxed">
                Your Trusted Local Workshop. Staying local means personal
                service, fast response times, and genuine community connection.
                We are proud to serve Ruiru and its surroundings.
              </p>
            </div>
          </div>

          {/* Invitation / CTA */}
          <div className="bg-gradient-to-r from-primary to-orange-600 rounded-3xl p-10 text-center text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl"></div>
            <h2 className="text-3xl font-extrabold mb-4 relative z-10">
              Experience the Difference
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto font-light leading-relaxed relative z-10">
              We invite you to discover the Motion Zip difference. Contact
              us today to book your appointment or learn more about how we can
              help keep your vehicle in top condition.
            </p>
            <Link to="/contact" className="inline-block bg-white text-primary font-bold py-3.5 px-8 rounded-full hover:bg-gray-100 hover:scale-105 transition-all shadow-lg text-sm relative z-10">
              Contact Us Today
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
