import { useEffect } from "react";
import Cards from "./Cards";
import AboutHome from "./AboutHome";

const Home = () => {
  const cardData = [
    {
      id: 1,
      icon: "fa fa-user-circle",
      title: "About Me",
      link: "/about",
    },
    { id: 2, icon: "fas fa-lightbulb", title: "Skills", link: "/skills" },
    {
      id: 3,
      icon: "fas fa-folder-open",
      title: "Projects",
      link: "/Projects",
    },
    {
      id: 4,
      icon: "fas fa-envelope",
      title: "Contact Me",
      link: "/contact",
    },
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <>
      <AboutHome />
      <Cards cardData={cardData} />
    </>
  );
};

export default Home;
