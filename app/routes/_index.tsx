import { observable } from "@legendapp/state";
import { use$ } from "@legendapp/state/react";
import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const store = observable({
  isOpen: false,
});

export default function Index() {
  console.log("render");

  const [showButton, setShowButton] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const _isOpen = use$(store.isOpen);
  console.log(store.isOpen);

  return (
    <div>
      <button
        onClick={() => {
          setShowButton(!showButton);
        }}
      >
        Click
      </button>

      {showButton ? <Display /> : null}
    </div>
  );
}

const Display = () => {
  const isOpen = use$(store.isOpen);

  return <div>{isOpen.toString()}</div>;
};
