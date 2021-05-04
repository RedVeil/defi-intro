import { Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/solid";
import { useState } from "react";

interface TaskProps {
  title: string;
  completed: boolean;
  children: JSX.Element;
  isRessource?: boolean;
  comingSoon?: boolean;
}

export default function Task({
  title,
  completed,
  children,
  isRessource = false,
  comingSoon = false,
}: TaskProps): JSX.Element {
  const [isShowing, setIsShowing] = useState(false);

  return comingSoon ? (
    <div className="bg-white shadow-md p-3 rounded-lg opacity-50">
      <span className="flex flex-row items-center ">
        <div
          className={`w-7 h-7 mr-4 rounded-full flex flex-col justify-center items-center border ${
            completed ? "border-green-500 bg-green-500" : "border-gray-700"
          } `}
        >
          {completed && (
            <CheckIcon className="w-6 h-6 text-white" aria-hidden="true" />
          )}
          {isRessource && <p className="font-bold">?</p>}
        </div>
        <h3 className="text-lg font-bold">{title} - Coming Soon</h3>
      </span>
    </div>
  ) : (
    <div
      className="bg-white shadow-md p-3 rounded-lg cursor-pointer expand-on-hover"
      onClick={() => setIsShowing((prevState) => !prevState)}
    >
      <span className="flex flex-row items-center">
        <div
          className={`w-7 h-7 mr-4 rounded-full flex flex-col justify-center items-center border ${
            completed ? "border-green-500 bg-green-500" : "border-gray-700"
          } `}
        >
          {completed && (
            <CheckIcon className="w-6 h-6 text-white" aria-hidden="true" />
          )}
          {isRessource && <p className="font-bold">?</p>}
        </div>
        <h3 className="text-lg font-bold">{title}</h3>
      </span>
      <Transition
        show={isShowing}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className="w-full mt-2 ml-5 px-6"
      >
        {children}
      </Transition>
    </div>
  );
}
