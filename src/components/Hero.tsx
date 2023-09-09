"use client";
import useSWR from "swr";
import React from "react";
import { HomeUser } from "@/model/user";

export default function Hero() {
  const { data, isLoading, error } = useSWR<HomeUser>("/api/user/loggedInUser");

  return <section></section>;
}
