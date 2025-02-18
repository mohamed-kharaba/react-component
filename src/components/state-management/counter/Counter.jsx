import useCounterStore from "./store";

const Counter = () => {
    const { counter, increment, reset } = useCounterStore();
    console.log("Render Counter component");

    return (
        <div>
            Counter ({counter})
            <button onClick={() => increment()} className="btn btn-primary mx-1">
                Increment
            </button>
            <button onClick={() => reset()} className="btn btn-warning mx-1">
                Reset
            </button>
        </div>
    );
};

export default Counter;
