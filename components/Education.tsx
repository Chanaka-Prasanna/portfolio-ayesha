const Education = () => {
  const educationData = [
    {
      degree: "BA (Hons) in Economics",
      institution: "University of Sri Jayewardenapura",
      duration: "2022 - 2025 (Expected)",
    },
    {
      degree: "Diploma in HR Management",
      institution: "IBSC Campus",
      duration: "2023 - 2024",
    },
  ];

  return (
    <section id="education" className="section">
      <h2 className="section-title">Education</h2>

      <div className="grid md:grid-cols-2 gap-8 mt-8">
        {educationData.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#80ed99] hover:shadow-md transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">{item.degree}</h3>
            <p className="text-gray-600 mb-3">{item.institution}</p>
            <p className="inline-block bg-gray-100 px-3 py-1 rounded-full text-sm">
              {item.duration}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
