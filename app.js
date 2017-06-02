
$("form").submit(function(event) {
  event.preventDefault();

var textForm = $('.js-text-form')

//got rid of hidden class
var textReport = $('.js-text-report');
textReport.removeClass('hidden');


var totalWordCount = $('#user-text').val().split(" ").length
$('.js-word-count').text(totalWordCount);


var totalWords = $('#user-text').val().split(" ")
console.log(totalWords)


var listOfUniqueWords = []
totalWords.forEach(function(word){ 
if (!listOfUniqueWords.includes(word)) {

listOfUniqueWords.push(word)

}

}) 


var uniqueWordCount = listOfUniqueWords.length
$('.js-unique-word-count').text(uniqueWordCount);
console.log(uniqueWordCount)



var characterTotal = $("#user-text").val().replace(/ /g, "").length
var averageWordLength = characterTotal /totalWordCount
$('.js-average-word-length').text(averageWordLength);

});
