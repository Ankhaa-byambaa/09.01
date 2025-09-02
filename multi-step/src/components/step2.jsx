export const Step2 = ({
  step,
  setForm,
  formEmail,
  formPassword,
  formPhonenumber,
  formConfirmPassword,
  Onclick,
  form1,
  setStep,
}) => {
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
             Email
                  </span>
                  <span className="text-[#E14942]">*</span>
                </div>

                <input
                  onChange={(e) => {
                    setForm({ ...form1, Email: e.target.value });
                  }}
                  value={formEmail}
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
                    setForm({ ...form1, phonenumber: e.target.value });
                  }}
                  value={formPhonenumber}
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
                    setForm({ ...form1, password: e.target.value });
                  }}
                  value={formPassword}
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
                    setForm({ ...form1, password: e.target.value });
                  }}
                  value={formConfirmPassword}
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
};
