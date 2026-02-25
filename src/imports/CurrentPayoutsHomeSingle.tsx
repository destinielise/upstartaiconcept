import svgPaths from "./svg-0xiettixlw";
import imgPortrait06 from "figma:asset/c70fea5a5af703435129cc8bbb72af44fde20f1f.png";

function Wordmark() {
  return (
    <div className="absolute inset-[19.22%_0_0_28.43%]" data-name="Wordmark">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 61.4365 19.3875">
        <g id="Wordmark">
          <path d={svgPaths.p34911600} fill="var(--fill-0, white)" id="s 1" />
          <path d={svgPaths.p28a7e480} fill="var(--fill-0, white)" id="h 1" />
          <path d={svgPaths.p16701dc0} fill="var(--fill-0, white)" id="o 1" />
          <path d={svgPaths.p25118100} fill="var(--fill-0, white)" id="p 1" />
          <path d={svgPaths.p17b5e880} fill="var(--fill-0, white)" id="dot 1" />
          <path d={svgPaths.pfef0e00} fill="var(--fill-0, white)" id="i 1" />
          <path d={svgPaths.p379c0680} fill="var(--fill-0, white)" id="f 1" />
          <path d={svgPaths.p33fba300} fill="var(--fill-0, white)" id="y 1" />
        </g>
      </svg>
    </div>
  );
}

function ShoppingBagMonchromaticInverted() {
  return (
    <div className="absolute inset-[0_75.25%_1.64%_0]" data-name="Shopping Bag/Monchromatic - Inverted">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.2506 23.6066">
        <g id="Shopping Bag/Monchromatic">
          <path d={svgPaths.p1fea1172} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p1c8e5c00} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function PrimaryLogoMonochromaticInverted() {
  return (
    <div className="h-[24px] relative shrink-0 w-[85.846px]" data-name="Primary Logo/Monochromatic - Inverted">
      <Wordmark />
      <ShoppingBagMonchromaticInverted />
    </div>
  );
}

function Inner() {
  return (
    <div className="bg-[#1a1a1a] content-stretch flex h-[44px] items-center justify-center relative rounded-[3px] shrink-0" data-name="Inner">
      <PrimaryLogoMonochromaticInverted />
    </div>
  );
}

function Search() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-h-px min-w-px relative" data-name="Search">
      <div className="bg-[#303030] max-w-[480px] min-w-[200px] relative rounded-[8px] shrink-0 w-full" data-name="Search field">
        <div className="flex flex-row items-center max-w-[inherit] min-w-[inherit] overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[2px] items-center max-w-[inherit] min-w-[inherit] pl-[6px] pr-[8px] py-[6px] relative w-full">
            <div className="relative shrink-0 size-[20px]" data-name="Search icon">
              <div className="absolute inset-[17.5%]" data-name="Icon">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
                  <path clipRule="evenodd" d={svgPaths.p257dd900} fill="var(--fill-0, #8A8A8A)" fillRule="evenodd" id="Icon" />
                </svg>
              </div>
            </div>
            <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-[450] leading-[20px] min-h-px min-w-px not-italic relative text-[#b5b5b5] text-[13px] whitespace-pre-wrap">Search</p>
            <div className="flex flex-col font-['Inter:Medium',sans-serif] font-[450] justify-center leading-[0] not-italic relative shrink-0 text-[#b5b5b5] text-[13px] whitespace-nowrap">
              <p className="leading-[20px]">⌘K</p>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[#616161] border-[0.66px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-end pl-[10px] relative shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-[550] leading-[16px] not-italic relative shrink-0 text-[#e3e3e3] text-[12px]">Stellar Interiors</p>
    </div>
  );
}

function Item() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] pr-[4px] py-[4px] relative w-full">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon">
            <div className="absolute inset-[16.64%_20%_20%_20%]" data-name="Icon">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12.6716">
                <path d={svgPaths.p8a5da00} fill="var(--fill-0, #4A4A4A)" id="Icon" />
              </svg>
            </div>
          </div>
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-[550] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#303030] text-[13px] text-ellipsis text-left whitespace-nowrap">
            <p className="leading-[20px] overflow-hidden">Home</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] pr-[4px] py-[4px] relative w-full">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon">
            <div className="absolute inset-[17.5%]" data-name="Icon">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
                <path clipRule="evenodd" d={svgPaths.p3c209f80} fill="var(--fill-0, #4A4A4A)" fillRule="evenodd" id="Icon" />
              </svg>
            </div>
          </div>
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-[550] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#303030] text-[13px] text-ellipsis text-left whitespace-nowrap">
            <p className="leading-[20px] overflow-hidden">Orders</p>
          </div>
          <div className="bg-[rgba(0,0,0,0.06)] content-stretch flex h-[20px] items-center justify-center px-[8px] py-[2px] relative rounded-[8px] shrink-0" data-name="Badge">
            <p className="font-['Inter:Medium',sans-serif] font-[550] leading-[16px] not-italic relative shrink-0 text-[#616161] text-[12px] text-left">15</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] pr-[4px] py-[4px] relative w-full">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon">
            <div className="absolute h-[13.048px] left-[3.55px] top-[3.5px] w-[12.948px]" data-name="Subtract">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.948 13.0483">
                <path clipRule="evenodd" d={svgPaths.p152d3f00} fill="var(--fill-0, #4A4A4A)" fillRule="evenodd" id="Subtract" />
              </svg>
            </div>
          </div>
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-[550] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#303030] text-[13px] text-ellipsis text-left whitespace-nowrap">
            <p className="leading-[20px] overflow-hidden">Products</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Item3() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] pr-[4px] py-[4px] relative w-full">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon">
            <div className="absolute h-[14px] left-[3.91px] top-[3px] w-[12.182px]" data-name="icon">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.1817 14">
                <g id="icon">
                  <path d={svgPaths.p34ddf1e0} fill="var(--fill-0, #4A4A4A)" />
                  <path d={svgPaths.p2d57ef80} fill="var(--fill-0, #4A4A4A)" />
                </g>
              </svg>
            </div>
          </div>
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-[550] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#303030] text-[13px] text-ellipsis text-left whitespace-nowrap">
            <p className="leading-[20px] overflow-hidden">Customers</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Item4() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] pr-[4px] py-[4px] relative w-full">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon">
            <div className="absolute inset-[17.5%]" data-name="Icon">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
                <g id="Icon">
                  <path d={svgPaths.p213b800} fill="var(--fill-0, #4A4A4A)" />
                  <path clipRule="evenodd" d={svgPaths.p254fe240} fill="var(--fill-0, #4A4A4A)" fillRule="evenodd" />
                  <path d={svgPaths.p228eff80} fill="var(--fill-0, #4A4A4A)" />
                  <path d={svgPaths.p36c49a00} fill="var(--fill-0, #4A4A4A)" />
                </g>
              </svg>
            </div>
          </div>
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-[550] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#303030] text-[13px] text-ellipsis text-left whitespace-nowrap">
            <p className="leading-[20px] overflow-hidden">Content</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Item5() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] pr-[4px] py-[4px] relative w-full">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon">
            <div className="absolute h-[12.696px] left-[3.5px] top-[3.05px] w-[13px]" data-name="Icon">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 12.6958">
                <path clipRule="evenodd" d={svgPaths.p14e2e200} fill="var(--fill-0, #4A4A4A)" fillRule="evenodd" id="Icon" />
              </svg>
            </div>
          </div>
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-[550] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#303030] text-[13px] text-ellipsis text-left whitespace-nowrap">
            <p className="leading-[20px] overflow-hidden">Finances</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Item6() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] pr-[4px] py-[4px] relative w-full">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon">
            <div className="absolute bottom-[20%] left-[4px] top-[20%] w-[12px]" data-name="Union">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                <g id="Union">
                  <path d={svgPaths.p3bc92df0} fill="var(--fill-0, #4A4A4A)" />
                  <path d={svgPaths.p30436e00} fill="var(--fill-0, #4A4A4A)" />
                  <path d={svgPaths.pf3b100} fill="var(--fill-0, #4A4A4A)" />
                </g>
              </svg>
            </div>
          </div>
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-[550] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#303030] text-[13px] text-ellipsis text-left whitespace-nowrap">
            <p className="leading-[20px] overflow-hidden">Analytics</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Item7() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] pr-[4px] py-[4px] relative w-full">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon">
            <div className="absolute left-[3px] size-[14.955px] top-[3px]" data-name="Icon">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.955 14.9549">
                <g id="Icon">
                  <path d={svgPaths.p3845d300} fill="var(--fill-0, #4A4A4A)" />
                  <path d={svgPaths.p7922100} fill="var(--fill-0, #4A4A4A)" />
                  <path d={svgPaths.p87da980} fill="var(--fill-0, #4A4A4A)" />
                </g>
              </svg>
            </div>
          </div>
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-[550] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#303030] text-[13px] text-ellipsis text-left whitespace-nowrap">
            <p className="leading-[20px] overflow-hidden">Marketing</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Item8() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] pr-[4px] py-[4px] relative w-full">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon">
            <div className="absolute left-[2.35px] size-[15.305px] top-[2.35px]" data-name="Icon">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.3051 15.3051">
                <path clipRule="evenodd" d={svgPaths.p12771100} fill="var(--fill-0, #4A4A4A)" fillRule="evenodd" id="Icon" />
              </svg>
            </div>
          </div>
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-[550] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#303030] text-[13px] text-ellipsis text-left whitespace-nowrap">
            <p className="leading-[20px] overflow-hidden">Discounts</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Core() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Core">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Home">
        <button className="content-stretch cursor-pointer flex flex-col items-start px-[12px] relative shrink-0 w-[240px]" data-name="↪️ Email">
          <Item />
        </button>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Orders">
        <button className="content-stretch cursor-pointer flex flex-col items-start px-[12px] relative shrink-0 w-[240px]" data-name="↪️ Orders">
          <Item1 />
        </button>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Products">
        <button className="content-stretch cursor-pointer flex flex-col items-start px-[12px] relative shrink-0 w-[240px]" data-name="↪️ Products">
          <Item2 />
        </button>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Customers">
        <button className="content-stretch cursor-pointer flex flex-col items-start px-[12px] relative shrink-0 w-[240px]" data-name="↪️ Customers">
          <Item3 />
        </button>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Content">
        <button className="content-stretch cursor-pointer flex flex-col items-start px-[12px] relative shrink-0 w-[240px]" data-name="↪️ Content">
          <Item4 />
        </button>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Finances">
        <button className="content-stretch cursor-pointer flex flex-col items-start px-[12px] relative shrink-0 w-[240px]" data-name="↪️ Finances">
          <Item5 />
        </button>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Analytics">
        <button className="content-stretch cursor-pointer flex flex-col items-start px-[12px] relative shrink-0 w-[240px]" data-name="↪️ Analytics">
          <Item6 />
        </button>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Marketing">
        <button className="content-stretch cursor-pointer flex flex-col items-start px-[12px] relative shrink-0 w-[240px]" data-name="↪️ Marketing">
          <Item7 />
        </button>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Discounts">
        <button className="content-stretch cursor-pointer flex flex-col items-start px-[12px] relative shrink-0 w-[240px]" data-name="↪️ Email">
          <Item8 />
        </button>
      </div>
    </div>
  );
}

function Item9() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] pr-[4px] py-[4px] relative w-full">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon">
            <div className="absolute left-[2px] size-[16px] top-[2px]" data-name="Icon">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <g id="Icon">
                  <path d={svgPaths.p17169e80} fill="var(--fill-0, #4A4A4A)" />
                  <path d={svgPaths.pf9f4600} fill="var(--fill-0, #4A4A4A)" />
                  <path d={svgPaths.p16589c00} fill="var(--fill-0, #4A4A4A)" />
                  <path d={svgPaths.p1364c80} fill="var(--fill-0, #4A4A4A)" />
                  <path clipRule="evenodd" d={svgPaths.p3b8ab600} fill="var(--fill-0, #4A4A4A)" fillRule="evenodd" />
                </g>
              </svg>
            </div>
          </div>
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-[550] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#303030] text-[13px] text-ellipsis whitespace-nowrap">
            <p className="leading-[20px] overflow-hidden">Online Store</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Item10() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] pr-[4px] py-[4px] relative w-full">
          <div className="relative shrink-0 size-[20px]" data-name="Icon">
            <div className="absolute inset-[10%]" data-name="Subtract">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <g id="Subtract">
                  <path d={svgPaths.p3af62400} fill="var(--fill-0, #4A4A4A)" />
                  <path d={svgPaths.p1cbf6580} fill="var(--fill-0, #4A4A4A)" />
                  <path clipRule="evenodd" d={svgPaths.p2deaff80} fill="var(--fill-0, #4A4A4A)" fillRule="evenodd" />
                </g>
              </svg>
            </div>
          </div>
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-[550] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#303030] text-[13px] text-ellipsis whitespace-nowrap">
            <p className="leading-[20px] overflow-hidden">Point of Sale</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Item11() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] pr-[4px] py-[4px] relative w-full">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon">
            <div className="absolute inset-[10%]" data-name="Subtract">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <path clipRule="evenodd" d={svgPaths.pe216f00} fill="var(--fill-0, #4A4A4A)" fillRule="evenodd" id="Subtract" />
              </svg>
            </div>
          </div>
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-[550] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#303030] text-[13px] text-ellipsis text-left whitespace-nowrap">
            <p className="leading-[20px] overflow-hidden">Shop</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SalesChannels() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Sales channels">
      <div className="content-stretch flex items-center justify-between pl-[20px] pr-[16px] py-[4px] relative shrink-0 w-[240px]" data-name="Sales channels">
        <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-[550] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#616161] text-[12px]">
          <p className="leading-[16px] whitespace-pre-wrap">Sales channels</p>
        </div>
        <div className="relative shrink-0 size-[20px]" data-name="ChevronRight">
          <div className="-translate-y-1/2 absolute flex h-[9.5px] items-center justify-center left-[7.5px] top-1/2 w-[5.5px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
            <div className="-rotate-90 flex-none">
              <div className="h-[5.5px] relative w-[9.5px]" data-name="Icon">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.5 5.5">
                  <path clipRule="evenodd" d={svgPaths.pc9ae070} fill="var(--fill-0, #8A8A8A)" fillRule="evenodd" id="Icon" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Online store">
        <div className="content-stretch flex flex-col items-start px-[12px] relative shrink-0 w-[240px]" data-name="↪️ Online Store">
          <Item9 />
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Point of sale">
        <div className="content-stretch flex flex-col items-start px-[12px] relative shrink-0 w-[240px]" data-name="↪️ Point of Sale">
          <Item10 />
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Shop">
        <button className="content-stretch cursor-pointer flex flex-col items-start px-[12px] relative shrink-0 w-[240px]" data-name="↪️ Email">
          <Item11 />
        </button>
      </div>
    </div>
  );
}

function Item12() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] pr-[4px] py-[4px] relative w-full">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="icon">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <path clipRule="evenodd" d={svgPaths.p22839a00} fill="var(--fill-0, #4A4A4A)" fillRule="evenodd" id="icon" />
              </svg>
            </div>
          </div>
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-[550] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#303030] text-[13px] text-ellipsis whitespace-nowrap">
            <p className="leading-[20px] overflow-hidden">Shopify Email</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SalesChannels1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Sales channels">
      <div className="content-stretch flex items-center justify-between pl-[20px] pr-[16px] py-[4px] relative shrink-0 w-[240px]" data-name="Apps">
        <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-[550] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#616161] text-[12px]">
          <p className="leading-[16px] whitespace-pre-wrap">Apps</p>
        </div>
        <div className="relative shrink-0 size-[20px]" data-name="ChevronRight">
          <div className="-translate-y-1/2 absolute flex h-[9.5px] items-center justify-center left-[7.5px] top-1/2 w-[5.5px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
            <div className="-rotate-90 flex-none">
              <div className="h-[5.5px] relative w-[9.5px]" data-name="Icon">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.5 5.5">
                  <path clipRule="evenodd" d={svgPaths.pc9ae070} fill="var(--fill-0, #8A8A8A)" fillRule="evenodd" id="Icon" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Email">
        <div className="content-stretch flex flex-col items-start px-[12px] relative shrink-0 w-[240px]" data-name="↪️ Email">
          <Item12 />
        </div>
      </div>
    </div>
  );
}

function NavItems() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0" data-name="Nav items">
      <Core />
      <SalesChannels />
      <SalesChannels1 />
    </div>
  );
}

function Item13() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] pr-[4px] py-[4px] relative w-full">
          <div className="relative shrink-0 size-[20px]" data-name="Icon">
            <div className="absolute h-[14.327px] left-[3.3px] top-[2.8px] w-[13.4px]" data-name="Subtract">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.4001 14.3272">
                <path clipRule="evenodd" d={svgPaths.p1f2fef80} fill="var(--fill-0, #4A4A4A)" fillRule="evenodd" id="Subtract" />
              </svg>
            </div>
          </div>
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-[550] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#303030] text-[13px] text-ellipsis text-left whitespace-nowrap">
            <p className="leading-[20px] overflow-hidden">Settings</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[16px] relative shrink-0 w-[20px]" data-name="Icon">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[20px] top-1/2" data-name="Mobile=false">
        <div className="absolute flex inset-[23.61%_12.5%_23.61%_15.28%] items-center justify-center">
          <div className="flex-none h-[14.444px] rotate-90 w-[10.556px]">
            <div className="relative size-full" data-name="Icon">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5556 14.4444">
                <path clipRule="evenodd" d={svgPaths.p113e1600} fill="var(--fill-0, #4A4A4A)" fillRule="evenodd" id="Icon" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex gap-[8px] items-center py-[2px] relative shrink-0 w-full" data-name="Title">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-[650] leading-[24px] not-italic relative shrink-0 text-[#303030] text-[20px] tracking-[-0.2px]">Payouts</p>
    </div>
  );
}

function TitleWrapper() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0" data-name="Title wrapper">
      <Title />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center leading-[0] not-italic relative shrink-0">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-[650] justify-center relative shrink-0 text-[#303030] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Sales per Hour</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-[450] justify-center relative shrink-0 text-[#616161] text-[13px] w-[162px]">
        <p className="leading-[20px] whitespace-pre-wrap">{`Today's hourly breakdown`}</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-center justify-center pl-[16px] relative shrink-0">
      <Frame12 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[91.47%_81.1%_3.53%_9.61%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[91.47%_81.1%_3.53%_9.61%] leading-[normal] not-italic text-[#616161] text-[11.989px] text-center whitespace-pre-wrap">00:00</p>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[91.47%_67.7%_3.53%_23.01%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[91.47%_67.7%_3.53%_23.01%] leading-[normal] not-italic text-[#616161] text-[11.989px] text-center whitespace-pre-wrap">03:00</p>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[91.47%_54.3%_3.53%_36.41%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[91.47%_54.3%_3.53%_36.41%] leading-[normal] not-italic text-[#616161] text-[11.989px] text-center whitespace-pre-wrap">06:00</p>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[91.47%_40.89%_3.53%_49.82%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[91.47%_40.89%_3.53%_49.82%] leading-[normal] not-italic text-[#616161] text-[11.989px] text-center whitespace-pre-wrap">09:00</p>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-[91.47%_27.76%_3.53%_63.5%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[91.47%_27.76%_3.53%_63.5%] leading-[normal] not-italic text-[#616161] text-[11.989px] text-center whitespace-pre-wrap">12:00</p>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-[91.47%_14.36%_3.53%_76.9%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[91.47%_14.36%_3.53%_76.9%] leading-[normal] not-italic text-[#616161] text-[11.989px] text-center whitespace-pre-wrap">15:00</p>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents inset-[91.47%_0.95%_3.53%_90.3%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[91.47%_0.95%_3.53%_90.3%] leading-[normal] not-italic text-[#616161] text-[11.989px] text-center whitespace-pre-wrap">18:00</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[91.47%_0.95%_3.53%_9.61%]" data-name="Group">
      <Group2 />
      <Group3 />
      <Group4 />
      <Group5 />
      <Group6 />
      <Group7 />
      <Group8 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[91.47%_0.95%_3.53%_9.61%]" data-name="Group">
      <Group1 />
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents inset-[87.39%_90.17%_7.61%_5.46%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[87.39%_90.17%_7.61%_5.46%] leading-[normal] not-italic text-[#616161] text-[11.989px] text-right whitespace-pre-wrap">$0</p>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents inset-[65.74%_90.16%_29.26%_1.37%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[65.74%_90.16%_29.26%_1.37%] leading-[normal] not-italic text-[#616161] text-[11.989px] text-right whitespace-pre-wrap">$300</p>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents inset-[44.09%_90.16%_50.91%_1.37%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[44.09%_90.16%_50.91%_1.37%] leading-[normal] not-italic text-[#616161] text-[11.989px] text-right whitespace-pre-wrap">$600</p>
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute contents inset-[22.45%_90.16%_72.55%_1.37%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[22.45%_90.16%_72.55%_1.37%] leading-[normal] not-italic text-[#616161] text-[11.989px] text-right whitespace-pre-wrap">$900</p>
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute contents inset-[0.8%_90.16%_94.2%_0]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[0.8%_90.16%_94.2%_0] leading-[normal] not-italic text-[#616161] text-[11.989px] text-right whitespace-pre-wrap">$1200</p>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents inset-[0.8%_90.16%_7.61%_0]" data-name="Group">
      <Group11 />
      <Group12 />
      <Group13 />
      <Group14 />
      <Group15 />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents inset-[0.8%_90.16%_7.61%_0]" data-name="Group">
      <Group10 />
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute inset-[60.16%_83.72%_10.04%_12.73%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.9879 38.74">
        <g id="Group">
          <path d={svgPaths.p3e2b0300} fill="var(--fill-0, #616161)" fillOpacity="0.2" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute inset-[46.53%_79.25%_10.04%_17.2%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.9879 56.4685">
        <g id="Group">
          <path d={svgPaths.p1221a600} fill="var(--fill-0, #616161)" fillOpacity="0.2" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute inset-[18.38%_74.78%_10.04%_21.67%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.9879 93.0511">
        <g id="Group">
          <path d={svgPaths.p37adaf00} fill="var(--fill-0, #616161)" fillOpacity="0.2" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute inset-[38.59%_70.32%_10.04%_26.14%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.9879 66.7867">
        <g id="Group">
          <path d={svgPaths.p3a70ea00} fill="var(--fill-0, #616161)" fillOpacity="0.2" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute inset-[23.65%_65.85%_10.04%_30.6%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.9879 86.2036">
        <g id="Group">
          <path d={svgPaths.p34c90100} fill="var(--fill-0, #616161)" fillOpacity="0.2" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group24() {
  return (
    <div className="absolute inset-[46.31%_61.38%_10.04%_35.07%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.9879 56.7499">
        <g id="Group">
          <path d={svgPaths.p3934a280} fill="var(--fill-0, #616161)" fillOpacity="0.2" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group25() {
  return (
    <div className="absolute inset-[60.6%_56.91%_10.04%_39.54%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.9879 38.1772">
        <g id="Group">
          <path d={svgPaths.p2f0be100} fill="var(--fill-0, #616161)" fillOpacity="0.2" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group26() {
  return (
    <div className="absolute inset-[53.09%_52.44%_10.04%_44.01%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.9879 47.9326">
        <g id="Group">
          <path d={svgPaths.p2b6d3f00} fill="var(--fill-0, #616161)" fillOpacity="0.2" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group27() {
  return (
    <div className="absolute inset-[63.05%_47.98%_10.04%_48.48%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.9879 34.988">
        <g id="Group">
          <path d={svgPaths.p1acf5380} fill="var(--fill-0, #616161)" fillOpacity="0.2" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group28() {
  return (
    <div className="absolute inset-[14.2%_43.51%_10.04%_52.94%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.9879 98.4916">
        <g id="Group">
          <path d={svgPaths.p5f8f000} fill="var(--fill-0, #616161)" fillOpacity="0.2" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group29() {
  return (
    <div className="absolute inset-[55.62%_39.04%_10.04%_57.41%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.9879 44.6495">
        <g id="Group">
          <path d={svgPaths.p2639080} fill="var(--fill-0, #616161)" fillOpacity="0.2" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group30() {
  return (
    <div className="absolute inset-[15.93%_34.57%_10.04%_61.88%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.9879 96.2404">
        <g id="Group">
          <path d={svgPaths.pd30bd00} fill="var(--fill-0, #616161)" fillOpacity="0.2" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group31() {
  return (
    <div className="absolute inset-[57.2%_30.1%_10.04%_66.35%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.9879 42.5859">
        <g id="Group">
          <path d={svgPaths.p3ce97980} fill="var(--fill-0, #616161)" fillOpacity="0.2" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group32() {
  return (
    <div className="absolute inset-[13.33%_25.64%_10.04%_70.82%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.9879 99.6172">
        <g id="Group">
          <path d={svgPaths.p3b992680} fill="var(--fill-0, #616161)" fillOpacity="0.2" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group33() {
  return (
    <div className="absolute inset-[62.9%_21.17%_10.04%_75.28%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.9879 35.1756">
        <g id="Group">
          <path d={svgPaths.p1cdb3000} fill="var(--fill-0, #616161)" fillOpacity="0.2" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group34() {
  return (
    <div className="absolute inset-[37.07%_16.7%_10.04%_79.75%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.9879 68.7565">
        <g id="Group">
          <path d={svgPaths.p121d9f00} fill="var(--fill-0, #616161)" fillOpacity="0.2" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group35() {
  return (
    <div className="absolute inset-[48.26%_12.23%_10.04%_84.22%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.9879 54.2173">
        <g id="Group">
          <path d={svgPaths.p9753c80} fill="var(--fill-0, #616161)" fillOpacity="0.2" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group36() {
  return (
    <div className="absolute inset-[43.35%_7.76%_10.04%_88.69%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.9879 60.5958">
        <g id="Group">
          <path d={svgPaths.p31e84b40} fill="var(--fill-0, #005BD3)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group37() {
  return (
    <div className="absolute inset-[58.65%_3.29%_10.04%_93.16%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.9879 40.7099">
        <g id="Group">
          <path d={svgPaths.p6249570} fill="var(--fill-0, #616161)" fillOpacity="0.5" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute contents inset-[13.33%_3.29%_10.04%_12.73%]" data-name="Group">
      <Group19 />
      <Group20 />
      <Group21 />
      <Group22 />
      <Group23 />
      <Group24 />
      <Group25 />
      <Group26 />
      <Group27 />
      <Group28 />
      <Group29 />
      <Group30 />
      <Group31 />
      <Group32 />
      <Group33 />
      <Group34 />
      <Group35 />
      <Group36 />
      <Group37 />
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute contents inset-[13.33%_3.29%_10.04%_12.73%]" data-name="Group">
      <Group18 />
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute contents inset-[13.33%_3.29%_10.04%_12.73%]" data-name="Group">
      <Group17 />
    </div>
  );
}

function Surface() {
  return (
    <div className="absolute h-[130px] left-[-5px] top-0 w-[366px]" data-name="Surface">
      <Group />
      <Group9 />
      <Group16 />
    </div>
  );
}

function BarChart() {
  return (
    <div className="h-[197px] relative shrink-0 w-[366px]" data-name="BarChart">
      <Surface />
    </div>
  );
}

function Container3() {
  return <div className="bg-[#cbd5e1] rounded-[4px] shrink-0 size-[12px]" data-name="Container" />;
}

function Text() {
  return (
    <div className="flex-[1_0_0] h-[17.141px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17.143px] left-0 not-italic text-[#616161] text-[12px] top-0">Past hours</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[17.141px] relative shrink-0 w-[80.359px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container3 />
        <Text />
      </div>
    </div>
  );
}

function Container5() {
  return <div className="bg-[#6366f1] rounded-[4px] shrink-0 size-[12px]" data-name="Container" />;
}

function Text1() {
  return (
    <div className="flex-[1_0_0] h-[17.141px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17.143px] left-0 not-italic text-[#616161] text-[12px] top-0">Current hour</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[17.141px] relative shrink-0 w-[91.867px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container5 />
        <Text1 />
      </div>
    </div>
  );
}

function Container7() {
  return <div className="bg-[#94a3b8] opacity-60 rounded-[4px] shrink-0 size-[12px]" data-name="Container" />;
}

function Text2() {
  return (
    <div className="flex-[1_0_0] h-[17.141px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17.143px] left-0 not-italic text-[#616161] text-[12px] top-0">Estimation</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[17.141px] relative shrink-0 w-[79.25px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container7 />
        <Text2 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[17.141px] items-center left-[59px] top-[148px]" data-name="Container">
      <Container2 />
      <Container4 />
      <Container6 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[357.141px] items-start px-[24px] relative shrink-0 w-[408.664px]" data-name="Container">
      <BarChart />
      <Container1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0">
      <Container />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Frame3 />
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] h-[220px] items-start overflow-clip py-[16px] relative rounded-[12px] shadow-[0px_1px_0px_0px_rgba(26,26,26,0.07)] shrink-0" data-name="Card">
      <Frame9 />
      <Frame8 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_1px_0px_0px_0px_rgba(0,0,0,0.13),inset_-1px_0px_0px_0px_rgba(0,0,0,0.13),inset_0px_-1px_0px_0px_rgba(0,0,0,0.17),inset_0px_1px_0px_0px_rgba(204,204,204,0.5)]" />
    </div>
  );
}

function Frame4() {
  return (
    <div className="flex-[1_0_0] h-[157px] min-h-px min-w-px relative rounded-[12px]">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <Card />
      </div>
      <div aria-hidden="true" className="absolute border-[#e3e3e3] border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center leading-[0] not-italic relative shrink-0">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-[650] justify-center relative shrink-0 text-[#303030] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Incoming</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-[450] justify-center relative shrink-0 text-[#616161] text-[13px] w-[162px]">
        <p className="leading-[20px] whitespace-pre-wrap">Payout balance</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-center justify-center pl-[16px] relative shrink-0">
      <Frame13 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center justify-center not-italic relative text-[#616161]">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[40px] relative shrink-0 text-[30px] tracking-[-0.3px]">$4,705</p>
        <p className="font-['Inter:Medium',sans-serif] font-[450] leading-[20px] relative shrink-0 text-[14px]">USD</p>
      </div>
    </div>
  );
}

function Container11() {
  return <div className="bg-[rgba(0,0,0,0.06)] rounded-[16777200px] shrink-0 size-[6px]" data-name="Container" />;
}

function Container12() {
  return <div className="bg-[rgba(0,0,0,0.06)] rounded-[16777200px] shrink-0 size-[6px]" data-name="Container" />;
}

function Container13() {
  return <div className="bg-[rgba(0,0,0,0.06)] rounded-[16777200px] shrink-0 size-[6px]" data-name="Container" />;
}

function Container14() {
  return <div className="bg-[rgba(0,0,0,0.06)] rounded-[16777200px] shrink-0 size-[6px]" data-name="Container" />;
}

function Container10() {
  return (
    <div className="h-[6px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-start justify-center pr-[0.008px] relative size-full">
          <Container11 />
          <Container12 />
          <Container13 />
          <Container14 />
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-center left-0 top-0 w-[360.664px]" data-name="Container">
      <Frame15 />
      <Container10 />
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[72px] relative shrink-0 w-[360px]" data-name="Container">
      <Container9 />
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start overflow-clip py-[16px] relative rounded-[12px] shadow-[0px_1px_0px_0px_rgba(26,26,26,0.07)] shrink-0" data-name="Card">
      <Frame10 />
      <Container8 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_1px_0px_0px_0px_rgba(0,0,0,0.13),inset_-1px_0px_0px_0px_rgba(0,0,0,0.13),inset_0px_-1px_0px_0px_rgba(0,0,0,0.17),inset_0px_1px_0px_0px_rgba(204,204,204,0.5)]" />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center relative rounded-[12px] shrink-0">
      <div aria-hidden="true" className="absolute border-[#e3e3e3] border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Card1 />
    </div>
  );
}

function SpH() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px overflow-clip relative" data-name="SpH">
      <Frame5 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center leading-[0] not-italic relative shrink-0">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-[650] justify-center relative shrink-0 text-[#303030] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Latest Payout</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-[450] justify-center relative shrink-0 text-[#616161] text-[13px] w-[162px]">
        <p className="leading-[20px] whitespace-pre-wrap">Payout balance</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center justify-center pl-[16px] relative shrink-0">
      <Frame16 />
    </div>
  );
}

function Container18() {
  return <div className="bg-[rgba(0,0,0,0.06)] rounded-[16777200px] shrink-0 size-[6px]" data-name="Container" />;
}

function Container19() {
  return <div className="bg-[rgba(0,0,0,0.06)] rounded-[16777200px] shrink-0 size-[6px]" data-name="Container" />;
}

function Container20() {
  return <div className="bg-[rgba(0,0,0,0.06)] rounded-[16777200px] shrink-0 size-[6px]" data-name="Container" />;
}

function Container21() {
  return <div className="bg-[rgba(0,0,0,0.06)] rounded-[16777200px] shrink-0 size-[6px]" data-name="Container" />;
}

function Container17() {
  return (
    <div className="h-[6px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-start justify-center pr-[0.008px] relative size-full">
          <Container18 />
          <Container19 />
          <Container20 />
          <Container21 />
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 top-0 w-[360.664px]" data-name="Container">
      <Container17 />
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[72px] relative shrink-0 w-[360px]" data-name="Container">
      <Container16 />
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px overflow-clip py-[16px] relative rounded-[12px] shadow-[0px_1px_0px_0px_rgba(26,26,26,0.07)]" data-name="Card">
      <Frame11 />
      <Container15 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_1px_0px_0px_0px_rgba(0,0,0,0.13),inset_-1px_0px_0px_0px_rgba(0,0,0,0.13),inset_0px_-1px_0px_0px_rgba(0,0,0,0.17),inset_0px_1px_0px_0px_rgba(204,204,204,0.5)]" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative rounded-[12px]">
      <div aria-hidden="true" className="absolute border-[#e3e3e3] border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Card2 />
    </div>
  );
}

function SpH1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="SpH">
      <Frame6 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Frame4 />
      <SpH />
      <SpH1 />
    </div>
  );
}

function Actions() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-[16px]" data-name="Actions">
      <div className="-translate-y-1/2 absolute left-0 overflow-clip size-[20px] top-1/2" data-name="CaretDown">
        <div className="absolute inset-[40%_30%_35%_30%]" data-name="Vector 469 (Stroke)">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.00001 5">
            <path clipRule="evenodd" d={svgPaths.p1d8ae500} fill="var(--fill-0, #4A4A4A)" fillRule="evenodd" id="Vector 469 (Stroke)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SearchFilter() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center overflow-clip pl-[4px] pr-[6px] py-[4px] relative rounded-[8px] shrink-0" data-name="Search filter">
      <div className="mr-[-2px] relative shrink-0 size-[20px]" data-name="Search">
        <div className="absolute inset-[17.5%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
            <path clipRule="evenodd" d={svgPaths.p257dd900} fill="var(--fill-0, #4A4A4A)" fillRule="evenodd" id="Icon" />
          </svg>
        </div>
      </div>
      <div className="mr-[-2px] overflow-clip relative shrink-0 size-[20px]" data-name="Filter">
        <div className="absolute h-[9.5px] left-[3px] top-[5.25px] w-[14px]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 9.5">
            <g id="Icon">
              <path d={svgPaths.p91b1300} fill="var(--fill-0, #4A4A4A)" />
              <path d={svgPaths.p1b7dc780} fill="var(--fill-0, #4A4A4A)" />
              <path d={svgPaths.pf565ff0} fill="var(--fill-0, #4A4A4A)" />
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#b5b5b5,inset_-1px_0px_0px_0px_#e3e3e3,inset_1px_0px_0px_0px_#e3e3e3,inset_0px_1px_0px_0px_#e3e3e3]" />
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[20px]" data-name="Icon">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[20px] top-1/2" data-name="Sort">
        <div className="-translate-x-1/2 absolute h-[13px] left-1/2 top-[3.5px] w-[13.5px]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 13">
            <g id="Icon">
              <path d={svgPaths.p3c84a980} fill="var(--fill-0, #4A4A4A)" />
              <path d={svgPaths.p31b50e80} fill="var(--fill-0, #4A4A4A)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function TotalUsd() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="#Total (USD)">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex font-['Inter:Medium',sans-serif] gap-[4px] items-center leading-[0] not-italic pl-[6px] pr-[12px] py-[8px] relative text-[13px] text-right w-full">
          <div className="flex flex-[1_0_0] flex-col font-[550] justify-center min-h-px min-w-px relative text-[#303030]">
            <p className="whitespace-pre-wrap">
              <span className="leading-[20px]">$</span>
              <span className="leading-[20px]">12,401.58</span>
            </p>
          </div>
          <div className="flex flex-col font-[450] justify-center relative shrink-0 text-[#616161] whitespace-nowrap">
            <p className="leading-[20px]">USD</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#ebebeb] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TotalUsd1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="#Total (USD)">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex font-['Inter:Medium',sans-serif] gap-[4px] items-center leading-[0] not-italic pl-[6px] pr-[12px] py-[8px] relative text-[13px] text-right w-full">
          <div className="flex flex-[1_0_0] flex-col font-[550] justify-center min-h-px min-w-px relative text-[#303030]">
            <p className="leading-[20px] whitespace-pre-wrap">$11,782.77</p>
          </div>
          <div className="flex flex-col font-[450] justify-center relative shrink-0 text-[#616161] whitespace-nowrap">
            <p className="leading-[20px]">USD</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#ebebeb] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TotalUsd2() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="#Total (USD)">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex font-['Inter:Medium',sans-serif] gap-[4px] items-center leading-[0] not-italic pl-[6px] pr-[12px] py-[8px] relative text-[13px] text-right w-full">
          <div className="flex flex-[1_0_0] flex-col font-[550] justify-center min-h-px min-w-px relative text-[#303030]">
            <p className="leading-[20px] whitespace-pre-wrap">$11,243.20</p>
          </div>
          <div className="flex flex-col font-[450] justify-center relative shrink-0 text-[#616161] whitespace-nowrap">
            <p className="leading-[20px]">USD</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#ebebeb] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TotalUsd3() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="#Total (USD)">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex font-['Inter:Medium',sans-serif] gap-[4px] items-center leading-[0] not-italic pl-[6px] pr-[12px] py-[8px] relative text-[13px] text-right w-full">
          <div className="flex flex-[1_0_0] flex-col font-[550] justify-center min-h-px min-w-px relative text-[#303030]">
            <p className="whitespace-pre-wrap">
              <span className="leading-[20px]">$</span>
              <span className="leading-[20px]">10,951.34</span>
            </p>
          </div>
          <div className="flex flex-col font-[450] justify-center relative shrink-0 text-[#616161] whitespace-nowrap">
            <p className="leading-[20px]">USD</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#ebebeb] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TotalUsd4() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="#Total (USD)">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex font-['Inter:Medium',sans-serif] gap-[4px] items-center leading-[0] not-italic pl-[6px] pr-[12px] py-[8px] relative text-[13px] text-right w-full">
          <div className="flex flex-[1_0_0] flex-col font-[550] justify-center min-h-px min-w-px relative text-[#303030]">
            <p className="leading-[20px] whitespace-pre-wrap">$12,438.20</p>
          </div>
          <div className="flex flex-col font-[450] justify-center relative shrink-0 text-[#616161] whitespace-nowrap">
            <p className="leading-[20px]">USD</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#ebebeb] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TotalUsd5() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="#Total (USD)">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex font-['Inter:Medium',sans-serif] gap-[4px] items-center leading-[0] not-italic pl-[6px] pr-[12px] py-[8px] relative text-[13px] text-right w-full">
          <div className="flex flex-[1_0_0] flex-col font-[550] justify-center min-h-px min-w-px relative text-[#303030]">
            <p className="leading-[20px] whitespace-pre-wrap">$10,204.22</p>
          </div>
          <div className="flex flex-col font-[450] justify-center relative shrink-0 text-[#616161] whitespace-nowrap">
            <p className="leading-[20px]">USD</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#ebebeb] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TotalUsd6() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="#Total (USD)">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex font-['Inter:Medium',sans-serif] gap-[4px] items-center leading-[0] not-italic pl-[6px] pr-[12px] py-[8px] relative text-[13px] text-right w-full">
          <div className="flex flex-[1_0_0] flex-col font-[550] justify-center min-h-px min-w-px relative text-[#303030]">
            <p className="leading-[20px] whitespace-pre-wrap">$13,417.62</p>
          </div>
          <div className="flex flex-col font-[450] justify-center relative shrink-0 text-[#616161] whitespace-nowrap">
            <p className="leading-[20px]">USD</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#ebebeb] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TotalUsd7() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="#Total (USD)">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex font-['Inter:Medium',sans-serif] gap-[4px] items-center leading-[0] not-italic pl-[6px] pr-[12px] py-[8px] relative text-[13px] text-right w-full">
          <div className="flex flex-[1_0_0] flex-col font-[550] justify-center min-h-px min-w-px relative text-[#303030]">
            <p className="leading-[20px] whitespace-pre-wrap">$12,253.64</p>
          </div>
          <div className="flex flex-col font-[450] justify-center relative shrink-0 text-[#616161] whitespace-nowrap">
            <p className="leading-[20px]">USD</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#ebebeb] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TotalUsd8() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="#Total (USD)">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex font-['Inter:Medium',sans-serif] gap-[4px] items-center leading-[0] not-italic pl-[6px] pr-[12px] py-[8px] relative text-[13px] text-right w-full">
          <div className="flex flex-[1_0_0] flex-col font-[550] justify-center min-h-px min-w-px relative text-[#303030]">
            <p className="leading-[20px] whitespace-pre-wrap">$11,950.52</p>
          </div>
          <div className="flex flex-col font-[450] justify-center relative shrink-0 text-[#616161] whitespace-nowrap">
            <p className="leading-[20px]">USD</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#ebebeb] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TotalUsd9() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="#Total (USD)">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex font-['Inter:Medium',sans-serif] gap-[4px] items-center leading-[0] not-italic pl-[6px] pr-[12px] py-[8px] relative text-[13px] text-right w-full">
          <div className="flex flex-[1_0_0] flex-col font-[550] justify-center min-h-px min-w-px relative text-[#303030]">
            <p className="leading-[20px] whitespace-pre-wrap">$11,441.57</p>
          </div>
          <div className="flex flex-col font-[450] justify-center relative shrink-0 text-[#616161] whitespace-nowrap">
            <p className="leading-[20px]">USD</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#ebebeb] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Column() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Column 8">
      <div className="bg-[#f1f1f1] relative shrink-0 w-full" data-name="#Total (USD)">
        <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-end p-[12px] relative w-full">
            <div className="flex flex-col font-['Inter:Medium',sans-serif] font-[550] justify-center leading-[0] not-italic relative shrink-0 text-[#616161] text-[12px] text-right whitespace-nowrap">
              <p className="leading-[16px]">Amount</p>
            </div>
            <div className="relative shrink-0 size-[16px]" data-name="#Total (USD)">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[20px] top-1/2" data-name="SortDescending">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[12.086px] left-[calc(50%-0.25px)] top-[calc(50%+0.04px)] w-[7.5px]" data-name="Icon">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 12.0859">
                    <g id="Icon">
                      <path d={svgPaths.p1385f300} fill="#CCCCCC" />
                      <path d={svgPaths.p1393efc0} fill="var(--fill-0, #4A4A4A)" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[#e3e3e3] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <TotalUsd />
      <TotalUsd1 />
      <TotalUsd2 />
      <TotalUsd3 />
      <TotalUsd4 />
      <TotalUsd5 />
      <TotalUsd6 />
      <TotalUsd7 />
      <TotalUsd8 />
      <TotalUsd9 />
    </div>
  );
}

function Table() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Table">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[137px]" data-name="Column 1">
        <div className="bg-[#f1f1f1] relative shrink-0 w-full" data-name="#Payout_Date">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[4px] items-center p-[12px] relative w-full">
              <div className="flex flex-col font-['Inter:Medium',sans-serif] font-[550] justify-center leading-[0] not-italic relative shrink-0 text-[#616161] text-[12px] whitespace-nowrap">
                <p className="leading-[16px]">Payout date</p>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#e3e3e3] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white relative shrink-0 w-full" data-name="#Payout_Date">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center pl-[12px] pr-[6px] py-[8px] relative w-full">
              <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px overflow-clip relative" data-name="#Payout Date.12">
                <p className="font-['Inter:Medium',sans-serif] font-[450] leading-[20px] not-italic relative shrink-0 text-[#005bd3] text-[13px]">May 21, 2025</p>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#ebebeb] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white relative shrink-0 w-full" data-name="#Payout_Date">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center pl-[12px] pr-[6px] py-[8px] relative w-full">
              <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px overflow-clip relative" data-name="#Payout Date.24">
                <p className="font-['Inter:Medium',sans-serif] font-[450] leading-[20px] not-italic relative shrink-0 text-[#005bd3] text-[13px]">May 14, 2025</p>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#ebebeb] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white relative shrink-0 w-full" data-name="#Payout_Date">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center pl-[12px] pr-[6px] py-[8px] relative w-full">
              <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px overflow-clip relative" data-name="#Payout Date.10">
                <p className="font-['Inter:Medium',sans-serif] font-[450] leading-[20px] not-italic relative shrink-0 text-[#005bd3] text-[13px]">May 07, 2025</p>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#ebebeb] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white relative shrink-0 w-full" data-name="#Payout_Date">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center pl-[12px] pr-[6px] py-[8px] relative w-full">
              <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px overflow-clip relative" data-name="#Payout Date.09">
                <p className="font-['Inter:Medium',sans-serif] font-[450] leading-[20px] not-italic relative shrink-0 text-[#005bd3] text-[13px]">Apr 30, 2025</p>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#ebebeb] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white relative shrink-0 w-full" data-name="#Payout_Date">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center pl-[12px] pr-[6px] py-[8px] relative w-full">
              <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px overflow-clip relative" data-name="#Payout Date.08">
                <p className="font-['Inter:Medium',sans-serif] font-[450] leading-[20px] not-italic relative shrink-0 text-[#005bd3] text-[13px]">Apr 23, 2025</p>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#ebebeb] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white relative shrink-0 w-full" data-name="#Payout_Date">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center pl-[12px] pr-[6px] py-[8px] relative w-full">
              <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px overflow-clip relative" data-name="#Payout Date.07">
                <p className="font-['Inter:Medium',sans-serif] font-[450] leading-[20px] not-italic relative shrink-0 text-[#005bd3] text-[13px]">Apr 16, 2025</p>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#ebebeb] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white relative shrink-0 w-full" data-name="#Payout_Date">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center pl-[12px] pr-[6px] py-[8px] relative w-full">
              <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px overflow-clip relative" data-name="#Payout Date.06">
                <p className="font-['Inter:Medium',sans-serif] font-[450] leading-[20px] not-italic relative shrink-0 text-[#005bd3] text-[13px]">Apr 09, 2025</p>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#ebebeb] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white relative shrink-0 w-full" data-name="#Payout_Date">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center pl-[12px] pr-[6px] py-[8px] relative w-full">
              <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px overflow-clip relative" data-name="#Payout Date.05">
                <p className="font-['Inter:Medium',sans-serif] font-[450] leading-[20px] not-italic relative shrink-0 text-[#005bd3] text-[13px]">Apr 02, 2025</p>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#ebebeb] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white relative shrink-0 w-full" data-name="#Payout_Date">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center pl-[12px] pr-[6px] py-[8px] relative w-full">
              <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px overflow-clip relative" data-name="#Payout Date.04">
                <p className="font-['Inter:Medium',sans-serif] font-[450] leading-[20px] not-italic relative shrink-0 text-[#005bd3] text-[13px]">Mar 26, 2025</p>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#ebebeb] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white relative shrink-0 w-full" data-name="#Payout_Date">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center pl-[12px] pr-[6px] py-[8px] relative w-full">
              <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px overflow-clip relative" data-name="#Payout Date.03">
                <p className="font-['Inter:Medium',sans-serif] font-[450] leading-[20px] not-italic relative shrink-0 text-[#005bd3] text-[13px]">Mar 19, 2025</p>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#ebebeb] border-b border-solid inset-0 pointer-events-none" />
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="#Payment_Provider">
        <div className="bg-[#f1f1f1] relative shrink-0 w-full" data-name="#Payment_Provider">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[4px] items-center px-[6px] py-[12px] relative w-full">
              <div className="flex flex-col font-['Inter:Medium',sans-serif] font-[550] justify-center leading-[0] not-italic relative shrink-0 text-[#616161] text-[12px] whitespace-nowrap">
                <p className="leading-[16px]">Order date</p>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#e3e3e3] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white relative shrink-0 w-full" data-name="#Payment Provider">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center px-[6px] py-[8px] relative w-full">
              <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-[450] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#303030] text-[13px]">
                <p className="leading-[20px] whitespace-pre-wrap">May 1 – May 19, 2025</p>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#ebebeb] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white relative shrink-0 w-full" data-name="#Payment Provider">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center px-[6px] py-[8px] relative w-full">
              <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-[450] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#303030] text-[13px]">
                <p className="leading-[20px] whitespace-pre-wrap">Apr 25 – Apr 30, 2025</p>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#ebebeb] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white relative shrink-0 w-full" data-name="#Payment Provider">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center px-[6px] py-[8px] relative w-full">
              <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-[450] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#303030] text-[13px]">
                <p className="leading-[20px] whitespace-pre-wrap">Apr 15 – Apr 24, 2025</p>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#ebebeb] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white relative shrink-0 w-full" data-name="#Payment Provider">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center px-[6px] py-[8px] relative w-full">
              <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-[450] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#303030] text-[13px]">
                <p className="leading-[20px] whitespace-pre-wrap">Apr 1 – Apr 12, 2025</p>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#ebebeb] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white relative shrink-0 w-full" data-name="#Payment Provider">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center px-[6px] py-[8px] relative w-full">
              <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-[450] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#303030] text-[13px]">
                <p className="leading-[20px] whitespace-pre-wrap">Mar 25 – Mar 31, 2025</p>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#ebebeb] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white relative shrink-0 w-full" data-name="#Payment Provider">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center px-[6px] py-[8px] relative w-full">
              <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-[450] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#303030] text-[13px]">
                <p className="leading-[20px] whitespace-pre-wrap">Mar 15 – Mar 24, 2025</p>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#ebebeb] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white relative shrink-0 w-full" data-name="#Payment Provider">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center px-[6px] py-[8px] relative w-full">
              <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-[450] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#303030] text-[13px]">
                <p className="leading-[20px] whitespace-pre-wrap">Mar 1 – Mar 14, 2025</p>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#ebebeb] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white relative shrink-0 w-full" data-name="#Payment Provider">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center px-[6px] py-[8px] relative w-full">
              <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-[450] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#303030] text-[13px]">
                <p className="leading-[20px] whitespace-pre-wrap">Feb 15 – Feb 29, 2025</p>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#ebebeb] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white relative shrink-0 w-full" data-name="#Payment Provider">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center px-[6px] py-[8px] relative w-full">
              <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-[450] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#303030] text-[13px]">
                <p className="leading-[20px] whitespace-pre-wrap">Feb 1 – Feb 14, 2025</p>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#ebebeb] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white relative shrink-0 w-full" data-name="#Payment Provider">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center px-[6px] py-[8px] relative w-full">
              <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-[450] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#303030] text-[13px]">
                <p className="leading-[20px] whitespace-pre-wrap">Jan 15 – Jan 31, 2025</p>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#ebebeb] border-b border-solid inset-0 pointer-events-none" />
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[144px]" data-name="#Payment_Provider">
        <div className="bg-[#f1f1f1] relative shrink-0 w-full" data-name="#Payment_Provider">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[4px] items-center px-[6px] py-[12px] relative w-full">
              <div className="flex flex-col font-['Inter:Medium',sans-serif] font-[550] justify-center leading-[0] not-italic relative shrink-0 text-[#616161] text-[12px] whitespace-nowrap">
                <p className="leading-[16px]">Bank account</p>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#e3e3e3] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white relative shrink-0 w-full" data-name="#Payment Provider">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center px-[6px] py-[8px] relative w-full">
              <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-[450] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#303030] text-[13px]">
                <p className="leading-[20px] whitespace-pre-wrap">JPMO...(7523)</p>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#ebebeb] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white relative shrink-0 w-full" data-name="#Payment Provider">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center px-[6px] py-[8px] relative w-full">
              <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-[450] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#303030] text-[13px]">
                <p className="leading-[20px] whitespace-pre-wrap">JPMO...(7523)</p>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#ebebeb] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white relative shrink-0 w-full" data-name="#Payment Provider">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center px-[6px] py-[8px] relative w-full">
              <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-[450] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#303030] text-[13px]">
                <p className="leading-[20px] whitespace-pre-wrap">JPMO...(7523)</p>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#ebebeb] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white relative shrink-0 w-full" data-name="#Payment Provider">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center px-[6px] py-[8px] relative w-full">
              <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-[450] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#303030] text-[13px]">
                <p className="leading-[20px] whitespace-pre-wrap">JPMO...(7523)</p>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#ebebeb] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white relative shrink-0 w-full" data-name="#Payment Provider">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center px-[6px] py-[8px] relative w-full">
              <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-[450] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#303030] text-[13px]">
                <p className="leading-[20px] whitespace-pre-wrap">JPMO...(7523)</p>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#ebebeb] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white relative shrink-0 w-full" data-name="#Payment Provider">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center px-[6px] py-[8px] relative w-full">
              <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-[450] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#303030] text-[13px]">
                <p className="leading-[20px] whitespace-pre-wrap">JPMO...(7523)</p>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#ebebeb] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white relative shrink-0 w-full" data-name="#Payment Provider">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center px-[6px] py-[8px] relative w-full">
              <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-[450] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#303030] text-[13px]">
                <p className="leading-[20px] whitespace-pre-wrap">JPMO...(7523)</p>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#ebebeb] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white relative shrink-0 w-full" data-name="#Payment Provider">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center px-[6px] py-[8px] relative w-full">
              <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-[450] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#303030] text-[13px]">
                <p className="leading-[20px] whitespace-pre-wrap">JPMO...(7523)</p>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#ebebeb] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white relative shrink-0 w-full" data-name="#Payment Provider">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center px-[6px] py-[8px] relative w-full">
              <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-[450] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#303030] text-[13px]">
                <p className="leading-[20px] whitespace-pre-wrap">JPMO...(7523)</p>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#ebebeb] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white relative shrink-0 w-full" data-name="#Payment Provider">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center px-[6px] py-[8px] relative w-full">
              <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-[450] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#303030] text-[13px]">
                <p className="leading-[20px] whitespace-pre-wrap">JPMO...(7523)</p>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#ebebeb] border-b border-solid inset-0 pointer-events-none" />
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[96px]" data-name="#Status">
        <div className="bg-[#f1f1f1] relative shrink-0 w-full" data-name="#Status">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[4px] items-center px-[6px] py-[12px] relative w-full">
              <div className="flex flex-col font-['Inter:Medium',sans-serif] font-[550] justify-center leading-[0] not-italic relative shrink-0 text-[#616161] text-[12px] whitespace-nowrap">
                <p className="leading-[16px]">Status</p>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#e3e3e3] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white relative shrink-0 w-full" data-name="#Status">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center px-[6px] py-[8px] relative w-full">
              <div className="bg-[#ffef9d] content-stretch flex h-[20px] items-center justify-center px-[8px] py-[2px] relative rounded-[8px] shrink-0" data-name="Badge">
                <p className="font-['Inter:Medium',sans-serif] font-[550] leading-[16px] not-italic relative shrink-0 text-[#4f4700] text-[12px]">Scheduled</p>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#ebebeb] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white relative shrink-0 w-full" data-name="#Status">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center px-[6px] py-[8px] relative w-full">
              <div className="bg-[rgba(0,0,0,0.06)] content-stretch flex h-[20px] items-center justify-center px-[8px] py-[2px] relative rounded-[8px] shrink-0" data-name="Badge">
                <p className="font-['Inter:Medium',sans-serif] font-[550] leading-[16px] not-italic relative shrink-0 text-[#616161] text-[12px]">Paid</p>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#ebebeb] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white relative shrink-0 w-full" data-name="#Status">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center px-[6px] py-[8px] relative w-full">
              <div className="bg-[rgba(0,0,0,0.06)] content-stretch flex h-[20px] items-center justify-center px-[8px] py-[2px] relative rounded-[8px] shrink-0" data-name="Badge">
                <p className="font-['Inter:Medium',sans-serif] font-[550] leading-[16px] not-italic relative shrink-0 text-[#616161] text-[12px]">Paid</p>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#ebebeb] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white relative shrink-0 w-full" data-name="#Status">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center px-[6px] py-[8px] relative w-full">
              <div className="bg-[rgba(0,0,0,0.06)] content-stretch flex h-[20px] items-center justify-center px-[8px] py-[2px] relative rounded-[8px] shrink-0" data-name="Badge">
                <p className="font-['Inter:Medium',sans-serif] font-[550] leading-[16px] not-italic relative shrink-0 text-[#616161] text-[12px]">Paid</p>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#ebebeb] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white relative shrink-0 w-full" data-name="#Status">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center px-[6px] py-[8px] relative w-full">
              <div className="bg-[rgba(0,0,0,0.06)] content-stretch flex h-[20px] items-center justify-center px-[8px] py-[2px] relative rounded-[8px] shrink-0" data-name="Badge">
                <p className="font-['Inter:Medium',sans-serif] font-[550] leading-[16px] not-italic relative shrink-0 text-[#616161] text-[12px]">Paid</p>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#ebebeb] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white relative shrink-0 w-full" data-name="#Status">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center px-[6px] py-[8px] relative w-full">
              <div className="bg-[rgba(0,0,0,0.06)] content-stretch flex h-[20px] items-center justify-center px-[8px] py-[2px] relative rounded-[8px] shrink-0" data-name="Badge">
                <p className="font-['Inter:Medium',sans-serif] font-[550] leading-[16px] not-italic relative shrink-0 text-[#616161] text-[12px]">Paid</p>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#ebebeb] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white relative shrink-0 w-full" data-name="#Status">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center px-[6px] py-[8px] relative w-full">
              <div className="bg-[rgba(0,0,0,0.06)] content-stretch flex h-[20px] items-center justify-center px-[8px] py-[2px] relative rounded-[8px] shrink-0" data-name="Badge">
                <p className="font-['Inter:Medium',sans-serif] font-[550] leading-[16px] not-italic relative shrink-0 text-[#616161] text-[12px]">Paid</p>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#ebebeb] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white relative shrink-0 w-full" data-name="#Status">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center px-[6px] py-[8px] relative w-full">
              <div className="bg-[rgba(0,0,0,0.06)] content-stretch flex h-[20px] items-center justify-center px-[8px] py-[2px] relative rounded-[8px] shrink-0" data-name="Badge">
                <p className="font-['Inter:Medium',sans-serif] font-[550] leading-[16px] not-italic relative shrink-0 text-[#616161] text-[12px]">Paid</p>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#ebebeb] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white relative shrink-0 w-full" data-name="#Status">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center px-[6px] py-[8px] relative w-full">
              <div className="bg-[rgba(0,0,0,0.06)] content-stretch flex h-[20px] items-center justify-center px-[8px] py-[2px] relative rounded-[8px] shrink-0" data-name="Badge">
                <p className="font-['Inter:Medium',sans-serif] font-[550] leading-[16px] not-italic relative shrink-0 text-[#616161] text-[12px]">Paid</p>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#ebebeb] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white relative shrink-0 w-full" data-name="#Status">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center px-[6px] py-[8px] relative w-full">
              <div className="bg-[rgba(0,0,0,0.06)] content-stretch flex h-[20px] items-center justify-center px-[8px] py-[2px] relative rounded-[8px] shrink-0" data-name="Badge">
                <p className="font-['Inter:Medium',sans-serif] font-[550] leading-[16px] not-italic relative shrink-0 text-[#616161] text-[12px]">Paid</p>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#ebebeb] border-b border-solid inset-0 pointer-events-none" />
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[139px]" data-name="Column 7">
        <div className="bg-[#f1f1f1] relative shrink-0 w-full" data-name="#Fees_(USD)">
          <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[4px] items-center justify-end px-[6px] py-[12px] relative w-full">
              <div className="flex flex-col font-['Inter:Medium',sans-serif] font-[550] justify-center leading-[0] not-italic relative shrink-0 text-[#616161] text-[12px] text-right whitespace-nowrap">
                <p className="leading-[16px]">Fees</p>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#e3e3e3] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white relative shrink-0 w-full" data-name="#Fees (USD)">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center pl-[6px] pr-[12px] py-[8px] relative w-full">
              <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-[450] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#303030] text-[13px] text-right">
                <p className="leading-[20px] whitespace-pre-wrap">-$62.52</p>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#ebebeb] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white relative shrink-0 w-full" data-name="#Fees (USD)">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center pl-[6px] pr-[12px] py-[8px] relative w-full">
              <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-[450] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#303030] text-[13px] text-right">
                <p className="leading-[20px] whitespace-pre-wrap">-$57.45</p>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#ebebeb] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white relative shrink-0 w-full" data-name="#Fees (USD)">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center pl-[6px] pr-[12px] py-[8px] relative w-full">
              <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-[450] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#303030] text-[13px] text-right">
                <p className="leading-[20px] whitespace-pre-wrap">-$49.01</p>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#ebebeb] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white relative shrink-0 w-full" data-name="#Fees (USD)">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center pl-[6px] pr-[12px] py-[8px] relative w-full">
              <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-[450] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#303030] text-[13px] text-right">
                <p className="leading-[20px] whitespace-pre-wrap">-$35.02</p>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#ebebeb] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white relative shrink-0 w-full" data-name="#Fees (USD)">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center pl-[6px] pr-[12px] py-[8px] relative w-full">
              <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-[450] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#303030] text-[13px] text-right">
                <p className="leading-[20px] whitespace-pre-wrap">-$61.08</p>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#ebebeb] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white relative shrink-0 w-full" data-name="#Fees (USD)">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center pl-[6px] pr-[12px] py-[8px] relative w-full">
              <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-[450] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#303030] text-[13px] text-right">
                <p className="leading-[20px] whitespace-pre-wrap">-$46.43</p>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#ebebeb] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white relative shrink-0 w-full" data-name="#Fees (USD)">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center pl-[6px] pr-[12px] py-[8px] relative w-full">
              <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-[450] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#303030] text-[13px] text-right">
                <p className="leading-[20px] whitespace-pre-wrap">-$75.02</p>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#ebebeb] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white relative shrink-0 w-full" data-name="#Fees (USD)">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center pl-[6px] pr-[12px] py-[8px] relative w-full">
              <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-[450] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#303030] text-[13px] text-right">
                <p className="leading-[20px] whitespace-pre-wrap">-$39.18</p>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#ebebeb] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white relative shrink-0 w-full" data-name="#Fees (USD)">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center pl-[6px] pr-[12px] py-[8px] relative w-full">
              <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-[450] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#303030] text-[13px] text-right">
                <p className="leading-[20px] whitespace-pre-wrap">-$42.03</p>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#ebebeb] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="bg-white relative shrink-0 w-full" data-name="#Fees (USD)">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center pl-[6px] pr-[12px] py-[8px] relative w-full">
              <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-[450] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#303030] text-[13px] text-right">
                <p className="leading-[20px] whitespace-pre-wrap">-$451.25</p>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#ebebeb] border-b border-solid inset-0 pointer-events-none" />
        </div>
      </div>
      <Column />
    </div>
  );
}

function Pagination() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-h-px min-w-px relative" data-name="Pagination">
      <div className="content-stretch flex items-start p-[4px] relative rounded-bl-[8px] rounded-tl-[8px] shrink-0" data-name="Previous button">
        <div className="relative shrink-0 size-[20px]" data-name="ChevronLeft">
          <div className="-translate-y-1/2 absolute flex h-[9.5px] items-center justify-center left-[6.5px] top-1/2 w-[5.5px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
            <div className="flex-none rotate-90">
              <div className="h-[5.5px] relative w-[9.5px]" data-name="Icon">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.5 5.5">
                  <path clipRule="evenodd" d={svgPaths.pc9ae070} fill="var(--fill-0, #4A4A4A)" fillRule="evenodd" id="Icon" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-start p-[4px] relative rounded-br-[8px] rounded-tr-[8px] shrink-0" data-name="Next button">
        <div className="relative shrink-0 size-[20px]" data-name="ChevronRight">
          <div className="-translate-y-1/2 absolute flex h-[9.5px] items-center justify-center left-[7.5px] top-1/2 w-[5.5px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
            <div className="-rotate-90 flex-none">
              <div className="h-[5.5px] relative w-[9.5px]" data-name="Icon">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.5 5.5">
                  <path clipRule="evenodd" d={svgPaths.pc9ae070} fill="var(--fill-0, #4A4A4A)" fillRule="evenodd" id="Icon" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function IndexTable() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shadow-[0px_1px_0px_0px_rgba(26,26,26,0.07)] shrink-0 w-full" data-name="Index table">
      <div className="bg-white relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="Index filter">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
            <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Tabs">
              <div className="content-stretch flex gap-[4px] items-start px-[4px] relative w-full">
                <div className="bg-[rgba(0,0,0,0.08)] content-stretch flex h-[28px] items-center justify-center px-[12px] py-[6px] relative rounded-[8px] shrink-0" data-name="Tab 1">
                  <div className="flex flex-col font-['Inter:Medium',sans-serif] font-[550] justify-center leading-[0] not-italic relative shrink-0 text-[#303030] text-[12px] text-center whitespace-nowrap">
                    <p className="leading-[16px]">All</p>
                  </div>
                  <Actions />
                </div>
                <div className="content-stretch flex h-[28px] items-center justify-center px-[12px] py-[6px] relative rounded-[8px] shrink-0" data-name="Tab 2">
                  <div className="flex flex-col font-['Inter:Medium',sans-serif] font-[550] justify-center leading-[0] not-italic relative shrink-0 text-[#303030] text-[12px] text-center whitespace-nowrap">
                    <p className="leading-[16px]">Today</p>
                  </div>
                </div>
                <div className="content-stretch flex h-[28px] items-center justify-center px-[12px] py-[6px] relative rounded-[8px] shrink-0" data-name="Tab 3">
                  <div className="flex flex-col font-['Inter:Medium',sans-serif] font-[550] justify-center leading-[0] not-italic relative shrink-0 text-[#303030] text-[12px] text-center whitespace-nowrap">
                    <p className="leading-[16px]">This week</p>
                  </div>
                </div>
                <div className="content-stretch flex h-[28px] items-center justify-center px-[12px] py-[6px] relative rounded-[8px] shrink-0" data-name="Tab 4">
                  <div className="flex flex-col font-['Inter:Medium',sans-serif] font-[550] justify-center leading-[0] not-italic relative shrink-0 text-[#303030] text-[12px] text-center whitespace-nowrap">
                    <p className="leading-[16px]">This month</p>
                  </div>
                </div>
                <div className="content-stretch flex h-[28px] items-center justify-center pl-[12px] pr-[8px] py-[6px] relative rounded-[8px] shrink-0" data-name="Disclosure tab">
                  <div className="flex flex-col font-['Inter:Medium',sans-serif] font-[550] justify-center leading-[0] not-italic relative shrink-0 text-[#303030] text-[12px] text-center whitespace-nowrap">
                    <p className="leading-[16px]">More views</p>
                  </div>
                  <div className="overflow-clip relative shrink-0 size-[20px]" data-name="CaretDown">
                    <div className="absolute inset-[40%_30%_35%_30%]" data-name="Vector 469 (Stroke)">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.00001 5">
                        <path clipRule="evenodd" d={svgPaths.p1d8ae500} fill="var(--fill-0, #4A4A4A)" fillRule="evenodd" id="Vector 469 (Stroke)" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Controls">
              <div className="content-stretch flex gap-[2px] items-center justify-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Cancel">
                <p className="font-['Inter:Medium',sans-serif] font-[550] leading-[16px] not-italic relative shrink-0 text-[#303030] text-[12px]">Cancel</p>
              </div>
              <div className="bg-white content-stretch flex gap-[2px] items-center justify-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Save">
                <p className="font-['Inter:Medium',sans-serif] font-[550] leading-[16px] not-italic relative shrink-0 text-[#303030] text-[12px]">Save</p>
                <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#b5b5b5,inset_-1px_0px_0px_0px_#e3e3e3,inset_1px_0px_0px_0px_#e3e3e3,inset_0px_1px_0px_0px_#e3e3e3]" />
              </div>
              <SearchFilter />
              <div className="bg-white content-stretch flex items-center justify-center px-[4px] py-[6px] relative rounded-[8px] shrink-0" data-name="Sort">
                <Icon1 />
                <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#b5b5b5,inset_-1px_0px_0px_0px_#e3e3e3,inset_1px_0px_0px_0px_#e3e3e3,inset_0px_1px_0px_0px_#e3e3e3]" />
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[#e3e3e3] border-b border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
      </div>
      <Table />
      <div className="bg-[#f7f7f7] relative shrink-0 w-full" data-name="Pagination">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center pl-[12px] pr-[8px] py-[6px] relative w-full">
            <Pagination />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_1px_0px_0px_0px_rgba(0,0,0,0.13),inset_-1px_0px_0px_0px_rgba(0,0,0,0.13),inset_0px_-1px_0px_0px_rgba(0,0,0,0.17),inset_0px_1px_0px_0px_rgba(204,204,204,0.5)]" />
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-center pb-[12px] pt-[16px] px-[16px] relative w-full">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-[650] justify-center leading-[0] not-italic relative shrink-0 text-[#303030] text-[14px] whitespace-nowrap">
            <p className="leading-[20px]">Payout transactions</p>
          </div>
          <IndexTable />
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
      <Frame14 />
      <Frame7 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] h-[1034px] items-start left-[239px] overflow-clip pb-[96px] px-[16px] top-0 w-[1041px]">
      <div className="content-stretch flex items-start justify-between py-[24px] relative shrink-0 w-full" data-name="Page">
        <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-start min-h-px min-w-px relative" data-name="Header">
          <div className="content-stretch flex items-center justify-center px-[4px] py-[6px] relative rounded-[8px] shrink-0" data-name="Breadcrumb">
            <Icon />
          </div>
          <TitleWrapper />
        </div>
        <div className="content-stretch flex gap-[8px] items-start justify-end relative shrink-0" data-name="Actions">
          <div className="bg-[#e3e3e3] content-stretch flex gap-[4px] items-center justify-center max-h-[28px] overflow-clip px-[12px] py-[6px] relative rounded-[8px] shrink-0" data-name="Secondary action">
            <p className="font-['Inter:Medium',sans-serif] font-[550] leading-[16px] not-italic relative shrink-0 text-[#303030] text-[12px]">Export</p>
          </div>
          <div className="bg-[#e3e3e3] content-stretch flex gap-[4px] items-center justify-center max-h-[28px] overflow-clip px-[12px] py-[6px] relative rounded-[8px] shrink-0" data-name="Secondary action">
            <p className="font-['Inter:Medium',sans-serif] font-[550] leading-[16px] not-italic relative shrink-0 text-[#303030] text-[12px]">Document</p>
          </div>
          <div className="bg-[#303030] content-stretch flex gap-[2px] items-center justify-center px-[12px] py-[6px] relative rounded-[8px] shrink-0" data-name="Button">
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
        </div>
      </div>
      <Content />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-[#f1f1f1] h-[782px] left-0 overflow-clip rounded-[16px] top-[56px] w-[1280px]">
      <div className="absolute bg-[#ebebeb] content-stretch flex flex-col h-[782px] items-start justify-between left-0 py-[16px] top-0" data-name="Navigation">
        <NavItems />
        <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Settings">
          <button className="content-stretch cursor-pointer flex flex-col items-start px-[12px] relative shrink-0 w-[240px]" data-name="↪️ Email">
            <Item13 />
          </button>
        </div>
      </div>
      <Frame2 />
    </div>
  );
}

export default function CurrentPayoutsHomeSingle() {
  return (
    <div className="bg-[#1a1a1a] relative size-full" data-name="Current Payouts - Home - Single">
      <div className="absolute bg-[#1a1a1a] content-stretch flex items-center left-0 min-w-[1040px] shadow-[0px_1px_0px_0px_rgba(26,26,26,0.07)] top-0 w-[1280px]" data-name="Top bar">
        <div className="bg-[#1a1a1a] content-stretch flex flex-col items-start overflow-clip px-[16px] py-[6px] relative shrink-0 w-[240px]" data-name="Logo">
          <Inner />
        </div>
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <Search />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <div className="bg-[#1a1a1a] content-stretch flex gap-[8px] h-full items-center justify-end pl-[16px] pr-[8px] relative shrink-0 w-[243px]" data-name="Right content">
            <div className="bg-[#303030] content-stretch flex items-start p-[6px] relative rounded-[8px] shrink-0" data-name="Sidekick">
              <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Sidekick">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16.617px] left-1/2 top-[calc(50%+0.31px)] w-[16px]" data-name="Icon">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16.6166">
                    <g id="Icon">
                      <path d={svgPaths.p257af280} fill="#E3E3E3" />
                      <path clipRule="evenodd" d={svgPaths.p33ced700} fill="#E3E3E3" fillRule="evenodd" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-[#303030] content-stretch flex items-start p-[6px] relative rounded-[8px] shrink-0" data-name="Secondary menu">
              <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Notification">
                <div className="absolute h-[14.5px] left-[3.08px] top-[3px] w-[13.851px]" data-name="Icon">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8505 14.5">
                    <path clipRule="evenodd" d={svgPaths.p1e684900} fill="var(--fill-0, #E3E3E3)" fillRule="evenodd" id="Icon" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-[#303030] content-stretch flex gap-[8px] items-center justify-end p-[2px] relative rounded-[8px] shrink-0" data-name="User menu">
              <Frame />
              <div className="content-stretch flex items-center overflow-clip relative rounded-[6px] shrink-0" data-name="Avatar">
                <div className="relative shrink-0 size-[28px]" data-name="portrait06">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPortrait06} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_1px_0px_0px_0px_rgba(0,0,0,0.13),inset_-1px_0px_0px_0px_rgba(0,0,0,0.13),inset_0px_-1px_0px_0px_rgba(0,0,0,0.17),inset_0px_1px_0px_0px_rgba(204,204,204,0.5)]" />
      </div>
      <Frame1 />
    </div>
  );
}