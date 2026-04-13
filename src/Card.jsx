export default function Card({ src, alt, name, handleClick }) {
  return (
    <button onClick={handleClick}>
      <div className="flex flex-col items-center gap-5 border border-amber-700">
        <img src={src} alt={alt} />

        <p>{name}</p>
      </div>
    </button>
  );
}
