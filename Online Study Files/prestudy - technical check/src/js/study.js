/* number of components / elements to set slider */
const numElements = 13; // 8+5
var numElementsCounter = 0; // 8
/* general global variables */
var URLparams_global;

var paracountclicks = 0;

/* 
################### introduction phase ###################
*/
const Greetings_htmlForm = new lab.html.Form({
  title: "Greetings",
  content: textObj.greetings,
  messageHandlers: {
    run: function anonymous() {
      if (typeof jatos.jQuery === "function") {
        if (
          study.state.meta.screen_height < 700 &&
          study.state.meta.screen_width < 1200
        ) {
          alert(
            "It seems that your screen size you are using is smaller than 1200x700 pixels (height x width):\n" +
              "> your screen width: " +
              study.state.meta.screen_width +
              " your screen height: " +
              study.state.meta.screen_height +
              "\nStudy is aborted!"
          );
          jatos.abortStudy("study aborted - screen to small");
        }
      }
    },
    commit: () => {
      // progress bar
      numElementsCounter++;
      document.querySelector(".progress-bar").style.width =
        (numElementsCounter / numElements) * 100 + "%";

      // get URL params
      if (typeof jatos.jQuery === "function") {
        URLparams_global = jatos.urlQueryParameters;
        console.log("URLparams_global:", URLparams_global);

        // check if a prolific ID is provided via URL parameter PROLIFIC study
        if (typeof URLparams_global.PROLIFIC_PID === "undefined") {
          alert(
            "Sorry, there may be a technical error! It was not possible to obtain all the necessary data from prolific. Please write to the study director that an error has occurred."
          );
          jatos.abortStudy("study aborted - no prolific ID");
        } else {
          study.options.datastore.set(
            "PROLIFIC_PID",
            URLparams_global.PROLIFIC_PID
          );
        }
      }
    },
  },
});

const InformCon_htmlForm = new lab.html.Form({
  title: "InformedConsent",
  content: textObj.informCon,
  messageHandlers: {
    commit: function anonymous() {
      // progress bar
      numElementsCounter++;
      document.querySelector(".progress-bar").style.width =
        (numElementsCounter / numElements) * 100 + "%";

      if (typeof jatos.jQuery === "function") {
        // If JATOS is available, send data there
        var resultJson = study.options.datastore.exportJson();
        console.log("result data sent to JATOS first time");
        jatos
          .submitResultData(resultJson)
          .then(() => console.log("success"))
          .catch(() => console.log("error"));
      }
    },
  },
});

const InformConsentNO_htmlForm = new lab.html.Form({
  title: "InformedConsentNO",
  content: textObj.informConNo,
  tardy: true,
  skip: "${ study.state.dummy_informedconsent == 1}",
  messageHandlers: {
    run: function anonymous() {
      // progress bar
      document.querySelector(".progress-bar").style.width = 100 + "%";
    },
  },
});

const ExclusionCriteria_htmlForm = new lab.html.Form({
  title: "ExclusionCriteria",
  content: textObj.exclusionCriteria,
  messageHandlers: {
    commit: () => {
      // progress bar
      numElementsCounter++;
      document.querySelector(".progress-bar").style.width =
        (numElementsCounter / numElements) * 100 + "%";
    },
  },
});

// Attention Check (not used)
function continueornot() {
  if ($("fieldset :checkbox:checked").length > 0) {
    // ok
    return true;
  } else {
    alert("Please check at least one of these activities.");
    return false;
  }
}

const AttentionCheck_htmlForm = new lab.html.Form({
  title: "AttentionCheck",
  content: textObj.attentionCheck,
  messageHandlers: {
    commit: () => {
      var attCheck_array = [];
      $("fieldset :checkbox").each(function () {
        if (this.checked) {
          attCheck_array.push(this.id);
        }
      });
      attCheck_array;

      study.options.datastore.set("attCheck_array", attCheck_array);
      study.options.datastore.set(
        "attCheck_text",
        $("#attCheck_OtherText").val()
      );

      // progress bar
      numElementsCounter++;
      document.querySelector(".progress-bar").style.width =
        (numElementsCounter / numElements) * 100 + "%";
    },
  },
});

const SetupStudy_htmlForm = new lab.html.Form({
  title: "SetupStudy",
  content: textObj.setupStudy,
  messageHandlers: {
    commit: () => {
      // progress bar
      numElementsCounter++;
      document.querySelector(".progress-bar").style.width =
        (numElementsCounter / numElements) * 100 + "%";

      if (typeof jatos.jQuery === "function") {
        // If JATOS is available, send data there
        var resultJson = study.options.datastore.exportJson();
        console.log("result data sent to JATOS second time");
        jatos
          .submitResultData(resultJson)
          .then(() => console.log("success"))
          .catch(() => console.log("error"));
      }
    },
  },
});
/* 
################### Affective Imagery ###################
*/
const Sequence_AIT = new lab.flow.Sequence({
  title: "Sequence Affective Imagery",
  shuffle: false,
  content: [
    AffectiveImageryInst_htmlForm,
    AffectiveImagery_htmlForm,
    // AffectiveImageryAffect_htmlForm,
  ],
});

const loopAIT = new lab.flow.Loop({
  template: Sequence_AIT,
  templateParameters: [
    {
      cue: '<strong style="font-size: 36px;">nachhaltig</strong> sind',
      cue_coding: "sustainable",
    },
    {
      cue: '<strong style="font-size: 36px;">inspiriert von der Natur</strong> sind',
      cue_coding: "bioinspired",
    },
  ],
  sample: {
    mode: "draw-shuffle",
    n: "2",
  },
});

/* 
################### Relation Task ###################
*/
var connectionsData = [];

let jsPlumbInstance = null;
const RelationTask_htmlForm = new lab.html.Form({
  title: "Relation Task",
  content: textObj.relationTask,
  messageHandlers: {
    run: () => {
      // track time when component starts
      const componentStartTime = Date.now();

      // hide button for 30 seconds
      document.querySelector("button").style.visibility = "hidden";
      setTimeout(
        () => (document.querySelector("button").style.visibility = "visible"),
        30000 // 30000 (30 seconds)
      );

      // save associations arrays
      study.options.datastore.set(
        "unsucsessfulAssociations",
        unsucsessfulAssociations
      );
      study.options.datastore.set(
        "sucsessfulAssociations",
        sucsessfulAssociations
      );

      // populate the boxes with the right associations
      /*
      sucsessfulAssociations = [
        { cue: "bioinspired", response: "aaa1" },
        { cue: "bioinspired", response: "aaa2" },
        { cue: "bioinspired", response: "aaa3" },
        { cue: "bioinspired", response: "aaa4" },
        { cue: "bioinspired", response: "aaa5" },
        { cue: "sustainable", response: "bbb1" },
        { cue: "sustainable", response: "bbb2" },
        { cue: "sustainable", response: "bbb3" },
        { cue: "sustainable", response: "bbb4" },
        { cue: "sustainable", response: "bbb5" },
      ];
      */
      function shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
      }

      // Filter and shuffle
      const sustainableResponses = shuffle(
        sucsessfulAssociations
          .filter((item) => item.cue === "sustainable")
          .map((item) => item.response)
      );
      const bioinspiredResponses = shuffle(
        sucsessfulAssociations
          .filter((item) => item.cue === "bioinspired")
          .map((item) => item.response)
      );

      // Populate left column (sustainable)
      for (let i = 0; i < 5; i++) {
        $(`#s${i + 1}`).text(sustainableResponses[i]);
      }

      // Populate right column (bioinspired)
      for (let i = 0; i < 5; i++) {
        $(`#b${i + 1}`).text(bioinspiredResponses[i]);
      }

      jsPlumb.ready(function () {
        jsPlumbInstance = jsPlumb.getInstance({
          Connector: ["Straight"],
          PaintStyle: { stroke: "black", strokeWidth: 4 },
          HoverPaintStyle: { stroke: "red", strokeWidth: 6 },
          Endpoint: "Dot",
          EndpointStyle: { fill: "black", radius: 6 },
          Anchors: ["Right", "Left"],
          Container: $("body"),
        });

        window.addEventListener("resize", () => {
          jsPlumbInstance.repaintEverything();
        });

        let selected = null;

        $(".boxRelationTask").click(function (e) {
          e.stopPropagation(); // Prevent bubbling to body or other containers
          const currentId = this.id;

          if (!selected) {
            selected = this;
            $(this).addClass("selected");
          } else {
            if (selected.id !== currentId) {
              const selectedIsLeft = $.contains($("#leftColumn")[0], selected);
              const clickedIsLeft = $.contains($("#leftColumn")[0], this);

              // Prevent connections on same side
              if (selectedIsLeft === clickedIsLeft) {
                $(".boxRelationTask").removeClass("selected");
                selected = null;
                return;
              }

              let leftEl = selectedIsLeft ? selected : this;
              let rightEl = selectedIsLeft ? this : selected;

              const connectionExists = connectionsData.some(
                (conn) =>
                  conn.source === leftEl.id && conn.target === rightEl.id
              );

              if (!connectionExists) {
                const connection = jsPlumbInstance.connect({
                  source: leftEl,
                  target: rightEl,
                  anchors: ["Right", "Left"],
                });

                connection.bind("click", function () {
                  jsPlumbInstance.deleteConnection(connection);
                  const index = connectionsData.findIndex(
                    (c) =>
                      c.sustainable === leftEl.textContent.trim() &&
                      c.bioinspired === rightEl.textContent.trim()
                  );
                  if (index !== -1) connectionsData.splice(index, 1);
                  console.log(
                    "Connection removed:",
                    leftEl.id,
                    "->",
                    rightEl.id
                  );
                });

                connectionsData.push({
                  sustainable: leftEl.textContent.trim(),
                  bioinspired: rightEl.textContent.trim(),
                  timestampSec: (
                    (Date.now() - componentStartTime) /
                    1000
                  ).toFixed(2), // seconds since component started
                });

                console.log(
                  "Connection made:",
                  leftEl.textContent.trim(),
                  "->",
                  rightEl.textContent.trim()
                );
              }
            }

            $(".boxRelationTask").removeClass("selected");
            selected = null;
          }

          // Reset if clicked anywhere except a .boxRelationTask
          $(document).on("click", function (e) {
            if (!$(e.target).closest(".boxRelationTask").length) {
              $(".boxRelationTask").removeClass("selected");
              selected = null;
            }
          });
        });
      });
    },
    commit: () => {
      // Remove all jsPlumb lines
      if (jsPlumbInstance) {
        jsPlumbInstance.deleteEveryConnection();
        console.log("All jsPlumb connections removed.");
      }

      // save drawn connections
      study.options.datastore.set("drawnConnections", connectionsData);

      // progress bar
      numElementsCounter++;
      document.querySelector(".progress-bar").style.width =
        (numElementsCounter / numElements) * 100 + "%";

      if (typeof jatos.jQuery === "function") {
        // If JATOS is available, send data there
        var resultJson = study.options.datastore.exportJson();
        console.log("result data sent to JATOS second time");
        jatos
          .submitResultData(resultJson)
          .then(() => console.log("success"))
          .catch(() => console.log("error"));
      }
    },
  },
});

/* 
################### >>> Relation Task - Explain Rationale
*/
const RelationTaskFeedback_htmlForm = new lab.html.Form({
  title: "Relation Task Feedback",
  content: textObj.relationTaskFeedback,
  tardy: true,
  skip: "${ connectionsData.length == 0 }",
  messageHandlers: {
    run: () => {
      // hide button for 30 seconds
      document.querySelector("button").style.visibility = "hidden";
      setTimeout(
        () => (document.querySelector("button").style.visibility = "visible"),
        20000 // 20000 (20 seconds)
      );

      // create table
      const table = document.getElementById("feedback-table");

      connectionsData.forEach((conn, index) => {
        const row = document.createElement("tr");
        row.style.height = "80px";

        row.innerHTML = `
          <td class="font-weight-bold text-left">
            Warum haben Sie eine Verbindung zwischen "<strong style="text-decoration: underline">${conn.sustainable}</strong> und <strong style="text-decoration: underline">${conn.bioinspired}</strong>" gezeichnet?
          </td>
          <td>
            <textarea name="rationalCon_${index}" class="w-100" rows="6"></textarea>
          </td>
        `;

        table.appendChild(row);
      });
    },

    commit: () => {
      // Progress bar logic
      numElementsCounter++;
      document.querySelector(".progress-bar").style.width =
        (numElementsCounter / numElements) * 100 + "%";

      // Optionally collect responses here if needed
    },
  },
});

/* 
################### End of Study ###################
*/
// feedback screen
const FeedbackScreen_htmlScreen = new lab.html.Form({
  title: "FeedbackScreen",
  content: textObj.feedbackQues,
  messageHandlers: {
    commit: () => {
      // progress bar
      numElementsCounter++;
      document.querySelector(".progress-bar").style.width =
        (numElementsCounter / numElements) * 100 + "%";

      // save data
      if (typeof jatos.jQuery === "function") {
        // If JATOS is available, send data there
        var resultJson = study.options.datastore.exportJson();
        console.log("result data sent to JATOS second time");
        jatos
          .submitResultData(resultJson)
          .then(() => console.log("success"))
          .catch(() => console.log("error"));
      }
    },
  },
});

// ending screen
const EndingScreen_htmlScreen = new lab.html.Screen({
  title: "EndingScreen",
  tardy: true,
  content: `
<header>
  <h2> Vielen Dank für Ihre Teilnahme! </h2>
</header>

<main class="content-horizontal-center content-vertical-center">
  <div class="w-xl text-justify">
    <br>
    <div>
      <i>Das Experiment endet in wenigen Sekunden und Sie werden automatisch zurück zu Prolific weitergeleitet.</i> 
      <br>
      <br>
      <br>
      Wenn Sie Fragen haben, kontaktieren Sie bitte den Studienleiter Julius Fenn (julius.fenn@psychologie.uni-freiburg.de).
    </div>
</main>

  `,
  timeout: 7000, // 7 seconds
  messageHandlers: {
    run: function anonymous() {
      // progress bar
      numElementsCounter++;
      document.querySelector(".progress-bar").style.width =
        (numElementsCounter / numElements) * 100 + "%";

      // alert(numElementsCounter);
    },
    epilogue: function anonymous() {
      if (typeof jatos.jQuery === "function") {
        // If JATOS is available, send data there
        var resultJson = study.options.datastore.exportJson();
        console.log("my result data sent to JATOS final time");
        jatos
          .submitResultData(resultJson)
          .then(() => console.log("success"))
          .catch(() => console.log("error"));

        // then redirect
        if (
          study.options.datastore.extract("sender").includes("FeedbackScreen")
        ) {
          jatos.endStudyAndRedirect(
            "https://app.prolific.com/submissions/complete?cc=C1HZDB8H", // !!!
            true,
            "everything worked fine"
          );
        } else {
          alert(
            "It seems that you did not go through the entire study because you did not see the previous feedback screen."
          );
          jatos.abortStudy("study aborted - copied submission link");
        }
      }
    },
  },
});

// Define the sequence of components that define the study
const study = new lab.flow.Sequence({
  metadata: {
    title: "livmats MasterLab 2025",
    description: "This is a study description.",
    repository: "",
    contributors: "Julius Fennt",
  },
  plugins: [
    new lab.plugins.Metadata(),
    // new lab.plugins.Fullscreen(),
    // new lab.plugins.Debug(), // comment out finally
    // new lab.plugins.Download()
  ],
  content: [
    // >>> PRE
    Greetings_htmlForm,
    InformCon_htmlForm,
    InformConsentNO_htmlForm,
    ExclusionCriteria_htmlForm,
    // AttentionCheck_htmlForm,

    // >>> Association + Relation Task
    loopAIT,
    SetupStudy_htmlForm,
    RelationTask_htmlForm,
    RelationTaskFeedback_htmlForm,

    // >>> END
    FeedbackScreen_htmlScreen,
    EndingScreen_htmlScreen,
  ],
});

// Start the study (uncomment to run)
if (typeof jatos.jQuery === "function") {
  jatos.onLoad(() => study.run());
} else {
  study.run();
}
