<template>
  <body class="porg">
    <div class="wrapper">
      <div class="console">
        <h1>POLYGONS OF THE GALAXY V</h1>

        <button id="porg">Porg</button>
        <button id="leiaorgana">Princess Leia Organa</button>
        <button id="finn">Finn</button>
        <button id="kyloren">Kylo Ren</button>
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
          <h2 class="quote-porg">...</h2>
          <h2 class="quote-leiaorgana">Help me Obi-wan Kenobi, you're my only hope</h2>
          <h2 class="quote-finn">I was raised to do one thing, but I've got nothing to fight for</h2>
          <h2 class="quote-kyloren">I'll show you the Dark Side</h2>
        </div>
      </div>

      <div class="explore">
        <h2>EXPLORE THE GALAXY</h2>
        <a href="/polygons" target="_blank()"><button>Episode I</button></a>
        <a href="/polygons2" target="_blank()"><button>Episode II</button></a>
        <a href="/polygons3" target="_blank()"><button>Episode III</button></a>
        <a href="h/polygons4" target="_blank()"><button>Episode IV</button></a>
        <a href="/polygons5" target="_blank()">
          <button class="active">Episode V</button>
        </a>
      </div>
    </div>
  </body>
</template>

<script>
$(document).ready(function() {
  $("#porg").click(function() {
    $("body").removeClass();
    $("body").addClass("porg");
  });
  $("#leiaorgana").click(function() {
    $("body").removeClass();
    $("body").addClass("leiaorgana");
  });
  $("#finn").click(function() {
    $("body").removeClass();
    $("body").addClass("finn");
  });
  $("#kyloren").click(function() {
    $("body").removeClass();
    $("body").addClass("kyloren");
  });

  setInterval(function() {
    $("body").toggleClass("glimmer");
  }, 3000);
});
</script>

<style scoped>
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
.porg .console button#porg,
.leiaorgana .console button#leiaorgana,
.finn .console button#finn,
.kyloren .console button#kyloren {
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
  background-size: cover;
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
.porg .quote-porg,
.leiaorgana .quote-leiaorgana,
.finn .quote-finn,
.kyloren .quote-kyloren {
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
}

/* Porg */

.porg .t-1 {
  -webkit-clip-path: polygon(50% 13%, 64% 21%, 50% 21%);
}
.porg .t-2 {
  -webkit-clip-path: polygon(50% 13%, 36% 21%, 50% 21%);
}
.porg .t-3 {
  -webkit-clip-path: polygon(50% 24%, 64% 21%, 36% 21%);
}
.porg .t-4 {
  -webkit-clip-path: polygon(50% 24%, 64% 21%, 60% 33%);
}
.porg .t-5 {
  -webkit-clip-path: polygon(50% 24%, 36% 21%, 40% 33%);
}

.porg .t-6 {
  -webkit-clip-path: polygon(75% 50%, 64% 21%, 60% 33%);
}
.porg .t-7 {
  -webkit-clip-path: polygon(25% 50%, 36% 21%, 40% 33%);
}
.porg .t-8 {
  -webkit-clip-path: polygon(75% 50%, 67% 30%, 73% 38%);
}
.porg .t-9 {
  -webkit-clip-path: polygon(25% 50%, 33% 30%, 27% 38%);
}
.porg .t-10 {
  -webkit-clip-path: polygon(75% 50%, 67% 41%, 70% 58%);
}

.porg .t-11 {
  -webkit-clip-path: polygon(25% 50%, 33% 41%, 30% 58%);
}
.porg .t-12 {
  -webkit-clip-path: polygon(65% 68%, 67% 41%, 70% 58%);
}
.porg .t-13 {
  -webkit-clip-path: polygon(35% 68%, 33% 41%, 30% 58%);
}
.porg .t-14 {
  -webkit-clip-path: polygon(50% 24%, 65% 68%, 35% 68%);
}
.porg .t-15 {
  -webkit-clip-path: polygon(50% 24%, 65% 68%, 68% 40%);
}

.porg .t-16 {
  -webkit-clip-path: polygon(50% 24%, 35% 68%, 32% 40%);
}
.porg .t-17 {
  -webkit-clip-path: polygon(50% 73%, 65% 68%, 35% 68%);
}
.porg .t-18 {
  -webkit-clip-path: polygon(64% 85%, 58% 79%, 52% 85%);
}
.porg .t-19 {
  -webkit-clip-path: polygon(36% 85%, 42% 79%, 48% 85%);
}
.porg .t-20 {
  -webkit-clip-path: polygon(57% 70%, 58% 80%, 60% 69%);
}

.porg .t-21 {
  -webkit-clip-path: polygon(43% 70%, 42% 80%, 40% 69%);
}
.porg .t-22 {
  -webkit-clip-path: polygon(60% 81%, 58% 80%, 60% 69%);
}
.porg .t-23 {
  -webkit-clip-path: polygon(40% 81%, 42% 80%, 40% 69%);
}
.porg .t-24 {
  -webkit-clip-path: polygon(52% 24%, 63% 22%, 59% 31%);
}
.porg .t-25 {
  -webkit-clip-path: polygon(48% 24%, 37% 22%, 41% 31%);
}

.porg .t-26 {
  -webkit-clip-path: polygon(55% 25%, 61% 24%, 58.5% 29%);
}
.porg .t-27 {
  -webkit-clip-path: polygon(45% 25%, 39% 24%, 41.5% 29%);
}
.porg .t-28 {
  -webkit-clip-path: polygon(50% 30%, 55% 34%, 50% 32%);
}
.porg .t-29 {
  -webkit-clip-path: polygon(50% 30%, 45% 34%, 50% 32%);
}
.porg .t-30 {
  -webkit-clip-path: polygon(50% 32%, 53% 33%, 47% 33%);
}

.porg .t-1,
.porg .t-2,
.porg .t-3,
.porg .t-4,
.porg .t-5 {
  background-color: #c5865b;
}

.porg .t-6,
.porg .t-7,
.porg .t-8,
.porg .t-9,
.porg .t-10,
.porg .t-11,
.porg .t-12,
.porg .t-13 {
  background-color: #9e8a78;
}

.porg .t-14,
.porg .t-15,
.porg .t-16,
.porg .t-17 {
  background-color: #efe9d2;
}

.porg .t-18,
.porg .t-19,
.porg .t-20,
.porg .t-21,
.porg .t-22,
.porg .t-23 {
  background-color: #ee8f31;
}

.porg .t-24,
.porg .t-25,
.porg .t-28,
.porg .t-29,
.porg .t-30 {
  background-color: #131313;
}

.porg .t-26,
.porg .t-27 {
  background-color: #ffffff;
}

/* Leia Organa */

.leiaorgana .t-1 {
  -webkit-clip-path: polygon(50% 35%, 41% 19%, 59% 19%);
}
.leiaorgana .t-2 {
  -webkit-clip-path: polygon(50% 35%, 68% 29%, 59% 19%);
}
.leiaorgana .t-3 {
  -webkit-clip-path: polygon(50% 35%, 32% 29%, 41% 19%);
}
.leiaorgana .t-4 {
  -webkit-clip-path: polygon(50% 35%, 68% 29%, 68% 45%);
}
.leiaorgana .t-5 {
  -webkit-clip-path: polygon(50% 35%, 32% 29%, 32% 45%);
}

.leiaorgana .t-6 {
  -webkit-clip-path: polygon(75% 28%, 68% 29%, 68% 70%);
}
.leiaorgana .t-7 {
  -webkit-clip-path: polygon(25% 28%, 32% 29%, 32% 70%);
}
.leiaorgana .t-8 {
  -webkit-clip-path: polygon(75% 28%, 76% 66%, 68% 70%);
}
.leiaorgana .t-9 {
  -webkit-clip-path: polygon(25% 28%, 24% 66%, 32% 70%);
}
.leiaorgana .t-10 {
  -webkit-clip-path: polygon(75% 28%, 76% 66%, 80% 33%);
}

.leiaorgana .t-11 {
  -webkit-clip-path: polygon(25% 28%, 24% 66%, 20% 33%);
}
.leiaorgana .t-12 {
  -webkit-clip-path: polygon(83% 50%, 77% 57%, 79% 41%);
}
.leiaorgana .t-13 {
  -webkit-clip-path: polygon(17% 50%, 23% 57%, 21% 41%);
}
.leiaorgana .t-14 {
  -webkit-clip-path: polygon(68% 70%, 65% 69%, 68% 53%);
}
.leiaorgana .t-15 {
  -webkit-clip-path: polygon(32% 70%, 35% 69%, 32% 53%);
}

.leiaorgana .t-16 {
  -webkit-clip-path: polygon(50% 35%, 32% 45%, 68% 45%);
}
.leiaorgana .t-17 {
  -webkit-clip-path: polygon(50% 81%, 32% 45%, 68% 45%);
}
.leiaorgana .t-18 {
  -webkit-clip-path: polygon(68% 54%, 65% 69%, 68% 45%);
}
.leiaorgana .t-19 {
  -webkit-clip-path: polygon(32% 54%, 35% 69%, 32% 45%);
}
.leiaorgana .t-20 {
  -webkit-clip-path: polygon(50% 81%, 65% 69%, 68% 45%);
}

.leiaorgana .t-21 {
  -webkit-clip-path: polygon(50% 81%, 35% 69%, 32% 45%);
}
.leiaorgana .t-22 {
  -webkit-clip-path: polygon(50% 81%, 65% 69%, 60% 76%);
}
.leiaorgana .t-23 {
  -webkit-clip-path: polygon(50% 81%, 35% 69%, 40% 76%);
}
.leiaorgana .t-24 {
  -webkit-clip-path: polygon(58% 54%, 62% 52%, 58% 50%);
}
.leiaorgana .t-25 {
  -webkit-clip-path: polygon(42% 54%, 38% 52%, 42% 50%);
}

.leiaorgana .t-26 {
  -webkit-clip-path: polygon(58% 54%, 53% 53%, 58% 50%);
}
.leiaorgana .t-27 {
  -webkit-clip-path: polygon(42% 54%, 47% 53%, 42% 50%);
}
.leiaorgana .t-28 {
  -webkit-clip-path: polygon(51% 70.5%, 50% 71%, 56% 71%);
}
.leiaorgana .t-29 {
  -webkit-clip-path: polygon(49% 70.5%, 50% 71%, 44% 71%);
}
.leiaorgana .t-30 {
  -webkit-clip-path: polygon(50% 73%, 44% 71%, 56% 71%);
}

.leiaorgana .t-1,
.leiaorgana .t-2,
.leiaorgana .t-3,
.leiaorgana .t-4,
.leiaorgana .t-5,
.leiaorgana .t-6,
.leiaorgana .t-7,
.leiaorgana .t-8,
.leiaorgana .t-9,
.leiaorgana .t-10,
.leiaorgana .t-11,
.leiaorgana .t-12,
.leiaorgana .t-13,
.leiaorgana .t-14,
.leiaorgana .t-15 {
  background-color: #492d1f;
}

.leiaorgana .t-16,
.leiaorgana .t-17,
.leiaorgana .t-18,
.leiaorgana .t-19,
.leiaorgana .t-20,
.leiaorgana .t-21,
.leiaorgana .t-22,
.leiaorgana .t-23 {
  background-color: #f0b1a1;
}

.leiaorgana .t-24,
.leiaorgana .t-25,
.leiaorgana .t-26,
.leiaorgana .t-27 {
  background-color: #ffffff;
}

.leiaorgana .t-28,
.leiaorgana .t-29,
.leiaorgana .t-30 {
  background-color: #b80415;
}

/* Finn */

.finn .t-1 {
  -webkit-clip-path: polygon(50% 17%, 36% 35%, 64% 35%);
}
.finn .t-2 {
  -webkit-clip-path: polygon(50% 17%, 60% 20%, 64% 35%);
}
.finn .t-3 {
  -webkit-clip-path: polygon(50% 17%, 40% 20%, 36% 35%);
}
.finn .t-4 {
  -webkit-clip-path: polygon(67% 25%, 60% 20%, 64% 35%);
}
.finn .t-5 {
  -webkit-clip-path: polygon(33% 25%, 40% 20%, 36% 35%);
}

.finn .t-6 {
  -webkit-clip-path: polygon(67% 25%, 70% 35%, 64% 35%);
}
.finn .t-7 {
  -webkit-clip-path: polygon(33% 25%, 30% 35%, 36% 35%);
}
.finn .t-8 {
  -webkit-clip-path: polygon(65% 43%, 70% 35%, 64% 35%);
}
.finn .t-9 {
  -webkit-clip-path: polygon(35% 43%, 30% 35%, 36% 35%);
}
.finn .t-10 {
  -webkit-clip-path: polygon(65% 43%, 70% 35%, 68% 49%);
}

.finn .t-11 {
  -webkit-clip-path: polygon(35% 43%, 30% 35%, 32% 49%);
}
.finn .t-12 {
  -webkit-clip-path: polygon(50% 36%, 36% 35%, 64% 35%);
}
.finn .t-13 {
  -webkit-clip-path: polygon(50% 36%, 44% 82%, 56% 82%);
}
.finn .t-14 {
  -webkit-clip-path: polygon(50% 36%, 64% 35%, 56% 82%);
}
.finn .t-15 {
  -webkit-clip-path: polygon(50% 36%, 36% 35%, 44% 82%);
}

.finn .t-16 {
  -webkit-clip-path: polygon(68% 61%, 64% 35%, 56% 82%);
}
.finn .t-17 {
  -webkit-clip-path: polygon(32% 61%, 36% 35%, 44% 82%);
}
.finn .t-18 {
  -webkit-clip-path: polygon(68% 61%, 65% 72%, 56% 82%);
}
.finn .t-19 {
  -webkit-clip-path: polygon(32% 61%, 35% 72%, 44% 82%);
}
.finn .t-20 {
  -webkit-clip-path: polygon(68% 61%, 65% 43%, 68% 49%);
}

.finn .t-21 {
  -webkit-clip-path: polygon(32% 61%, 35% 43%, 32% 49%);
}
.finn .t-22 {
  -webkit-clip-path: polygon(68% 61%, 71% 47%, 68% 49%);
}
.finn .t-23 {
  -webkit-clip-path: polygon(32% 61%, 29% 47%, 32% 49%);
}
.finn .t-24 {
  -webkit-clip-path: polygon(70% 45%, 71% 47%, 68% 49%);
}
.finn .t-25 {
  -webkit-clip-path: polygon(30% 45%, 29% 47%, 32% 49%);
}

.finn .t-26 {
  -webkit-clip-path: polygon(54% 50%, 59% 48%, 58% 52%);
}
.finn .t-27 {
  -webkit-clip-path: polygon(46% 50%, 41% 48%, 42% 52%);
}
.finn .t-28 {
  -webkit-clip-path: polygon(63% 50%, 59% 48%, 58% 52%);
}
.finn .t-29 {
  -webkit-clip-path: polygon(37% 50%, 41% 48%, 42% 52%);
}
.finn .t-30 {
  -webkit-clip-path: polygon(50% 43%, 44% 42%, 56% 42%);
}

.finn .t-1,
.finn .t-2,
.finn .t-3,
.finn .t-4,
.finn .t-5,
.finn .t-6,
.finn .t-7,
.finn .t-8,
.finn .t-9,
.finn .t-10,
.finn .t-11,
.finn .t-12 {
  background-color: #000000;
}

.finn .t-13,
.finn .t-14,
.finn .t-15,
.finn .t-16,
.finn .t-17,
.finn .t-18,
.finn .t-19,
.finn .t-20,
.finn .t-21,
.finn .t-22,
.finn .t-23,
.finn .t-24,
.finn .t-25 {
  background-color: #ac5d32;
}

.finn .t-26,
.finn .t-27,
.finn .t-28,
.finn .t-29 {
  background-color: #ffffff;
}

.finn .t-30 {
  background-color: #93481f;
}

/* Kylo Ren */

.kyloren .t-1 {
  -webkit-clip-path: polygon(50% 15%, 50% 35%, 66% 26%);
}
.kyloren .t-2 {
  -webkit-clip-path: polygon(50% 15%, 50% 35%, 34% 26%);
}
.kyloren .t-3 {
  -webkit-clip-path: polygon(77% 44%, 50% 35%, 66% 26%);
}
.kyloren .t-4 {
  -webkit-clip-path: polygon(23% 44%, 50% 35%, 34% 26%);
}
.kyloren .t-5 {
  -webkit-clip-path: polygon(77% 44%, 63% 39%, 72% 60%);
}

.kyloren .t-6 {
  -webkit-clip-path: polygon(23% 44%, 37% 39%, 28% 60%);
}
.kyloren .t-7 {
  -webkit-clip-path: polygon(77% 44%, 90% 65%, 72% 60%);
}
.kyloren .t-8 {
  -webkit-clip-path: polygon(23% 44%, 10% 65%, 28% 60%);
}
.kyloren .t-9 {
  -webkit-clip-path: polygon(72% 82%, 90% 65%, 72% 60%);
}
.kyloren .t-10 {
  -webkit-clip-path: polygon(28% 82%, 10% 65%, 28% 60%);
}

.kyloren .t-11 {
  -webkit-clip-path: polygon(50% 35%, 50% 40%, 63% 39%);
}
.kyloren .t-12 {
  -webkit-clip-path: polygon(50% 35%, 50% 40%, 37% 39%);
}
.kyloren .t-13 {
  -webkit-clip-path: polygon(50% 49%, 50% 40%, 63% 39%);
}
.kyloren .t-14 {
  -webkit-clip-path: polygon(50% 49%, 50% 40%, 37% 39%);
}
.kyloren .t-15 {
  -webkit-clip-path: polygon(50% 82%, 53% 51%, 67% 69%);
}

.kyloren .t-16 {
  -webkit-clip-path: polygon(50% 82%, 47% 51%, 33% 69%);
}
.kyloren .t-17 {
  -webkit-clip-path: polygon(50% 82%, 57% 83%, 61% 73%);
}
.kyloren .t-18 {
  -webkit-clip-path: polygon(50% 82%, 43% 83%, 39% 73%);
}
.kyloren .t-19 {
  -webkit-clip-path: polygon(50% 82%, 50% 51%, 53% 51%);
}
.kyloren .t-20 {
  -webkit-clip-path: polygon(50% 82%, 50% 51%, 47% 51%);
}

.kyloren .t-21 {
  -webkit-clip-path: polygon(62% 46%, 50% 49%, 61% 53%);
}
.kyloren .t-22 {
  -webkit-clip-path: polygon(38% 46%, 50% 49%, 39% 53%);
}
.kyloren .t-23 {
  -webkit-clip-path: polygon(63% 39%, 50% 49%, 62% 46%);
}
.kyloren .t-24 {
  -webkit-clip-path: polygon(37% 39%, 50% 49%, 38% 46%);
}
.kyloren .t-25 {
  -webkit-clip-path: polygon(63% 39%, 70% 56%, 61% 53%);
}

.kyloren .t-26 {
  -webkit-clip-path: polygon(37% 39%, 30% 56%, 39% 53%);
}
.kyloren .t-27 {
  -webkit-clip-path: polygon(64% 65%, 70% 56%, 56% 51%);
}
.kyloren .t-28 {
  -webkit-clip-path: polygon(36% 65%, 30% 56%, 44% 51%);
}
.kyloren .t-29 {
  -webkit-clip-path: polygon(53% 51%, 56% 51%, 64% 65%);
}
.kyloren .t-30 {
  -webkit-clip-path: polygon(47% 51%, 44% 51%, 36% 65%);
}

.kyloren .t-1,
.kyloren .t-2,
.kyloren .t-3,
.kyloren .t-4,
.kyloren .t-5,
.kyloren .t-6,
.kyloren .t-7,
.kyloren .t-8,
.kyloren .t-9,
.kyloren .t-10,
.kyloren .t-15,
.kyloren .t-16,
.kyloren .t-17,
.kyloren .t-18 {
  background-color: #20201e;
}

.kyloren .t-13,
.kyloren .t-14 {
  background-color: #9ea3a8;
}

.kyloren .t-11,
.kyloren .t-12,
.kyloren .t-19,
.kyloren .t-20 {
  background-color: #2d2c2d;
}

.kyloren .t-21,
.kyloren .t-22 {
  background-color: #131313;
}

.kyloren .t-23,
.kyloren .t-24,
.kyloren .t-25,
.kyloren .t-26,
.kyloren .t-27,
.kyloren .t-28,
.kyloren .t-29,
.kyloren .t-30 {
  background-color: #c7c8c8;
}
</style>
