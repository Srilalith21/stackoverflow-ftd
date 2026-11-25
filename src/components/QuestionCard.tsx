"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";

type Question = {
  index: number;
  questionTitle: string;
  description: string;
  votes: number;
  answers?: { id: number }[];
};

export default function QuestionCard({
  question,
  variant = "list",
}: {
  question: Question;
  variant?: "list" | "detail";
}) {
  const isDetail = variant === "detail";
  const [vote, setVote] = useState({ score: question.votes, selection: 0 });

  function handleVote(direction: -1 | 1) {
    setVote((currentVote) => {
      const selection = currentVote.selection === direction ? 0 : direction;

      return {
        score: currentVote.score + selection - currentVote.selection,
        selection,
      };
    });
  }

  return (
    <article
      className={`flex gap-5 border-b border-gray-200 px-4 ${
        isDetail
          ? "py-6"
          : "py-5 transition-colors hover:bg-gray-50"
      }`}
    >
      <div className="flex w-16 shrink-0 flex-col items-center gap-1 text-gray-600">
        <button
          type="button"
          aria-label="Upvote question"
          aria-pressed={vote.selection === 1}
          onClick={() => handleVote(1)}
          className={`rounded-full p-1 transition-colors hover:bg-orange-100 hover:text-orange-600 ${
            vote.selection === 1 ? "text-orange-600" : ""
          }`}
        >
          <ChevronUp aria-hidden="true" size={24} strokeWidth={2.5} />
        </button>
        <span className="text-lg font-semibold tabular-nums" aria-live="polite">
          {vote.score}
        </span>
        <span className="text-xs text-gray-500">votes</span>
        <button
          type="button"
          aria-label="Downvote question"
          aria-pressed={vote.selection === -1}
          onClick={() => handleVote(-1)}
          className={`rounded-full p-1 transition-colors hover:bg-orange-100 hover:text-orange-600 ${
            vote.selection === -1 ? "text-orange-600" : ""
          }`}
        >
          <ChevronDown aria-hidden="true" size={24} strokeWidth={2.5} />
        </button>
      </div>

      <div className="min-w-0 flex-1">
        {!isDetail && (
          <h2 className="text-lg font-medium">
            <Link
              href={`/question/${question.index}`}
              className="text-sky-700 hover:text-sky-800 hover:underline"
            >
              {question.questionTitle}
            </Link>
          </h2>
        )}
        <p
          className={
            isDetail
              ? "whitespace-pre-wrap text-base leading-7 text-gray-700"
              : "mt-2 line-clamp-2 text-sm leading-6 text-gray-600"
          }
        >
          {question.description}
        </p>
        {!isDetail && (
          <div className="mt-3 flex items-center justify-end text-sm text-gray-500">
            {question.answers && (
              <span>
                {question.answers.length}{" "}
                {question.answers.length === 1 ? "answer" : "answers"}
              </span>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
