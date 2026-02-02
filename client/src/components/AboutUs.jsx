import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Car, DollarSign, Users, Globe, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from './Button';

function AboutUs() {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Car className="w-12 h-12 text-blue-600" />,
      title: "Hop on the Joyride!",
      description: "Gone are the days of fretting over pricey train tickets or cramped bus schedules. With Share Ride, you're in the driver's seat of your own journey."
    },
    {
      icon: <DollarSign className="w-12 h-12 text-green-600" />,
      title: "Save Big, Travel Happy!",
      description: "Why break the bank when you can share the ride and split the cost? By teaming up with fellow travelers, you'll slash expenses and maximize fun!"
    },
    {
      icon: <Users className="w-12 h-12 text-purple-600" />,
      title: "Connect, Bond, Repeat!",
      description: "Share Ride is a vibrant community of like-minded explorers. Forge new friendships, swap stories, and create memories that'll last a lifetime."
    },
    {
      icon: <Globe className="w-12 h-12 text-indigo-600" />,
      title: "The World Awaits!",
      description: "Ready to hit the road? Whether you're a seasoned wanderer or first-time traveler, there's a seat with your name on it."
    }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-purple-50 py-12 px-8">
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 360, 360, 0]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                repeatDelay: 2 
              }}
            >
              <Sparkles className="w-16 h-16 text-yellow-500" />
            </motion.div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Welcome to Share Ride!
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Say goodbye to expensive travel and hello to a whole new world of
            convenience, savings, and friendship!
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow relative overflow-hidden group"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative bottom border on hover */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-blue-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-linear-to-r from-gray-700 to-purple-600 rounded-2xl shadow-2xl p-8 text-center text-black"
        >
          <div className="flex justify-center mb-4">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Rocket className="w-16 h-16" />
            </motion.div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            With Share Ride, the road ahead is filled with endless possibilities
            and boundless smiles. Let's rev up those engines and make every trip
            a remarkable one!
          </p>
          
          <div className="flex justify-center">
            <Button 
              onClick={() => navigate("/signup")}
              buttonStyle="primary"
              buttonSize="large"
            >
              Start Your Journey Today 🚗
            </Button>
          </div>
        </motion.div>

        {/* Bottom tagline */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 text-lg italic">
            🛣️ Every journey is an adventure waiting to happen
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutUs;