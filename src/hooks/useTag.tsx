import { SearchTagInput } from '../models/TagModel';

export const useSearchTagList = () => {
  const params: SearchTagInput = { key: '', status: [] };
  const handleSearch = (values: SearchTagInput) => {
    console.log('TAGGGGGGGGGGGG => ', values);
  };
  return { params, handleSearch };
};
