import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    console.log("REQ.BODY", req.body);
    await sendgrid.send({
      to: "afloucks@outlook.com", // Your email where you'll receive emails
      from: "afloucks@outlook.com", // your website email address here
      subject: `New Quote: ${req.body.subject}`,
      html: `<div>You've got mail</div>`,
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
