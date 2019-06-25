var points = 0
$("#number-of-clicks").text("You have " + points + " points")

var showTwoPoints = function () {
  if (points >= 50) {
    $("#add-2-points").show()
  } else {
    $("#add-2-points").hide()
  }
}

var showThreePoints = function () {
  if (points >= 500) {
    $("#add-3-points").show()
  } else {
    $("#add-3-points").hide()
  }
}

var showFourPoints = function () {
  if (points >= 1300) {
    $("#add-4-points").show()
  } else {
    $("#add-4-points").hide()
  }
}

showTwoPoints()
showThreePoints()
showFourPoints()

var click = function() {
 $("#number-of-clicks").text("You have " + points + " points")
 points += 1
}

var twoClicks = function() {
 $("#number-of-clicks").text("You have " + points + " points")
 points += 2
}

var threeClicks = function() {
 $("#number-of-clicks").text("You have " + points + " points")
 points += 3
}

var fourClicks = function() {
 $("#number-of-clicks").text("You have " + points + "points")
 points += 4
}

$("#add-point").on("click", function() {
 showTwoPoints()
 showThreePoints()
 click()
})

$("#add-2-points").on("click", function() {
 showThreePoints()
 showFourPoints()
 twoClicks()
})

$("#add-3-points").on("click", function() {
 showFourPoints()
 threeClicks()
})

$("#add-4-points").on("click", function() {
fourClicks()
})

$("#reset-game").on("click", function() {
 window.location.assign(window.location.href)
})
