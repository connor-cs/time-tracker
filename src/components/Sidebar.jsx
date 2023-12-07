import { useState } from "react";

const Sidebar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    const pTags = Array.from(document.getElementsByClassName("time"));
    console.log(pTags);
    pTags.forEach((tag) => tag.classList.remove("active"));
  };

  return (
    <div>
      <div className="profile">
        <img src="/images/shrek.jpg" alt="nog" />
        <p>Report for</p>
        <h2>Shrek</h2>
      </div>
      <div className="duration">
        <p
          className={"time"}
          onClick={(e) => {
            handleClick();
            e.currentTarget.classList.toggle("active");
          }}
        >
          Daily
        </p>
        <p
          className={"time"}
          onClick={(e) => {
            handleClick();
            e.currentTarget.classList.toggle("active");
          }}
        >
          Weekly
        </p>
        <p
          className={"time"}
          onClick={(e) => {
            handleClick();
            e.currentTarget.classList.toggle("active");
          }}
        >
          Monthly
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
