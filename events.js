const School = require('./school');

const d = new School();

// register a listener for bellRing event
d.on('bellRing', ({ period, text }) => {
    console.log(`We need to run because ${period} ${text}`);
});

d.startPeriod();
