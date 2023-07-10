const router = require("express").Router();

// More code here in a moment

router.get('/new', (req, res) => {
  res.render('places/new')
})


router.get("/", (req, res) => {
  let places = [
    {
      name: "H-Thai-ML",
      city: "Seattle",
      state: "WA",
      cuisines: "Thai, Pan-Asian",
      pic: "/images/thairestaurant.jpg",
    },
    {
      name: "Coding Cat Cafe",
      city: "Phoenix",
      state: "AZ",
      cuisines: "Coffee, Bakery",
      pic: "/images/cafe.jpg",
    },
  ];
  res.render("places/index", { places });
});

module.exports = router;
