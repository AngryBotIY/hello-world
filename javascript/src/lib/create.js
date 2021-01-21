export const create = (tag, props) => {
  const element = document.createElement(tag)

  for (const prop in props) element[prop] = props[prop]

  return element
}