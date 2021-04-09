import { ReactElement, useState } from "react";

interface Props {
  totalUsers: number;
}

export default function main({ totalUsers }: Props): ReactElement {
  const [filterTime, setFilterTime] = useState("day");
  const onSetFilterTime = (time: string) => {
    setFilterTime(time);
  };
  return (
    <div className="flex flex-wrap md:flex-nowrap justify-between">
      <div className="w-full md:w-56">
        <select
          id="members"
          name="members"
          autoComplete="members"
          className="block w-full border border-primary py-2 px-3 bg-primary text-white shadow-sm focus:outline-none tracking-wider"
        >
          <option>All Members ({totalUsers})</option>
          <option>Andrew Conner</option>
          <option>Ben Grynol</option>
          <option>Brendan</option>
          <option>Casey Means</option>
          <option>Dom</option>
          <option>David Flinner</option>
          <option>Gabriel Brady</option>
          <option>Hao L</option>
          <option>Jeremy Phelps</option>
          <option>Jhon Cruz</option>
          <option>Josh Clemente</option>
          <option>Josh Mohrer</option>
          <option>Laurie</option>
          <option>Mercy Clemante</option>
          <option>Michael DiDonato</option>
          <option>Michael Mizrahi</option>
          <option>Mike Haney</option>
          <option>Murillo Nicacio</option>
          <option>Sam Corcos</option>
          <option>Stacie</option>
          <option>Tom Griffin</option>
          <option>Xinlu Huang</option>
          <option>Krishna Sumanth</option>
        </select>
      </div>
      <div className="pt-6 md:pt-0 w-full flex justify-end">
        <div className="hidden md:flex mr-4 items-center">
          <span className="flex justify-start px-3 py-2 text-xs rounded-full bg-secondary text-white font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            8th April, 2021
          </span>
        </div>
        <nav
          className="z-0 flex justify-around shadow-sm w-full md:w-auto"
          aria-label="Pagination"
        >
          <button
            type="button"
            onClick={() => onSetFilterTime("overall")}
            className={`w-full justify-center relative inline-flex items-center border-r border-gray-600 px-3 py-2 text-white tracking-wider font-medium hover:bg-primary ${
              filterTime === "overall" ? " bg-primary" : " bg-secondary"
            }`}
          >
            Overall
          </button>
          <button
            type="button"
            onClick={() => onSetFilterTime("day")}
            className={`w-full justify-center relative inline-flex items-center border-r border-gray-600 px-3 py-2 text-white tracking-wider font-medium hover:bg-primary ${
              filterTime === "day" ? " bg-primary" : " bg-secondary"
            }`}
          >
            Day
          </button>
          <button
            type="button"
            onClick={() => onSetFilterTime("week")}
            className={`w-full justify-center relative inline-flex items-center border-r border-gray-600 px-3 py-2 text-white tracking-wider font-medium hover:bg-primary ${
              filterTime === "week" ? " bg-primary" : " bg-secondary"
            }`}
          >
            Week
          </button>
          <button
            type="button"
            onClick={() => onSetFilterTime("month")}
            className={`w-full justify-center relative inline-flex items-center border-r border-gray-600 px-3 py-2 text-white tracking-wider font-medium hover:bg-primary ${
              filterTime === "month" ? " bg-primary" : " bg-secondary"
            }`}
          >
            Month
          </button>
        </nav>
      </div>
    </div>
  );
}
