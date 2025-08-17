import About from "../about/about";
import Experience from "../Experience/experience";
import Technology from "../technology/technology";
import Whatdoing from "../what/whatdoing";

export default function Content() {
  return (
    <>
      <div className="flex flex-1 flex-col gap-[28px]">
        {/* about section */}
        <About />
        {/* what iam doing  */}
        <Whatdoing />
        {/* Experince section */}
        <Experience />/
        {/* technology Section */}
        <Technology />
      </div>
    </>
  );
}
