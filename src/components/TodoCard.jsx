import { FaPenToSquare, FaTrash } from 'react-icons/fa6';
export default function TodoCard(props) {
  const { children, handleDeleteTodo, index, handleEditTodo, playSound } =
    props;
  return (
    <li className="todoItem">
      {index + 1}.{children}
      <button
        onClick={() => {
          handleEditTodo(index);
        }}
      >
        <FaPenToSquare />
      </button>
      <button
        onClick={() => {
          handleDeleteTodo(index);
          playSound('/assets/low-no-82600.mp3');
        }}
      >
        <FaTrash />
      </button>
    </li>
  );
}
