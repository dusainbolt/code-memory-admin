import { SeoHome } from './../models/SeoHomeModel';
import { useAppDispatch } from './../redux/rootStore';
export const useSeoHome = (): {
  onSubmitSeoHome: any
} => {
  const dispatch = useAppDispatch();

  const onSubmitSeoHome = (values: SeoHome) => {
    console.log(values);
  };
  return { onSubmitSeoHome }
}