import { FadeLoader } from "react-spinners";

type Props = {
  style?: string;
};

export default function Loading({ style }: Props) {
  return (
    <div
      className={`w-full h-full flex  ${
        style ? style : "justify-center items-center"
      }`}
    >
      <FadeLoader color="rgb(79 70 229)" />
    </div>
  );
}
