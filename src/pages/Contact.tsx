import React, { useState } from 'react';
import { Calendar, Clock, Mail, Phone, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    launchDate: '',
    techLevel: 'Non-Tech',
    projectType: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const techLevels = ['Non-Tech', 'Beginner', 'Intermediate', 'Pro', 'Agency Owner'];
  const projectTypes = ['New Website', 'Website Redesign', 'Landing Page', 'Sales Funnel', 'E-commerce', 'Other'];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Instant Support • No Sales Pitches • Quick Start
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Ready to get building? Let's discuss your project and get your website in 72 hours. 
              </p>

              {/* Support Promise */}
              <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Clock className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="font-bold text-gray-900">Quick Response</div>
                    <div className="text-sm text-gray-600">24/7</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <CheckCircle className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="font-bold text-gray-900">FREE Website</div>
                    <div className="text-sm text-gray-600">Choose from the library of our winning websites, we will tailor it to your needs</div>
                  </div>
                </div>
              </div>

              {/* Live Support Indicator */}
              <div className="flex items-center space-x-3 text-green-600 mb-8">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="font-medium">Support Available</span>
                </div>
                <span className="text-gray-400">•</span>
                <span className="text-gray-600 text-sm"></span>
              </div>
            </motion.div>

           
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-2xl p-8"
            >
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Get Building</h2>
                <p className="text-gray-600">Tell us about your project</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Your Agency Name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="launchDate" className="block text-sm font-medium text-gray-700 mb-2">
                      Target Launch Date
                    </label>
                    <input
                      type="date"
                      id="launchDate"
                      name="launchDate"
                      value={formData.launchDate}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="techLevel" className="block text-sm font-medium text-gray-700 mb-2">
                      I'm a...
                    </label>
                    <select
                      id="techLevel"
                      name="techLevel"
                      value={formData.techLevel}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    >
                      {techLevels.map(level => (
                        <option key={level} value={level}>{level}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select project type</option>
                    {projectTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us about your vision, goals, and any specific requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center shadow-lg hover:shadow-xl"
                >
                  Start My Project <ArrowRight className="ml-2 w-5 h-5" />
                </button>

                <p className="text-xs text-gray-500 text-center">
                  We'll respond within 15 minutes with a detailed quote and timeline.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section> 
     
      

      {/* Contact Methods */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Other Ways to Reach Us</h2>
            <p className="text-gray-600">Choose the method that works best for you</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Email Us</h3>
              <p className="text-gray-600 mb-4">Get detailed responses within 12hours</p>
              <a
                href="mailto:mail@subhadeeppathak.store"
                className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
              >
                mail@subhadeeppathak.store
              </a>
            </motion.div>

             <motion.div
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100"
            > 
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Chat With us</h3>
              <p className="text-gray-600 mb-4">Speak with a launch specialist.</p>
              <a
                href="tel:1-800-ELEVATE"
                className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
              >
                instagram
              </a>
            </motion.div> 

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Book a Call</h3>
              <p className="text-gray-600 mb-4">Schedule a 15-minute discovery session</p>
              <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                View Calendar
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Quick answers to common questions</p>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">How fast can you really deliver?</h3>
              <p className="text-gray-600">
                We deliver in 72 hours. 
                We've built systems and templates that allow us to maintain speed without sacrificing quality.
                While tailoring it to your needs.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">What if I need changes after launch?</h3>
              <p className="text-gray-600">
                We offer ongoing support with easy builds, which enables even you to tweak your websites from your end.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Do you integrate with GoHighLevel?</h3>
              <p className="text-gray-600">
                Absolutely! All our websites are optimized for GoHighLevel integration. We handle the 
                technical setup so your funnels, forms, and automation work seamlessly.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">What makes your sites so fast?</h3>
              <p className="text-gray-600">
                We use optimized code, compressed images, CDN setup, and performance-first development 
                practices. Every site is tested to load under 1.2 seconds on average. We focus on the
                marketing aspect more than frontloading and showing off our skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need It Faster?</h2>
          <p className="text-xl text-red-100 mb-8">
            Rush projects available for same-day start. Additional fees apply.
          </p>
          <button className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg">
            Expedite My Project
          </button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
