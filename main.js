var my_test = document.getElementById("my-text")

setTimeout(start, 0);

function start() {
    setInterval(increase, 1000);
}

var i = 0;
function increase() {
      if (i < 1000) {
        i++;
        let j = i % 3 + 1; 
        let points = ".".repeat(j)
        my_test.innerText = "Under development" + points;
      }
      if (i == 20) {
          console.log("reach");
          var a_link = document.createElement("a");
          a_link.innerHTML = "link";
          a_link.classList.add("inner-word");
          a_link.classList.add("hide");
          a_link.href = "https://www.facebook.com/ikaminyou/";
          console.log(a_link)
          document.getElementById("main-wrapper").appendChild(a_link);
          console.log("L")
      }
  }