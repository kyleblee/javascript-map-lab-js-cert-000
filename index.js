const knownDecepticons = ['Megatron', 'Skywarp', 'Laserbeak', 'Barricade'];

const robots = [
  { name: 'Bumblebee', alliance: null },
  { name: 'Laserbeak', alliance: null },
  { name: 'Barricade', alliance: null },
  { name: 'Optimus Prime', alliance: null },
  { name: 'Skywarp', alliance: null },
  { name: 'Megatron', alliance: null },
  { name: 'Ironhide', alliance: null },
  { name: 'Ratchet', alliance: null }
];

const zebraStripes = [
  { width: 9.12, color: null },
  { width: 5.71, color: null },
  { width: 6.01, color: null },
  { width: 1.54, color: null },
  { width: 8.34, color: null },
  { width: 7.77, color: null },
  { width: 0.59, color: null },
  { width: 7.31, color: null },
];

//trying it with the conditional statements outside the new object assignment
var sortedRobots = robots.map(function(robot) {
  //properties to add if decepticon
  if(knownDecepticons.includes(robot.name)) {
    return Object.assign({}, robot, {
      alliance: 'decepticon'
    });
  } else {
  //properties to add if not decepticon
    return Object.assign({}, robot, {
      alliance: 'autobot'
    });
  }
});

var coloredZebraStripes = zebraStripes.map(function(stripe, index) {
  function isOdd() { return (index % 2 === 1); }
  if (isOdd()) {
    return Object.assign({}, stripe, {
      color: 'white'
    });
  } else {
    return Object.assign({}, stripe, {
      color: 'black'
    });
  }
});
