import React, { useState } from "react";
import logo from "..//images/wait.gif";
export default function Airtable() {
  const [isLoaded, setILoaded] = useState(false);

  function handleLoad() {
    setILoaded(true);
  }

  return (
    <>
      {!isLoaded ? (
        <img
          className="m-auto mt-8 w-2/3 border-2 rounded-lg  border-purple-400"
          src={logo}
          alt={"Contacting Matthys"}
        />
      ) : null}
      <iframe
        className={
          isLoaded
            ? "w-7/8 airtable-embed bg-transparent lg:w-2/3 m-auto mt-12 border-2 rounded-lg  border-purple-400"
            : "hide"
        }
        onLoad={handleLoad}
        src="https://airtable.com/embed/shrZLcDgGq0Kb6soN?backgroundColor=purple"
        height="1200"
        //style="background: transparent; border: 1px solid #ccc;"
      ></iframe>
    </>
  );
}
