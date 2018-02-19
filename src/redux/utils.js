export function parseError(error) {
  console.log(error)
  let errors = void 0;
  let message = void 0;
  if (error && error.response.data && error.response.data.errors instanceof Object) {
    errors = error.response.data.errors;
  } else if (error) {
    message = errors.message;
  }
  return { errors, message, };
}
