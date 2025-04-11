const About = () => {
  return (
    <section id="about" className="section bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">About Me</h2>

        <div className="mt-8 bg-white p-8 rounded-lg shadow-sm">
          <p className="text-lg mb-6">
            Dynamic and people-focused professional with a strong foundation in
            <span className="highlight"> Human Resource Management</span>,
            specializing in team leadership, employee engagement, and strategic
            HR consulting.
          </p>

          <p className="text-lg mb-6">
            Proven ability to foster positive workplace environments, manage
            diverse teams, and align human capital strategies with
            organizational goals. Adept at resolving workplace issues,
            optimizing talent performance, and supporting employee development
            through proactive coaching and effective communication.
          </p>

          <p className="text-lg">
            Passionate about creating value through{" "}
            <span className="highlight">collaboration</span>,
            <span className="highlight"> empathy</span>, and practical HR
            solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
