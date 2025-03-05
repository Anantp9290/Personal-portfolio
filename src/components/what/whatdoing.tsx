import SvgIcon from "../icon-component.tsx/icon";

export default function Whatdoing() {
  return (
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
              Professional development of webapplications for iOS and Android.
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
              Professional development of webapplications for iOS and Android.
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
              Professional development of webapplications for iOS and Android.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
