type Props = {
  tag: string;
  deleteBtn?: boolean;
  deleteFn?: () => void;
};

export default function Tag({ tag, deleteBtn, deleteFn }: Readonly<Props>) {
  if (deleteBtn && deleteFn)
    return (
      <div className="bg-teal-200 px-2 rounded-2xl text-sm">
        {tag} <button onClick={() => deleteFn()}>x</button>
      </div>
    );

  return <div className="bg-teal-200 px-2 rounded-2xl text-sm">{tag}</div>;
}
