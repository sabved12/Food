import { useState } from "react";
import axios from "axios";

const Rating = ({ maxStars, stallid }) => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (star) => {
    setRating(star);
  };
  const handleClick = async () => {
    
    await axios.post(`${process.env.REACT_APP_BACKENDURL}/poststall/${stallid}`, {
        rating
    }).then((data)=> {
        console.log(data)
    }).catch((err) => console.log(err))
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="flex items-center">
          {[...Array(maxStars)].map((_, index) => (
            <span
              key={index}
              className={`${
                index + 1 <= rating ? "text-yellow-400" : "text-gray-300"
              } focus:outline-none text-4xl cursor-pointer`}
              onClick={() => handleStarClick(index + 1)}
            >
              &#9733;
            </span>
          ))}
        </div>
        <button
          className="bg-green-500 p-2 py-1 rounded-lg mt-5"
          onClick={handleClick}
        >
          Rate Stall
        </button>
      </div>
    </>
  );
};

// const App = () => {
//   return (
//     <div className="container mx-auto p-4">
//       <Rating maxStars={5} />
//     </div>
//   );
// };

export default Rating;
