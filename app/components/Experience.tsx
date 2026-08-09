import Image from "next/image";
import Link from "next/link";

interface ExperienceCard {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const experienceCards: ExperienceCard[] = [
  {
    id: 1,
    title: "AK infopark - Developer Trainee",
    description: "Developed responsive web interfaces using React.js and JavaScript. Built reusable components, integrated REST APIs, and improved application performance while following modern frontend development practices.",
    icon: "/cards/card-1.png",
  },
  {
    id: 2,
    title: "Pentagon Innovation - UI/UX Designer",
    description: "Worked on designing modern and user-friendly interfaces for web applications. Created wireframes, high-fidelity mockups, and interactive prototypes using Figma while following UI/UX best practices. Collaborated with the team to improve user flows and overall user experience.",
    icon: "/cards/card-2.png",
  },
  {
    id: 3,
    title: "TVK Technologies - Web Developer",
    description: "Worked on developing and maintaining web applications using modern technologies. Collaborated with the team to implement new features and improve existing functionality.",
    icon: "/cards/card-3.png",
  },
];

export default function Experience(): React.JSX.Element {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
          Work Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experienceCards.map((card, index) => {
            const isLast = index === experienceCards.length - 1;
            return (
              <div
                key={card.id}
                className={`${isLast ? "md:col-span-2 md:flex md:justify-center" : ""}`}
              >
                <div
                  className={`bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950 backdrop-blur-sm rounded-xl p-6 border-t-3 border-purple-700 hover:shadow-2xl hover:shadow-purple-900 flex items-center gap-4 min-h-[200px] ${
                    isLast ? "md:w-1/2" : ""
                  }`}
                >
                  <div className="mb-4">
                    <Image
                      src={card.icon}
                      alt={card.title}
                      width={160}
                      height={160}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {card.title}
                    </h3>
                    <p className="text-white/70 text-sm mb-4">{card.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

