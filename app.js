const express = require("express");
var path = require("path");

const app = express();
const port = 3000;
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.use("/", express.static(path.join("src", "add-to-basket")));
app.use("/", express.static(path.join("src", "mini-basket")));
app.use("/", express.static(path.join("src", "product-details")));

const products = [
  {
    id: "1",
    brand: "Audi",
    model: "Q4 e-tron",
    price: 349990,
    img: "https://www.audi.dk/content/dam/nemo/models/q4-e-tron/q4-e-tron/my-2022/NeMo-Derivate-Startpage/stage/audi-q4-e-tron-stage-desktop.jpg",
  },
  {
    id: "2",
    brand: "Tesla",
    model: "Model 3",
    price: 399990,
    img: "http://tesla-cdn.thron.com/delivery/public/image/tesla/8e2df1b9-a4bf-4eb9-beec-2cf5cc77fca0/bvlatuR/std/2880x2400/Desktop-ModelY",
  },
  {
    id: "3",
    brand: "VW",
    model: "ID.4",
    price: 299995,
    img: "https://assets.volkswagen.com/is/image/volkswagenag/200622-Posterframes-GENERIC-16-9-f-cc-1?Zml0PWNyb3AsMSZmbXQ9anBnJnFsdD03OSZ3aWQ9MTkyMCZoZWk9MTA4MCZhbGlnbj0wLjAwLDAuMDAmYmZjPW9mZiZlNTg4",
  },
];

app.get("/", (req, res) => {
  const product = products[Math.floor(Math.random() * 3)];
  res.render(path.join(__dirname, "src", "index.html"), { ...product });
});

app.listen(port, () => console.log(`Server listening on port: ${port}`));
