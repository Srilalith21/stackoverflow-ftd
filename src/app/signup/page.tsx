import MainLayout from "@/layout/mainLayout";

export default function SignUpPage() {
  return (
    <>
      <MainLayout>
        <div className="flex min-h-screen flex-col items-center justify-center gap-4">
          <h1 className="text-2xl font-bold">Sign Up</h1>
          <form className="flex w-full max-w-sm flex-col gap-4">
            <input
              type="text"
              placeholder="Username"
              className="rounded border border-gray-300 p-2"
            />
            <input
              type="email"
              placeholder="Email"
              className="rounded border border-gray-300 p-2"
            />
            <input
              type="password"
              placeholder="Password"
              className="rounded border border-gray-300 p-2"
            />
            <button
              type="submit"
              className="rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600"
            >
              Sign Up
            </button>
          </form>
        </div>
      </MainLayout>
    </>
  );
}
