import * as React from "react";

const MyTools = () => {
  const allToolsIUse = [
    {
      title: "Figma",
      logo: "https://raw.githubusercontent.com/MatthysDucrocq/MatthysDev/main/src/images/fig.png",
      what: "Figma is a design application thats help you to make a mockup.",
      why: "Why : I use this for youtube thumbnails and to make my project mockup",
    },
    {
      title: "Tailwind",
      logo: "https://raw.githubusercontent.com/MatthysDucrocq/MatthysDev/main/src/images/Tailwind.png",
      what: "A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.",
      why: "Why : To make CSS easier",
    },
    {
      title: "Html",
      logo: "https://raw.githubusercontent.com/MatthysDucrocq/MatthysDev/main/src/images/html.png",
      what: "Html is the easiest way to make a simple website.",
      why: "Why : To make a website",
    },
    {
      title: "Css",
      logo: "https://raw.githubusercontent.com/MatthysDucrocq/MatthysDev/main/src/images/css.png",
      what: "CSS is to modify your website design.",
      why: "Why : To make your website beautiful",
    },
    {
      title: "JavaScript",
      logo: "https://raw.githubusercontent.com/MatthysDucrocq/MatthysDev/main/src/images/js.png",
      what: "Javascript is a programmation language to make an interactive website.",
      why: "Why : To have a more dynamic website",
    },
    {
      title: "React",
      logo: "https://raw.githubusercontent.com/MatthysDucrocq/MatthysDev/main/src/images/react.png",
      what: "React is a Javascript library made by Facebook in 2014, you can make components and call it back later.",
      why: "Why : To have a more efficient website with less code",
    },
    {
      title: "Visual studio code",
      logo: "https://raw.githubusercontent.com/MatthysDucrocq/MatthysDev/main/src/images/vsc.png",
      what: "Visual studio code is a text editor, you can add plugins and themes to work in good conditions and faster.",
      why: "Why : Because its the first editor I try and I love it",
    },
    {
      title: "Gatsby",
      logo: "https://raw.githubusercontent.com/MatthysDucrocq/MatthysDev/main/src/images/gatsbt.png",
      what: "Gatsby is an open-source static website generator (SSG) that is based on the frontend development framework React and makes use of Webpack and GraphQL technology.",
      why: "Why : To work with plugins and GraphQl",
    },
    {
      title: "Da Vinci Resolve",
      logo: "https://raw.githubusercontent.com/MatthysDucrocq/MatthysDev/main/src/images/dvr.png",
      what: "Da Vinci Resolve is a video editor like final cut but its free.",
      why: "Why : I use it to edit Office hours live each week",
    },
  ];

  return (
    <div>
      <ul className="liste">
        {allToolsIUse.map((tool) => {
          return (
            <>
              <div className="flex flex-col md:flex-row items-center space-y-4 mt-12 mb-12 m-auto ">
                <div className=" justify-center text-center w-1/3">
                  <img className="m-auto" src={tool.logo} alt="" />
                  <p className="pt-4">{tool.title}</p>
                </div>
                <div className="m-auto text-justify justify-center w-2/3 md:text-left">
                  <div className="text-white">{tool.what}</div>
                  <div className="text-white">{tool.why}</div>
                </div>
              </div>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default MyTools;
