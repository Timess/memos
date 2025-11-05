import { useState } from "react";
import { ExternalLinkState } from "./types";

export const useExternalLink = () => {

  const [state, setState] = useState<ExternalLinkState>({
    placeholder: ""
  });

  const setPlaceholder = (placeholder: string) => {
    setState((prev) => ({ ...prev, placeholder }));
  };

  const reset = () => {
    setState({
      placeholder: ""
    });
  };

  return {
    state,
    setPlaceholder,
    reset
  };
};
