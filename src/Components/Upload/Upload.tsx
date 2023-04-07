import React, { useEffect, useRef, useState } from "react";
import { RiUpload2Fill } from "react-icons/ri";

import styles from "./Upload.module.css";
import { MEGABYTE } from "@/utils/constants";

export interface UploadProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  maxSize: number;
  // to add
}

const Upload: React.FC<UploadProps> = props => {
  const { label, accept, maxSize } = props;

  const [drag, setDrag] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<File | null | undefined>(
    null
  );
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );
  const [imageSrc, setImageSrc] = useState<string | undefined>(undefined);

  useEffect(() => {
    selectedImage && setImageSrc(URL.createObjectURL(selectedImage));
  }, [selectedImage, errorMessage]);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files?.item(0)) {
      if ((e.target.files?.item(0) as File).size > maxSize) {
        setErrorMessage(
          `The size of selected image is above  ${maxSize / MEGABYTE}MB`
        );
        return;
      }
    }
    setSelectedImage(e.target.files?.item(0));
    setErrorMessage(undefined);
  };

  const handleStartDrag = (e: React.DragEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setDrag(true);
  };

  const handleLeaveDrag = (e: React.DragEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setDrag(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (e.dataTransfer.files.length > 1) {
      setErrorMessage("Only one image allowed");
      setDrag(false);
      return;
    }

    setDrag(false);
    setSelectedImage(e.dataTransfer.files[0]);
  };

  return (
    <div className={styles.main}>
      <label>{label}</label>
      {drag ? (
        <button
          onDragStart={handleStartDrag}
          onDragOver={handleStartDrag}
          onDragLeave={handleLeaveDrag}
          onDrop={handleDrop}
          onClick={handleClick}
          className={styles.dragbutton}
        >
          <div className={styles.fixFlickering}>Drop the image here</div>
        </button>
      ) : (
        <button
          onDragStart={handleStartDrag}
          onDragOver={handleStartDrag}
          onDragLeave={handleLeaveDrag}
          onClick={handleClick}
          className={styles.button}
        >
          {!imageSrc && <RiUpload2Fill className={styles.icon} size={40} />}
          {imageSrc && (
            <>
              <img className={styles.image} src={imageSrc} alt="" />
            </>
          )}
        </button>
      )}
      {errorMessage && <div className={styles.error}>{errorMessage}</div>}
      <input
        onChange={handleChange}
        ref={inputRef}
        type="file"
        accept={accept}
      />
    </div>
  );
};

export default Upload;
