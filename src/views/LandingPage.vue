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
           <img class="team-photo" src="http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120">
           <h3>Person's Name</h3>
           <span>
             This section could be used to show a very short bio description for each member</span>
         </div>
         <!-- member-->
         <div class="team-member">
           <img class="team-photo" src="http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120">
           <h3>Person's Name</h3>
           <span>
             This section could be used to show a very short bio description for each member</span>
         </div>
         <!-- member-->
         <div class="team-member">
           <img class="team-photo" src="http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120">
           <h3>Person's Name</h3>
           <span>
             This section could be used to show a very short bio description for each member</span>
         </div>
         <!-- member-->
         <div class="team-member">
           <img class="team-photo" src="http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120">
           <h3>Person's Name</h3>
           <span>
             This section could be used to show a very short bio description for each member</span>
         </div>
         <!-- member-->
         <div class="team-member">
           <img class="team-photo" src="http://square-vn.com/app/dscms/assets/images/person-4.jpg?v=1495618120">
           <h3>Person's Name</h3>
           <span>
             This section could be used to show a very short bio description for each member</span>
         </div>
       </div>
     </div>
   </section>
 </div>
</template>
<script>
import BaseNavBar from '../components/Base/BaseNavBar.vue';

export default {
  components: { BaseNavBar },
  data: () => ({
    retrieved: false,
    windowSize: 0,
    counter: 0,
    email: '',
    userName: '',
    password: '',
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

<style scoped>
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
  margin: auto;
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

</style>
