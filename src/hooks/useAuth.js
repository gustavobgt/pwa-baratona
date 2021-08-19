import { useAppState } from '../state/app-state';

export const useAuth = () => {
  const { user, saveUser } = useAppState();

  return { user, saveUser };
};
