var points = 0
$("#number-of-clicks").text("You have " + points + " points")

var showTwoPoints = function () {
  if (points >= 50) {
    $("#add-point").hide()
    $("#add-2-points").show()
  } else {
    $("#add-2-points").hide()
  }
}

showAutoClick = function () {
  if (points >= 125) {
    $("#auto-click").show()
  } else {
    $("#auto-click").hide()
  }
}

var showThreePoints = function () {
  if (points >= 500) {
    $("#add-2-points")
    $("#add-3-points").show()
  } else {
    $("#add-3-points").hide()
  }
}

var showFourPoints = function () {
  if (points >= 1300) {
    $("#add-3-points")
    $("#add-4-points").show()
  } else {
    $("#add-4-points").hide()
  }
}

var showFivePoints = function () {
  if (points >= 1725) {
    $("#add-4-points")
    $("#add-5-points").show()
  } else {
    $("#add-5-points").hide()
  }
}

showTwoPoints()
showAutoClick()
showThreePoints()
showFourPoints()
showFivePoints()

var increaseAutoClick = function () {
  points -= 125
  $("#number-of-clicks").text("You have " + points + " points")
  showAutoClick()

  setInterval(function () {
    points += 1
    $("#number-of-clicks").text("You have " + points + " points")
  }, 1000)
}

var click = function () {
  points += 1
  $("#number-of-clicks").text("You have " + points + " points")
}

var twoClicks = function () {
  points += 2
  $("#number-of-clicks").text("You have " + points + " points")
}

var threeClicks = function () {
  points += 3
  $("#number-of-clicks").text("You have " + points + " points")

}

var fourClicks = function () {
  points += 4
  $("#number-of-clicks").text("You have " + points + "points")

}

var fiveClicks = function () {
  points += 5
  $("#number-of-clicks").text("You have " + points + "points")
}


$("#add-point").on("click", function () {
  showTwoPoints()
  showThreePoints()
  showFourPoints()
  showFivePoints()
  showAutoClick()
  click()
})

$("#add-2-points").on("click", function () {
  showThreePoints()
  showFourPoints()
  showFivePoints()
  twoClicks()
  showAutoClick()
})

$("#add-3-points").on("click", function () {
  showFourPoints()
  showFivePoints()
  threeClicks()
})

$("#add-4-points").on("click", function () {
  showFivePoints()
  fourClicks()
})

$("#add-5-points").on("click", function () {
  fiveClicks()
})

$("#reset-game").on("click", function () {
  window.location.assign(window.location.href)
})

$("#auto-click").on("click", function () {
  increaseAutoClick()
})

      