export function classNames(
  ...props: (string | undefined | null | number | boolean)[]
) {
  return props.filter(Boolean).join(" ");
}
