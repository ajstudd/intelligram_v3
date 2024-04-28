import { useUploadMutation } from '@/services/mediaApi';

export const useMedia = () => {
  const [
    uploadFile,
    {
      data: uploadData,
      error: uploadError,
      isError: isUploadError,
      isLoading: isUploading,
    },
  ] = useUploadMutation();

  return {
    uploadFile,
    isUploadError,
    isUploading,
    uploadData,
    uploadError,
  };
};
