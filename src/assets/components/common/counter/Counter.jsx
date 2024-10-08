const Counter = ({ add, sub, count, addProduct }) => {
  return (
    <div>
      <div>
        <button
          className="bg-green-500 rounded-full h-6 w-6 flex items-center justify-center text-white"
          onClick={add}
        >
          +
        </button>
        <p>{count}</p>
        <button
          className="bg-red-500 rounded-full h-6 w-6 flex items-center justify-center text-white"
          onClick={sub}
        >
          -
        </button>
      </div>
      <button
        className="bg-blue-500 py-2 px-4 rounded-lg text-white"
        onClick={addProduct}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default Counter;
