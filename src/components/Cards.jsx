import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
import PropTypes from "prop-types";
import useLazyLoad from "../hooks/useLazyLoad";
import "../assets/css/cards.css"
  ;

const CardItem = ({ card }) => {
  const navigate = useNavigate();
  const { isVisible, elementRef } = useLazyLoad();

  return (
    <div
      ref={elementRef}
      key={card.id}
      onClick={() => navigate(card.link)}
      className={`card relative w-[80%] sm:w-[100%] h-[45vh] rounded-lg hover:text-gray-700 mx-auto flex flex-col items-center justify-center text-[18px] sm:text-[20px] border border-gray-900 dark:border-white 
      transition-opacity duration-700 ease-in-out transform ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
        }`}
    >
      {isVisible && (
        <>
          <i className={`${card.icon} text-white text-[80px] md:text-[150px] icon-shadow py-3`} />
          {card.title}
        </>
      )}
    </div>
  );
};

CardItem.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

const Cards = ({ cardData }) => {
  const memoizedCards = useMemo(() => cardData, [cardData]);

  return (
    <div className="container cursor-pointer max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-5 sm:my-10 px-5 ">
      {memoizedCards.map((card) => (
        <CardItem key={card.id} card={card} />
      ))}
    </div>
  );
};

Cards.propTypes = {
  cardData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Cards;
