export default (...args) => ({ dispatch, getState }) => (next) => (action) => {
  const { promise, promised, types, ...rest } = action;
  if (!promised) {
    return next(action);
  }
  if (typeof promise !== 'undefined') {
    throw new Error('In promised middleware you mast not use "action"."promise"');
  }
  if (typeof promised !== 'function') {
    throw new Error('In promised middleware type of "action"."promised" must be "function"');
  }
  const [ REQUEST, SUCCESS, FAILURE ] = types;
  next({ ...rest, type: REQUEST });
  action.promise = promised()
    .then(
      payload => next({ ...rest, payload, type: SUCCESS }),
    ).catch(
      error => next({ ...rest, error, type: FAILURE })
    );
};
