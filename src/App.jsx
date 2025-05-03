import React, { useState, useEffect } from "react";
import "./assets/style.css";
import "./assets/script";

//Components
import Navbar from "./Layouts/Navbar";
import Home from "./components/Home/Home";
import Features from "./components/Features/Features";
import Portfolio from "./components/Portfolio/Portfolio";
import Resume from "./components/Resume/Resume";
import Footer from "./Layouts/Footer";

//Elements
import Seperator from "./Elements/Seperator";
import BackToTop from "./Elements/BackToTop";
import Credits from "./Elements/Credits";
import Spinner from "./Elements/Spinner";

const App = () => {
  const [bodyClick] = useState(false);
  const [setOnHireMeClick] = useState(true);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
     setTimeout(() => {
      setIsLoading(false)
    }, 500)
  }, []);

  const hireMeClick = (childStateValue) => {
    setOnHireMeClick(childStateValue);
  };

  // className={`${!onHireMeClick ? "fixed " : null}`}
  // onClick={() => setBodyClick(true)}

  /////////////////////////////////////////////////////////   NAVBAR   //////////////////////////////////////////////////////////

  /////////////////////////////////////////////////////////   HOME   //////////////////////////////////////////////////////////

  const name = "Asher";
  const profession = "UB STUDENT";
  const aboutMe = `I'm Asher Nathaniel De Guzman, a Computer Science student at the University of Baguio. 
  I'm passionate about technology, problem-solving, and continuously improving my skills in programming, 
  operating systems, and network design. I'm always eager to learn and grow in the field of computing.`;
  const githubAccountLink = "https://github.com/XeensTzy";
  const twitterAccountLink = "https://x.com/dxeensg";
  const linkedinAccountLink =
    "https://www.linkedin.com/in/asher-nathaniel-de-guzman-9a5bb5313/";

  /////////////////////////////////////////////////////////   FEATURES   //////////////////////////////////////////////////////////

  // Just fill the content for number of boxes you want. e.g if you want 4 boxes fill up four boxes.

  const febox1Title = "Web Development";
  const febox1Description =
    "I am a proficient web developer with expertise in crafting websites using a combination of different technologies";

  const febox2Title = "Software Development";
  const febox2Description = `As a MERN stack development specialist, I offer expertise in crafting robust and dynamic web applications. `;

  const febox3Title = "AI Integration";
  const febox3Description =
    "In the realm of AI integration, I specialize in seamlessly merging artificial intelligence solutions into your existing systems and processes. ";

  /////////////////////////////////////////////////////////   RESUME   //////////////////////////////////////////////////////////

  /////////////////////////////////////////////////////////   PORTFOLIO   //////////////////////////////////////////////////////////

  const pobox1Img =
    "https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-02-340x250.jpg";
  const pobox1Title = "Ecommerce Fashion Website";
  const pobox1NumOfLikes = "14";

  const pobox2Img =
    "https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-02-340x250.jpg";
  const pobox2Title = "Quiz Builder Application";
  const pobox2NumOfLikes = "4";

  const pobox3Img =
    "https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-02-340x250.jpg";
  const pobox3Title = "Notes Keeping Application";
  const pobox3NumOfLikes = "26";



  /////////////////////////////////////////////////////////   FOOTER   //////////////////////////////////////////////////////////

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          
          <Navbar bodyClick={bodyClick} onHireMeClick={hireMeClick} />
          
          <Home
            name={name}
            profession={profession}
            aboutMe={aboutMe}
            github={githubAccountLink}
            twitter={twitterAccountLink}
            linkedin={linkedinAccountLink}
          />

          <Seperator />
          <Features
            box1Title={febox1Title}
            box1Description={febox1Description}
            box2Title={febox2Title}
            box2Description={febox2Description}
            box3Title={febox3Title}
            box3Description={febox3Description}
          />
          <Seperator />
          <Resume />
          <Seperator />
          <Portfolio
            box1Img={pobox1Img}
            box1NumOfLikes={pobox1NumOfLikes}
            box1Title={pobox1Title}
            box2Img={pobox2Img}
            box2NumOfLikes={pobox2NumOfLikes}
            box2Title={pobox2Title}
            box3Img={pobox3Img}
            box3NumOfLikes={pobox3NumOfLikes}
            box3Title={pobox3Title}
          />
          
          <Seperator />
          <Footer />
          <Seperator />
          <Credits />
          <BackToTop />
        </>
      )}
    </>
  );
};

export default App;
