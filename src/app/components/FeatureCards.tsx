import Image from "next/image";
import Link from "next/link";

export default function FeatureCards() {
  const features = [
    {
      img: "https://res.cloudinary.com/duwkqbnix/image/upload/v1755459847/anshuman-mishra_tetcdt.jpg",
      title: "Anshuman Mishra",
      subtitle: "Assistant Professor & Author",
      desc: "Known for engaging teaching style and practical approach to learning.",
      skills: ["Java", "Discrete Mathematics", "Python", "C++", "C"],
      link: "/persona/anshuman",
    },
    {
      img: "https://res.cloudinary.com/duwkqbnix/image/upload/v1755460006/balwant_kumar_grgngk.jpg",
      title: "Balwant Kumar",
      subtitle: "Assistant Professor & Researcher",
      desc: "Guiding students with a strong focus on academic excellence and innovation.",
      skills: ["DBMS", "DSA", "Data Science", "AI", "ML"],
      link: "/persona/balwant",
    },
    {
      img: "https://res.cloudinary.com/duwkqbnix/image/upload/v1755461400/kundan_kumar_e9it19.jpg",
      title: "Kundan Kumar",
      subtitle: "Assistant Professor & Tech Enthusiast",
      desc: "Always striving to ensure that students can grasp concepts with clarity and ease.",
      skills: ["CSA", "OS", "Software Engineering", "Programming"],
      link: "/persona/kundan",
    },
  ];

  return (
    <section className="bg-transparent text-white px-6 py-6">
      <p className="text-2xl font-sans font-extrabold text-center my-10 text-gray-300 mt-5">
        Select who you&apos;d like to chat with today.
      </p>
      <div className="grid gap-8 md:grid-cols-3 items-stretch">
        {features.map((feature, index) => (
          <Link key={index} href={feature.link} className="h-full">
            <div className="bg-black/40 backdrop-blur-lg rounded-xl p-6 text-center shadow-lg hover:scale-105 transition-transform cursor-pointer border border-gray-700 h-full flex flex-col">
              {/* Profile Image */}
              <div className="flex justify-center mb-4">
                <Image
                  src={feature.img}
                  alt={feature.title}
                  width={100}
                  height={100}
                  className="rounded-full border-2 border-orange-400 object-cover"
                />
              </div>

              <h3 className="text-2xl font-bold">{feature.title}</h3>
              <p className="text-sm text-orange-400 mb-3">{feature.subtitle}</p>
              <p className="text-gray-300 text-sm mb-4 flex-grow">
                {feature.desc}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap justify-center gap-2 mt-auto">
                {feature.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-orange-500/20 text-orange-300 text-xs rounded-full border border-orange-400/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
