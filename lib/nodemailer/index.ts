import nodemailer from "nodemailer";
import { WELCOME_EMAIL_TEMPLATE } from "./templates";

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PASSWORD
    }
})

export const sendWelcomeEmail = async ({ email, name, intro }: WelcomeEmailData) => {
    const htmlTemplate = WELCOME_EMAIL_TEMPLATE
        .replace('{{name}}', name)
        .replace('{{intro}}', intro)

    const mailOptions = {
        from: `"StockSphere" <StockSphere.app>`,
        to: email,
        subject: 'Welcome to StockSphere - Your Personalized Investment Journey Starts Here!',
        text: 'Thanks for joining StockSphere!',
        html: htmlTemplate
    }

    await transporter.sendMail(mailOptions);
}