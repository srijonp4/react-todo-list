export default function TodoInput({
  handleAddTodos,
  input,
  setInput,
  playSound,
}) {
  return (
    <header>
      <input
        type="text"
        placeholder="Enter todo..."
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleAddTodos(input);
            playSound('/assets/wow-171498.mp3');
            setInput('');
          }
        }}
      />
      <button
        onClick={() => {
          handleAddTodos(input);
          playSound('/assets/wow-171498.mp3');
          setInput('');
        }}
      >
        Add
      </button>
    </header>
  );
}
