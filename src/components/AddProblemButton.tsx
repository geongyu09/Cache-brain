import StyledButton from "./ui/StyledButton";

type Props = {
  isLoading: boolean;
  isDone: boolean;
  isOkToAdd: boolean;
};

export default function AddProblemButton({
  isLoading,
  isDone,
  isOkToAdd,
}: Readonly<Props>) {
  const disabled = Boolean(isLoading || isDone || !isOkToAdd);
  return (
    <StyledButton
      text="add problem"
      disabled={disabled}
      style={`${
        disabled
          ? "bg-gray-600 hover:opacity-100 hover:bg-gray-600 cursor-not-allowed"
          : ""
      }`}
    />
  );
}
