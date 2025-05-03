import React from "react";
import PortfolioBox from "./PortfolioBox";

import AOS from "aos";
import "aos/dist/aos.css"; // Import the CSS for AOS
import lesson1 from '../../Screenshots/Lesson1.png'
import lesson2 from '../../Screenshots/Lesson2.png'
import lesson3 from '../../Screenshots/Lesson3.png'
import lesson4 from '../../Screenshots/Lesson4.png'
import lesson5 from '../../Screenshots/Lesson5.png'
import lesson6 from '../../Screenshots/Lesson6.png'
import lesson7 from '../../Screenshots/Lesson7.png'
import css1 from '../../Screenshots/css1.png'
import css2 from '../../Screenshots/css2.png'
import css2a from '../../Screenshots/css2a.png'
import css2b from '../../Screenshots/css2b.png'
import css3 from '../../Screenshots/css3.png'
import css4 from '../../Screenshots/css4.png'
import css5a from '../../Screenshots/css5a.png'
import css5b from '../../Screenshots/css5b.png'
import css6 from '../../Screenshots/css6.png'
import js1 from '../../Screenshots/js1.png'
import js2 from '../../Screenshots/js2.png'
import js3 from '../../Screenshots/js3.png'
import js4 from '../../Screenshots/js4.png'

AOS.init({
  duration: 400, // Duration of animations in milliseconds
  offset: 10, // Offset (in pixels) from the bottom of the window to trigger animations
  easing: "ease-in-out",
  once: true,
});

const Portfolio = (content) => {
  const {
    box1Img,
    box1Title,
    box1NumOfLikes,
    box2Img,
    box2Title,
    box2NumOfLikes,
    box3Img,
    box3Title,
    box3NumOfLikes,
  } = content;

  return (
    <div
      id="portfolio"
      style={{ maxWidth: "1320px" }}
      className="m-auto"
      data-aos="fade-up"
    >
      <div className="w-full flex flex-col mb-14 items-center justify-center">
        <h6 className="red-text tracking-widest lg:text-sm text-xs font-medium font-primary text-center">
          HUMCOM
        </h6>
        <h1 className="lg:text-6xl text-4xl font-secondary text-gray-300 font-bold mt-3">
          Portfolio
        </h1>
      </div>
      <div
        className="grid lg:grid-cols-3 p-5 md:grid-cols-2 grid-cols-1 place-items-center w-full gap-y-14 gap-x-7"
        style={{ maxWidth: "1320px" }}
      >
        <a href="/HumcomProjects/1st Grading/LabExercise1A.html" target="_blank">
        <PortfolioBox
          type="PRELIMS"
          text="Exercise 1: Simple Resume"
          img={lesson1}
          likes={box1NumOfLikes}  
        />
        </a>

        <a href="/HumcomProjects/1st Grading/LabExercise2A.html" target="_blank">
        <PortfolioBox
          type="PRELIMS"
          text="Exercise 2: Polynomial Expressions"
          img={lesson2}
          likes="19"  
        />
        </a>

        <a href="/HumcomProjects/1st Grading/LabExercise3A.html" target="_blank">
        <PortfolioBox
          type="PRELIMS"
          text="Exercise 3: Lists"
          img={lesson3}
          likes="18"  
        />
        </a>

        <a href="/HumcomProjects/1st Grading/LabExercise4A.html" target="_blank">
        <PortfolioBox
          type="PRELIMS"
          text="Exercise 4: Article Making"
          img={lesson4}
          likes="28"  
        />
        </a>

        <a href="/HumcomProjects/1st Grading/LabExercise5A.html" target="_blank">
        <PortfolioBox
          type="PRELIMS"
          text="Exercise 5: Simple Schedule Table"
          img={lesson5}
          likes="98"  
        />
        </a>

        <a href="/HumcomProjects/1st Grading/LabExercise6A/LabExercise6A.html" target="_blank">
        <PortfolioBox
          type="PRELIMS"
          text="Exercise 6: Complex Schedule Table"
          img={lesson6}
          likes="129"  
        />
        </a>

        <a href="/HumcomProjects/1st Grading/LabExercise7A/LabExercise7.html" target="_blank">
        <PortfolioBox
          type="PRELIMS"
          text="Exercise 7: First Grading Portfolio Website"
          img={lesson7}
          likes="229"  
        />
        </a>

        <a href="/HumcomProjects/2nd Grading/ExerciseCSS1.html" target="_blank">
        <PortfolioBox
          type="MIDTERMS"
          text="Exercise 1: Polishing of Polynomial Expressions"
          img={css1}
          likes="19"  
        />
        </a>

        <a href="/HumcomProjects/2nd Grading/ExerciseCSS2.html" target="_blank">
        <PortfolioBox
          type="MIDTERMS"
          text="Exercise 2: Polishing of Lists"
          img={css2}
          likes="19"  
        />
        </a>

        <a href="/HumcomProjects/2nd Grading/ExerciseCSS2a.html" target="_blank">
        <PortfolioBox
          type="MIDTERMS"
          text="Exercise 2A: Setting Backgrounds"
          img={css2a}
          likes="19"  
        />
        </a>

        <a href="/HumcomProjects/2nd Grading/ExerciseCSS2b.html" target="_blank">
        <PortfolioBox
          type="MIDTERMS"
          text="Exercise 2B: Settings Backgrounds for DIVS"
          img={css2b}
          likes="19"  
        />
        </a>

        <a href="/HumcomProjects/2nd Grading/ExerciseCSS3.html" target="_blank">
        <PortfolioBox
          type="MIDTERMS"
          text="Exercise 3: CSS Links (Active , Hover etc.)"
          img={css3}
          likes="90"  
        />
        </a>

        <a href="/HumcomProjects/2nd Grading/ExerciseCSS4.html" target="_blank">
        <PortfolioBox
          type="MIDTERMS"
          text="Exercise 4: Using CSS Classes for Specific Targeting"
          img={css4}
          likes="99"  
        />
        </a>

        <a href="/HumcomProjects/2nd Grading/ExerciseCSS5a.html" target="_blank">
        <PortfolioBox
          type="MIDTERMS"
          text="Exercise 5a: Application of Margins"
          img={css5a}
          likes="39"  
        />
        </a>

        <a href="/HumcomProjects/2nd Grading/ExerciseCSS5b.html" target="_blank">
        <PortfolioBox
          type="MIDTERMS"
          text="Exercise 5b: Application of Margins"
          img={css5b}
          likes="19"  
        />
        </a>

        <a href="/HumcomProjects/2nd Grading/ExerciseCSS6.html" target="_blank">
        <PortfolioBox
          type="MIDTERMS"
          text="Exercise 6: Understanding Div Floats and Clear"
          img={css6}
          likes="139"  
        />
        </a>

        <a href="/HumcomProjects/FINALS/FINALS1/calculator.html" target="_blank">
        <PortfolioBox
          type="FINALS"
          text="Exercise 1: Building a Calculator Using JS"
          img={js1}
          likes="19"  
        />
        </a>

        <a href="/HumcomProjects/FINALS/FINALS2/index.html" target="_blank">
        <PortfolioBox
          type="FINALS"
          text="Exercise 2: Odd or Even ; Prime or Composite Checker"
          img={js2}
          likes="109"  
        />
      </a>

      <a href="/HumcomProjects/FINALS/FINALS3/index.html" target="_blank">
        <PortfolioBox
          type="FINALS"
          text="Exercise 3: Kilometers to Centimeters Program"
          img={js3}
          likes="190"  
        />
      </a>

      <a href="/HumcomProjects/FINALS/FINALS4/index.html" target="_blank">
        <PortfolioBox
          type="FINALS"
          text="Exercise 4: Dynamic Multiplication Table"
          img={js4}
          likes="219"  
        />
        </a>
        {/* <PortfolioBox />
        <PortfolioBox />
        <PortfolioBox /> */}
      </div>
    </div>
  );
};

export default Portfolio;
