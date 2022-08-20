const timer = function (num) {
  for (const i of num) {
    if (typeof i !== "number" || i <= 0) {
      return;
    }
    setTimeout(() => {
      process.stdout.write("\x07");
    }, i * 1000);
  }
};
const myArgs = process.argv.slice(2);
const arr = myArgs.map((item) => {
  return parseInt(item, 10);
});
timer(arr);
