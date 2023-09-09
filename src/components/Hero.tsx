"use client";
import useSWR from "swr";
import React from "react";
import { HomeUser } from "@/model/user";

export default function Hero() {
  const {
    data: user,
    isLoading,
    error,
  } = useSWR<HomeUser>("/api/user/loggedInUser");

  return (
    <>
      {user && (
        <section className="border-t-2">
          <div>{user.username}</div>
        </section>
      )}
    </>
  );
}
