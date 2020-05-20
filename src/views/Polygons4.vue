<template>
  <body class="lukeskywalker">
    <div class="wrapper">
      <div class="console">
        <h1>POLYGONS OF THE GALAXY IV</h1>

        <button id="lukeskywalker">Luke Skywalker</button>
        <button id="rebelpilot">Rebel Pilot</button>
        <button id="emperor">Emperor Palpatine</button>
        <button id="jawa">Jawa</button>
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
          <h2 class="quote-lukeskywalker">Soon I'll be dead, and you with me</h2>
          <h2 class="quote-rebelpilot">Red Six standing by</h2>
          <h2 class="quote-emperor">So be it... Jedi</h2>
          <h2 class="quote-jawa">Utinni!</h2>
        </div>
      </div>

      <div class="explore">
        <h2>EXPLORE THE GALAXY</h2>
        <a href="/polygons" target="_blank()"><button>Episode I</button></a>
        <a href="/polygons2" target="_blank()"><button>Episode II</button></a>
        <a href="/polygons3" target="_blank()"><button>Episode III</button></a>
        <a href="/polygons4" target="_blank()"><button class="active">Episode IV</button></a>
        <a href="/polygons5" target="_blank()"><button>Episode V</button></a>
      </div>
    </div>
  </body>
</template>

<script>
$(document).ready(function() {
  $("#lukeskywalker").click(function() {
    $("body").removeClass();
    $("body").addClass("lukeskywalker");
  });
  $("#rebelpilot").click(function() {
    $("body").removeClass();
    $("body").addClass("rebelpilot");
  });
  $("#emperor").click(function() {
    $("body").removeClass();
    $("body").addClass("emperor");
  });
  $("#jawa").click(function() {
    $("body").removeClass();
    $("body").addClass("jawa");
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
.rebelpilot .console button#rebelpilot,
.lukeskywalker .console button#lukeskywalker,
.emperor .console button#emperor,
.jawa .console button#jawa {
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
.rebelpilot .quote-rebelpilot,
.lukeskywalker .quote-lukeskywalker,
.emperor .quote-emperor,
.jawa .quote-jawa {
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

/* Rebel Pilot */

.rebelpilot .t-1 {
  -webkit-clip-path: polygon(30% 83%, 29% 55%, 34% 55%);
}
.rebelpilot .t-2 {
  -webkit-clip-path: polygon(70% 83%, 71% 55%, 66% 55%);
}
.rebelpilot .t-3 {
  -webkit-clip-path: polygon(30% 83%, 25% 72%, 30% 61%);
}
.rebelpilot .t-4 {
  -webkit-clip-path: polygon(70% 83%, 75% 72%, 70% 61%);
}
.rebelpilot .t-5 {
  -webkit-clip-path: polygon(24% 48%, 25% 72%, 30% 61%);
}

.rebelpilot .t-6 {
  -webkit-clip-path: polygon(76% 48%, 75% 72%, 70% 61%);
}
.rebelpilot .t-7 {
  -webkit-clip-path: polygon(23% 47%, 30% 61%, 27% 46%);
}
.rebelpilot .t-8 {
  -webkit-clip-path: polygon(77% 47%, 70% 61%, 73% 46%);
}
.rebelpilot .t-9 {
  -webkit-clip-path: polygon(27% 46%, 29% 56%, 50% 40%);
}
.rebelpilot .t-10 {
  -webkit-clip-path: polygon(73% 46%, 71% 56%, 50% 40%);
}

.rebelpilot .t-11 {
  -webkit-clip-path: polygon(23% 47%, 44% 33%, 50% 40%);
}
.rebelpilot .t-12 {
  -webkit-clip-path: polygon(77% 47%, 56% 33%, 50% 40%);
}
.rebelpilot .t-13 {
  -webkit-clip-path: polygon(50% 55%, 36% 60%, 50% 40%);
}
.rebelpilot .t-14 {
  -webkit-clip-path: polygon(50% 55%, 64% 60%, 50% 40%);
}
.rebelpilot .t-15 {
  -webkit-clip-path: polygon(50% 40%, 29% 56%, 36% 60%);
}

.rebelpilot .t-16 {
  -webkit-clip-path: polygon(50% 40%, 71% 56%, 64% 60%);
}
.rebelpilot .t-17 {
  -webkit-clip-path: polygon(23% 47%, 30% 33%, 44% 33%);
}
.rebelpilot .t-18 {
  -webkit-clip-path: polygon(77% 47%, 70% 33%, 56% 33%);
}
.rebelpilot .t-19 {
  -webkit-clip-path: polygon(50% 40%, 44% 33%, 56% 33%);
}
.rebelpilot .t-20 {
  -webkit-clip-path: polygon(49% 39%, 53% 33%, 55% 33%);
}

.rebelpilot .t-21 {
  -webkit-clip-path: polygon(47% 37%, 49% 33%, 51% 33%);
}
.rebelpilot .t-22 {
  -webkit-clip-path: polygon(30% 33%, 45% 25%, 45% 33%);
}
.rebelpilot .t-23 {
  -webkit-clip-path: polygon(70% 33%, 55% 25%, 55% 33%);
}
.rebelpilot .t-24 {
  -webkit-clip-path: polygon(50% 20%, 48% 33%, 52% 33%);
}
.rebelpilot .t-25 {
  -webkit-clip-path: polygon(50% 20%, 45% 20%, 48% 33%);
}

.rebelpilot .t-26 {
  -webkit-clip-path: polygon(50% 20%, 55% 20%, 52% 33%);
}
.rebelpilot .t-27 {
  -webkit-clip-path: polygon(45% 20%, 45% 33%, 48% 33%);
}
.rebelpilot .t-28 {
  -webkit-clip-path: polygon(55% 20%, 55% 33%, 52% 33%);
}
.rebelpilot .t-29 {
  -webkit-clip-path: polygon(30% 33%, 32% 37%, 37% 29%);
}
.rebelpilot .t-30 {
  -webkit-clip-path: polygon(70% 33%, 68% 37%, 63% 29%);
}

.rebelpilot .t-11,
.rebelpilot .t-12,
.rebelpilot .t-22,
.rebelpilot .t-23 {
  background-color: #ffffff;
}

.rebelpilot .t-5,
.rebelpilot .t-6,
.rebelpilot .t-7,
.rebelpilot .t-8,
.rebelpilot .t-17,
.rebelpilot .t-18,
.rebelpilot .t-27,
.rebelpilot .t-28 {
  background-color: #eeeeee;
}

.rebelpilot .t-3,
.rebelpilot .t-4,
.rebelpilot .t-24,
.rebelpilot .t-25,
.rebelpilot .t-26,
.rebelpilot .t-29,
.rebelpilot .t-30 {
  background-color: #a53038;
}

.rebelpilot .t-1,
.rebelpilot .t-2,
.rebelpilot .t-19 {
  background-color: #4f4f4f;
}

.rebelpilot .t-9,
.rebelpilot .t-10,
.rebelpilot .t-13,
.rebelpilot .t-14,
.rebelpilot .t-20,
.rebelpilot .t-21 {
  background-color: #feb510;
}

.rebelpilot .t-15,
.rebelpilot .t-16 {
  background-color: #fdbc2a;
}

/* Luke Skywalker */

.lukeskywalker .t-1 {
  -webkit-clip-path: polygon(67% 60%, 74% 56%, 67% 65%);
}
.lukeskywalker .t-2 {
  -webkit-clip-path: polygon(68% 49%, 74% 56%, 67% 60%);
}
.lukeskywalker .t-3 {
  -webkit-clip-path: polygon(68% 49%, 74% 56%, 72% 34%);
}
.lukeskywalker .t-4 {
  -webkit-clip-path: polygon(60% 40%, 63% 22%, 72% 34%);
}
.lukeskywalker .t-5 {
  -webkit-clip-path: polygon(60% 40%, 63% 22%, 59% 19%);
}

.lukeskywalker .t-6 {
  -webkit-clip-path: polygon(60% 40%, 54% 20%, 59% 19%);
}
.lukeskywalker .t-7 {
  -webkit-clip-path: polygon(60% 40%, 54% 20%, 46% 17%);
}
.lukeskywalker .t-8 {
  -webkit-clip-path: polygon(60% 40%, 27% 32%, 46% 17%);
}
.lukeskywalker .t-9 {
  -webkit-clip-path: polygon(35% 23%, 27% 32%, 46% 17%);
}
.lukeskywalker .t-10 {
  -webkit-clip-path: polygon(33% 52%, 27% 32%, 60% 40%);
}

.lukeskywalker .t-11 {
  -webkit-clip-path: polygon(33% 52%, 50% 51%, 60% 40%);
}
.lukeskywalker .t-12 {
  -webkit-clip-path: polygon(58% 45%, 50% 51%, 60% 40%);
}
.lukeskywalker .t-13 {
  -webkit-clip-path: polygon(33% 52%, 26% 52%, 27% 32%);
}
.lukeskywalker .t-14 {
  -webkit-clip-path: polygon(33% 52%, 26% 52%, 33% 63%);
}
.lukeskywalker .t-15 {
  -webkit-clip-path: polygon(67% 60%, 33% 52%, 33% 66%);
}

.lukeskywalker .t-16 {
  -webkit-clip-path: polygon(68% 49%, 33% 52%, 67% 60%);
}
.lukeskywalker .t-17 {
  -webkit-clip-path: polygon(60% 40%, 58% 45%, 68% 49%);
}
.lukeskywalker .t-18 {
  -webkit-clip-path: polygon(50% 51%, 58% 45%, 68% 49%);
}
.lukeskywalker .t-19 {
  -webkit-clip-path: polygon(40% 77%, 33% 66%, 67% 60%);
}
.lukeskywalker .t-20 {
  -webkit-clip-path: polygon(40% 77%, 47% 83%, 50% 77%);
}

.lukeskywalker .t-21 {
  -webkit-clip-path: polygon(60% 77%, 53% 83%, 50% 77%);
}
.lukeskywalker .t-22 {
  -webkit-clip-path: polygon(60% 77%, 40% 77%, 67% 60%);
}
.lukeskywalker .t-23 {
  -webkit-clip-path: polygon(50% 76%, 47% 83%, 53% 83%);
}
.lukeskywalker .t-24 {
  -webkit-clip-path: polygon(65% 70%, 67% 60%, 60% 77%);
}
.lukeskywalker .t-25 {
  -webkit-clip-path: polygon(68% 49%, 60% 40%, 72% 34%);
}

.lukeskywalker .t-26 {
  -webkit-clip-path: polygon(50% 81%, 48% 78%, 52% 78%);
}
.lukeskywalker .t-27 {
  -webkit-clip-path: polygon(42% 54%, 39% 56%, 46% 56%);
}
.lukeskywalker .t-28 {
  -webkit-clip-path: polygon(43% 58%, 39% 56%, 46% 56%);
}
.lukeskywalker .t-29 {
  -webkit-clip-path: polygon(58% 54%, 61% 56%, 54% 56%);
}
.lukeskywalker .t-30 {
  -webkit-clip-path: polygon(57% 58%, 61% 56%, 54% 56%);
}

.lukeskywalker .t-1,
.lukeskywalker .t-2,
.lukeskywalker .t-3,
.lukeskywalker .t-4,
.lukeskywalker .t-5,
.lukeskywalker .t-6,
.lukeskywalker .t-7,
.lukeskywalker .t-8,
.lukeskywalker .t-9,
.lukeskywalker .t-10,
.lukeskywalker .t-11,
.lukeskywalker .t-12,
.lukeskywalker .t-13,
.lukeskywalker .t-14,
.lukeskywalker .t-25 {
  background-color: #be9664;
}

.lukeskywalker .t-15,
.lukeskywalker .t-16,
.lukeskywalker .t-17,
.lukeskywalker .t-18,
.lukeskywalker .t-19,
.lukeskywalker .t-20,
.lukeskywalker .t-21,
.lukeskywalker .t-22,
.lukeskywalker .t-23,
.lukeskywalker .t-24 {
  background-color: #f7b6a0;
}

.lukeskywalker .t-26 {
  background-color: #f0a085;
}

.lukeskywalker .t-27,
.lukeskywalker .t-28,
.lukeskywalker .t-29,
.lukeskywalker .t-30 {
  background-color: #ffffff;
}

/* Emperor Palpatine */

.emperor .t-1 {
  -webkit-clip-path: polygon(37% 49%, 50% 76%, 50% 51%);
}
.emperor .t-2 {
  -webkit-clip-path: polygon(63% 49%, 50% 76%, 50% 51%);
}
.emperor .t-3 {
  -webkit-clip-path: polygon(37% 49%, 50% 76%, 44% 74%);
}
.emperor .t-4 {
  -webkit-clip-path: polygon(63% 49%, 50% 76%, 56% 74%);
}
.emperor .t-5 {
  -webkit-clip-path: polygon(37% 49%, 37% 66%, 44% 74%);
}

.emperor .t-6 {
  -webkit-clip-path: polygon(63% 49%, 63% 66%, 56% 74%);
}
.emperor .t-7 {
  -webkit-clip-path: polygon(37% 49%, 37% 66%, 31% 48%);
}
.emperor .t-8 {
  -webkit-clip-path: polygon(63% 49%, 63% 66%, 69% 48%);
}
.emperor .t-9 {
  -webkit-clip-path: polygon(50% 51%, 22% 47%, 50% 45%);
}
.emperor .t-10 {
  -webkit-clip-path: polygon(50% 51%, 78% 47%, 50% 45%);
}

.emperor .t-11 {
  -webkit-clip-path: polygon(12% 70%, 32% 80%, 21% 48%);
}
.emperor .t-12 {
  -webkit-clip-path: polygon(88% 70%, 68% 80%, 79% 48%);
}
.emperor .t-13 {
  -webkit-clip-path: polygon(29% 47%, 25% 60%, 21% 48%);
}
.emperor .t-14 {
  -webkit-clip-path: polygon(71% 47%, 75% 60%, 79% 48%);
}
.emperor .t-15 {
  -webkit-clip-path: polygon(33% 26%, 50% 45%, 21% 48%);
}

.emperor .t-16 {
  -webkit-clip-path: polygon(67% 26%, 50% 45%, 79% 48%);
}
.emperor .t-17 {
  -webkit-clip-path: polygon(33% 26%, 50% 45%, 50% 16%);
}
.emperor .t-18 {
  -webkit-clip-path: polygon(67% 26%, 50% 45%, 50% 16%);
}
.emperor .t-19 {
  -webkit-clip-path: polygon(28% 50%, 36% 46%, 29% 47%);
}
.emperor .t-20 {
  -webkit-clip-path: polygon(72% 50%, 64% 46%, 71% 47%);
}

.emperor .t-21 {
  -webkit-clip-path: polygon(50% 82%, 44% 87%, 56% 87%);
}
.emperor .t-22 {
  -webkit-clip-path: polygon(50% 82%, 44% 87%, 44% 82%);
}
.emperor .t-23 {
  -webkit-clip-path: polygon(50% 82%, 56% 87%, 56% 82%);
}
.emperor .t-24 {
  -webkit-clip-path: polygon(45% 83%, 46% 86%, 46% 83%);
}
.emperor .t-25 {
  -webkit-clip-path: polygon(52% 83%, 46% 84%, 46% 83%);
}

.emperor .t-26 {
  -webkit-clip-path: polygon(55% 85%, 53% 86%, 55% 83%);
}
.emperor .t-27 {
  -webkit-clip-path: polygon(48% 86%, 50% 86%, 53% 84%);
}
.emperor .t-28 {
  -webkit-clip-path: polygon(48% 84%, 50% 85%, 50% 84%);
}
.emperor .t-29 {
  -webkit-clip-path: polygon(43% 69%, 50% 66%, 50% 67%);
}
.emperor .t-30 {
  -webkit-clip-path: polygon(57% 69%, 50% 66%, 50% 67%);
}

.emperor .t-1,
.emperor .t-2,
.emperor .t-3,
.emperor .t-4,
.emperor .t-5,
.emperor .t-6,
.emperor .t-7,
.emperor .t-8,
.emperor .t-24,
.emperor .t-25,
.emperor .t-26,
.emperor .t-27,
.emperor .t-28 {
  background-color: #c4c5bf;
}

.emperor .t-9,
.emperor .t-10 {
  background-color: #888985;
}

.emperor .t-11,
.emperor .t-13,
.emperor .t-15,
.emperor .t-17,
.emperor .t-19,
.emperor .t-29,
.emperor .t-30 {
  background-color: #2a3838;
}

.emperor .t-12,
.emperor .t-14,
.emperor .t-16,
.emperor .t-18,
.emperor .t-20,
.emperor .t-21,
.emperor .t-22,
.emperor .t-23 {
  background-color: #202928;
}

/* Jawa */

.jawa .t-1 {
  -webkit-clip-path: polygon(58% 17%, 58% 22%, 82% 19%);
}
.jawa .t-2 {
  -webkit-clip-path: polygon(61% 29%, 58% 22%, 82% 19%);
}
.jawa .t-3 {
  -webkit-clip-path: polygon(61% 29%, 70% 37%, 82% 19%);
}
.jawa .t-4 {
  -webkit-clip-path: polygon(95% 37%, 70% 37%, 82% 19%);
}
.jawa .t-5 {
  -webkit-clip-path: polygon(95% 37%, 97% 19%, 82% 19%);
}

.jawa .t-6 {
  -webkit-clip-path: polygon(75% 37%, 71% 40%, 79% 40%);
}
.jawa .t-7 {
  -webkit-clip-path: polygon(75% 37%, 71% 40%, 70% 37%);
}
.jawa .t-8 {
  -webkit-clip-path: polygon(75% 37%, 80% 37%, 79% 40%);
}
.jawa .t-9 {
  -webkit-clip-path: polygon(90% 37%, 86% 40%, 94% 40%);
}
.jawa .t-10 {
  -webkit-clip-path: polygon(90% 37%, 86% 40%, 85% 37%);
}

.jawa .t-11 {
  -webkit-clip-path: polygon(90% 37%, 95% 37%, 94% 40%);
}
.jawa .t-12 {
  -webkit-clip-path: polygon(50% 17%, 45% 40%, 55% 40%);
}
.jawa .t-13 {
  -webkit-clip-path: polygon(48% 27%, 45% 40%, 36% 40%);
}
.jawa .t-14 {
  -webkit-clip-path: polygon(52% 27%, 55% 40%, 64% 40%);
}
.jawa .t-15 {
  -webkit-clip-path: polygon(29% 49%, 45% 40%, 36% 40%);
}

.jawa .t-16 {
  -webkit-clip-path: polygon(71% 49%, 55% 40%, 64% 40%);
}
.jawa .t-17 {
  -webkit-clip-path: polygon(29% 49%, 28% 61%, 34% 46%);
}
.jawa .t-18 {
  -webkit-clip-path: polygon(71% 49%, 72% 61%, 66% 46%);
}
.jawa .t-19 {
  -webkit-clip-path: polygon(25% 68%, 31% 53%, 26% 78%);
}
.jawa .t-20 {
  -webkit-clip-path: polygon(75% 68%, 69% 53%, 74% 78%);
}

.jawa .t-21 {
  -webkit-clip-path: polygon(37% 71%, 30% 58%, 26% 78%);
}
.jawa .t-22 {
  -webkit-clip-path: polygon(63% 71%, 70% 58%, 74% 78%);
}
.jawa .t-23 {
  -webkit-clip-path: polygon(37% 71%, 37% 80%, 26% 78%);
}
.jawa .t-24 {
  -webkit-clip-path: polygon(63% 71%, 63% 80%, 74% 78%);
}
.jawa .t-25 {
  -webkit-clip-path: polygon(37% 71%, 37% 80%, 50% 76%);
}

.jawa .t-26 {
  -webkit-clip-path: polygon(63% 71%, 63% 80%, 50% 76%);
}
.jawa .t-27 {
  -webkit-clip-path: polygon(50% 76%, 37% 80%, 63% 80%);
}
.jawa .t-28 {
  -webkit-clip-path: polygon(59% 24%, 58% 22%, 68% 22%);
}
.jawa .t-29 {
  -webkit-clip-path: polygon(44% 50%, 40% 56%, 48% 56%);
}
.jawa .t-30 {
  -webkit-clip-path: polygon(56% 50%, 60% 56%, 52% 56%);
}

.jawa .t-1,
.jawa .t-12,
.jawa .t-13,
.jawa .t-14,
.jawa .t-15,
.jawa .t-16,
.jawa .t-19,
.jawa .t-20,
.jawa .t-27 {
  background-color: #9a5f41;
}

.jawa .t-2,
.jawa .t-3,
.jawa .t-4,
.jawa .t-5,
.jawa .t-6,
.jawa .t-9,
.jawa .t-17,
.jawa .t-18,
.jawa .t-21,
.jawa .t-22,
.jawa .t-23,
.jawa .t-24,
.jawa .t-25,
.jawa .t-26 {
  background-color: #744c33;
}

.jawa .t-7,
.jawa .t-8,
.jawa .t-10,
.jawa .t-11,
.jawa .t-28 {
  background-color: #2e2e2e;
}

.jawa .t-29,
.jawa .t-30 {
  background-color: #faf340;
}
</style>
