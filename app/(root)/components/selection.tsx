import React from "react";

const Selection = () => {
  return (
    <div className=" text-center">
      <div className="bg-bg5 p-8">
        <h1 className="title">How Do We Choose the Top Makers?</h1>
        <p className="mt-8 font-nats text-3xl">
          We’re looking for creators who excel in:
        </p>
        <div className="flex gap-5 mt-32">
          {/* make some card div with a title and description */}
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="bg-gradient-to-tr from-[#2A2A2A] to-[rgba(34,40,52,0.6) p-5 rounded-lg border border-[rgba(0,0,0,0.2)] transform -rotate-6 max-w-[300px] "
              >
                <h1 className="font-ndot text-xl">Quality</h1>
                <p className="mt-5">
                  We look for creators who make high-quality products that are
                  built to last.
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Selection;
