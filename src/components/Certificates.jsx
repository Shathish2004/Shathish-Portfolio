import { useEffect } from "react";
import PropTypes from "prop-types";
import useLazyLoad from "../hooks/useLazyLoad";
import certificates from "../data/certificatesData"


const CertificateCard = ({ certificate }) => {
  const { isVisible, elementRef } = useLazyLoad();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  return (
    <div
      ref={elementRef}
      className={`flex flex-col sm:flex-row items-center justify-center p-10 
      ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"} 
      transition-all duration-700 ease-in-out
      ${certificate.index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}
    >
      {isVisible && (
        <img
          src={certificate.image}
          alt={certificate.name}
          className="sm:w-[40%] sm:h-[70%] pr-5"
          loading="lazy"
        />
      )}
      <div className="flex flex-col items-center justify-center space-y-8">
        <h3 className="text-2xl font-bold text-center pt-3">
          {certificate.name}
        </h3>
        <p className="text-lg">{certificate.description}</p>
        <button className="border-1 p-2 button-shadow cursor-pointer hover:bg-blue-600 hover:text-white">
          <a href={certificate.link} target="_blank">
            Verify Certificate
          </a>
        </button>
      </div>
    </div>
  );
};

CertificateCard.propTypes = {
  certificate: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
  }).isRequired,
};


const Certificates = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <h1 className="text-center text-4xl font-bold mt-10">Certificates</h1>
      {certificates.map((certificate, index) => (
        <CertificateCard key={index} certificate={{ ...certificate, index }} />
      ))}
    </div>
  );
};

export default Certificates;
