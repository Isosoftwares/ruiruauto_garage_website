import React from "react";
import { useForm } from "react-hook-form";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const ContactPage = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    toast.success("Message sent successfully! We'll get back to you soon.");
    reset();
  };

  return (
    <div className="">
      <Helmet>
        <title>Contact Us | Ruiru Auto Garage</title>
        <meta
          name="description"
          content="Get in touch with Ruiru Auto Garage. Visit us off Thika Super Highway, call us on 0748 333 555, or send us a message."
        />
        <link rel="canonical" href="https://www.ruiruautogarage.com/contact" />
      </Helmet>

      {/* Header */}
      <div className="bg-dark text-white py-20 text-center">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to get your car back in shape? Reach out to us today.
          </p>
        </div>
      </div>

      <div className="section-padding bg-gray-50 dark:bg-dark">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                Get In Touch
              </h2>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPinIcon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Visit Us
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Ruiru Auto Garage, Mathigu Rd,
                      <br />
                      Ruiru Town, Along Thika Super Highway.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <PhoneIcon className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Call Us
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-1">
                      <a
                        href="tel:0748333555"
                        className="hover:text-primary transition-colors"
                      >
                        0748 333 555
                      </a>
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      <a
                        href="tel:0781333555"
                        className="hover:text-primary transition-colors"
                      >
                        0781 333 555
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <EnvelopeIcon className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Email Us
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      <a
                        href="mailto:contact@ruiruautogarage.com"
                        className="hover:text-primary transition-colors"
                      >
                        contact@ruiruautogarage.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Embedded Map */}
              <div className="mt-12 rounded-2xl overflow-hidden h-64 border border-gray-200 dark:border-white/5 relative shadow-md">
                <iframe
                  title="Ruiru Auto Garage Map Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2612.5580781550575!2d36.956170139548476!3d-1.1457946630675555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2b6d635904c59cf%3A0xd5a0c7361a168229!2sRuiru%20Auto%20Garage!5e1!3m2!1sen!2ske!4v1783055545910!5m2!1sen!2ske"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="dark:opacity-80"
                ></iframe> 
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-card bg-white dark:bg-dark-lighter border-gray-100 dark:border-gray-800">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    className="input-field"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    className="input-field"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    {...register("message", { required: true })}
                    rows="4"
                    className="input-field resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
