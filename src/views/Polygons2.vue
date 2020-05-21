<!-- Jquery -->
<template>
<body class="r2d2">
  <div class="wrapper">
    <div class="console">
      <h1>POLYGONS OF THE GALAXY II</h1>
      <button id="r2d2">R2D2</button>
      <button id="shadowtrooper">Shadowtrooper</button>
      <button id="darthmaul">Darth Maul</button>
      <button id="jangofett">Jango Fett</button>
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
        <h2 class="quote-r2d2">*beep*</h2>
        <h2 class="quote-shadowtrooper">I'll give you a hint: It's not just paint</h2>
        <h2 class="quote-darthmaul">At last, we will have revenge</h2>
        <h2 class="quote-jangofett">I'm just a simple man, trying to make my way in the universe</h2>
      </div>
    </div>

    <div class="explore">
      <h2>EXPLORE THE GALAXY</h2>
      <a href="/polygons">
        <button>Episode I</button>
      </a>
      <a href="/polygons2">
        <button class="active">Episode II</button>
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

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>
$(document).ready(function() {
  $("#r2d2").click(function() {
    $("body").removeClass();
    $("body").addClass("r2d2");
  });
  $("#shadowtrooper").click(function() {
    $("body").removeClass();
    $("body").addClass("shadowtrooper");
  });
  $("#darthmaul").click(function() {
    $("body").removeClass();
    $("body").addClass("darthmaul");
  });
  $("#jangofett").click(function() {
    $("body").removeClass();
    $("body").addClass("jangofett");
  });

  setInterval(function() {
    $("body").toggleClass("glimmer");
  }, 3000);
});
</script>

<style lang="scss" scoped>
html,
body,
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
body {
  line-height: 1;
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
.shadowtrooper .console button#shadowtrooper,
.r2d2 .console button#r2d2,
.darthmaul .console button#darthmaul {
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
.shadowtrooper .quote-shadowtrooper,
.darthmaul .quote-darthmaul,
.r2d2 .quote-r2d2,
.jangofett .quote-jangofett {
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

/* Shadowtrooper */

.shadowtrooper .t-1 {
  -webkit-clip-path: polygon(32% 12%, 50% 8%, 68% 12%);
}
.shadowtrooper .t-2 {
  -webkit-clip-path: polygon(32% 12%, 50% 32%, 68% 12%);
}
.shadowtrooper .t-3 {
  -webkit-clip-path: polygon(32% 12%, 24% 32%, 50% 32%);
}
.shadowtrooper .t-4 {
  -webkit-clip-path: polygon(68% 12%, 50% 32%, 76% 32%);
}
.shadowtrooper .t-5 {
  -webkit-clip-path: polygon(21% 32%, 21% 36%, 79% 32%);
}

.shadowtrooper .t-6 {
  -webkit-clip-path: polygon(21% 36%, 79% 32%, 79% 36%);
}
.shadowtrooper .t-7 {
  -webkit-clip-path: polygon(23% 36%, 23% 59%, 50% 36%);
}
.shadowtrooper .t-8 {
  -webkit-clip-path: polygon(50% 36%, 77% 59%, 77% 36%);
}
.shadowtrooper .t-9 {
  -webkit-clip-path: polygon(25% 38%, 29% 47%, 44% 38%);
}
.shadowtrooper .t-10 {
  -webkit-clip-path: polygon(56% 38%, 75% 38%, 72% 47%);
}

.shadowtrooper .t-11 {
  -webkit-clip-path: polygon(19% 37%, 23% 37%, 19% 55%);
}
.shadowtrooper .t-12 {
  -webkit-clip-path: polygon(23% 37%, 19% 55%, 23% 55%);
}
.shadowtrooper .t-13 {
  -webkit-clip-path: polygon(77% 37%, 77% 55%, 81% 37%);
}
.shadowtrooper .t-14 {
  -webkit-clip-path: polygon(81% 37%, 77% 55%, 81% 55%);
}
.shadowtrooper .t-15 {
  -webkit-clip-path: polygon(50% 36%, 23% 59%, 77% 59%);
}

.shadowtrooper .t-16 {
  -webkit-clip-path: polygon(50% 83%, 28% 59%, 72% 59%);
}
.shadowtrooper .t-17 {
  -webkit-clip-path: polygon(23% 59%, 20% 76%, 44% 59%);
}
.shadowtrooper .t-18 {
  -webkit-clip-path: polygon(77% 59%, 56% 59%, 80% 76%);
}
.shadowtrooper .t-19 {
  -webkit-clip-path: polygon(50% 53%, 35% 65%, 50% 59%);
}
.shadowtrooper .t-20 {
  -webkit-clip-path: polygon(50% 53%, 50% 59%, 65% 65%);
}

.shadowtrooper .t-21 {
  -webkit-clip-path: polygon(20% 76%, 48% 80%, 35% 65%);
}
.shadowtrooper .t-22 {
  -webkit-clip-path: polygon(80% 76%, 52% 80%, 65% 65%);
}
.shadowtrooper .t-23 {
  -webkit-clip-path: polygon(20% 76%, 45% 86%, 45% 79%);
}
.shadowtrooper .t-24 {
  -webkit-clip-path: polygon(80% 76%, 55% 86%, 55% 79%);
}
.shadowtrooper .t-25 {
  -webkit-clip-path: polygon(20% 76%, 35% 93%, 45% 86%);
}

.shadowtrooper .t-26 {
  -webkit-clip-path: polygon(80% 76%, 65% 93%, 55% 86%);
}
.shadowtrooper .t-27 {
  -webkit-clip-path: polygon(45% 78%, 45% 88%, 55% 78%);
}
.shadowtrooper .t-28 {
  -webkit-clip-path: polygon(55% 78%, 55% 88%, 45% 88%);
}
.shadowtrooper .t-29 {
  -webkit-clip-path: polygon(30% 86%, 35% 91%, 43% 86%);
}
.shadowtrooper .t-30 {
  -webkit-clip-path: polygon(57% 86%, 65% 91%, 70% 86%);
}

.shadowtrooper .t-1,
.shadowtrooper .t-4,
.shadowtrooper .t-15,
.shadowtrooper .t-21,
.shadowtrooper .t-22 {
  background-color: #3c3c3c;
}

.shadowtrooper .t-2,
.shadowtrooper .t-7,
.shadowtrooper .t-8,
.shadowtrooper .t-16,
.shadowtrooper .t-23,
.shadowtrooper .t-26 {
  background-color: #3c3c3c;
}

.shadowtrooper .t-3,
.shadowtrooper .t-17,
.shadowtrooper .t-18,
.shadowtrooper .t-24,
.shadowtrooper .t-25 {
  background-color: #292929;
}

.shadowtrooper .t-5,
.shadowtrooper .t-12,
.shadowtrooper .t-13,
.shadowtrooper .t-19,
.shadowtrooper .t-27,
.shadowtrooper .t-29,
.shadowtrooper .t-30 {
  background-color: #484848;
}

.shadowtrooper .t-6,
.shadowtrooper .t-9,
.shadowtrooper .t-10,
.shadowtrooper .t-11,
.shadowtrooper .t-14,
.shadowtrooper .t-20,
.shadowtrooper .t-28 {
  background-color: #252525;
}

/* R2D2 */

.r2d2 .t-1 {
  -webkit-clip-path: polygon(50% 29%, 34% 34%, 66% 34%);
}
.r2d2 .t-2 {
  -webkit-clip-path: polygon(16% 67%, 16% 71%, 84% 67%);
}
.r2d2 .t-3 {
  -webkit-clip-path: polygon(84% 67%, 84% 71%, 16% 71%);
}
.r2d2 .t-4 {
  -webkit-clip-path: polygon(16% 63%, 16% 67%, 84% 63%);
}
.r2d2 .t-5 {
  -webkit-clip-path: polygon(84% 63%, 84% 67%, 16% 67%);
}

.r2d2 .t-6 {
  -webkit-clip-path: polygon(16% 59%, 16% 63%, 84% 59%);
}
.r2d2 .t-7 {
  -webkit-clip-path: polygon(84% 59%, 84% 63%, 16% 63%);
}
.r2d2 .t-8 {
  -webkit-clip-path: polygon(16% 59%, 22% 46%, 25% 59%);
}
.r2d2 .t-9 {
  -webkit-clip-path: polygon(22% 46%, 25% 46%, 25% 59%);
}
.r2d2 .t-10 {
  -webkit-clip-path: polygon(84% 59%, 78% 46%, 75% 59%);
}

.r2d2 .t-11 {
  -webkit-clip-path: polygon(78% 46%, 75% 46%, 75% 59%);
}
.r2d2 .t-12 {
  -webkit-clip-path: polygon(22% 46%, 34% 34%, 34% 46%);
}
.r2d2 .t-13 {
  -webkit-clip-path: polygon(78% 46%, 66% 34%, 66% 46%);
}
.r2d2 .t-14 {
  -webkit-clip-path: polygon(25% 46%, 30% 46%, 25% 59%);
}
.r2d2 .t-15 {
  -webkit-clip-path: polygon(30% 59%, 30% 46%, 25% 59%);
}

.r2d2 .t-16 {
  -webkit-clip-path: polygon(75% 46%, 70% 46%, 75% 59%);
}
.r2d2 .t-17 {
  -webkit-clip-path: polygon(70% 59%, 70% 46%, 75% 59%);
}
.r2d2 .t-18 {
  -webkit-clip-path: polygon(30% 46%, 30% 59%, 34% 59%);
}
.r2d2 .t-19 {
  -webkit-clip-path: polygon(30% 46%, 34% 46%, 34% 59%);
}
.r2d2 .t-20 {
  -webkit-clip-path: polygon(70% 46%, 70% 59%, 66% 59%);
}

.r2d2 .t-21 {
  -webkit-clip-path: polygon(70% 46%, 66% 46%, 66% 59%);
}
.r2d2 .t-22 {
  -webkit-clip-path: polygon(34% 34%, 34% 59%, 66% 34%);
}
.r2d2 .t-23 {
  -webkit-clip-path: polygon(66% 59%, 34% 59%, 66% 34%);
}
.r2d2 .t-24 {
  -webkit-clip-path: polygon(42% 37%, 38% 59%, 54% 37%);
}
.r2d2 .t-25 {
  -webkit-clip-path: polygon(38% 59%, 54% 37%, 58% 59%);
}

.r2d2 .t-26 {
  -webkit-clip-path: polygon(48% 38%, 43% 43%, 53% 43%);
}
.r2d2 .t-27 {
  -webkit-clip-path: polygon(48% 48%, 43% 43%, 53% 43%);
}
.r2d2 .t-28 {
  -webkit-clip-path: polygon(59% 54%, 65% 54%, 62% 58%);
}
.r2d2 .t-29 {
  -webkit-clip-path: polygon(49% 54%, 55% 54%, 52% 58%);
}
.r2d2 .t-30 {
  -webkit-clip-path: polygon(50% 29%, 49% 34%, 51% 34%);
}

.r2d2 .t-1,
.r2d2 .t-4,
.r2d2 .t-5,
.r2d2 .t-8,
.r2d2 .t-9,
.r2d2 .t-10,
.r2d2 .t-11,
.r2d2 .t-18,
.r2d2 .t-19,
.r2d2 .t-20,
.r2d2 .t-21,
.r2d2 .t-24,
.r2d2 .t-25 {
  background-color: #225c92;
}

.r2d2 .t-2,
.r2d2 .t-3,
.r2d2 .t-6,
.r2d2 .t-7,
.r2d2 .t-12,
.r2d2 .t-13,
.r2d2 .t-14,
.r2d2 .t-15,
.r2d2 .t-16,
.r2d2 .t-17,
.r2d2 .t-22,
.r2d2 .t-23,
.r2d2 .t-30 {
  background-color: #c8c8c8;
}

.r2d2 .t-26,
.r2d2 .t-27,
.r2d2 .t-28 {
  background-color: #313841;
}

.r2d2 .t-29 {
  background-color: #be0c19;
}

/* Darth Maul */

.darthmaul .t-1 {
  -webkit-clip-path: polygon(50% 33%, 38% 17%, 62% 17%);
}
.darthmaul .t-2 {
  -webkit-clip-path: polygon(38% 17%, 33% 31%, 50% 33%);
}
.darthmaul .t-3 {
  -webkit-clip-path: polygon(62% 17%, 67% 31%, 50% 33%);
}
.darthmaul .t-4 {
  -webkit-clip-path: polygon(33% 31%, 50% 50%, 50% 33%);
}
.darthmaul .t-5 {
  -webkit-clip-path: polygon(67% 31%, 50% 50%, 50% 33%);
}

.darthmaul .t-6 {
  -webkit-clip-path: polygon(33% 31%, 47% 46%, 37% 61%);
}
.darthmaul .t-7 {
  -webkit-clip-path: polygon(67% 31%, 53% 46%, 63% 61%);
}
.darthmaul .t-8 {
  -webkit-clip-path: polygon(50% 12%, 46% 20%, 54% 20%);
}
.darthmaul .t-9 {
  -webkit-clip-path: polygon(38% 17%, 34% 10%, 34% 22%);
}
.darthmaul .t-10 {
  -webkit-clip-path: polygon(62% 17%, 66% 10%, 66% 22%);
}

.darthmaul .t-11 {
  -webkit-clip-path: polygon(33% 31%, 26% 50%, 37% 61%);
}
.darthmaul .t-12 {
  -webkit-clip-path: polygon(67% 31%, 74% 50%, 63% 61%);
}
.darthmaul .t-13 {
  -webkit-clip-path: polygon(32% 25%, 27% 30%, 25% 23%);
}
.darthmaul .t-14 {
  -webkit-clip-path: polygon(68% 25%, 73% 30%, 75% 23%);
}
.darthmaul .t-15 {
  -webkit-clip-path: polygon(38% 17%, 27% 30%, 26% 50%);
}

.darthmaul .t-16 {
  -webkit-clip-path: polygon(62% 17%, 73% 30%, 74% 50%);
}
.darthmaul .t-17 {
  -webkit-clip-path: polygon(26% 50%, 27% 60%, 33% 67%);
}
.darthmaul .t-18 {
  -webkit-clip-path: polygon(74% 50%, 73% 60%, 67% 67%);
}
.darthmaul .t-19 {
  -webkit-clip-path: polygon(26% 50%, 37% 61%, 33% 67%);
}
.darthmaul .t-20 {
  -webkit-clip-path: polygon(74% 50%, 63% 61%, 67% 67%);
}

.darthmaul .t-21 {
  -webkit-clip-path: polygon(27% 60%, 31% 76%, 41% 76%);
}
.darthmaul .t-22 {
  -webkit-clip-path: polygon(73% 60%, 69% 76%, 59% 76%);
}
.darthmaul .t-23 {
  -webkit-clip-path: polygon(31% 76%, 40% 89%, 50% 76%);
}
.darthmaul .t-24 {
  -webkit-clip-path: polygon(69% 76%, 60% 89%, 50% 76%);
}
.darthmaul .t-25 {
  -webkit-clip-path: polygon(50% 76%, 40% 89%, 60% 89%);
}

.darthmaul .t-26 {
  -webkit-clip-path: polygon(33% 67%, 50% 41%, 41% 76%);
}
.darthmaul .t-27 {
  -webkit-clip-path: polygon(67% 67%, 50% 41%, 59% 76%);
}
.darthmaul .t-28 {
  -webkit-clip-path: polygon(50% 41%, 41% 76%, 59% 76%);
}
.darthmaul .t-29 {
  -webkit-clip-path: polygon(36% 48%, 45% 48%, 42% 50%);
}
.darthmaul .t-30 {
  -webkit-clip-path: polygon(64% 48%, 55% 48%, 58% 50%);
}

.darthmaul .t-1,
.darthmaul .t-6,
.darthmaul .t-7,
.darthmaul .t-15,
.darthmaul .t-16,
.darthmaul .t-19,
.darthmaul .t-20,
.darthmaul .t-21,
.darthmaul .t-22,
.darthmaul .t-23,
.darthmaul .t-24,
.darthmaul .t-28 {
  background-color: #1d1d1b;
}

.darthmaul .t-2,
.darthmaul .t-3,
.darthmaul .t-4,
.darthmaul .t-5,
.darthmaul .t-11,
.darthmaul .t-12,
.darthmaul .t-17,
.darthmaul .t-18,
.darthmaul .t-25,
.darthmaul .t-26,
.darthmaul .t-27 {
  background-color: #d8181d;
}

.darthmaul .t-8,
.darthmaul .t-9,
.darthmaul .t-10,
.darthmaul .t-13,
.darthmaul .t-14 {
  background-color: #d8a749;
}

.darthmaul .t-29,
.darthmaul .t-30 {
  background-color: #ffffff;
}

/* Jango Fett */

.jangofett .t-1 {
  -webkit-clip-path: polygon(50% 24%, 33% 29%, 67% 29%);
}
.jangofett .t-2 {
  -webkit-clip-path: polygon(50% 48%, 33% 29%, 67% 29%);
}
.jangofett .t-3 {
  -webkit-clip-path: polygon(33% 29%, 25% 48%, 50% 48%);
}
.jangofett .t-4 {
  -webkit-clip-path: polygon(67% 29%, 75% 48%, 50% 48%);
}
.jangofett .t-5 {
  -webkit-clip-path: polygon(25% 48%, 26% 50%, 74% 50%);
}

.jangofett .t-6 {
  -webkit-clip-path: polygon(75% 48%, 74% 50%, 25% 48%);
}
.jangofett .t-7 {
  -webkit-clip-path: polygon(25% 48%, 24% 56%, 30% 59%);
}
.jangofett .t-8 {
  -webkit-clip-path: polygon(75% 48%, 76% 56%, 70% 59%);
}
.jangofett .t-9 {
  -webkit-clip-path: polygon(26% 50%, 27% 53%, 45% 57%);
}
.jangofett .t-10 {
  -webkit-clip-path: polygon(74% 50%, 73% 53%, 55% 57%);
}

.jangofett .t-11 {
  -webkit-clip-path: polygon(26% 50%, 74% 50%, 50% 59%);
}
.jangofett .t-12 {
  -webkit-clip-path: polygon(27% 53%, 30% 59%, 45% 57%);
}
.jangofett .t-13 {
  -webkit-clip-path: polygon(73% 53%, 70% 59%, 55% 57%);
}
.jangofett .t-14 {
  -webkit-clip-path: polygon(30% 59%, 45% 66%, 45% 57%);
}
.jangofett .t-15 {
  -webkit-clip-path: polygon(70% 59%, 55% 66%, 55% 57%);
}

.jangofett .t-16 {
  -webkit-clip-path: polygon(45% 57%, 45% 95%, 50% 59%);
}
.jangofett .t-17 {
  -webkit-clip-path: polygon(55% 57%, 55% 95%, 50% 59%);
}
.jangofett .t-18 {
  -webkit-clip-path: polygon(45% 95%, 50% 59%, 55% 95%);
}
.jangofett .t-19 {
  -webkit-clip-path: polygon(35% 61%, 45% 95%, 45% 66%);
}
.jangofett .t-20 {
  -webkit-clip-path: polygon(65% 61%, 55% 95%, 55% 66%);
}

.jangofett .t-21 {
  -webkit-clip-path: polygon(24% 56%, 21% 82%, 35% 61%);
}
.jangofett .t-22 {
  -webkit-clip-path: polygon(76% 56%, 79% 82%, 65% 61%);
}
.jangofett .t-23 {
  -webkit-clip-path: polygon(75% 48%, 81% 81%, 79% 82%);
}
.jangofett .t-24 {
  -webkit-clip-path: polygon(35% 61%, 21% 82%, 45% 95%);
}
.jangofett .t-25 {
  -webkit-clip-path: polygon(65% 61%, 79% 82%, 55% 95%);
}

.jangofett .t-26 {
  -webkit-clip-path: polygon(21% 43%, 26% 43%, 21% 82%);
}
.jangofett .t-27 {
  -webkit-clip-path: polygon(22% 43%, 25% 12%, 24% 43%);
}
.jangofett .t-28 {
  -webkit-clip-path: polygon(24% 43%, 25% 12%, 27% 11%);
}
.jangofett .t-29 {
  -webkit-clip-path: polygon(29% 10%, 35% 11%, 35% 7%);
}
.jangofett .t-30 {
  -webkit-clip-path: polygon(25% 12%, 23% 6%, 38% 6%);
}

.jangofett .t-1,
.jangofett .t-2,
.jangofett .t-3,
.jangofett .t-4,
.jangofett .t-24,
.jangofett .t-25,
.jangofett .t-27,
.jangofett .t-28,
.jangofett .t-29 {
  background-color: #b3b0a7;
}

.jangofett .t-5,
.jangofett .t-6,
.jangofett .t-7,
.jangofett .t-8,
.jangofett .t-12,
.jangofett .t-13,
.jangofett .t-14,
.jangofett .t-15,
.jangofett .t-19,
.jangofett .t-20,
.jangofett .t-23,
.jangofett .t-26,
.jangofett .t-30 {
  background-color: #36598f;
}

.jangofett .t-9,
.jangofett .t-10,
.jangofett .t-11,
.jangofett .t-16,
.jangofett .t-17,
.jangofett .t-18,
.jangofett .t-21,
.jangofett .t-22 {
  background-color: #1b1b1b;
}
</style>
