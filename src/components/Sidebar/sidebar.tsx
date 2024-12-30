import Image from "next/image";
import Icon from "../icon-component/icon";

export default function Sidebar() {
  return (
    <>
      <div className="bg-[var(--darkblue)] max-w-[300px] w-full h-full pb-3 sticky top-0 z-20">
        <div className="max-w-full w-full flex flex-col gap-3">
          <img
            src="https://www.w3schools.com/w3images/avatar_hat.jpg"
            className="max-w-full max-h-[180px] object-cover w-full"
          />
          <p className="text-white text-center text-2xl font-medium">
            John Walks
          </p>
          <p className="text-white text-center text-lg font-normal">
            Front End Developer
          </p>
          <div className="flex gap-3 justify-center border-b border-red-100 pb-5 mx-3">
            <div className="w-[30px] h-[30px] flex justify-center items-center rounded-full bg-[var(--background)] cursor-pointer hover:-translate-y-2 transition-all duration-1000 ease-in-out">
              <Image
                src="/assets/Images/linkedin.svg"
                width={20}
                height={20}
                alt="linkdin"
              />
            </div>
            <div className="w-[30px] h-[30px] flex justify-center items-center rounded-full bg-[var(--background)] cursor-pointer hover:-translate-y-2 transition-all duration-1000 ease-in-out">
              <Image
                src="/assets/Images/github.svg"
                width={20}
                height={20}
                alt="linkdin"
              />
            </div>
            <div className="w-[30px] h-[30px] flex justify-center items-center rounded-full bg-[var(--background)] cursor-pointer hover:-translate-y-2 transition-all duration-1000 ease-in-out">
              <Image
                src="/assets/Images/codepen.svg"
                width={20}
                height={20}
                alt="linkdin"
              />
            </div>
            {/* <div className="w-[30px] h-[30px] flex justify-center items-center rounded-full bg-[var(--background)] cursor-pointer hover:-translate-y-2 transition-all duration-1000 ease-in-out">
              <Image
                src="/assets/Images/linkedin.svg"
                width={20}
                height={20}
                alt="linkdin"
              />
            </div> */}
          </div>
          <div className="flex flex-col gap-3 px-3">
            <p className="text-white text-xl font-medium text-center">
              Contact Info
            </p>
            <div className="flex gap-3 items-center">
              <div className="w-[30px] h-[30px] rounded-lg flex justify-center items-center bg-[var(--foreground)]">
                <Image
                  src="/assets/Images/location.svg"
                  width={18}
                  height={18}
                  alt="linkdin"
                />
              </div>
              {/* href="https://maps.app.goo.gl/NV3Yg3dcvMLfQc4k7" */}
              <a className="text-white text-base relative after:absolute after:-bottom-1 after:left-0  after:border-b border-white after:w-0 hover:after:w-full hover:after:transition-all hover:after:duration-1000 hover:after:ease-in-out">
                Ahmedabad, Gujarat
              </a>
            </div>
            <div className="flex gap-3 items-center">
              <div className="w-[30px] h-[30px] rounded-lg flex justify-center items-center bg-[var(--foreground)]">
                <Image
                  src="/assets/Images/phone.svg"
                  width={18}
                  height={18}
                  alt="linkdin"
                />
              </div>
              <a
                href="tel:+912525252525"
                className="text-white text-base relative after:absolute after:-bottom-1 after:left-0  after:border-b border-white after:w-0 hover:after:w-full hover:after:transition-all hover:after:duration-1000 hover:after:ease-in-out"
              >
                +91 2525252525
              </a>
            </div>

            <div className="flex gap-3 items-center">
              <div className="w-[30px] h-[30px] rounded-lg flex justify-center items-center bg-[var(--foreground)]">
                <Image
                  src="/assets/Images/mail.svg"
                  width={18}
                  height={18}
                  alt="linkdin"
                />
              </div>
              <a
                href="mailto:johnWalkes2255@gmail.com"
                className="text-white text-base relative after:absolute after:-bottom-1 after:left-0  after:border-b border-white after:w-0 hover:after:w-full hover:after:transition-all hover:after:duration-1000 hover:after:ease-in-out"
              >
                johnWalkes2255@gmail.com
              </a>
            </div>
            <div className="flex gap-3 items-center">
              <div className="w-[30px] h-[30px] rounded-lg flex justify-center items-center bg-[var(--foreground)]">
                <Image
                  src="/assets/Images/birthday.svg"
                  width={18}
                  height={18}
                  alt="linkdin"
                />
              </div>
              <p className="text-white text-base relative after:absolute after:-bottom-1 after:left-0  after:border-b border-white after:w-0 hover:after:w-full hover:after:transition-all hover:after:duration-1000 hover:after:ease-in-out cursor-default">
                30-05-2000
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
