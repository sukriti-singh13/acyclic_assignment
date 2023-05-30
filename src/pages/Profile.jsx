import React, { useState } from "react";
import { Calender, months } from "../components/Calender";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import dayjs from "dayjs";

const Profile = () => {
  const profileName = JSON.parse(localStorage.getItem("profileName"));
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);
  return (
    <div className="px-[3rem] py-[3rem]">
      <h1 className="text-white capitalize text-2xl">Hey {profileName} !</h1>
      <div className=" bg-white w-90 h-90 rounded-md my-[3rem]">
        <div className="  p-[1rem] flex justify-between items-center">
          <h1 className="select-none font-semibold">
            {months[today.month()]}, {today.year()}
          </h1>
          <div className="flex gap-10 items-center ">
            <GrFormPrevious
              className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
              onClick={() => {
                setToday(today.month(today.month() - 1));
              }}
            />
            <h1
              className=" cursor-pointer hover:scale-105 transition-all"
              onClick={() => {
                setToday(currentDate);
              }}
            >
              Today
            </h1>
            <GrFormNext
              className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
              onClick={() => {
                setToday(today.month(today.month() + 1));
              }}
            />
          </div>
        </div>

        <div className="grid grid-cols-7 ">
          {days.map((day, index) => {
            return (
              <h1
                key={index}
                className="text-sm h-14 grid place-content-center text-gray-500 select-none"
              >
                {day}
              </h1>
            );
          })}
        </div>

        <div className=" grid grid-cols-7">
          {Calender(today.month(), today.year()).map(
            ({ date, currentMonth, today }, index) => {
              return (
                <div
                  key={index}
                  className="p-2 text-center h-14 grid place-content-center text-sm border-t"
                >
                  <h1
                    className={`${currentMonth ? "" : "text-gray-400"} ${
                      today ? "bg-red-600 text-white" : ""
                    } ${
                      selectDate.toDate().toDateString() ===
                      date.toDate().toDateString()
                        ? "bg-black text-white"
                        : ""
                    } h-10 w-10 rounded-full grid place-content-center hover:bg-black hover:text-white transition-all cursor-pointer select-none`}
                    onClick={() => {
                      setSelectDate(date);
                    }}
                  >
                    {date.date()}
                  </h1>
                </div>
              );
            }
          )}
        </div>
      </div>
      <p className="text-white lg:text-md underline">
        Current Selected : {selectDate.toDate().toDateString()}
      </p>
    </div>
  );
};

export default Profile;
