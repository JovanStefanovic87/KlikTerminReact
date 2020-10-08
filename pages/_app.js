// pages/_app.js
import App from 'next/app';
import Head from 'next/head';
import React from 'react';

import './_app.scss';

export default class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		let pageProps = {};

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}

		return { pageProps };
	}

	render() {
		const { Component, pageProps } = this.props;

		return (
			<>
				<Head>
					<title>Warning</title>
					<meta name="viewport" content="width=device-width, initial-scale=1" />
				</Head>
				<Component {...pageProps} />
			</>
		);
	}
}
