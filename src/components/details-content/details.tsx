import Sidebar from "../Sidebar/sidebar";

export default function Details() {
  return (
    <>
      <div className="flex h-full w-full">
        <div className="container mx-auto">
          <div className="flex gap py-2">
            <Sidebar />
            <div className="text-white flex-1">conetetworks</div>
          </div>
        </div>
      </div>
    </>
  );
}
