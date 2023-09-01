const textColor = require("../../chalk/terminalColors");

const createFakeData = async (
  generateFunction,
  newData,
  SuccsesText,
  catchText,
) => {
  try {
    const fakeData = new newData(await generateFunction);
    await fakeData.save();
    console.log(textColor.lemon(SuccsesText), fakeData);
  } catch (error) {
    console.log(textColor.danger(catchText, error));
  }
};

module.exports = createFakeData;
