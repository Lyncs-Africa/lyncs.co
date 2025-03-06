import React, {useEffect, useState} from 'react';
import {BounceLoader} from "react-spinners";


const messages = [
  "Relax, we are cooking something special for you... 🔥👨‍🍳",
  "We dey load am, no vex, good things take time. 😆",
  "Shebi na soft life you want? Just chill, e go land soon. ✈️",
  "Calculating the enjoyment per second... Hold on! 📊",
  "We are pulling the necessary travel strings for you. 🎭",
  "You sure say you ready? E be like say na premium enjoyment dey come. 🤩",
  "Small patience, we don dey arrange your soft life. 🛋️",
  "Oya sip some zobo, we dey package everything for you. 🍷",
  "Gathering premium enjoyment data... Please wait. 🔍",
  "Your future enjoyment is currently buffering... 🔄",
  "Processing your wahala-free lifestyle... Almost done! 😌",
  "Your travel dreams are upgrading... Please wait. 🚀",
  "Give us small time, e no easy to secure soft life. 🏝️",
  "Making sure everything is set for your VIP experience. 🎟️",
  "Hold tight, we dey confirm say your trip na 5-star level. ⭐⭐⭐⭐⭐",
  "Rearranging the universe so your trip makes sense. ✨",
  "No be say e slow, na perfection we dey fine-tune. 🔧",
  "Almost ready! Your adventure is just around the corner. 🌍",
  "Downloading first-class experience… E get why. 😎",
  "We dey negotiate with travel gods, just chill. 🛫",
  "Wait first, make we confirm say enjoyment dey your destiny. 🔮",
  "Your trip is in transit... No be only plane dey fly. 🚀",
  "Running final diagnostics... Enjoyment mode loading. ⚙️",
  "We dey set your travel GPS to 'Soft Life Boulevard'. 🛣️",
  "Hold up! We just found an even better option for you. 😉",
  "Aligning your travel chakras... Almost there. 🧘🏽‍♂️",
  "Just dey breathe, the experience go soon land. 🌬️",
  "We dey double-check say enjoyment go hold you tight. 🎯"
];


const Loader = () => {
  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage(Math.floor(Math.random() * messages.length));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 min-h-screen w-full flex justify-center z-[999] items-center">
      <div className="inset-0 absolute bg-white"></div>
      <div className="relative flex flex-col items-center">
        <p className="text-black text-[18px] p-3 cursor-pointer text-center">
          {messages[currentMessage]}
        </p>
        <BounceLoader color="#2563EB"/>
      </div>
    </div>
  );
};

export default Loader;
