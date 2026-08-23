interface UploadArgs {
  onProgress?: (progress: number) => void;
  onError?: (message: string) => void;
  onSuccess?: () => void;
  file: File;
  uploadURL: string;
  abortController?: AbortController;
}

export const uploadFilesWithXHR = ({
  onProgress = () => {},
  onError = () => {},
  onSuccess = () => {},
  file,
  uploadURL,
  abortController,
}: UploadArgs) => {
  const xhrRequest = new XMLHttpRequest();

  xhrRequest.addEventListener('error', () => {
    onError('Upload failed');
  });

  xhrRequest.upload.addEventListener('progress', (e) => {
    if (e.lengthComputable) {
      const progress = e.loaded / e.total;
      onProgress(progress);
    }
  });

  xhrRequest.addEventListener('loadend', () => {
    if (xhrRequest.status >= 200 && xhrRequest.status < 300) {
      onSuccess();
    } else {
      onError(`Upload failed with status ${xhrRequest.status}`);
    }
  });

  abortController?.signal.addEventListener('abort', () => {
    console.log('Upload aborted');
    xhrRequest.abort();
  });

  xhrRequest.open('PUT', uploadURL, true);
  xhrRequest.send(file);
};
