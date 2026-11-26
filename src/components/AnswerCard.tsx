// "use client";
import Image from "next/image";
import { useState } from "react";
import { Check, ChevronDown, ChevronUp } from "lucide-react";

type Answer = {
  id: number;
  description: string;
  code?: string;
  votes: number;
  createdAt: string;
  isAccepted: boolean;
  author: {
    avatar?: string;
    name: string;
    username: string;
    reputation: number;
  };
};

export default function AnswerCard({ answer }: { answer: Answer }) {
  const [vote, setVote] = useState({ score: answer.votes, selection: 0 });

  function handleVote(direction: -1 | 1) {
    setVote((currentVote) => {
      const selection = currentVote.selection === direction ? 0 : direction;

      return {
        score: currentVote.score + selection - currentVote.selection,
        selection,
      };
    });
  }

  const answeredAt = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: "UTC",
  }).format(new Date(answer.createdAt));
  return (
    <article className="flex gap-4 border-b border-gray-200 py-6 last:border-b-0">
      <div className="flex w-12 shrink-0 flex-col items-center gap-1 text-gray-600">
        <button
          type="button"
          aria-label="Upvote answer"
          aria-pressed={vote.selection === 1}
          onClick={() => handleVote(1)}
          className={`rounded-full p-1 transition-colors hover:bg-orange-100 hover:text-orange-600 ${
            vote.selection === 1 ? "text-orange-600" : ""
          }`}
        >
          <ChevronUp aria-hidden="true" size={22} strokeWidth={2.5} />
        </button>
        <span className="text-lg font-semibold tabular-nums" aria-live="polite">
          {vote.score}
        </span>
        <span className="text-xs text-gray-500">votes</span>
        <button
          type="button"
          aria-label="Downvote answer"
          aria-pressed={vote.selection === -1}
          onClick={() => handleVote(-1)}
          className={`rounded-full p-1 transition-colors hover:bg-orange-100 hover:text-orange-600 ${
            vote.selection === -1 ? "text-orange-600" : ""
          }`}
        >
          <ChevronDown aria-hidden="true" size={22} strokeWidth={2.5} />
        </button>
        {answer.isAccepted && (
          <span
            aria-label="Accepted answer"
            title="Accepted answer"
            className="mt-2 text-emerald-600"
          >
            <Check aria-hidden="true" size={24} strokeWidth={3} />
          </span>
        )}
      </div>

      <div className="min-w-0 flex-1">
        {answer.description && (
          <p className="whitespace-pre-wrap text-sm leading-7 text-gray-700">
            {answer.description}
          </p>
        )}
        {answer.code && (
          <pre className="mt-4 overflow-x-auto rounded-md border border-gray-200 bg-gray-50 p-4 text-sm leading-6 text-gray-800">
            <code>{answer.code}</code>
          </pre>
        )}
        <div className="mt-5 flex justify-end">
          <div className="min-w-52 rounded-md bg-sky-50 px-3 py-2 text-sm">
            <p className="mb-2 text-xs text-gray-500">answered {answeredAt}</p>
            <div className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="flex size-8 items-center justify-center rounded-full bg-sky-200 font-semibold text-sky-800"
              >
                {answer.author.avatar ? (
                  <Image
                    src={answer.author.avatar}
                    alt={answer.author.name}
                    width={32}
                    height={32}
                    className="size-full rounded-full"
                  />
                ) : (
                  answer.author.name.charAt(0)
                )}
              </span>
              <div>
                <p className="font-medium text-sky-700">{answer.author.name}</p>
                <p className="text-xs text-gray-500">
                  {answer.author.username} ·{" "}
                  {answer.author.reputation.toLocaleString("en-US")} reputation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
