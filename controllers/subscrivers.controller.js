const {
  DeleteSubscriverHandler,
  GetSubscriverDetailsHandler,
  GetSubscriversHandler,
  SaveSubscriverHandler,
} = require("../handlers/subscrivers.handlers");
const { sendMail } = require("../mail/mail.sender");
const SubscriverTemplate = require("../mail/subscrive.wellcome.template");

const GetSubscrivers = async (req, res) => {
  try {
    let _subscrivers = await GetSubscriversHandler();
    res.json(_subscrivers);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const GetSubscriverDetails = async (req, res) => {
  try {
    let { id } = req.params;
    let _subscrivers = await GetSubscriverDetailsHandler(id);
    res.json(_subscrivers);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const AddSubscriver = async (req, res) => {
  try {
    let { email } = req.body;
    if (email === undefined) {
      res.status(400).json({ message: "Bad Request" });
    }

    await SaveSubscriverHandler(email);

    try {
      //Sending Wellcome email
      let _template = SubscriverTemplate;
      await sendMail(
        email,
        SubscriverTemplate.subject,
        SubscriverTemplate.body
      );
    } catch (error) {
      console.log(error);
      res.status(500);
      res.send(error.message);
    }
    res.json({ message: "Subscriver added" });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const DeleteSubscriver = async (req, res) => {
  try {
    let { id } = req.params;
    await DeleteSubscriverHandler(id);
    res.json({ message: "Subscriver deleted" });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

module.exports = {
  GetSubscrivers,
  GetSubscriverDetails,
  AddSubscriver,
  DeleteSubscriver,
};
