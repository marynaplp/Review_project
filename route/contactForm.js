const router = require("express").Router();
const Mailjet = require("node-mailjet");
const mailjet = Mailjet.apiConnect(
  "da9ca8e3d10c1e9f52ac77d6dbd4ce82",
  "20ca5693f1a05be95a0c10c5f2d312ec"
);

router.post("/contact", (req, res) => {
  let data = req.body;
  if (
    data.name.length === 0 ||
    data.phone.length === 0 ||
    data.email.length === 0 ||
    data.value.length === 0
  ) {
    return res.json({ msg: "Please Fill All The Fields!" });
  }

  const request = mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: "maryna.pylypchenko@gmail.com",
          Name: "Maryna",
        },
        To: [
          {
            Email: "maryna.pylypchenko@gmail.com",
            Name: "Maryna",
          },
        ],
        Subject: `message from ${data.name}`,
        TextPart: "My first Mailjet email",
        HTMLPart: `
        <h3>Information<h3/>
        <ul>
        <li>Name: ${data.name}<li/>
        <li>Phone: ${data.phone}<li/>
        <li>Email: ${data.email}<li/>
        </ul>
        <h3>Message</h3>
        <p>${data.value}<p/>
        `,
        CustomID: "AppGettingStartedTest",
      },
    ],
  });
  request
    .then((result) => {
      res.status(200).json(result.body);
    })
    .catch((err) => {
      res.status(500).json({ msg: "There is server error" });
    });
});
module.exports = router;
