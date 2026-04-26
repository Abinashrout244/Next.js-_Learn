import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Auth Conent",
  description: "Login & singup Content",
};
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-500 to-purple-600">
      {children}
    </div>
  );
}
