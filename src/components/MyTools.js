import * as React from "react";

const MyTools = () => {
  const allToolsIUse = [
    {
      title: "Figma",
      logo: "https://raw.githubusercontent.com/MatthysDucrocq/MatthysDev/main/src/images/fig.png",
      what: "Figma is a design application who help you to make mockup.",
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
      why: "Why : To make website",
    },
    {
      title: "Css",
      logo: "https://raw.githubusercontent.com/MatthysDucrocq/MatthysDev/main/src/images/css.png",
      what: "CSS is to modify your website design.",
      why: "Why : To make your website beautifull",
    },
    {
      title: "Javascript",
      logo: "https://raw.githubusercontent.com/MatthysDucrocq/MatthysDev/main/src/images/js.png",
      what: "javascript is a promgrammation language to make interactive website.",
      why: "Why : To have a more dynamic website",
    },
    {
      title: "React",
      logo: "https://raw.githubusercontent.com/MatthysDucrocq/MatthysDev/main/src/images/react.png",
      what: "React is Javascript library made by facebook in 2014, you can make components and call it back later.",
      why: "To have a more efficient website with less code",
    },
    {
      title: "VSC",
      logo: "https://raw.githubusercontent.com/MatthysDucrocq/MatthysDev/main/src/images/vsc.png",
      what: "visual studio code is a text editor, you can add plugins and themes to work in good conditions and faster.",
      why: "Because its the first editor i try and i love it",
    },
    {
      title: "Gatsby",
      logo: "https://raw.githubusercontent.com/MatthysDucrocq/MatthysDev/main/src/images/gatsbt.png",
      what: "Gatsby is an open-source static website generator (SSG) that is based on the frontend development framework React and makes use of Webpack and GraphQL technology.",
      why: "To work with plugins and GraphQl",
    },
    {
      title: "DVR",
      logo: "https://raw.githubusercontent.com/MatthysDucrocq/MatthysDev/main/src/images/dvr.png",
      what: "Da Vinci Resolve is a video editor like final cut but its free.",
      why: "I use it to edit Office hours live each week",
    },
  ];

  return (
    <div>
      <ul className="liste">
        {allToolsIUse.map((tool) => {
          return (
            <>
              <div className="flex mt-12 mb-12 m-auto w-5/6">
                <div className="mt-auto mb-auto justify-center">
                  <img src={tool.logo} alt="" />
                  <p>{tool.title}</p>
                </div>
                <div className="m-auto justify-center w-2/3 text-left">
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
