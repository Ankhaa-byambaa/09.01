export const Step1 = ({
  step,
  formLastname,
  formFirstname,
  formUsername,
  setForm,
  setStep,
  form,
  button,
}) => {
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
                    setForm({ ...form, firstname: e.target.value });
                  }}
                  value={formFirstname}
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
                    setForm({ ...form, lastname: e.target.value });
                  }}
                  value={formLastname}
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
                    setForm({ ...form, username: e.target.value });
                  }}
                  value={formUsername}
                  placeholder="Username"
                  className=" border border-[#CBD5E1] w-[416px] py-3 px-3 text-[#121316] rounded-2"
                />
              </div>
            </div>

            <button
              onClick={() => {
                button(setStep("step2"));
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
  return;
};
