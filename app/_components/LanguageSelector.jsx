import { IoLanguage } from "react-icons/io5";

function LanguageSelector({
  selectedLanguage,
  setSelectedLanguage,
  languages,
}) {
  return (
    <span className="cursor-pointer rounded-full space-x-1 pl-2 bg-black flex items-center flex-row">
      <IoLanguage size={22} />
      <select
        value={selectedLanguage}
        className="bg-black flex flex-row rounded-full py-1 text-white"
        onChange={(e) => {
          setSelectedLanguage(e.target.value);
        }}
      >
        {languages.map((language) => (
          <option key={language} value={language}>
            {language}
          </option>
        ))}
      </select>
    </span>
  );
}

export default LanguageSelector;
