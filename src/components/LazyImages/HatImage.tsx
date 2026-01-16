import hat from "../../assets/hat.png";

const HatImage: React.FC = () => (
  <img
    src={hat}
    alt="Hat Logo"
    className="w-18 h-18 -m-2 hidden md:block"
    loading="lazy"
  />
);

export default HatImage;
