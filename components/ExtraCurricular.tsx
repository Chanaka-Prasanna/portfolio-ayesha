const ExtraCurricular = () => {
  const activities = [
    {
      title: "Head Prefect at Dewanampiyathissa Central Collage",
      duration: "2018-2020",
    },
    { title: "Member of the School Drama Team", duration: "2015-2020" },
    { title: "Member of the School Debating Team", duration: "2017-2020" },
  ];

  return (
    <section id="activities" className="section bg-gray-50">
      <h2 className="section-title">Extra Curricular Activities</h2>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300 border-t-4 border-[#80ed99] flex flex-col"
          >
            <h3 className="text-lg font-semibold mb-3">{activity.title}</h3>
            <p className="text-gray-600 mt-auto">{activity.duration}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExtraCurricular;
