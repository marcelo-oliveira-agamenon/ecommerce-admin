import React, { useState, useRef, useCallback } from 'react';
import './style.scss';

interface IUploadImage {
  placeholder: string;
  onUploadImage: (images: File[]) => void;
}

const UploadImage: React.FC<IUploadImage> = ({ onUploadImage, placeholder }) => {
  const [images, setImages] = useState<
    Array<{
      file: File;
      path: string;
    }>
  >([]);
  const inputRef: React.LegacyRef<HTMLInputElement> | undefined = useRef(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;

    if (files?.length) {
      const auxArray = [];
      for (let i = 0; i < files.length; i += 1) {
        const fileObj = {
          file: files[i],
          path: URL.createObjectURL(files[i]),
        };

        auxArray.push(fileObj);
      }

      setImages(auxArray);
      onUploadImage(auxArray.map((file) => file.file));
    }
  };

  const handleClickOnUpload = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  }, [inputRef]);

  const removeImageAction = (fileString: string) => {
    const auxImages = images.filter((image) => image.path !== fileString);

    setImages(auxImages);
    onUploadImage(auxImages.map((image) => image.file));
  };

  return (
    <div
      id="upload_image_element"
      role="button"
      tabIndex={0}
      onClick={handleClickOnUpload}
      onKeyDown={handleClickOnUpload}
    >
      {images && images.length ? (
        <div className="images_container">
          {images.map((image) => (
            <div className="image" key={image.path}>
              <img src={image.path} alt={image.path} />

              <button type="button" onClick={() => removeImageAction(image.path)}>
                x
              </button>
            </div>
          ))}
        </div>
      ) : (
        <h3 className="upload_title">{placeholder}</h3>
      )}

      <input
        accept="image/gif, image/jpeg"
        ref={inputRef}
        type="file"
        multiple
        className="input_image_container"
        onChange={handleImageChange}
      />
    </div>
  );
};

export default UploadImage;
