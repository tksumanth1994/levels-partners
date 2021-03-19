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
          <option>All Members</option>
          <option>Me</option>
          <option>You</option>
          <option>Me</option>
          <option>You</option>
          <option>Me</option>
          <option>You</option>
          <option>Me</option>
          <option>You</option>
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
