<template>
<body class="chewbacca">
  <div class="wrapper">
    <div class="console">
      <h1>POLYGONS OF THE GALAXY III</h1>
      <button id="chewbacca">Chewbacca</button>
      <button id="yoda">Yoda</button>
      <button id="greedo">Greedo</button>
      <button id="scouttrooper">Scout Trooper</button>
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
        <h2 class="quote-chewbacca">RAWRGWAWGGR</h2>
        <h2 class="quote-yoda">Fear is the path to the dark side</h2>
        <h2 class="quote-greedo">It's too late</h2>
        <h2 class="quote-scouttrooper">Freeze! Come on, get up!</h2>
      </div>
    </div>

    <div class="explore">
      <h2>EXPLORE THE GALAXY</h2>
      <a href="/polygons">
        <button>Episode I</button>
      </a>
      <a href="/polygons2">
        <button>Episode II</button>
      </a>
      <a href="/polygons3">
        <button class="active">Episode III</button>
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
  $("#chewbacca").click(function() {
    $("body").removeClass();
    $("body").addClass("chewbacca");
  });
  $("#yoda").click(function() {
    $("body").removeClass();
    $("body").addClass("yoda");
  });
  $("#greedo").click(function() {
    $("body").removeClass();
    $("body").addClass("greedo");
  });
  $("#scouttrooper").click(function() {
    $("body").removeClass();
    $("body").addClass("scouttrooper");
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
.yoda .console button#yoda,
.chewbacca .console button#chewbacca,
.greedo .console button#greedo,
.scouttrooper .console button#scouttrooper {
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
.yoda .quote-yoda,
.chewbacca .quote-chewbacca,
.greedo .quote-greedo,
.scouttrooper .quote-scouttrooper {
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

/* Yoda */

.yoda .t-1 {
  -webkit-clip-path: polygon(50% 27%, 41% 30%, 59% 30%);
}
.yoda .t-2 {
  -webkit-clip-path: polygon(50% 45%, 41% 30%, 59% 30%);
}
.yoda .t-3 {
  -webkit-clip-path: polygon(50% 44%, 39% 68%, 61% 68%);
}
.yoda .t-4 {
  -webkit-clip-path: polygon(50% 44%, 41% 30%, 31% 44%);
}
.yoda .t-5 {
  -webkit-clip-path: polygon(50% 44%, 59% 30%, 69% 44%);
}

.yoda .t-6 {
  -webkit-clip-path: polygon(32% 44%, 5% 47%, 31% 59%);
}
.yoda .t-7 {
  -webkit-clip-path: polygon(28% 49%, 12% 48%, 29% 57%);
}
.yoda .t-8 {
  -webkit-clip-path: polygon(68% 44%, 95% 47%, 69% 59%);
}
.yoda .t-9 {
  -webkit-clip-path: polygon(72% 49%, 88% 48%, 71% 57%);
}
.yoda .t-10 {
  -webkit-clip-path: polygon(31% 44%, 50% 44%, 43% 60%);
}

.yoda .t-11 {
  -webkit-clip-path: polygon(69% 44%, 50% 44%, 57% 60%);
}
.yoda .t-12 {
  -webkit-clip-path: polygon(31% 44%, 31% 59%, 44% 61%);
}
.yoda .t-13 {
  -webkit-clip-path: polygon(69% 44%, 69% 59%, 56% 61%);
}
.yoda .t-14 {
  -webkit-clip-path: polygon(31% 59%, 39% 68%, 43% 60%);
}
.yoda .t-15 {
  -webkit-clip-path: polygon(69% 59%, 61% 68%, 57% 60%);
}

.yoda .t-16 {
  -webkit-clip-path: polygon(50% 75%, 39% 68%, 61% 68%);
}
.yoda .t-17 {
  -webkit-clip-path: polygon(38% 53%, 42% 51%, 45% 55%);
}
.yoda .t-18 {
  -webkit-clip-path: polygon(38% 53%, 39% 55%, 45% 55%);
}
.yoda .t-19 {
  -webkit-clip-path: polygon(42% 51%, 41% 55%, 44% 54%);
}
.yoda .t-20 {
  -webkit-clip-path: polygon(62% 53%, 58% 51%, 55% 55%);
}

.yoda .t-21 {
  -webkit-clip-path: polygon(62% 53%, 61% 55%, 55% 55%);
}
.yoda .t-22 {
  -webkit-clip-path: polygon(58% 51%, 59% 55%, 56% 54%);
}
.yoda .t-23 {
  -webkit-clip-path: polygon(43% 28%, 42% 30%, 43% 38%);
}
.yoda .t-24 {
  -webkit-clip-path: polygon(57% 28%, 58% 30%, 57% 38%);
}
.yoda .t-25 {
  -webkit-clip-path: polygon(47% 27%, 46% 29%, 48% 38%);
}

.yoda .t-26 {
  -webkit-clip-path: polygon(53% 27%, 54% 29%, 52% 38%);
}
.yoda .t-27 {
  -webkit-clip-path: polygon(50% 42%, 38% 41%, 62% 41%);
}
.yoda .t-28 {
  -webkit-clip-path: polygon(50% 44%, 40% 43%, 60% 43%);
}
.yoda .t-29 {
  -webkit-clip-path: polygon(50% 46%, 42% 45%, 58% 45%);
}
.yoda .t-30 {
  -webkit-clip-path: polygon(50% 48%, 44% 47%, 56% 47%);
}

.yoda .t-1,
.yoda .t-2,
.yoda .t-3,
.yoda .t-4,
.yoda .t-5,
.yoda .t-6,
.yoda .t-8,
.yoda .t-10,
.yoda .t-11,
.yoda .t-12,
.yoda .t-13,
.yoda .t-14,
.yoda .t-15,
.yoda .t-16 {
  background-color: #99af65;
}

.yoda .t-7,
.yoda .t-9,
.yoda .t-27,
.yoda .t-28,
.yoda .t-29,
.yoda .t-30 {
  background-color: #62704d;
}

.yoda .t-17,
.yoda .t-18,
.yoda .t-20,
.yoda .t-21,
.yoda .t-23,
.yoda .t-24,
.yoda .t-25,
.yoda .t-26 {
  background-color: #ffffff;
}

.yoda .t-19,
.yoda .t-22 {
  background-color: #ffffff;
}

/* Chewbacca */

.chewbacca .t-1 {
  -webkit-clip-path: polygon(50% 46%, 43% 14%, 57% 14%);
}
.chewbacca .t-2 {
  -webkit-clip-path: polygon(50% 46%, 43% 14%, 30% 25%);
}
.chewbacca .t-3 {
  -webkit-clip-path: polygon(50% 46%, 70% 25%, 57% 14%);
}
.chewbacca .t-4 {
  -webkit-clip-path: polygon(30% 25%, 26% 40%, 45% 40%);
}
.chewbacca .t-5 {
  -webkit-clip-path: polygon(70% 25%, 74% 40%, 55% 40%);
}

.chewbacca .t-6 {
  -webkit-clip-path: polygon(26% 40%, 26% 60%, 44% 51%);
}
.chewbacca .t-7 {
  -webkit-clip-path: polygon(74% 40%, 74% 60%, 56% 51%);
}
.chewbacca .t-8 {
  -webkit-clip-path: polygon(50% 46%, 36% 40%, 44% 51%);
}
.chewbacca .t-9 {
  -webkit-clip-path: polygon(50% 46%, 64% 40%, 56% 51%);
}
.chewbacca .t-10 {
  -webkit-clip-path: polygon(26% 40%, 36% 40%, 44% 51%);
}

.chewbacca .t-11 {
  -webkit-clip-path: polygon(74% 40%, 64% 40%, 56% 51%);
}
.chewbacca .t-12 {
  -webkit-clip-path: polygon(50% 46%, 45% 40%, 47% 45%);
}
.chewbacca .t-13 {
  -webkit-clip-path: polygon(50% 46%, 55% 40%, 53% 45%);
}
.chewbacca .t-14 {
  -webkit-clip-path: polygon(36% 40%, 45% 40%, 47% 45%);
}
.chewbacca .t-15 {
  -webkit-clip-path: polygon(64% 40%, 55% 40%, 53% 45%);
}

.chewbacca .t-16 {
  -webkit-clip-path: polygon(26% 60%, 39% 74%, 44% 51%);
}
.chewbacca .t-17 {
  -webkit-clip-path: polygon(74% 60%, 61% 74%, 56% 51%);
}
.chewbacca .t-18 {
  -webkit-clip-path: polygon(26% 60%, 26% 67%, 32% 66%);
}
.chewbacca .t-19 {
  -webkit-clip-path: polygon(74% 60%, 74% 67%, 68% 66%);
}
.chewbacca .t-20 {
  -webkit-clip-path: polygon(32% 66%, 39% 74%, 33% 78%);
}

.chewbacca .t-21 {
  -webkit-clip-path: polygon(68% 66%, 61% 74%, 67% 78%);
}
.chewbacca .t-22 {
  -webkit-clip-path: polygon(50% 90%, 40% 80%, 60% 80%);
}
.chewbacca .t-23 {
  -webkit-clip-path: polygon(50% 80%, 39% 74%, 40% 80%);
}
.chewbacca .t-24 {
  -webkit-clip-path: polygon(50% 80%, 61% 74%, 60% 80%);
}
.chewbacca .t-25 {
  -webkit-clip-path: polygon(50% 80%, 44% 51%, 39% 74%);
}

.chewbacca .t-26 {
  -webkit-clip-path: polygon(50% 80%, 56% 51%, 61% 74%);
}
.chewbacca .t-27 {
  -webkit-clip-path: polygon(50% 80%, 44% 51%, 56% 51%);
}
.chewbacca .t-28 {
  -webkit-clip-path: polygon(50% 64%, 45% 58%, 55% 58%);
}
.chewbacca .t-29 {
  -webkit-clip-path: polygon(50% 55%, 45% 58%, 55% 58%);
}
.chewbacca .t-30 {
  -webkit-clip-path: polygon(50% 46%, 44% 51%, 56% 51%);
}

.chewbacca .t-1,
.chewbacca .t-8,
.chewbacca .t-12,
.chewbacca .t-13,
.chewbacca .t-20,
.chewbacca .t-22,
.chewbacca .t-23,
.chewbacca .t-25,
.chewbacca .t-28 {
  background-color: #c6a68a;
}

.chewbacca .t-2,
.chewbacca .t-6,
.chewbacca .t-9,
.chewbacca .t-11,
.chewbacca .t-17,
.chewbacca .t-21,
.chewbacca .t-24,
.chewbacca .t-27 {
  background-color: #8e6c52;
}

.chewbacca .t-3,
.chewbacca .t-4,
.chewbacca .t-5,
.chewbacca .t-7,
.chewbacca .t-10,
.chewbacca .t-16,
.chewbacca .t-18,
.chewbacca .t-19,
.chewbacca .t-26,
.chewbacca .t-29 {
  background-color: #6b5344;
}

.chewbacca .t-14,
.chewbacca .t-15,
.chewbacca .t-30 {
  background-color: #2c2b2a;
}

/* Greedo */

.greedo .t-1 {
  -webkit-clip-path: polygon(50% 31%, 47% 15%, 53% 15%);
}
.greedo .t-2 {
  -webkit-clip-path: polygon(50% 31%, 38% 25%, 48% 20%);
}
.greedo .t-3 {
  -webkit-clip-path: polygon(50% 31%, 62% 25%, 52% 20%);
}
.greedo .t-4 {
  -webkit-clip-path: polygon(51% 30%, 38% 25%, 50% 47%);
}
.greedo .t-5 {
  -webkit-clip-path: polygon(49% 30%, 62% 25%, 50% 47%);
}

.greedo .t-6 {
  -webkit-clip-path: polygon(50% 46%, 41% 30%, 40% 39%);
}
.greedo .t-7 {
  -webkit-clip-path: polygon(50% 46%, 59% 30%, 60% 39%);
}
.greedo .t-8 {
  -webkit-clip-path: polygon(41% 30%, 35% 27%, 41% 43%);
}
.greedo .t-9 {
  -webkit-clip-path: polygon(59% 30%, 65% 27%, 59% 43%);
}
.greedo .t-10 {
  -webkit-clip-path: polygon(40% 39%, 35% 27%, 30% 46%);
}

.greedo .t-11 {
  -webkit-clip-path: polygon(60% 39%, 65% 27%, 70% 46%);
}
.greedo .t-12 {
  -webkit-clip-path: polygon(35% 19%, 29% 24%, 41% 30%);
}
.greedo .t-13 {
  -webkit-clip-path: polygon(65% 19%, 71% 24%, 59% 30%);
}
.greedo .t-14 {
  -webkit-clip-path: polygon(50% 46%, 30% 46%, 40% 38%);
}
.greedo .t-15 {
  -webkit-clip-path: polygon(50% 46%, 70% 46%, 60% 38%);
}

.greedo .t-16 {
  -webkit-clip-path: polygon(25% 39%, 31% 64%, 30% 42%);
}
.greedo .t-17 {
  -webkit-clip-path: polygon(75% 39%, 69% 64%, 70% 42%);
}
.greedo .t-18 {
  -webkit-clip-path: polygon(30% 46%, 31% 64%, 43% 70%);
}
.greedo .t-19 {
  -webkit-clip-path: polygon(70% 46%, 69% 64%, 57% 70%);
}
.greedo .t-20 {
  -webkit-clip-path: polygon(33% 65%, 44% 79%, 43% 69%);
}

.greedo .t-21 {
  -webkit-clip-path: polygon(67% 65%, 56% 79%, 57% 69%);
}
.greedo .t-22 {
  -webkit-clip-path: polygon(51% 46%, 30% 46%, 50% 84%);
}
.greedo .t-23 {
  -webkit-clip-path: polygon(49% 46%, 70% 46%, 50% 84%);
}
.greedo .t-24 {
  -webkit-clip-path: polygon(50% 84%, 43% 70%, 44% 84%);
}
.greedo .t-25 {
  -webkit-clip-path: polygon(50% 84%, 57% 70%, 56% 84%);
}

.greedo .t-26 {
  -webkit-clip-path: polygon(40% 44%, 33% 58%, 47% 58%);
}
.greedo .t-27 {
  -webkit-clip-path: polygon(60% 44%, 67% 58%, 53% 58%);
}
.greedo .t-28 {
  -webkit-clip-path: polygon(40% 47%, 35% 57%, 45% 57%);
}
.greedo .t-29 {
  -webkit-clip-path: polygon(60% 47%, 65% 57%, 55% 57%);
}
.greedo .t-30 {
  -webkit-clip-path: polygon(36% 35%, 34% 40%, 38% 38%);
}

.greedo .t-1 {
  background-color: #2b7657;
}

.greedo .t-2,
.greedo .t-3,
.greedo .t-4,
.greedo .t-5,
.greedo .t-6,
.greedo .t-7,
.greedo .t-8,
.greedo .t-9,
.greedo .t-10,
.greedo .t-11,
.greedo .t-16,
.greedo .t-17,
.greedo .t-20,
.greedo .t-21 {
  background-color: #428a6f;
}

.greedo .t-12,
.greedo .t-13,
.greedo .t-14,
.greedo .t-15,
.greedo .t-18,
.greedo .t-19,
.greedo .t-22,
.greedo .t-23,
.greedo .t-24,
.greedo .t-25,
.greedo .t-30 {
  background-color: #4d9277;
}

.greedo .t-26,
.greedo .t-27 {
  background-color: #4f485e;
}

.greedo .t-28,
.greedo .t-29 {
  background-color: #61596f;
}

/* Scout Trooper */

.scouttrooper .t-1 {
  -webkit-clip-path: polygon(50% 18%, 30% 30%, 70% 30%);
}
.scouttrooper .t-2 {
  -webkit-clip-path: polygon(50% 18%, 33% 23%, 29% 31%);
}
.scouttrooper .t-3 {
  -webkit-clip-path: polygon(50% 18%, 67% 23%, 71% 31%);
}
.scouttrooper .t-4 {
  -webkit-clip-path: polygon(50% 30%, 24% 30%, 30% 41%);
}
.scouttrooper .t-5 {
  -webkit-clip-path: polygon(50% 30%, 76% 30%, 70% 41%);
}

.scouttrooper .t-6 {
  -webkit-clip-path: polygon(50% 29%, 30% 41%, 70% 41%);
}
.scouttrooper .t-7 {
  -webkit-clip-path: polygon(45% 66%, 24% 30%, 29% 70%);
}
.scouttrooper .t-8 {
  -webkit-clip-path: polygon(55% 66%, 76% 30%, 71% 70%);
}
.scouttrooper .t-9 {
  -webkit-clip-path: polygon(29% 70%, 46% 86%, 45% 65%);
}
.scouttrooper .t-10 {
  -webkit-clip-path: polygon(71% 70%, 54% 86%, 55% 65%);
}

.scouttrooper .t-11 {
  -webkit-clip-path: polygon(20% 43%, 29% 66%, 26% 38%);
}
.scouttrooper .t-12 {
  -webkit-clip-path: polygon(80% 43%, 71% 66%, 74% 38%);
}
.scouttrooper .t-13 {
  -webkit-clip-path: polygon(20% 43%, 21% 55%, 27% 60%);
}
.scouttrooper .t-14 {
  -webkit-clip-path: polygon(80% 43%, 79% 55%, 73% 60%);
}
.scouttrooper .t-15 {
  -webkit-clip-path: polygon(24% 46%, 27% 54%, 26% 45%);
}

.scouttrooper .t-16 {
  -webkit-clip-path: polygon(76% 46%, 73% 54%, 74% 45%);
}
.scouttrooper .t-17 {
  -webkit-clip-path: polygon(50% 41%, 30% 41%, 39% 56%);
}
.scouttrooper .t-18 {
  -webkit-clip-path: polygon(50% 41%, 70% 41%, 61% 56%);
}
.scouttrooper .t-19 {
  -webkit-clip-path: polygon(50% 41%, 44% 48%, 56% 48%);
}
.scouttrooper .t-20 {
  -webkit-clip-path: polygon(39% 56%, 45% 48%, 45% 66%);
}

.scouttrooper .t-21 {
  -webkit-clip-path: polygon(61% 56%, 55% 48%, 55% 66%);
}
.scouttrooper .t-22 {
  -webkit-clip-path: polygon(50% 56%, 46% 83%, 54% 83%);
}
.scouttrooper .t-23 {
  -webkit-clip-path: polygon(50% 58%, 44% 62%, 46% 83%);
}
.scouttrooper .t-24 {
  -webkit-clip-path: polygon(50% 58%, 56% 62%, 54% 83%);
}
.scouttrooper .t-25 {
  -webkit-clip-path: polygon(50% 58%, 45% 48%, 55% 48%);
}

.scouttrooper .t-26 {
  -webkit-clip-path: polygon(51% 58%, 44% 62%, 45% 48%);
}
.scouttrooper .t-27 {
  -webkit-clip-path: polygon(49% 58%, 56% 62%, 55% 48%);
}
.scouttrooper .t-28 {
  -webkit-clip-path: polygon(47% 39%, 48% 33%, 46% 33%);
}
.scouttrooper .t-29 {
  -webkit-clip-path: polygon(50% 39%, 51% 33%, 49% 33%);
}
.scouttrooper .t-30 {
  -webkit-clip-path: polygon(53% 39%, 54% 33%, 52% 33%);
}

.scouttrooper .t-1,
.scouttrooper .t-2,
.scouttrooper .t-4,
.scouttrooper .t-5,
.scouttrooper .t-7,
.scouttrooper .t-8,
.scouttrooper .t-9,
.scouttrooper .t-10,
.scouttrooper .t-11,
.scouttrooper .t-12 {
  background-color: #ffffff;
}

.scouttrooper .t-3,
.scouttrooper .t-6,
.scouttrooper .t-13,
.scouttrooper .t-14,
.scouttrooper .t-20,
.scouttrooper .t-21,
.scouttrooper .t-25,
.scouttrooper .t-26,
.scouttrooper .t-27 {
  background-color: #ececec;
}

.scouttrooper .t-15,
.scouttrooper .t-16,
.scouttrooper .t-17,
.scouttrooper .t-18,
.scouttrooper .t-19,
.scouttrooper .t-22,
.scouttrooper .t-23,
.scouttrooper .t-24,
.scouttrooper .t-28,
.scouttrooper .t-29,
.scouttrooper .t-30 {
  background-color: #414040;
}
</style>
