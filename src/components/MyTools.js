import * as React from "react";

const MyTools = () => {
  const allToolsIUse = [
    {
      title: "figma",
      logoName: "fig.png",
      what: "because",
      why: "parce que",
    },
    {
      title: "gatsby",
      logoName: "fig.png",
      what: "because",
      why: "parce que",
    },
  ];

  return (
    <div>
      <ul className="liste">
        {allToolsIUse.map((tool) => {
          return (
            <>
              <div className="text-white">{tool.title}</div>;
              <img
                src={require(`../images/${tool.logoName}`)}
                alt={tool.title}
              />
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default MyTools;
