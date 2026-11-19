"use client";
import { Button } from "@/components/ui/Button";
import MainLayout from "@/layout/mainLayout";

const data = [
  {
    name: "Question 1",
    description: "This is the description for question 1.",
  },
  {
    name: "Question 2",
    description: "This is the description for question 2.",
  },
  {
    name: "Question 3",
    description: "This is the description for question 3.",
  },
];

export default function Home() {
  return (
    <MainLayout>
      <div className="h-[10rem] border-b-2 border-gray-300 flex flex-col justify-center">
        <div className="flex items-center justify-between items-center h-1/2 px-5">
          <h1 className="text-4xl font-bold ">Newest Questions</h1>
          <Button
            name="Ask Question"
            click={() => console.log("Button clicked")}
          />
        </div>
        <div className="flex items-center justify-between items-center h-1/2 px-5">
          {/* Dynamic Value Here */}
          <p className="text-lg ">{data.length} questions</p>
          <div className="flex gap-4 border-1 border-gray-300 rounded-lg p-2">
            <button className="border-1 border-gray-300 px-3 rounded-lg" >
              Newest
            </button>
            <button className="border-1 border-gray-300 px-3 rounded-lg">
              Oldest
            </button>
            <button className="border-1 border-gray-300 px-3 rounded-lg">
              Most Voted
            </button>
            <button className="border-1 border-gray-300 px-4 rounded-lg">
              unanswered
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
