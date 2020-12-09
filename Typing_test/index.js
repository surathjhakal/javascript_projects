const setOfWords = [
  "The drafts from the regiments at Ticonderoga are a miserable set; indeed the men on board the fleet, in general, are not equal to half their number of good men.",
  "The Democratic and Republican parties each operates as a necessary counterweight in a partnership designed to keep the pendulum of power swinging in perpetuity from the one set of colluding quislings to the other, and back.",
  "I have ever deemed it more honorable and profitable, too, to set a good example than to follow a bad one.",
  "The rendering of useful service is the common duty of mankind, and?only in the purifying fire of sacrifice is the dross of selfishness consumed and the greatness of the human soul set free.",
  "I can never look now at the Milky Way without wondering from which of those banked clouds of stars the emissaries are coming. If you will pardon so commonplace a simile, we have set off the fire alarm and have nothing to do but to wait. I do not think we will have to wait for long.",
  "And so I set these things down before the onset of the first of a thousand small physical degradations as, in a still-distant suburb, Death strides whistling towards me.",
  "We come here with no peaceful intent, but ready for battle, determined to avenge our wrongs and set our country free. Let your masters come and attack us: we are ready to meet them beard to beard.",
  "From the windows of my office in Boston ... I can see the Golden Stairs from Boston Harbor where all eight of my great-grandparents set foot on this great land for the first time. That immigrant spirit of limitless possibility animates America even today.",
  "The long run is a misleading guide to current affairs. In the long run, we are all dead. Economists set themselves too easy, too useless a task if in tempestuous seasons they can only tell us that when the storm is long past the ocean is flat again.",
];

const msg = document.getElementById("msg");
const words = document.getElementById("mywords");
const btn = document.getElementById("btn");
let startTime, endTime;

const playGames = () => {
  const randomNum = Math.floor(Math.random() * setOfWords.length);
  msg.innerText = setOfWords[randomNum];
  let date = new Date();
  startTime = date.getTime();
  btn.innerText = "Done";
};

const endPlay = () => {
  let date = new Date();
  endTime = date.getTime();

  let totalTime = (endTime - startTime) / 1000;

  let totalStr = words.value;
  let word = wordCounter(totalStr);

  let speed = Math.round((word / totalTime) * 60);

  let finalMsg = `You typed total ${word} words in ${totalTime} seconds.
   So your speed writing words per minute is ${speed} words. `;

  finalMsg += compareWord(msg.innerText, totalStr);

  msg.innerText = finalMsg;
};

const compareWord = (str1, str2) => {
  let words1 = str1.split(" ");
  let words2 = str2.split(" ");
  let cnt = 0;

  words1.forEach(function (item, index) {
    if (item === words2[index]) {
      cnt++;
    }
  });
  let errWords = words1.length - cnt;
  return `${cnt} correct out of ${words1.length} words and the total number of error are ${errWords}.`;
};

const wordCounter = (str) => {
  if (str === "" || str === " " || str.split(" ").length == 0) {
    return 0;
  } else {
    let response = str.split(" ").length;
    console.log(response);
    return response;
  }
};

btn.addEventListener("click", function () {
  if (this.innerText == "Start") {
    words.disabled = false;
    words.value = "";
    playGames();
  } else {
    words.disabled = true;
    btn.innerText = "Start";
    endPlay();
  }
});
