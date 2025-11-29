import type { APIRoute } from "astro";
import nodemailer from "nodemailer";

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();

    const type = formData.get("type");
    const autre = formData.get("autre_details") || "";
    const nom = formData.get("nom");
    const entreprise = formData.get("entreprise") || "";
    const email = formData.get("email");
    const tel = formData.get("telephone") || "";
    const message = formData.get("message");

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: import.meta.env.SMTP_USER,
        pass: import.meta.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: import.meta.env.SMTP_USER,
      to: "lacroixeva32@gmail.com",
      subject: "📩 Nouveau message depuis ton portfolio",
      html: `
        <h2>${type}</h2>
        ${autre ? `<p><strong>Autre :</strong> ${autre}</p>` : ""}
        <p><strong>Nom :</strong> ${nom}</p>
        <p><strong>Entreprise :</strong> ${entreprise}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${tel}</p>
        <p><strong>Message :</strong><br>${message}</p>
      `,
    });

    return new Response(JSON.stringify({ message: "Message envoyé !" }), {
      status: 200,
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ message: "Erreur interne…" }), {
      status: 500,
    });
  }
};
