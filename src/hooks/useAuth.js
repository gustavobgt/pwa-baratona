import { useAppState } from '../state/app-state';

export const useAuth = () => {
  const { state } = useAppState();
  const { user } = state;

  return { user };
};
