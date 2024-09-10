export const useButtonLoadingState = () => {
  const buttonLoadingState = useState("buttonLoadingState", () => false);

  const setButtonLoading = () => {
    buttonLoadingState.value = true;
  };

  const resetButtonLoadingState = () => {
    buttonLoadingState.value = false;
  };

  return { buttonLoadingState, setButtonLoading, resetButtonLoadingState };
};
