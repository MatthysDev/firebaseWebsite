import * as React from "react";

const Follow = () => {
  const allSocial = [
    {
      socialName: "Github",
      url: "https://github.com/matthysdev",
    },
    {
      socialName: "Twitter",
      url: "https://twitter.com/matthysdev",
    },
    {
      socialName: "Linkedin",
      url: "https://www.linkedin.com/in/matthys-ducrocq-0182381b1/",
    },
    {
      socialName: "My website",
      url: "https://matthys.dev/",
    },
  ];

  return (
    <div className="text-left w-2/3 m-auto pt-8">
      <h2 className="text-2xl text-left">You can find me here :</h2>
      <ul className=" m-auto p-4 liste ">
        {allSocial.map((social) => {
          return (
            <>
              <li>
                -
                <a
                  href={social.url}
                  className="ml-2 text-purple-400 hover:text-purple-600"
                >
                  {social.socialName}
                </a>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default Follow;
