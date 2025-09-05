"use client";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
export const Step2 = ({
  step,
  setForm,
  formEmail,
  formPassword,
  formPhonenumber,
  formConfirmPassword,
  form1,
  setStep,
}) => {
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phoneNumberRegex = /^\d{8}$/;
  const newError = {};
  const [errors, setErrors] = useState({});

  console.log({ errors });
  useEffect(() => {
    if (emailRegex.test(formEmail) || formEmail === "") {
      newError.email = null;
    } else {
      newError.email = "Please provide a valid email address.";
    }
    setErrors({ ...errors, ...newError });

    console.log(newError.email);
  }, [formEmail]);

  useEffect(() => {
    if (passwordRegex.test(formPassword) || formPassword === "") {
      newError.password = null;
    } else {
      newError.password = "Password must include letters and numbers.";
    }
    setErrors({ ...errors, ...newError });
  }, [formPassword]);

  useEffect(() => {
    if (
      (passwordRegex.test(formConfirmPassword) &&
        formPassword === formConfirmPassword) ||
      formPassword === ""
    ) {
      newError.confrimPassword = null;
    } else {
      newError.confrimPassword = "Passwords do not match. Please try again.";
    }
    setErrors({ ...errors, ...newError });
  }, [formConfirmPassword]);

  useEffect(() => {
    console.log({ formPhonenumber });
    if (phoneNumberRegex.test(formPhonenumber) || formPhonenumber === "") {
      newError.phoneNumber = null;
    } else {
      newError.phoneNumber = "Please enter a valid phone number.";
    }
    setErrors({ ...errors, ...newError });
  }, [formPhonenumber]);

  function Onclick() {
    if (emailRegex.test(formEmail)) {
      newError.email = null;
    } else {
      newError.email = "Please provide a valid email address.";
    }
    if (passwordRegex.test(formPassword)) {
      newError.password = null;
    } else {
      newError.password = "Password must include letters and numbers.";
    }
    if (
      passwordRegex.test(formConfirmPassword) &&
      formPassword === formConfirmPassword
    ) {
      newError.confrimPassword = null;
    } else {
      newError.confrimPassword = "Passwords do not match. Please try again.";
    }
    if (phoneNumberRegex.test(formPhonenumber)) {
      newError.phoneNumber = null;
    } else {
      newError.phoneNumber = "Please enter a valid phone number.";
    }
    setErrors(newError);
    if (
      !newError.phoneNumber &&
      !newError.confrimPassword &&
      !newError.password &&
      !newError.email
    ) {
      {
        localStorage.setItem("my-form", JSON.stringify(form1));
      }

      setStep("step3");
    }
  }
  if (step === "step2") {
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
              <div className="flex gap-2 flex-col items-start ">
                <div>
                  <span className=" text-[#334155] font-Inter text-[14px] ">
                    Email
                  </span>
                  <span className="text-[#E14942]">*</span>
                </div>

                <input
                  type="email"
                  onChange={(e) => setForm({ ...form1, email: e.target.value })}
                  value={formEmail}
                  placeholder="First Name"
                  className="rounded-2 border border-[#CBD5E1] w-[416px] py-3 px-3 text-[#121316] "
                />
                {errors.email && (
                  <div className="text-[#E14942] text-[14px]">
                    {errors.email}
                  </div>
                )}
              </div>
              <div className="flex gap-2 flex-col items-start ">
                <div>
                  <span className=" text-[#334155] font-Inter text-[14px] ">
                    Phone number
                  </span>
                  <span className="text-[#E14942]">*</span>
                </div>
                <input
                  onChange={(e) => {
                    setForm({ ...form1, phonenumber: e.target.value });
                  }}
                  value={formPhonenumber}
                  placeholder="----/----"
                  className="rounded-2 border border-[#CBD5E1] w-[416px] py-3 px-3 text-[#121316] "
                />
                {errors.phoneNumber && (
                  <div className="text-[#E14942] text-[14px]">
                    {errors.phoneNumber}
                  </div>
                )}
              </div>
              <div className="flex gap-2 flex-col items-start ">
                <div>
                  <span className=" text-[#334155] font-Inter text-[14px] ">
                    Password
                  </span>
                  <span className="text-[#E14942]">*</span>
                </div>
                <input
                  type="password"
                  onChange={(e) => {
                    setForm({ ...form1, password: e.target.value });
                  }}
                  value={formPassword}
                  placeholder="Username"
                  className=" border border-[#CBD5E1] w-[416px] py-3 px-3 text-[#121316] rounded-2"
                />
                {errors.password && (
                  <div className="text-[#E14942] text-[14px]">
                    {errors.password}
                  </div>
                )}
              </div>
              <div className="flex gap-2 flex-col items-start ">
                <div>
                  <span className=" text-[#334155] font-Inter text-[14px] ">
                    Confirm password
                  </span>
                  <span className="text-[#E14942]">*</span>
                </div>
                <input
                  type="password"
                  onChange={(e) => {
                    setForm({ ...form1, confirmPassword: e.target.value });
                  }}
                  value={formConfirmPassword}
                  placeholder="Username"
                  className=" border border-[#CBD5E1] w-[416px] py-3 px-3 text-[#121316] rounded-2"
                />{" "}
                {errors.confrimPassword && (
                  <div className="text-[#E14942] text-[14px]">
                    {errors.confrimPassword}
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-row gap-1 mt-[80px]  mb-[10px]">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => {
                  setStep("step1");
                }}
                className="flex w-[128px] py-[10px] px-3 justify-center items-center gap- text-[#202124] font-inter text-4 border-[1px] border-[#CBD5E1] rounded-[6px]"
              >
                <img src="backIcon.svg" className="w-[24px] h-[24px]" /> Back
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => {
                  Onclick();
                }}
                className=" flex gap-1 py-2 px-3 justify-center items-center  text-[#FFFFFF] bg-[#121316] w-[280px] rounded-[6px] "
              >
                Continue 2/3
                <img src="icon.svg" className="w-[24px] h-[24px]"></img>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </>
    );
  }
};
