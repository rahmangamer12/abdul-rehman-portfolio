"use client";

export function PrintButton() {
  return (
    <button type="button" onClick={() => window.print()} className="btn btn-ghost !h-10 !text-sm">
      Print
    </button>
  );
}
