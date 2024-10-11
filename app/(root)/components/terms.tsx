import React from "react";

const Terms = () => {
  return (
    <div className="bg-bg3 p-8">
      <div className="w-full md:px-32 pb-24 pt-4 mx-auto">
        <h1 className="font-nats text-black md:text-7xl text-4xl mb-6">
          TERMS & CONDITIONS
        </h1>

        {/* Body Text */}
        <p className="md:text-2xl text-lg font-nats text-[#191818] mb-2 md:mb-6">
          Figma ipsum component variant main layer. Subtract asset team polygon
          figjam style content select editor. Connection text horizontal
          vertical outline scrolling pen move hand community. Figjam group
          duplicate scrolling vertical flows community content. Arrow stroke
          align slice polygon background library. Rotate layout strikethrough
          object rotate strikethrough rectangle move device text. Arrow shadow
          edit move stroke italic pen main. Content distribute mask union
          opacity underline fill.
        </p>
        <p className="md:text-2xl text-lg font-nats text-[#191818] mb-2 md:mb-6">
          Select hand undo overflow export project. Thumbnail overflow clip
          thumbnail star bullet font asset. Stroke team link rotate auto object
          selection. Font group bold union pen polygon. Main main layer mask
          strikethrough arrange. Group share inspect layer component vertical
          effect fill selection. Distribute team outline reesizing bullet italic
          vertical. Ellipse shadow inspect content effect. Distribute content
          distribute create component figma font slice vertical select. Asset
          figma bullet draft content align variant. Bullet prototype group draft
          pencil selection draft main underline hand. Star move mask.
        </p>

        {/* Footer Link */}
        <div className="flex items-center">
          <a
            href="/privacy-policy"
            className=" text-white font-ndot uppercase flex items-center"
          >
            PRIVACY POLICY
            <span className="ml-2 border border-gray-800 p-1 text-xs">
              &#8594;
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Terms;
