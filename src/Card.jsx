import { getColorSync } from "colorthief";

export default function Card({ src, alt, name, handleClick }) {
  return (
    <button
      onClick={handleClick}
      onMouseOver={(e) => {
        const img = e.currentTarget.querySelector("img");
        const color = getColorSync(img);
        const cssColor = `rgb(${color._r}, ${color._g}, ${color._b})`;

        e.currentTarget.style.boxShadow = `12px 12px 20px 1px ${cssColor}`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = ``;
      }}
      // why doesn't the color apply?
      className="group"
    >
      <div className="flex flex-col items-center gap-5 border border-amber-700">
        <img src={src} alt={alt} crossOrigin="anonymous" />

        <p className="group-hover:text-red-600">{name}</p>
      </div>
    </button>
  );
}
