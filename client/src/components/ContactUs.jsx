import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function ContactUs() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-lg w-full bg-white rounded-xl shadow-xl p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Contact Us
        </h1>

        <p className="text-gray-600 mb-8">
          Have a question or need help? We'd love to hear from you.
        </p>

        <Button onClick={() => navigate("/")}>
          Back to Home
        </Button>
      </div>
    </div>
  );
}

export default ContactUs;
