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

      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {technicalSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-center mb-3">
                <h4 className="font-medium">{skill.name}</h4>
                <span className="text-sm font-medium text-[#80ed99]">
                  {skill.level}%
                </span>
              </div>
              <div className="skill-meter">
                <div
                  className="skill-progress"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-6">Language Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {languageSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-center mb-3">
                <h4 className="font-medium">{skill.name}</h4>
                <span className="text-sm font-medium text-[#80ed99]">
                  {skill.level}%
                </span>
              </div>
              <div className="skill-meter">
                <div
                  className="skill-progress"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
