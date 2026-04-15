import { getColorSync } from "colorthief";

export default function Card({ src, alt, name, handleClick }) {
  return (
    <button
      onClick={handleClick}
      onMouseOver={(e) => {
        const img = e.currentTarget.querySelector("img");
        const color = getColorSync(img);
        const cssColor = `rgb(${color._r}, ${color._g}, ${color._b}, 0.75)`;

        e.currentTarget.style.boxShadow = `15px 15px 10px 5px ${cssColor}`;
        e.currentTarget.style.transition = "box-shadow 0.3s ease";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = ``;
      }}
      className="group"
    >
      <div className="flex flex-col items-center gap-5 border border-amber-700">
        <img src={src} alt={alt} crossOrigin="anonymous" />

        <p className="group-hover:text-red-600">{name}</p>
      </div>
    </button>
  );
}
