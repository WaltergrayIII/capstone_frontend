<template>
<body class="c3po">
  <div class="wrapper">
    <div class="console">
      <h1>POLYGONS OF THE GALAXY</h1>
      <button id="c3po">C3PO</button>
      <button id="stormtrooper">Stormtrooper</button>
      <button id="darthvader">Darth Vader</button>
      <button id="bobafett">Boba Fett</button>
      <button id="imperialguard">Imperial Guard</button>
    </div>

    <div class="stage">
      <div class="main-stage full-width">
        <div class="triangle t-1"></div>
        <div class="triangle t-2"></div>
        <div class="triangle t-3"></div>
        <div class="triangle t-4"></div>
        <div class="triangle t-5"></div>

        <div class="triangle t-6"></div>
        <div class="triangle t-7"></div>
        <div class="triangle t-8"></div>
        <div class="triangle t-9"></div>
        <div class="triangle t-10"></div>

        <div class="triangle t-11"></div>
        <div class="triangle t-12"></div>
        <div class="triangle t-13"></div>
        <div class="triangle t-14"></div>
        <div class="triangle t-15"></div>

        <div class="triangle t-16"></div>
        <div class="triangle t-17"></div>
        <div class="triangle t-18"></div>
        <div class="triangle t-19"></div>
        <div class="triangle t-20"></div>

        <div class="triangle t-21"></div>
        <div class="triangle t-22"></div>
        <div class="triangle t-23"></div>
        <div class="triangle t-24"></div>
        <div class="triangle t-25"></div>

        <div class="triangle t-26"></div>
        <div class="triangle t-27"></div>
        <div class="triangle t-28"></div>
        <div class="triangle t-29"></div>
        <div class="triangle t-30"></div>
      </div>

      <div class="stage-quote full-width">
        <h2 class="quote-c3po">R2-D2, where are you?</h2>
        <h2 class="quote-stormtrooper">These aren't the droids we're looking for</h2>
        <h2 class="quote-darthvader">I find your lack of faith disturbing</h2>
        <h2 class="quote-bobafett">As you wish</h2>
        <h2 class="quote-imperialguard">...</h2>
      </div>
    </div>

    <div class="explore">
      <h2>EXPLORE THE GALAXY</h2>
      <a href="/polygons">
        <button class="active">Episode I</button>
      </a>
      <a href="/polygons2">
        <button>Episode II</button>
      </a>
      <a href="/polygons3">
        <button>Episode III</button>
      </a>
      <a href="/polygons4">
        <button>Episode IV</button>
      </a>
      <a href="/polygons5">
        <button>Episode V</button>
      </a>
    </div>
  </div>
</body>
</template>

<script>
$(document).ready(function() {
  $("#c3po").click(function() {
    $("body").removeClass();
    $("body").addClass("c3po");
  });
  $("#stormtrooper").click(function() {
    $("body").removeClass();
    $("body").addClass("stormtrooper");
  });
  $("#darthvader").click(function() {
    $("body").removeClass();
    $("body").addClass("darthvader");
  });
  $("#bobafett").click(function() {
    $("body").removeClass();
    $("body").addClass("bobafett");
  });
  $("#imperialguard").click(function() {
    $("body").removeClass();
    $("body").addClass("imperialguard");
  });

  setInterval(function() {
    $("body").toggleClass("glimmer");
  }, 3000);
});
</script>

<style scoped>
html,
body.c3po,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  font-size: 100%;
  font: inherit;
  padding: 0;
  border: 0;
  margin: 0;
  vertical-align: baseline;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
.clear {
  clear: both;
}
.sticky {
}
.bypostauthor {
}
.wp-caption {
}
.wp-caption-text {
}
.gallery-caption {
}
.alignright {
}
.alignleft {
}
.aligncenter {
}

textarea:focus,
input:focus {
  outline: none;
}
*:focus {
  outline: none;
}

body {
  width: 100%;
  font-family: Arial;
  -webkit-font-smoothing: antialiased;
  line-height: 1.1;
  background-color: #131313;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0px;
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  font-style: normal;
  line-height: 1.3;
}

h1 {
  font-size: 30px;
}
h2 {
  font-size: 22px;
}
h3 {
  font-size: 18px;
}
h4 {
  font-size: 16px;
}
h5 {
  font-size: 14px;
}
h6 {
  font-size: 12px;
}

.normal {
  font-weight: 400;
}
.semibold {
  font-weight: 600;
}
.bold {
  font-weight: 700;
}

p {
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  line-height: 1.3;
  font-size: 16px;
}

b,
strong {
  font-weight: bold;
}
i {
  font-style: italic;
}
a {
  text-decoration: none;
  color: inherit;
}

input {
  -webkit-appearance: none;
}

.wrapper {
  width: 100%;
  float: left;
}

.full-width {
  width: 100%;
  float: left;
  box-sizing: border-box;
}
.fixed-width {
  width: 940px;
  margin: 0 auto;
  box-sizing: border-box;
}

.explore {
  width: 700px;
  padding: 0 0 30px 0;
  margin: 0 auto;
  text-align: center;
  clear: both;
}
.explore h2 {
  margin: 10px 0;
  font-size: 24px;
  color: #f01e39;
}
.explore button {
  color: #f01e39;
  border: 1px solid #f01e39;
  padding: 5px 10px;
  background: none;
  cursor: pointer;
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  font-size: 16px;
  -moz-transition: 0.2s ease-in-out;
  -o-transition: 0.2s ease-in-out;
  -webkit-transition: 0.2s ease-in-out;
  transition: 0.2s ease-in-out;
}
.explore button:hover,
.explore button.active {
  background: #f01e39;
  color: #131313;
}

.console {
  width: 700px;
  padding: 0 0 30px 0;
  margin: 0 auto;
  text-align: center;
}
.console h1 {
  margin: 10px 0;
  font-size: 50px;
  color: #fac223;
}
.console button {
  color: #fac223;
  border: 1px solid #fac223;
  padding: 5px 10px;
  background: none;
  cursor: pointer;
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  font-size: 16px;
  -moz-transition: 0.2s ease-in-out;
  -o-transition: 0.2s ease-in-out;
  -webkit-transition: 0.2s ease-in-out;
  transition: 0.2s ease-in-out;
}
.console button:hover,
.stormtrooper .console button#stormtrooper,
.c3po .console button#c3po,
.darthvader .console button#darthvader,
.bobafett .console button#bobafett,
.imperialguard .console button#imperialguard {
  background: #fac223;
  color: #131313;
}

.stage {
  width: 500px;
  margin: 0 auto;
}
.main-stage {
  width: 500px;
  height: 500px;
  position: relative;
}

.stage-quote {
  position: relative;
  margin-bottom: 100px;
}
.stage-quote h2 {
  visibility: hidden;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
  text-transform: uppercase;
  font-size: 26px;
  color: #fac223;
  -moz-transition: 2s ease-in-out;
  -o-transition: 2s ease-in-out;
  -webkit-transition: 2s ease-in-out;
  transition: 2s ease-in-out;
}
.stormtrooper .quote-stormtrooper,
.darthvader .quote-darthvader,
.c3po .quote-c3po,
.bobafett .quote-bobafett,
.imperialguard .quote-imperialguard {
  visibility: visible;
  opacity: 1;
}

.triangle {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-clip-path: polygon(0% 0%, 0% 0%, 0% 0%);
}

.t-1 {
  transition: 1.05s ease-out;
}
.t-2 {
  transition: 1.1s ease-out;
}
.t-3 {
  transition: 1.15s ease-out;
}
.t-4 {
  transition: 1.2s ease-out;
}
.t-5 {
  transition: 1.25s ease-out;
}
.t-6 {
  transition: 1.3s ease-out;
}
.t-7 {
  transition: 1.35s ease-out;
}
.t-8 {
  transition: 1.4s ease-out;
}
.t-9 {
  transition: 1.45s ease-out;
}
.t-10 {
  transition: 1.5s ease-out;
}

.t-11 {
  transition: 1.55s ease-out;
}
.t-12 {
  transition: 1.6s ease-out;
}
.t-13 {
  transition: 1.65s ease-out;
}
.t-14 {
  transition: 1.7s ease-out;
}
.t-15 {
  transition: 1.75s ease-out;
}
.t-16 {
  transition: 1.8s ease-out;
}
.t-17 {
  transition: 1.85s ease-out;
}
.t-18 {
  transition: 1.9s ease-out;
}
.t-19 {
  transition: 1.95s ease-out;
}
.t-20 {
  transition: 2s ease-out;
}

.t-21 {
  transition: 2.05s ease-out;
}
.t-22 {
  transition: 2.1s ease-out;
}
.t-23 {
  transition: 2.15s ease-out;
}
.t-24 {
  transition: 2.2s ease-out;
}
.t-25 {
  transition: 2.25s ease-out;
}
.t-26 {
  transition: 2.3s ease-out;
}
.t-27 {
  transition: 2.35s ease-out;
}
.t-28 {
  transition: 2.4s ease-out;
}
.t-29 {
  transition: 2.45s ease-out;
}
.t-30 {
  transition: 2.5s ease-out;
}

.glimmer .t-1,
.glimmer .t-6,
.glimmer .t-11,
.glimmer .t-16,
.glimmer .t-21,
.glimmer .t-26 {
  animation: glimmer 1.5s;
}

.glimmer .t-2,
.glimmer .t-7,
.glimmer .t-12,
.glimmer .t-17,
.glimmer .t-22,
.glimmer .t-27 {
  animation: glimmer 2s;
}

.glimmer .t-3,
.glimmer .t-8,
.glimmer .t-13,
.glimmer .t-18,
.glimmer .t-23,
.glimmer .t-28 {
  animation: glimmer 2.5s;
}

.glimmer .t-4,
.glimmer .t-9,
.glimmer .t-14,
.glimmer .t-19,
.glimmer .t-24,
.glimmer .t-29 {
  animation: glimmer 3s;
}

.glimmer .t-5,
.glimmer .t-10,
.glimmer .t-15,
.glimmer .t-20,
.glimmer .t-25,
.glimmer .t-30 {
  animation: glimmer 3.5s;
}

@keyframes glimmer {
  0% {
    opacity: 1;
  }
  25% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
  }
  75% {
    opacity: 0.8;
  }
  100% {
    opacity: 1;
  }
}

/* Stormtrooper */

.stormtrooper .t-1 {
  -webkit-clip-path: polygon(32% 12%, 50% 8%, 68% 12%);
}
.stormtrooper .t-2 {
  -webkit-clip-path: polygon(32% 12%, 50% 32%, 68% 12%);
}
.stormtrooper .t-3 {
  -webkit-clip-path: polygon(32% 12%, 24% 32%, 50% 32%);
}
.stormtrooper .t-4 {
  -webkit-clip-path: polygon(68% 12%, 50% 32%, 76% 32%);
}
.stormtrooper .t-5 {
  -webkit-clip-path: polygon(21% 32%, 21% 36%, 79% 32%);
}

.stormtrooper .t-6 {
  -webkit-clip-path: polygon(21% 36%, 79% 32%, 79% 36%);
}
.stormtrooper .t-7 {
  -webkit-clip-path: polygon(23% 36%, 23% 59%, 50% 36%);
}
.stormtrooper .t-8 {
  -webkit-clip-path: polygon(50% 36%, 77% 59%, 77% 36%);
}
.stormtrooper .t-9 {
  -webkit-clip-path: polygon(25% 38%, 29% 47%, 44% 38%);
}
.stormtrooper .t-10 {
  -webkit-clip-path: polygon(56% 38%, 75% 38%, 72% 47%);
}

.stormtrooper .t-11 {
  -webkit-clip-path: polygon(19% 37%, 23% 37%, 19% 55%);
}
.stormtrooper .t-12 {
  -webkit-clip-path: polygon(23% 37%, 19% 55%, 23% 55%);
}
.stormtrooper .t-13 {
  -webkit-clip-path: polygon(77% 37%, 77% 55%, 81% 37%);
}
.stormtrooper .t-14 {
  -webkit-clip-path: polygon(81% 37%, 77% 55%, 81% 55%);
}
.stormtrooper .t-15 {
  -webkit-clip-path: polygon(50% 36%, 23% 59%, 77% 59%);
}

.stormtrooper .t-16 {
  -webkit-clip-path: polygon(50% 83%, 28% 59%, 72% 59%);
}
.stormtrooper .t-17 {
  -webkit-clip-path: polygon(23% 59%, 20% 76%, 44% 59%);
}
.stormtrooper .t-18 {
  -webkit-clip-path: polygon(77% 59%, 56% 59%, 80% 76%);
}
.stormtrooper .t-19 {
  -webkit-clip-path: polygon(50% 53%, 35% 65%, 50% 59%);
}
.stormtrooper .t-20 {
  -webkit-clip-path: polygon(50% 53%, 50% 59%, 65% 65%);
}

.stormtrooper .t-21 {
  -webkit-clip-path: polygon(20% 76%, 48% 80%, 35% 65%);
}
.stormtrooper .t-22 {
  -webkit-clip-path: polygon(80% 76%, 52% 80%, 65% 65%);
}
.stormtrooper .t-23 {
  -webkit-clip-path: polygon(20% 76%, 45% 86%, 45% 79%);
}
.stormtrooper .t-24 {
  -webkit-clip-path: polygon(80% 76%, 55% 86%, 55% 79%);
}
.stormtrooper .t-25 {
  -webkit-clip-path: polygon(20% 76%, 35% 93%, 45% 86%);
}

.stormtrooper .t-26 {
  -webkit-clip-path: polygon(80% 76%, 65% 93%, 55% 86%);
}
.stormtrooper .t-27 {
  -webkit-clip-path: polygon(45% 78%, 45% 88%, 55% 78%);
}
.stormtrooper .t-28 {
  -webkit-clip-path: polygon(55% 78%, 55% 88%, 45% 88%);
}
.stormtrooper .t-29 {
  -webkit-clip-path: polygon(30% 86%, 35% 91%, 43% 86%);
}
.stormtrooper .t-30 {
  -webkit-clip-path: polygon(57% 86%, 65% 91%, 70% 86%);
}

.stormtrooper .t-1,
.stormtrooper .t-4,
.stormtrooper .t-15,
.stormtrooper .t-21,
.stormtrooper .t-22 {
  background-color: #f5f5f5;
}

.stormtrooper .t-2,
.stormtrooper .t-7,
.stormtrooper .t-8,
.stormtrooper .t-16,
.stormtrooper .t-23,
.stormtrooper .t-26 {
  background-color: #e8e8e8;
}

.stormtrooper .t-3,
.stormtrooper .t-17,
.stormtrooper .t-18,
.stormtrooper .t-24,
.stormtrooper .t-25 {
  background-color: #dcdcdc;
}

.stormtrooper .t-5,
.stormtrooper .t-12,
.stormtrooper .t-13,
.stormtrooper .t-19,
.stormtrooper .t-27,
.stormtrooper .t-29,
.stormtrooper .t-30 {
  background-color: #585858;
}

.stormtrooper .t-6,
.stormtrooper .t-9,
.stormtrooper .t-10,
.stormtrooper .t-11,
.stormtrooper .t-14,
.stormtrooper .t-20,
.stormtrooper .t-28 {
  background-color: #252525;
}

/* Darth Vader */

.darthvader .t-1 {
  -webkit-clip-path: polygon(33% 12%, 50% 7%, 67% 12%);
}
.darthvader .t-2 {
  -webkit-clip-path: polygon(33% 12%, 50% 56%, 67% 12%);
}
.darthvader .t-3 {
  -webkit-clip-path: polygon(33% 12%, 23% 40%, 44% 40%);
}
.darthvader .t-4 {
  -webkit-clip-path: polygon(67% 12%, 56% 40%, 77% 40%);
}
.darthvader .t-5 {
  -webkit-clip-path: polygon(23% 40%, 5% 75%, 14% 83%);
}

.darthvader .t-6 {
  -webkit-clip-path: polygon(77% 40%, 95% 75%, 86% 83%);
}
.darthvader .t-7 {
  -webkit-clip-path: polygon(23% 40%, 19% 59%, 38% 40%);
}
.darthvader .t-8 {
  -webkit-clip-path: polygon(62% 40%, 81% 59%, 77% 40%);
}
.darthvader .t-9 {
  -webkit-clip-path: polygon(18% 59%, 32% 72%, 32% 46%);
}
.darthvader .t-10 {
  -webkit-clip-path: polygon(82% 59%, 68% 46%, 68% 72%);
}

.darthvader .t-11 {
  -webkit-clip-path: polygon(18% 59%, 15% 77%, 32% 72%);
}
.darthvader .t-12 {
  -webkit-clip-path: polygon(82% 59%, 85% 77%, 68% 72%);
}
.darthvader .t-13 {
  -webkit-clip-path: polygon(38% 40%, 50% 56%, 44% 40%);
}
.darthvader .t-14 {
  -webkit-clip-path: polygon(56% 40%, 50% 56%, 62% 40%);
}
.darthvader .t-15 {
  -webkit-clip-path: polygon(38% 40%, 32% 46%, 48% 53%);
}

.darthvader .t-16 {
  -webkit-clip-path: polygon(62% 40%, 52% 53%, 68% 46%);
}
.darthvader .t-17 {
  -webkit-clip-path: polygon(32% 46%, 32% 63%, 50% 56%);
}
.darthvader .t-18 {
  -webkit-clip-path: polygon(68% 46%, 50% 56%, 68% 63%);
}
.darthvader .t-19 {
  -webkit-clip-path: polygon(32% 46%, 50% 56%, 48% 53%);
}
.darthvader .t-20 {
  -webkit-clip-path: polygon(68% 46%, 52% 53%, 50% 56%);
}

.darthvader .t-21 {
  -webkit-clip-path: polygon(32% 63%, 50% 56%, 50% 63%);
}
.darthvader .t-22 {
  -webkit-clip-path: polygon(68% 63%, 50% 56%, 50% 63%);
}
.darthvader .t-23 {
  -webkit-clip-path: polygon(32% 63%, 50% 63%, 32% 72%);
}
.darthvader .t-24 {
  -webkit-clip-path: polygon(68% 63%, 50% 63%, 68% 72%);
}
.darthvader .t-25 {
  -webkit-clip-path: polygon(50% 63%, 35% 82%, 65% 82%);
}

.darthvader .t-26 {
  -webkit-clip-path: polygon(32% 72%, 35% 82%, 50% 63%);
}
.darthvader .t-27 {
  -webkit-clip-path: polygon(68% 72%, 65% 82%, 50% 63%);
}
.darthvader .t-28 {
  -webkit-clip-path: polygon(65% 82%, 50% 91%, 35% 82%);
}
.darthvader .t-29 {
  -webkit-clip-path: polygon(45% 82%, 48% 82%, 47% 67%);
}
.darthvader .t-30 {
  -webkit-clip-path: polygon(55% 82%, 52% 82%, 53% 67%);
}

.darthvader .t-2,
.darthvader .t-15,
.darthvader .t-16,
.darthvader .t-26,
.darthvader .t-27 {
  background-color: #565656;
}

.darthvader .t-1,
.darthvader .t-3,
.darthvader .t-4,
.darthvader .t-6,
.darthvader .t-7,
.darthvader .t-8,
.darthvader .t-11,
.darthvader .t-13,
.darthvader .t-14,
.darthvader .t-19,
.darthvader .t-20,
.darthvader .t-21,
.darthvader .t-22,
.darthvader .t-23,
.darthvader .t-24,
.darthvader .t-28,
.darthvader .t-29,
.darthvader .t-30 {
  background-color: #424242;
}

.darthvader .t-5,
.darthvader .t-9,
.darthvader .t-10,
.darthvader .t-12,
.darthvader .t-17,
.darthvader .t-18,
.darthvader .t-25 {
  background-color: #1b1b1b;
}

/* C3PO */

.c3po .t-1 {
  -webkit-clip-path: polygon(50% 8%, 57% 14%, 43% 14%);
}
.c3po .t-2 {
  -webkit-clip-path: polygon(38% 14%, 62% 14%, 50% 46%);
}
.c3po .t-3 {
  -webkit-clip-path: polygon(38% 14%, 27% 24%, 49% 43%);
}
.c3po .t-4 {
  -webkit-clip-path: polygon(62% 14%, 73% 24%, 51% 43%);
}
.c3po .t-5 {
  -webkit-clip-path: polygon(27% 24%, 25% 43%, 49% 43%);
}

.c3po .t-6 {
  -webkit-clip-path: polygon(73% 24%, 75% 43%, 51% 43%);
}
.c3po .t-7 {
  -webkit-clip-path: polygon(49% 43%, 40% 43%, 50% 46%);
}
.c3po .t-8 {
  -webkit-clip-path: polygon(60% 43%, 51% 43%, 50% 46%);
}
.c3po .t-9 {
  -webkit-clip-path: polygon(40% 43%, 50% 46%, 45% 52%);
}
.c3po .t-10 {
  -webkit-clip-path: polygon(60% 43%, 50% 46%, 55% 52%);
}

.c3po .t-11 {
  -webkit-clip-path: polygon(40% 43%, 35% 52%, 45% 52%);
}
.c3po .t-12 {
  -webkit-clip-path: polygon(60% 43%, 65% 52%, 55% 52%);
}
.c3po .t-13 {
  -webkit-clip-path: polygon(25% 43%, 40% 43%, 35% 52%);
}
.c3po .t-14 {
  -webkit-clip-path: polygon(75% 43%, 60% 43%, 65% 52%);
}
.c3po .t-15 {
  -webkit-clip-path: polygon(50% 46%, 62% 60%, 38% 60%);
}

.c3po .t-16 {
  -webkit-clip-path: polygon(25% 43%, 35% 52%, 25% 52%);
}
.c3po .t-17 {
  -webkit-clip-path: polygon(75% 43%, 75% 52%, 65% 52%);
}
.c3po .t-18 {
  -webkit-clip-path: polygon(25% 52%, 45% 52%, 30% 69%);
}
.c3po .t-19 {
  -webkit-clip-path: polygon(75% 52%, 70% 69%, 55% 52%);
}
.c3po .t-20 {
  -webkit-clip-path: polygon(50% 85%, 62% 60%, 38% 60%);
}

.c3po .t-21 {
  -webkit-clip-path: polygon(28% 72%, 34% 81%, 35% 70%);
}
.c3po .t-22 {
  -webkit-clip-path: polygon(72% 72%, 66% 81%, 65% 70%);
}
.c3po .t-23 {
  -webkit-clip-path: polygon(30% 69%, 36% 81%, 38% 60%);
}
.c3po .t-24 {
  -webkit-clip-path: polygon(70% 69%, 64% 81%, 62% 60%);
}
.c3po .t-25 {
  -webkit-clip-path: polygon(38% 60%, 36% 81%, 50% 85%);
}

.c3po .t-26 {
  -webkit-clip-path: polygon(62% 60%, 64% 81%, 50% 85%);
}
.c3po .t-27 {
  -webkit-clip-path: polygon(36% 81%, 36% 88%, 50% 85%);
}
.c3po .t-28 {
  -webkit-clip-path: polygon(64% 81%, 64% 88%, 50% 85%);
}
.c3po .t-29 {
  -webkit-clip-path: polygon(50% 85%, 26% 90%, 74% 90%);
}
.c3po .t-30 {
  -webkit-clip-path: polygon(50% 69%, 45% 75%, 55% 75%);
}

.c3po .t-2,
.c3po .t-3,
.c3po .t-15,
.c3po .t-16 {
  background-color: #ffe246;
}

.c3po .t-1,
.c3po .t-4,
.c3po .t-5,
.c3po .t-7,
.c3po .t-9,
.c3po .t-10,
.c3po .t-13,
.c3po .t-18,
.c3po .t-19,
.c3po .t-20,
.c3po .t-21,
.c3po .t-22,
.c3po .t-26,
.c3po .t-27,
.c3po .t-28 {
  background-color: #fed90e;
}

.c3po .t-6,
.c3po .t-8,
.c3po .t-14,
.c3po .t-17,
.c3po .t-23,
.c3po .t-24,
.c3po .t-25,
.c3po .t-29 {
  background-color: #ecbc1e;
}

.c3po .t-30 {
  background-color: #8e6400;
}

.c3po .t-11,
.c3po .t-12 {
  background-color: #fd852e;
}

/* Boba Fett */

.bobafett .t-1 {
  -webkit-clip-path: polygon(50% 24%, 33% 29%, 67% 29%);
}
.bobafett .t-2 {
  -webkit-clip-path: polygon(50% 48%, 33% 29%, 67% 29%);
}
.bobafett .t-3 {
  -webkit-clip-path: polygon(33% 29%, 25% 48%, 50% 48%);
}
.bobafett .t-4 {
  -webkit-clip-path: polygon(67% 29%, 75% 48%, 50% 48%);
}
.bobafett .t-5 {
  -webkit-clip-path: polygon(25% 48%, 26% 50%, 74% 50%);
}

.bobafett .t-6 {
  -webkit-clip-path: polygon(75% 48%, 74% 50%, 25% 48%);
}
.bobafett .t-7 {
  -webkit-clip-path: polygon(25% 48%, 24% 56%, 30% 59%);
}
.bobafett .t-8 {
  -webkit-clip-path: polygon(75% 48%, 76% 56%, 70% 59%);
}
.bobafett .t-9 {
  -webkit-clip-path: polygon(26% 50%, 27% 53%, 45% 57%);
}
.bobafett .t-10 {
  -webkit-clip-path: polygon(74% 50%, 73% 53%, 55% 57%);
}

.bobafett .t-11 {
  -webkit-clip-path: polygon(26% 50%, 74% 50%, 50% 59%);
}
.bobafett .t-12 {
  -webkit-clip-path: polygon(27% 53%, 30% 59%, 45% 57%);
}
.bobafett .t-13 {
  -webkit-clip-path: polygon(73% 53%, 70% 59%, 55% 57%);
}
.bobafett .t-14 {
  -webkit-clip-path: polygon(30% 59%, 45% 66%, 45% 57%);
}
.bobafett .t-15 {
  -webkit-clip-path: polygon(70% 59%, 55% 66%, 55% 57%);
}

.bobafett .t-16 {
  -webkit-clip-path: polygon(45% 57%, 45% 95%, 50% 59%);
}
.bobafett .t-17 {
  -webkit-clip-path: polygon(55% 57%, 55% 95%, 50% 59%);
}
.bobafett .t-18 {
  -webkit-clip-path: polygon(45% 95%, 50% 59%, 55% 95%);
}
.bobafett .t-19 {
  -webkit-clip-path: polygon(35% 61%, 45% 95%, 45% 66%);
}
.bobafett .t-20 {
  -webkit-clip-path: polygon(65% 61%, 55% 95%, 55% 66%);
}

.bobafett .t-21 {
  -webkit-clip-path: polygon(24% 56%, 21% 82%, 35% 61%);
}
.bobafett .t-22 {
  -webkit-clip-path: polygon(76% 56%, 79% 82%, 65% 61%);
}
.bobafett .t-23 {
  -webkit-clip-path: polygon(75% 48%, 81% 81%, 79% 82%);
}
.bobafett .t-24 {
  -webkit-clip-path: polygon(35% 61%, 21% 82%, 45% 95%);
}
.bobafett .t-25 {
  -webkit-clip-path: polygon(65% 61%, 79% 82%, 55% 95%);
}

.bobafett .t-26 {
  -webkit-clip-path: polygon(21% 43%, 26% 43%, 21% 82%);
}
.bobafett .t-27 {
  -webkit-clip-path: polygon(22% 43%, 25% 12%, 24% 43%);
}
.bobafett .t-28 {
  -webkit-clip-path: polygon(24% 43%, 25% 12%, 27% 11%);
}
.bobafett .t-29 {
  -webkit-clip-path: polygon(29% 10%, 35% 11%, 35% 7%);
}
.bobafett .t-30 {
  -webkit-clip-path: polygon(25% 12%, 23% 6%, 38% 6%);
}

.bobafett .t-1,
.bobafett .t-2,
.bobafett .t-3,
.bobafett .t-4,
.bobafett .t-23,
.bobafett .t-24,
.bobafett .t-25 {
  background-color: #31563c;
}

.bobafett .t-5,
.bobafett .t-6,
.bobafett .t-7,
.bobafett .t-8,
.bobafett .t-12,
.bobafett .t-13,
.bobafett .t-14,
.bobafett .t-15,
.bobafett .t-19,
.bobafett .t-20 {
  background-color: #82292b;
}

.bobafett .t-9,
.bobafett .t-10,
.bobafett .t-11,
.bobafett .t-16,
.bobafett .t-17,
.bobafett .t-18,
.bobafett .t-21,
.bobafett .t-22,
.bobafett .t-30 {
  background-color: #1b1b1b;
}

.bobafett .t-26 {
  background-color: #b3a24a;
}

.bobafett .t-27,
.bobafett .t-28,
.bobafett .t-29 {
  background-color: #d3d3d5;
}

/* Imperial Guard */

.imperialguard .t-1 {
  -webkit-clip-path: polygon(50% 3%, 36% 11%, 50% 11%);
}
.imperialguard .t-2 {
  -webkit-clip-path: polygon(50% 3%, 64% 11%, 50% 11%);
}
.imperialguard .t-3 {
  -webkit-clip-path: polygon(50% 17%, 36% 11%, 64% 11%);
}
.imperialguard .t-4 {
  -webkit-clip-path: polygon(50% 17%, 36% 11%, 31% 23%);
}
.imperialguard .t-5 {
  -webkit-clip-path: polygon(50% 17%, 64% 11%, 69% 23%);
}

.imperialguard .t-6 {
  -webkit-clip-path: polygon(50% 17%, 31% 23%, 30% 29%);
}
.imperialguard .t-7 {
  -webkit-clip-path: polygon(50% 17%, 69% 23%, 70% 29%);
}
.imperialguard .t-8 {
  -webkit-clip-path: polygon(50% 17%, 33% 27%, 67% 27%);
}
.imperialguard .t-9 {
  -webkit-clip-path: polygon(50% 27%, 33% 27%, 50% 35%);
}
.imperialguard .t-10 {
  -webkit-clip-path: polygon(50% 27%, 67% 27%, 50% 35%);
}

.imperialguard .t-11 {
  -webkit-clip-path: polygon(33% 27%, 50% 35%, 49% 71%);
}
.imperialguard .t-12 {
  -webkit-clip-path: polygon(67% 27%, 50% 35%, 51% 71%);
}
.imperialguard .t-13 {
  -webkit-clip-path: polygon(30% 29%, 33% 27%, 36% 35%);
}
.imperialguard .t-14 {
  -webkit-clip-path: polygon(70% 29%, 67% 27%, 64% 35%);
}
.imperialguard .t-15 {
  -webkit-clip-path: polygon(50% 35%, 49% 71%, 51% 71%);
}

.imperialguard .t-16 {
  -webkit-clip-path: polygon(30% 29%, 29% 55%, 36% 35%);
}
.imperialguard .t-17 {
  -webkit-clip-path: polygon(70% 29%, 71% 55%, 64% 35%);
}
.imperialguard .t-18 {
  -webkit-clip-path: polygon(36% 35%, 29% 55%, 38% 71%);
}
.imperialguard .t-19 {
  -webkit-clip-path: polygon(64% 35%, 71% 55%, 62% 71%);
}
.imperialguard .t-20 {
  -webkit-clip-path: polygon(50% 92%, 38% 71%, 62% 71%);
}

.imperialguard .t-21 {
  -webkit-clip-path: polygon(36% 35%, 38% 71%, 49% 71%);
}
.imperialguard .t-22 {
  -webkit-clip-path: polygon(64% 35%, 62% 71%, 51% 71%);
}
.imperialguard .t-23 {
  -webkit-clip-path: polygon(15% 63%, 29% 55%, 25% 80%);
}
.imperialguard .t-24 {
  -webkit-clip-path: polygon(85% 63%, 71% 55%, 75% 80%);
}
.imperialguard .t-25 {
  -webkit-clip-path: polygon(29% 55%, 25% 80%, 39% 92%);
}

.imperialguard .t-26 {
  -webkit-clip-path: polygon(71% 55%, 75% 80%, 61% 92%);
}
.imperialguard .t-27 {
  -webkit-clip-path: polygon(29% 55%, 39% 92%, 50% 92%);
}
.imperialguard .t-28 {
  -webkit-clip-path: polygon(71% 55%, 61% 92%, 50% 92%);
}
.imperialguard .t-29 {
  -webkit-clip-path: polygon(50% 92%, 39% 92%, 50% 96%);
}
.imperialguard .t-30 {
  -webkit-clip-path: polygon(50% 92%, 61% 92%, 50% 96%);
}

.imperialguard .t-5,
.imperialguard .t-15,
.imperialguard .t-17,
.imperialguard .t-20,
.imperialguard .t-24,
.imperialguard .t-29,
.imperialguard .t-30 {
  background-color: #bf0204;
}

.imperialguard .t-1,
.imperialguard .t-2,
.imperialguard .t-3,
.imperialguard .t-7,
.imperialguard .t-8,
.imperialguard .t-11,
.imperialguard .t-12,
.imperialguard .t-14,
.imperialguard .t-18,
.imperialguard .t-19,
.imperialguard .t-25,
.imperialguard .t-26,
.imperialguard .t-28 {
  background-color: #a00002;
}

.imperialguard .t-4,
.imperialguard .t-6,
.imperialguard .t-13,
.imperialguard .t-16,
.imperialguard .t-21,
.imperialguard .t-22,
.imperialguard .t-23,
.imperialguard .t-27 {
  background-color: #790002;
}

.imperialguard .t-9,
.imperialguard .t-10 {
  background-color: #1b1b1b;
}
</style>
