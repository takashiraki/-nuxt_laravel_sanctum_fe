export const useSignInFormState = () => {
  const signInFormState = useState("signInFormState", () => false);

  const setSignInFailed = () => {
    signInFormState.value = true;
  };

  const resetSignInFormState = () => {
    signInFormState.value = false;
  };

  return { signInFormState, setSignInFailed, resetSignInFormState };
};
