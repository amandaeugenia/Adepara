import React, { useState } from 'react';  
import './upload.css'    

function Upload() {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
  };

  const handleUpload = () => {
    // Aqui você pode adicionar lógica para enviar os arquivos para o servidor.
    console.log('Arquivos prontos para envio:', selectedFiles.map(file => file.name));
  };

  return (
    <div>

      <input
        type="file"
        id="fileInput"
        onChange={handleFileChange}
        accept=".pdf, .jpg, .jpeg, .png, .gif, .doc, .docx"
        multiple
      />

      <div className="preview-container">
        {selectedFiles.map((file) => (
          <div key={file.name} className="preview">
            {file.type.startsWith('image/') ? (
              <img src={URL.createObjectURL(file)} alt={file.name} />
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
