import { ReactElement } from "react";

export default function main(): ReactElement {
  return (
    <div className="flex flex-wrap md:flex-nowrap justify-between">
      <div className="w-full md:w-56">
        <select
          id="members"
          name="members"
          autoComplete="members"
          className="block w-full border border-primary py-2 px-3 bg-primary text-white shadow-sm focus:outline-none tracking-wider"
        >
          <option>All Members (76)</option>
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
      <div className="pt-6 md:pt-0 w-full md:max-w-sm text-right">
        <nav
          className="z-0 flex justify-around shadow-sm"
          aria-label="Pagination"
        >
          <button
            type="button"
            className="w-full justify-center relative inline-flex items-center border-r border-gray-600 px-3 py-2 bg-secondary text-white tracking-wider font-medium hover:bg-primary"
          >
            Overall
          </button>
          <button
            type="button"
            className="w-full justify-center relative inline-flex items-center border-r border-gray-600 px-3 py-2 bg-primary text-white tracking-wider font-medium hover:bg-primary"
          >
            Day
          </button>
          <button
            type="button"
            className="w-full justify-center relative inline-flex items-center border-r border-gray-600 px-3 py-2 bg-secondary text-white tracking-wider font-medium hover:bg-primary"
          >
            Week
          </button>
          <button
            type="button"
            className="w-full justify-center relative inline-flex items-center px-3 py-2 bg-secondary text-white tracking-wider font-medium hover:bg-primary"
          >
            Month
          </button>
        </nav>
      </div>
    </div>
  );
}
