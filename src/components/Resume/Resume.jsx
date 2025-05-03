import React, { useState } from "react";
import ResumeBox from "./ResumeBox";
import SkillsProgress from "./SkillProgress";

function Resume() {
  const [handleSkills, setHandleSkills] = useState(false);
  const [handleExperience, setHandleExperience] = useState(true);
  const [handleEducation, setHandleEducation] = useState(false);

  return (
    <div id="resume" className="xl:m-auto max-w-7xl px-5">
      <div className="w-full flex flex-col mb-14 items-center justify-center">
        <h6 className="capitalize red-text tracking-widest lg:text-sm text-xs font-medium font-primary text-center">
        </h6>
        <h1 className="lg:text-6xl text-4xl font-secondary text-gray-300 font-bold mt-3">
          My Resume
        </h1>
      </div>

      <div className="flex sm:flex-row flex-col btn-shadow w-full justify-between items-center font-primary text-lg">
        <button
          onClick={() => {
            setHandleSkills(false);
            setHandleExperience(true);
            setHandleEducation(false);
          }}
          className={`${
            handleExperience ? "pricing-btn-click" : null
          } px-3 w-full flex-1 py-8 max-[500px]:w-full transition-all duration-500 pricing-btn rounded-md text-gray`}
        >
          Experience
        </button>
        <button
          onClick={() => {
            setHandleSkills(true);
            setHandleExperience(false);
            setHandleEducation(false);
          }}
          className={`${
            handleSkills ? "pricing-btn-click" : null
          } px-3 w-full flex-1 py-8 max-[500px]:w-full transition-all duration-500 pricing-btn rounded-md text-gray`}
        >
          Professional Skills
        </button>

        <button
          onClick={() => {
            setHandleSkills(false);
            setHandleExperience(false);
            setHandleEducation(true);
          }}
          className={`${
            handleEducation ? "pricing-btn-click" : null
          } px-3 w-full flex-1 py-8 max-[500px]:w-full transition-all duration-500 pricing-btn rounded-md text-gray`}
        >
          Education
        </button>
      </div>

      <div
        className={`${
          handleSkills || handleEducation || handleExperience
            ? "opacity-100"
            : ""
        } sm:flex-row w-full flex-col flex transition-all duration-1000 opacity-0`}
      >
        <div className={`sm:pr-7 mt-10 sm:w-1/2 w-full`}>
          {/* {handleSkills ? null : ( */}
          <div className="w-full flex flex-col mb-14 items-start justify-center">
            <h6 className="capitalize red-text tracking-widest lg:text-sm text-xs font-light font-primary text-center">
              {handleSkills ? "features" : "features"}
            </h6>
            <h1 className="lg:text-4xl text-2xl font-secondary text-gray-300 font-bold mt-3">
              {handleSkills
                ? "Frontend and Backend Skills"
                : handleExperience
                ? "Job Experience"
                : handleEducation
                ? "Education Quality"
                : null}
            </h1>
          </div>
          {/* )} */}

          {handleEducation || handleExperience ? (
            <div>
              <ResumeBox
                title={
                  handleExperience
                    ? "VMUF Laboratory Intern"
                    : handleEducation
                    ? "University of Baguio"
                    : null
                }
                subTitle={
                  handleExperience
                    ? "San Carlos City, Pangasinan"
                    : handleEducation
                    ? "Computer Science | Bachelor's Degree (2024 - present)"
                    : null
                }
                BtnText={
                  handleExperience ? "PAST" : handleEducation ? "In Progress" : null
                }
                description={
                  handleExperience
                    ? "As a laboratory intern at Virgen Milagrosa University Foundation (VMUF), I assisted in maintaining and troubleshooting computer systems, setting up laboratory equipment, and supporting software installations and updates. I also helped ensure that the lab environment was organized, functional, and ready for student use. This experience strengthened my technical skills and gave me valuable insight into IT support and lab management."
                    : handleEducation
                    ? "I'm currently pursuing a Bachelor of Science in Computer Science at the University of Baguio, where I'm building a strong foundation in programming, operating systems, and network design. My education has allowed me to apply theoretical knowledge through hands-on projects and internships, helping me develop practical skills in both software and hardware aspects of computing. I'm committed to continuously improving and preparing for a career in the tech industry."
                    : null
                }
              />
              <ResumeBox
                title={handleEducation ? "Mother Goose Special Science Highschool" : null}
                subTitle={
                  handleEducation ? "Junior High School (2018 - 2022)" : null
                }
                BtnText={handleEducation ? "Completed" : null}
                description={
                  handleEducation
                    ? "I completed my junior high school education at Mother Goose Special Science High School, where I developed a strong interest in science and technology. The curriculum provided a solid foundation in mathematics and the sciences, fostering my critical thinking and problem-solving abilities. My time at Mother Goose helped ignite my passion for technology and set the stage for my pursuit of a degree in Computer Science."
                    : null
                }
              />
            </div>
          ) : (
            <div className="w-full sm:pr-7">
              <SkillsProgress progressMeter="99%" skillName="HTML" />
              <SkillsProgress progressMeter="90%" skillName="CSS" />
              <SkillsProgress progressMeter="30%" skillName="Bootstrap" />
              <SkillsProgress progressMeter="85%" skillName="TailwindCSS" />
            </div>
          )}
        </div>

        <div className={`sm:pl-7 mt-10 sm:w-1/2 w-full`}>
          <div className="w-full flex flex-col mb-14 items-start justify-center">
            <h6 className="capitalize red-text tracking-widest lg:text-sm text-xs font-light font-primary text-center">
              {handleSkills ? "‎ " : "‎ "}
            </h6>
            <h1 className="lg:text-4xl text-2xl font-secondary text-gray-300 font-bold mt-3">
              {handleSkills
                ? "‎ "
                : handleExperience
                ? "‎"
                : handleEducation
                ? "‎"
                : null}
            </h1>
          </div>

          {handleEducation || handleExperience ? (
            <div>
              <ResumeBox
                title={
                  handleExperience
                    ? "AVS Digital Marketing"
                    : handleEducation
                    ? "Virgen Milagrosa Senior High School"
                    : null
                }
                subTitle={
                  handleExperience
                    ? "Upwork (2024 - Present)"
                    : handleEducation
                    ? "ABM STRAND (2022 - 2024)"
                    : null
                }
                BtnText={
                  handleExperience
                    ? "Present"
                    : handleEducation
                    ? "Completed"
                    : null
                }
                description={
                  handleExperience
                    ? "At Airene Variety Shop, I was involved in digital marketing efforts, including creating social media content, promoting products online, and engaging with customers through digital platforms. I helped increase the shop’s online visibility and supported basic analytics tracking to measure campaign effectiveness. This experience enhanced my creativity, communication skills, and understanding of digital marketing strategies."
                    : handleEducation
                    ? "I completed my senior high school education at Virgen Milagrosa University Foundation, where I was part of the Accountancy, Business, and Management (ABM) strand. During this time, I gained a solid understanding of business principles, marketing, and financial management, which helped shape my analytical and communication skills—skills that continue to support me in my studies and projects in the field of Computer Science."
                    : null
                }
              />
              <ResumeBox
                title={handleEducation ? "Mother Goose Special School System Inc." : null}
                subTitle={
                  handleEducation
                    ? "Pre-School to Elementary"
                    : null
                }
                BtnText={handleEducation ? "Completed" : null}
                description={
                  handleEducation
                    ? "I attended Mother Goose Special School System Inc. for my preschool and elementary education. During these formative years, I was nurtured in a supportive learning environment that emphasized both academic and personal growth. The school’s focus on creativity, discipline, and strong foundational skills helped shape my early love for learning, which continues to drive my academic and personal development today."
                    : null
                }
              />
            </div>
          ) : (
            <div className="sm:pr-7">
              <SkillsProgress progressMeter="34%" skillName="Node JS" />
              <SkillsProgress progressMeter="77%" skillName="Java" />
              <SkillsProgress progressMeter="45%" skillName="React" />
              <SkillsProgress progressMeter="51%" skillName="Javascript" />
              {/* <SkillsProgress progressMeter="95%" skillName="MongoDB" /> */}
              {/* <SkillsProgress progressMeter="95%" skillName="MongoDB" /> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Resume;
