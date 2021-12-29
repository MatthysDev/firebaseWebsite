import * as React from "react";

const MyProjects = () => {
  const allProjects = [
    {
      title: "Inspiration",
      logo: "https://inspiration.davidl.fr/social.png",
      what: "Figma is a design application who help you to make mockup.",
      why: "Why : I use this for youtube thumbnails and to make my project mockup",
    },
    {
      title: "Art au Féminin",
      logo: "data:image/png;base64,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",
      what: "Figma is a design application who help you to make mockup.",
      why: "Why : I use this for youtube thumbnails and to make my project mockup",
    },
    {
      title: "Matthys.dev",
      logo: "https://raw.githubusercontent.com/MatthysDucrocq/MatthysDev/main/src/images/blackLogo.png",
      what: "Figma is a design application who help you to make mockup.",
      why: "Why : I use this for youtube thumbnails and to make my project mockup",
    },
    {
      title: "BrawlApp",
      logo: "https://www.meme-arsenal.com/memes/9ed65d5cfbd6002def61d46b2dd2f64c.jpg",
      what: "Figma is a design application who help you to make mockup.",
      why: "Why : I use this for youtube thumbnails and to make my project mockup",
    },
    {
      title: "Symfony Project",
      logo: "https://avatars.githubusercontent.com/u/143937?v=4",
      what: "Figma is a design application who help you to make mockup.",
      why: "Why : I use this for youtube thumbnails and to make my project mockup",
    },
    {
      title: "Coffeature App",
      logo: "https://raw.githubusercontent.com/MatthysDucrocq/coffeatureApp/master/assets/img/astro.png",
      what: "Figma is a design application who help you to make mockup.",
      why: "Why : I use this for youtube thumbnails and to make my project mockup",
    },
    {
      title: "Disk Orelsan",
      logo: "https://pbs.twimg.com/profile_images/1461470035835301896/I_NT0dhM_400x400.jpg",
      what: "Figma is a design application who help you to make mockup.",
      why: "Why : I use this for youtube thumbnails and to make my project mockup",
    },
    {
      title: "SpaceCraft",
      logo: "https://cdn0.iconfinder.com/data/icons/jumpicon-space-filled-line-1/32/-_Rocket-Space-Ship-Spacecraft-Launch-512.png",
      what: "Figma is a design application who help you to make mockup.",
      why: "Why : I use this for youtube thumbnails and to make my project mockup",
    },
    {
      title: "Office Hours",
      logo: "https://i.pinimg.com/originals/8c/8d/2a/8c8d2a06f82a817f856b35ab1c6f6146.jpg",
      what: "Figma is a design application who help you to make mockup.",
      why: "Why : I use this for youtube thumbnails and to make my project mockup",
    },
    {
      title: "Slides",
      logo: "https://images.assetsdelivery.com/compings_v2/muslumstock/muslumstock1811/muslumstock181100444.jpg",
      what: "Figma is a design application who help you to make mockup.",
      why: "Why : I use this for youtube thumbnails and to make my project mockup",
    },
  ];

  return (
    <div>
      <ul className="liste">
        {allProjects.map((project) => {
          return (
            <>
              <div className="flex mt-12 mb-12 m-auto ">
                <div className=" justify-center text-center w-1/3">
                  <img
                    className="m-auto border-4 rounded-md border-purple-400 "
                    src={project.logo}
                    alt=""
                    width={128}
                    height={128}
                  />
                  <p className="pt-4">{project.title}</p>
                </div>
                <div className="m-auto justify-center w-2/3 text-left">
                  <div className="text-white">{project.what}</div>
                  <div className="text-white">{project.why}</div>
                </div>
              </div>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default MyProjects;
