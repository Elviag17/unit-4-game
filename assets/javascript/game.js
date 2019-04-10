$(document).ready(function () {

    var ranNum = 0;
    var crystalOne = 0;
    var crystalTwo = 0;
    var crystalThree = 0;
    var crystalFour = 0;
    var sum = 0;
    var total = 0;
    var losses = 0;
    var wins = 0;


    // Generates number to guess
    function generateNum() {
        ranNum = Math.floor((Math.random() * 100) + 19)
        $("#random-number").text(ranNum);
    }

    //Random numbers for crystals
    function crystalNumOne() {
        crystalOne = Math.floor((Math.random() * 11) + 1);
        $("#image1").attr("value", crystalOne);
        console.log($("#image1").attr("value"));

    }
    function crystalNumTwo() {
        crystalTwo = Math.floor((Math.random() * 12) + 1);
        $("#image2").attr("value", crystalTwo);
        console.log($("#image2").attr("value"));
    }
    function crystalNumThree() {
        crystalThree = Math.floor((Math.random() * 11) + 1);
        $("#image3").attr("value", crystalThree);
        console.log($("#image3").attr("value"));
    }

    function crystalNumFour() {
        crystalFour = Math.floor((Math.random() * 11) + 1);
        $("#image4").attr("value", crystalFour);
        console.log($("#image4").attr("value"));

    }

    //Reset function when players wins / loses
    function newGame() {
        total = 0;
        totalScore();
        generateNum();
        crystalNumOne();
        crystalNumTwo();
        crystalNumThree();
        crystalNumFour();

    }

    //Writes into html the updated losses
    function totalLosses() {
        $("#loss").text("Losses: " + losses);
    }

    //Writes into html the updated wins
    function totalWins() {
        $("#win").text("Wins: " + wins);
    }
    //Writes into html the updated total score
    function totalScore() {
        $("#total-score").text(total);
    }

    newGame();

    //Once image is clicked game begins
    $(".img").click(function () {
        sum = $(this).attr("value");
        sum = parseInt(sum)
        total += sum
        totalScore();
        $("#my_audio").get(0).play();


        if (total === ranNum) {
            wins++;
            newGame();
            totalWins();
        }
        else if (total != ranNum && total >= ranNum) {
            losses++
            newGame();
            totalLosses();
        }
        else {

        }



    })


});