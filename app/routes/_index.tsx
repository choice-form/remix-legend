import { observable } from "@legendapp/state";
import { use$ } from "@legendapp/state/react";
import type { MetaFunction } from "@remix-run/node";

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
  const isOpen = use$(store.isOpen);
  console.log(store.isOpen);

  return (
    <div>
      <button
        onClick={() => {
          store.isOpen.toggle();
        }}
      >
        Click
      </button>

      {isOpen ? <Display /> : null}
    </div>
  );
}

const Display = () => {
  const isOpen = use$(store.isOpen);

  return <div>{isOpen.toString()}</div>;
};
