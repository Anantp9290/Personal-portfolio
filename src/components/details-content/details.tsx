import Sidebar from "../Sidebar/sidebar";

export default function Details() {
  return (
    <>
      <div className="flex h-full w-full">
        <div className="container mx-auto">
          <div className="flex gap-5 py-2">
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}
