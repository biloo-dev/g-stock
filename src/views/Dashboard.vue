<style>
.drag {
  -webkit-user-select: none;
  -webkit-app-region: drag;
}

.cardSim {
  position: relative;
}

.connectBtn {
  position: absolute !important;
  top: 0;
  right: 0;
}

.nodrag {
  -webkit-app-region: no-drag;
}

::-webkit-scrollbar {
  width: 20px;
}

::-webkit-scrollbar-track {
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: #d6dee1;
}

::-webkit-scrollbar-thumb {
  background-color: #d6dee1;
  border-radius: 20px;
}

::-webkit-scrollbar-thumb {
  background-color: #d6dee1;
  border-radius: 20px;
  border: 6px solid transparent;
  background-clip: content-box;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #a8bbbf;
}

.InputNumber {
  top: 97px !important;
}

.img {
  -webkit-filter: grayscale(100%);
  /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
}

.v-textarea {
  line-height: 1.7rem;
}

.v-textarea:focus {
  /* outline: none !important;
 box-shadow: 0 0 10px #719ece;
 border: 1px dotted rgb(97, 235, 97) !important; */
}

@font-face {
  font-family: "Calculator";
  src: url("~@/assets/fonts/Calculator/Calculator.ttf");
  font-weight: normal;
  font-style: normal;
}

.digit {
  font-weight: 500;
  color: rgb(97, 235, 97) !important;
  font-family: "Calculator" !important;
}

.v-footer .v-card__title {
  padding: 5px 16px;
}

#cardPrice {
  font-size: 28px !important;
}
</style>
<template>
  <!-- App.vue -->
  <v-app>
    <v-navigation-drawer app mini-variant mini-variant-width="66" permanent>
      <v-row class="fill-height" no-gutters>
        <v-navigation-drawer permanent>
          <v-list-item class="px-2">
            <v-list-item-avatar>
              <v-img :aspect-ratio="16 / 9" src="https://randomuser.me/api/portraits/women/75.jpg"></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-divider></v-divider>

          <v-list dense nav>
            <v-list-item v-for="item in SideBar" :key="item.title" :disabled="!item.isActive" :to="{ path: item.to , params : { id : item.id} }">
              <v-list-item-avatar tile class="ma-1" size="40px">
                <v-img :src="item.logo" contain max-height="40px"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <template v-slot:append>
            <div class="pa-1 ">
              <v-tooltip bottom>
                <template v-slot:activator="{ on ,attrs}">
                  <v-btn block fab color="error" @click="logout = true" v-on="on" v-bind="attrs">
                    <v-icon>mdi-power</v-icon>
                  </v-btn>
                </template>
                <span>Se déconnecter</span>
              </v-tooltip>
            </div>
          </template>
        </v-navigation-drawer>

      </v-row>
    </v-navigation-drawer>

    <v-app-bar app dense color="#6A76AB" contain class="drag" :src="this.imgBack">
      <template v-slot:img="{ props }">
        <v-img v-bind="props" gradient="to top right, rgba(100,450,400,.7), rgba(250,250,250,.5)" cover height="100%" width="100%"></v-img>
      </template>

      <v-app-bar-nav-icon @click="mini = !mini" class="nodrag"></v-app-bar-nav-icon>

      <!-- <v-toolbar-title>{{ this.Type  }}</v-toolbar-title> -->

      <v-spacer> </v-spacer>
      <v-switch v-model="$vuetify.theme.dark" hide-details color="#333" inset class="nodrag mr-1"></v-switch>
      <v-btn fab x-small @click="minimize()" class="nodrag mr-1">
        <v-icon small class="icons">mdi-minus</v-icon>
      </v-btn>

      <!-- <v-btn fab x-small   @click="maximize()" color="#333" class="nodrag mr-1">
    <v-icon small class="icons" v-text="icon"></v-icon>
   </v-btn>

   <v-btn fab x-small   @click="fullScrean()" color="#333" class="nodrag mr-1">
    <v-icon small class="icons">mdi-arrow-expand-all</v-icon>
   </v-btn> -->
      <v-btn fab x-small @click="close()" color="error" class="nodrag mr-1">
        <v-icon small>mdi-close</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs class="nodrag" align-with-title>
          <div class="">
            <v-btn class="ma-2" v-for="(item, index) in items" :key="index" @click="setSome(item.title)">
              {{ item.title }}
            </v-btn>
          </div>
        </v-tabs>
        <v-menu offset-y class="nodrag" :disabled="!phoneNumber[1] && '7,6,5'.indexOf(phoneNumber[1]) == -1">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="" class="nodrag" v-bind="attrs" v-on="on">
              <span v-if="phoneNumber[1] && '6'.indexOf(phoneNumber[1]) !== -1">PixX</span>
              <span v-else-if="phoneNumber[1] && '7'.indexOf(phoneNumber[1]) !== -1">DjixX</span>
              <span v-else-if="phoneNumber[1] && '5'.indexOf(phoneNumber[1]) !== -1">OixX</span>
              <v-icon>mdi-chevron-down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(item, i) in forfait[phoneNumber[1]]" :key="i" @click="">
              <v-list-item-title>{{ item.title }}</v-list-item-title> fgfg
            </v-list-item>
          </v-list>
        </v-menu>
        <v-btn large color="red" class="ma-1 nodrag" :disabled="!form.Numero.length < 10 && !form.somme" @click="send()">
          FlexyyLe
          <v-icon>mdi-send-circle-outline</v-icon>
        </v-btn>
      </template>
    </v-app-bar>

    <v-main app>
      <!-- <v-container fluid>  -->
     
      <router-view ></router-view>
      <!-- </v-container> -->
    </v-main>
  
    <v-footer padless app inset height="">
      <v-row dense>
        <v-col cols="4">
          <v-card  max-height="150" class="cardSim"> 
            <v-btn   class="connectBtn" icon outlined rounded small> 
              <v-icon>mdi-refresh</v-icon>
            </v-btn>
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="subtitle-1 green--text">
                  <!-- <v-icon class="mr-3">{{ djezzySigIcon }}</v-icon> -->
                  <div class="signal-bars mt1 sizing-box">
                    <div class="slash-bar"></div>
                    <div class="first-bar bar"></div>
                    <div class="second-bar bar"></div>
                    <div class="third-bar bar"></div>
                    <div class="fourth-bar bar"></div>
                    <div class="fifth-bar bar"></div>
                  </div>
                  <v-avatar height="30" width="60" tile>
                    <v-img :aspect-ratio="16 / 9" src="@/assets/img/djezzy-logo.svg" class="img" contain>
                    </v-img>
                  </v-avatar> 
                </v-card-title>
              </div>
                <v-chip class="mr-9" outlined color="error">
                  <v-icon color="error" class="mr-2">mdi-calendar-clock</v-icon>
                  <span>Démo</span>
                </v-chip> 
            </div>

            <v-card-actions class="py-0">  
              <v-spacer></v-spacer>
              <span class="display-1 gray--text">
                <v-spacer></v-spacer> 
              </span>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card   max-height="150" class="cardSim">
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-btn    class="connectBtn" icon outlined rounded small>

                  <v-icon>mdi-refresh</v-icon>
                </v-btn>
                <v-card-title class="subtitle-1 green--text">
                  <div class="signal-bars mt1 sizing-box">
                    <div class="slash-bar"></div>
                    <div class="first-bar bar"></div>
                    <div class="second-bar bar"></div>
                    <div class="third-bar bar"></div>
                    <div class="fourth-bar bar"></div>
                    <div class="fifth-bar bar"></div>
                  </div>

                  <v-avatar height="30" width="90" class="mr-2" tile>
                    <v-img :aspect-ratio="16 / 9" src="@/assets/img/mobilis-logo.svg" class="img" contain>
                    </v-img>
                  </v-avatar>
                   
                </v-card-title>
              </div>

                <v-chip class="mr-9" outlined color="error">
                  <v-icon color="error" class="mr-2">mdi-calendar-clock</v-icon>
                  <span>Démo</span>
                </v-chip> 
            </div>

            <v-card-actions class="py-0">
              <v-spacer></v-spacer>
              <span class="display-1">
                <v-spacer></v-spacer> 
              </span>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card  max-height="150" class="cardSim">
            <div class="d-flex flex-no-wrap justify-space-between">
              <v-btn  class="connectBtn" icon outlined rounded small>

                <v-icon>mdi-refresh</v-icon>
              </v-btn>
              <div>
                <v-card-title class="subtitle-1 green--text">
                  <div class="signal-bars mt1 sizing-box" >
                    <div class="slash-bar"></div>
                    <div class="first-bar bar"></div>
                    <div class="second-bar bar"></div>
                    <div class="third-bar bar"></div>
                    <div class="fourth-bar bar"></div>
                    <div class="fifth-bar bar"></div>
                  </div>
                  <v-avatar class=" " height="30" width="60" tile>
                    <v-img :aspect-ratio="16 / 9" src="@/assets/img/ooredoo-logo.png" class="img" contain>
                      <div class="fill-height img"></div>
                    </v-img>
                  </v-avatar> 
                </v-card-title>
              </div>
                <v-chip class="mr-9" outlined color="error" >
                  <v-icon color="error" class="mr-2">mdi-calendar-clock</v-icon>
                  <span>Démo</span>
                </v-chip> 
            </div>

            <v-card-actions class="py-0"> 
              <v-spacer></v-spacer>
              <span class="display-1">
                <v-spacer></v-spacer> 
              </span>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-footer>
    <v-dialog v-model="logout" width="500">
      <v-card>
        <v-card-title class="headline lighten-2">
          Se déconnecter
          <v-spacer></v-spacer>
          <v-btn color="error" fab x-small @click="logout = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text class="pa-4">
          <h2>Êtes-vous sûr de vous déconnecter du programme?</h2>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn color="error" @click="logout = false">
            <v-icon class="mr-2">mdi-close</v-icon>
            No
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn color="success">
            Oui
            <v-icon class="ml-2">mdi-logout</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script> 
// @ is an alias to /src
const ipc = require("electron").ipcRenderer;
const rm = require("electron").remote;
let cw = rm.getCurrentWindow(); 
var settings = require('electron-settings');
  
export default {
  name: "Home",
  data() {
    return {
      SideBar: [{
          title: "Flexy",
          to: '/',
          id: 1,
          logo: require("@/assets/img/send-money2.png"),
          isActive: true,
        },
        {
          title: "Djezzy",
          to: '/DjezzySettings',
          id: 1,
          logo: require("@/assets/img/djezzy-logo.svg"),
          isActive: true,
        },
        {
          title: "Mobilis",
          to: '/MobilisSettings',
          id: 2,
          logo: require("@/assets/img/mobilis-logo.svg"),
          isActive: true,
        },
        {
          title: "OoredoO",
          id: 3,
          to: '/OoredooSettings',
          logo: require("@/assets/img/ooredoo-logo.png"),
          isActive: true,
        },
        {
          title: "Activation",
          id: 3,
          to: '/aativationSim',
          logo: require("@/assets/img/unlock sim.png"),
          isActive: true,
        },
      ],
      links: ["Home", "Contacts", "Settings"],
      mini: true,
      logout: false,
      dialog: false,
      drawer: false,
      isMax: false,
      credit: false,
      
      imgBack: require("@/assets/img/39567.jpg"),
 
    };
  },
  watch: {
     
  },
  '$route.path'(to, from) { 
    this.ressizing(); 
  },
  computed: {
 
 
  },
  methods: {
  
    close() {
      cw.close();
    },
    fullScrean() {
      cw.setFullScreen(!remote.getCurrentWindow().isFullScreen());
    },
    minimize() {
      cw.minimize();
    },
    maximize() {
      if (cw.isMaximized()) {
        this.isMax = false;
        cw.unmaximize();
      } else {
        this.isMax = true;
        cw.maximize();
      }
    }, // reduire application
    displayWindowSize() {
      // Get width and height of the window excluding scrollbars
      let cardNumber = document.getElementById("cardNumber") ?
        document.getElementById("cardNumber").clientWidth :
        0;
      let cardPrice = document.getElementById("cardPrice") ?
        document.getElementById("cardPrice").clientWidth :
        0;
      let result = (990 - parseFloat(cardNumber)) * 0.18;
      this.ressizing(160 - result);
    },
    ressizing(font = 140, top = 30) {
      let textarea = document.getElementsByTagName("textarea");
      if (textarea) {
        Object.values(textarea).filter((arg) => {
          arg.style.fontSize = "75px";
          arg.style.paddingTop = "10px";
          arg.style.color = "rgb(97,235,97)";
          //  arg.style.backgroundColor = "transparent";
          arg.style.resize = "none";
        });
      }
    },
  
    icons() {
      if (this.isMax) {
        this.icon = "mdi-checkbox-multiple-blank-outline";
      } else {
        this.icon = "mdi-checkbox-blank-outline";
      }
    },
  
 
    
  },
  async mounted() {
  
   
    this.ressizing();
    this.displayWindowSize();
    window.addEventListener("resize", this.displayWindowSize);
    this.icons();
    this.$vuetify.theme.dark = true;
     
  },
  beforeDestroy() {
    
  }
}
</script>
