import React, { ReactElement } from "react";
import Filters from "../components/Filters";
import Widget from "../components/Widget";
import { totalUsers } from "../data";

export default function main(): ReactElement {
  const [isAbout, setIsAbout] = React.useState(true);
  const showAbout = () => {
    setIsAbout(true);
  };
  const hideAbout = () => {
    setIsAbout(false);
  };

  return (
    <div>
      <nav className="bg-secondary shadow border-b-2 border-primary">
        <div className="max-w-7xl mx-auto px-4 px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center h-full py-4">
              <div className="flex-shrink-0 pr-4">
                <img
                  className="h-auto w-24"
                  src="../static/equinox.png"
                  alt="Equinox"
                />
              </div>
              <div className="flex items-center flex-shrink-0 pl-4 border-l border-white h-full">
                <img
                  className="h-auto w-24"
                  src="../static/logo.svg"
                  alt="Levels"
                />
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <button
                  onClick={showAbout}
                  className="bg-primary p-1 rounded-full hover:text-white focus:outline-none"
                >
                  <span className="sr-only">About</span>
                  <svg
                    className="h-6 w-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
                <div className="ml-4 relative">
                  <a
                    href="https://github.com/tksumanth1994/levels-partners"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="h-auto w-8"
                      src="../static/github.png"
                      alt="Github"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="min-h-screen bg-pattern bg-cover">
        <div className="max-w-7xl mx-auto pt-6 lg:pt-8 px-6 lg:px-8">
          <Filters totalUsers={totalUsers} />
        </div>
        <div className="max-w-7xl mx-auto py-6 lg:py-8 px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
            <Widget
              span={1}
              title={"Average Metabolic Score"}
              chartType={"progressBar"}
            />
            <Widget
              span={3}
              title={"Distribution of Users by Metabolic Scores"}
              chartType={"histogram"}
            />
            <Widget
              span={4}
              title={"Hourly Average Metabolic Score"}
              chartType={"line"}
              height={96}
            />
            <Widget
              span={4}
              title={"Hourly Zone Distribution"}
              chartType={"bar"}
              height={96}
            />
          </div>
        </div>
      </main>

      {isAbout && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-secondary opacity-75"></div>
            </div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div
              className="inline-block align-bottom bg-white text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-primary-100 sm:mx-0 sm:h-10 sm:w-10">
                    <svg
                      className="h-6 w-6 text-primary"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-lg leading-6 font-bold text-primary"
                      id="modal-headline"
                    >
                      Levels Partner Dashboard
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Levels Partner Dashboard gives you a higher level of
                        control and overall visibility to all your members&apos;
                        stats & progress, making it easier to monitor all your
                        members connected with the program.
                      </p>
                      <p className="text-sm text-gray-500 mt-2">
                        You can can track trends over time, filter through
                        specific data & monitor all of the members. The data is
                        updated throughout the day, thereby providing a
                        real-time update.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  onClick={hideAbout}
                  type="button"
                  className="w-full inline-flex justify-center border border-transparent shadow-sm px-4 py-2 bg-primary text-base font-bold uppercase text-white hover:bg-primary-100 hover:text-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white sm:ml-3 sm:w-auto sm:text-sm tracking-widest"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
