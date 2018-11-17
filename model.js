function randomNumber() {
  for (let i = 0; i < 5; i++) {
    let randomNumber = Math.floor(Math.random() * 56) + 1;
    console.log(randomNumber);
  }
}

randomNumber();

module.exports = {
    test: randomNumber,
}
