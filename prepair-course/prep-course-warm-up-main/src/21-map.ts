export { };

export { };

function tidyUpString(str: string):string {
  return str
    .trim()
    .toLowerCase()
    .replace("/", "");
}

// You are allowed to edit this function
function capitalise(str: string): string {
  const firstLetter = str[0].toUpperCase()
  return firstLetter + str.substring(1)
}

const mentors = ["/Daniel ", "irina ", " Gordon", "ashleigh "];
let mentorsTidy = mentors.map(mentors => {
  const tidyStr = tidyUpString(mentors);
  const capitalMentor = capitalise(tidyStr);
  return capitalMentor;
});

console.log(mentorsTidy); // Expected output: ["Daniel", "Irina", "Gordon", "Ashleigh"]


// function tidyUpString(str: string):string {
//   return str.trim().toLowerCase().replace("/", "")
// }

// // You are allowed to edit this function
// function capitalise(str: string[]):string {
//   const tidyUpStr: string[] = str.map(arrElement => tidyUpString(arrElement));
//   let result: string[] = []
//   for (let i = 0; i < tidyUpStr.length; i++) {
//     result[i] = tidyUpStr[i].charAt(0).toUpperCase() + tidyUpStr[i].slice(1);
//   }
//   return result
// }

// const mentors = ["/Daniel ", "irina ", " Gordon", "ashleigh "];
// let mentorsTidy: string[] = capitalise(mentors) // You are allowed to edit this line
// console.log(mentorsTidy); // Expected output: ["Daniel", "Irina", "Gordon", "Ashleigh"]
