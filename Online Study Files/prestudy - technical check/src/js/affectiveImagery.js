/* 
Affective Imagery: 
*/
var AIT_cue_visibile = "placeholder"; // set cue for AIT task
var AIT_cue = "placeholder"; // set cue for AIT task

var boolSkipAffectImgInstruction = false;
var boolSkipAffectImgRating = false; // true if no associations are entered, here "false" because forcing participants to enter associations !!!

const AffectiveImageryInst_htmlForm = new lab.html.Form({
  title: "AIT Instructions",
  content: textObj.AffectiveImageryInst,
  tardy: true,
  skip: "${boolSkipAffectImgInstruction}",
  messageHandlers: {
    commit: () => {
      // progress bar
      numElementsCounter++;
      document.querySelector(".progress-bar").style.width =
        (numElementsCounter / numElements) * 100 + "%";
    },
  },
});

var unsucsessfulAssociations = [];
var sucsessfulAssociations = [];

const AffectiveImagery_htmlForm = new lab.html.Form({
  title: "AIT Task associations",
  content: textObj.AffectiveImagery,
  messageHandlers: {
    run: () => {
      // overwrite cue word by loop parameter
      AIT_cue_visibile = study.options.datastore.get("cue");
      $("#cueWord").html(AIT_cue_visibile);

      AIT_cue = study.options.datastore.get("cue_coding");
      $("#unknownResponse").hide(); // hide unknown response message to force participants to enter associations !!!

      boolSkipAffectImgInstruction = true; // skip instruction page after first run

      var timesClicked = 1;
      const placeholderLabel = ["zweite", "dritte", "vierte", "fünfte"];

      $(function () {
        $("#skipResponse").hide();
        $("#finalResponse").hide();

        $("#R1").attr("name", AIT_cue + "_" + "R1");
        $("#R2").attr("name", AIT_cue + "_" + "R2");
        $("#R3").attr("name", AIT_cue + "_" + "R3");
        $("#R4").attr("name", AIT_cue + "_" + "R4");
        $("#R5").attr("name", AIT_cue + "_" + "R5");

        // restrict keydown event to affectiveImageryForm
        $("#affectiveImageryForm").keydown(function (e) {
          if (e.keyCode == 13) {
            // Enter key
            if (timesClicked <= 4) {
              $("#submitAssoButton").click();
              $(document).unbind("keypress");
              return false;
            }
            if (timesClicked == 5) {
              $("#finalResponse").click();
              return false;
            }
          }
        });

        //$(document).on('#finalResponse mouseout',".click", () => {
        $("#submitAssoButton, #finalResponse").on("click", () => {
          // increase counter

          var currentElement = "#R" + timesClicked;
          var nextElement = "#R" + (timesClicked + 1);

          // only if letters entered continue
          if (
            document
              .querySelector(currentElement)
              .value.replace(/[^a-zA-Z]+/g, "").length > 2
          ) {
            // console.log("currentElement: ", currentElement);
            sucsessfulAssociations.push({
              cue: study.options.datastore.get("cue_coding"),
              response: document.querySelector(currentElement).value,
            });
            // set skip to false:
            boolSkipAffectImgRating = false;

            $("#unknownResponse").hide();
            //$("#skipResponse").show();
            $("#skipResponse").hide(); // hide skip response message to force participants to enter 5 associations !!!

            if (currentElement != "#R5") {
              // change placeholder
              document.querySelector(nextElement).placeholder =
                "Geben Sie Ihre " +
                placeholderLabel[timesClicked - 1] +
                " Assoziation ein.";
              // set disabled to true or false
              document.querySelector(currentElement).disabled = true;
              document.querySelector(nextElement).disabled = false;
            }

            // adjust prograss bar of affective imagery
            document.querySelector(".progress-bar-AffectiveImg").style.width =
              (timesClicked / 5) * 100 + "%";

            timesClicked++;

            // focus on next element
            $(nextElement).focus();

            if (timesClicked == 5) {
              $("#submitAssoButton").hide();
              $("#finalResponse").show();
            }
          } else {
            unsucsessfulAssociations.push({
              cue: study.options.datastore.get("cue_coding"),
              response: document.querySelector(currentElement).value,
            });


            document.querySelector(currentElement).value = "";
            toastr.warning(
              "Bitte geben Sie für jedes Wort mindestens drei Buchstaben ein und drücken Sie dann 'Nächste Antwort' oder 'Enter'.",
              "Bitte geben Sie alle fünf Assoziationen ein, die Ihnen in den Sinn kommen.",
              {
                closeButton: true,
                timeOut: 3000,
                positionClass: "toast-top-center",
                preventDuplicates: true,
              }
              /*
                "Click on next response or Enter if you have entered a word (use letters).",
              "Please enter at least one word or unknow if you do not know the word.",
              */
            );
          }
        });
      });
    },
    commit: () => {
      console.log("unsucsessfulAssociations: ", unsucsessfulAssociations);
      // progress bar
      numElementsCounter++;
      document.querySelector(".progress-bar").style.width =
        (numElementsCounter / numElements) * 100 + "%";
    },
  },
});

const AffectiveImageryAffect_htmlForm = new lab.html.Page({
  title: "AIT Task ratings",
  tardy: true,
  skip: "${boolSkipAffectImgRating}",
  items: [
    {
      required: true,
      type: "likert",
      items: [
        {
          label: "entry1",
          coding: "AR1",
        },
        {
          label: "entry2",
          coding: "AR2",
        },
        {
          label: "entry3",
          coding: "AR3",
        },
        {
          label: "entry4",
          coding: "AR4",
        },
        {
          label: "entry5",
          coding: "AR5",
        },
      ],
      width: "7",
      anchors: [
        "very negative",
        "negative",
        "somewhat negative",
        "neutral",
        "somewhat positive",
        "positive",
        "very positive",
      ],
      label: `Please indicate to what extent you perceive your mentioned thoughts or images about "<strong id ="cueWord_rating">XXX</strong>" as positive or negative:`,
      help: "Read each of your thoughts or images and then mark the answer option that most applies.",
      shuffle: true,
      name: "${AIT_cue}",
    },
  ],
  submitButtonText: "Continue →",
  submitButtonPosition: "right",
  width: "l",
  messageHandlers: {
    run: function anonymous() {
      $("#cueWord_rating").html(AIT_cue_visibile);

      $("td.small:contains('entry1')").html(
        study.options.datastore.get(AIT_cue + "_" + "R1")
      );
      $("td.small:contains('entry2')").html(
        study.options.datastore.get(AIT_cue + "_" + "R2")
      );
      $("td.small:contains('entry3')").html(
        study.options.datastore.get(AIT_cue + "_" + "R3")
      );
      $("td.small:contains('entry4')").html(
        study.options.datastore.get(AIT_cue + "_" + "R4")
      );
      $("td.small:contains('entry5')").html(
        study.options.datastore.get(AIT_cue + "_" + "R5")
      );

      // adjust size of scale
      document.querySelectorAll("div")[0].classList = ["text-left"];
      document.querySelectorAll("main")[1].classList = ["w-xl"];
      document.querySelectorAll(".page-item-table colgroup")[0].innerHTML = `
      <col style=\"width: 65%\">
      <col style=\"width: 5%\">
      <col style=\"width: 5%\">
      <col style=\"width: 5%\">
      <col style=\"width: 5%\">
      <col style=\"width: 5%\">
      <col style=\"width: 5%\">
      <col style=\"width: 5%\">
      `;

      // remove empty elements
      if ($(".page-item-table > tbody > tr > td")[32].innerText.length == 0) {
        $(".page-item-table > tbody > tr")[4].remove();
      }
      if ($(".page-item-table > tbody > tr > td")[24].innerText.length == 0) {
        $(".page-item-table > tbody > tr")[3].remove();
      }
      if ($(".page-item-table > tbody > tr > td")[16].innerText.length == 0) {
        $(".page-item-table > tbody > tr")[2].remove();
      }
      if ($(".page-item-table > tbody > tr > td")[8].innerText.length == 0) {
        $(".page-item-table > tbody > tr")[1].remove();
      }
      if ($(".page-item-table > tbody > tr > td")[0].innerText.length == 0) {
        $(".page-item-table > tbody > tr")[0].remove();
      }

      // collect paradata
      paracountclicks = 0;
      document.querySelectorAll("input").forEach((item) => {
        item.addEventListener("click", (event) => {
          paracountclicks++;
          console.log("input clicked", paracountclicks);
        });
      });
    },
    end: function anonymous() {
      // collect paradata
      let numberitems = document.querySelectorAll("tbody tr").length;
      paracountclicks -= numberitems;
      study.options.datastore.set("para_countclicks", paracountclicks);
    },
  },
  commit: () => {
    // progress bar
    numElementsCounter++;
    document.querySelector(".progress-bar").style.width =
      (numElementsCounter / numElements) * 100 + "%";
  },
});
