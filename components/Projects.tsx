const Projects = () => {
  return (
    <section id="projects" className="section bg-gray-50">
      <h2 className="section-title">Academic Projects</h2>

      <div className="mt-8">
        <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition duration-300">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-12 w-1 bg-[#80ed99]"></div>
            <h3 className="text-xl font-bold">Final Year Research (Ongoing)</h3>
          </div>

          <h4 className="text-lg font-semibold mb-4">
            The Impact of Vocational Training Courses in Sri Lanka on Increasing
            Youth Employment
          </h4>

          <div className="mb-4">
            <p className="font-medium text-gray-700">Objective:</p>
            <p className="ml-4">
              To identify how vocational training impacts employment outcomes
              among youth
            </p>
          </div>

          <div className="mb-4">
            <p className="font-medium text-gray-700">Focus Area:</p>
            <p className="ml-4">Kurunegala District</p>
          </div>

          <div className="mb-4">
            <p className="font-medium text-gray-700">Methodology:</p>
            <ul className="ml-4 list-disc list-inside space-y-1">
              <li>Survey based, quantitative analysis</li>
              <li>Sample of 300 vocational training graduates</li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-gray-700">Variables:</p>
            <ul className="ml-4 list-disc list-inside space-y-1">
              <li>NVQ level</li>
              <li>Training field</li>
              <li>Gender</li>
              <li>Education level</li>
              <li>Age</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
