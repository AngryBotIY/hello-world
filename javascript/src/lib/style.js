export const style = (element, styles) => {
  for (const style in styles) element.style[style] = styles[style]

  return element
}