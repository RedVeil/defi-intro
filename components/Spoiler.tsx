import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

interface SpoilerProps {
  title: string;
  children: JSX.Element;
  color?: string;
}

export default function Spoiler({
  title,
  children,
  color = "",
}: SpoilerProps): JSX.Element {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex flex-row items-center w-11/12 px-4 py-1 my-2 rounded-md justify-between text-pink-700 bg-pink-100 hover:bg-pink-200">
            <p>{title}</p>
            <ChevronDownIcon
              className={`w-4 h-4 ${open ? "transform rotate-180" : ""}`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="w-11/12 mt-2 px-4">
            {children}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
