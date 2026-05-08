"use client";

export function ScrollButton({ target }: { target: string }) {
  function handleClick() {
    document.getElementById(target)?.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <button
      onClick={handleClick}
      className="font-bold cursor-pointer text-zinc-50"
    >
      {target}
    </button>
  );
}
