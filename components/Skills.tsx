const Skills = () => {
  const technicalSkills = [
    { name: "Attention to Detail", level: 90 },
    { name: "Econometric Analysis", level: 85 },
    { name: "Critical Thinking", level: 95 },
    { name: "Problem Solving", level: 90 },
    { name: "Team Collaboration", level: 95 },
    { name: "Research and Data Interpretation", level: 85 },
  ];

  const languageSkills = [
    { name: "English", level: 85 },
    { name: "Sinhala", level: 100 },
  ];

  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills</h2>

      {/* Technical Skills Section */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {technicalSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center"
            >
              {/* Technical skill icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#80ed99]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 18l6-6-6-6M8 6l-6 6 6 6"
                />
              </svg>
              <h4 className="font-medium ml-3">{skill.name}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* Language Skills Section */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-6">Language Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {languageSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center"
            >
              {/* Language skill icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#80ed99]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 2a10 10 0 100 20 10 10 0 000-20z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2 12h20"
                />
              </svg>
              <h4 className="font-medium ml-3">{skill.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
