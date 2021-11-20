<style>
.drag {
 -webkit-user-select: none;
 -webkit-app-region: drag;
}

.nodrag {
 -webkit-app-region: no-drag;
}

.btnAction {
 position: relative;
 bottom: 30px
}
</style>
<template>
 <v-app>
  <v-main>
   <v-card max-height="510px">
    <template slot="progress">
     <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
    </template>
    <v-system-bar color="info" class="drag" height="35" dark>
     <v-spacer></v-spacer>
     <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
       <v-btn small color="red" class="nodrag" v-on="on" v-bind="attrs" icon>
        <v-icon>mdi-close</v-icon>
       </v-btn>
      </template>
      <span>Quit</span>
     </v-tooltip>
    </v-system-bar>
    <v-img src="@/assets/img/flexi-photo.png" class="white--text align-end " contain gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="220px">

    </v-img>
    <v-card-text>
     <v-sheet min-height="200px">
      <v-form ref="form" v-model="valid" lazy-validation>
       <v-text-field v-model="form.username" dense class="mb-2" hide-details="auto" outlined :rules="userNameRules" label="User Name" required></v-text-field>
       <v-text-field v-model="form.password" dense class="mb-2" hide-details="auto" outlined :type="pass ? 'password' : 'text'" :rules="passwordRules" label="password" :append-icon="pass ? 'mdi-eye' : 'mdi-eye-off'" @click:append="pass = !pass" required>
       </v-text-field>
       <v-checkbox v-model="form.remeberMe" dense class="mb-2" hide-details="auto" outlined label="Keep me login ?" required></v-checkbox>
      </v-form>
     </v-sheet>
    </v-card-text>

    <v-card-actions class="btnAction">
     <v-btn color="error" class="mr-4" @click="close">
      Cancele
      <v-icon>mdi-close</v-icon>
     </v-btn>
     <v-spacer></v-spacer>
     <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
      Login
      <v-icon>mdi-login</v-icon>
     </v-btn>
    </v-card-actions>
   </v-card>
   <v-dialog v-model="isLoading" hide-overlay persistent width="600">
    <v-overlay :absolute="true" :value="isLoading">
     <v-card color="primary" dark width="300">
      <v-card-text>
       Chargement ..
       <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
      </v-card-text>
     </v-card>
    </v-overlay>
   </v-dialog>
  </v-main>
 </v-app>
</template>

<script>
const ipc = require('electron').ipcRenderer
export default {
 data: () => ({
  valid: true,
  pass: true,
  form: {
   username: "admin",
   password: "admin123",
   remeberMe: false
  },
  passwordRules: [
   v => !!v || 'password is required',
   v => (v && v.length <= 8) || 'password must be less than 8 characters',
  ],

  userNameRules: [
   v => !!v || 'User Name is required',
   // v => /.+@.+\..+/.test(v) || 'User Name must be valid',
  ],

 }),
 computed: {
  isLogin() {
   return this.$store.state.isLogin;
  },
  isLoading() {
   return this.$store.state.isLoading
  },
  users() {
   return this.$store.state.users
  }
 },
 methods: {
  validate() {
   if (this.$refs.form.validate()) {
       console.log('btn Click oky :>> ');
    this.$store.dispatch("SendLogin", this.form); 
   }
  },
  close() {
   this.$refs.form.reset()
   this.$refs.form.resetValidation()
  }, 

 }, 
}
</script>
