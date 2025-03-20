import React from "react";

const IssuesSection = () => {
  const issues = [
    { title: "Stronger Schools", description: "Fund education, increase teacher salaries, and provide better resources." },
    { title: "Safe Communities", description: "End gun violence, promote community policing, and build trust." },
    { title: "Economic Growth", description: "Invest in small businesses and bring jobs to our communities." },
    { title: "Affordable Housing", description: "Stop displacement and expand affordable housing programs." },
    { title: "Environmental Justice", description: "Ensure clean air, clean water, and green spaces for all." }
  ];

  return (
    <section id="issues" className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-primary mb-8 uppercase">Our Priorities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {issues.map((issue, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-accent mb-2">{issue.title}</h3>
              <p className="text-lg">{issue.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IssuesSection;
