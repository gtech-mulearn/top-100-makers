import React from "react";

const Terms = () => {
  const termsData = [
    {
      id: 1,
      title: "Respect for Users",
      content:
        "You must respect the rights, privacy, and intellectual property of other users on the site.",
    },
    {
      id: 2,
      title: "No Spam or Unsolicited Content",
      content:
        "You must not post spam, unsolicited messages, or irrelevant content on the site.",
    },
    {
      id: 3,
      title: "No Harassment or Bullying",
      content:
        "You must not harass, bully, or engage in any harmful behavior toward other users on the site.",
    },
    {
      id: 4,
      title: "Prohibition of Illegal Activities",
      content:
        "You must not engage in illegal activities on the site, including but not limited to copyright infringement, hacking, or any other unlawful actions.",
    },
    {
      id: 5,
      title: "Content License",
      content:
        "By sharing content on the site, you grant the site a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, and distribute your content.",
    },
    {
      id: 6,
      title: "Content Guidelines",
      content:
        "You must comply with the site's content guidelines, which include but are not limited to:",
      subItems: [
        "No posting of content that is illegal or promotes illegal activities.",
        "No posting of content that infringes on the intellectual property rights of others.",
        "No posting of content that is defamatory, libelous, or harmful.",
      ],
    },
    {
      id: 7,
      title: "Account Suspension or Termination",
      content:
        "The site reserves the right to suspend or terminate your account if you violate these terms and conditions.",
    },
    {
      id: 8,
      title: "Governing Law",
      content:
        "This agreement will be governed by and construed under the laws of Kerala, India.",
    },
    {
      id: 9,
      title: "Modifications to Terms and Conditions",
      content:
        "The site reserves the right to modify or update these terms and conditions at any time. Continued use of the site implies acceptance of the updated terms.",
    },
  ];

  return (
    <div className="bg-bg3 p-8">
      <div className="w-full md:px-32 mx-auto">
        <h1 className="font-nats text-black md:text-7xl text-4xl mb-6">
          TERMS & CONDITIONS
        </h1>

        {/* Body Text */}
        <p className="md:text-2xl text-lg font-nats text-[#191818] mb-2 md:mb-6">
          Top 100 Makers (the "Site") is a platform that provides a community
          for makers to collaborate, share projects, learn from each other, and
          showcase their creativity. By using the site, you agree to the
          following terms and conditions:
        </p>
        <div className="md:text-2xl text-lg font-nats text-[#191818] mb-2 md:mb-6">
          {termsData.map((term) => (
            <div key={term.id} className="p-1">
              <div className="flex items-start space-x-3">
                <span className="text-3xl">{term.id}</span>
                <div className="flex-1">
                  <h2 className="font-nats text-3xl">{term.title}</h2>
                  <p className="">{term.content}</p>
                  {term.subItems && (
                    <ul className=" ml-4">
                      {term.subItems.map((item, index) => (
                        <li key={index} className="flex items-center">
                          <span className="mr-2 text-black h-2 w-2 bg-black rounded">
                            •
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Link */}
        <div className="flex items-center">
          <div className=" text-white font-ndot uppercase flex items-center">
            PRIVACY POLICY
            <span className="ml-2 border border-gray-800 p-1 text-xs">
              &#8594;
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
