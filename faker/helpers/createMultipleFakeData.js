const textColor = require("../../chalk/terminalColors");

const createMultipleFakeData = async (count, fuctionCreation) => {
  try {
    for (let i = 0; i < count; i++) {
      await fuctionCreation();
    }
  } catch (error) {
    console.log(textColor.danger("createMultipleFakeData failed", error));
  }
  console.log(
    textColor.lemon(
      `createMultipleFakeData function successed ${fuctionCreation} wass running ${count} times`,
    ),
  );
};

module.exports = createMultipleFakeData;
