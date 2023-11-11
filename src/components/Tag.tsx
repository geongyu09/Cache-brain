type Props = {
  tag: string;
  deleteBtn?: boolean;
};

export default function Tag({ tag, deleteBtn }: Readonly<Props>) {
  if (deleteBtn)
    return (
      <div className="bg-teal-200 px-2 rounded-2xl text-sm">
        {tag} <button>x</button>
      </div>
    );

  return <div className="bg-teal-200 px-2 rounded-2xl text-sm">{tag}</div>;
}
