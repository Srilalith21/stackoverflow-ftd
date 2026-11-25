import { notFound } from "next/navigation";
import MainLayout from "@/layout/mainLayout";
import data from "@/data/data";
import QuestionCard from "@/components/QuestionCard";
import AnswerSection from "@/components/AnswerSection";
import AskQuestionButton from "@/components/AskQuestionButton";

export default async function QuestionPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const question = data.find((item) => item.index === Number(id));

  if (!question) {
    notFound();
  }

  return (
    <MainLayout>
      <div className="question-detail w-full p-2">
        <header className="flex flex-col gap-4 border-b border-gray-300 px-4 py-5 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-2xl leading-tight font-medium text-gray-900 md:text-3xl">
            {question.questionTitle}
          </h1>
          <AskQuestionButton />
        </header>
        <QuestionCard
          key={question.index}
          question={question}
          variant="detail"
        />
        <AnswerSection initialAnswers={question.answers ?? []} />
      </div>
    </MainLayout>
  );
}
