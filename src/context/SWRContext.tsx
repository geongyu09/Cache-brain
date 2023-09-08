"use client";
import { SWRConfig } from "swr";

export default function SWRContext({
  children,
}: {
  children: React.ReactElement;
}) {
  return <SWRConfig>{children}</SWRConfig>;
}
