const arguments = process.argv
  .filter((argumentItem) => argumentItem.includes('--'))
  .reduce((prev, current) => {
    const [key, value] = current.replace('--', '').split('=')

    return ({
      ...prev,
      [key]: value,
    })
  }, {})

const route = arguments.NODE_ENV === "DEV" ? "dev/stdin" : "/dev/stdin";

const input = require("fs").readFileSync(route, "utf8");

// aca va tu codigo

const [a, b] = input.split("\n").map((item) => item.replace("\r", ""));

console.log(`X = ${parseInt(a) + parseInt(b)}`);
