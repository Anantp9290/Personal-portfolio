export default function Navbar() {
  return (
    <>
      <header className="mt-6">
        <div className="container mx-auto">
          <div className="flex justify-between items-center bg-[#fff] rounded p-5">
            <img src="image" alt="logo" />

            <button
              type="submit"
              className="px-[20px] py-[10px] bg-[#1a0928] text-white max-w-fit w-fit relative overflow-hidden group transition-all duration-1000 ease-in-out hover:bg-[#fff] hover:text-[#1a0928]"
            >
              <span className="absolute top-0 left-0 w-0 h-[2px] bg-transparent transition-all duration-1000 ease-in-out group-hover:w-full group-hover:bg-blue-900"></span>
              <span className="absolute bottom-0 right-0 w-0 h-[2px] bg-transparent transition-all duration-1000 ease-in-out group-hover:w-full group-hover:bg-blue-900"></span>
              <span className="absolute bottom-0 left-0 w-[2px] h-0 bg-transparent transition-all duration-1000 ease-in-out group-hover:h-full group-hover:bg-blue-900"></span>
              <span className="absolute bottom-0 right-0 w-[2px] h-0 bg-transparent transition-all duration-1000 ease-in-out group-hover:h-full group-hover:bg-blue-900"></span>

              <span className="relative z-10">Download CV</span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
