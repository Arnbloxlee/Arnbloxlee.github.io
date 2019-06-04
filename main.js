var points = 0;

var increaseAutoClick = function() {
  $("#number-of-clicks").text("You have " + points + " points")
  points += 1
  var autoClick = setInterval(function() {
    $("#number-of-clicks").text("You have " + points + " points")
    points += 1
  }, 1000)
}


var increaseAutoClickTwo = function() {
  $("#number-of-clicks").text("You have " + points + " points")
  points += 3
  var autoClick = setInterval(function() {
    $("#number-of-clicks").text("You have " + points + " points")
    points += 3
  }, 1000)
}

var increaseAutoClickThree = function() {
  $("#number-of-clicks").text("You have " + points + " points")
  points += 4
  var autoClick = setInterval(function() {
    $("#number-of-clicks").text("You have " + points + " points")
    points += 4
  }, 1000)
}

var increaseAutoClickFour = function() {
  $("#number-of-clicks").text("You have " + points + " points")
  points += 7
  var autoClick = setInterval(function() {
    $("#number-of-clicks").text("You have " + points + " points")
    points += 7
  }, 1000)
}

var click = function() {
  $("#number-of-clicks").text("You have " + points + " points")
  points += 1
  showTwoPoints()
  showAutoClick()
  showAutoClickTwo()

}

var twoClicks = function() {
  $("#number-of-clicks").text("You have " + points + " points")
  points += 2
  showThreePoints()
  showAutoClick()
  showAutoClickTwo()
}

var threeClicks = function() {
  $("#number-of-clicks").text("You have " + points + " points")
  points += 3
  showFourPoints()
  showAutoClickTwo()
}

var fourClicks = function() {
  $("#number-of-clicks").text("You have " + points + " points")
  points += 4
  showFivePoints()
}

var fiveClicks = function() {
  $("#number-of-clicks").text("You have " + points + " points")
  points += 5
  showTenPoints()
}

var tenClicks = function() {
  $("#number-of-clicks").text("You have " + points + " points")
  points += 10
  showAutoClickThree()
  showTwentyPoints()
}

var twentyClicks = function() {
  $("#number-of-clicks").text("You have " + points + " points")
  points += 20
  showThirtyPoints()
}

var thirtyClicks = function() {
  $("#number-of-clicks").text("You have " + points + " points")
  points += 30
  showEightyPoints()
}

var eightyClicks = function() {
  $("#number-of-clicks").text("You have " + points + " points")
  points += 80
  showOneHundredTwentyPoints()
}

var oneHundredTwentyClicks = function() {
  $("#number-of-clicks").text("You have " + points + " points")
  points += 120
  showTwoHundredPoints()
}

var twoHundredClicks = function() {
  $("#number-of-clicks").text("You have " + points + " points")
  points += 200
  showAutoClickFour()
}

$("#reset-points").on("click", function() {
  points = 0
  $("#number-of-clicks").text("You have " + points + " points")
  $("#auto-click").hide()
  $("#add-two-points").hide()
  $("#add-three-points").hide()
  $("#auto-click-two").hide()
  $("#add-four-points").hide()
  $("#add-five-points").hide()
  $("#add-ten-points").hide()
  $("#auto-click-three").hide()
  $("#add-twenty-points").hide()
  $("#add-thirty-points").hide()
  $("#add-eighty-points").hide()
  $("#add-onehundredtwenty-points").hide()
  $("#add-twohundred-points").hide()
  $("#auto-click-four").hide()
  window.location.assign(window.location.href); //Refreshes the page and all the values are cleared

})

var autoClickCounter = 0
$("#auto-click").on("click", function() {
  autoClickCounter++
  if(autoClickCounter > 1) {
    alert("Don't Spam Auto Clicks!")
  } else {
    increaseAutoClick()
  }
})

var autoClickCounterTwo = 0
$("#auto-click-two").on("click", function() {
  autoClickCounterTwo++
  if(autoClickCounterTwo > 1) {
    alert("Don't Spam Auto Clicks!")
  } else {
    increaseAutoClickTwo()
  }
})

var autoClickCounterThree = 0
$("#auto-click-three").on("click", function() {
  autoClickCounterThree++
  if (autoClickCounterThree > 1) {
    alert("Don't Spam Auto Clicks!")
  } else {
    increaseAutoClickThree()
  }
})

var autoClickCounterFour = 0
$("#auto-click-four").on("click", function() {
  autoClickCounterFour++
  if (autoClickCounterFour > 1) {
    alert("Don't Spam Auto Clicks!")
  } else {
    increaseAutoClickFour()
  }
})

$("#add-point").on("click", function() {
  click()
})

$("#add-two-points").on("click", function() {
  twoClicks()
})

$("#add-three-points").on("click", function() {
  threeClicks()
})

$("#add-four-points").on("click", function() {
  fourClicks()
})

$("#add-five-points").on("click", function() {
  fiveClicks()
})

$("#add-ten-points").on("click", function() {
  tenClicks()
})

$("#add-twenty-points").on("click", function() {
  twentyClicks()
})

$("#add-thirty-points").on("click", function() {
  thirtyClicks()
})

$("#add-eighty-points").on("click", function() {
  eightyClicks()
})

$("#add-onehundredtwenty-points").on("click", function() {
  oneHundredTwentyClicks()
})

$("#add-twohundred-points").on("click", function() {
  twoHundredClicks()
})

//These functions decide if the origami images(including auto clicks) are going to be shown or not
var showTwoPoints = function() {
  if (points > 50) {
    $("#add-two-points").show()
  } else {
    $("#add-two-points").hide()
  }
}

var showAutoClick = function() {
  if (points > 100) {
    $("#auto-click").show()
  } else {
    $("#auto-click").hide()
  }
}

var showThreePoints = function() {
  if (points > 500) {
    $("#add-three-points").show()
  } else {
    $("#add-three-points").hide()
  }
}

var showAutoClickTwo = function() {
  if (points > 1000) {
    $("#auto-click-two").show()
  } else {
    $("#auto-click-two").hide()
  }
}

var showFourPoints = function() {
  if (points > 1300) {
    $("#add-four-points").show()
  } else {
    $("#add-four-points").hide()
  }
}

var showFivePoints = function() {
  if (points > 2000) {
    $("#add-five-points").show()
  } else {
    $("#add-five-points").hide()
  }
}

var showTenPoints = function() {
  if (points > 4000) {
    $("#add-ten-points").show()
  } else {
    $("#add-ten-points").hide()
  }
}

var showAutoClickThree = function() {
  if (points > 6500) {
    $("#auto-click-three").show()
  } else {
    $("#auto-click-three").hide()
  }
}

var showTwentyPoints = function() {
  if (points > 10000) {
    $("#add-twenty-points").show()
  } else {
    $("#add-twenty-points").hide()
  }
}

var showThirtyPoints = function() {
  if (points > 18000) {
    $("#add-thirty-points").show()
  } else {
    $("#add-thirty-points").hide()
  }
}

var showEightyPoints = function() {
  if (points > 30000) {
    $("#add-eighty-points").show()
  } else {
    $("#add-eighty-points").hide()
  }
}

var showOneHundredTwentyPoints = function() {
  if (points > 52000) {
    $("#add-onehundredtwenty-points").show()
  } else {
    $("#add-onehundredtwenty-points").hide()
  }
}

var showTwoHundredPoints = function() {
  if (points > 100000) {
    $("#add-twohundred-points").show()
  } else {
    $("#add-twohundred-points").hide()
  }
}

var showAutoClickFour = function() {
  if (points > 150000) {
    $("#auto-click-four").show()
  } else {
    $("#auto-click-four").hide()
  }
}

showTwoPoints()
showAutoClick()
showThreePoints()
showAutoClickTwo()
showFourPoints()
showFivePoints()
showTenPoints()
showAutoClickThree()
showTwentyPoints()
showThirtyPoints()
showEightyPoints()
showOneHundredTwentyPoints()
showTwoHundredPoints()
showAutoClickFour()
