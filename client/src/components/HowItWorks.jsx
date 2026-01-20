import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function HowItWorks() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 px-8 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h1>
          <p className="text-lg text-gray-600 py-4">
            Your ticket to affordable, social, and stress-free travel.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <h3 className="text-xl font-semibold mb-3">🚗 Find a Ride</h3>
            <p className="text-gray-600">
              Enter your destination and discover drivers and passengers heading
              the same way. No expensive tickets, no stress.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <h3 className="text-xl font-semibold mb-3">💰 Share the Cost</h3>
            <p className="text-gray-600">
              Split travel expenses and save money while enjoying a comfortable
              and flexible journey.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <h3 className="text-xl font-semibold mb-3">👫 Connect & Travel</h3>
            <p className="text-gray-600">
              Meet like-minded travelers, share stories, and turn every trip
              into a memorable experience.
            </p>
          </div>
        </div>

        {/* Why Share Ride */}
        <div className="bg-white rounded-xl shadow-xl p-10 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Why Choose Share Ride?
          </h2>
          <div className="grid md:grid-cols-2 gap-6 py-4 text-gray-600 text-center">
            <p>✅ Travel smarter and cheaper by sharing rides.</p>
            <p>✅ Flexible schedules compared to trains or buses.</p>
            <p>✅ A friendly community of explorers.</p>
            <p>✅ More than travel — it’s about connection.</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Hit the Road?
          </h2>
          <p className="text-gray-600 mb-8 py-4">
            Adventure is just one click away.
          </p>
          <Button onClick={() => navigate("/search")}>Let's Ride!</Button>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
