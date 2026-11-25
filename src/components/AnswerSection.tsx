"use client";

import { useState, type FormEvent } from "react";
import AnswerCard from "@/components/AnswerCard";

type Answer = {
  id: number;
  description: string;
  code?: string;
  votes: number;
  createdAt: string;
  isAccepted: boolean;
  author: {
    name: string;
    username: string;
    reputation: number;
  };
};

export default function AnswerSection({
  initialAnswers,
}: {
  initialAnswers: Answer[];
}) {
  const [answers, setAnswers] = useState(initialAnswers);
  const [draft, setDraft] = useState("");
  const [codeDraft, setCodeDraft] = useState("");
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const description = draft.trim();
    const code = codeDraft.trim();

    if (!description && !code) {
      setError("Write an answer or add a code snippet before posting.");
      return;
    }

    setAnswers((currentAnswers) => [
      ...currentAnswers,
      {
        id: Math.max(0, ...currentAnswers.map((answer) => answer.id)) + 1,
        description,
        code: code || undefined,
        votes: 0,
        createdAt: new Date().toISOString(),
        isAccepted: false,
        author: {
          name: "You",
          username: "@you",
          reputation: 0,
        },
      },
    ]);
    setDraft("");
    setCodeDraft("");
    setError("");
    setNotice("Answer added for this session; it won't be saved after refresh.");
  }

  return (
    <>
      <section className="px-4 py-6">
        <h2 className="mb-2 text-xl font-semibold text-gray-800">
          {answers.length} {answers.length === 1 ? "Answer" : "Answers"}
        </h2>
        {answers.length ? (
          <div>
            {answers.map((answer) => (
              <AnswerCard key={answer.id} answer={answer} />
            ))}
          </div>
        ) : (
          <p className="border-t border-gray-200 py-6 text-sm text-gray-600">
            No answers yet.
          </p>
        )}
      </section>

      <section className="px-4 pb-8">
        <h2 className="mb-4 text-xl font-semibold text-gray-800">
          Your Answer
        </h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="answer-content" className="sr-only">
            Write your answer
          </label>
          <textarea
            id="answer-content"
            value={draft}
            onChange={(event) => {
              setDraft(event.target.value);
              setError("");
              setNotice("");
            }}
            placeholder="Write your answer here..."
            rows={8}
            className="w-full resize-y rounded-md border border-gray-300 bg-white p-3 text-sm leading-6 text-gray-800 shadow-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
          />
          <p className="mt-2 text-sm text-gray-500">
            Include the details that explain your solution.
          </p>
          <label
            htmlFor="answer-code"
            className="mb-2 mt-5 block text-sm font-medium text-gray-800"
          >
            Code snippet <span className="font-normal text-gray-500">(optional)</span>
          </label>
          <textarea
            id="answer-code"
            value={codeDraft}
            onChange={(event) => {
              setCodeDraft(event.target.value);
              setError("");
              setNotice("");
            }}
            placeholder="// Write or paste code here"
            rows={7}
            spellCheck={false}
            className="w-full resize-y rounded-md border border-gray-300 bg-gray-50 p-3 font-mono text-sm leading-6 text-gray-800 shadow-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
          />
          {error && (
            <p role="alert" className="mt-3 text-sm text-red-600">
              {error}
            </p>
          )}
          {notice && (
            <p role="status" className="mt-3 text-sm text-emerald-700">
              {notice}
            </p>
          )}
          <button
            type="submit"
            disabled={!draft.trim() && !codeDraft.trim()}
            className="mt-4 rounded-md bg-sky-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-sky-800 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Post your answer
          </button>
        </form>
      </section>
    </>
  );
}
