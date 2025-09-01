"use client";
import { useState } from "react";
const Page = () => {
  const [form, setform] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    phonenumber: "",
    password: "",
  });
  const [step, setStep] = useState("step1");
  console.log(form);
  function Onclick() {}
  if (step === "step1") {
    return (
      <>
        <div className="w-full h-screen flex justify-center items-center">
          <div className=" flex flex-col items-between justify-between py-8 px-8 w-120 h-[655px]  bg-white rounded-2 ">
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
                    First Name
                  </span>
                  <span className="text-[#E14942]">*</span>
                </div>

                <input
                  onChange={(e) => {
                    setform({ ...form, firstname: e.target.value });
                  }}
                  value={form.firstname}
                  placeholder="First Name"
                  className="rounded-2 border border-[#CBD5E1] w-[416px] py-3 px-3 text-[#121316] "
                />
              </div>
              <div className="flex gap-2 flex-col items-start ">
                <div>
                  <span className=" text-[#334155] font-Inter text-[14px] ">
                    Last name
                  </span>
                  <span className="text-[#E14942]">*</span>
                </div>

                <input
                  onChange={(e) => {
                    setform({ ...form, lastname: e.target.value });
                  }}
                  value={form.lastname}
                  placeholder="Last name"
                  className="rounded-2 border border-[#CBD5E1] w-[416px] py-3 px-3 text-[#121316] "
                />
              </div>
              <div className="flex gap-2 flex-col items-start ">
                <div>
                  <span className=" text-[#334155] font-Inter text-[14px] ">
                    Username
                  </span>
                  <span className="text-[#E14942]">*</span>
                </div>

                <input
                  onChange={(e) => {
                    setform({ ...form, username: e.target.value });
                  }}
                  value={form.username}
                  placeholder="Username"
                  className=" border border-[#CBD5E1] w-[416px] py-3 px-3 text-[#121316] rounded-2"
                />
              </div>
            </div>

            <button
              onClick={() => {
                Onclick(setStep("step2"));
              }}
              className=" flex gap-1 py-2 px-3 justify-center items-center  text-[#FFFFFF] bg-[#121316] w-[100%]  "
            >
              Continue {step}/3
              <img src="icon.svg" className="w-[24px] h-[24px]"></img>
            </button>
          </div>
        </div>
      </>
    );
  }
  if (step === "step2") {
    return (
      <>
        <div className="w-full h-screen flex justify-center items-center">
          <div className=" flex flex-col items-between justify-between py-8 px-8 w-120 h-[755px]  bg-white rounded-2 ">
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
                    First Name
                  </span>
                  <span className="text-[#E14942]">*</span>
                </div>

                <input
                  onChange={(e) => {
                    setform({ ...form, email: e.target.value });
                  }}
                  value={form.email}
                  placeholder="First Name"
                  className="rounded-2 border border-[#CBD5E1] w-[416px] py-3 px-3 text-[#121316] "
                />
              </div>
              <div className="flex gap-2 flex-col items-start ">
                <div>
                  <span className=" text-[#334155] font-Inter text-[14px] ">
                    Last name
                  </span>
                  <span className="text-[#E14942]">*</span>
                </div>

                <input
                  onChange={(e) => {
                    setform({ ...form, phonenumber: e.target.value });
                  }}
                  value={form.phonenumber}
                  placeholder="Last name"
                  className="rounded-2 border border-[#CBD5E1] w-[416px] py-3 px-3 text-[#121316] "
                />
              </div>
              <div className="flex gap-2 flex-col items-start ">
                <div>
                  <span className=" text-[#334155] font-Inter text-[14px] ">
                    Username
                  </span>
                  <span className="text-[#E14942]">*</span>
                </div>

                <input
                  onChange={(e) => {
                    setform({ ...form, password: e.target.value });
                  }}
                  value={form.password}
                  placeholder="Username"
                  className=" border border-[#CBD5E1] w-[416px] py-3 px-3 text-[#121316] rounded-2"
                />
              </div>
              <div className="flex gap-2 flex-col items-start ">
                <div>
                  <span className=" text-[#334155] font-Inter text-[14px] ">
                    Username
                  </span>
                  <span className="text-[#E14942]">*</span>
                </div>

                <input
                  onChange={(e) => {
                    setform({ ...form, password: e.target.value });
                  }}
                  value={form.password}
                  placeholder="Username"
                  className=" border border-[#CBD5E1] w-[416px] py-3 px-3 text-[#121316] rounded-2"
                />
              </div>
            </div>
            <div className="flex flex-row gap-1">
              <button
                onClick={() => {
                  Onclick(setStep("step1"));
                }}
                className="flex w-[128px] py-[10px] px-3 justify-center items-center gap- text-[#202124] font-inter text-4 border-[1px] border-[#CBD5E1] rounded-[6px]"
              >
                <img src="backIcon.svg" className="w-[24px] h-[24px]" /> Back
              </button>
              <button
                onClick={() => {
                  Onclick(setStep("step3"));
                }}
                className=" flex gap-1 py-2 px-3 justify-center items-center  text-[#FFFFFF] bg-[#121316] w-[280px] rounded-[6px] "
              >
                Continue {step}/3
                <img src="icon.svg" className="w-[24px] h-[24px]"></img>
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
  if (step === "step3") {
    return (
      <>
        <div className="w-full h-screen flex justify-center items-center">
          <div className=" flex flex-col items-between justify-between py-8 px-8 w-120 h-[655px]  bg-white rounded-2 ">
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
                  <span className="text-[#E14942]">*</span>
                </div>

                <input
                  onChange={(e) => {
                    setform({ ...form, email: e.target.value });
                  }}
                  value={form.email}
                  placeholder="--/--/-- "
                  className="rounded-2 border border-[#CBD5E1] w-[416px] py-3 px-3 text-[#121316] "
                ></input>
                <img src="calendarIcon.svg" />
              </div>
              <div className="flex gap-2 flex-col items-start ">
                <div>
                  <span className=" text-[#334155] font-Inter text-[14px] ">
                    Profile image
                  </span>
                  <span className="text-[#E14942]">*</span>
                </div>

                <div className="bg-[#7F7F800D] flex justify-center items-center w-102 h-[180px]  flex-col gap-1">
                  <div className="bg-white rounded-[50%] w-7 h-7 flex justify-center items-center">
                    <img src="image.svg" className="w-3 h-3"></img>
                  </div>
                  <p className="text-[#09090B] text-[14px] font-Inter ">
                    Add image
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-1">
              <button
                onClick={() => {
                  Onclick(setStep("step2"));
                }}
                className="flex w-[128px] py-[10px] px-3 justify-center items-center gap- text-[#202124] font-inter text-4 border-[1px] border-[#CBD5E1] rounded-[6px]"
              >
                <img src="backIcon.svg" className="w-[24px] h-[24px]" /> Back
              </button>
              <button
                onClick={() => {
                  Onclick(setStep("step4"));
                }}
                className=" flex gap-1 py-2 px-3 justify-center items-center  text-[#FFFFFF] bg-[#121316] w-[280px] rounded-[6px] "
              >
                Continue {step}/3
                <img src="icon.svg" className="w-[24px] h-[24px]"></img>
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
  if (step === "step4") {
    return (
      <>
        <div className="w-full h-screen flex justify-center items-center">
          <div className=" flex flex-col items-between justify-between py-8 px-8 w-120 h-[193px]  bg-white rounded-2 ">
            <div className="flex flex-col gap-7 items-center">
              <div className="flex w-[416px] flex-col gap-2 ">
                <img src="Main.png" className="w-[60px] h-[60px]" />
                <div className="text-[#202124] font-inter text-[26px]  ">
                  You're All Set 🔥
                </div>
                <p className=" text-[#8E8E8E] font-Inter text-[18px]  ">
                  We have received your submission. Thank you!
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};
export default Page;
