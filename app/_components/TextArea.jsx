function TextArea({ id, value, onChange, placeholder }) {
  return (
    <textarea
      id={id}
      rows={8}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="py-2.5 px-4 border-none focus:outline-none w-full border-transparent rounded-lg dark:bg-neutral-900 dark:border-transparent dark:text-neutral-400"
    />
  );
}

export default TextArea;
