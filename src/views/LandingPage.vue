<template>
 <div class="w-full">
   <base-nav-bar/>
   <section id="sec-1">
     <div class="container">
       <div class="left">
         <h1>Code Snippet</h1>
         <h2>Pourquoi ne pas essaye de reprendre le code en collaboration avec ses eleves</h2>
         <p>testetstetestetstetes
           tetstetestetstetestetstetestets
           tetestetstetestetstetestetsteteste
           tstetestetstetestetste</p>
       </div>
       <div class="right">
         <div class="img-mid">
           <img src="https://picsum.photos/500" alt="trest"/>
       </div>
       </div>
     </div>
   </section>
   <section id="sec-2">
     <div class="container">
       <div class="team">
         <h1 class="team-h1">La fine Equipe</h1>
         <!-- member-->
         <div class="team-member">
           <img class="team-photo" :src="this.img.img1" alt="Alexis Capdepon">
           <h3>Alexis Capdepon</h3>
           <span>Chef de projet</span>
         </div>
         <!-- member-->
         <div class="team-member">
           <img class="team-photo" :src="img.img2" alt="Miki Namsrai">
           <h3>Miki Namsrai</h3>
           <span>Chef de projet</span>
         </div>
         <!-- member-->
         <div class="team-member">
           <img class="team-photo" :src="img.img3" alt="Antoine Macheda">
           <h3>Antoine Macheda</h3>
           <span>Développement Front - Contenu</span>
         </div>
         <!-- member-->
         <div class="team-member">
           <img class="team-photo" :src="img.img4" alt="Aimee Ritleng">
           <h3>Aimee Ritleng</h3>
           <span>Développement Back - Graphisme</span>
         </div>
         <!-- member-->
         <div class="team-member">
           <img class="team-photo" :src="img.img5" alt="Gregg Sanchez">
           <h3>Gregg Sanchez</h3>
           <span>Développement Front</span>
         </div>
       </div>
     </div>
   </section>
   <section id="sec-3">
     <div class="container">
       <div class="cards-infos flex items-center justify-between">
         <div class="card shadow sm:rounded-lg">
           <div class="card-icon shadow sm:rounded-lg"></div>
           <div class="px-4 py-5 sm:px-6">
             <h3 class="text-lg leading-6 font-medium">
               Work together
             </h3>
             <p class="mt-1 max-w-2xl text-sm text-gray-500">
               Personal details and application.
             </p>
           </div>
         </div>
         <div class="card shadow sm:rounded-lg">
           <div class="card-icon shadow sm:rounded-lg"></div>
           <div class="px-4 py-5 sm:px-6">
             <h3 class="text-lg leading-6 font-medium">
               Applicant Information
             </h3>
             <p class="mt-1 max-w-2xl text-sm text-gray-500">
               Personal details and application.
             </p>
           </div>
         </div>
         <div class="card shadow sm:rounded-lg">
           <div class="card-icon shadow sm:rounded-lg"></div>
           <div class="px-4 py-5 sm:px-6">
             <h3 class="text-lg leading-6 font-medium">
               Applicant Information
             </h3>
             <p class="mt-1 max-w-2xl text-sm text-gray-500">
               Personal details and application.
             </p>
           </div>
         </div>
       </div>
     </div>
   </section>
   <div class="footer">

   </div>
 </div>
</template>
<script>
import BaseNavBar from '../components/Base/BaseNavBar.vue';
import team1 from '../assets/img/landing-page/team-1.png';
import team2 from '../assets/img/landing-page/team-2.png';
import team3 from '../assets/img/landing-page/team-3.png';
import team4 from '../assets/img/landing-page/team-4.png';
import team5 from '../assets/img/landing-page/team-5.png';

export default {
  components: { BaseNavBar },
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
  font-family: monospace;
}

.container {
  width: 95%;
  height: 100%;
  margin: 0 auto;
}

section#sec-1 {
  height: 80vh;
}

section#sec-1 h1 {
  font-size: 46px;
}

section#sec-1 h2 {
  font-size: 25px;
  font-weight: 500;
  margin: 25px 0;
  max-width: 600px;
}

section#sec-1 p {
  font-size: 12px;
  color: grey;
  max-width: 450px;
  padding-left: 7px;
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
  height: 100vh;
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

.cards-infos {
  .card {
    background-color: #1a192b;
    color: #ffffff;
    padding: 1.5rem 1.5rem 2rem;
    margin: 2rem 0;
    position: relative;
    .card-icon {
      padding: 1rem;
      width: 5rem;
      height: 5rem;
      background-color: #fff;
      color: #1a192b;
      margin-top: -66px;
    }
  }
}

.footer {
  width: 100%;
  height: 30vh;
  background-color: #1a192b;
  color: #ffffff;
  margin-top: 10rem;
}

</style>
