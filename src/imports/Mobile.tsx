import clsx from "clsx";
import imgLogo from "figma:asset/ea757e0580489ddf042d83e3c0317fa013bee905.png";
import svgPaths from "./svg-6v1xin4n1v";
import imgHeroImg from "figma:asset/2b712393b52808a209d0cfcec35b8e6e8c95a124.png";
import imgSticker21 from "figma:asset/ec049a69225dee025df7ab261d46aa8a815129e0.png";
import imgImage from "figma:asset/fd5bf7ea7ef9b0aa6bcc4ccb8e40e23da158b053.png";
import imgBolt1 from "figma:asset/2933e362833cfe2f9f03f6cb053e3c9bedd4e4c2.png";
import imgClock1 from "figma:asset/cc957e8d07e4558d7d1821087450c95b3978c281.png";
import imgImage1 from "figma:asset/7d516d0d280610008cc8ad70726a8dbffc1261ae.png";
import imgImage2 from "figma:asset/794f003f1a104b8ae89fa95ae11ba076c42fb6c2.png";
import imgImage3 from "figma:asset/6d012cf243f289ed3e2b59063b8127faf9e8cbb2.png";
import imgImage4 from "figma:asset/9aff84aea3bf964914971ebe0c6a511b5a943aaa.png";
import imgImage5 from "figma:asset/3a262dcad3a4e2f6f70e965937034d1b0c0fd135.png";
import imgImage6 from "figma:asset/1c24878c29c80220c62d3ea020a8e98ad6e9d001.png";
import imgImage7 from "figma:asset/046123fe38d597ae07a3dd9901a9227d1356ad2e.png";
import imgColorLong1 from "figma:asset/703f83d251720453215ba89a36acd6cda0d20deb.png";
type ImageProps = {
  additionalClassNames?: string;
};

function Image({ children, additionalClassNames = "" }: React.PropsWithChildren<ImageProps>) {
  return (
    <div className={clsx("content-stretch flex flex-col items-center justify-center relative shrink-0 w-[163.5px]", additionalClassNames)}>
      <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[16px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.35),0px_8px_30px_0px_rgba(0,0,0,0.25)] w-full" data-name="Image">
        {children}
      </div>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[12px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        {children}
      </svg>
    </div>
  );
}
type ColumnProps = {
  additionalClassNames?: string;
};

function Column({ children, additionalClassNames = "" }: React.PropsWithChildren<ColumnProps>) {
  return (
    <div className={clsx("content-stretch flex items-start justify-center relative shrink-0", additionalClassNames)}>
      <div className="code-behavior-wrapper flex relative shrink-0 size-[200px] tailwind">
        <div className="relative rounded-[16px] size-[200px]" data-name="Image">
          {children}
        </div>
      </div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper1>
      <g id="Group 7">{children}</g>
    </Wrapper1>
  );
}

function TiktokSvgrepoCom({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper1>
      <g id="tiktok_svgrepo.com">{children}</g>
    </Wrapper1>
  );
}
type HeaderTextProps = {
  text: string;
};

function HeaderText({ text }: HeaderTextProps) {
  return (
    <div className="content-stretch flex items-start pb-[8px] relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[14px] tracking-[-0.07px] whitespace-nowrap">
        <p className="leading-[1.45]">{text}</p>
      </div>
    </div>
  );
}
type ButtonTextProps = {
  text: string;
};

function ButtonText({ text }: ButtonTextProps) {
  return (
    <div className="bg-black content-stretch flex items-center justify-center px-[16px] py-[12px] relative rounded-[6px] shrink-0 w-[136px]">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[-0.06px] whitespace-nowrap">
        <p className="leading-[1.45]">{text}</p>
      </div>
    </div>
  );
}
type ContentTextProps = {
  text: string;
  additionalClassNames?: string;
};

function ContentText({ text, additionalClassNames = "" }: ContentTextProps) {
  return (
    <div className={clsx("absolute content-stretch flex items-center justify-center left-0 px-[18px] py-[10px] right-0", additionalClassNames)}>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[32px] text-center whitespace-nowrap">
        <p className="leading-[normal]">{text}</p>
      </div>
    </div>
  );
}
type Text1Props = {
  text: string;
  additionalClassNames?: string;
};

function Text1({ text, additionalClassNames = "" }: Text1Props) {
  return (
    <div className={clsx("absolute left-0 w-[130px]", additionalClassNames)}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[18px] py-[10px] relative size-full">
          <div className="flex flex-col font-['Inter:Light',sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-black text-center whitespace-nowrap">
            <p className="leading-[normal]">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
type LogoImageProps = {
  additionalClassNames?: string;
};

function LogoImage({ additionalClassNames = "" }: LogoImageProps) {
  return (
    <div className={additionalClassNames}>
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogo} />
    </div>
  );
}
type NavVectorProps = {
  additionalClassNames?: string;
};

function NavVector({ additionalClassNames = "" }: NavVectorProps) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.5 3.5">
        <path d={svgPaths.p33077f0} fill="var(--fill-0, #F0F0F0)" id="Vector" />
      </svg>
    </div>
  );
}
type NavTextProps = {
  text: string;
  additionalClassNames?: string;
};

function NavText({ text, additionalClassNames = "" }: NavTextProps) {
  return (
    <div className={clsx("bg-[#dbec62] content-stretch flex items-center justify-center px-[24px] py-[8px] relative rounded-[32px] shrink-0", additionalClassNames)}>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-none not-italic relative shrink-0 text-[#121212] text-[16px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type TextProps = {
  text: string;
  property1: any;
};

function Text({ text, property1 }: TextProps) {
  return (
    <div className="flex flex-row items-center justify-center size-full">
      <div className="content-stretch flex items-center justify-center p-[10px] relative">
        <p className={`font-["Inter:Semi_Bold",sans-serif] font-semibold leading-none not-italic relative shrink-0 text-[16px] whitespace-nowrap ${property1 === "HOVER" ? "text-[#dbec62]" : "text-[#f0f0f0]"}`}>{text}</p>
      </div>
    </div>
  );
}
type CheveronProps = {
  className?: string;
  property1?: "default" | "clicked";
};

function Cheveron({ className, property1 = "default" }: CheveronProps) {
  const isDefault = property1 === "default";
  return (
    <button className={className || "block relative size-[30px]"}>
      <div className={`absolute ${isDefault ? "inset-[32.93%_21.72%_31.72%_21.71%]" : "inset-[31.71%_21.72%_32.93%_21.71%]"}`} data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.971 10.6065">
          <path d={isDefault ? svgPaths.pcb27a00 : svgPaths.p22b19000} fill={isDefault ? "var(--fill-0, #F0F0F0)" : "var(--fill-0, #DBEC62)"} id="Vector" />
        </svg>
      </div>
    </button>
  );
}
type NavProps = {
  className?: string;
  property1?: "mobile" | "web" | "tablet";
};

function Nav({ className, property1 = "web" }: NavProps) {
  const isTabletOrMobile = ["tablet", "mobile"].includes(property1);
  const isWeb = property1 === "web";
  return (
    <div className={className || `bg-[#121212] h-[80px] min-h-[80px] relative ${property1 === "mobile" ? "w-[375px]" : property1 === "tablet" ? "w-[800px]" : "w-[1280px]"}`}>
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className={`content-stretch flex items-center min-h-[inherit] p-[10px] relative size-full ${isTabletOrMobile ? "justify-between" : "gap-[24px]"}`}>
          {isTabletOrMobile && (
            <div className="relative shrink-0 size-[54px]" data-name="hamburger-open-close">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 54">
                <g id="hamburger-open-close">
                  <path d={svgPaths.p1d83ad90} id="Vector" stroke="var(--stroke-0, #F0F0F0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                </g>
              </svg>
            </div>
          )}
          <div className="overflow-clip relative shrink-0 size-[80px]" data-name="home-button">
            <div className="absolute left-[20px] size-[40px] top-[20px]" data-name="Logo">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogo} />
            </div>
          </div>
          {isTabletOrMobile && <NavText text="Drop" additionalClassNames="w-[50px]" />}
          {isWeb && (
            <>
              <div className="content-stretch flex gap-[50px] h-[80px] items-center relative shrink-0" data-name="dropdown-nav">
                <div className="content-stretch flex items-center relative shrink-0" data-name="products">
                  <div className="relative shrink-0">
                    <Text text="PRODUCTS" property1="Default" />
                  </div>
                  <Cheveron className="block cursor-pointer overflow-clip relative shrink-0 size-[30px]" />
                </div>
                <div className="content-stretch flex items-center relative shrink-0" data-name="solutions">
                  <div className="relative shrink-0">
                    <Text text="SOLUTIONS" property1="Default" />
                  </div>
                  <Cheveron className="block cursor-pointer overflow-clip relative shrink-0 size-[30px]" />
                </div>
                <div className="content-stretch flex items-center relative shrink-0" data-name="customers">
                  <div className="relative shrink-0">
                    <Text text="CUSTOMERS" property1="Default" />
                  </div>
                  <Cheveron className="block cursor-pointer overflow-clip relative shrink-0 size-[30px]" />
                </div>
                <div className="content-stretch flex items-center relative shrink-0" data-name="collections">
                  <div className="relative shrink-0">
                    <Text text="COLLECTIONS" property1="Default" />
                  </div>
                  <Cheveron className="block cursor-pointer overflow-clip relative shrink-0 size-[30px]" />
                </div>
                <div className="relative shrink-0">
                  <Text text="NEWS" property1="Default" />
                </div>
              </div>
              <NavText text="Start Drop" />
              <div className="content-stretch flex gap-[56px] items-center justify-center p-[12px] relative rounded-[32px] shrink-0 size-[32px]" data-name="input-signup-login">
                <div aria-hidden="true" className="absolute border-[#f0f0f0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[32px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.8)]" />
                <div className="content-stretch flex items-start relative shrink-0 size-[32px]">
                  <div className="overflow-clip relative shrink-0 size-[32px]" data-name="account-avatar-head_svgrepo.com">
                    <div className="absolute inset-[15.63%_22.97%_18.44%_21.88%]" data-name="Group">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.65 21.1">
                        <g id="Group">
                          <path d={svgPaths.p2aa3c380} fill="var(--fill-0, #DBEC62)" id="Vector" />
                          <path d={svgPaths.p17cb5300} fill="var(--fill-0, #DBEC62)" id="Vector_2" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex items-center relative shrink-0">
                <div className="content-stretch flex items-center relative shrink-0">
                  <div className="overflow-clip relative shrink-0 size-[32px]" data-name="icon / cart">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                      <g id="Vector" />
                    </svg>
                    <NavVector additionalClassNames="inset-[78.91%_63.28%_10.16%_25.78%]" />
                    <NavVector additionalClassNames="inset-[78.91%_22.66%_10.16%_66.41%]" />
                    <div className="absolute inset-[10.16%_11.05%_28.91%_0.78%]" data-name="Vector (Stroke)">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.2143 19.5">
                        <path clipRule="evenodd" d={svgPaths.p38bd8280} fill="var(--fill-0, #F0F0F0)" fillRule="evenodd" id="Vector (Stroke)" />
                      </svg>
                    </div>
                    <LogoImage additionalClassNames="absolute inset-[6.25%_6.25%_56.25%_56.25%]" />
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[15.63%_21.88%_56.25%_59.38%] leading-none not-italic text-[#121212] text-[9px] whitespace-nowrap">3</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
type BannerDarkProps = {
  className?: string;
  property1?: "mobile" | "web" | "tablet";
};

function BannerDark({ className, property1 = "web" }: BannerDarkProps) {
  const isWebOrTablet = ["web", "tablet"].includes(property1);
  return (
    <div className={className || "h-[24px] relative"}>
      <div className="absolute bg-[#dbec62] inset-0 overflow-clip" data-name="topbar">
        <div className="absolute inset-[4px_23px_4px_5px]" data-name="container">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between py-[13px] relative size-full">
              {isWebOrTablet && (
                <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Social links">
                  <TiktokSvgrepoCom>
                    <path d={svgPaths.p17744900} fill="var(--fill-0, #121212)" id="Vector" />
                  </TiktokSvgrepoCom>
                  <Wrapper1>
                    <g clipPath="url(#clip0_7_1281)" id="Social link 1">
                      <path d={svgPaths.p2d595a80} fill="var(--fill-0, #121212)" id="Vector" />
                    </g>
                    <defs>
                      <clipPath id="clip0_7_1281">
                        <rect fill="white" height="12" width="12" />
                      </clipPath>
                    </defs>
                  </Wrapper1>
                  <Wrapper1>
                    <g clipPath="url(#clip0_7_1284)" id="Social link 3">
                      <path d={svgPaths.p2e899d00} fill="var(--fill-0, #121212)" id="Vector" />
                    </g>
                    <defs>
                      <clipPath id="clip0_7_1284">
                        <rect fill="white" height="12" width="12" />
                      </clipPath>
                    </defs>
                  </Wrapper1>
                  <Wrapper>
                    <path d={svgPaths.p3bedc4d8} fill="var(--fill-0, #121212)" id="Vector" />
                    <g id="Vector_2" />
                  </Wrapper>
                  <Wrapper1>
                    <g clipPath="url(#clip0_7_1270)" id="Social link 2">
                      <g id="Vector">
                        <path clipRule="evenodd" d={svgPaths.p399ea680} fill="#121212" fillRule="evenodd" />
                        <path d={svgPaths.p15a1cbf0} fill="var(--fill-0, #DBEC62)" />
                        <path d={svgPaths.pda56800} fill="var(--fill-0, #DBEC62)" />
                        <path d={svgPaths.pe8bf200} fill="var(--fill-0, #DBEC62)" />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_7_1270">
                        <rect fill="white" height="12" width="12" />
                      </clipPath>
                    </defs>
                  </Wrapper1>
                </div>
              )}
              <div className="h-[24px] overflow-clip relative shrink-0 w-[226px]" data-name="banner-text">
                <div className="absolute bottom-0 right-[-978.5px] top-0 w-[1277px]" data-name="Marquee 2" />
              </div>
              {isWebOrTablet && (
                <div className="content-stretch flex gap-[9px] items-center relative shrink-0" data-name="contact us">
                  <div className="relative shrink-0 w-[135px]" data-name="contact us">
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex items-center relative w-full">
                        <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="icon-label">
                          <div className="overflow-clip relative shrink-0 size-[12px]" data-name="badge">
                            <div className="absolute inset-[12.5%_0]" data-name="Vector">
                              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 9">
                                <path d={svgPaths.p365e4580} fill="var(--fill-0, #121212)" id="Vector" />
                              </svg>
                            </div>
                          </div>
                          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#121212] text-[10px] whitespace-nowrap">drop@thedrophaus.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0" data-name="ringring">
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex gap-[8px] items-center relative">
                        <div className="relative shrink-0 size-[15px]" data-name="badge">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.0004 15.0003">
                            <g id="badge">
                              <path d={svgPaths.p21940700} fill="var(--fill-0, #121212)" id="Vector" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Mobile() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col items-center relative size-full" data-name="Mobile">
      <BannerDark className="h-[24px] overflow-clip relative shrink-0 w-[375px]" property1="mobile" />
      <Nav className="bg-[#121212] h-[80px] min-h-[80px] relative shrink-0 w-[375px]" property1="mobile" />
      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Hero 1">
        <div className="content-stretch flex flex-col gap-[22px] h-[273px] items-start pb-[12px] pt-[20px] px-[12px] relative shrink-0 w-[188px]" data-name="Container">
          <div className="content-stretch flex flex-col gap-[8px] h-[159px] items-start relative shrink-0 w-[176px]" data-name="Text">
            <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[1.1] min-w-full not-italic relative shrink-0 text-[#121212] text-[40px] text-shadow-[0px_2px_14px_rgba(0,0,0,0.25)] tracking-[-0.8px] w-[min-content]">
              <p className="mb-0">THE</p>
              <p className="mb-0">DROP</p>
              <p>HAUS</p>
            </div>
            <div className="absolute flex h-[17.872px] items-center justify-center left-[28px] top-[114.12px] w-[135.769px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
              <div className="flex-none rotate-[-4.81deg]">
                <div className="h-[6.517px] relative w-[135.7px]">
                  <div className="absolute inset-[-212.88%_-10.35%_-243.56%_-10.35%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 163.784 36.2654">
                      <g filter="url(#filter0_dd_7_1279)" id="Line 2">
                        <path d={svgPaths.p2ac09340} stroke="var(--stroke-0, #DBEC62)" strokeWidth="1.75" />
                      </g>
                      <defs>
                        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="36.2654" id="filter0_dd_7_1279" width="163.784" x="-2.83122e-07" y="3.57628e-07">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                          <feOffset dy="1" />
                          <feGaussianBlur stdDeviation="7" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                          <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_7_1279" />
                          <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                          <feOffset dy="2" />
                          <feGaussianBlur stdDeviation="2" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0" />
                          <feBlend in2="effect1_dropShadow_7_1279" mode="normal" result="effect2_dropShadow_7_1279" />
                          <feBlend in="SourceGraphic" in2="effect2_dropShadow_7_1279" mode="normal" result="shape" />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[8px] text-[rgba(18,18,18,0.6)] tracking-[-0.04px] w-[min-content]">
              <p className="leading-[1.45]">Built to Be Unboxed.™</p>
            </div>
          </div>
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[166px]" data-name="Buttons">
            <div className="bg-[#dbec62] content-stretch flex flex-col gap-[10px] h-[50px] items-center p-[7px] relative rounded-[12px] shadow-[0px_8px_30px_0px_rgba(0,0,0,0.25),0px_4px_12px_0px_rgba(0,0,0,0.35)] shrink-0 w-[75px]" data-name="Primary button">
              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[6px] text-center tracking-[-0.03px] whitespace-nowrap">
                <p className="leading-[1.45]">{` - QUALITY - `}</p>
              </div>
              <div className="content-stretch flex items-center justify-center relative shrink-0">
                <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[12px] text-center tracking-[-0.06px] whitespace-nowrap">
                  <p className="leading-[1.45]">BRAND</p>
                </div>
                <div className="flex items-center justify-center relative shrink-0">
                  <div className="-scale-y-100 flex-none">
                    <div className="relative size-[10px]" data-name="bolt">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                        <g clipPath="url(#clip0_7_1273)" id="bolt">
                          <path d={svgPaths.p2e2b1880} fill="var(--fill-0, #050505)" id="Vector" />
                        </g>
                        <defs>
                          <clipPath id="clip0_7_1273">
                            <rect fill="white" height="10" width="10" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#121212] content-stretch flex flex-col gap-[10px] h-[50px] items-center p-[7px] relative rounded-[12px] shrink-0 w-[75px]" data-name="Secondary button">
              <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.35),0px_8px_30px_0px_rgba(0,0,0,0.25)]" />
              <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#f0f0f0] text-[12px] tracking-[-0.06px] whitespace-nowrap">
                <p className="leading-[1.45]">34K+</p>
              </div>
              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#f0f0f0] text-[6px] tracking-[-0.03px] whitespace-nowrap">
                <p className="leading-[1.45]">CLIENTS</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col h-[273px] items-center p-[24px] relative shrink-0 w-[187px]" data-name="Image">
          <div className="h-[208px] relative shrink-0 w-[221px]" data-name="hero-img">
            <div className="absolute inset-[-11.54%_-14.48%_-19.23%_-14.48%]">
              <img alt="" className="block max-w-none size-full" height="272" src={imgHeroImg} width="285" />
            </div>
          </div>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute code-behavior-wrapper flex h-[10px] left-[186px] tailwind top-[44px] w-[38px]">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[10px] justify-center leading-[0] not-italic relative text-[#121212] text-[4px] text-center tracking-[-0.08px] w-[38px]">
            <ul>
              <li className="list-disc ms-[6px] whitespace-pre-wrap">
                <span className="leading-[1.2]">DROP ALERTS</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="absolute code-behavior-wrapper flex left-[143px] size-[50px] tailwind top-[63px]">
          <div className="relative size-[50px]" data-name="sticker2 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSticker21} />
          </div>
        </div>
      </div>
      <div className="h-[40px] shrink-0 w-full" data-name="Marquee 1" />
      <div className="relative shrink-0 w-full" data-name="Feature gallery 1">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col gap-[24px] items-center justify-center px-[12px] py-[20px] relative w-full">
            <div className="bg-[#dbec62] h-[270px] overflow-clip relative rounded-[16px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.35),0px_8px_30px_0px_rgba(0,0,0,0.25)] shrink-0 w-[263px]">
              <div className="absolute code-behavior-wrapper flex left-0 size-[150px] tailwind top-[18px]">
                <div className="relative size-[150px]" data-name="box-open_svgrepo.com">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 150 150">
                    <g clipPath="url(#clip0_7_1234)" id="box-open_svgrepo.com">
                      <path d={svgPaths.p32a98300} fill="var(--fill-0, #121212)" id="Vector" />
                      <g clipPath="url(#clip1_7_1234)" id="gift-box_svgrepo.com">
                        <path d={svgPaths.p3624f1f0} fill="var(--fill-0, #121212)" id="Vector_2" />
                        <path d={svgPaths.p1c7c7280} fill="var(--fill-0, #121212)" id="Vector_3" />
                        <path d={svgPaths.p22bb1900} fill="var(--fill-0, #121212)" id="Vector_4" />
                        <path d={svgPaths.p204c0d00} fill="var(--fill-0, #121212)" id="Vector_5" />
                        <g id="Vector_6" />
                        <g id="Vector_7" />
                        <g id="Vector_8" />
                        <g id="Vector_9" />
                        <g id="Vector_10" />
                        <g id="Vector_11" />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_7_1234">
                        <rect fill="white" height="150" width="150" />
                      </clipPath>
                      <clipPath id="clip1_7_1234">
                        <rect fill="white" height="100" transform="translate(117.556 -5) rotate(82.1222)" width="100" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="absolute content-stretch flex flex-col gap-[10px] items-start justify-center leading-[0] not-italic p-[10px] right-[3px] top-[21px] whitespace-nowrap">
                <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#121212] text-[32px]">
                  <p className="leading-[normal]">2X</p>
                </div>
                <div className="flex flex-col font-['Montserrat_Subrayada:Regular',sans-serif] justify-center relative shrink-0 text-[48px] text-[transparent]">
                  <p className="leading-[normal]">KITS</p>
                </div>
              </div>
              <div className="absolute bottom-[41.5px] flex flex-col font-['Inter:Light',sans-serif] font-light h-[47px] justify-center leading-[0] left-0 not-italic right-0 text-[10px] text-black text-center translate-y-1/2">
                <p className="leading-[normal]">The Kit Partner Behind 7-Figure Product Launches.</p>
              </div>
            </div>
            <div className="h-[270px] relative shrink-0 w-[280px]" data-name="container">
              <div className="absolute bg-white h-[125px] left-0 overflow-clip rounded-[16px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.35),0px_8px_30px_0px_rgba(0,0,0,0.25)] top-0 w-[130px]" data-name="card1">
                <Text1 text="LAUNCH" additionalClassNames="h-[19.5px] top-[18px]" />
                <ContentText text="100%" additionalClassNames="bottom-[7.5px] h-[55.5px]" />
              </div>
              <div className="absolute bg-white h-[121px] left-[150px] overflow-clip rounded-[16px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.35),0px_8px_30px_0px_rgba(0,0,0,0.25)] top-0 w-[130px]" data-name="card2">
                <Text1 text="CAPTURE" additionalClassNames="h-[16px] top-[10px]" />
                <div className="absolute left-[180px] size-[60px] top-[18px]" data-name="arrow">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
                    <g id="arrow">
                      <path d={svgPaths.p18485700} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" />
                    </g>
                  </svg>
                </div>
                <ContentText text="DROPS" additionalClassNames="bottom-[21.5px] h-[29.5px]" />
              </div>
              <div className="absolute bg-[#121212] h-[125px] left-0 overflow-clip rounded-[16px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.35),0px_8px_30px_0px_rgba(0,0,0,0.25)] top-[145px] w-[280px]" data-name="card3">
                <div className="absolute bottom-[17.5px] flex flex-col font-['Inter:Light',sans-serif] font-light h-[23px] justify-center leading-[0] left-[2px] not-italic right-[2px] text-[#f0f0f0] text-[10px] text-center translate-y-1/2">
                  <p className="leading-[normal]">Brand Impact, Built to Be Unboxed.</p>
                </div>
                <div className="absolute h-[71px] left-px right-[142px] top-[18px]" data-name="accent-heading" />
                <div className="-translate-y-1/2 absolute flex flex-col font-['Montserrat_Subrayada:Regular',sans-serif] justify-center leading-[0] left-[calc(50%-67px)] not-italic text-[24px] text-[transparent] text-shadow-[0px_2px_30px_rgba(0,0,0,0.35),0px_2px_3.9px_rgba(0,0,0,0.4)] top-[38.5px] whitespace-nowrap">
                  <p className="leading-[normal]">REAL TIME</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Feature 1">
        <div className="relative shrink-0 w-full" data-name="Row 2">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[16px] items-center justify-center pb-[40px] pt-[16px] px-[12px] relative w-full">
              <Image additionalClassNames="h-[121.5px]">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage} />
              </Image>
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start justify-center min-h-px min-w-px relative" data-name="Content">
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Text">
                  <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 w-full">
                    <div className="relative shrink-0 size-[10px]">
                      <div className="absolute left-0 size-[10px] top-0" data-name="bolt 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBolt1} />
                      </div>
                    </div>
                    <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[10px] text-black tracking-[-0.2px]">
                      <p className="leading-[1.2]">Built to be unboxed</p>
                    </div>
                  </div>
                  <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-black tracking-[-0.4px] w-full">
                    <p className="text-[20px]">
                      <span className="leading-[1.2]">{`We Make the Merch. `}</span>
                      <span className="font-['Inter:Light_Italic',sans-serif] font-light italic leading-[1.2]">You Own The Moment.</span>
                    </p>
                  </div>
                  <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.6)] tracking-[-0.06px] w-full">
                    <p className="leading-[1.45]">Custom kits, PR drops, and branded unboxings... built to be remembered.</p>
                  </div>
                </div>
                <ButtonText text="START YOUR DROP" />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[16px] h-[284px] items-center justify-center pb-[16px] pt-[40px] px-[12px] relative shrink-0 w-[375px]" data-name="Row 1">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start justify-center min-h-px min-w-px relative" data-name="Content">
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Text">
              <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 w-full">
                <div className="relative shrink-0 size-[10px]">
                  <div className="absolute left-0 size-[10px] top-0" data-name="clock 1">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgClock1} />
                  </div>
                </div>
                <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[10px] text-black tracking-[-0.2px]">
                  <p className="leading-[1.2]">REAL TIME</p>
                </div>
              </div>
              <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[1.2] not-italic relative shrink-0 text-[0px] text-[20px] text-black tracking-[-0.4px] w-full whitespace-pre-wrap">
                <p className="mb-0">{`Need Ideas to `}</p>
                <p className="font-['Inter:Light_Italic',sans-serif] font-light italic">Build your brand.</p>
              </div>
              <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.6)] tracking-[-0.06px] w-full">
                <p className="leading-[1.45]">Never miss a chance to capitalize on brand movements and make informed decisions.</p>
              </div>
            </div>
            <ButtonText text="JOIN THE LIST" />
          </div>
          <Image additionalClassNames="h-[98.5px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage1} />
          </Image>
        </div>
      </div>
      <div className="bg-[#121212] relative rounded-tl-[75px] rounded-tr-[75px] shrink-0 w-full" data-name="Logos 1">
        <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-center px-[24px] py-[48px] relative w-full">
            <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f0f0f0] text-[18px] text-center tracking-[-0.09px] w-full">
              <h2 className="block leading-[1.45]">Latest News</h2>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b-[1.5px] border-solid inset-0 pointer-events-none rounded-tl-[75px] rounded-tr-[75px]" />
      </div>
      <div className="bg-[#121212] content-stretch flex gap-[48px] h-[615px] items-start justify-center px-[64px] py-[48px] relative shrink-0 w-[1281px]" data-name="news">
        <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 size-[200px]" data-name="Column 3">
          <Column additionalClassNames="h-[200px] w-full">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage2} />
          </Column>
          <Column additionalClassNames="w-full">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage3} />
          </Column>
          <Column additionalClassNames="h-[200px] w-full">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage4} />
          </Column>
        </div>
        <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 size-[200px]" data-name="Column 4">
          <Column additionalClassNames="h-[200px] w-full">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage5} />
          </Column>
          <Column additionalClassNames="h-[200px] w-full">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage6} />
          </Column>
          <Column additionalClassNames="size-[200px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage7} />
          </Column>
        </div>
      </div>
      <div className="bg-[#f0f0f0] relative shrink-0 w-full" data-name="Footer 1">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-baseline px-[24px] relative w-full">
            <div className="content-stretch flex flex-col gap-[10px] items-start justify-center py-[10px] relative shrink-0 w-full" data-name="Container">
              <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-solid border-t inset-0 pointer-events-none" />
              <div className="content-stretch flex flex-col items-start justify-center py-[10px] relative shrink-0 w-full" data-name="Content">
                <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Text">
                  <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Company">
                    <LogoImage additionalClassNames="relative shrink-0 size-[30px]" />
                    <div className="h-[19.415px] relative shrink-0 w-[118.49px]" data-name="color-long 1">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgColorLong1} />
                    </div>
                  </div>
                  <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(18,18,18,0.6)] tracking-[-0.06px] w-[170px]">
                    <p className="leading-[1.45] whitespace-pre-wrap">{`            Built to Be Unboxed.™`}</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[18px] items-start justify-center relative shrink-0 w-full" data-name="Nav">
                <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-[86px]" data-name="Column 1">
                  <HeaderText text="Shop" />
                  <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(18,18,18,0.45)] tracking-[-0.06px] w-full">
                    <p className="leading-[1.45]">Banks</p>
                  </div>
                  <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(18,18,18,0.45)] tracking-[-0.06px] w-full">
                    <p className="leading-[1.45]">Bars</p>
                  </div>
                  <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(18,18,18,0.45)] tracking-[-0.06px] w-full">
                    <p className="leading-[1.45]">Colleges</p>
                  </div>
                  <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(18,18,18,0.45)] tracking-[-0.06px] w-full">
                    <p className="leading-[1.45]">Construction</p>
                  </div>
                  <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(18,18,18,0.45)] tracking-[-0.06px] w-full">
                    <p className="leading-[1.45]">Hotels</p>
                  </div>
                  <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(18,18,18,0.45)] tracking-[-0.06px] w-full">
                    <p className="leading-[1.45]">Legal</p>
                  </div>
                  <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(18,18,18,0.45)] tracking-[-0.06px] w-full">
                    <p className="leading-[1.45]">Real Estate</p>
                  </div>
                  <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(18,18,18,0.45)] tracking-[-0.06px] w-full">
                    <p className="leading-[1.45]">Military</p>
                  </div>
                  <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(18,18,18,0.45)] tracking-[-0.06px] w-full">
                    <p className="leading-[1.45]">Religious</p>
                  </div>
                  <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(18,18,18,0.45)] tracking-[-0.06px] w-full">
                    <p className="leading-[1.45]">Resturants</p>
                  </div>
                  <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(18,18,18,0.45)] tracking-[-0.06px] w-full">
                    <p className="leading-[1.45]">Travel</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-[96px]" data-name="Column 2">
                  <HeaderText text="Services" />
                  <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(18,18,18,0.45)] tracking-[-0.06px] w-full">
                    <p className="leading-[1.45]">Build a Kit</p>
                  </div>
                  <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(18,18,18,0.45)] tracking-[-0.06px] w-full">
                    <p className="leading-[1.45]">Drop Haus Favs</p>
                  </div>
                  <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(18,18,18,0.45)] tracking-[-0.06px] w-full">
                    <p className="leading-[1.45]">Latest Drop</p>
                  </div>
                  <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(18,18,18,0.45)] tracking-[-0.06px] w-full">
                    <p className="leading-[1.45]">Trending</p>
                  </div>
                  <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(18,18,18,0.45)] tracking-[-0.06px] w-full">
                    <p className="leading-[1.45]">Quick Ship</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-[61px]" data-name="Column 3">
                  <HeaderText text="Support" />
                  <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(18,18,18,0.45)] tracking-[-0.06px] w-full">
                    <p className="leading-[1.45]">Contact</p>
                  </div>
                  <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(18,18,18,0.45)] tracking-[-0.06px] w-full">
                    <p className="leading-[1.45]">FAQ</p>
                  </div>
                  <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(18,18,18,0.45)] tracking-[-0.06px] w-full">
                    <p className="leading-[1.45]">News</p>
                  </div>
                  <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(18,18,18,0.45)] tracking-[-0.06px] w-full">
                    <p className="leading-[1.45]">Support</p>
                  </div>
                  <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(18,18,18,0.45)] tracking-[-0.06px] w-full">
                    <p className="leading-[1.45]">Legal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#121212] h-[44px] relative shrink-0 w-full" data-name="Footer 2">
        <div className="content-stretch flex gap-[18px] items-start px-[12px] py-[16px] relative size-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#f0f0f0] text-[10px] tracking-[-0.2px] whitespace-nowrap">
            <p className="leading-[1.2]">© 2025 The Drop Haus. All rights reserved.</p>
          </div>
          <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0 w-[137px]" data-name="Social links">
            <TiktokSvgrepoCom>
              <path d={svgPaths.p17744900} fill="var(--fill-0, #F0F0F0)" id="Vector" />
            </TiktokSvgrepoCom>
            <Wrapper1>
              <g clipPath="url(#clip0_7_1248)" id="Social link 1">
                <path d={svgPaths.p2d595a80} fill="var(--fill-0, #F0F0F0)" id="Vector" />
              </g>
              <defs>
                <clipPath id="clip0_7_1248">
                  <rect fill="white" height="12" width="12" />
                </clipPath>
              </defs>
            </Wrapper1>
            <Wrapper1>
              <g clipPath="url(#clip0_7_1267)" id="Social link 3">
                <path d={svgPaths.p2e899d00} fill="var(--fill-0, #F0F0F0)" id="Vector" />
              </g>
              <defs>
                <clipPath id="clip0_7_1267">
                  <rect fill="white" height="12" width="12" />
                </clipPath>
              </defs>
            </Wrapper1>
            <Wrapper>
              <path d={svgPaths.p3bedc4d8} fill="var(--fill-0, #F0F0F0)" id="Vector" />
              <g id="Vector_2" />
            </Wrapper>
            <Wrapper1>
              <g clipPath="url(#clip0_7_1220)" id="Social link 2">
                <g id="Vector">
                  <path clipRule="evenodd" d={svgPaths.p399ea680} fill="#F0F0F0" fillRule="evenodd" />
                  <path d={svgPaths.p15a1cbf0} fill="#121212" />
                  <path d={svgPaths.pda56800} fill="#121212" />
                  <path d={svgPaths.pe8bf200} fill="#121212" />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_7_1220">
                  <rect fill="white" height="12" width="12" />
                </clipPath>
              </defs>
            </Wrapper1>
          </div>
        </div>
      </div>
    </div>
  );
}