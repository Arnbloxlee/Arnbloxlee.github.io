var points = 0;
$("#number-of-clicks").text("You have " + points + " points");
var clickPoints = 0;
$("#click-points").text("Click points: " + clickPoints);
var autoClickPoints = 0;
$("#autoclick-points").text("Auto click points: " + autoClickPoints);
var pointsSpent = 0;
$("#points-spent").text("Points spent: " + pointsSpent);

$("#show-stats").hide();
var showStats = function () {
  $("#show-stats").on("click", function () {
    $("#show-stats").hide();
    $("#autoclick-points").show();
    $("#click-points").show();
    $("#stats-heading").show();
    $("#hide-stats").show();
  });
}

var hideStats = function () {
  $("#hide-stats").on("click", function () {
    $("#hide-stats").hide();
    $("#autoclick-points").hide();
    $("#click-points").hide();
    $("#stats-heading").hide();
    $("#show-stats").show();
  });
}
showStats();
hideStats();
//These functions decide if the origami images(including auto clicks) are going to be shown or not
var showBoat = function () {
  if (points >= 50) {
    $("#plane").hide();
    $("#boat").show();
  } else {
    $("#boat").hide();
  }
};

var showAutoClick = function () {
  if (points >= 100) {
    $("#auto-click").show();
    $("#can-buy-dog").show();
  } else {
    $("#auto-click").hide();
    $("#can-buy-dog").hide();
  }
};

var showBird = function () {
  if (points >= 500) {
    $("#boat").hide();
    $("#bird").show();
  } else {
    $("#bird").hide();
  }
};

var showAutoClickTwo = function () {
  if (points >= 1000) {
    $("#auto-click-2").show();
    $("#can-buy-bat").show();
  } else {
    $("#auto-click-2").hide();
    $("#can-buy-bat").hide();
  }
};

var showWolf = function () {
  if (points >= 1650) {
    $("#bird").hide();
    $("#wolf").show();
  } else {
    $("#wolf").hide();
  }
};

var showDragon = function () {
  if (points >= 3000) {
    $("#wolf").hide();
    $("#dragon").show();
  } else {
    $("#dragon").hide();
  }
};

var showFighterJet = function () {
  if (points >= 6000) {
    $("#dragon").hide();
    $("#fighter-jet").show();
  } else {
    $("#fighter-jet").hide();
  }
};

var showAutoClickThree = function () {
  if (points >= 6500) {
    $("#auto-click-3").show();
    $("#can-buy-frog").show();
  } else {
    $("#auto-click-3").hide();
    $("#can-buy-frog").hide();
  }
};

var showTRex = function () {
  if (points >= 11500) {
    $("#fighter-jet").hide();
    $("#t-rex").show();
  } else {
    $("#t-rex").hide();
  }
};

var showFieryDragon = function () {
  if (points >= 18000) {
    $("#t-rex").hide();
    $("#fiery-dragon").show();
  } else {
    $("#fiery-dragon").hide();
  }
};

var showAutoClickFour = function () {
  if (points >= 20000) {
    $("#auto-click-4").show();
    $("#can-buy-crocodile").show();
  } else {
    $("#auto-click-4").hide();
    $("#can-buy-crocodile").hide();
  }
};

var show3DSwan = function () {
  if (points >= 30000) {
    $("#fiery-dragon").hide();
    $("#3d-swan").show();
  } else {
    $("#3d-swan").hide();
  }
};
var showAutoClickFive = function () {
  if (points >= 35000) {
    $("#auto-click-5").show();
    $("#can-buy-snake").show();
  } else {
    $("#auto-click-5").hide();
    $("#can-buy-snake").hide();
  }
};

var showOwl = function () {
  if (points >= 52000) {
    $("#3d-swan").hide();
    $("#owl").show();
  } else {
    $("#owl").hide();
  }
};

var showAutoClickSix = function () {
  if (points >= 72000) {
    $("#auto-click-6").show();
    $("#can-buy-lizard").show();
  } else {
    $("#auto-click-6").hide();
    $("#can-buy-lizard").hide();
  }
};

var showHorse = function () {
  if (points >= 100000) {
    $("#owl").hide();
    $("#horse").show();
  } else {
    $("#horse").hide();
  }
};

var showAutoClickSeven = function () {
  if (points >= 200000) {
    $("#auto-click-7").show();
    $("#can-buy-shark").show();
  } else {
    $("#auto-click-7").hide();
    $("#can-buy-shark").hide();
  }
};

var show3DParrot = function () {
  if (points >= 210000) {
    $("#horse").hide();
    $("#parrot").show();
  } else {
    $("#parrot").hide();
  }
};

var showTiger = function () {
  if (points >= 345000) {
    $("#parrot").hide();
    $("#tiger").show();
  } else {
    $("#tiger").hide();
  }
};

var showBull = function () {
  if (points >= 500000) {
    $("#tiger").hide();
    $("#bull").show();
  } else {
    $("#bull").hide();
  }
};

showBoat();
showAutoClick();
showBird();
showAutoClickTwo();
showWolf();
showDragon();
showFighterJet();
showAutoClickThree();
showTRex();
showFieryDragon();
showAutoClickFour();
show3DSwan();
showAutoClickFive();
showOwl();
showAutoClickSix();
showHorse();
showAutoClickSeven();
show3DParrot();
showTiger();
showBull();

var dogsBought = 0
var increaseAutoClick = function () {
  points -= 100;
  $("#number-of-clicks").text("You have " + points + " points");
  dogsBought += 1;
  $("#dogs-bought").text("You bought " + dogsBought + " dogs");
  pointsSpent += 100;
  $("#points-spent").text("Points spent: " + pointsSpent);
  showAutoClick();
  showAutoClickTwo();
  showAutoClickThree();
  showAutoClickFour();
  showAutoClickFive();
  showAutoClickSix();
  showAutoClickSeven();

  setInterval(function () {
    points += 1;
    $("#number-of-clicks").text("You have " + points + " points");
    autoClickPoints += 1;
    $("#autoclick-points").text("Auto click points: " + autoClickPoints);

    showAutoClick();
    showAutoClickTwo();
    showAutoClickThree();
    showAutoClickFour();
    showAutoClickFive();
    showAutoClickSix();
    showAutoClickSeven();
  }, 1000);
};

var batsBought = 0;
var increaseAutoClickTwo = function () {
  points -= 1000;
  $("#number-of-clicks").text("You have " + points + " points");
  batsBought += 1;
  $("#bats-bought").text("You bought " + batsBought + " bats");
  pointsSpent += 1000;
  $("#points-spent").text("Points spent: " + pointsSpent);
  showAutoClick();
  showAutoClickTwo();
  showAutoClickThree();
  showAutoClickFour();
  showAutoClickFive();
  showAutoClickSix();
  showAutoClickSeven();

  setInterval(function () {
    points += 12;
    $("#number-of-clicks").text("You have " + points + " points");
    autoClickPoints += 12;
    $("#autoclick-points").text("Auto click points: " + autoClickPoints);
    showAutoClick();
    showAutoClickTwo();
    showAutoClickThree();
    showAutoClickFour();
    showAutoClickFive();
    showAutoClickSix();
    showAutoClickSeven();
  }, 1000);
};

var frogsBought = 0;
var increaseAutoClickThree = function () {
  points -= 6500;
  $("#number-of-clicks").text("You have " + points + " points");
  frogsBought += 1;
  $("#frogs-bought").text("You bought " + frogsBought + " frogs");
  pointsSpent += 6500;
  $("#points-spent").text("Points spent: " + pointsSpent);
  showAutoClick();
  showAutoClickTwo();
  showAutoClickThree();
  showAutoClickFour();
  showAutoClickFive();
  showAutoClickSix();
  showAutoClickSeven();

  setInterval(function () {
    points += 85;
    $("#number-of-clicks").text("You have " + points + " points");
    autoClickPoints += 85;
    $("#autoclick-points").text("Auto click points: " + autoClickPoints);
    showAutoClick();
    showAutoClickTwo();
    showAutoClickThree();
    showAutoClickFour();
    showAutoClickFive();
    showAutoClickSix();
    showAutoClickSeven();
  }, 1000);
};

var crocodilesBought = 0;
var increaseAutoClickFour = function () {
  points -= 20000;
  $("#number-of-clicks").text("You have " + points + " points");
  crocodilesBought += 1;
  $("#crocodiles-bought").text("You have " + crocodilesBought + " crocodiles");
  pointsSpent += 20000;
  $("#points-spent").text("Points spent: " + pointsSpent);
  showAutoClick();
  showAutoClickTwo();
  showAutoClickThree();
  showAutoClickFour();
  showAutoClickFive();
  showAutoClickSix();
  showAutoClickSeven();

  setInterval(function () {
    points += 345;
    $("#number-of-clicks").text("You have " + points + " points");
    autoClickPoints += 345;
    $("#autoclick-points").text("Auto click points: " + autoClickPoints);
    showAutoClick();
    showAutoClickTwo();
    showAutoClickThree();
    showAutoClickFour();
    showAutoClickFive();
    showAutoClickSix();
    showAutoClickSeven();
  }, 1000);
};

var snakesBought = 0;
var increaseAutoClickFive = function () {
  points -= 35000;
  $("#number-of-clicks").text("You have " + points + " points");
  snakesBought += 1;
  $("#snakes-bought").text("You bought " + snakesBought + " snakes");
  pointsSpent += 35000;
  $("#points-spent").text("Points spent: " + pointsSpent);
  showAutoClick();
  showAutoClickTwo();
  showAutoClickThree();
  showAutoClickFour();
  showAutoClickFive();
  showAutoClickSix();
  showAutoClickSeven();

  setInterval(function () {
    points += 690;
    $("#number-of-clicks").text("You have " + points + " points");
    autoClickPoints += 690;
    $("#autoclick-points").text("Auto click points: " + autoClickPoints);
    showAutoClick();
    showAutoClickTwo();
    showAutoClickThree();
    showAutoClickFour();
    showAutoClickFive();
    showAutoClickSix();
    showAutoClickSeven();
  }, 1000);
};

var lizardsBought = 0;
var increaseAutoClickSix = function () {
  points -= 72000;
  $("#number-of-clicks").text("You have " + points + " points");
  lizardsBought += 1;
  $("#lizards-bought").text("You bought " + lizardsBought + " lizards");
  pointsSpent += 72000;
  $("#points-spent").text("Points spent: " + pointsSpent);
  showAutoClick();
  showAutoClickTwo();
  showAutoClickThree();
  showAutoClickFour();
  showAutoClickFive();
  showAutoClickSix();
  showAutoClickSeven();

  setInterval(function () {
    points += 1500;
    $("#number-of-clicks").text("You have " + points + " points");
    autoClickPoints += 1500;
    $("#autoclick-points").text("Auto click points: " + autoClickPoints);
    showAutoClick();
    showAutoClickTwo();
    showAutoClickThree();
    showAutoClickFour();
    showAutoClickFive();
    showAutoClickSix();
    showAutoClickSeven();
  }, 1000);
};

var sharksBought = 0;
var increaseAutoClickSeven = function () {
  points -= 200000;
  $("#number-of-clicks").text("You have " + points + " points");
  sharksBought += 1;
  $("#sharks-bought").text("You bought " + sharksBought + " sharks");
  pointsSpent += 200000;
  $("#points-spent").text("Points spent: " + pointsSpent);
  showAutoClick();
  showAutoClickTwo();
  showAutoClickThree();
  showAutoClickFour();
  showAutoClickFive();
  showAutoClickSix();
  showAutoClickSeven();

  setInterval(function () {
    points += 4500;
    $("#number-of-clicks").text("You have " + points + " points");
    autoClickPoints += 4500;
    $("#autoclick-points").text("Auto click points: " + autoClickPoints);
    showAutoClick();
    showAutoClickTwo();
    showAutoClickThree();
    showAutoClickFour();
    showAutoClickFive();
    showAutoClickSix();
    showAutoClickSeven();
  }, 1000);
};

var planeClicked = function () {
  clickPoints += 1;
  $("#click-points").text("Click points: " + clickPoints);
  points += 1;
  showBoat();
  showAutoClick();
  showBird();
  showAutoClickTwo();
  showWolf();
  showDragon();
  showFighterJet();
  showAutoClickThree();
  showTRex();
  showFieryDragon();
  showAutoClickFour();
  show3DSwan();
  showAutoClickFive();
  showOwl();
  showAutoClickSix();
  showHorse();
  showHorse();
  show3DParrot();
  showTiger();
  showBull();
  $("#number-of-clicks").text("You have " + points + " points");
};

var boatClicked = function () {
  clickPoints += 3;
  $("#click-points").text("Click points: " + clickPoints);
  points += 3;
  showAutoClick();
  showBird();
  showAutoClickTwo();
  showWolf();
  showDragon();
  showFighterJet();
  showAutoClickThree();
  showTRex();
  showFieryDragon();
  showAutoClickFour();
  show3DSwan();
  showAutoClickFive();
  showOwl();
  showAutoClickSix();
  showHorse();
  showAutoClickSeven();
  show3DParrot();
  showTiger();
  showBull();
  $("#number-of-clicks").text("You have " + points + " points");
};

var birdClicked = function () {
  clickPoints += 6;
  $("#click-points").text("Click points: " + clickPoints);
  points += 6;
  showAutoClickTwo();
  showWolf();
  showDragon();
  showFighterJet();
  showAutoClickThree();
  showTRex();
  showFieryDragon();
  showAutoClickFour();
  show3DSwan();
  showAutoClickFive();
  showOwl();
  showAutoClickSix();
  showHorse();
  showAutoClickSeven();
  show3DParrot();
  showTiger();
  showBull();
  $("#number-of-clicks").text("You have " + points + " points");
};

var wolfClicked = function () {
  clickPoints += 10;
  $("#click-points").text("Click points: " + clickPoints);
  points += 10;
  showDragon();
  showFighterJet();
  showAutoClickThree();
  showTRex();
  showFieryDragon();
  showAutoClickFour();
  show3DSwan();
  showAutoClickFive();
  showOwl();
  showAutoClickSix();
  showHorse();
  showAutoClickSeven();
  show3DParrot();
  showTiger();
  showBull();
  $("#number-of-clicks").text("You have " + points + " points");
};

var dragonClicked = function () {
  clickPoints += 15;
  $("#click-points").text("Click points: " + clickPoints);
  points += 15;
  showFighterJet();
  showAutoClickThree();
  showTRex();
  showFieryDragon();
  showAutoClickFour();
  show3DSwan();
  showAutoClickFive();
  showOwl();
  showAutoClickSix();
  showHorse();
  showAutoClickSeven();
  show3DParrot();
  showTiger();
  showBull();
  $("#number-of-clicks").text("You have " + points + " points");
};

var fighterJetClicked = function () {
  clickPoints += 25;
  $("#click-points").text("Click points: " + clickPoints);
  points += 25;
  showAutoClickThree();
  showTRex();
  showFieryDragon();
  showAutoClickFour();
  show3DSwan();
  showAutoClickFive();
  showOwl();
  showAutoClickSix();
  showHorse();
  showAutoClickSeven();
  show3DParrot();
  showTiger();
  showBull();
  $("#number-of-clicks").text("You have " + points + " points");
};

var tRexClicked = function () {
  clickPoints += 45;
  $("#click-points").text("Click points: " + clickPoints);
  points += 45;
  showFieryDragon();
  showAutoClickFour();
  show3DSwan();
  showAutoClickFive();
  showOwl();
  showAutoClickSix();
  showHorse();
  showAutoClickSeven();
  show3DParrot();
  showTiger();
  showBull();
  $("#number-of-clicks").text("You have " + points + " points");
};

var fieryDragonClicked = function () {
  clickPoints += 75;
  $("#click-points").text("Click points: " + clickPoints);
  points += 75;
  showAutoClickFour();
  show3DSwan();
  showAutoClickFive();
  showOwl();
  showAutoClickSix();
  showHorse();
  showAutoClickSeven();
  show3DParrot();
  showTiger();
  showBull();
  $("#number-of-clicks").text("You have " + points + " points");
};

var swanClicked = function () {
  clickPoints += 155;
  $("#click-points").text("Click points: " + clickPoints);
  points += 155;
  showAutoClickFive();
  showOwl();
  showAutoClickSix();
  showHorse();
  showAutoClickSeven();
  show3DParrot();
  showTiger();
  showBull();
  $("#number-of-clicks").text("You have " + points + " points");
};

var owlClicked = function () {
  clickPoints += 275;
  $("#click-points").text("Click points: " + clickPoints);
  points += 275;
  showAutoClickSix();
  showHorse();
  showAutoClickSeven();
  show3DParrot();
  showTiger();
  showBull();
  $("#number-of-clicks").text("You have " + points + " points");
};

var horseClicked = function () {
  clickPoints += 475;
  $("#click-points").text("Click points: " + clickPoints);
  points += 475;
  showAutoClickSeven();
  show3DParrot();
  showTiger();
  showBull();
  $("#number-of-clicks").text("You have " + points + " points");
};

var parrotClicked = function () {
  clickPoints += 625;
  $("#click-points").text("Click points: " + clickPoints);
  points += 625;
  showTiger();
  showBull();
  $("#number-of-clicks").text("You have " + points + " points");
};

var tigerClicked = function () {
  clickPoints += 840;
  $("#click-points").text("Click points: " + clickPoints);
  points += 840;
  showBull();
  $("#number-of-clicks").text("You have " + points + " points");
};

var bullClicked = function () {
  clickPoints += 1100;
  $("#click-points").text("Click points: " + clickPoints);
  points += 1100;
  $("#number-of-clicks").text("You have " + points + " points");
};

$("#reset-points").on("click", function () {
  window.location.assign(window.location.href); //Refreshes the page and all the values are cleared
});

$("#auto-click").on("click", function () {
  increaseAutoClick();
  showAutoClick();
});

$("#auto-click-2").on("click", function () {
  increaseAutoClickTwo();
  showAutoClickTwo();
  showAutoClick();
});

$("#auto-click-3").on("click", function () {
  increaseAutoClickThree();
  showAutoClickThree();
  showAutoClickTwo();
  showAutoClick();
});

$("#auto-click-4").on("click", function () {
  increaseAutoClickFour();
  showAutoClickFour();
  showAutoClickThree();
  showAutoClickTwo();
  showAutoClick();
});

$("#auto-click-5").on("click", function () {
  increaseAutoClickFive();
  showAutoClickFive();
  showAutoClickFour();
  showAutoClickThree();
  showAutoClickTwo();
  showAutoClick();
});

$("#auto-click-6").on("click", function () {
  increaseAutoClickSix();
  showAutoClickSix();
  showAutoClickFive();
  showAutoClickFour();
  showAutoClickThree();
  showAutoClickTwo();
  showAutoClick();
});

$("#auto-click-7").on("click", function () {
  increaseAutoClickSeven();
  showAutoClickSeven();
  showAutoClickSix();
  showAutoClickFive();
  showAutoClickFour();
  showAutoClickThree();
  showAutoClickTwo();
  showAutoClick();
});

$("#plane").on("click", function () {
  planeClicked();
});

$("#boat").on("click", function () {
  boatClicked();
});

$("#bird").on("click", function () {
  birdClicked();
});

$("#wolf").on("click", function () {
  wolfClicked();
});

$("#dragon").on("click", function () {
  dragonClicked();
});

$("#fighter-jet").on("click", function () {
  fighterJetClicked();
});

$("#t-rex").on("click", function () {
  tRexClicked();
});

$("#fiery-dragon").on("click", function () {
  fieryDragonClicked();
});

$("#3d-swan").on("click", function () {
  swanClicked();
});

$("#owl").on("click", function () {
  owlClicked();
});

$("#horse").on("click", function () {
  horseClicked();
});

$("#parrot").on("click", function () {
  parrotClicked();
});

$("#tiger").on("click", function () {
  tigerClicked();
});

$("#bull").on("click", function () {
  bullClicked();
});