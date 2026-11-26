"use client";

import { useState, type FormEvent } from "react";

export default function AskQuestionForm() {
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const tags = String(formData.get("tags"))
      .trim()
      .split(/[,\s]+/)
      .filter(Boolean);

    if (tags.length > 5) {
      setMessage("Add no more than five tags.");
      return;
    }

    setMessage(
      "Question posting isn't connected to a backend yet. Your draft hasn't been saved.",
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm sm:p-7"
    >
      <div className="space-y-6">
        <div>
          <label
            htmlFor="question-title"
            className="block text-base font-semibold text-gray-900"
          >
            Title
          </label>
          <p className="mb-2 mt-1 text-sm text-gray-600">
            Be specific and imagine you're asking another person.
          </p>
          <input
            id="question-title"
            name="title"
            type="text"
            required
            placeholder="e.g. How do I update a state value in React?"
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
          />
        </div>

        <div>
          <label
            htmlFor="question-body"
            className="block text-base font-semibold text-gray-900"
          >
            What are the details of your problem?
          </label>
          <p className="mb-2 mt-1 text-sm text-gray-600">
            Include what you tried and what you expected to happen.
          </p>
          <textarea
            id="question-body"
            name="body"
            required
            rows={12}
            placeholder="Describe your problem..."
            className="w-full resize-y rounded-md border border-gray-300 px-3 py-2 text-sm leading-6 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
          />
        </div>

        <div>
          <label
            htmlFor="question-code"
            className="block text-base font-semibold text-gray-900"
          >
            Code snippet{" "}
            <span className="font-normal text-gray-500">(optional)</span>
          </label>
          <p className="mb-2 mt-1 text-sm text-gray-600">
            Add a minimal example if code helps explain the problem.
          </p>
          <textarea
            id="question-code"
            name="code"
            rows={7}
            spellCheck={false}
            placeholder="// Write or paste code here"
            className="w-full resize-y rounded-md border border-gray-300 bg-gray-50 p-3 font-mono text-sm leading-6 text-gray-800 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
          />
        </div>

        <div>
          <label
            htmlFor="question-tags"
            className="block text-base font-semibold text-gray-900"
          >
            Tags
          </label>
          <p className="mb-2 mt-1 text-sm text-gray-600">
            Add up to five tags to describe what your question is about.
          </p>
          <input
            id="question-tags"
            name="tags"
            type="text"
            required
            placeholder="e.g. javascript react"
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
          />
        </div>
      </div>

      {message && (
        <p role="status" className="mt-5 text-sm text-amber-700">
          {message}
        </p>
      )}

      <button
        type="submit"
        className="mt-6 rounded-md bg-sky-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-sky-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
      >
        Post your question
      </button>
    </form>
  );
}
