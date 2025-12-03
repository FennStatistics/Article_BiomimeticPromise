const textObj = {
   // introduction phase
   greetings: `
   <header>
   <div class="row">
   <div class="column2">
   <h2>Vielen Dank für Ihre Teilnahme an einer Studie der Allgemeinen Psychologie der Universität Freiburgs!</h2>
 </div>
   <div class="column">
   <img src="static/UniFreiburg_logo.png" alt="UniFreiburg_logo" style="width:70%; max-height: 150px; max-width: 150px;">
   </div>
 </div> 
 </header>
 
 
 
 <main class="content-horizontal-center content-vertical-center">
   <div class="w-xl text-justify">
       <i> Wichtiger Hinweis im Voraus: Sie können den Text und die Bilder der Studie jederzeit vergrößern oder verkleinern, damit Sie diese besser lesen können: </i>
       <ul>
           <li>
           Windows: Halten Sie die <kbd>Strg</kbd> Taste gedrückt und bewegen Sie Ihr Mausrad oder drücken Sie die <kbd>+</kbd> oder <kbd>-</kbd> Taste auf Ihrer Tastatur
           </li>
           <li>
               Mac: Halten Sie die <kbd>command</kbd> Taste gedrückt und bewegen Sie Ihr Mausrad oder drücken Sie die <kbd>+</kbd> oder <kbd>-</kbd> Taste auf Ihrer Tastatur
               </li>
       </ul>
       <br>
       <br>
<section>
    Mit unserer Forschung möchten wir ein besseres Verständnis des menschlichen Verhaltens und der mentalen Prozesse erlangen. Zu diesem Zweck wird in der folgenden Studie Ihr Verhalten gemessen (z. B. Entscheidungen, Reaktionszeiten, ob Sie den Vollbildmodus verlassen haben).
</section>
<br>
<section>
    Die Dauer der Studie beträgt <b>ungefähr 10 Minuten</b>. Bitte verwenden Sie für die Studie einen <strong>Computer oder Laptop mit Tastatur</strong>. Bitte stellen Sie sicher, dass Sie ungestört an der Studie teilnehmen können. Zunächst möchten wir Sie bitten, auf der folgenden Seite der Einverständniserklärung zuzustimmen.
</section>

   </div>
 </main>
 
 <form id="page-form">
 </form>
 
 <footer class="content-vertical-center content-horizontal-right">
   Um mit der Studie fortzufahren, drücken Sie bitte auf &nbsp;
   <button id="continue" type="submit" form="page-form">
       Weiter &rarr;
   </button>
 </footer>
   `,
   informCon: `
   <header>
   <h2>Informierte Einwilligung</h2>
 </header>
 
 <main class="content-horizontal-center content-vertical-center">
   <div class="w-xl text-left">
       <section>
Im Folgenden erhalten Sie Informationen zu Ihrer Teilnahme an der Evaluation. Bitte lesen Sie diese sorgfältig durch:
       </section>
       <br>
       <section>
Ihre Teilnahme an der  Evaluation ist freiwillig. Sie können Ihre Einwilligung zur Teilnahme jederzeit und ohne Angabe von Gründen widerrufen. Sie können Ihre Zustimmung zur Speicherung der Daten bis zum Ende der Datenerhebung widerrufen, ohne dass Ihnen dadurch Nachteile entstehen.
       </section>
       <br>
       <section>
Da keine personenbezogenen Daten erhoben werden, ist es nach Abschluss der Datenerhebung grundsätzlich nicht mehr möglich, die Daten des Datensatzes mit Ihrer Person in Verbindung zu bringen - der Datensatz ist anonym. Es ist uns nicht möglich, Ihre Daten selektiv zu löschen.
       </section>
       <br>
       <section>
Die Ergebnisse und Daten dieser Evaluation können im Rahmen zukünftiger Publikationen verwendet werden. Dies geschieht in anonymisierter Form, d.h. ohne dass die Daten einer bestimmten Person zugeordnet werden können. Sollten Sie jetzt oder nach der Abfrage Fragen haben, wenden Sie sich bitte an 
Julius Fenn (<a href="mailto:julius.fenn@psychologie.uni-freiburg.de">julius.fenn@psychologie.uni-freiburg.de</a>).
       </section>
       <br>
       <br>
       <br>
       <form id="page-form" style="display: block;" autocomplete="off">
           <!-- BEGIN multiple choice -->
           <div class="page-item page-item-radio" id="page-item-ques_dummycam">
               <p class="text-left font-weight-bold" style="margin: 1rem 0 0.25rem">
               Bitte wählen Sie eine der folgenden Optionen:
               </p>
               <p class="small text-muted hide-if-empty" style="margin: 0.25rem 0">
               Die Ablehnung der aufgeklärten Einwilligung führt zur Beendigung der Studie.
               </p>
 
               <table class="table-plain page-item-table">
                   <colgroup>
                       <col style="width: 7.5%">
                       <col style="width: 92.5%">
                   </colgroup>
                   <tbody>
                       <!--ans1-->
                       <tr>
                           <td>
                               <input type="radio" name="dummy_informedconsent" value="1" id="dummy_informedconsent"
                                   required>
                           </td>
                           <td>
                               <label for="dummy_informedconsent" class="text-left">
                               Hiermit bestätige ich, dass ich die oben beschriebenen Teilnehmerinformationen verstanden habe und den oben genannten Teilnahmebedingungen <strong>zustimme</strong>.
                               </label>
                           </td>
                       </tr>
                       <!--ans2-->
                       <tr>
                           <td>
                               <input type="radio" name="dummy_informedconsent" value="0" id="dummy_informedconsent2"
                                   required>
                           </td>
                           <td>
                               <label for="dummy_informedconsent2" class="text-left">
                               Hiermit bestätige ich, dass ich die oben beschriebenen Teilnehmerinformationen verstanden habe und den oben genannten Teilnahmebedingungen <strong>nicht zustimme</strong>.
                               </label>
                           </td>
                       </tr>
 
                   </tbody>
               </table>
           </div>
           <!-- END multiple choice -->
       </form>
   </div>
 </main>
 
 <form id="page-form">
 </form>
 
 <footer class="content-vertical-center content-horizontal-right">
   <button id="continue" type="submit" form="page-form">
       Weiter &rarr;
   </button>
 </footer>
   `,
   informConNo: `
   <header></header>
   <main class="content-horizontal-center content-vertical-center">
   <div class="w-l text-justify">
   <section>
       Sie haben der aufgeklärten Einwilligung nicht zugestimmt. Leider bedeutet das, dass die Studie für Sie beendet ist. Sie können
       jetzt den Bildschirm schließen. Drücken Sie die <kbd>Esc</kbd>-Taste, um den Vollbildmodus zu beenden.
   </section>
   </div>
   </main>   
   `,
   exclusionCriteria: `
   <header>
   <h2>Vielen Dank für die Zustimmung zu den Teilnahmebedingungen.</h2>
</header>

<main class="content-horizontal-center content-vertical-center">
   <div class="w-xl text-justify">
       <section>
           Bevor wir beginnen, möchten wir Ihre Aufmerksamkeit auf die folgenden Regeln während der Online-Studie lenken:
       </section>
       <br>
       <ul>
           <li>Bitte beantworten Sie die Studie konzentriert.</li>
           <li>Verlassen Sie den Browserbildschirm der Studie nicht, es sei denn, Sie werden ausdrücklich dazu aufgefordert.</li>
           <li>Bitte lesen Sie alle Anweisungen sorgfältig durch und halten Sie diese ein.</li>
       </ul>
<br>
<br>
Uns ist die Qualität unserer Umfragedaten wichtig. Um ein möglichst genaues Bild Ihrer Meinung zu erhalten, ist es wichtig, dass Sie alle Fragen in dieser Umfrage sorgfältig beantworten.
<br>
<form id="page-form">
<!-- siehe: https://www.qualtrics.com/blog/attention-checks-and-data-quality/ -->
<!-- Mehrfachauswahl + Textfeld -->
<div class="page-item page-item-radio" id="page-item-ques_dummycam">
<p class="text-left font-weight-bold" style="margin: 1rem 0 0.25rem">
Verpflichten Sie sich, in dieser Umfrage wohlüberlegte Antworten zu geben?
</p>
<p class="text-left small text-muted hide-if-empty" style="margin: 0.25rem 0">
</p>

<table class="table-plain page-item-table">
  <colgroup>
    <col style="width: 7.5%">
    <col style="width: 92.5%">
  </colgroup>
<tbody>
<!--ans1-->
<tr>
<td>
  <input type="radio" name="commCheck" value="0" id="commCheck" required="">
</td>
<td>
  <label for="commCheck" class="text-left">
  Ich kann weder das eine noch das andere versprechen
  </label>
</td>
</tr>
<!--ans2-->
<tr>
<td>
  <input type="radio" name="commCheck" value="1" id="commCheck2" required="">
</td>
<td>
  <label for="commCheck2" class="text-left">
  Ja, werde ich
     </label>
</td>
</tr>
<tr>
<td>
  <input type="radio" name="commCheck" value="2" id="commCheck3" required="">
</td>
<td>
  <label for="commCheck3" class="text-left">
  Nein, werde ich nicht
     </label>
</td>
</tr>
</tbody>
</table>
</div>
<!-- ENDE Mehrfachauswahl + Textfeld -->


   </div>
</main>

</form>

<footer class="content-vertical-center content-horizontal-right">
   <button id="continue" type="submit" form="page-form">
       Weiter &rarr;
   </button>
</footer>
   `,



   // !!! adjust if using START
   attentionCheck: `
   <header>
     <h2>Before starting the study we would like to get to know you:</h2>
   </header>
   
   <main class="content-horizontal-center content-vertical-center">
   <div class="w-xl text-justify">
 <section>
 Most modern theories of decision-making recognize the fact that decisions do not take place in a vacuum. Individual preferences and knowledge, along with situational variables, 
 can greatly impact the decision process. To facilitate our research on attitudes towards emerging technologies, we are interested in knowing certain factors about you, 
 the decision-maker. Specifically, we are interested in whether you take the time to read the instructions; if not, then some of the specific characteristics of 
 the described emerging technologies can be overlooked. So, to demonstrate that you have read the instructions, please ignore the sports items below and instead 
 select the box marked "other" and type "I read the instructions" in the text box, then click continue. Thank you very much.
 </section>
 <br>
 <br>
 <section >
 <b>Which of these activities do you engage in regularly?</b>
 <br>
 Please check all that apply.
 <br>
 <fieldset id="checkArray"  style="text-align: left; padding: 5px;">
   <div>
     <input type="checkbox" id="attCheck_Skiing" name="attCheck_Skiing">
     <label for="attCheck_Skiing">Skiing</label>
   </div>
   <div>
     <input type="checkbox" id="attCheck_Swimming" name="attCheck_Swimming">
     <label for="attCheck_Swimming">Swimming</label>
   </div>
   <div>
   <input type="checkbox" id="attCheck_Soccer" name="attCheck_Soccer">
   <label for="attCheck_Soccer">Soccer</label>
 </div>
 <div>
 <input type="checkbox" id="attCheck_Tennis" name="attCheck_Tennis">
 <label for="attCheck_Tennis">Tennis</label>
 </div>
 <div>
 <input type="checkbox" id="attCheck_Snowboarding" name="attCheck_Snowboarding">
 <label for="attCheck_Snowboarding">Snowboarding</label>
 </div>
 <div>
 <input type="checkbox" id="attCheck_Basketball" name="attCheck_Basketball">
 <label for="attCheck_Basketball">Basketball</label>
 </div>
 <div>
 <input type="checkbox" id="attCheck_Jogging" name="attCheck_Jogging">
 <label for="attCheck_Jogging">Jogging</label>
 </div>
 <div>
 <input type="checkbox" id="attCheck_Cycling" name="attCheck_Cycling">
 <label for="attCheck_Cycling">Cycling</label>
 </div>
 <div>
 <input type="checkbox" id="attCheck_Pingpong" name="attCheck_Pingpong">
 <label for="attCheck_Pingpong">Ping-pong</label>
 </div>
 <div>
 <input type="checkbox" id="attCheck_Other" name="attCheck_Other">
 <label for="attCheck_Other">Other</label>
 <input type="text" id="attCheck_OtherText" name="attCheck_OtherText"></input>
 </fieldset>
 </div>
 </section>
 <br>
   </div>
 </main>
 
 
   <form id="page-form"> 
   </form>
   
   <footer class="content-vertical-center content-horizontal-right">
     <button id="continue" form="page-form" onclick="return continueornot();">
     Continue &rarr;
     </button>
   </footer>
   `,
      // !!! adjust if using END
   setupStudy: `
   <header>
     <h2>Nachdem Sie nun jeweils 5 Assoziationen genannt haben zu Technologien, die nachhaltig bzw. inspiriert von der Natur sind, bitten wir Sie nun um folgendes:</h2>
 </header>
 
<main class="content-horizontal-center content-vertical-center">
    <div class="w-xl text-justify">
    <section>
      <strong>Links</strong> sehen Sie Ihre Assoziationen zu nachhaltigen Technologien. <strong>Rechts</strong> sind Ihre Assoziationen zu naturinspirierten Technologien dargestellt.
      <br><br>
      Bitte klicken Sie auf die grauen Felder, um Verbindungen zwischen den Begriffen in der linken und rechten Spalte herzustellen – immer dann, wenn Sie einen inhaltlichen oder konzeptionellen Zusammenhang erkennen.
      <br><br>
      Falls Sie eine Verbindung versehentlich herstellen, können Sie diese durch einen Klick auf die entsprechende Linie wieder entfernen.
      <br><br>
      Sie können mehrere Verbindungen erstellen, müssen aber nicht alle Begriffe miteinander verknüpfen. Wählen Sie nur die Kombinationen aus, die für Sie sinnvoll erscheinen.
    </section>
    <br>
    <section>
      Sobald Sie Ihre Verbindungen hergestellt haben, klicken Sie bitte auf „Weiter“.
      <br><br>
      Falls Sie keine sinnvollen Verbindungen erkennen, können Sie nach 30 Sekunden dennoch fortfahren, indem Sie auf „Weiter“ klicken.
    </section>
  </div>
</main>

<form id="page-form">
</form>

<footer class="content-vertical-center content-horizontal-right">
  <button id="continue" type="submit" form="page-form">
    Weiter &rarr;
  </button>
</footer>
   `,
   // ################### Affective Imagery ###################
  AffectiveImageryInst: `
<header>
  <h2>Anleitung "Wortassoziationsspiel"</h2>
</header>

<main class="content-horizontal-center content-vertical-center">
  <div class="w-xl text-justify">
      <strong>So funktioniert es...</strong>
      <section>
          Oben auf dem Bildschirm wird ein Wort angezeigt. Geben Sie das erste Wort ein, das Ihnen in den Sinn kommt, wenn Sie dieses Wort lesen.
      </section>
      <br>
      <section>
              Verwenden Sie die <kbd>Enter</kbd>-Taste oder drücke den <button style="padding:2px; margin-left:0px; margin-right: 0px; font-size: 20px;" disabled="disabled">Nächste Antwort</button>, 
              um fünf Assoziationen/ Gedanken einzugeben. Hierbei sollen sich die <strong>Assoziationen auf Technologien beziehen</strong>, die eine bestimmte Eigenschaft haben.
      </section>
      <br>
      <br>
      <strong>Tipp</strong>
      <section>
          Geben Sie nur Assoziationen zu dem Wort oben auf dem Bildschirm ein (nicht zu Ihren vorherigen Antworten!).
      </section>
  </div>
</main>
<form id="page-form">
</form>

<footer class="content-vertical-center content-horizontal-right">
  <button id="continue" type="submit" form="page-form">
      Weiter &rarr;
  </button>
</footer>

  `,
   AffectiveImageryInst_full: `
   <header>
   <h2>Instructions "Word Association Game" </h2>
 </header>
 
 <main class="content-horizontal-center content-vertical-center">
   <div class="w-xl text-justify">
       <strong>How it works...</strong>
       <section>
           On the top of the screen a word will be shown. Enter the first word that comes to your mind when reading that
           word. Only if you really don't know that word, press <button
               style="padding:2px; margin-left:0px; margin-right: 0px;" disabled="disabled">Unknown word</button>.
       </section>
       <br>
       <section>
           Press <button style="padding:2px; margin-left:0px; margin-right: 0px;" disabled="disabled">Next
               response</button> to add up to five words or press <button
               style="padding:2px; margin-left:0px; margin-right: 0px;" disabled="disabled">No more
               entries</button> if you can't think of any more.
               <br>
               <br>
               Use the <kbd>Enter</kbd> key or press the <button style="padding:2px; margin-left:0px; margin-right: 0px;" disabled="disabled;>Next
               response</button> button to add associations.
       </section>
       <br>
       <br>
       <strong>  Some hints</strong>
       <section>
           Only give associations to the word on top of the screen (not to your previous responses!).
       </section>
   </div>
 </main>
 <form id="page-form">
 </form>
 
 <footer class="content-vertical-center content-horizontal-right">
   <button id="continue" type="submit" form="page-form">
       Continue &rarr;
   </button>
 </footer>
   `,
   AffectiveImagery: `
   <main class="content-horizontal-center content-vertical-center">
   <div>
       Was sind die ersten Gedanken oder Bilder, die Ihnen in den Sinn kommen, wenn Sie <strong>Technologien</strong> denken, die:
       <br>
       <br>
 <div style="align-items: display: flex;"> <strong style="font-size: 22px;">
      <span id="cueWord" style="font-size: 30px;">replace me</span>
 </strong>
 </div>
 <br>
     <form id="affectiveImageryForm">
       <div class="affectiveImagery">
           <div class="form-group">
               <input id="R1" name="R1" class="form-control" placeholder="Geben Sie Ihre erste Assoziation ein." type="text"
                   autocorrect="off" autocapitalize="none" autofocus autocomplete="off" tabindex="1">
           </div>
           <div class="form-group">
               <input id="R2" name="R2" class="form-control" placeholder="" type="text" autocorrect="off"
                   autocapitalize="none" autofocus="" autocomplete="off" tabindex="2" disabled="">
           </div>
           <div class="form-group">
               <input id="R3" name="R3" class="form-control" placeholder="" type="text" autocorrect="off"
                   autocapitalize="none" autofocus="" autocomplete="off" tabindex="3" disabled="">
           </div>
           <div class="form-group">
               <input id="R4" name="R4" class="form-control" placeholder="" type="text" autocorrect="off"
                   autocapitalize="none" autofocus="" autocomplete="off" tabindex="4" disabled="">
           </div>
           <div class="form-group">
               <input id="R5" name="R5" class="form-control" placeholder="" type="text" autocorrect="off"
                   autocapitalize="none" autofocus="" autocomplete="off" tabindex="5" disabled="">
           </div>
 
           <small class="text-muted" id="progressLabel">Fortschritt</small>
         
           <div class="progress" style="background: white;">
             <div class="progress-bar-AffectiveImg" style="background: #229954;"> 
           </div>
         </div>
 
 
         <div style="align-items: display: flex;">
         <!-- Prevent implicit submission of the form -->
         <button type="submit" disabled style="display: none" aria-hidden="true"></button>
       
               <button type="button" class="btn btn-default" tabindex="-1" id="submitAssoButton"><span
                       class="glyphicon glyphicon-plus"></span>&nbsp;Nächste Antwort</button>
               <button type="submit" class="btn btn-default" tabindex="-1" id="finalResponse"><span
                       class="glyphicon glyphicon-ok" form="affectiveImageryForm"></span>&nbsp;Beenden Sie die Eingabe</button>
               <button type="submit" class="btn btn-default" tabindex="-1" id="skipResponse"><span
                       class="glyphicon glyphicon-minus" form="affectiveImageryForm"></span>&nbsp;No more entries</button>
               <button type="submit" class="btn btn-default" tabindex="-1" id="unknownResponse"><span
                       class="glyphicon glyphicon-remove" form="affectiveImageryForm"></span>&nbsp;Unknown word</button>
           </div>
       </div>
   </form>
   </div>
   
 </main>
   `,
relationTask:`
   <header>
<h2>Verbinden Sie Assoziationen, wo Sie einen Zusammenhang erkennen:</h2>
 </header>
 <main>
  <div class="mainRelationTask">
    <!-- Left Column -->
    <div class="columnRelationTask" id="leftColumn">
      <div class="wordRelationTask">Technologien, die <strong>nachhaltig</strong> sind:</div>
      <div class="boxRelationTask" id="s1">XXX</div>
      <div class="boxRelationTask" id="s2">XXX</div>
      <div class="boxRelationTask" id="s3">XXX</div>
      <div class="boxRelationTask" id="s4">XXX</div>
      <div class="boxRelationTask" id="s5">XXX</div>
    </div>

    <!-- Middle Background for Connections -->
    <div class="middle-space" id="middleSpace"></div>

    <!-- Right Column -->
    <div class="columnRelationTask" id="rightColumn">
      <div class="wordRelationTask">Technologien, die <strong>inspiriert von der Natur</strong> sind:</div>
      <div class="boxRelationTask" id="b1">YYY</div>
      <div class="boxRelationTask" id="b2">YYY</div>
      <div class="boxRelationTask" id="b3">YYY</div>
      <div class="boxRelationTask" id="b4">YYY</div>
      <div class="boxRelationTask" id="b5">YYY</div>
    </div>
  </div>

 </main>
  <form id="page-form"> 

   <footer class="content-vertical-center content-horizontal-right">
Unabhängig, ob Sie eine Verbindungen zwischen den Assoziationen sehen oder nicht, können Sie in 30 Sekunden auf "Weiter" klicken: &nbsp;
   <button id="continue" type="submit" form="page-form">
     Weiter &rarr;
   </button>
 </footer>
  </form>

`, relationTaskFeedback:`
<header>
  <h2>
Bitte begründen Sie warum Sie folgende Assoziationen miteinander verbunden haben:
  </h2>
  <h5>Beschreiben Sie dabei in wenigen Worten, warum Sie diese beiden Begriffe miteinander assoziieren.</h5>
</header>


<main class="content-horizontal-center content-vertical-center">
<div class="w-xl text-justify" style="display: block">
  

  <form id="demography">
  <table id="feedback-table">
    <colgroup>
      <col style="width: 55%">
      <col style="width: 45%">
    </colgroup>
    <!-- Rows will be dynamically added here -->
  </table>
    </form>
</div>
</main>


<footer class="content-vertical-center content-horizontal-right">
Sie können in 20 Sekunden auf "Weiter" klicken: &nbsp;
<button id="continue" type="submit" form="demography">
Weiter &rarr;
</button>

</footer>
  `,
  feedbackQues: `
  <header>
    <h2>
    Wenn Sie möchten, beantworten Sie bitte kurz die letzten zwei Frage:
    </h2>
  </header>
  
  <main class="content-horizontal-center content-vertical-center" >
  <div class="w-xl">
    <form id="page-form" style="display: block;" autocomplete="off">
<!-- multiline text text --> 
<div class="page-item page-item-textarea" id="page-item-feedback_critic">
  <p class="text-left font-weight-bold" style="margin: 1rem 0 0.25rem">
Können wir aus Ihrer Sicht, die Aufgabe in der Sie Assoziationen verbinden sollten, verbessern? 
  </p>
  <p class="text-left small text-muted hide-if-empty" style="margin: 0.25rem 0">
  Jegliche Kritik oder Verbesserungsvorschläge helfen uns sehr, diese Aufgabe technisch und inhaltlich zu verbessern.
  </p>
  <textarea name="feedback_critic_relTask" class="w-100" rows="4"></textarea>
</div>
<!-- END multiline text --> 



<!-- multiline text text --> 
<div class="page-item page-item-textarea" id="page-item-feedback_critic">
  <p class="text-left font-weight-bold" style="margin: 1rem 0 0.25rem">
  Haben Sie Feedback oder Kritik an der Online-Studie?
  </p>
  <p class="text-left small text-muted hide-if-empty" style="margin: 0.25rem 0">
  Jegliche Kritik oder Verbesserungsvorschläge helfen uns sehr, zukünftige Studien zu verbessern.
  </p>
  <textarea name="feedback_critic_general" class="w-100" rows="4"></textarea>
</div>
<!-- END multiline text --> 
     
    </form>
  </div> 
</main>
  
  <footer class="content-vertical-center content-horizontal-right">
  <button id="continue" type="submit" form="page-form">
  Weiter &rarr;
</button>
</footer>
  `,
}