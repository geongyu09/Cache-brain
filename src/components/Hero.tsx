"use client";
import useSWR from "swr";
import React from "react";

export default function Hero() {
  const { data, isLoading, error } = useSWR("/api/user/loggedInUser");
  console.log(data);
  console.log(error);
  return <section>data</section>;
}
