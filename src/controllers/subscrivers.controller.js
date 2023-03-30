import {
  DeleteSubscriverHandler,
  GetSubscriverDetailsHandler,
  GetSubscriversHandler,
  SaveSubscriverHandler,
} from "../handlers/subscrivers_handler";
import { sendMail } from "../mail/Sender";
import { SubscriverTemplate } from "../mail/templates";

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
      await sendMail(email, _template.subject, _template.body);
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

export const Methods = {
  GetSubscrivers,
  GetSubscriverDetails,
  AddSubscriver,
  DeleteSubscriver,
};
