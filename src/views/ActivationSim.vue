<style scoped>
 
@font-face {
  font-family: 'KR';
  src: url("~@/assets/fonts/OldStandard-Bold.ttf");
  font-weight: normal;
  font-style: normal;
}
 
</style>
<template>
  <div>
    <v-container fluid dark class="d-flex justify-space-between">
      <v-card :height="height + 160" style="overflow:auto" class="mr-2">
        <v-card-title class="ma-0 pa-1">
          <v-avatar class="ma-3" height="70" width="125" tile>
            <v-img :aspect-ratio="16/9" src="@/assets/img/djezzy-logo.svg" contain></v-img>
          </v-avatar>
          <v-divider inset></v-divider>
        </v-card-title>
        <v-card-text class="py-0">
          <v-form>
            <v-row dense>
               
              <v-col cols="12" class="pa-1">
                <v-text-field outlined type="number" v-model="djezzy.Manufactor" readonly dense hide-details label="Manufactor"></v-text-field>
              </v-col>
                 
              <v-col cols="12" class="pa-1">
                <v-text-field outlined type="number" v-model="djezzy.IMEI" readonly dense hide-details label="IMEI"></v-text-field>
              </v-col>
               
              <v-col cols="12" class="pa-1">
                <v-text-field outlined type="number" v-model="djezzy.IMSI" readonly dense hide-details label="IMSI"></v-text-field>
              </v-col>
               
              <v-col cols="12" class="pa-1"> 
                <v-textarea   rows="6" label="Activation" v-model="djezzyActivation" outlined dense hide-details 
                ></v-textarea> 
              </v-col>
              
            </v-row> 
          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="ma-2 float-right" outlined rounded small color="green" @click="djezzyActivate()">
            Activer
            <v-icon class="ml-3">mdi-lock-open-outline</v-icon>
          </v-btn>
        </v-card-actions>
        <v-fade-transition>
          <v-overlay :absolute="true" color="#036358" :value="isLoadingDjezzy">
            <v-card color="primary" dark width="300">
              <v-card-text >
                Save Settings ..
                <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
              </v-card-text>
            </v-card>
          </v-overlay>
        </v-fade-transition>
      </v-card> 
      <v-card :height="height + 160" style="overflow:auto" class="mr-2">
        <v-card-title class="ma-0 pa-1">
          <v-avatar class="ma-3" height="70" width="125" tile>
            <v-img :aspect-ratio="16/9" src="@/assets/img/mobilis-logo.svg" contain></v-img>
          </v-avatar>
          <v-divider inset></v-divider>
        </v-card-title>
        <v-card-text class="py-0">
          <v-form>
            <v-row dense>
               
              <v-col cols="12" class="pa-1">
                <v-text-field outlined v-model="mobilis.Manufactor" readonly dense hide-details label="Manufactor"></v-text-field>
              </v-col> 
               
              <v-col cols="12" class="pa-1">
                <v-text-field outlined v-model="mobilis.IMEI" readonly dense hide-details label="IMEI"></v-text-field>
              </v-col>
               
              <v-col cols="12" class="pa-1">
                <v-text-field outlined v-model="mobilis.IMSI" readonly dense hide-details label="IMSI"></v-text-field>
              </v-col>
               
              <v-col cols="12" class="pa-1"> 
                <v-textarea   rows="6" label="Activation" v-model="mobilisActivation" outlined hint="Hint text" dense hide-details 
                ></v-textarea> 
              </v-col>
              
            </v-row> 
          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="ma-2 float-right" outlined rounded small color="green" @click="mobilisActivate()">
            Activer
            <v-icon class="ml-3">mdi-lock-open-outline</v-icon>
          </v-btn>
        </v-card-actions>
        <v-fade-transition>
          <v-overlay :absolute="true" color="#036358" :value="isLoadingMobilis">
            <v-card color="primary" dark width="300">
              <v-card-text  >
                Save Settings ..
                <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
              </v-card-text>
            </v-card>
          </v-overlay>
        </v-fade-transition>
      </v-card> 
      <v-card :height="height + 160" style="overflow:auto" class="mr-2">
        <v-card-title class="ma-0 pa-1">
          <v-avatar class="ma-3" height="70" width="125" tile>
            <v-img :aspect-ratio="16/9" src="@/assets/img/ooredoo-logo.png" contain></v-img>
          </v-avatar>
          <v-divider inset></v-divider>
        </v-card-title>
        <v-card-text class="py-0">
          <v-form>
            <v-row dense>
               
              <v-col cols="12" class="pa-1">
                <v-text-field outlined v-model="ooredoo.Manufactor" readonly dense hide-details label="Manufactor"></v-text-field>
              </v-col> 
               
              <v-col cols="12" class="pa-1">
                <v-text-field outlined type="number" v-model="ooredoo.IMEI" readonly dense hide-details label="IMEI"></v-text-field>
              </v-col>
               
              <v-col cols="12" class="pa-1">
                <v-text-field outlined type="number" v-model="ooredoo.IMSI" readonly dense hide-details label="IMSI"></v-text-field>
              </v-col>
               
              <v-col cols="12" class="pa-1"> 
                <v-textarea   rows="6" label="Activation" v-model="ooredooActivation" outlined hint="Hint text" dense hide-details 
                ></v-textarea> 
              </v-col>
              
            </v-row> 
          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="ma-2 float-right" outlined rounded small color="green" @click="ooredooActivate()">
            Activer
            <v-icon class="ml-3">mdi-lock-open-outline</v-icon>
          </v-btn>
        </v-card-actions>
        <v-fade-transition>
          <v-overlay :absolute="true" color="#036358" :value="isLoadingOoredoo">
            <v-card color="primary" dark width="300">
              <v-card-text >
                Save Settings ..
                <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
              </v-card-text>
            </v-card>
          </v-overlay>
        </v-fade-transition>
      </v-card> 
    </v-container>
  </div>
</template>

<script>
import { baxios ,chackActivaSim,getKeyFromRegedit} from '../store/helpers.js'
import settings from "electron-settings";
export default {
  props:{
    modem : Object
  },
  data() {
    return {
      height: 488, 
      djezzyActivation: "", 
      mobilisActivation: "", 
      ooredooActivation: "", 
      isLoadingDjezzy: false,
      isLoadingMobilis: false,
      isLoadingOoredoo: false,  
    }
  },
  computed:{
    djezzy(){ 
      return this.$store.state.djezzy
    },
    mobilis(){ 
      return this.$store.state.mobilis
    },
    ooredoo(){ 
      return this.$store.state.ooredoo
    },
  },
  methods: { 
    djezzyActivate() {  
      Fire.$emit('djezzyActivate',this.djezzyActivation)
    }, 
    mobilisActivate() {  
      Fire.$emit('mobilisActivate',this.mobilisActivation)
    }, 
    ooredooActivate() {  
      Fire.$emit('ooredooActivate',this.ooredooActivation)
    }, 
  },
  async mounted() {  
    console.log('this.modem :>> ', this.mobilis.isActive); 
    console.log('this.modem :>> ', this.ooredoo.isActive); 

    this.height = window.innerHeight - (365)
    window.addEventListener('resize', (erg) => {
      this.height = window.innerHeight - (365) 
    }) 
  }

}
</script>
