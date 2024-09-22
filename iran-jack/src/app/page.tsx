import Image from "next/image";
import Link from "next/link";
import DataDashboard from '../app/dataDashboard/page';


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-black">Iran Jack Task</h1>
      <div className="w-40 h-12 flex items-center justify-center bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
        <Link href="../dataDashboard">
          Iran Jack
        </Link>
      </div>

      
    </div>
  );
}
