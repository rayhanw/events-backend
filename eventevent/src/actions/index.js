import { ADD_EVENT, FETCH_EVENTS } from "./types";
import history from "../history";
import axios from "axios";

const createEvent = formValues => async dispatch => {
	const response = await axios.post("/api", formValues);

	dispatch({ type: ADD_EVENT, payload: response.data });
	history.push("/");
};

const fetchEvents = () => async dispatch => {
	const response = await axios.get("/api/events");
	response.data.map(event => {
		event.start = new Date(event.start);
		event.end = new Date(event.end);
	});
	dispatch({ type: FETCH_EVENTS, payload: response.data });
};

export { createEvent, fetchEvents };
