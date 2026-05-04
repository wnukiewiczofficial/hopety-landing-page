import nodemailer from "nodemailer";

export function createTransporter() {
	const port = Number(process.env.SMTP_PORT ?? 587);
	// Port 465 uses implicit TLS; `secure: false` hangs waiting for a cleartext greeting.
	const secure = process.env.SMTP_SECURE === "true" || port === 465;

	return nodemailer.createTransport({
		host: process.env.SMTP_HOST,
		port,
		secure,
		auth: {
			user: process.env.SMTP_USER,
			pass: process.env.SMTP_PASS,
		},
	});
}
