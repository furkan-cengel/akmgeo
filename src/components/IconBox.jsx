export function IconBox({ children }) {
  return (
    <div className="mb-4 flex h-8 w-8 items-center justify-center border border-[#cfcac2] bg-white text-[#c4583a]">
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4 stroke-current"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="miter"
      >
        {children}
      </svg>
    </div>
  );
}
