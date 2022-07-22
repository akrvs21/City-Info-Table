const express = require("express");
const userRouter = require("./routes/cities.routes");
const cors = require("cors");
const PORT = process.env.PORT || 8080;

const app = express();

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(express.json());
app.use("/api", userRouter);

app.listen(PORT, () => console.log(`server was started on port ${PORT}`));
