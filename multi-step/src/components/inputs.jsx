export function Inputs({ children, value, setForm, error, kkk }) {
  <div className="flex gap-2 flex-col items-start ">
    <div>
      <span className=" text-[#334155] font-Inter text-[14px] ">
        {children}
      </span>
    </div>

    <input
      onChange={(e) => {
        setForm({ kkk });
      }}
      value={value}
      placeholder={children}
      className="rounded-2 border border-[#CBD5E1] w-[416px] py-3 px-3 text-[#121316] "
    />
    {error && <div className="text-[#E14942] text-[14px]">{error}</div>}
  </div>;
}
