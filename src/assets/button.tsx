function MyButton({ButtonClick, count}) {
  return (
    <>
    <button onClick={ButtonClick}>
      Кнопка: {count}
    </button>
    </>
  );
}

export default MyButton