import React from "react";

type Props = {
  title: string;
  text: string;
  style?: string;
  contentMofify: (text: string) => void;
};

export default function NewCardTextarea({
  title,
  text,
  contentMofify,
  style,
}: Props) {
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const typedText = e.target.value as string;
    contentMofify(typedText);
  };
  return (
    <>
      <h3>{title}</h3>
      <textarea
        className={`w-full h-32 p-3 focus:ring-2 focus:ring-indigo-600 rounded-lg outline-none mb-4 resize-none ${style}`}
        onChange={onChange}
        value={text}
      />
    </>
  );
}
