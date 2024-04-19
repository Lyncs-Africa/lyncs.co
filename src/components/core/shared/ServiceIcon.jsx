import React from 'react';
import {MdFlight, MdLocalMovies, MdOutlineHotel} from "react-icons/md";
import {FaBus, FaShopify, FaTaxi} from "react-icons/fa";
import {GiHanger, GiPartyPopper, GiPopcorn} from "react-icons/gi";
import {IoFastFoodOutline} from "react-icons/io5";
import {PiBooksLight} from "react-icons/pi";
import {CiDeliveryTruck, CiReceipt} from "react-icons/ci";
import {GrUserWorker} from "react-icons/gr";
import {AiFillShop} from "react-icons/ai";

const ServiceIcon = ({service}) => {
  return (
    <>
      {
        service === 'travel' && (
          <MdFlight
            className="fill-blue-600 mx-auto w-[45px] h-[45px] rounded-lg bg-blue-100 p-2.5"/>
        )
      }
      {
        service === 'shop' && (
          <FaShopify
            className="fill-orange-800 mx-auto w-[45px] h-[45px] rounded-lg bg-orange-100 p-2.5"/>
        )
      }
      {
        service === 'stream' && (
          <GiPopcorn
            className="fill-pink-950 mx-auto w-[45px] h-[45px] rounded-lg bg-pink-100 p-2.5"/>
        )
      }
      {
        service === 'bus' && (
          <FaBus
            className="fill-purple-600 mx-auto w-[45px] h-[45px] rounded-lg bg-purple-100 p-2.5"/>
        )
      }
      {
        service === 'cinema' && (
          <MdLocalMovies
            className="fill-teal-950 mx-auto w-[45px] h-[45px] rounded-lg bg-teal-100 p-2.5"/>
        )
      }
      {
        service === 'eat' && (
          <IoFastFoodOutline
            className="fill-yellow-950 mx-auto w-[45px] h-[45px] rounded-lg bg-yellow-50 p-2.5"/>
        )
      }
      {
        service === 'washing' && (
          <GiHanger
            className="fill-black text-black mx-auto w-[45px] h-[45px] rounded-lg bg-gray-200 p-2.5"/>
        )
      }
      {
        service === 'courses' && (
          <PiBooksLight
            className="fill-red-950 mx-auto w-[45px] h-[45px] rounded-lg bg-red-100 p-2.5"/>
        )
      }
      {
        service === 'ride' && (
          <FaTaxi
            className="fill-secondary mx-auto w-[45px] h-[45px] rounded-lg bg-green-50 p-2.5"/>
        )
      }
      {
        service === 'delivery' && (
          <CiDeliveryTruck
            className="fill-pink-600 mx-auto w-[45px] h-[45px] rounded-lg bg-pink-50 p-2.5"/>
        )
      }
      {
        service === 'artisan' && (
          <GrUserWorker
            className="fill-blue-600 mx-auto w-[45px] h-[45px] rounded-lg bg-blue-100 p-2.5"/>
        )
      }
      {
        service === 'event' && (
          <GiPartyPopper
            className="fill-red-950 mx-auto w-[45px] h-[45px] rounded-lg bg-red-50 p-2.5"/>
        )
      }
      {
        service === 'bills' && (
          <CiReceipt
            className="fill-green-950 mx-auto w-[45px] h-[45px] rounded-lg bg-green-50 p-2.5"/>
        )
      }
      {
        service === 'hotel' && (
          <MdOutlineHotel
            className="fill-yellow-950 mx-auto w-[45px] h-[45px] rounded-lg bg-yellow-50 p-2.5"/>
        )
      }
      {
        service === 'm2m' && (
          <AiFillShop
            className="fill-purple-950 mx-auto w-[45px] h-[45px] rounded-lg bg-purple-50 p-2.5"/>
        )
      }
    </>
  );
};

export default ServiceIcon;
