import { Star } from "lucide-react";

const avatars = [
  "https://i.pravatar.cc/40?img=1",
  "https://i.pravatar.cc/40?img=2",
  "https://i.pravatar.cc/40?img=3",
  "https://i.pravatar.cc/40?img=3",
  
];


const stars = [
 "src=./star.png",
  "src=./star.png",
  "src=./star.png",
  "src=./star.png",
  
];


export default function RatingCard() {
  return (
    <div className="flex  items-center gap-4 bg-white p-4 px-2 rounded-xl shadow-md w-fit">
      <div className="flex flex-col items-center  w-full">
     
     
     
      {/* Rating */}
      <div className="flex items-center gap-4 px-5">
        <span className="text-2xl font-semibold text-gray-900">4.9</span>
        <div className="flex">
             {/* {stars.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="user"
            className="w-9 h-9 rounded-full border-2 border-white"
          />
        ))} */}
        <img 
            className="w-5 h-5 rounded-full border-2 border-white" src="./star.png" alt="star" />
        <img 
         className="w-5 h-5 rounded-full border-2 border-white" src="./star.png" alt="star" />
        <img className="w-5 h-5 rounded-full border-2 border-white" src="./star.png" alt="star" />
        <img className="w-5 h-5 rounded-full border-2 border-white" src="./star.png" alt="star" />
        <img className="w-5 h-5 rounded-full border-2 border-white" src="./star.png" alt="star" />
        <img className="w-5 h-5 rounded-full border-2 border-white" src="./star.png" alt="star" />
        </div>
      </div>
      


          <div className=" mt-4 flex px-5 items-center justify-center w-full flex-row -space-x-2">



      {/* Avatars */}
      <div className="flex items-center -space-x-2">
        {avatars.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="user"
            className="w-9 h-9 rounded-full border-2 border-white"
          />
        ))}
      </div>

      {/* Reviews Badge */}
      <div className="border-2 border-white flex items-center justify-center w-10 h-10 rounded-full bg-orange-500 text-white text-sm font-semibold">
        5k
      </div>




</div>

        </div>
    </div>
  );
}
