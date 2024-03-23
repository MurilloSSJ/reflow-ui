import { Inter } from "next/font/google";
import { CiSearch } from "react-icons/ci";

const inter = Inter({ subsets: ["latin"], weight: "500" });

export const SearchComponent = () => {
    return (
        <div className="w-full flex gap-x-2 items-center mb-5">
            <input
                type="text"
                placeholder={`Search`}
                className={`w-1/2 p-2 rounded border border-gray-100 focus:outline-none focus:shadow-lg ${inter.className} shadow text-sm`}
            />
        </div>
    );
}