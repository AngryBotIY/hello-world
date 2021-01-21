export const mutate = (selector, mutation) => {
  const element = document.querySelector(selector) || document.querySelector('.nothing')

  element.replaceWith(mutation)

  return mutation
}