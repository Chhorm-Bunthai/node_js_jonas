const fs = require("fs");
const superagent = require("superagent");

const readFilePro = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
};
const writeFilePro = (file, data) => {
    return new Promise((resolve, reject) => {
        if (err) reject('error hz');
        resolve('success');
    })
};
readFilePro(`${__dirname}/dog.txt`)
  .then((data) => {
    console.log(`Breed : ${data}`);
    return superagent.get(`https://images.dog.ceo/breeds/${data}/images/random`);
  })
  .then((res) => {
    console.log(res.body.message);
    return writeFilePro('dog-img.txt', res.body.message);
  })
  .catch((err) => {
    console.log(err.message);
  });
