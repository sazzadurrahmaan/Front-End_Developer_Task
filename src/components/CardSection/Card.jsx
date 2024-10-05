
import { useSpring, animated } from 'react-spring';

const Card = ({ image, title, description }) => {
  const props = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 1000 },
  });

  return (
    <animated.div style={props} className="bg-white p-6 rounded-lg shadow-lg">
      <img src={image} alt={title} className="w-full rounded-lg mb-4" />
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <button className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition">Buy Now</button>
    </animated.div>
  );
};

export default Card;
