import { createPortal } from "react-dom";
import SearchSection from "./SearchSection";

type Props = {
  focus: boolean;
  goBack: () => void;
};

export default function CreateSearchSection({
  focus,
  goBack,
}: Readonly<Props>) {
  return (
    <>
      {focus
        ? createPortal(
            <SearchSection goBack={goBack} />,
            document.querySelector("body") as Element
          )
        : null}
    </>
  );
}
