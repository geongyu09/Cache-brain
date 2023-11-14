import { CardContent } from "@/model/card";

type Props = {
  title: string;
  content: CardContent[];
  selected: CardContent[];
  showModal: boolean;
  selectedModify: (selected: CardContent, remove?: boolean) => void;
};

export default function ContentList({
  content,
  title,
  selected,
  showModal,
  selectedModify,
}: Props) {
  const handleSelectAll = () => {
    content?.forEach((item) => {
      const isSelectedAll = content?.length === selected.length;
      selectedModify(item, true);
      selectedModify(item, isSelectedAll);
    });
  };
  const onClick = (item: CardContent, isSelected: boolean) => {
    selectedModify(item, isSelected);
  };
  return (
    <section>
      <h3 className="font-semibold my-4" onClick={() => handleSelectAll()}>
        {title}
      </h3>
      {content &&
        content.map((item) => {
          const isSelected = Boolean(selected.find((i) => i._key == item._key));
          return (
            <li
              key={item._key}
              className={`bg-slate-200 mb-5 p-5 rounded-lg ${
                isSelected ? "border-2 border-indigo-600" : ""
              }`}
              onClick={() => onClick(item, Boolean(isSelected))}
            >
              <h4 className="mb-2">{item.problem}</h4>
              {!showModal ? <p>{item.answer}</p> : null}
            </li>
          );
        })}
    </section>
  );
}
