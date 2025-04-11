import Head from "next/head";
import Image from "next/image"; // Import Next.js Image component

export default function Home() {
  const primaryColor = "#80ed99"; // Your primary color

  // Inline style for highlighted words/buttons if not using Tailwind extensively
  const highlightStyle = { color: primaryColor, fontWeight: "bold" };
  const buttonStyle = {
    backgroundColor: primaryColor,
    color: "black",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      {/* You can manage Head metadata in layout.tsx for App Router */}
      {/* Or keep specific overrides here if needed */}
      <Head>
        <title>Ayesha Madhuwanthi - HR Intern</title>
        <meta
          name="description"
          content="Personal portfolio website for Ayesha Madhuwanthi, Human Resource Intern."
        />
        {/* Favicon link often goes in layout.tsx */}
      </Head>

      <main className="container mx-auto p-8 space-y-12">
        {/* --- Hero Section --- */}
        <section
          id="hero"
          className="text-center flex flex-col items-center space-y-4"
        >
          {/* Profile Picture Placeholder - Replace with actual Next.js Image */}
          <div className="w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center text-gray-500 mb-4">
            {/* <Image
              src="/path/to/your/profile-picture.jpg" // Add your image path in /public
              alt="Ayesha Madhuwanthi"
              width={128}
              height={128}
              className="rounded-full object-cover" // Ensure image covers the area
            /> */}
            <span>(Profile Pic)</span>
          </div>
          <h1 className="text-4xl font-bold">Ayesha Madhuwanthi</h1>
          <h2 className={`text-2xl text-[${primaryColor}]`}>
            Human Resource Intern
          </h2>{" "}
          {/* Using arbitrary value for color */}
          <div className="flex space-x-4">
            {/* Replace # with actual URLs */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-[${primaryColor}] text-black px-5 py-2.5 rounded font-bold hover:opacity-90 transition-opacity`}
            >
              LinkedIn
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-[${primaryColor}] text-black px-5 py-2.5 rounded font-bold hover:opacity-90 transition-opacity`}
            >
              Personal Website
            </a>
          </div>
        </section>

        {/* --- About Me --- */}
        <section
          id="about"
          className="bg-white p-6 rounded-lg shadow-md scroll-mt-16"
        >
          {" "}
          {/* scroll-mt for better anchor linking */}
          <h3
            className={`text-2xl font-semibold mb-4 border-b-2 pb-2 border-[${primaryColor}]`}
          >
            About Me
          </h3>
          <p className="mb-2">
            Dynamic and people focused professional with a strong foundation in{" "}
            <span className={`font-bold text-[${primaryColor}]`}>
              Human Resource Management
            </span>
            , specializing in team leadership, employee engagement, and
            strategic HR consulting. [cite: 1, 2]
          </p>
          <p className="mb-2">
            Proven ability to foster positive workplace environments, manage
            diverse teams, and align human capital strategies with
            organizational goals. [cite: 2]
          </p>
          <p className="mb-2">
            Adept at resolving workplace issues, optimizing talent performance,
            and supporting employee development through proactive coaching and
            effective communication. [cite: 3]
          </p>
          <p>
            Passionate about creating value through{" "}
            <span className={`font-bold text-[${primaryColor}]`}>
              collaboration
            </span>
            , empathy, and practical HR solutions. [cite: 4]
          </p>
        </section>

        {/* --- Education --- */}
        <section
          id="education"
          className="bg-white p-6 rounded-lg shadow-md scroll-mt-16"
        >
          <h3
            className={`text-2xl font-semibold mb-4 border-b-2 pb-2 border-[${primaryColor}]`}
          >
            Education
          </h3>
          <div className="mb-4">
            <h4 className="text-lg font-semibold">BA (Hons) in Economics</h4>
            <p>University of Sri Jayewardenapura [cite: 1]</p>
            <p className="text-sm text-gray-600">
              2022 - 2025 (Expected) [cite: 1]
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Diploma in HR Management</h4>
            <p>IBSC Campus [cite: 1]</p>
            <p className="text-sm text-gray-600">2023 - 2024 [cite: 1]</p>
          </div>
        </section>

        {/* --- Skills --- */}
        <section
          id="skills"
          className="bg-white p-6 rounded-lg shadow-md scroll-mt-16"
        >
          <h3
            className={`text-2xl font-semibold mb-4 border-b-2 pb-2 border-[${primaryColor}]`}
          >
            Skills
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Attention to Detail [cite: 5]</li>
            <li>Econometric Analysis [cite: 5]</li>
            <li>Critical Thinking [cite: 5]</li>
            <li>Problem Solving [cite: 5]</li>
            <li>Team Collaboration [cite: 5]</li>
            <li>Research and Data Interpretation [cite: 5]</li>
          </ul>
        </section>

        {/* --- Academic Projects --- */}
        <section
          id="projects"
          className="bg-white p-6 rounded-lg shadow-md scroll-mt-16"
        >
          <h3
            className={`text-2xl font-semibold mb-4 border-b-2 pb-2 border-[${primaryColor}]`}
          >
            Academic Projects
          </h3>
          <div>
            <h4 className="text-lg font-semibold">
              Final Year Research (Ongoing) [cite: 5]
            </h4>
            <p className="italic mb-2">
              The Impact of Vocational Training Courses in Sri Lanka on
              Increasing Youth Employment [cite: 5]
            </p>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>
                <span className={`font-semibold text-[${primaryColor}]`}>
                  Objective:
                </span>{" "}
                To identify how vocational training impacts employment outcomes
                among youth[cite: 5].
              </li>
              <li>
                <span className={`font-semibold text-[${primaryColor}]`}>
                  Focus Area:
                </span>{" "}
                Kurunegala District[cite: 5].
              </li>
              <li>
                <span className={`font-semibold text-[${primaryColor}]`}>
                  Methodology:
                </span>{" "}
                Survey-based, quantitative analysis[cite: 5].
              </li>
              <li>
                <span className={`font-semibold text-[${primaryColor}]`}>
                  Sample:
                </span>{" "}
                300 vocational training graduates[cite: 5].
              </li>
              <li>
                <span className={`font-semibold text-[${primaryColor}]`}>
                  Variables:
                </span>{" "}
                NVQ level, training field, gender, education level, age[cite:
                5].
              </li>
            </ul>
          </div>
        </section>

        {/* --- Extra Curricular Activities --- */}
        <section
          id="activities"
          className="bg-white p-6 rounded-lg shadow-md scroll-mt-16"
        >
          <h3
            className={`text-2xl font-semibold mb-4 border-b-2 pb-2 border-[${primaryColor}]`}
          >
            Extra Curricular Activities
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Served as the head prefect at Dewanampiyathissa Central Collage
              (2018-2020)[cite: 5].
            </li>
            <li>
              Worked as a member of the school drama team (2015-2020)[cite: 5].
            </li>
            <li>
              Became a member of the school debeting team (2017-2020)[cite: 5].
            </li>
          </ul>
        </section>

        {/* --- Contact --- */}
        <section
          id="contact"
          className="text-center bg-white p-6 rounded-lg shadow-md scroll-mt-16"
        >
          <h3 className="text-2xl font-semibold mb-4">Get In Touch</h3>
          <p className="mb-2">
            Email:{" "}
            <a
              href="mailto:ayeshadinfo@gmail.com"
              className={`text-[${primaryColor}] hover:underline`}
            >
              ayeshadinfo@gmail.com
            </a>{" "}
            [cite: 1]
          </p>
          <p className="mb-2">
            Phone:{" "}
            <span className={`text-[${primaryColor}]`}>{`076 3127437`}</span>{" "}
            [cite: 1]
          </p>
          <p>Location: Polpithigama, Kurunegala [cite: 1]</p>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center p-4 text-sm text-gray-500 mt-12">
        © {new Date().getFullYear()} Ayesha Madhuwanthi. All rights reserved.
      </footer>
    </div>
  );
}
