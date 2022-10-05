import { GenerationNumeral } from "../../../utils";

type GenerationButtonProps = {
  generation: GenerationNumeral;
  onClick: (generation: GenerationNumeral) => void;
  selectedGeneration: GenerationNumeral;
};

const GenerationButton: React.FC<GenerationButtonProps> = ({
  onClick,
  generation,
  selectedGeneration,
}) => {
  return (
    <button
      className={`box-border rounded-lg ${
        selectedGeneration === generation
          ? "bg-stone-200 text-black"
          : "bg-stone-800"
      } py-1 px-2 text-white hover:bg-stone-200 hover:text-black`}
      onClick={() => onClick(generation)}
    >
      {generation.replace("-", " ").toLocaleUpperCase()}
    </button>
  );
};

export default GenerationButton;
