type Props = {
  tag: string;
};

export default function Tag({ tag }: Readonly<Props>) {
  return <div className="bg-teal-200 px-2 rounded-2xl text-sm">{tag}</div>;
}
