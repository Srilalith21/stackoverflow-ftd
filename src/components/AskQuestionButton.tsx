"use client";

import { Button } from "@/components/ui/Button";
import { useRouter } from "next/navigation";

export default function AskQuestionButton() {
  const router = useRouter();

  return (
    <Button name="Ask Question" click={() => router.push("/question/ask")} />
  );
}
