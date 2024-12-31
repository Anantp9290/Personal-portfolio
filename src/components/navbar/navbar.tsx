export default function Navbar() {
  return (
    <>
      <header className="mt-6">
        <div className="container mx-auto px-5 sm:px-0">
          <div className="flex justify-between items-center bg-[var(--background)] rounded p-5">
            {/* <img src="image" alt="logo" /> */}
            <p>image</p>

            <button
              type="submit"
              className="px-[20px] py-[10px] bg-[var(--foreground)] text-white max-w-fit w-fit relative overflow-hidden group transition-all duration-1000 ease-in-out hover:bg-transparent hover:text-[var(--foreground)]"
            >
              <span className="absolute top-0 left-0 w-0 h-[2px] bg-transparent transition-all duration-1000 ease-in-out group-hover:w-full group-hover:bg-[var(--darkblue)]"></span>
              <span className="absolute bottom-0 right-0 w-0 h-[2px] bg-transparent transition-all duration-1000 ease-in-out group-hover:w-full group-hover:bg-[var(--darkblue)]"></span>
              <span className="absolute bottom-0 left-0 w-[2px] h-0 bg-transparent transition-all duration-1000 ease-in-out group-hover:h-full group-hover:bg-[var(--darkblue)]"></span>
              <span className="absolute bottom-0 right-0 w-[2px] h-0 bg-transparent transition-all duration-1000 ease-in-out group-hover:h-full group-hover:bg-[var(--darkblue)]"></span>
              <span className="relative z-1">Download CV</span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
