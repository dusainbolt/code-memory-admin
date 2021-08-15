import { useCallback, useEffect, useState } from 'react';
import { SearchTagInput, TagStatus } from '../models/TagModel';
import { getTagListSliceStart } from '../redux/slices/tagSlice';
import { getOrderType } from '../services/utils';

export const useSearchTagList = (
  dispatch: any
): {
  paramsSearch: SearchTagInput;
  handleSearch: any;
  // handleResetSearch: any;
  handleChangePage: any;
  handleSortByParams: any;
  getPageIndexNumber: any;
  // handleGetListCategory: any;
} => {
  const [paramsSearch, setParamsSearch] = useState<SearchTagInput>({
    key: '',
    status: [TagStatus.ACTIVE, TagStatus.HIDE],
    limit: 10,
    offset: 0,
  });

  const handleGetListCategory = () => {
    dispatch(getTagListSliceStart({ input: paramsSearch }));
  };

  useEffect(() => {
    handleGetListCategory();
  }, [paramsSearch]);

  const handleSearch = (values: SearchTagInput) => {
    console.log(paramsSearch);
    setParamsSearch({ ...paramsSearch, key: values.key.trim(), status: values.status });
  };

  const handleChangePage = (page: number, pageSize: number) => {
    setParamsSearch({ ...paramsSearch, offset: page - 1, limit: pageSize });
  };

  const handleSortByParams = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    setParamsSearch({ ...paramsSearch, orderBy: field, sortBy: getOrderType(order) });
  };

  const getPageIndexNumber = () => {
    return paramsSearch.offset * paramsSearch.limit;
  };

  return { paramsSearch, handleSearch, getPageIndexNumber, handleChangePage, handleSortByParams };
};
