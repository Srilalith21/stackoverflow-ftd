"use client";
import { Button } from "@/components/ui/Button";
import MainLayout from "@/layout/mainLayout";
import data from "@/data/data";
import QuestionCard from "@/components/QuestionCard";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <MainLayout>
      <div className="h-40 border-b-2 border-gray-300 flex flex-col justify-center">
        <div className="flex items-center justify-between h-1/2 px-5">
          <h1 className="text-4xl font-bold ">Newest Questions</h1>
          <Button
            name="Ask Question"
            click={() => router.push("/question/ask")}
          />
        </div>
        <div className="flex items-center justify-between h-1/2 px-5">
          {/* Dynamic Value Here */}
          <p className="text-lg ">{data.length} questions</p>
          <div className="flex gap-4 border border-gray-300 rounded-lg p-2">
            <button className="border border-gray-300 px-3 rounded-lg">
              Newest
            </button>
            <button className="border border-gray-300 px-3 rounded-lg">
              Oldest
            </button>
            <button className="border border-gray-300 px-3 rounded-lg">
              Most Voted
            </button>
            <button className="border border-gray-300 px-4 rounded-lg">
              unanswered
            </button>
          </div>
        </div>
      </div>

      {/* Question List */}

      <div className="question-list w-full p-2">
        {data.map((question) => (
          <QuestionCard key={question.index} question={question} />
        ))}
      </div>
    </MainLayout>
  );
}
