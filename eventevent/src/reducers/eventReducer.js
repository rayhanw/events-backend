import { ADD_EVENT, FETCH_EVENTS } from "../actions/types";

export default (state = {}, action) => {
	switch (action.type) {
		case ADD_EVENT:
			return { ...state, ...action.payload };
		case FETCH_EVENTS:
			return { ...state, ...action.payload };
		default:
			return state;
	}
};
