import { useDispatch, useSelector } from "react-redux";
import { increment, decrement ,reset, incrementByAmount} from "./features/counter/counterSlice";
import { useState } from "react";

function App() {

  const [amount, setAmount] = useState(0);

  const count = useSelector((state)=>state.counter.value);
  const dispatch = useDispatch();

  function handleIncClick () {
    dispatch(increment());
  }
  
  function handleDecClick () {
    dispatch(decrement());
  }

  function handleResetClick () {
    dispatch(reset());
  }

  function handleIncByAmountClick () {
    dispatch(incrementByAmount(amount));
  }

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 gap-10 border-2 border-black rounded-lg shadow-lg p-10 w-fit ">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleIncClick}
      >
        +
      </button>
      <p className="text-2xl font-bold">Count:{count}</p>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded"
        onClick={handleDecClick}
      >
        -
      </button>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded"
        onClick={handleResetClick}
      >
        reset
      </button>
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} 
      className="border-2 border-gray-300 p-2 rounded"/>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded"
        onClick={handleIncByAmountClick}
      >
        Increment by Amount
      </button>
    </div>

    
  );
}

export default App;
