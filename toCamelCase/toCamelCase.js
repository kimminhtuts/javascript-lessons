const string1 = "To Camel Case"
const string2 = "TO CAMEL CASE"
const string3 = "to camel case"
const string4 = "tO CAMel CaSE"
const abc = " iehieje www "

const result = abc.toLowerCase().split(" ").map((e, idx) => idx ? `${e[0]?.toUpperCase()}${e.slice(1)}`: e).join("")
console.log(result)
