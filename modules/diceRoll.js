const axios = require('axios');

function getDiceRoll(request, response, next) {

  axios.request({
    url: 'https://dice-roll.p.rapidapi.com/roll/d/25',
    headers: {
      'X-RapidAPI-Key': `${process.env.REACT_APP_DICEROLL_API}`,
      'X-RapidAPI-Host': 'dice-roll.p.rapidapi.com'
    }
  })
  .then(function (diceData) {
  response.status(200).send(diceData.data);
  })
  .catch(function (e) {
    console.log(e);
  })
}

  // class Dice {
  //   constructor(diceRoll) {
  //     this.total = diceRoll.total;
  //   }
  // }

module.exports = getDiceRoll;
