"use client";
import useSWR from "swr";
import React from "react";
import { HomeUser } from "@/model/user";
import { GET_LOGEDIN_INFO } from "@/service/urls";

export default function Hero() {
  const {
    data: user,
    // isLoading,
    // error,
  } = useSWR<HomeUser>(GET_LOGEDIN_INFO);

  return (
    <>
      {user && (
        <section className="flex items-center gap-5 p-6">
          {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
          <img src={user.image} className="w-12 h-12 rounded-full" />
          <div>
            <h4 className="text-lg">{user.name}</h4>
            <p className="text-sm text-gray-400">{user.username}</p>
          </div>
        </section>
      )}
    </>
  );
}
