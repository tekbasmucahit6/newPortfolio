import Header from "../components/Header/Header";
import AllRoutes from "../routes/AllRoutes";

export default function Layouts() {
    return (
      <div className="flex flex-col justify-start items-center bg-[#10172c] min-h-screen px-3 py-6 gap-12">
        <div className="max-w-[1200px] w-full">
          <Header />
        </div>
        <div className="max-w-[1200px] w-full">
          <AllRoutes />
        </div>
      </div>
    );
  }
  