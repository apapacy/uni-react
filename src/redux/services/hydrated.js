
const HYDRATED = Symbol('HYDRATED');


const initialState = {
  state: false,
};

export default function userReduser(state = initialState, action) {
  switch (action.type) {
    case HYDRATED:
      return { state: true };
    default:
      return state;
  }
}

export function hydrated() {
  return { type: HYDRATED };
}
