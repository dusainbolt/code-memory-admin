import { useEffect, useState } from 'react';
import { SearchTagInput } from '../models/TagModel';
import { getTagListSliceStart } from '../redux/slices/tagSlice';

export const useSearchTagList = (
  dispatch: any
): {
  paramsSearch: SearchTagInput;
  handleSearch: any;
  // handleResetSearch: any;
  // handleChangePage: any;
  // handleChangeTable: any;
  getPageIndexNumber: any;
  // handleGetListCategory: any;
} => {
  const [paramsSearch, setParamsSearch] = useState<SearchTagInput>({
    key: '',
    status: [],
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
    console.log('TAGGGGGGGGGGGG => ', values);
  };

  const getPageIndexNumber = () => {
    return paramsSearch.offset * paramsSearch.limit;
  };

  return { paramsSearch, handleSearch, getPageIndexNumber };
};
