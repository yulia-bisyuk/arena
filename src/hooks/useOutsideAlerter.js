import { useEffect, useRef, useState } from 'react';

export default function useOutsideAlerter(ininialIsVisile) {
  const [isShowed, setIsShowed] = useState(ininialIsVisile);
  const ref = useRef(null);
  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setIsShowed(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });
  
  return {refForOutside: ref, isShowed, setIsShowed};
}
