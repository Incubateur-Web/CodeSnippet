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
       <div class="left w-full">
         <h1>Code Snippet</h1>
         <h2>Build, code, work : welcome to the CodeSnippet community,
           where teachers and students can learn and work together !</h2>
         <p>CodeSnippet is the easiest way for a team or a classroom to train to code.
           By creating a CodeSnippet project  with yours friends or teachers,
           you can easily share to others and improve your code with their reviews.
           It's the simplest way to share and bring your ideas to life !</p>
       </div>
<!--       <div class="right">
         <div class="img-mid">
           <img src="https://picsum.photos/500" alt="trest"/>
         </div>
       </div>-->
     </div>
   </section>
   <section id="sec-2">
     <div class="container">
       <div class="team">
         <h1 class="team-h1 text-black">La fine Equipe</h1>
         <!-- member-->
         <div class="team-member">
           <img class="team-photo" :src="this.img.img1" alt="Alexis Capdepon">
           <h3>Alexis Capdepon</h3>
           <span class="text-black">Chef de projet</span>
         </div>
         <!-- member-->
         <div class="team-member">
           <img class="team-photo" :src="img.img2" alt="Miki Namsrai">
           <h3>Miki Namsrai</h3>
           <span class="text-black">Chef de projet</span>
         </div>
         <!-- member-->
         <div class="team-member">
           <img class="team-photo" :src="img.img3" alt="Antoine Macheda">
           <h3>Antoine Macheda</h3>
           <span class="text-black">Développement Front - Contenu</span>
         </div>
         <!-- member-->
         <div class="team-member">
           <img class="team-photo" :src="img.img4" alt="Aimee Ritleng">
           <h3>Aimee Ritleng</h3>
           <span class="text-black">Développement Front - Graphisme</span>
         </div>
         <!-- member-->
         <div class="team-member">
           <img class="team-photo" :src="img.img5" alt="Gregg Sanchez">
           <h3>Gregg Sanchez</h3>
           <span class="text-black">Développement Front</span>
         </div>
       </div>
     </div>
   </section>
   <section id="sec-3">
     <div class="container">
       <div class="cards-infos flex justify-between">
         <div class="card shadow sm:rounded-lg">
           <div class="card-icon shadow sm:rounded-lg flex items-center justify-center">
             <v-mdi name="mdi-account-group-outline" slot="prefix"></v-mdi>
           </div>
           <div class="px-4 py-5">
             <h3 class="text-lg leading-6 font-medium">
               Work together
             </h3>
             <p class="mt-1 max-w-2xl text-sm text-gray-500 text-justify">
               Build with your teammates, friends or teachers easily with a group project.
               Each member or sub-team has a folder with rights and can collaborate
               with others to bring the snippet to life.
             </p>
           </div>
         </div>
         <div class="card shadow sm:rounded-lg">
           <div class="card-icon shadow sm:rounded-lg flex items-center justify-center">
             <v-mdi name="mdi-cube-scan" slot="prefix"></v-mdi>
           </div>
           <div class="px-4 py-5">
             <h3 class="text-lg leading-6 font-medium">
               Learn and Improve
             </h3>
             <p class="mt-1 max-w-2xl text-sm text-gray-500 text-justify">
               With the help of your teammates or your teacher, they can bring
               review your code and improve your work. If they have access
               to your folder, they also can edit your code and make it work&nbsp;!
             </p>
           </div>
         </div>
         <div class="card shadow sm:rounded-lg">
           <div class="card-icon shadow sm:rounded-lg flex items-center justify-center">
             <v-mdi name="mdi-card-search-outline" slot="prefix"></v-mdi>
           </div>
           <div class="px-4 py-5">
             <h3 class="text-lg leading-6 font-medium">
               Live preview
             </h3>
             <p class="mt-1 max-w-2xl text-sm text-gray-500 text-justify">
               While you code, you can watch the changes directly on the page.
               It allows you to have a online preview of your work.
               With the master folder, you always have access to the project's backbone.
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
}

section#sec-1 h1 {
  color: #fff;
  font-size: 5rem;
  font-weight: 700;
}

section#sec-1 h2 {
  font-size: 1.5rem;
  font-weight: 500;
  margin: 25px 0;
  color: white;
}

section#sec-1 p {
  font-size: 1.2rem;
  // padding-left: 7px;
  color: white;
}

section#sec-1 .container {
  display: flex;
  align-items: center;
  justify-content: center;
}
section#sec-1 .right img {
  padding: 50px 0;
  width: 400px;
  border-radius: 15%;
}
.right{
  position: relative;
  animation-timing-function: ease-in;
  animation: mymove 2s;
}
.left{
  position: relative;
  animation-timing-function: ease-in;
  animation: mymove-2 2s;
}

@keyframes mymove {
  from { left: 500px; top:100px;}
  to { left: 0px; top:0px}
  0% {opacity:0;}
  100% {opacity:1;}
}
@keyframes mymove-2 {
  from { right: 500px; bottom:100px;}
  to { right: 0px; bottom:0px}
  0% {opacity:0;}
  100% {opacity:1;}
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
  padding: 25px;
  color: black;
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
section#sec-2 .team-member:last-child { margin-right: 0; }

section#sec-2 .team-member span,
.team-member h3 {
  max-width: 200px;
  font-family: sans-serif;
  letter-spacing: -1px;
}
section#sec-2 .team-member h3 {
  color: #1CA3A3;
}

section#sec-2 .team-photo {
  border-radius: 50%;
  text-align: center;
  margin: auto auto .5rem;
  max-width: 100%;
  height: auto;
  transition: 0.5s transform ease-in-out;
}
section#sec-2.team-photo:hover {
  transform: scale(0.9);
  cursor: pointer;
}
/* code for phone layout */
@media (max-width:850px){
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
  section#sec-1 img{
    width: 100%;
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

.area{
  background: #4e54c8; //78, 84, 200
  background: -webkit-linear-gradient(to left, #8f94fb, #4e54c8);
  width: 100%;
}

.circles{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.circles li{
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.2);
  animation: animate 25s linear infinite;
  bottom: -150px;
}

.circles li:nth-child(1){
  left: 25%;
  width: 80px;
  height: 80px;
  animation-delay: 0s;
}


.circles li:nth-child(2){
  left: 10%;
  width: 20px;
  height: 20px;
  animation-delay: 2s;
  animation-duration: 12s;
}

.circles li:nth-child(3){
  left: 70%;
  width: 20px;
  height: 20px;
  animation-delay: 4s;
}

.circles li:nth-child(4){
  left: 40%;
  width: 60px;
  height: 60px;
  animation-delay: 0s;
  animation-duration: 18s;
}

.circles li:nth-child(5){
  left: 65%;
  width: 20px;
  height: 20px;
  animation-delay: 0s;
}

.circles li:nth-child(6){
  left: 75%;
  width: 110px;
  height: 110px;
  animation-delay: 3s;
}

.circles li:nth-child(7){
  left: 35%;
  width: 150px;
  height: 150px;
  animation-delay: 7s;
}

.circles li:nth-child(8){
  left: 50%;
  width: 25px;
  height: 25px;
  animation-delay: 15s;
  animation-duration: 45s;
}

.circles li:nth-child(9){
  left: 20%;
  width: 15px;
  height: 15px;
  animation-delay: 2s;
  animation-duration: 35s;
}

.circles li:nth-child(10){
  left: 85%;
  width: 150px;
  height: 150px;
  animation-delay: 0s;
  animation-duration: 11s;
}

@keyframes animate {
  0%{
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 0;
  }
  100%{
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }
}

</style>
