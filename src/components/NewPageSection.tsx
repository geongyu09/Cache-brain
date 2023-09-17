import React from "react";
import NewPageForm from "./NewPageForm";
import NewCardContentForm from "./NewCardContentForm";

export default function NewPageSection() {
  return (
    <section className="w-full h-5/6 bg-slate-100 grid grid-cols-[1fr_2fr] p-7 rounded-xl">
      <NewPageForm />
      <NewCardContentForm />
    </section>
  );
}
