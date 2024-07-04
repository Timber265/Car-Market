<script>
import Button from "./UI/Button.vue";
import {gsap} from "gsap";

export default {
  name: "MainSection",
  components: {Button},

  data() {
    return {
      startText: {
        title: 'FIND YOUR NEXT CAR',
        subtitle: 'PREMIUM CARS FROM DUBAI',
      }
    }
  },
  methods: {
    beforeEnter(el) {
      el.style.opacity = '0'
    },
    startTextTitle(el) {
      gsap.to(el, {
        text: this.startText.title,
        x: 100,
        opacity: 1,
        color: 'red',
      })
      gsap.to(el, {
        scrollTrigger: {
          scrub: true,
          pin: true,
        },
        y: 500,
        x: 100
      })
    },
    startTextSubtitle(el) {
      gsap.to(el, {
        delay: 1,
        duration: 2,
        text: this.startText.subtitle
      })
      gsap.to(el, {
        scrollTrigger: {
          pin: true,
          scrub: true,
        },
        y: 500
      })
    },
    scrollDown(el) {
      const targetPosition = 1000;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 500;
      let start = null;

      window.requestAnimationFrame(function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const currentScroll = Math.min(startPosition + (distance * (progress / duration)), targetPosition);
        window.scrollTo(0, currentScroll);
        if (progress < duration) {
          window.requestAnimationFrame(step);
        }
      });
    },
  },
}
</script>

<template>
  <div style="height: 100vh">
  <div class="frame">
    <div class="bg">
      <video class="fullscreen-video" src="/mainVidon/main.mp4" autoplay loop muted/>
    </div>
    <div class="bg-bottom">
      <svg width="363" height="43" viewBox="0 0 363 43" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M65.1143 8.56748L22 42.5H340.5L297.386 8.56748C290.334 3.01753 281.621 0 272.647 0H89.8529C80.8791 0 72.166 3.01753 65.1143 8.56748Z"
            fill="#F1F0EB"/>
      </svg>
      <button
          @click="scrollDown"
          class="frame-btn"
          style="border: none; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-family: Inter; font-size: 18px; font-weight: 900">
        LET'S GO
      </button>
    </div>
    <div class="container">
      <div class="content">
        <transition @before-enter="beforeEnter" appear @enter="startTextTitle">
          <h1 class="content-text"></h1>
        </transition>
        <br>
        <transition appear @enter="startTextSubtitle">
          <h2 class="content-text sub"></h2>
        </transition>
      </div>
    </div>
  </div>
  </div>
</template>

<style scoped>
.fullscreen-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.content {
  color: white;
  margin-top: 257px;
}

.content-text {
  font-family: sans-serif;
  font-weight: 900;
  font-size: 59px;
  font-style: italic;
  margin-bottom: 20px;
  text-shadow: black 4px 5px;
  display: inline-block;


  transition: .5s;
}

.sub {
  font-weight: 700;
}

.frame {
  position: absolute;
  z-index: 2;
  top: 0;
  width: 100%;
  min-height: 100vh;
}

.bg {
  display: flex;
  justify-content: center;
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100vh;
}


.bg-bottom {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
  clip-path: circle(16%);
  transition: .6s;
}

.bg-bottom:hover {
  transition: .7s;
  bottom: 10px;
  clip-path: circle(100%);
}

@media (max-width: 990px) {
  .content {
   display: none;
  }
}
</style>