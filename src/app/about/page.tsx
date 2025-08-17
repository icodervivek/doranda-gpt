import React from "react";

const AboutPage = () => {
  return (
    <section
      className="relative isolation-isolate overflow-hidden min-h-screen text-white px-6 py-20 flex flex-col items-center"
      style={{
        background: "linear-gradient(40deg, #121212, #1a1a1a, #1f1f1f)",
      }}
    >
      {/* Subtle Glow Effect */}
      <div
        className="absolute -top-[150px] -left-[150px] w-[700px] h-[700px] z-[-1] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0) 70%)",
          filter: "blur(120px)",
        }}
      ></div>

      {/* Heading */}
      <div className="max-w-4xl text-center mb-10 mt-20">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          About <span className="text-orange-400">DorandaGPT</span>
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          At DorandaGPT, our mission is to make learning more engaging and
          accessible by blending the wisdom of our MCA faculty with the power of
          AI. We strive to create an interactive platform where students can
          learn, explore, and grow through conversations that feel natural,
          supportive, and inspiring.
        </p>
      </div>

      {/* Two-column content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl">
        {/* Mission */}
        <div className="bg-[#222] p-8 rounded-2xl shadow-lg border border-gray-700 hover:shadow-xl transition-all duration-300">
          <h2 className="text-2xl font-bold mb-4 text-orange-400">
            Our Mission
          </h2>
          <p className="text-gray-300 leading-relaxed">
            At DorandaGPT, our mission is to make learning more engaging and
            accessible by blending the wisdom of our MCA faculty with the power
            of AI. We strive to create an interactive platform where students
            can learn, explore, and grow through conversations that feel
            natural, supportive, and inspiring.
          </p>
        </div>

        {/* Story */}
        <div className="bg-[#222] p-8 rounded-2xl shadow-lg border border-gray-700 hover:shadow-xl transition-all duration-300">
          <h2 className="text-2xl font-bold mb-4 text-orange-400">Our Story</h2>
          <p className="text-gray-300 leading-relaxed">
            DorandaGPT was inspired by the vibrant learning culture of Doranda
            College. Seeing how our professors explain concepts with patience,
            humor, and real-world insights, we wanted to capture that spirit in
            an AI companion. What started as a small idea to bring our teachers’
            persona into the digital world has grown into a unique platform that
            makes learning both fun and meaningful.
          </p>
        </div>
      </div>

      {/* Closing Statement */}
      <div className="max-w-3xl text-center mt-16">
        <p className="text-lg text-gray-400 italic">
          “We don’t just build AI to talk — we build AI to connect.”
        </p>
      </div>
    </section>
  );
};

export default AboutPage;
