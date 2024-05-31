import TodoCard from './TodoCard';
export default function TodoList({
  todos,
  handleDeleteTodo,
  handleEditTodo,
  playSound,
}) {
  return (
    <>
      {todos.length <= 0 ? (
        <div className="main">
          <div style={{ width: '100%' }}>
            <div
              style={{
                height: 0,
                paddingBottom: '56.25%',
                position: 'relative',
                width: '100%',
              }}
            >
              <iframe
                allowFullScreen
                height="100%"
                src="https://giphy.com/embed/IsDjNQPc4weWPEwhWm/video"
                style={{
                  left: 0,
                  position: 'absolute',
                  top: 0,
                  width: '100%',
                  border: 'none',
                  overflow: 'hidden',
                }}
                width="100%"
              ></iframe>
            </div>
          </div>
        </div>
      ) : (
        <ul className="main">
          {todos.map((todo, index) => {
            return (
              <TodoCard
                className="todoItem"
                playSound={playSound}
                handleDeleteTodo={handleDeleteTodo}
                handleEditTodo={handleEditTodo}
                index={index}
                key={index}
              >
                <p>{todo}</p>
              </TodoCard>
            );
          })}
        </ul>
      )}
    </>
  );
}
