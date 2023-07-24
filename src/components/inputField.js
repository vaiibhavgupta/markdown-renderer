export default function InputField({ onChange }) {
  return (
    <div className="ml-10 mr-10">
      <textarea
        className="border border-black w-full h-96"
        placeholder="Write your code here..."
        onChange={onChange}
      />
    </div>
  );
}
