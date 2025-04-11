import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1">
          <h1 className="mb-4">
            Hello, I'm{" "}
            <span className="text-[#80ed99]">G. K. D. Indeewari</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium mb-6 text-gray-600">
            HR Professional & Economics Researcher
          </h2>
          <p className="text-lg mb-8 max-w-lg text-gray-600">
            Dynamic and people-focused professional specializing in Human
            Resource Management and Economic Research. Passionate about creating
            value through collaboration, empathy, and practical solutions.
          </p>
          <div className="flex gap-4">
            <a href="#contact" className="btn-primary">
              Contact Me
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
            <a
              href="#about"
              className="px-6 py-3 rounded-md font-medium border border-gray-300 hover:border-[#80ed99] transition duration-300"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#80ed99]">
            <Image
              src="/api/placeholder/400/400"
              alt="G. K. D. Indeewari"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
