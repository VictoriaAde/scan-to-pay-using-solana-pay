import { useState } from "react";
import { BsPlus } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";

interface Props {
  name: string;
  formRef: React.RefObject<HTMLFormElement>;
  onQuantityChange: (productId: string, quantity: number) => void;
}

export default function NumberInput({
  name,
  formRef,
  onQuantityChange,
}: Props) {
  const [number, setNumber] = useState(0);

  function decrement() {
    setNumber((n) => (n > 0 ? n - 1 : 0));
    onQuantityChange(name, number - 1);
  }

  function increment() {
    setNumber((n) => n + 1);
    onQuantityChange(name, number + 1);
  }

  function handleKeyboard(e: React.KeyboardEvent<HTMLButtonElement>) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      decrement();
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      increment();
    }
    if (e.key === "Enter") {
      e.preventDefault();
      formRef.current?.submit();
    }
  }

  // Add an onChange handler for the input element
  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newValue = parseInt(event.target.value, 10) || 0;
    setNumber(newValue);
    onQuantityChange(name, newValue);
  }

  return (
    <div className="w-36 border border-[#232323] rounded-md flex flex-row items-center">
      <button
        type="button"
        tabIndex={-1}
        className="basis-1/3 focus:outline-none"
        onClick={decrement}
        onKeyDown={handleKeyboard}
      >
        <span className="m-auto text-2xl text-white">
          <BiMinus color="#fff" />
        </span>
      </button>
      <input
        type="number"
        name={name}
        value={number}
        onChange={handleInputChange}
        min={0}
        max={10}
        step={1}
        className="w-full text-center border-none focus:ring-0 text-white bg-black font-bold"
      />
      <button
        type="button"
        tabIndex={-1}
        className="basis-1/3 focus:outline-none"
        onClick={increment}
        onKeyDown={handleKeyboard}
      >
        <span className="m-auto text-2xl text-white">
          <BsPlus color="#fff" />
        </span>
      </button>
    </div>
  );
}
