import HeaderForm from "./HeaderForm";
import Link from "next/link";
import NewCardButton from "./NewCardButton";
import MainIcon from "./MainIcon";
import RouteBackButton from "../../RouteBackButton";

type Props = {
  position: "study" | "detail" | "new";
};

export default async function Header({ position }: Readonly<Props>) {
  return (
    <header className="w-full flex justify-between items-center px-4 py-4 border-b-2 static">
      {position == "detail" ? <HeaderForm /> : <MainIcon position="header" />}
      <nav className="flex w-full max-w-lg justify-between items-center">
        <Link href={"/"}>
          <h3 className="hover:text-slate-600">home</h3>
        </Link>
        <Link href={`/cards`}>
          <h3 className="hover:text-slate-600">cards</h3>
        </Link>
        <Link href={"/contact"}>
          <h3 className="hover:text-slate-600">contact</h3>
        </Link>
        {position !== "new" ? <NewCardButton /> : <RouteBackButton />}
      </nav>
    </header>
  );
}
