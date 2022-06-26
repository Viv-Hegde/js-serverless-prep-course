// start coding your function here!
function running_late(date){
  const todaysDate = new Date(date);
  let hours = todaysDate.getHours();
  let mins = todaysDate.getMinutes();

  if (hours >= 22){
    return "It is late!";
  }
  else return "It is still early!";
}

//console.log(running_late("December 17, 1995 22:24:00"));
exports.running_late = running_late;
module.exports = running_late;