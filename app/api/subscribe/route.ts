import { NextRequest, NextResponse } from "next/server";
import { createTransporter } from "@/lib/mailer";

export async function POST(req: NextRequest) {
	const body = (await req.json()) as { email?: unknown };
	const email = body.email;

	if (typeof email !== "string" || !email.includes("@")) {
		return NextResponse.json({ error: "Nieprawidłowy adres e-mail." }, { status: 400 });
	}

	try {
		const transporter = createTransporter();

		await transporter.sendMail({
			from: `"Hopety Landing" <${process.env.SMTP_USER}>`,
			to: process.env.NOTIFY_EMAIL,
			subject: `Nowy zapis do testów: ${email}`,
			text: `Nowy użytkownik dołączył do Hopety. Potencjalny tester aplikacji. \n\nE-mail: ${email}\nData: ${new Date().toLocaleString("pl-PL")}`,
		});

		await transporter.sendMail({
			from: `"Hopety" <${process.env.SMTP_USER}>`,
			to: email,
			subject: "Zapisałeś się do testów Hopety 🐾",
			html: `
        <div style="font-family: sans-serif; max-width: 480px; margin: 0 auto; color: #240046; padding: 32px;">
          <h2 style="color: #9D4EDD; margin-bottom: 16px;">Cześć!</h2>
          <p style="margin-bottom: 12px;">Dziękujemy za zainteresowanie aplikacją <strong>Hopety</strong>.</p>
          <p style="margin-bottom: 12px;">Gdy tylko będziemy gotowi na testy beta, damy Ci znać jako jednemu z pierwszych.</p>
          <p style="margin-top: 32px; color: #888; font-size: 14px;">Zespół Hopety 🐾</p>
        </div>
      `,
		});

		return NextResponse.json({ success: true });
	} catch (error) {
		console.error("[subscribe] sendMail error:", error);
		return NextResponse.json({ error: "Nie udało się wysłać e-maila. Spróbuj ponownie." }, { status: 500 });
	}
}
