"use client";

type ButtonType = {
  name: string;
  click: () => void;
};

export function Button({ name, click }: ButtonType) {
  return (
    <button
      onClick={click}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    >
      {name}
    </button>
  );
}
