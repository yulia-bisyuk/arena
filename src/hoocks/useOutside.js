import { useEffect, useRef, useState } from 'react';

export default function useOutside(ininialIsVisile) {
  const [isVisile, setIsVisile] = useState(ininialIsVisile);
  const ref = useRef();
  const handleClick = e => {
    if (ref.current && !ref.current.contains(e.target)) {
      setIsVisile(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick, true);
    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  });
}
