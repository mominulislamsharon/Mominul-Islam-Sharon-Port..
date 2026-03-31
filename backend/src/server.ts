import mongoose from "mongoose";
import app from "./app";
import config from "./config";

const PORT = config.PORT;

async function main() {
  try {
    await mongoose.connect(config.MONGO_URI);

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
