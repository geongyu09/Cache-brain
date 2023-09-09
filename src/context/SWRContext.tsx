"use client";
import { SWRConfig } from "swr";

export default function SWRContext({
  children,
}: {
  children: React.ReactElement;
}) {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  return <SWRConfig value={{ fetcher }}>{children}</SWRConfig>;
}
