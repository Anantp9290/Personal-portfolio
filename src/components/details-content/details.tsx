import Content from "../middleContent/content";
import Sidebar from "../Sidebar/sidebar";

export default function Details() {
  return (
    <>
      <div className="flex h-full w-full">
        <div className="container mx-auto px-5 sm:px-0">
          <div className="flex gap-5 py-2 flex-col md:flex-row">
            <Sidebar />
            <Content />
          </div>
        </div>
      </div>
    </>
  );
}
