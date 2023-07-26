// Import types
import { ImageField, RichTextField } from "@prismicio/client";

// Import components
import { CheckpointDefault } from "./Default";

type TCheckpointManager = {
  variant: string;
  icon: ImageField;
  body: RichTextField;
};

export const CheckpointManager = ({
  variant,
  icon,
  body,
}: TCheckpointManager) => {
  switch (variant) {
    case "default":
      return <CheckpointDefault icon={icon} body={body} />;
      break;
    default:
      console.error("Error: Checkpoint variant was not found");
      break;
  }
};
