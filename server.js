import { app } from "./app.js";
import { connectDB } from "./data/database.js";

connectDB();

app.listen(process.env.PORT, () => {
  console.log(
    `Server is working on port:${process.env.PORT} in ${process.env.NODE_ENV} Mode` +
    `Frontend URL: ${process.env.FRONTEND_URL} and ${process.env.MONGO_URI}`
  );
});
