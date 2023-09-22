import FileViewer from "react-file-viewer";
import { PDFDownloadLink } from "@react-pdf/renderer";
import React from "react";

const PersonCard = ({ name, fileType, filePath, DocumentComponent }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "150px",
        marginRight: "20px",
      }}
    >
      <h3>{name}</h3>
      <div style={{ width: "100px", height: "100px", overflow: "hidden" }}>
        <FileViewer fileType={fileType} filePath={filePath} />
      </div>
      {/* @ts-expect-error Server Component */}
      <PDFDownloadLink
        document={<DocumentComponent />}
        fileName={`${name}_interview_answers.pdf`}
      >
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download PDF"
        }
      </PDFDownloadLink>
    </div>
  );
};

export default PersonCard;
