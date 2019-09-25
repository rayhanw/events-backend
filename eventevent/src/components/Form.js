import React, { Component } from "react";
import { DatePicker, Input, message } from "antd";

import "antd/dist/antd.css";
import "./styles/Form.css";

class Form extends Component {
	state = {
		start: null,
		end: null,
		title: null
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.handleSubmit(this.state);
	};

	handleChange = e => {
		const { name, value } = e.currentTarget;
		this.setState({ [name]: value });
	};

	handleStartDateChange = date => {
		const selectedDate = date ? date.format("YYYY-MM-DD") : "None";

		message.info(`Selected start date: ${selectedDate}`);
		this.setState({ start: date._d });
	};

	handleEndDateChange = date => {
		const selectedDate = date ? date.format("YYYY-MM-DD") : "None";

		message.info(`Selected end date: ${selectedDate}`);
		this.setState({ end: date._d });
	};

	render() {
		return (
			<div className="flex">
				<h1 style={{ textAlign: "center" }}>Add a new event</h1>
				<form onSubmit={this.handleSubmit} className="form-row">
					<div>
						<label htmlFor="title">Title</label>
						<br />
						<Input
							placeholder="Go to dentist"
							onChange={this.handleChange}
							name="title"
							allowClear
							size="large"
						/>
					</div>
					<div>
						<label htmlFor="start">Start date</label>
						<br />
						<DatePicker
							onChange={this.handleStartDateChange}
							size="large"
							name="start"
							autoFocus
						/>
					</div>
					<div>
						<label htmlFor="end">End date</label>
						<br />
						<DatePicker
							onChange={this.handleEndDateChange}
							size="large"
							name="end"
						/>
					</div>
					<div>
						<input type="submit" className="btn" />
					</div>
				</form>
			</div>
		);
	}
}

export default Form;
