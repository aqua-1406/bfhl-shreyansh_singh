const express = require("express");
const cors = require("cors"); // Import cors

const app = express();



app.use(cors({
  origin: ['https://bfhl-frint-v1lh.vercel.app',"http://localhost:3001"] // Replace with your frontend URL
}));

app.use(express.json());

app
  .route("/bfhl")
  .get((req, res) => {
    res.status(200).json({ operation_code: 1 });
  })
  .post((req, res) => {
    const data = req.body.data || [];
    const numbers = [];
    const alphabets = [];
    let highestLoweralphabet = "";

    for (const item of data) {
      if (!isNaN(item)) {
        numbers.push(item);
      } else if (item.length === 1 && isNaN(item)) {
        if (item >= 'a' && item <= 'z') {
          alphabets.push(item);
          if (!highestLoweralphabet || item > highestLoweralphabet) {
            highestLoweralphabet = item;
          }
        }
      }
    }

    res.json({
      is_success: true,
      user_id: "shreyansh_kumar_singh_14062004",
      email: "shreyanshkumar.singh2021@vitbhopal.ac.in",
      roll_number: "21BEC10848",
      numbers: numbers,
      alphabets: alphabets,
      highestLoweralphabet: highestLoweralphabet ? [highestLoweralphabet] : [],
    });
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
