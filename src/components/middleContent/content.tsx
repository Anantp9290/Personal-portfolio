import SvgIcon from "../icon-component.tsx/icon";

export default function Content() {
  return (
    <>
      <div className="flex flex-1 flex-col gap-[28px]">
        {/* about section */}
        <div className="flex flex-col gap-3">
          <div className="flex gap-4 justify-between items-center">
            <p className="text-2xl font-bold text-white">About Me</p>
            <div className="flex-1 border border-[var(--bluelight)]"></div>
            {/* <p className="text-lg font-medium text-white">01</p> */}
          </div>
          <p className=" text-white text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum harum
            illo modi tempora commodi fugiat blanditiis repellat molestias
            doloremque soluta perferendis adipisci eum maiores, dolorem
            similique earum quasi quibusdam tempore officia nisi autem odit
            voluptate eligendi! Architecto quibusdam dolorum minus? Pariatur non
            delectus voluptatum, modi labore dignissimos itaque numquam quasi!
          </p>
          <p className=" text-white text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum harum
            illo modi tempora commodi fugiat blanditiis repellat molestias
            doloremque soluta perferendis adipisci eum maiores, dolorem
            similique earum quasi quibusdam tempore officia nisi autem odit
            voluptate eligendi! Architecto quibusdam dolorum minus? Pariatur non
            delectus voluptatum, modi labore dignissimos itaque numquam quasi!
          </p>
        </div>

        {/* what iam doing  */}

        <div className="flex flex-col gap-5">
          <div className="flex gap-4 justify-between items-center">
            <p className="text-2xl font-bold text-white">What i&apos;m doing</p>
            <div className="flex-1 border border-[var(--bluelight)]"></div>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
            <div className="bg-[#00283a] p-4 rounded-md flex gap-3 items-start shadow-[0px_1px_10px_#ffffff54] hover:shadow-[0px_1px_10px_#fff]">
              <SvgIcon
                name="myCustomIcon"
                width={40}
                height={40}
                fill="white"
                hoverFill="blue"
                className="cursor-pointer"
              />
              <div className="flex flex-col gap-1">
                <p className="m-0 text-white font-bold">Web Development</p>
                <p className="m-0 text-white">
                  Professional development of webapplications for iOS and
                  Android.
                </p>
              </div>
            </div>
            <div className="bg-[#00283a] p-4 rounded-md flex gap-3 items-start shadow-[0px_1px_10px_#ffffff54] hover:shadow-[0px_1px_10px_#fff]">
              <SvgIcon
                name="myCustomIcon"
                width={40}
                height={40}
                fill="white"
                hoverFill="blue"
                className="cursor-pointer"
              />
              <div className="flex flex-col gap-1">
                <p className="m-0 text-white font-bold">Web Development</p>
                <p className="m-0 text-white">
                  Professional development of webapplications for iOS and
                  Android.
                </p>
              </div>
            </div>
            <div className="bg-[#00283a] p-4 rounded-md flex gap-3 items-start shadow-[0px_1px_10px_#ffffff54] hover:shadow-[0px_1px_10px_#fff]">
              <SvgIcon
                name="myCustomIcon"
                width={40}
                height={40}
                fill="white"
                hoverFill="blue"
                className="cursor-pointer"
              />
              <div className="flex flex-col gap-1">
                <p className="m-0 text-white font-bold">Web Development</p>
                <p className="m-0 text-white">
                  Professional development of webapplications for iOS and
                  Android.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Experince section */}
        <div className="flex flex-col gap-3">
          <div className="flex gap-4 justify-between items-center">
            <p className="text-2xl font-bold text-white">Experience</p>
            <div className="flex-1 border border-[var(--bluelight)]"></div>
          </div>
          <div className="w-full">
            <div className="relative flex flex-col gap-8 before:content-[''] before:absolute before:top-2.5 lg:before:left-1/2 before:left-[100%] before:-translate-x-1/2 before:w-1 before:h-[calc(100%-10px)] before:bg-[#00283a] before:animate-line">
              <div className=" w-full mr-0 relative lg:w-1/2 lg:mr-auto  after:content-[''] after:absolute after:top-[10px] after:right-[-10px] after:w-[20px] after:h-[20px] after:bg-[#00283a] after:rounded-[50%]">
                <div className=" before:content-[''] before:absolute before:top-[10px] before:right-[-8px] before:w-[20px] before:h-[20px] before:bg-[#00283a] before:rounded-[5px] before:rotate-45 relative h-full  bg-[#00283a] rounded-xl p-6 mr-9 animate-fadeInRight">
                  <div className=" flex items-center flex-wrap justify-between  md:flex-col md:items-start md:gap-2.5">
                    <h2 className=" text-2xl leading-[38px] font-medium text-white mb-0 md:text-lg md:leading-7">
                      Meta
                    </h2>
                    <h6 className=" text-base leading-6 font-normal text-[#bdbdbd] mb-0 italic md:text-sm md:leading-6">
                      Jan - 2017 to May - 2021
                    </h6>
                  </div>
                  <p className=" text-sm leading-6 font-normal text-[#919ca1] mt-6 md:text-xs md:leading-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                    libero accusamus quisquam inventore delectus molestiae
                    commodi in, rem aliquam dignissimos, expedita sunt labore
                    possimus, nulla laborum. Maiores ratione nesciunt temporibus
                    voluptatum nisi, dicta facere? Aliquam accusamus iste sint?
                    Velit sapiente illo sit, architecto qui aliquid harum
                    tenetur quisquam saepe necessitatibus.
                  </p>
                </div>
              </div>
              <div className=" after:content-[''] after:absolute after:top-[10px] lg:after:left-[-10px] after:left-[unset] lg:after:right-[unset] after:right-[-10px] after:w-[20px] after:h-[20px] after:bg-[#00283a] after:rounded-[50%]  w-full ml-0 relative lg:w-1/2 lg:ml-auto">
                <div
                  className=" before:content-[''] before:absolute before:top-[10px] lg:before:left-[-8px] before:left-[unset] lg:before:right-[unset] before:right-[-10px] before:w-[20px] before:h-[20px] before:rounded-[5px] before:bg-[#00283a] 
                    before:rotate-45 relative h-full ml-0 lg:ml-9 lg:mr-0 mr-9  bg-[#00283a] rounded-xl p-6 md:animate-fadeInLeft animate-fadeInRight"
                >
                  <div className=" flex flex-wrap items-center justify-between mb-2.5 lg:flex-col md:items-start md:gap-2.5">
                    <h2 className=" text-2xl leading-[38px] font-medium text-white mb-0 md:text-lg md:leading-7">
                      Tesla
                    </h2>
                    <h6 className="timeline-card-subhead text-base leading-6 font-normal text-[#bdbdbd] mb-0 italic md:text-sm md:leading-6">
                      June - 2021 to Present
                    </h6>
                  </div>
                  <p className="text-sm leading-6 font-normal text-[#919ca1] mt-6 md:text-xs md:leading-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                    libero accusamus quisquam inventore delectus molestiae
                    commodi in, rem aliquam dignissimos, expedita sunt labore
                    possimus, nulla laborum. Maiores ratione nesciunt temporibus
                    voluptatum nisi, dicta facere? Aliquam accusamus iste sint?
                    Velit sapiente illo sit, architecto qui aliquid harum
                    tenetur quisquam saepe necessitatibus.
                  </p>
                </div>
              </div>
              <div className=" w-full mr-0 relative lg:w-1/2 lg:mr-auto  after:content-[''] after:absolute after:top-[10px] after:right-[-10px] after:w-[20px] after:h-[20px] after:bg-[#00283a] after:rounded-[50%]">
                <div className=" before:content-[''] before:absolute before:top-[10px] before:right-[-8px] before:w-[20px] before:h-[20px] before:bg-[#00283a] before:rounded-[5px] before:rotate-45 relative h-full  bg-[#00283a] rounded-xl p-6 mr-9 animate-fadeInRight">
                  <div className=" flex items-center flex-wrap justify-between  md:flex-col md:items-start md:gap-2.5">
                    <h2 className=" text-2xl leading-[38px] font-medium text-white mb-0 md:text-lg md:leading-7">
                      Meta
                    </h2>
                    <h6 className=" text-base leading-6 font-normal text-[#bdbdbd] mb-0 italic md:text-sm md:leading-6">
                      Jan - 2017 to May - 2021
                    </h6>
                  </div>
                  <p className=" text-sm leading-6 font-normal text-[#919ca1] mt-6 md:text-xs md:leading-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                    libero accusamus quisquam inventore delectus molestiae
                    commodi in, rem aliquam dignissimos, expedita sunt labore
                    possimus, nulla laborum. Maiores ratione nesciunt temporibus
                    voluptatum nisi, dicta facere? Aliquam accusamus iste sint?
                    Velit sapiente illo sit, architecto qui aliquid harum
                    tenetur quisquam saepe necessitatibus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
