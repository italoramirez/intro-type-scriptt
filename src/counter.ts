// import './topics/01-basic-types.ts'
// import './topics/02-object-interfaces.ts'
// import './topics/03-functions.ts'
// import './topics/04-homework.types.ts'
// import './topics/05-basic-destructuring.ts'
// import './topics/06-function-destructuring.ts'
// import './topics/07-import-exports.ts'
// import './topics/08-clases.ts'
// import './topics/09-generics.ts'
// import './topics/10-decorators.ts'
import './topics/11-opcional-chaining.ts'
export function setupCounter(element: HTMLButtonElement) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}
