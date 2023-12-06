import { preview } from "vite";

export const input = document.querySelector('fileInput').addEventListener('change', function () {
  const files = this.files;
  const reader = new FileReader();

 reader.addEventListener('load', function() {
  preview.value = reader.result;
 }) 
  
  if (files.length > 0) {
    displayFiles(files);
  }
});


