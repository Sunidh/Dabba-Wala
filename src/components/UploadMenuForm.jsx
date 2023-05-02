import React, { useState } from "react";

export default function UploadMenuForm({ onUploadMenu }) {
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      onUploadMenu(file);
      setFile(null);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="menu">Menu:</label>
        <input
          type="file"
          id="menu"
          onChange={(e) => setFile(e.target.files[0])}
        />
      </div>
      <button type="submit">Upload Menu</button>
    </form>
  );
}
