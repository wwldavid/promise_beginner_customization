const express = require("express");
const axios = require("axios");
const app = express();

app.get("/api/jokes", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.jisuapi.com/xiaohua/text?appkey=myappkey"
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(3000, () => {
  console.log("Proxy server is running on http://localhost:3000");
});
