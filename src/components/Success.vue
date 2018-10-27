<template>
<div>
    <h1>{{ msg }}</h1>

    <div>
         <a href="#" @click.prevent="logout"><h2>Logout</h2></a>
    </div>

</div>
</template>
<script>

export default {

  data() {
    return {
      msg: "User Verified Successfully"
    };
  },
  beforeCreate: function () {
    if (!this.$session.exists()) {
      this.$router.push('/helloworld')
    }
  },
   methods: {
    logout: function () {
      this.$session.destroy()
      this.$router.push('/')
    }
  }


}
</script>
