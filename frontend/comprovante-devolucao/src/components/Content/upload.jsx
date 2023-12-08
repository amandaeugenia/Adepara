import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';


// Configuração do worker do PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

function Upload() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [numPages, setNumPages] = useState(null);

  // Função para lidar com a mudança de arquivo
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
  };

  // Função para lidar com o upload
  const handleUpload = () => {
    console.log('Arquivos prontos para envio:', selectedFiles.map(file => file.name));
  };

  // Função para lidar com o carregamento bem-sucedido do documento
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div>
      <input
        type="file"
        id="fileInput"
        onChange={handleFileChange}
        accept=".pdf, .jpg, .jpeg, .png, .gif, .doc, .docx, .txt"
        multiple
      />

      <div className="preview-container">
        {selectedFiles.map((file) => (
          <div key={file.name} className="preview">
            {file.type.startsWith('image/') ? (
              <img src={URL.createObjectURL(file)} alt={file.name} />
            ) : file.type === 'application/pdf' ? (
              <Document
                file={URL.createObjectURL(file)}
                onLoadSuccess={onDocumentLoadSuccess}
              >
                {Array.from(new Array(numPages), (el, index) => (
                  <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                ))}
              </Document>
            ) : (
              <p>{file.name}</p>
            )}
          </div>
        ))}
      </div>

      <button onClick={handleUpload}>Enviar</button>
    </div>
  );
}

export default Upload;