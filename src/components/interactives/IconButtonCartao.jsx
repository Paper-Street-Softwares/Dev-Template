export default function IconButtonCartao(props) {
  const { icon, label, ariaLabel, className } = props;

  return (
    <button
      className={`${className} flex flex-row items-center justify-center transition bg-[#1ABC9D] rounded-[4px] w-[36px] h-[36px]`}
      aria-label={ariaLabel}
    >
      <div className="flex items-center text-center gap-[10px]">
        <div className="flex flex-col text-white justify-end">{icon}</div>
      </div>
    </button>
  );
}
