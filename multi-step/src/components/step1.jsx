"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { UseEffect } from ".";
export const Step1 = ({
  step,
  formLastname,
  formFirstname,
  formUsername,
  setForm,
  setStep,
  form,
}) => {
  const [errors, setErrors] = useState({});
  const lastnameRegex = /^[a-zA-Z]+$/;
  const firstnameRegex = /^[a-zA-Z]+$/;
  const usernameRegex = /^[0-9A-Za-z]{6,16}$/;
  const newError = {};
  <UseEffect
    form={formUsername}
    setErrors={setErrors}
    regex={firstnameRegex}
    nemError={newError}
    kk="This username is already taken. Please choose another one."
  ></UseEffect>;
  useEffect(() => {
    if (firstnameRegex.test(formFirstname) || formFirstname === "") {
      newError.fisrtname = null;
    } else {
      newError.firstname =
        "First name cannot contain special characters or numbers.";
    }
    setErrors({ ...errors, ...newError });
  }, [formFirstname]);
  useEffect(() => {
    if (lastnameRegex.test(formLastname) || formLastname === "") {
      newError.lastname = null;
    } else {
      newError.lastname =
        "Last name cannot contain special characters or numbers.";
    }
    setErrors({ ...errors, ...newError });
  }, [formLastname]);
  useEffect(() => {
    if (usernameRegex.test(formUsername) || formUsername === "") {
      newError.username = null;
    } else {
      newError.username =
        "This username is already taken. Please choose another one.";
    }
    setErrors({ ...errors, ...newError });
  }, [formLastname]);

  function button() {
    if (firstnameRegex.test(formFirstname)) {
      newError.fisrtname = null;
    } else {
      newError.firstname =
        "First name cannot contain special characters or numbers.";
    }
    if (lastnameRegex.test(formLastname)) {
      newError.lastname = null;
    } else {
      newError.lastname =
        "Last name cannot contain special characters or numbers.";
    }
    if (usernameRegex.test(formUsername)) {
      newError.username = null;
    } else {
      newError.username =
        "This username is already taken. Please choose another one.";
    }
    setErrors(newError);
    if (!newError.firstname && !newError.lastname && !newError.username) {
      {
        localStorage.setItem("my-form", JSON.stringify(form));
      }

      setStep("step2");
    }
  }
  // const k = { ...form, lastname: e.target.value };

  if (step === "step1") {
    return (
      <>
        <div className="w-full h-screen flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            className=" flex flex-col items-between justify-between py-8 px-8 w-120 h-auto  bg-white rounded-2 "
          >
            <div className="flex flex-col gap-7 items-center">
              <div className="flex w-[416px] flex-col gap-2 items-start">
                <img src="Main.png" className="w-[60px] h-[60px]" />
                <div className="text-[#202124] font-inter text-[26px]  ">
                  Join Us! 😎
                </div>
                <p className=" text-[#8E8E8E] font-Inter text-[18px]  ">
                  Please provide all current information accurately.
                </p>
              </div>
              {/* <Inputs
                value={form.fisrtname}
                setForm={setForm}
                error={errors.firstname}
                kkk={k}
              >
                firstname
              </Inputs> */}
              <div className="flex gap-2 flex-col items-start  ">
                <div>
                  <span className=" text-[#334155] font-Inter text-[14px] ">
                    First Name
                  </span>
                  <span className="text-[#E14942]">*</span>
                </div>
                <input
                  onChange={(e) => {
                    setForm({ ...form, firstname: e.target.value });
                  }}
                  value={formFirstname}
                  placeholder="First Name"
                  className="rounded-2 border border-[#CBD5E1] w-[416px] py-3 px-3 text-[#121316]"
                />
                {errors.firstname && (
                  <div className="text-[#E14942] text-[14px]">
                    {errors.firstname}
                  </div>
                )}
              </div>
              <div className="flex gap-2 flex-col items-start ">
                <div>
                  <span className=" text-[#334155] font-Inter text-[14px] ">
                    last Name
                  </span>
                  <span className="text-[#E14942]">*</span>
                </div>
                <input
                  onChange={(e) => {
                    setForm({ ...form, lastname: e.target.value });
                  }}
                  value={formLastname}
                  placeholder="last Name"
                  className="rounded-2 border border-[#CBD5E1] w-[416px] py-3 px-3 text-[#121316] "
                />
                {errors.lastname && (
                  <div className="text-[#E14942] text-[14px]">
                    {errors.lastname}
                  </div>
                )}
              </div>

              <div className="flex gap-2 flex-col items-start ">
                <div>
                  <span className=" text-[#334155] font-Inter text-[14px]  ">
                    Username
                  </span>
                  <span className="text-[#E14942]">*</span>
                </div>

                <input
                  onChange={(e) => {
                    setForm({ ...form, username: e.target.value });
                  }}
                  value={formUsername}
                  placeholder="Username"
                  className=" border border-[#CBD5E1] w-[416px] py-3 px-3 text-[#121316] rounded-2"
                />
                {errors.username && (
                  <div className="text-[#E14942] text-[14px]">
                    {errors.username}
                  </div>
                )}
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              onClick={() => {
                button();
              }}
              className=" flex gap-1 py-2 px-3 justify-center items-center  text-[#FFFFFF] bg-[#121316] w-[100%] mt-[80px]  mb-[10px] rounded-[6px]"
            >
              Continue 1/3
              <img src="icon.svg" className="w-[24px] h-[24px]"></img>
            </motion.button>
          </motion.div>
        </div>
      </>
    );
  }
  return;
};
