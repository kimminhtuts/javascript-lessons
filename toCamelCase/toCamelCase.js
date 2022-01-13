const input = "   To  CAmEl CASE    " // => toCamelCase

const result = input
  .toLowerCase()
  .trim()
  .split(" ")
  .map((e, index) => e ? index ? `${e[0]?.toUpperCase()}${e.slice(1)}` : e : "")
  .join("")

console.log(result)