const greet = function (salutation) {
  return function(firstName)   {
    return `${salutation}, ${firstName}!`;
  }
}

const howdy = greet('Howdy');
const assalamuAlaikum = greet(`Assalamu 'alaikum`);

console.log(howdy('Jim'));
console.log(assalamuAlaikum('Afin'));
