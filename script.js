// init score.
let score = 0;

// plug click event on every button for each container.
$(".container").on("click", "button", function (e) {

    // retrieve parent container.
    var container = $(e.target).closest(".container");

    // check if the checked radio input has the class 'right'.
    if ($(container).find("input:checked").hasClass("right")) { // answer is right
        // display image
        $(container).find("img").show();
        // remove button from the container
        $(container).find("button").remove();
        // replace the radios
        $(container).find(".radio").html('<h2 style="color: green; margin-top: -5px; margin-bottom: 10px;">Correct!</h2>');
        score++;
    } else { // if answer is wrong
        // replace the radios
        $(container).find(".radio").html('<h2 style="color: red; margin-top: -5px; margin-bottom: 10px;">Incorrect</h2>');
    }
});


let scoreBtn = document.querySelector('#results');
scoreBtn.addEventListener('click', scoreCard);

function scoreCard() {
    scoreBtn.remove();
    document.getElementById('final').style.display = "inline";
    document.getElementById('result').style.display = "inline";
    document.getElementById('retake').style.display = "inline";

    let finalScore = document.createElement('p');
    finalScore.innerHTML = 'You got ' + score + ' out of 12 right!';
    document.getElementById('final').appendChild(finalScore);
    // show results
    if (score < 3) {
        let badScore = document.createElement('p');
        badScore.innerHTML = 'Oh. My. God! This is the worst score anyone has ever got. Ever!' + '<img src="images/oh-my-god.gif" width=450 style="margin-top: 20px;">';
        document.getElementById('result').appendChild(badScore);
    } else if ((score >= 3) && (score <= 5)) {
        let avgScore = document.createElement('p');
        avgScore.innerHTML = 'Nooooo! You are definitely this quiz\'s Smelly Cat!' + '<img src="images/nooo.gif" width=450 style="margin-top: 20px;">';
        document.getElementById('result').appendChild(avgScore);
    } else if ((score > 5) && (score < 9)) {
        let goodScore = document.createElement('p');
        goodScore.innerHTML = 'More Friends binging is needed. You and the show have definitely been on a break!' + '<img src="images/break.gif" width=450 style="margin-top: 20px;">';
        document.getElementById('result').appendChild(goodScore);
    } else if ((score >= 9) && (score < 12)) {
        let greatScore = document.createElement('p');
        greatScore.innerHTML = 'How you doin!? You must have some serious Unagi. Hat\'s off!' + '<img src="images/how-you-doin.gif" width=450 style="margin-top: 20px;">';
        document.getElementById('result').appendChild(greatScore);
    } else {
        let perfectScore = document.createElement('p');
        perfectScore.innerHTML = 'Could you BE a bigger Friends fan! Clearly you can\'t get enough dinosaurs. Or Friends trivia. I salute you!' + '<img src="images/clap.gif" width=450 style="margin-top: 20px;">';
        document.getElementById('result').appendChild(perfectScore);
    }    
}


