import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import ExtraCurricular from "@/components/ExtraCurricular";
import Hero from "@/components/Hero";
import NavigationBar from "@/components/NavigationBar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
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
    <main className="overflow-hidden">
      <NavigationBar />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Skills />
      <ExtraCurricular />
      <Contact />

      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-6 md:px-10 text-center">
          <p className="mb-2">
            &copy; {new Date().getFullYear()} G. K. D. Indeewari. All rights
            reserved.
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <a
              href="#"
              className="text-gray-300 hover:text-[#80ed99] transition-colors"
            >
              <span className="sr-only">LinkedIn</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-[#80ed99] transition-colors"
            >
              <span className="sr-only">Personal Website</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
            </a>
          </div>
          <div className="mt-4 text-gray-400 text-sm">
            <p>Lecturer in Economics | University of Sri Jayewardanepura</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
