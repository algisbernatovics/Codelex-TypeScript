export { };

interface I_Library {
  title: string
  author: string
  isRead: boolean
}

const library: I_Library[] = [
  {
    title: "Bill Gates",
    author: "The Road Ahead",
    isRead: true
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    isRead: true
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    isRead: false
  }
];

const showStatus = (library: I_Library[]):void => {
  for (let i = 0; i < library.length; i++)
    if (library[i].isRead) console.log(`Already read ${library[i].title} by ${library[i].author}.`)
    else console.log(`You still need to read ${library[i].title} by ${library[i].author}.`)
};

showStatus(library);

/*
  Expected output:

  Already read 'Bill Gates' by The Road Ahead.
  Already read 'Steve Jobs' by Walter Isaacson.
  You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins.

*/