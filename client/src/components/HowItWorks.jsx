import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  DollarSign,
  Users,
  Car,
  Clock,
  Shield,
  Heart,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import Button from "./Button";

function HowItWorks() {
  const navigate = useNavigate();

  const steps = [
    {
      icon: <Search className="w-16 h-16 text-blue-600" />,
      title: "Find a Ride",
      description:
        "Enter your destination and discover drivers and passengers heading the same way. No expensive tickets, no stress.",
    },
    {
      icon: <DollarSign className="w-16 h-16 text-green-600" />,
      title: "Share the Cost",
      description:
        "Split travel expenses and save money while enjoying a comfortable and flexible journey.",
    },
    {
      icon: <Users className="w-16 h-16 text-purple-600" />,
      title: "Connect & Travel",
      description:
        "Meet like-minded travelers, share stories, and turn every trip into a memorable experience.",
    },
  ];

  const benefits = [
    {
      icon: <DollarSign className="w-6 h-6 text-green-600" />,
      text: "Travel smarter and cheaper by sharing rides",
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-600" />,
      text: "Flexible schedules compared to trains or buses",
    },
    {
      icon: <Heart className="w-6 h-6 text-red-600" />,
      text: "A friendly community of explorers",
    },
    {
      icon: <Shield className="w-6 h-6 text-indigo-600" />,
      text: "More than travel — it's about connection",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 px-4 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <Car className="w-20 h-20 text-blue-600" />
            </motion.div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            How It Works
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your ticket to affordable, social, and stress-free travel.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="bg-white rounded-xl shadow-lg p-8 text-center relative overflow-hidden group"
            >
              {/* Step Number Badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-br from-blue-500 to-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                {index + 1}
              </div>

              <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                {step.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>

              {/* Decorative bottom border on hover */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* Why Share Ride */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-2xl shadow-2xl p-10 mb-16"
        >
          <div className="flex items-center justify-center mb-8">
            <MapPin className="w-10 h-10 text-blue-600 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Why Choose Share Ride?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex-shrink-0 bg-gray-100 p-3 rounded-full">
                  {benefit.icon}
                </div>
                <p className="text-gray-700 font-medium">{benefit.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl shadow-2xl p-12 text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Hit the Road?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Adventure is just one click away. Join thousands of travelers
            already sharing rides!
          </p>

          <div className="flex justify-center">
            <Button
              onClick={() => navigate("/search")}
              buttonStyle="primary"
              buttonSize="large"
            >
              Let's Ride! 🚗
            </Button>
          </div>
        </motion.div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 text-lg italic">
            🌟 Every journey begins with a single ride
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default HowItWorks;
