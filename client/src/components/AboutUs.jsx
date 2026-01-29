import React from 'react';

function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            🌟 Welcome to Share Ride! 🚗✨
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Say goodbye to expensive travel and hello to a whole new world of
            convenience, savings, and friendship!
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
            <div className="text-4xl mb-4">🎉</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Hop on the Joyride!
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Gone are the days of fretting over pricey train tickets or cramped
              bus schedules. With Share Ride, you're in the driver's seat of your
              own journey. Whether you're off for a weekend getaway, a business
              trip, or just exploring new horizons, we've got you covered!
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
            <div className="text-4xl mb-4">💰</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Save Big, Travel Happy!
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Why break the bank when you can share the ride and split the cost?
              By teaming up with fellow travelers headed in the same direction,
              you'll slash expenses and maximize fun! Travel smarter, not harder.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
            <div className="text-4xl mb-4">👫</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Connect, Bond, Repeat!
            </h2>
            <p className="text-gray-700 leading-relaxed">
              It's not just about reaching your destination; it's about the
              unforgettable connections you make along the way. Share Ride is a
              vibrant community of like-minded explorers. Forge new friendships,
              swap stories, and create memories that'll last a lifetime.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
            <div className="text-4xl mb-4">🌍</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              The World Awaits...Let's Roll!
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Ready to hit the road? Whether you're a seasoned wanderer or a
              first-time traveler, there's a seat with your name on it. Adventure
              is calling, and with Share Ride, you're always just a click away
              from your next great escapade!
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            🚀 Ready for Your Next Adventure?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            With Share Ride, the road ahead is filled with endless possibilities
            and boundless smiles. Let's rev up those engines and make every trip
            a remarkable one!
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors transform hover:scale-105">
            Start Your Journey Today
          </button>
        </div>

        {/* Bottom tagline */}
        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg italic">
            🛣️ Every journey is an adventure waiting to happen
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;