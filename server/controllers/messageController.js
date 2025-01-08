const messageModel = require("../models/messageModel");

const createMessage = async (request, response) => {
  const { chatID, senderID, text } = request.body;
  const message = new messageModel({
    chatID,
    senderID,
    text,
  });
  try {
    const res = await message.save();
    response.status(200).json(res);
  } catch (error) {
    console.log(error);
    response.status(500).json(error);
  }
};

const getMessages = async (request, response) => {
  const { chatID } = request.params;
  try {
    const messages = await messageModel.find({ chatID });
    response.status(200).json(messages);
  } catch (error) {
    console.log(error);
    response.status(500).json(error);
  }
};

module.exports = { createMessage, getMessages };
