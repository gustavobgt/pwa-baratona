import { useAppState } from '../state/app-state';

export const useAuth = () => {
  const { user } = useAppState();

  return { user };
};
