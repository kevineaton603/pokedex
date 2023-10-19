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
          ? "bg-cyan-500 text-black"
          : "bg-cyan-600"
      } py-1 px-2 text-white transition-all hover:bg-cyan-400`}
      onClick={() => onClick(generation)}
    >
      {generation.replace("-", " ").toLocaleUpperCase()}
    </button>
  );
};

export default GenerationButton;
