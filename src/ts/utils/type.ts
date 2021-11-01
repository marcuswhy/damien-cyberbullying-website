import Typed from "typed.js";

export default function type(
  element: string,
  strings: string[] | string
): void {
  const string: string[] = typeof strings == "string" ? [strings] : strings;

  new Typed(element, {
    strings: string,
    typeSpeed: 100,
    showCursor: false,
  });
}
