import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const LoadingToRedirect = () => {
  const [count, setCount] = useState(5);
  let history = useHistory();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevState) => prevState - 1);
    }, 1000);
    // redirect once count is equal to 0
    count === 0 && history.push('/');
    // Limpa quando o componente é desmontado
    return () => clearInterval(interval);
  }, [count, history]);

  return (
    <div className="container p-5 text-center">
      <p>Redirecionando você em {count} segundos</p>
    </div>
  );
};

export default LoadingToRedirect;
