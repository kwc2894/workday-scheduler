  
  //global time variables to cocatinate the time to the header
  var currentDay = moment().format("dddd LL");
  $("#currentDay").append(currentDay);
  var currentTime = moment().format("LT");
  $("#currentTime").append(currentTime);
  
  //time variable to retrieve the hours and compare it to what hours have passed in the day or not
  var now = new Date().getHours();

  //input and save variables for 9am
    var input_textarea = document.querySelector("#comment9am");
    var output_div = document.querySelector("#comment9am");
    var save_button = document.querySelector("#button9am");
  //event eventListener to save the 9am changes
    save_button.addEventListener("click", function(){
        updateOutput(output_div, input_textarea, "content");
        output_div.textContent = localStorage.getItem("content");
        input_textarea.value = localStorage.getItem("content");
    })
    //input and save variables for 10am
    var input_textarea2 = document.querySelector("#comment10am");
    var output_div2 = document.querySelector("#comment10am");
    var save_button2 = document.querySelector("#button10am");
    //event eventListener to save the 10am changes
    save_button2.addEventListener("click", function(){
        updateOutput(output_div2, input_textarea2, "content2");
        output_div2.textContent = localStorage.getItem("content2");
        input_textarea2.value = localStorage.getItem("content2");
    })
    //input and save variables for 11am
    var input_textarea3 = document.querySelector("#comment11am");
    var output_div3 = document.querySelector("#comment11am");
    var save_button3 = document.querySelector("#button11am");
    //event eventListener to save the 11am changes
    save_button3.addEventListener("click", function(){
        updateOutput(output_div3, input_textarea3, "content3");
        output_div3.textContent = localStorage.getItem("content3");
        input_textarea3.value = localStorage.getItem("content3");
    })
    //input and save variables for 12pm
    var input_textarea4 = document.querySelector("#comment12pm");
    var output_div4 = document.querySelector("#comment12pm");
    var save_button4 = document.querySelector("#button12pm");
    //event eventListener to save the 12pm changes  
    save_button4.addEventListener("click", function(){
        updateOutput(output_div4, input_textarea4, "content4");
        output_div4.textContent = localStorage.getItem("content4");
        input_textarea4.value = localStorage.getItem("content4");
    })
    //input and save variables for 1pm
    var input_textarea5 = document.querySelector("#comment1pm");
    var output_div5 = document.querySelector("#comment1pm");
    var save_button5 = document.querySelector("#button1pm");
     //event eventListener to save the 12pm changes
    save_button5.addEventListener("click", function(){
        updateOutput(output_div5, input_textarea5, "content5");
        output_div5.textContent = localStorage.getItem("content5");
        input_textarea5.value = localStorage.getItem("content5");
    })
     //input and save variables for 2pm
    var input_textarea6 = document.querySelector("#comment2pm");
    var output_div6 = document.querySelector("#comment2pm");
    var save_button6 = document.querySelector("#button2pm");
    //event eventListener to save the 2pm changes
    save_button6.addEventListener("click", function(){
        updateOutput(output_div6, input_textarea6, "content6")
        output_div6.textContent = localStorage.getItem("content6");
        input_textarea6.value = localStorage.getItem("content6");
    })
    //input and save variables for 3pm
    var input_textarea7 = document.querySelector("#comment3pm");
    var output_div7 = document.querySelector("#comment3pm");
    var save_button7 = document.querySelector("#button3pm");
    //event eventListener to save the 3pm changes
    save_button7.addEventListener("click", function(){
        updateOutput(output_div7, input_textarea7, "content7")
        output_div7.textContent = localStorage.getItem("content7");
        input_textarea7.value = localStorage.getItem("content7");
    })
    //input and save variables for 4pm
    var input_textarea8 = document.querySelector("#comment4pm");
    var output_div8 = document.querySelector("#comment4pm");
    var save_button8 = document.querySelector("#button4pm");
    //event eventListener to save the 4pm changes
    save_button8.addEventListener("click", function(){         
    updateOutput(output_div8, input_textarea8, "content8");
    output_div8.textContent = localStorage.getItem("content8");
    input_textarea8.value = localStorage.getItem("content8");
    })
    //input and save variables for 5pm
    var input_textarea9 = document.querySelector("#comment5pm");
    var output_div9 = document.querySelector("#comment5pm");
    var save_button9 = document.querySelector("#button5pm");
    //event eventListener to save the 5pm changes
    save_button9.addEventListener("click", function(){
    updateOutput(output_div9, input_textarea9, "content9");
    output_div9.textContent = localStorage.getItem("content9");
    input_textarea9.value = localStorage.getItem("content9");
    })
  
    //function with various conditionals that assigns the style class colors based on the current time comparing the global variable to the various times listed
  function availiableTimes() {
    if (now > 9) {
      $("#comment9am").addClass("past");
    } else if (now >= 9 && now < 10) {
      $("#comment9am").addClass("present");
    } else if (now < 9) {
      $("#comment9am").addClass("future");
    }
    if (now > 10) {
      $("#comment10am").addClass("past");
    } else if (now >= 10 && now < 11) {
      $("#comment10am").addClass("present");
    } else if (now < 10) {
      $("#comment10am").addClass("future");
    }
    if (now > 11) {
      $("#comment11am").addClass("past");
    } else if (now >= 11 && now < 12) {
      $("#comment11am").addClass("present");
    } else if (now < 11) {
      $("#comment11am").addClass("future");
    }
    if (now > 12) {
      $("#comment12pm").addClass("past");
    } else if (now >= 12 && now < 13) {
      $("#comment12pm").addClass("present");
    } else if (now < 12) {
      $("#comment12pm").addClass("future");
    }
    if (now > 13) {
      $("#comment1pm").addClass("past");
    } else if (now >= 13 && now < 14) {
      $("#comment1pm").addClass("present");
    } else if (now < 13) {
      $("#comment1pm").addClass("future");
    }
    if (now > 14) {
      $("#comment2pm").addClass("past");
    } else if (now >= 14 && now < 15) {
      $("#comment2pm").addClass("present");
    } else if (now < 14) {
      $("#comment2pm").addClass("future");
    }
    if (now > 15) {
      $("#comment3pm").addClass("past");
    } else if (now >= 15 && now < 16) {
      $("#comment3pm").addClass("present");
    } else if (now < 15) {
      $("#comment3pm").addClass("future");
    }
    if (now > 16) {
      $("#comment4pm").addClass("past");
    } else if (now >= 16 && now < 17) {
      $("#comment4pm").addClass("present");
    } else if (now < 16) {
      $("#comment4pm").addClass("future");
    }
    if (now > 17) {
      $("#comment5pm").addClass("past");
    } else if (now >= 17 && now < 18) {
      $("#comment5pm").addClass("present");
    } else if (now < 17) {
      $("#comment5pm").addClass("future");
    }
  }

  //Update method to save the text to localstorage and return to the user what they did at the top of the list of times.
  function updateOutput(output_content, inputContent, contentString) {
    var updateelement = document.querySelector(".status");
    updateelement.setAttribute("style", "display: block;")
    updateelement.textContent = "updated event to " + inputContent.value;
    localStorage.setItem(contentString, inputContent.value);
    output_content.textContent = inputContent.value
    console.log(inputContent.value);
  }

//the main method which calls the color code and everything else to operate the save and structure
window.onload = function(){
  availiableTimes();
}