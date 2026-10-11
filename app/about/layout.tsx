import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Method",
  description:
    "How Miami Digital-First Lab works: a three-phase model and an annual cycle that takes partner challenges from scoping to delivery to handoff.",
  alternates: { canonical: "/about" },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
