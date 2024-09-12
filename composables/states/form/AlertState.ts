export const useAlertState = () => {
  const alertState = useState("signInFormState", () => false);

  const setAlertFailed = () => {
    alertState.value = true;
  };

  const resetAlertState = () => {
    alertState.value = false;
  };

  return { alertState, setAlertFailed, resetAlertState };
};
