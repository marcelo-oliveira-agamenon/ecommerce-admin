import React, { useState, useRef, useCallback } from 'react';
import './style.scss';

interface IUploadImage {
  onUploadImage: (image: File) => void;
}

const UploadImage: React.FC<IUploadImage> = ({ onUploadImage }) => {
  const [imagePath, setImagePath] = useState<string>('');
  const inputRef: any = useRef(null);

  const handleImageChange = (e: any) => {
    console.log(e);
    setImagePath(e.target.value);
    onUploadImage(e.target.value);
  };

  const handleClickOnUpload = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  }, [inputRef]);

  return (
    <div
      id="upload_image_element"
      role="button"
      tabIndex={0}
      onClick={handleClickOnUpload}
      onKeyDown={handleClickOnUpload}
    >
      <input
        accept="image/gif, image/jpeg"
        ref={inputRef}
        type="file"
        className="input_image_container"
        value={imagePath}
        onChange={handleImageChange}
      />
    </div>
  );
};

export default UploadImage;
