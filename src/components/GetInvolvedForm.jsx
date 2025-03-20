import React, { useState } from "react";

const GetInvolvedForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission to Google Forms
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const googleFormURL = "https://docs.google.com/forms/d/e/1FAIpQLSeWs0rMpmq1DVPNxw-MFL-3Ze_SB8GZD-CwWkNHvQXV7-rM_g/formResponse";

    // Replace `entry.YOUR_FIELD_ID` with the actual Google Forms field IDs
    const formDataObject = new FormData();
    formDataObject.append("entry.267731534", formData.firstName);
    formDataObject.append("entry.588517332", formData.lastName);
    formDataObject.append("entry.527761571", formData.email);
    formDataObject.append("entry.1560451582", formData.phone);

    try {
      await fetch(googleFormURL, {
        method: "POST",
        mode: "no-cors",
        body: formDataObject,
      });

      setMessage("✅ Thank you! We've received your information.");
      setFormData({ firstName: "", lastName: "", email: "", phone: "" });
    } catch (error) {
      setMessage("❌ Error submitting form.");
    }

    setLoading(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
      <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-bold text-primary mb-4">Get Involved</h2>

        {message ? (
          <p className="text-lg text-green-400">{message}</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full p-2 rounded-md bg-gray-800 border border-gray-600"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full p-2 rounded-md bg-gray-800 border border-gray-600"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 rounded-md bg-gray-800 border border-gray-600"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-2 rounded-md bg-gray-800 border border-gray-600"
            />
            <button
              type="submit"
              className="w-full py-2 bg-primary text-white font-bold rounded-md hover:bg-accent transition"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        )}

        {/* Close Button */}
        <button onClick={onClose} className="mt-4 text-gray-400 hover:text-white">
          Close
        </button>
      </div>
    </div>
  );
};

export default GetInvolvedForm;
