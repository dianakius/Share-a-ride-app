import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Support() {
  const navigate = useNavigate();

  return (
    <section className="py-8 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
          We’re Here to Help
        </h1>

        <p className="text-gray-600 text-center mb-12 leading-relaxed">
          Got a question, concern, or need assistance? The Share Ride support
          team is always ready to help you get back on the road with confidence.
        </p>

        <div className="grid gap-8 sm:grid-cols-2">
          {/* Help Center */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-2">📚 Help Center</h2>
            <p className="text-gray-600">
              Find answers to common questions about bookings, payments, and
              account management.
            </p>
          </div>

          {/* Live Chat */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-2">💬 Live Chat</h2>
            <p className="text-gray-600">
              Need quick help? Chat live with our support team directly through
              the app.
            </p>
          </div>

          {/* Email Support */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-2">📧 Email Support</h2>
            <p className="text-gray-600">
              Prefer email? Reach out anytime and we’ll get back to you as soon
              as possible.
            </p>
          </div>

          {/* Emergency Assistance */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-2">
              🚨 Emergency Assistance
            </h2>
            <p className="text-gray-600">
              If something goes wrong during a ride, access emergency support
              instantly from the app.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button onClick={() => navigate("/")}>Back to Home</Button>
        </div>
      </div>
    </section>
  );
}

export default Support;
