  <template>
  <!-- <div>
    <div class="container" style="margin-top:200px;">
    <div class="card">
    <h2 class="card-title text-center">Signup</h2>
    <div>
      <input type="text" class="form-control input" v-model="user.contact" placeholder="Email/Mobile">
    </div>
    <div>
      <input type="text" class="form-control input" v-model="user.username" placeholder="Username">
    </div>
    <div>
      <input type="text" class="form-control input" v-model="user.firstName" placeholder="Firstname">
    </div>
    <div>
      <input type="text" class="form-control input" v-model="user.lastName" placeholder="Lastname">
    </div>
    <a class="btn pointer" @click="register(user)" href="#/otpverify">Register</a>
</div>
    </div>
  </div> -->
  <div class="wrapper fadeInDown">
  <div id="formContent">
    <div class="fadeIn first">
      <img src="/static/user.svg" id="icon" alt="User Icon" />
      <h1>SIGNUP</h1>
    </div>
   <form  @submit.prevent="register(user)" class="text-center" >

      <input type="text" class=""  v-model="user.contact" placeholder="Email/Mobile">


      <input type="text" class="" v-model="user.username" placeholder="Username">


      <input type="text" class="" v-model="user.firstName" placeholder="FirstName">


      <input type="text" class="" v-model="user.lastName" placeholder="LastName">

          <!-- <a type="submit" class="fadeIn fourth" @click="register(user)" href="#/otpverify">REGISTER </a> -->
 <!-- <input type="submit"  @click="register(user)"  class="fadeIn fourth" value="REGISTER"> -->
 <button class="fadeIn fourth" type="submit">
                  REGISTER
                </button>

    </form>



  </div>
</div>
</template>

<script>
// import swal from "sweetalert2";
// const toast = swal.mixin({
//             toast: true,
//             position: "top",
//             showConfirmButton: false,
//             timer:5000
//           });
 import AccountApi from "@/service/Account";

export default {
  name: "Register",
  data: function() {
    return {
      user: {
        contact: "",
        username: "",
        firstName: "",
        lastName: ""
      }
    }
  },
  mounted(){
  if(this.$session.exists()){
    this.$router.push('/success');
  }
},


  methods: {
    register:function() {
     console.log('register',this.user);
    this.isLoading=true;
    AccountApi.register(this.user)
      .then(response => {
        console.log(response);
        this.$session.start();

        this.$session.set("contact", this.user.contact);
        // toast({
        //   type: "success",
        //   title: "Signed in successfully"
        // });
        this.isLoading=false;
          this.$router.replace(this.$route.query.redirect || "/otpverify");
      })
      .catch(err => {
        console.log(err);

      });
  },



  //   register(user) {
  //     axios({
  //       method: "post",
  //       url: "/account/register",
  //       //   method:'get',
  //       //  url: '/customer/list',
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       data: {
  //         contact: user.contact,
  //         username:user.username,
  //         firstName:user.firstName,
  //         lastName:user.lastName

  //       }
  //     })
  //        .then(response => {
  //       console.log(response);
  //       this.$session.start();

  //       this.$session.set("contact", this.user.contact);

  //       // toast({
  //       //   type: "success",
  //       //   title: "User Registered successfully"
  //       // });
  //       // this.$router.push('/otpverify')
  //         this.$router.push( '/otpverify');
  //     })
  //     .catch(err => {
  //         console.log(err);
  //       });

  //   }
  // },

}
}

</script>

<style>
html {
     background-image: url("/static/bg.png");
}

body {
  font-family: "Poppins", sans-serif;
  height: 100vh;
}

a {
  color: #92badd;
  display:inline-block;
  text-decoration: none;
  font-weight: 400;
}

h2 {
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  display:inline-block;
  margin: 40px 8px 10px 8px;
  color: #cccccc;
}
/* form{
  width:200px;
} */


/* STRUCTURE */

.wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  padding: 20px;
}

#formContent {
  -webkit-border-radius: 10px 10px 10px 10px;
  border-radius: 10px 10px 10px 10px;
  background: #fff;
  padding: 30px;
  width: 90%;
  max-width: 450px;
  position: relative;
  padding: 0px;
  -webkit-box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
  box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
  text-align: center;
}

#formFooter {
  background-color: #f6f6f6;
  border-top: 1px solid #dce8f1;
  padding: 25px;
  text-align: center;
  -webkit-border-radius: 0 0 10px 10px;
  border-radius: 0 0 10px 10px;
}



/* TABS */

h2.inactive {
  color: #cccccc;
}

h2.active {
  color: #0d0d0d;
  border-bottom: 2px solid #5fbae9;
}



/* FORM TYPOGRAPHY*/

input[type=button], input[type=submit], input[type=reset]  {
  background-color: #56baed;
  border: none;
  color: white;
  padding: 15px 80px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  font-size: 13px;
  -webkit-box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);
  box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
  margin: 5px 20px 40px 20px;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

input[type=button]:hover, input[type=submit]:hover, input[type=reset]:hover  {
  background-color: #39ace7;
}

input[type=button]:active, input[type=submit]:active, input[type=reset]:active  {
  -moz-transform: scale(0.95);
  -webkit-transform: scale(0.95);
  -o-transform: scale(0.95);
  -ms-transform: scale(0.95);
  transform: scale(0.95);
}

input[type=text] {
  background-color: #f6f6f6;
  border: none;
  color: #0d0d0d;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 5px;
  width: 75%;
  border: 2px solid #f6f6f6;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
}

input[type=text]:focus {
  background-color: #fff;
  border-bottom: 2px solid #5fbae9;
}

input[type=text]:placeholder {
  color: #cccccc;
}



/* ANIMATIONS */

/* Simple CSS3 Fade-in-down Animation */
.fadeInDown {
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@-webkit-keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

/* Simple CSS3 Fade-in Animation */
@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
@-moz-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }

.fadeIn {
  opacity:0;
  -webkit-animation:fadeIn ease-in 1;
  -moz-animation:fadeIn ease-in 1;
  animation:fadeIn ease-in 1;

  -webkit-animation-fill-mode:forwards;
  -moz-animation-fill-mode:forwards;
  animation-fill-mode:forwards;

  -webkit-animation-duration:1s;
  -moz-animation-duration:1s;
  animation-duration:1s;
}

.fadeIn.first {
  -webkit-animation-delay: 0.4s;
  -moz-animation-delay: 0.4s;
  animation-delay: 0.4s;
}

.fadeIn.second {
  -webkit-animation-delay: 0.6s;
  -moz-animation-delay: 0.6s;
  animation-delay: 0.6s;
}

.fadeIn.third {
  -webkit-animation-delay: 0.8s;
  -moz-animation-delay: 0.8s;
  animation-delay: 0.8s;
}

.fadeIn.fourth {
  -webkit-animation-delay: 1s;
  -moz-animation-delay: 1s;
  animation-delay: 1s;
}

/* Simple CSS3 Fade-in Animation */
.underlineHover:after {
  display: block;
  left: 0;
  bottom: -10px;
  width: 0;
  height: 2px;
  background-color: #56baed;
  content: "";
  transition: width 0.2s;
}

.underlineHover:hover {
  color: #0d0d0d;
}

.underlineHover:hover:after{
  width: 100%;
}

h1{
    color:#60a0ff;
}

/* OTHERS */

*:focus {
    outline: none;
}

#icon {
  width:20%;
}

/* body{
     background-image: url("/static/bg.png");
}
.card-style{
  box-shadow: 1px 1px #888888;
 border-radius:25px;
}
.nav {
  height:70px;
  width: 100%;
  background-color:#ffffff;
  position: relative;
}
.input {
  font-size: 15px;
  margin: 15px 0;
  padding: 10px 20px;
  border:none !important;
  border-radius: 25px;
  background-color: #eee;
}
.button{
  fill: #fff;
  background: #fff;
}
.btn-1{
        border-radius:10px;
        box-shadow: 2px 2px;
        font-size: 18px;
        margin: auto;
}
.btn-2{
  color:#68B8B6;
}
.btn-3{
      color:#B8BBBB;
} */
</style>
