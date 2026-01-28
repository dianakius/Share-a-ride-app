import { useNavigate } from "react-router-dom";

function Safety() {
  const navigate = useNavigate();

  return (
    <section className="py-8 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
          Your Safety Comes First
        </h1>

        <p className="text-gray-600 text-center mb-12 leading-relaxed">
          At Share Ride, your peace of mind matters. We’ve built safety into
          every step of the journey, so you can focus on enjoying the ride.
        </p>

        <div className="grid gap-8 sm:grid-cols-2">
          {/* Verified Users */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-2">✔️ Verified Profiles</h2>
            <p className="text-gray-600">
              All users go through a verification process. Know who you’re
              riding with before you hit the road.
            </p>
          </div>

          {/* Ratings */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-2">⭐ Ratings & Reviews</h2>
            <p className="text-gray-600">
              Check ratings and reviews from other travelers to choose your
              ride with confidence.
            </p>
          </div>

          {/* Secure Payments */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-2">🔒 Secure Payments</h2>
            <p className="text-gray-600">
              Payments are handled securely within the app, so there’s no need
              for cash exchanges.
            </p>
          </div>

          {/* Support */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-2">📞 24/7 Support</h2>
            <p className="text-gray-600">
              Our support team is always available if you need help before,
              during, or after your ride.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 rounded-xl bg-gray-900 text-white
                       hover:bg-gray-800 transition"
          >
            Back to Home
          </button>
        </div>
      </div>
    </section>
  );
}

export default Safety;
