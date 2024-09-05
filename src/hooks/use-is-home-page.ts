import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export const useIsHomePage = (): boolean => {
  const pathname = usePathname();
  const [isHomePage, setIsHomePage] = useState(false);

  useEffect(() => {
    setIsHomePage(pathname === '/');
  }, [pathname]);

  return isHomePage;
};
