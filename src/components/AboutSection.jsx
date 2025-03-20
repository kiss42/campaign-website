import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Candidate Image */}
        <img src="/src/assets/candidate.jpg" alt="Candidate" className="rounded-lg shadow-lg w-full" />

        {/* Content */}
        <div>
          <h2 className="text-4xl font-bold text-primary mb-4 uppercase">Meet LaTorya "T" Witcher</h2>

          <p className="text-lg leading-relaxed text-gray-300">
            Ms. Witcher’s mission is to ensure that our communities have a <strong>strong voice</strong> in the decisions that affect us daily.  
            She is dedicated to <strong>holding local government accountable</strong> to the <strong>real needs of the people</strong> and creating a better, more unified future.  
            <strong>The people deserve leadership that listens, takes action, and fights for the community.</strong>  
            Together, we stand as <strong>#1Voice216</strong>.
          </p>

          <ul className="mt-6 space-y-3 text-lg">
            <li>✔️ <strong>Over 10 years of grassroots activism & leadership</strong></li>
            <li>✔️ <strong>A fierce advocate for economic growth & small businesses</strong></li>
            <li>✔️ <strong>Champion for education, youth development, and safer communities</strong></li>
          </ul>

          <button className="mt-6 px-8 py-3 text-lg font-semibold bg-primary hover:bg-blue-500 transition rounded-full">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
