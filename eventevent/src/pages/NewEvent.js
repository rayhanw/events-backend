import React, { Component } from "react";
import { connect } from "react-redux";
import { createEvent } from "../actions";

import Form from "../components/Form";

class NewEvent extends Component {
	state = {
		start: null,
		end: null,
		title: null
	};

	handleSubmit = formValues => {
		this.props.createEvent(formValues);
	};

	render() {
		return (
			<div>
				<Form handleSubmit={this.handleSubmit} />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { events: state };
};

export default connect(
	mapStateToProps,
	{ createEvent }
)(NewEvent);
