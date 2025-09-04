"use client";
import { useState } from "react";
import { motion } from "motion/react";

export const Step3 = ({
  step,
  setForm,
  form,
  formBirthday,
  setStep,
  formPicture,
}) => {
  const [preview, setPreview] = useState();

  function handleOnchange(e) {
    const file = e.target.files[0];
    const filePreview = URL.createObjectURL(file);
    setPreview(filePreview);
    console.log(preview);
  }
  const [errors, setErrors] = useState({});
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  const imageRegex = "";
  function click() {
    // function Gestures() {
    //   <motion.div
    //     whileHover={{ scale: 1.2 }}
    //     whileTap={{ scale: 0.8 }}
    //     style={button}
    //   />;
    // }

    const newError = {};
    // const photoFileRegex = /^[\w,\s-]+\.(jpg|jpeg|png|gif)$/i;

    if (dateRegex.test(formBirthday)) {
      newError.birthday = null;
    } else {
      newError.birthday = "Please select a date.";
    }
    if (imageRegex !== formPicture) {
      newError.picture = null;
    } else {
      newError.picture = "Image cannot be blank";
    }

    setErrors(newError);
    if (!newError.birthday && !newError.picture) {
      setStep("step4");
    }
  }
  if (step === "step3") {
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
              <div className="flex w-[416px] flex-col gap-2items-start">
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
                    Date of birth
                  </span>
                  {errors.birthday && (
                    <div className="text-[#E14942] text-[14px]">
                      {errors.birthday}
                    </div>
                  )}
                </div>
                <div className="relative">
                  <input
                    type="date"
                    onChange={(e) => {
                      setForm({ ...form, birthday: e.target.value });
                    }}
                    value={formBirthday}
                    placeholder="/YYYY/-/MM/-/DD/"
                    className="rounded-2 border border-[#CBD5E1] w-[416px] py-3 px-3 text-[#121316] inset-0 "
                  ></input>
                </div>
              </div>
              <div className="flex gap-2 flex-col items-start  mb-10">
                <div>
                  <span className=" text-[#334155] font-Inter text-[14px] ">
                    Profile image
                  </span>
                </div>

                <div className="bg-[#7F7F800D] flex justify-center items-center w-102 h-[180px]  flex-col overflow-scroll  relative">
                  {preview ? (
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.8 }}
                      src={preview}
                      className=" absolute  w-full   "
                    />
                  ) : (
                    <>
                      <input
                        type="file"
                        className="absolute inset-0 "
                        onChange={handleOnchange}
                        // multiple
                      />
                      <div className="bg-white rounded-[50%] w-7 h-7 flex justify-center items-center">
                        <img src="image.svg" className="w-3 h-3"></img>
                      </div>
                      <p className="text-[#09090B] text-[14px] font-Inter ">
                        Add image
                      </p>
                    </>
                  )}
                </div>
                {errors.picture && (
                  <div className="text-[#E14942] text-[14px]">
                    {errors.picture}
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-row gap-1">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => {
                  setStep("step2");
                }}
                className="flex w-[128px] py-[10px] px-3 justify-center items-center gap- text-[#202124] font-inter text-4 border-[1px] border-[#CBD5E1] rounded-[6px] bg-[#7F7F800D] "
              >
                <img src="backIcon.svg" className="w-[24px] h-[24px]" /> Back
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => {
                  click();
                }}
                className=" flex gap-1 py-2 px-3 justify-center items-center  text-[#FFFFFF] bg-[#121316] w-[280px] rounded-[6px] "
              >
                Continue 3/3
                <img src="icon.svg" className="w-[24px] h-[24px]"></img>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </>
    );
  }
};
