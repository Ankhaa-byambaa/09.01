export const Step4 = ({ step }) => {
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
