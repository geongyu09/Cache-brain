import React from "react";
import StyledButton from "./ui/StyledButton";
import Link from "next/link";

type Props = {
  cardId: string;
};

export default function EditButton({ cardId }: Readonly<Props>) {
  return (
    <Link href={`/edit/${cardId}`}>
      <StyledButton text="Edit" style="w-full bg-indigo-600" />
    </Link>
  );
}
