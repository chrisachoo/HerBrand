import { useAuthContext } from './useAuthContext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const checkout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const checkUser = async () => {
    if (!user) {
      setIsLoading(true);
      navigate('/signin');
    }
  }

  return { checkUser, isLoading };
}