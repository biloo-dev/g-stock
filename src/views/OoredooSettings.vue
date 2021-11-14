<style scoped>
.avatarLogo {
 position: absolute;
 top: -10px;
 left: -15px;
}

@font-face {
 font-family: 'KR';
 src: url("~@/assets/fonts/OldStandard-Bold.ttf");
 font-weight: normal;
 font-style: normal;
}

.numbers {
 position: relative;
}

.numbers .wrap {
 position: relative;
 display: table;
 /* left: 50%; */
 /* top: 50%; */
 /* margin: -255px 0 0 -195px;	 */
}

.numbers #calculator {
 border-radius: 5px;
 background: #27282A;
 padding: 10px;
 margin-left: 15px;
 box-shadow: 0px 5px 0px 0px grey;
}

.numbers button {
 font-family: 'KR', sans-serif;
 font-size: 30px;
 color: #27282A !important;
 border-radius: 5px;
 border: none;
 background-color: white;
 margin: 10px 4px 10px 8px;
 height: 60px;
 width: 70px;
 box-shadow: 0px 8px 0px 0px grey;
}

.numbers button:active {
 -webkit-transform: translate(0px, 3px);
 transform: translate(0px, 3px);
 box-shadow: none;
}

.numbers button,
.numbers button:hover,
.numbers button:active,
.numbers button:visited {
 text-decoration: none !important;
 outline: none !important;
}

.numbers #clear {
 background: #F15F74;
}

.numbers #divi,
.numbers #multi,
.numbers #sub,
.numbers #add {
 background: #5481E6;
}

.numbers #equal {
 background: #98CB4A;
}

.numbers #add,
.numbers #equal {
 position: absolute;
 height: 160px;
}

.numbers #dot {
 background: #F15F74;
}

.numbers #zero {
 width: 70px;
}

.numbers #back {
 width: 70px;
 background: #5481E6;
 color: white !important;
}
</style>
<template>
 <div>
  <v-container fluid dark> 
    <v-card :height="height + 150" style="overflow:auto">
    <div> 
      <v-card-text>
        <v-form>
        <br>
        <v-divider inset></v-divider>
        <br>
        <v-row dense>
          <v-col cols="1" class="pa-0">
          <v-subheader>Solde:</v-subheader>
          </v-col>
          <v-col cols="3" class="pa-0">
          <v-text-field outlined type="number" class="ml-4" v-model="ooredooSettingForm.codeSolde" dense hide-details label="Code"></v-text-field>
          </v-col>
          <v-col cols="1" class="pa-0">
          <v-subheader>Transfert: </v-subheader>
          </v-col>
          <v-col cols="3" class="pa-0">
          <v-text-field outlined type="number" class="ml-4" v-model="ooredooSettingForm.codeTrensfert" dense hide-details label="Code"></v-text-field>
          </v-col>
          <v-col cols="1" class="pa-0">
          <v-subheader>Facteur:</v-subheader>
          </v-col>
          <v-col cols="3" class="pa-0">
          <v-text-field outlined type="number" class="ml-4" v-model="ooredooSettingForm.codeFacteur" dense hide-details label="Code" value="761"></v-text-field>
          </v-col> 
          <v-col cols="1" class="pa-0">
          <v-subheader>National</v-subheader>
          </v-col>
          <v-col cols="3" class="pa-0">
          <v-text-field outlined type="number" class="ml-4" v-model="ooredooSettingForm.codeInternational" dense hide-details label="Code"></v-text-field>
          </v-col>
          <v-col cols="1" class="pa-0">
          <v-subheader>Pin :</v-subheader>
          </v-col>
          <v-col cols="3" class="pa-0">
          <v-text-field outlined type="number" class="ml-4" v-model="ooredooSettingForm.codePin" dense hide-details label="Code" value="0000"></v-text-field>
          </v-col> 
          <v-col cols="1" class="pa-0">
            <v-subheader>Oui</v-subheader>
          </v-col>
          <v-col cols="1" class="pa-0">
            <v-text-field outlined type="number" class="ml-4" v-model="ooredooSettingForm.confYes" dense hide-details label="Code" value="761"></v-text-field>
          </v-col>
          <v-col cols="1" class="pa-0">
            <v-subheader>No</v-subheader>
          </v-col>
          <v-col cols="1" class="pa-0">
            <v-text-field outlined type="number" class="ml-4" v-model="ooredooSettingForm.confNo" dense hide-details label="Code"></v-text-field>
          </v-col>
          <v-col cols="2" class="pa-0">
            </v-col>
          <v-col cols="10" class="pa-0">
            <v-checkbox v-model="ooredooSettingForm.autoConfirmation" label="Auto Confirm" dense class="mt-0" color="orange darken-3" hide-details></v-checkbox>
          </v-col>
        </v-row> 
        <v-divider inset></v-divider>  
          <v-row dense>
          <v-col cols="2">
            <v-subheader>Msg Transfert:</v-subheader>
          </v-col>
          <v-col cols="4">
            <v-text-field outlined v-model="ooredooSettingForm.MsgIntTrn1" dense hide-details label="Code"></v-text-field>
          </v-col>
          <v-col cols="2">
            <v-subheader>Msg Facteur:</v-subheader>
          </v-col>
          <v-col cols="4">
            <v-text-field outlined v-model="ooredooSettingForm.MsgIntTrn2" dense hide-details label="Code"></v-text-field>
          </v-col>
          <v-col cols="2">
            <v-subheader>Msg I-National:</v-subheader>
          </v-col>
          <v-col cols="4">
            <v-text-field outlined v-model="ooredooSettingForm.MsgIntTrn3" dense hide-details label="Code"></v-text-field>
          </v-col> 
          <v-col cols="2">
            <v-subheader>Msg réussis Transfert:</v-subheader>
          </v-col>
          <v-col cols="4">
            <v-text-field outlined v-model="ooredooSettingForm.MsgCnfTrn1" dense hide-details label="Code"></v-text-field>
          </v-col>
          <v-col cols="2">
            <v-subheader>Msg réussis Facteur:</v-subheader>
          </v-col>
          <v-col cols="4">
            <v-text-field outlined v-model="ooredooSettingForm.MsgCnfTrn2" dense hide-details label="Code"></v-text-field>
          </v-col>
          <v-col cols="2">
            <v-subheader>Msg réussis I-National:</v-subheader>
          </v-col>
          <v-col cols="4">
            <v-text-field outlined v-model="ooredooSettingForm.MsgCnfTrn3" dense hide-details label="Code"></v-text-field>
          </v-col> 
          <v-col cols="2">
            <v-subheader>Regex Solde:</v-subheader>
          </v-col>
          <v-col cols="4">
            <v-text-field outlined v-model="ooredooSettingForm.regexConsultation" dense hide-details label="Code"></v-text-field>
          </v-col> 
          <v-col cols="2">
            <v-checkbox v-model="ooredooSettingForm.autoDetectUSB" label="auto Detect USB" dense class="mt-0" color="orange darken-3" hide-details></v-checkbox>
            </v-col>
          <v-col cols="2">
            <v-checkbox v-model="ooredooSettingForm.audioEnabled" label="audio Enabled" dense class="mt-0" color="orange darken-3" hide-details></v-checkbox>
            </v-col>
          <v-col cols="2">
            <v-checkbox v-model="ooredooSettingForm.audioSpeed" label="audio Speed" dense class="mt-0" color="orange darken-3" hide-details></v-checkbox>
            </v-col>
          </v-row> 
        </v-form>
      </v-card-text> 
      <v-avatar class="ma-3 avatarLogo" height="70" width="125" tile>
      <v-img :aspect-ratio="16/9" src="@/assets/img/ooredoo-logo.svg" contain></v-img>
      </v-avatar>
    </div>
    <v-card-actions>
      <v-btn class="ml-2" outlined rounded small color="error" @click="defaultSettings('ooredoo')">
      par Default
      <v-icon class="ml-3">mdi-autorenew</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn class="ma-2 float-right" outlined rounded small color="green" @click="saveSettings('ooredoo')">
      souvgarder
      <v-icon class="ml-3">mdi-content-save-cog-outline</v-icon>
      </v-btn>
    </v-card-actions>
    <v-fade-transition>
      <v-overlay :absolute="true" color="#036358" :value="isLoadingooredoo">
      <v-card color="primary" dark width="300">
        <v-card-text>
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
import { baxios } from '../store/helpers.js' 
export default {
 data() {
  return { 
   height: 488,
   filterHist: "2",
   tabid: 0,
   searchHist: '',
   filterOpe: "",
   validClient: true,
   credit: false,
   isLoadingooredoo: false,
   isLoadingMobilis: false,
   isLoadingOoredoo: false,  
   ooredooSettingForm: {},
   mobilisSettingForm: {},
   ooredooSettingForm: {},
   tabsMenu: [{
     id: 1,
     title: "Historique",
     icon: "mdi-history",
     img: "",
    },
    {
     id: 2,
     title: "Parameter SIM",
     icon: "mdi-sim",
     img: "",
    },
    {
     id: 3,
     title: "Paramater General",
     icon: "mdi-cog-transfert",
     img: "",
    },
    {
     id: 4,
     title: "Client",
     icon: "mdi-account-cog-outline",
     img: "",
    },
    {
     id: 5,
     title: "Statistique",
     icon: "mdi-monitor-dashboard",
     img: "",
    },
    {
     id: 6,
     title: "activation",
     icon: "mdi-shield-lock-outline",
     img: "",
    },
   ], 
   isEdit : false, 
  }
 }, 
 computed: {
  ooredooSetting() {
   return this.$store.state.ooredooSetting;
  },
  
 },
 methods: {
  ressizing(font = 140, top = 30) {
   let textarea = document.getElementsByTagName("textarea");
   if (textarea) {
    Object.values(textarea).filter((arg) => {
     arg.style.fontSize = "80px";
     arg.style.paddingTop = "10px";
     arg.style.color = "rgb(97,235,97)";
    //  arg.style.backgroundColor = "transparent";
     arg.style.resize = "none";
    });
   }
  }, 
  defaultSettings(check) {
   this.ooredooSettingForm = {}
   if (check == 'ooredoo') {
    this.ooredooSettingForm = {
     MsgCnfTrn1: "TRANSFERE DE VOTRE",
     MsgCnfTrn2: "VOUS VENEZ DE TRANSF",
     MsgCnfTrn3: "EST ACTUELLEMENT EN COURS",
     MsgIntTrn1: "VOUS VOULEZ",
     MsgIntTrn2: "VOUS VOULEZ",
     MsgIntTrn3: "1:MILLENIUM 1200",
     audioEnabled: 1,
     audioPerson: "none",
     audioSpeed: 1,
     autoConfirmation: 1,
     autoDetectUSB: 1,
     buttonList: [{
       "id": 1,
       "title": "100",
       "marge": "10"
      },
      {
       "id": 2,
       "title": "150",
       "marge": "10"
      },
      {
       "id": 3,
       "title": "200",
       "marge": "10"
      },
      {
       "id": 4,
       "title": "250",
       "marge": "10"
      },
      {
       "id": 5,
       "title": "300",
       "marge": "10"
      },
      {
       "id": 6,
       "title": "40",
       "marge": "10"
      },
      {
       "id": 7,
       "title": "500",
       "marge": "10"
      },
      {
       "id": 8,
       "title": "1000",
       "marge": "20"
      }
     ],
     codeFacteur: 761,
     codeInternational: 760,
     codePin: "00000",
     codeSolde: 766,
     codeTrensfert: 760,
     confNo: 2,
     confYes: 1,
     created_at: null,
     id: 1,
     margeSome: "{}",
     regexConsultation: "VOTRE SOLDE EST (.*?)s",
     typeOperator: 1,
     updated_at: null,
    }
    this.$nextTick()
   }  
  },
  async saveSettings(check) {
   try {
    let form
    if (check == 'ooredoo') {
     this.isLoadingooredoo = true
     form = this.ooredooSettingForm
    }  
    let result = await baxios('POST', 'saveSettings', form)
    this.$store.dispatch('getSettings')
    this.isLoadingooredoo = false 
   } catch (err) {
    this.isLoadingooredoo = false 
   }
  },
  async init() {
   this.ooredooSettingForm = await this.$store.getters.getDoredooSetting
  },  
 },
 async mounted() {
   this.ressizing()
  this.height = window.innerHeight - (365 )
  window.addEventListener('resize', (erg) => {
   this.height = window.innerHeight - (365 )
   console.log('this.height :>> ', this.height);
  })
  await this.$store.dispatch('getSettings') 
  await this.init()
 }

}
</script>
