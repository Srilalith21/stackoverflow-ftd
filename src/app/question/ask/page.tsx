import MainLayout from "@/layout/mainLayout";
import AskQuestionForm from "@/components/AskQuestionForm";

export default function AskQuestionPage() {
  return (
    <MainLayout>
      <div className="mx-auto w-full max-w-4xl px-5 py-8">
        <header className="mb-6">
          <h1 className="text-3xl font-semibold text-gray-900">
            Ask a public question
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Share a clear, focused question with the community.
          </p>
        </header>

        <aside className="mb-6 rounded-lg border border-sky-200 bg-sky-50 p-5">
          <h2 className="font-semibold text-gray-900">
            Writing a good question
          </h2>
          <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-gray-700">
            <li>Summarize the problem with a specific title.</li>
            <li>Include the details someone needs to reproduce it.</li>
            <li>Add tags that describe the technologies involved.</li>
          </ul>
        </aside>

        <AskQuestionForm />
      </div>
    </MainLayout>
  );
}
