import Image from "next/image";

export default function Technology() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="flex gap-3 items-center">
          <p className="m-0 text-white">Front End</p>
          <div className="flex gap-2 items-center">
            <div className="bg-[#ffffff1a] rounded-full p-2">
              <Image
                width={40}
                height={40}
                alt="image"
                src="/assets/images/react.svg"
                className="max-w-[40px] max-h-[40px] min-h-[40px] object-cover w-auto h-auto rounded-full"
              />
            </div>
            <div className="bg-[#ffffff1a] rounded-full p-2">
              <Image
                width={40}
                height={40}
                alt="image"
                src="/assets/images/angular.svg"
                className="max-w-[40px] max-h-[40px] min-h-[40px] object-cover w-auto h-auto rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
