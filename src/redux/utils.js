export function parseError(error) {
  let errors = void 0;
  let message = void 0;

  if (error && error.response && error.response.data && error.response.data.errors instanceof Object) {
    errors = error.response.data.errors;
  }
  if (error) {
    message = error.message;
  }
  return { errors, message, };
}
