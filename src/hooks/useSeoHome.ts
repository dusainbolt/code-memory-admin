import { useEffect } from 'react';
import { ProcessUpload } from './../models/LayoutModel';
import { setUploadSliceClose, setUploadSliceStart } from '../redux/slices/layoutSlice';
import UploadService, { Storage } from '../services/uploadService';
import { SeoHome } from './../models/SeoHomeModel';
import { useAppDispatch } from './../redux/rootStore';
import { getSeoHomeStart, submitSeoHomeStart } from '../redux/slices/seoHomeSlice';
export const useSeoHome = (): {
  onSubmitSeoHome: any
} => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getSeoHomeStart());
  }, []);

  const onSubmitSeoHome = async (values: SeoHome) => {
    const uploadService = new UploadService();
    // handle upload image SEO
    dispatch(setUploadSliceStart({ count: 5, visibleProcessModal: false } as ProcessUpload));
    const currentTime = Date.now();
    const faviconUrlICO = await uploadService.handleUpload(values.image.faviconUrlICO, `favicon-ico-${currentTime}`, Storage.META);
    const faviconUrlJPG = await uploadService.handleUpload(values.image.faviconUrlJPG, `favicon-jpg-${currentTime}`, Storage.META);
    const logo1280x720 = await uploadService.handleUpload(values.image.logo1280x720, `preview-1280x720-${currentTime}`, Storage.META);
    const logo800x600 = await uploadService.handleUpload(values.image.logo800x600, `preview-800x600-${currentTime}`, Storage.META);
    const logo400x400 = await uploadService.handleUpload(values.image.logo400x400, `preview-400x400-${currentTime}`, Storage.META);
    delete values.id;
    console.log(values);
    dispatch(submitSeoHomeStart({
      input: {
        ...values, image: {
          logoAlt: values.image.logoAlt,
          faviconUrlICO,
          faviconUrlJPG,
          logo1280x720,
          logo800x600,
          logo400x400,
        }
      },
      beforeCallback: setUploadSliceClose,
    }))

  };
  return { onSubmitSeoHome }
}