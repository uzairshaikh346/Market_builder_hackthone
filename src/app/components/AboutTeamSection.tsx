import Image from "next/image";
import member1 from "@/app/imagess/aboutImages/team/item1.jpg";
import member2 from "@/app/imagess/aboutImages/team/item2.jpg";
import member3 from "@/app/imagess/aboutImages/team/item3.jpg";

const AboutTeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "John Doe",
      position: "UI Developer",
      description: "Professional",
      image: member1,
    },
    {
      id: 2,
      name: "Jane Doe",
      position: "Software Engineer",
      description: "Experienced",
      image: member2,
    },
    {
      id: 3,
      name: "Peter Pan",
      position: "Project Manager",
      description: "Expert",
      image: member3,
    },
  ];
  return (
    <section className="text-gray-600 body-font bg-gray-50">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-[40px] font-bold title-font mb-4 text-gray-900 relative inline-block mx-auto">
            Meet Our Team
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#23A6F0]"></span>
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base mt-6">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="flex flex-wrap -m-4 justify-center">
          {teamMembers.map((member) => (
            <div key={member.id} className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative w-full overflow-hidden group">
                  <Image
                    alt={`${member.name} - ${member.position}`}
                    className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    src={member.image}
                    width={400}
                    height={300}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="w-full p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h2 className="title-font font-bold text-xl text-gray-900 mb-1 hover:text-[#23A6F0] transition-colors">
                      {member.name}
                    </h2>
                    <h3 className="text-[#23A6F0] font-medium mb-3">
                      {member.position}
                    </h3>
                    <p className="mb-4 text-gray-600">{member.description}</p>
                  </div>
                  <span className="inline-flex mt-2">
                    <a className="text-gray-400 hover:text-[#23A6F0] transition-colors cursor-pointer">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                      </svg>
                    </a>
                    <a className="ml-3 text-gray-400 hover:text-[#23A6F0] transition-colors cursor-pointer">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                      </svg>
                    </a>
                    <a className="ml-3 text-gray-400 hover:text-[#23A6F0] transition-colors cursor-pointer">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeamSection;
