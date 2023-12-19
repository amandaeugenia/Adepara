import "./upload2.css";
import { useRef, useState } from "react";
import axios from "axios";

// icons
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

// Paginas
import ComprovanteDevolucao from "../../Pages/ComprovanteDevolucao";
import Consultas from "../../Pages/Consultas";
import DemonstrativoDespesas from "../../Pages/DemonstrativoDespesas";
import DespesasEspeciais from "../../Pages/DespesasEspeciais";

// Hooks

import { Navigation } from "../../Hooks/Navigation";

function Upload() {
  const formComponents = [
    <ComprovanteDevolucao />,
    <Consultas />,
    <DemonstrativoDespesas />,
    <DespesasEspeciais />,
  ];

  const { currentStep, currentComponent, changeStep } =
    Navigation(formComponents);

  const [files, setFiles] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [showProgress, setShowProgress] = useState(false);
  const fileInputeRef = useState(null);

  const handleFileInputClick = () => {
    fileInputeRef.current.click();
  };

  const uploadFile = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    const fileName =
      file.name.lenght > 12
        ? `${(file.name = file.name.substring(0, 13))} ... .${
            file.name.split(".")[1]
          }`
        : file.name;
    const formData = new FormData();
    formData.append("file", file);
    setFiles((prevState) => [...prevState, { name: fileName, loading: 0 }]);
    setShowProgress(true);
    axios
      .post("", formData, {
        onUploadProgress: ({ loaded, total }) => {
          setFiles((prevState) => {
            const newFiles = [...prevState];
            newFiles[newFiles.length - 1].loading = Math.floor(
              (loaded / total) * 100
            );
            return newFiles;
          });
          if (loaded == total) {
            const fileSize =
              total < 1024
                ? `${total} KB`
                : `${(loaded / (1024 * 1024)).toFixed(2)} MB`;
            setUploadedFiles([
              ...uploadedFiles,
              { name: fileName, size: fileSize },
            ]);
            setFiles([]);
            setShowProgress(false);
          }
        },
      })
      .catch(console.error);
  };

  return (
    <div>
      <div className="title-bar">{currentComponent}</div>
      <div className="upload-box">
        <p>Selecione o arquivo</p>
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <input
            className="file-input"
            type="file"
            name="file"
            hidden
            ref={fileInputeRef}
            onChange={uploadFile}
          />
          <div className="icon" onClick={handleFileInputClick}>
            <img src="/images/pasta.png" />
          </div>
          <p></p>
        </form>
        {showProgress && (
          <section className="loading-area">
            {files.map((file, index) => (
              <li className="row" key={index}>
                <i class="fa-solid fa-file-lines"></i>
                <div className="content">
                  <div className="details">
                    <span className="name">{`${file.name} - Subindo`}</span>
                    <span className="percent">{`${file.loading}%`}</span>
                    <div className="loading-bar">
                      <div
                        className="loading"
                        style={{ width: `${file.loading}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </section>
        )}

        <section className="uploaded-area">
          {uploadedFiles.map((file, index) => (
            <li className="row" key={index}>
              <div className="content-upload">
                <i class="fa-solid fa-file-lines"></i>
                <div className="details">
                  <span className="name">{file.name}</span>
                  <span className="size file">{file.size}</span>
                </div>
              </div>
              <i class="fa-solid fa-check"></i>
            </li>
          ))}
        </section>
        <section className="navbar">
          <div className="actions">

              <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
                <button type="button" onClick={() => changeStep(currentStep - 1)}>
                  <GrFormPrevious />
                  <span>Voltar</span>
                </button>
                <button type="submit">
                  <span>Avançar</span>
                  <GrFormNext />
                </button>
              </form>

          </div>
        </section>
      </div>
    </div>
  );
}

export default Upload;
