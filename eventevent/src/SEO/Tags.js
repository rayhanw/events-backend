import React from "react";
import { Helmet } from "react-helmet";

const MetaTags = () => {
	return (
		<Helmet>
			<meta charSet="utf-8" />
			<title>Event x3</title>
			<meta
				name="description"
				content="A worldwide shared calendar for everyone that needs an event tracker."
			/>
			{/* Google */}
			<meta itemprop="name" content="Event Event Event" />
			<meta
				itemprop="description"
				content="A shared worldwide calendar for everyone that needs an event tracker."
			/>
			{/* Facebook */}
			<meta property="og:title" content="Event x3" />
			<meta
				property="og:description"
				content="A worldwide shared calendar for everyone that needs an event tracker."
			/>
			<meta property="og:type" content="website" />
			<meta
				property="og:url"
				content="https://event-event-event.herokuapp.com"
			/>
			{/* Twitter */}
			<meta name="twitter:card" content="summary" />
			<meta name="twitter:title" content="Event Event Event" />
			<meta
				name="twitter:description"
				content="A shared worldwide calendar for everyone that needs an event tracker."
			/>
			<meta name="twitter:site" content="@domosaurusdex" />
		</Helmet>
	);
};

export default MetaTags;
