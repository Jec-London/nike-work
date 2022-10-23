(async function () {
  const response = await fetch("https://solovey.com.ua/test/data.json");
  const data = await response.json();
  console.log("data", data);
})();

