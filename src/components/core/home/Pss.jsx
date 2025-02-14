import React, {useCallback, useEffect, useState} from 'react';
import {motion} from "framer-motion";
import {Controller, useForm} from "react-hook-form";
import {TbCurrencyNaira} from "react-icons/tb";
import {numberWithCommas} from "@/lib/utils";
import {add, format} from "date-fns";
import useGlobalStore from "@/store/global";
import {Slider} from "@heroui/react";
import cn from "classnames";
import {FaInfoCircle} from "react-icons/fa";

const marks = [
  {
    value: 0,
    label: "24",
  },
  {
    value: 0.1,
    label: "48",
  },
  {
    value: 0.2,
    label: "72",
  },
  {
    value: 0.3,
    label: "7 days",
  },
  {
    value: 0.4,
    label: "14",
  },
  {
    value: 0.5,
    label: "30",
  },
  {
    value: 0.6,
    label: "45",
  },
  {
    value: 0.7,
    label: "60",
  },
];
const Pss = ({handleIsWidgetLoading}) => {
  const {data, updateData} = useGlobalStore((state) => state);
  const {
    control,
    watch,
    formState: {errors},
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      amount: 1000000
    },
  });

  const [installments, setInstallments] = useState([])
  const initialSliderValue = marks.find(mark => mark.value === (data?.pss?.label ?? '24'))?.value ?? 0;

  const [sliderValue, setSliderValue] = useState(initialSliderValue);
  const currentLabel = marks.find(mark => mark.value === sliderValue)?.label ?? "Unknown";

  const calculatePaymentPerInstallment = useCallback((amount, duration) => {
    const dailyInterestRate = (3.5 / 100) / 30;
    const currentDate = new Date();
    let calculatedInstallments = [];

    const calculateAmount = (baseAmount, days) =>
      (dailyInterestRate * +baseAmount * days) + +baseAmount;

    switch (duration) {
      case 24:
      case 48:
      case 72:
        calculatedInstallments = [
          {
            amount: calculateAmount(amount, duration),
            due: format(add(currentDate, {hours: duration}), 'yyyy-MM-dd'),
          },
        ];
        break;

      case 7:
      case 14:
      case 30:
        calculatedInstallments = [
          {
            amount: calculateAmount(amount, duration),
            due: format(add(currentDate, {days: duration}), 'yyyy-MM-dd'),
          },
        ];
        break;

      case 45:
        calculatedInstallments = [
          {
            amount: calculateAmount(amount / 2, 30),
            due: format(add(currentDate, {days: 30}), 'yyyy-MM-dd'),
          },
          {
            amount: calculateAmount(amount / 2, 15),
            due: format(add(currentDate, {days: 45}), 'yyyy-MM-dd'),
          },
        ];
        break;

      case 60:
        calculatedInstallments = [
          {
            amount: calculateAmount(amount / 2, 30),
            due: format(add(currentDate, {days: 30}), 'yyyy-MM-dd'),
          },
          {
            amount: calculateAmount(amount / 2, 30),
            due: format(add(currentDate, {days: 60}), 'yyyy-MM-dd'),
          },
        ];
        break;

      default:
        throw new Error(`Unsupported duration: ${duration}`);
    }

    setInstallments(calculatedInstallments);
    return calculatedInstallments;
  }, [setInstallments]);

  const handleCalculate = () => {
    const amount = watch()?.amount - (watch()?.amount * 0.4);
    const duration = parseInt(currentLabel.split(' ')[0], 10);
    calculatePaymentPerInstallment(amount, duration);
  };

  const handleChange = (value) => {
    setSliderValue(value);
  };

  useEffect(() => {
    handleCalculate()
  }, [sliderValue, watch()?.amount])

  const formatDuration = (duration) => {
    switch (duration) {
      case '24':
        return '24 hours';
      case '48':
        return '48 hours';
      case '72' :
        return '72 hours';
      case '7 days' :
        return '7 days';
      case '14' :
        return '14 days';
      case '30' :
        return '30 days';
      case '45' :
        return '45 days';
      case '60' :
        return '60 days';
      default:
        return '24 hours';
    }
  }
  const getNumberOfInstallments = (duration) => {
    switch (duration) {
      case '24':
        return 1;
      case '48':
        return 1;
      case '72' :
        return 1;
      case '7' :
        return 1;
      case '14' :
        return 1;
      case '30' :
        return 1;
      case '45' :
        return 2;
      case '60' :
        return 2;
      default:
        return 1;
    }
  }

  const handleOpen = () => {
    handleIsWidgetLoading(true);
    try {
      window.LyncsWidget.open({
        key: 'a3a2d99285894aa88b4340436fb7733151cffe74dc6870c214ecc0',
        path: '/flights/international-flight',
        onReady: () => {
          handleIsWidgetLoading(false);
        }
      });
    } catch (error) {
      console.error("Failed to open widget", error);
      handleIsWidgetLoading(false);
    }
  };

  return (
    <div className="z-10 relative w-full font-satoshiMedium">
      <div
        className="container mx-auto px-4 md:px-0 md:grid grid-cols-12 overflow-hidden md:relative md:z-10">
        <div
          className="col-span-5 p-10 pt-0 space-y-4 flex flex-col justify-center">
          <div className="rounded-lg p-4 md:p-6 bg-slate-200 space-y-4">
            <div className="flex items-start justify-between gap-2">
              <div className="space-y-2">
                <p className="text-black md:text-[16px] text-sm font-[500]">Flight amount</p>
              </div>
              <p
                className="text-black md:text-[16px] text-sm font-[400]">₦{numberWithCommas(watch()?.amount)}</p>
            </div>
            <hr className="border-slate-500 opacity-30"/>
            <div className="flex items-start justify-between gap-2">
              <div className="space-y-2">
                <p className="text-black md:text-[16px] text-sm font-[500]">Initial deposit</p>
              </div>
              <p
                className="text-black md:text-[16px] text-sm font-[400]">₦{numberWithCommas((watch()?.amount * 0.4))}</p>
            </div>
            <hr className="border-slate-500 opacity-30"/>
            <div className="flex items-start justify-between gap-2">
              <div className="space-y-2">
                <p className="text-black md:text-[16px] text-sm font-[500]">Amount paid per installment</p>
              </div>
              <p
                className="text-black md:text-[16px] text-sm font-[400]">₦{numberWithCommas(Math.ceil(installments[0]?.amount))}</p>
            </div>
            <hr className="border-slate-500 opacity-30"/>
            <div className="flex items-start justify-between gap-2">
              <div className="space-y-2">
                <p className="text-black md:text-[16px] text-sm font-[500]">Number of payment installments</p>
              </div>
              <p className="text-black md:text-[16px] text-sm font-[400]">{getNumberOfInstallments(currentLabel)}</p>
            </div>
            {
              installments?.length > 1 && (
                <>
                  <hr className="border-slate-500 opacity-30"/>
                  <div className="flex items-start justify-between gap-2">
                    <div className="space-y-2">
                      <p className="text-black text-16px font-[500]">Last installment amount</p>
                    </div>
                    <p
                      className="text-black text-16px font-[400]">₦{numberWithCommas(Math.ceil(installments[1]?.amount))}</p>
                  </div>
                </>
              )
            }
          </div>
          <div className="p-2 pt-16 relative">
            <p className="text-16px font-[500] text-black absolute left-2 top-4 py-2">Term in hours/days</p>
            <p className="text-16px text-black absolute right-4 top-2 p-2 rounded-lg bg-slate-200"><span
              className="font-[700]">{formatDuration(currentLabel)}</span></p>
            <Slider
              aria-label="true"
              color="primaryTwo"
              step={0.1}
              formatOptions={{style: "percent"}}
              maxValue={0.7}
              minValue={0}
              defaultValue={sliderValue}
              marks={marks}
              onChange={handleChange}
              className="text-black"
              classNames={{
                filler: cn(
                  "bg-slate-200"
                ),
                track: cn(
                  "bg-slate-200"
                ),
                thumb: cn(
                  "bg-white"
                ),
              }}
            />
            <p className="text-black mt-8 font-[500]">How long will it take you to pay back?</p>
          </div>
          <div className="rounded-lg p-4 bg-slate-200 ">
            <span><FaInfoCircle className="text-black" size="20px"/></span>
            <p className="text-black font-[500]">Note : Failure to pay back full amount would result in forfeit of
              initial deposit (lol just kidding), but be very careful.</p>
          </div>
        </div>
        <div
          className="col-span-7 w-full py-[100px] px-10 pt-[50px] mx-auto rounded-l-xl bg-slate-900 text-left z-50 relative">
          <img className="animate-wide w-48 h-48 object-contain -ml-12 " src="/images/airline.png"/>
          <motion.h2
            className="text-white leading-[1] text-[3.5rem] md:text-[5rem] font-bold"
          >
            Money will finish<br/> but memories won't
          </motion.h2>
          <p
            className="md:text-[17px] text-[16px] font-extralight py-8 text-gray-400">
            But don’t worry, we got you! Secure your seat today with Pay Small Small and sort out the payments later.
            Your adventure is long overdue!
          </p>
          <div className="flex items-center gap-4">
            <Controller
              name="amount"
              control={control}
              rules={{
                required: 'Amount is required',
                min: {
                  value: 10000,
                  message: 'Minimum amount cannot be less than R10,000',
                },
                max: {
                  value: 240000,
                  message: 'The maximum amount you can borrow is R240 000.00',
                },
              }}
              render={({field, fieldState: {error}}) => {
                const numberWithCommas = (number) => {
                  if (number || number >= 0) {
                    const sanitizedNumber = number.toString().replace(/[^0-9.]/g, '');
                    const numericValue = parseFloat(sanitizedNumber);

                    if (!isNaN(numericValue)) {
                      return numericValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    }
                  }
                  return '';
                };

                const parseValue = (value) => {
                  return value.replace(/,/g, '');
                };

                const handleInputChange = (e) => {
                  const rawValue = parseValue(e.target.value);
                  field.onChange(rawValue);
                };

                const handleDisplayValue = (value) => {
                  return numberWithCommas(value);
                };

                return (
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-8 pointer-events-none">
                      <TbCurrencyNaira className="w-6 h-6 text-gray-500"/>
                    </div>
                    <input
                      {...field}
                      value={handleDisplayValue(field.value)}
                      onChange={handleInputChange}
                      type="text" id="voice-search"
                      className="bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block ps-16 px-16 py-5 rounded-lg"
                      placeholder="How much is the money sef" required/>
                  </div>
                );
              }}
            />
            <motion.button
              onClick={handleOpen}
              className="flex gap-2 items-center border border-blue-500 bg-blue-500 text-[16px] text-white px-5 py-5 rounded-lg font-satoshiMedium hover:border hover:border-white hover:bg-transparent hover:text-white">
              Book am for me biko
            </motion.button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Pss;
