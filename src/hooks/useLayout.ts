import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const ROUTE_COUNT = {
  URL: 2,
  SUB_URL: 3,
};

export const useGetActiveSider = () => {
  const [activeKey, setActiveKey] = useState(['']);
  const [activeSubKey, setActiveSubKey] = useState(['']);

  const history = useHistory();

  useEffect(() => {
    const routePath = history?.location?.pathname;
    if (!!routePath) {
      const keyMenus = routePath.split('/');
      if (ROUTE_COUNT.SUB_URL === keyMenus?.length) {
        setActiveSubKey([routePath]);
        setActiveKey([keyMenus[1]]);
      } else if (ROUTE_COUNT.URL === keyMenus?.length) {
        setActiveSubKey([`/${keyMenus[1]}`]);
        setActiveKey([keyMenus[1]]);
      }
    }
  }, []);

  const onChangeActiveKey = subKeys => {
    setActiveKey(subKeys);
  };

  return { activeKey, activeSubKey, onChangeActiveKey };
};
