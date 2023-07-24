export default function SubmitButton({ onClick }) {
  return (
    <button
      className="justify-center items-center border border-black w-20 h-10 rounded-md bg-gray-300"
      onClick={onClick}
    >
      Render
    </button>
  );
}
