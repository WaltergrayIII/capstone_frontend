<template>
  <div>
    <section>
      <ul class="actions fit small">
        <li>
          <router-link
            v-bind:to="'/products'"
            class="button primary fit small"
          >Check Out Everyone Star Wars Stuff</router-link>
        </li>
        <li>
          <router-link
            v-bind:to="'/products/new'"
            class="button fit small"
          >Show off One of your own Collectables</router-link>
        </li>
        <li>
          <router-link v-bind:to="'/swapi'" class="button primary fit small">Star Wars Info</router-link>
        </li>
        <li>
          <router-link v-bind:to="'/polygons'" class="button fit small">Polygons of the Universe</router-link>
        </li>
      </ul>
    </section>
    <section>
      <ul class="actions fit small">
        <li>
          <router-link
            v-bind:to="'/starwarsname'"
            class="button primary fit small"
          >Find out your own Star Wars name!</router-link>
        </li>
        <li>
          <router-link v-bind:to="'/movielink'" class="button fit small">Movie Links</router-link>
        </li>
        <li>
          <router-link v-bind:to="'/home'" class="button fit primary small">Back to Star Wars Crawl</router-link>
        </li>
      </ul>
    </section>
    <section>
      <ul class="actions fit small">
        <li>
          <router-link v-bind:to="'/signup'" class="button primary fit small">Signup!</router-link>
        </li>
        <li>
          <router-link v-bind:to="'/logout'" class="button fit small">Logout</router-link>
        </li>
      </ul>
    </section>
    <h1 class="me">Move your mouse around</h1>
    <img class="bb1" src="http://i.imgur.com/LOVEc.jpg" />
    <div id="bb8">
      <div class="antennaes">
        <div class="antennae-1"></div>
        <div class="antennae-2"></div>
      </div>
      <div class="head">
        <div class="grey-line"></div>
        <div class="orange-line"></div>

        <div class="outer-eye">
          <div class="glimmer-1"></div>
          <div class="glimmer-2"></div>
          <div class="inner-eye"></div>
        </div>

        <div class="bulls-eye">
          <div class="bulls-eye-inner"></div>
        </div>
        <div class="bottom"></div>
      </div>
      <div class="body">
        <div class="orange-ring-1"></div>
        <div class="orange-ring-2"></div>
        <div class="orange-ring-3"></div>
        <div class="orange-ring-4"></div>
        <div class="grey-ring-1"></div>
        <div class="grey-ring-2"></div>
        <div class="grey-ring-3"></div>
        <div class="rivet-1"></div>
        <div class="rivet-2"></div>
        <div class="rivet-3"></div>
        <div class="rivet-4"></div>
      </div>
      <div class="body-shadow"></div>
    </div>
  </div>
</template>


<script>
var $w = $(window).width();
var $dW = $("#bb8").width();
var $dPos = 0;
var $dSpeed = 1;
var $dMinSpeed = 1;
var $dMaxSpeed = 5;
var $dAccel = 1.05;
var $dRot = 0;
var $myPos = $w - $w / 5;
var $slowOffset = 120;
var $movingRight = true;

var roll = function() {
  if ($myPos > $dPos + $dW / 4) {
    // moving right
    if (!$movingRight) {
      $movingRight = true;
      $(".antennaes").removeClass("left");
      $(".outer-eye").removeClass("left");
      $(".bulls-eye").removeClass("left");
    }
    if ($myPos - $dPos > $slowOffset) {
      if ($dSpeed < $dMaxSpeed) {
        // speed up
        $dSpeed = $dSpeed * $dAccel;
      }
    } else if ($myPos - $dPos < $slowOffset) {
      if ($dSpeed > $dMinSpeed) {
        // slow down
        $dSpeed = $dSpeed / $dAccel;
      }
    }
    $dPos = $dPos + $dSpeed;
    $dRot = $dRot + $dSpeed;
  } else if ($myPos < $dPos - $dW / 4) {
    // moving left
    if ($movingRight) {
      $movingRight = false;
      $(".antennaes").addClass("left");
      $(".outer-eye").addClass("left");
      $(".bulls-eye").addClass("left");
    }
    if ($dPos - $myPos > $slowOffset) {
      if ($dSpeed < $dMaxSpeed) {
        // speed up
        $dSpeed = $dSpeed * $dAccel;
      }
    } else if ($dPos - $myPos < $slowOffset) {
      if ($dSpeed > $dMinSpeed) {
        // slow down
        $dSpeed = $dSpeed / $dAccel;
      }
    }
    $dPos = $dPos - $dSpeed;
    $dRot = $dRot - $dSpeed;
  }

  $("#bb8").css("left", $dPos);
  $(".body").css({ transform: "rotate(" + $dRot + "deg)" });
};

setInterval(roll, 10);

$(document).on("mousemove", function(event) {
  $myPos = event.pageX;
});
</script>

<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Raleway);
$body-color: #ffefe2;
$light-grey: #c0bbbb;
$orange: #ed783b;

@import url(https://fonts.googleapis.com/css?family=Roboto:700);

@mixin center() {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

img.bb1 {
  width: 100%;
  height: 100%;
}

h1.me {
  font-family: "Roboto", sans-serif;
  color: black;
  text-align: center;
}

body {
  background-color: #fedaa9;
}

#bb8 {
  display: inline-block;
  position: absolute;
  margin-top: 400px;
}

.antennaes {
  position: relative;
  left: -20px;
  transition: left 0.5s ease-out;
  .antennae-1 {
    background-color: $light-grey;
    display: block;
    margin: auto;
    position: relative;
    top: 40px;
    height: 25px;
    width: 4px;
  }

  .antennae-2 {
    background-color: $light-grey;
    display: block;
    margin: auto;
    position: relative;
    left: 20px;
    top: 5px;
    height: 35px;
    width: 2px;
  }
}

.antennaes.left {
  left: 12px;
}

.head {
  position: relative;
  display: block;
  margin: auto;
  background-color: $body-color;
  border-radius: 135px 135px 0px 0px;
  height: 84px;
  width: 135px;
  overflow: hidden;
  z-index: 70;

  .grey-line {
    background-color: $light-grey;
    height: 10px;
    margin-top: 8px;
  }
  .orange-line {
    background-color: $orange;
    height: 8px;
    margin-top: 10px;
  }
  .outer-eye {
    background-color: #4b4b4b;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    @include center();
    left: 90px;
    border: 4px solid $body-color;
    transition: left 0.5s ease-out;
  }

  .outer-eye.left {
    left: 45px;
  }
  .inner-eye {
    background-color: #393939;
    height: 25px;
    width: 25px;
    border-radius: 50%;
    @include center();
  }
  .glimmer-1 {
    background-color: #b6b6b6;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    position: absolute;
    top: 10px;
    left: 24px;
    z-index: 100;
  }
  .glimmer-2 {
    background-color: #b6b6b6;
    height: 6px;
    width: 6px;
    border-radius: 50%;
    position: absolute;
    top: 7px;
    left: 16px;
    z-index: 100;
  }

  .bulls-eye {
    background-color: $body-color;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    position: relative;
    top: 10px;
    left: 110px;
    border: 3px solid #393939;
    transition: left 0.5s ease-out;
  }

  .bulls-eye.left {
    left: 65px;
  }

  .bulls-eye-inner {
    background-color: #393939;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    @include center();
  }
  .bottom {
    position: absolute;
    bottom: 0;
    background-color: $light-grey;
    height: 8px;
    width: 135px;
    z-index: 100;
  }
}

.body {
  position: relative;
  top: -10px;
  display: block;
  margin: auto;
  background-color: $body-color;
  width: 210px;
  height: 210px;
  border-radius: 50%;
  overflow: hidden;
}

.body-shadow {
  background-color: #ebc08d;
  display: block;
  margin: auto;
  position: relative;
  top: -25px;
  width: 170px;
  height: 30px;
  border-radius: 50%;
  z-index: -10;
}

.orange-ring {
  background-color: $body-color;
  border-color: $orange;
  border-style: solid;
  border-radius: 50%;
  z-index: 50;
}

.orange-ring-1 {
  @extend .orange-ring;
  height: 90px;
  width: 70px;
  border-left-width: 15px;
  border-right-width: 9px;
  border-top-width: 13px;
  border-bottom-width: 13px;
  position: relative;
  left: 100px;
  top: 40px;
}

.orange-ring-2 {
  @extend .orange-ring;
  transform: rotateZ(-2deg);
  height: 80px;
  width: 30px;
  border-left-width: 8px;
  border-right-width: 13px;
  border-top-width: 13px;
  border-bottom-width: 13px;
  position: absolute;
  left: -8px;
  top: 60px;
}

.orange-ring-3 {
  @extend .orange-ring;
  transform: rotateZ(-2deg);
  height: 30px;
  width: 150px;
  border-left-width: 11px;
  border-right-width: 11px;
  border-top-width: 13px;
  border-bottom-width: 13px;
  position: absolute;
  bottom: -30px;
  left: 50px;
}

.orange-ring-4 {
  @extend .orange-ring;
  transform: rotateZ(-10deg);
  height: 20px;
  width: 150px;
  border-left-width: 11px;
  border-right-width: 11px;
  border-top-width: 13px;
  border-bottom-width: 13px;
  position: absolute;
  top: -30px;
  left: 50px;
}

.grey-ring {
  background: rgba(0, 0, 0, 0);
  position: absolute;
  border-radius: 50%;
  border: 5px solid #888895;
  transform: rotateZ(-10deg);
}
.grey-ring-1 {
  @extend .grey-ring;
  width: 400px;
  height: 110px;
  top: -10px;
  left: -100px;
}

.grey-ring-2 {
  @extend .grey-ring;
  top: -20px;
  left: -5px;
  width: 150px;
  height: 250px;
}

.grey-ring-3 {
  @extend .grey-ring;
  top: 0;
  left: 5px;
  width: 210px;
  height: 210px;
}

.rivet {
  background-color: #888895;
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.rivet-1 {
  @extend .rivet;
  left: 65px;
  top: 80px;
}

.rivet-2 {
  @extend .rivet;
  left: 75px;
  top: 135px;
}

.rivet-3 {
  @extend .rivet;
  left: 195px;
  top: 50px;
}

.rivet-4 {
  @extend .rivet;
  left: 207px;
  top: 110px;
}
</style>

