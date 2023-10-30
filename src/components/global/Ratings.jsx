import React from 'react';
import {AiFillStar, AiOutlineStar} from "react-icons/ai";
import {BsStarHalf} from "react-icons/bs";

const Ratings = ({value}) => {
  return (
    <div className="flex items-center h-[30px] text-yellow-400 text-[20px]">
      {
        value === 1 &&
        <>
                <span>
                    <AiFillStar/>
                  </span>
          <span>
                        <AiOutlineStar/>
                    </span>
          <span>
                       <AiOutlineStar/>
                    </span>
          <span>
                        <AiOutlineStar/>
                    </span>
          <span>
                        <AiOutlineStar/>
                    </span>
        </>
      }
      {
        value === 1.5 &&
        <>
                 <span>
                     <AiFillStar/>
                  </span>
          <span>
                        <BsStarHalf/>
                    </span>
          <span>
                        <AiOutlineStar/>
                    </span>
          <span>
                        <AiOutlineStar/>
                    </span>
          <span>
                        <AiOutlineStar/>
                    </span>
        </>

      }
      {
        value === 2 &&
        <>
                 <span>
                    <AiFillStar/>
                  </span>
          <span>
                 <AiFillStar/>
                </span>
          <span>
                       <AiOutlineStar/>
                    </span>
          <span>
                       <AiOutlineStar/>
                    </span>
          <span>
                        <AiOutlineStar/>
                    </span>
        </>

      }
      {
        value === 2.5 &&
        <>
                 <span>
                        <AiFillStar/>
                  </span>
          <span>
                   <AiFillStar/>
                </span>
          <span>
                        <BsStarHalf/>
                    </span>
          <span>
                        <AiOutlineStar/>
                    </span>
          <span>
                        <AiOutlineStar/>
                    </span>
        </>
      }
      {
        value === 3 &&
        <>
                 <span>
                     <AiFillStar/>
                  </span>
          <span>
                     <AiFillStar/>
                  </span>
          <span>
                 <AiFillStar/>
                </span>
          <span>
                       <AiOutlineStar/>
                    </span>
          <span>
                       <AiOutlineStar/>
                    </span>
        </>
      }
      {
        value === 3.5 &&
        <>
                 <span>
                     <AiFillStar/>
                  </span>
          <span>
                    <AiFillStar/>
                  </span>
          <span>
                 <AiFillStar/>
                </span>
          <span>
                        <BsStarHalf/>
                    </span>
          <span>
                         <AiOutlineStar/>
                    </span>
        </>
      }
      {

        value === 4 &&
        <>
                 <span>
                    <AiFillStar/>
                  </span>
          <span>
                     <AiFillStar/>
                  </span>
          <span>
                 <AiFillStar/>
                </span>
          <span>
                 <AiFillStar/>
                </span>
          <span>
                        <AiOutlineStar/>
                    </span>
        </>
      }
      {

        value === 4.5 &&
        <>
                 <span>
                    <AiFillStar/>
                  </span>
          <span>
                     <AiFillStar/>
                  </span>
          <span>
                <AiFillStar/>
                </span>
          <span>
                <AiFillStar/>
                </span>
          <span>
                         <BsStarHalf/>
                    </span>
        </>
      }
      {

        value === 5 &&
        <>
                 <span>
                    <AiFillStar/>
                  </span>
          <span>
                     <AiFillStar/>
                  </span>
          <span>
                <AiFillStar/>
                </span>
          <span>
                <AiFillStar/>
                </span>
          <span>
                <AiFillStar/>
                </span>
        </>
      }
    </div>
  );
};

export default Ratings;