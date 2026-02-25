export default function Button() {
  return (
    <div className="bg-[#303030] content-stretch flex gap-[2px] items-center justify-center px-[12px] py-[6px] relative rounded-[8px] size-full" data-name="Button">
      <p className="font-['SF_Pro_Text:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-white">Order transactions</p>
      <div className="absolute flex inset-0 items-center justify-center">
        <div className="-scale-y-100 flex-none h-[28px] rotate-180 w-[57px]">
          <div className="relative size-full" data-name=".button-shine">
            <div className="absolute bg-gradient-to-b from-[82.137%] from-[rgba(255,255,255,0.07)] inset-0 rounded-[8px] to-[94.444%] to-[rgba(255,255,255,0.15)]" data-name="shine">
              <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_0px_0px_rgba(255,255,255,0.2),inset_2px_0px_0px_0px_rgba(255,255,255,0.2),inset_-2px_0px_0px_0px_rgba(255,255,255,0.2),inset_0px_-1px_0px_1px_black,inset_0px_1px_0px_0px_black]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}