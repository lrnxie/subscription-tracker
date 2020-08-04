import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="p-2 bg-light fixed-bottom text-center">
      <a
        className=" text-muted"
        href="https://github.com/lrnxie/subscription-tracker"
      >
        Check out the GitHub repository
      </a>
    </div>
  );
};

export default Footer;
