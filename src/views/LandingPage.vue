<template>
  <div class="area w-full">
    <ul class="circles">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <section id="sec-1">
      <div class="container">
        <h1>CODE SNIPPET</h1>
        <div class="left w-1/2">
          <h2>
            <span>BUILD, CODE, WORK !</span>
          </h2>
          <p>
            CodeSnippet is the easiest way for a team or a classroom to train to
            code. By creating a CodeSnippet project, you can easily share and improve your code with
            teachers or friends. It's the simplest way to share and bring your ideas
            to life !
          </p>
        </div>
        <div class="right lp-image">
          <img :src="this.img.img6" alt="" />
        </div>
      </div>
    </section>
    <section id="sec-2">
      <div class="container">
        <div class="team">
          <h1 class="team-h1 text-black">LA FINE EQUIPE</h1>
          <!-- member-->
          <div class="team-member">
            <img
              class="team-photo"
              :src="this.img.img1"
              alt="Alexis Capdepon"
            />
            <h3>Alexis Capdepon</h3>
            <span class="text-black"
              >Chef de projet <br />
              <small>Folle à chats</small>
            </span>
          </div>
          <!-- member-->
          <div class="team-member">
            <img class="team-photo" :src="img.img2" alt="Miki Namsrai" />
            <h3>Miki Namsrai</h3>
            <span class="text-black">
              Chef de projet <br />
              <small>Ressources Humaines</small>
            </span>
          </div>
          <!-- member-->
          <div class="team-member">
            <img class="team-photo" :src="img.img3" alt="Antoine Macheda" />
            <h3>Antoine Macheda</h3>
            <span class="text-black">
              Développement Front <br />
              <small>Homme à problèmes</small>
            </span>
          </div>
          <!-- member-->
          <div class="team-member">
            <img class="team-photo" :src="img.img4" alt="Aimee Ritleng" />
            <h3>Aimee Ritleng</h3>
            <span class="text-black">
              Développement Back <br />
              <small>#TeamGerbilles</small>
            </span>
          </div>
          <!-- member-->
          <div class="team-member">
            <img class="team-photo" :src="img.img5" alt="Gregg Sanchez" />
            <h3>Gregg Sanchez</h3>
            <span class="text-black">
              Développement Front <br />
              <small>#TeamChien</small>
            </span>
          </div>
        </div>
      </div>
    </section>
    <section id="sec-3">
      <div class="container">
        <div class="cards-infos flex justify-between">
          <div class="card shadow sm:rounded-lg">
            <div
              class="card-icon shadow sm:rounded-lg flex items-center justify-center"
            >
              <v-mdi name="mdi-account-group-outline" slot="prefix"></v-mdi>
            </div>
            <div class="px-4 py-5">
              <h3 class="text-lg leading-6 font-medium">Work together</h3>
              <p class="mt-1 max-w-2xl text-sm text-gray-500 text-justify">
                Build with your teammates, friends or teachers easily with a
                group project. Each member or sub-team has a folder with rights
                and can collaborate with others to bring the snippet to life.
              </p>
            </div>
          </div>
          <div class="card shadow sm:rounded-lg">
            <div
              class="card-icon shadow sm:rounded-lg flex items-center justify-center"
            >
              <v-mdi name="mdi-cube-scan" slot="prefix"></v-mdi>
            </div>
            <div class="px-4 py-5">
              <h3 class="text-lg leading-6 font-medium">Learn and Improve</h3>
              <p class="mt-1 max-w-2xl text-sm text-gray-500 text-justify">
                With the help of your teammates or your teacher, they can bring
                review your code and improve your work. If they have access to
                your folder, they also can edit your code and make it
                work&nbsp;!
              </p>
            </div>
          </div>
          <div class="card shadow sm:rounded-lg">
            <div
              class="card-icon shadow sm:rounded-lg flex items-center justify-center"
            >
              <v-mdi name="mdi-card-search-outline" slot="prefix"></v-mdi>
            </div>
            <div class="px-4 py-5">
              <h3 class="text-lg leading-6 font-medium">Live preview</h3>
              <p class="mt-1 max-w-2xl text-sm text-gray-500 text-justify">
                While you code, you can watch the changes directly on the page.
                It allows you to have a online preview of your work. With the
                master folder, you always have access to the project's backbone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import team1 from '../assets/img/landing-page/team-1.png';
import team2 from '../assets/img/landing-page/team-2.png';
import team3 from '../assets/img/landing-page/team-3.png';
import team4 from '../assets/img/landing-page/team-4.png';
import team5 from '../assets/img/landing-page/team-5.png';

import lpImg from '../assets/img/landing-page/lp-img.png';

export default {
  data: () => ({
    retrieved: false,
    windowSize: 0,
    counter: 0,
    email: '',
    userName: '',
    password: '',
    img: {
      img1: team1,
      img2: team2,
      img3: team3,
      img4: team4,
      img5: team5,
      img6: lpImg,
    },
  }),
  created() {
    this.$store.dispatch('retrieve').then(({ dark }) => {
      this.$dark(dark);
      this.retrieved = true;
    });
  },
  computed: {
    mobileMenu() {
      return this.$store.state.mobileMenu;
    },
  },
  methods: {
    resizeHandler() {
      this.windowSize = window.innerWidth;
    },
    count() {
      this.counter += 1;
    },
  },
  mounted() {
    this.resizeHandler();
    window.addEventListener('resize', this.resizeHandler);
  },
};
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
}

.container {
  width: 95%;
  height: 100%;
  margin: 0 auto;
}

section#sec-1 {
  height: 92vh;
  max-height: 600px;
}

section#sec-1 h1 {
  color: #fff;
  font-size: 5rem;
  font-weight: 700;
}

section#sec-1 h2 {
  font-size: 2rem;
  font-weight: 500;
  margin: 25px 0;
  color: white;
  letter-spacing: 1px;
  font-weight: 500;
  position: relative;
  padding-left: 10px;
}

section#sec-1 h2 span{
  z-index: 1;
  position: relative;
}

section#sec-1 h2:before {
  content: "";
  display: block;
  position: absolute;
  height: 100%;
  z-index: 0; /* Place the pseudo element right under the content */
  bottom: 0;
  left: 0px;
  background-color: rgba(59, 130, 246, 1);
  animation-name: highlight;
  animation-duration: 0.75s;
  animation-delay: 2s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}

@keyframes highlight {
  0% {
    width: 0;
    opacity: 0;
  }

  100% {
    width: 370px;
    opacity: 1;
  }

}

section#sec-1 p {
  font-size: 1.2rem;
  // padding-left: 7px;
  color: white;
}

section#sec-1 .container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
}

section#sec-1 .right img {
  width: 30vw;
  filter: drop-shadow(0 0 7px rgba(0,0,0,.4));
}

section#sec-1 .right {
  position: absolute;
  right: 0;
  bottom: 0;
}

.right {
  position: relative;
  animation-timing-function: ease-in;
  animation: mymove 2s;
}
.left {
  position: relative;
  animation-timing-function: ease-in;
  animation: mymove-2 2s;
}

.team-photo:hover{
  animation-timing-function: ease-in-out;
  animation: rotate 1s;
}

@keyframes mymove {
  from {
    right: -500px;
  }
  to {
    right: 0px;
  }
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes mymove-2 {
  from {
    right: 500px;
  }
  to {
    right: 0px;
  }
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

section#sec-2 {
  // height: 100vh;
  padding: 4.5rem 0 7.5rem;
  background-color: #fff;
}
section#sec-2 .container {
  display: flex;
  align-items: center;
  justify-content: center;
}
section#sec-2 .team-h1 {
  display: flex;
  justify-content: center;
  font-size: 25px;
  padding: 25px;
  color: black;
  font-weight: bold;
  letter-spacing: 2px;
}
section#sec-2 .team-container {
  margin: auto;
  border-top: 1px #e9e9e9 solid;
  border-bottom: 1px #e9e9e9 solid;
  padding-top: 5em;
  padding-bottom: 5em;
  margin-top: 3em;
}
section#sec-2 .team-member {
  width: 16%;
  float: left;
  text-align: center;
  margin-right: 5%;
}
section#sec-2 .team-member:last-child {
  margin-right: 0;
}

section#sec-2 .team-member span,
.team-member h3 {
  max-width: 200px;
  font-family: sans-serif;
  letter-spacing: -1px;
}
section#sec-2 .team-member h3 {
  color: #1ca3a3;
}

section#sec-2 .team-photo {
  border-radius: 50%;
  text-align: center;
  margin: auto auto 0.5rem;
  max-width: 100%;
  height: auto;
  transition: 0.5s transform ease-in-out;
}
section#sec-2.team-photo:hover {
  transform: scale(0.9);
  cursor: pointer;
}
/* code for phone layout */
@media (max-width: 850px) {
  .team-member {
    width: 25%;
    margin-left: 4%;
    margin-right: 4%;
    margin-bottom: 40px;
  }
  section#sec-1 .container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
}

section#sec-3 {
  background: #4e54c8; //78, 84, 200
  background: -webkit-linear-gradient(to left, #8f94fb, #4e54c8);
  padding: 7rem 0 5rem;
}

.cards-infos {
  .card {
    background-color: #1a192b;
    color: #ffffff;
    padding: 1.5rem 1.5rem 2rem;
    margin: 2rem 0;
    position: relative;
    width: 32%;
    .card-icon {
      padding: 1rem;
      width: 5rem;
      height: 5rem;
      background-color: #fff;
      color: #1a192b;
      margin-top: -66px;
      svg {
        width: 90%;
        height: 100%;
      }
    }
    h3 {
      margin-bottom: 1rem;
    }
  }
}

.footer {
  width: 100%;
  height: 30vh;
  background-color: #1a192b;
  color: #ffffff;
}
</style>
