import * as React from "react";

const MyTalks = () => {
  const allToolsIUse = [
    {
      title: "React-Native-Heroes",
      url: "https://react-native-heroes.netlify.app",
      what: "A React Native app to find the best developers in this language. Made with React-Native and GraphQL.",
    },
    {
      title: "Gatsby v4",
      url: "https://matthysd-gatsby-slide.netlify.app",
      what: "This is my présentation about the new version of Gatsby",
    },
    {
      title: "Alternation présentation",
      url: "https://slides-app-matthysdev.netlify.app",
      what: "My Internship presentation.",
    },
  ];

  return (
    <div className="text-left w-2/3 m-auto">
      <h2 className="text-2xl text-left py-8">Content</h2>
      <ul className="liste">
        {allToolsIUse.map((tool) => {
          return (
            <>
              -
              <a
                href={tool.url}
                className="ml-2 text-purple-400 hover:text-purple-600 text-xl"
              >
                {tool.title}
              </a>
              <div className="p-4">{tool.what}</div>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default MyTalks;
