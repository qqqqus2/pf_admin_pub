"use client";

import React from "react";
import { useDropzone } from "react-dropzone";

// export interface FileProps {
//   className: string;
// }

export default function FileDrop({ className, ...props }//: FileProps

) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  return (
    <div {...getRootProps({ className: "file-up-icon" })}>
      <input {...getInputProps()} />
    </div>
  );
}
