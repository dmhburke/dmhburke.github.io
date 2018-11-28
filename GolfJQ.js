/*golfJQfile*/
$(document).ready(()=> {
  const source = document.getElementById('playerCreator').innerHTML;
  const template = Handlebars.compile(source);

  const context = {
    players: [
      {
      playerNo: '1',
      shortCode: 'DB',
      name: 'Daniel Burke',
      handicap:'18',
      tourNo: 'VI',
      natCode: 'Aus',
      prevWin: 'GJStar.svg',
      strengths: 'Modesty',
      weaknesses: 'None detected'
    },
    {
    playerNo: '2',
    shortCode: 'PR',
    name: 'Phil Rosengreen',
    handicap:'10',
    tourNo: 'VI',
    natCode: 'Aus',
    prevWin: 'GJStar.svg',
    strengths: 'Winning tournaments',
    weaknesses: 'Crowd support'
    },
    /*START new player */
    {
    playerNo: '3',
    shortCode: 'SG',
    name: 'Steve Gafen',
    handicap:'27',
    tourNo: 'VI',
    natCode: 'Aus',
    prevWin: '',
    strengths: 'Saturday nights',
    weaknesses: 'Sunday mornings'
    },
    /*END new player */
    /*START new player */
    {
    playerNo: '4',
    shortCode: 'TS',
    name: 'Tim Stuart',
    handicap:'16',
    tourNo: 'VI',
    natCode: 'Aus',
    prevWin: 'GJStar.svg',
    strengths: 'Positive golf',
    weaknesses: 'Norman-style widebrims'
    },
    /*END new player */
    /*START new player */
    {
    playerNo: '5',
    shortCode: 'BE',
    name: 'Bob Evans',
    handicap:'31',
    tourNo: 'VI',
    natCode: 'Aus',
    prevWin: '',
    strengths: 'Round speed',
    weaknesses: "Others' practice swings"
    },
    /*END new player */
    /*START new player */
    {
    playerNo: '6',
    shortCode: 'RJ',
    name: 'Rowan Joseph',
    handicap:'32',
    tourNo: 'VI',
    natCode: 'Aus',
    prevWin: '',
    strengths: 'Cubans',
    weaknesses: 'Bunkers'
    },
    /*END new player */
    /*START new player */
    {
    playerNo: '7',
    shortCode: 'GR',
    name: 'Geoff Roth',
    handicap:'14',
    tourNo: 'V',
    natCode: 'Can',
    prevWin: '',
    strengths: 'Swing mechanics',
    weaknesses: 'Having a full set of clubs'
    },
    /*END new player */
    /*START new player */
    {
    playerNo: '8',
    shortCode: 'DBe',
    name: 'Dylan Beaumont',
    handicap:'12',
    tourNo: 'IV',
    natCode: 'US',
    prevWin: 'GJStar.svg',
    strengths: 'Night-time activities',
    weaknesses: 'Night-time activities'
    },
    /*END new player */
  ]
  };

  const compiledHtml = template(context);

  const displayElements = document.getElementById('display');
  displayElements.innerHTML = compiledHtml;

})
