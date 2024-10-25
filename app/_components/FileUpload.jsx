import { BiPaperclip } from "react-icons/bi";

function FileUpload({ handleFileUpload }) {
  return (
    <label htmlFor="file-upload" className="cursor-pointer">
      <BiPaperclip size={22} />
      <input
        id="file-upload"
        type="file"
        className="hidden"
        onChange={handleFileUpload}
      />
    </label>
  );
}

export default FileUpload;
