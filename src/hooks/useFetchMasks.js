import { useReducer, useEffect } from 'react';

// Temporarily store these here until a back end is created.
const maskData = [
  { id: 1,
    abbr: "Olsen",
    name: "Olsen pattern, cotton, 700 threadcount",
    desc: "Hand-sewn cotton. Popular form-fitting design. Machine washable.",
    cost: 15.0,
    uses: 30
  },
  { id: 2,
    abbr: "3M 8210",
    name: "N95, no valve, 3M 8210",
    desc: "Heavy-duty respirator. NIOSH standard. Filters 95% of particulates.",
    cost: 7.25,
    uses: 1
  },
  { id: 3,
    abbr: "KN95",
    name: "KN95, polypropylene, various manufacturers.",
    desc: "Respirator. Chinese standard. Filters 94% of particulates.",
    cost: 3.0,
    uses: 1
  }
];

const ACTIONS = {
  MAKE_REQUEST: 'MAKE_REQUEST',
  GET_DATA: 'GET_DATA',
  ERROR: 'ERROR',
}

function reducer(state, action) {
  //action.payload.x
  switch(action.type) {
    case ACTIONS.MAKE_REQUEST:
      return { loading: true, masks: [] };
    case ACTIONS.GET_DATA:
      return { ...state, loading: false, masks: action.payload.masks };
    case ACTIONS.ERROR:
      return { ...state, loading: false, error: action.payload.error, masks: [] };
    default:
      return state;
  }
}

export default function useFetchMasks() {
  const [state, dispatch] = useReducer(reducer, { masks: [], loading: true })

  useEffect(() => {
    dispatch({ type: ACTIONS.GET_DATA, payload: { masks: maskData } })
  }, []);

  return state;
}

