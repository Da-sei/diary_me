import { TbFileAnalytics } from "react-icons/tb";
import { LuFilePenLine } from "react-icons/lu";

export default function Home() {
  return (
    <div>
      <header className="my-4 text-center text-4xl">
        <h1>Diary Me</h1>
      </header>
      <div className="flex justify-center">
        <div className="flex mx-4 p-4 rounded-lg shadow-md hover:bg-gray-200">
          <LuFilePenLine className="text-2xl text-gray-500 mr-2" />
          <button>日記を書く</button>
        </div>
        <div className="flex mx-4 p-4 rounded-lg shadow-md hover:bg-gray-200">
          <TbFileAnalytics className="text-2xl text-gray-500 mr-2" />
          <button>分析をする</button>
        </div>
      </div>
    </div>
  );
}
