import React from "react";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-gray-900 text-white py-20 px-6 text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-primary mb-6 uppercase">Get in Touch</h2>

        {/* Campaign Contact Info */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-left">
          <h3 className="text-2xl font-bold text-primary mb-3">Campaign Headquarters</h3>
          <p className="text-lg text-gray-300">
            📍 <strong>Address:</strong> 3143 W. 84th St., Cleveland, OH, 44102
          </p>
          
          <h3 className="text-2xl font-bold text-primary mt-6 mb-3">Phone Numbers</h3>
          <p className="text-lg text-gray-300">
            📞 <strong>Lady T:</strong> <a href="tel:2162358167" className="text-primary hover:underline">216-235-8167</a>
          </p>
          <p className="text-lg text-gray-300">
            📞 <strong>Chamere McQueen (Sr. Executive Campaign Mgr):</strong> <a href="tel:2168822702" className="text-primary hover:underline">216-882-2702</a>
          </p>

          <h3 className="text-2xl font-bold text-primary mt-6 mb-3">Email</h3>
          <p className="text-lg text-gray-300">
            📧 <a href="mailto:lwitcher47@gmail.com" className="text-primary hover:underline">lwitcher47@gmail.com</a>
          </p>
        </div>

        {/* Call-to-Action Buttons */}
        <div className="mt-6 space-x-4">
          <button className="px-8 py-3 text-lg font-semibold bg-primary hover:bg-blue-500 transition rounded-full">
            Volunteer
          </button>
          <button className="px-8 py-3 text-lg font-semibold bg-gray-800 hover:bg-gray-600 transition rounded-full">
            Donate
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
