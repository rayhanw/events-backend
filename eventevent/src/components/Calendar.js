import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import { connect } from "react-redux";
import { fetchEvents } from "../actions";
import moment from "moment";

import "react-big-calendar/lib/css/react-big-calendar.css";
import "./styles/Calendar.css";

const localizer = momentLocalizer(moment);

class BigCalendar extends Component {
	componentDidMount() {
		this.props.fetchEvents();
	}

	convertObjectToArray = object => {};

	renderCalendar = () => {
		const { events } = this.props.events;
		const eventsArray = [];
		Object.values(events).forEach(event => {
			eventsArray.push(event);
		});

		return (
			<div>
				<Calendar
					localizer={localizer}
					defaultDate={new Date()}
					defaultView="month"
					events={eventsArray}
					startAccessor="start"
					endAccessor="end"
					style={{ height: "100vh" }}
				/>
			</div>
		);
	};

	renderLoading = () => {
		return (
			<div className="d-flex place-center" style={{ height: "90vh" }}>
				<h3>Loading...</h3>
			</div>
		);
	};

	render() {
		const { events } = this.props.events;

		if (Object.entries(events).length > 0) {
			return this.renderCalendar();
		}

		return this.renderLoading();
	}
}

const mapStateToProps = state => {
	return { events: state };
};

export default connect(
	mapStateToProps,
	{ fetchEvents }
)(BigCalendar);
