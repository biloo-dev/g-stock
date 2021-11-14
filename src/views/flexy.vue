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
    <template>
      <v-card>
        <v-tabs v-model="tabid" color="rgb(97,235,97)" left>
          <v-tab v-for="tab in tabsMenu" :key="tab.id" v-text="tab.title"></v-tab>
        </v-tabs>
        <v-tabs-items v-model="tabid">
          <v-tab-item>
            <!-- <v-container fluid> -->
            <v-row color="#fff">
              <v-col cols="3" class="numbers pr-0" v-if="false">
                <v-row color="#fff" class="pr-0">
                  <v-col cols="12"></v-col>
                  <v-col cols="12"></v-col>
                  <v-col cols="12"></v-col>
                  <v-col cols="10" style="max-width: 81.333333%;" class="pa-0 ma-01 ">
                    <div class="wrap">
                      <div id="calculator">
                        <div id="buttons">

                          <button @click="writeNum(7)" id="seven">7</button>
                          <button @click="writeNum(8)" id="eight">8</button>
                          <button @click="writeNum(9)" id="nine">9</button>
                          <!-- <button id="add" value="+">+</button> -->
                          <br />
                          <button @click="writeNum(4)" id="four">4</button>
                          <button @click="writeNum(5)" id="five">5</button>
                          <button @click="writeNum(6)" id="six">6</button>
                          <!-- <button id="equal" value="=">=</button> -->
                          <br />
                          <button @click="writeNum(1)" id="one">1</button>
                          <button @click="writeNum(2)" id="two">2</button>
                          <button @click="writeNum(3)" id="three">3</button>
                          <br />
                          <button @click="writeNum(11)" id="back">
                            <v-icon>mdi-arrow-left-thick</v-icon>
                          </button>
                          <button @click="writeNum(0)" id="zero">0</button>
                          <button @click="writeNum(22)" id="dot">
                            <v-icon>mdi-check</v-icon>
                          </button>
                        </div>
                      </div>
                    </div>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="1" class="px-2 d-flex  justify-end align-content-space-around flex-wrap">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-hover v-slot="{ hover }">
                      <v-card :elevation="hover ? '12' : '2'" v-on="on" @click="filterOpe = ''" class="pa-0">
                        <v-avatar class="ma-2" height="50" width="50" tile>
                          <v-img :aspect-ratio="16 / 9" src="@/assets/img/all.png" contain>
                            <div class="fill-height img"></div>
                          </v-img>
                        </v-avatar>
                      </v-card>
                    </v-hover>
                  </template>
                  <span>Toute la liste</span>
                </v-tooltip>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-hover v-slot="{ hover }">
                      <v-card :elevation="hover ? '12' : '2'" v-on="on" @click="filterOpe = 1" class="pa-0">
                        <v-avatar class="ma-2" height="50" width="50" tile>
                          <v-img :aspect-ratio="16 / 9" src="@/assets/img/djezzy-logo.svg" contain>
                          </v-img>
                        </v-avatar>
                      </v-card>
                    </v-hover>
                  </template>
                  <span>Liste djezzy</span>
                </v-tooltip>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-hover v-slot="{ hover }">
                      <v-card :elevation="hover ? '12' : '2'" v-on="on" @click="filterOpe = 2" class="pa-0">
                        <v-avatar class="ma-2" height="50" width="50" tile>
                          <v-img :aspect-ratio="16 / 9" src="@/assets/img/mobilis-logo.svg" contain>
                          </v-img>
                        </v-avatar>
                      </v-card>
                    </v-hover>
                  </template>
                  <span>Liste mobilis</span>
                </v-tooltip>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-hover v-slot="{ hover }">
                      <v-card :elevation="hover ? '12' : '2'" v-on="on" @click="filterOpe = 3" class="pa-0">
                        <v-avatar class="ma-2" height="50" width="50" tile>
                          <v-img :aspect-ratio="16 / 9" src="@/assets/img/ooredoo-logo.png" contain>
                            <div class="fill-height img"></div>
                          </v-img>
                        </v-avatar>
                      </v-card>
                    </v-hover>
                  </template>
                  <span>Liste ooredoo</span>
                </v-tooltip>
              </v-col>
              <v-col cols="11" class="pa-1">
                <v-card>
                  <v-card-title class="py-0">
                    <v-radio-group v-model="filterHist" class="mt-0 pt-0" row dense hide-details>
                      <v-radio label="Flexy a reçu" value="1"></v-radio>
                      <v-radio label="Flexy envoyé" value="2"></v-radio>
                    </v-radio-group>

                    <v-spacer></v-spacer>
                    <v-text-field v-model="searchHist" outlined dense hide-details append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
                  </v-card-title>
                  <v-divider class="my-1"></v-divider>
                  <v-data-table :headers="headers" dense :height="height + 20" :items="historique" :items-per-page="5" class="elevation-2" :loading="loadHist" loading-text="veuillez patienter ..." :search="searchHist" :custom-filter="filterOnlyCapsText" show-group-by :footer-props="{
                                                    showFirstLastPage: true, 
                                                    firstIcon: 'mdi-arrow-collapse-left',
                                                    lastIcon:  'mdi-arrow-collapse-right',
                                                    prevIcon:  'mdi-arrow-left-thick',
                                                    nextIcon:  'mdi-arrow-right-thick' }">
                    <template v-slot:item.somme="{ item }">
                      <v-chip small color="success" outlined>{{ item.somme }} DA</v-chip>
                    </template>
                    <template v-slot:item.Numero="{ item }">
                      <v-chip small outlined>{{ item.Numero }}</v-chip>
                    </template>
                    <template v-slot:item.operateur="{ item }">
                      <v-avatar height="20" width="20" v-if="item.operateur == 1" tile>
                        <v-img :aspect-ratio="16 / 9" src="@/assets/img/djezzy-logo.svg" contain></v-img>
                      </v-avatar>
                      <v-avatar height="20" width="20" v-else-if="item.operateur == 2" tile>
                        <v-img :aspect-ratio="16 / 9" src="@/assets/img/mobilis-logo.svg" contain></v-img>
                      </v-avatar>
                      <v-avatar height="20" width="20" v-else tile>
                        <v-img :aspect-ratio="16 / 9" src="@/assets/img/ooredoo-logo.png" contain>
                          <div class="fill-height img"></div>
                        </v-img>
                      </v-avatar>
                    </template>
                    <!-- <template v-slot:item.type="{ item }">
                <v-icon v-if="item.type == 1" color="success">mdi-share</v-icon>
                <v-icon v-else color="info">mdi-cellphone-arrow-down</v-icon>
              </template> -->
                    <template v-slot:item.status="{ item }">
                      <v-icon v-if="item.type == 1" color="success">mdi-check-all</v-icon>
                      <v-icon v-else color="error">mdi-window-close</v-icon>
                    </template>
                    <template v-slot:item.credit="{ item }">
                      <v-icon v-if="item.credit  == 1" color="success">mdi-check-box-outline</v-icon>
                      <v-icon v-else color="error">mdi-checkbox-blank-outline</v-icon>
                    </template>
                    <template v-slot:item.id_client="{ item }">
                      <v-chip outlined :color="item.Clients && item.Clients.nom_prenom ? '' : 'info'">{{ item.client ? item.client.nom_prenom : '' }}</v-chip>
                    </template>
                  </v-data-table>
                </v-card>
              </v-col>
            </v-row>
            <!-- </v-container> -->
          </v-tab-item>

          <v-tab-item>
            <!-- <v-container fluid> -->
            <v-row color="#fff">
              <v-col cols="8">
                <v-card>
                  <v-card-title>
                    <v-radio-group v-model="filterClient" row dense hide-details>
                      <v-radio color="success" label="Clents" value="0"></v-radio>
                      <v-radio color="info" label="Fournisseur" value="1"></v-radio>
                    </v-radio-group>
                    <v-spacer></v-spacer>
                    <v-text-field v-model="searchClient" outlined dense hide-details append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
                  </v-card-title>
                  <v-data-table :headers="headersClient" :height="height" :items="clients" :items-per-page="5" class="elevation-2" :loading="loadClient" loading-text="veuillez patienter ..." :search="searchClient" :footer-props="{
                              showFirstLastPage: true, 
                              firstIcon: 'mdi-arrow-collapse-left',
                              lastIcon:  'mdi-arrow-collapse-right',
                              prevIcon:  'mdi-minus',
                              nextIcon:  'mdi-plus' }">
                    <template v-slot:item.type="{ item }">
                      <v-avatar class="ma-3" height="30" width="30" tile>
                        <v-img :aspect-ratio="16 / 9" :src="require(`@/assets/img/client-${item.type}.png`)" contain>
                        </v-img>
                      </v-avatar>
                    </template>
                    <template v-slot:item.credit="{ item }">
                      <v-chip outlined :color="item.type == 0 ? 'success' : 'info'">{{ parseFloat(item.credit).toFixed(2) }} DZD</v-chip>
                    </template>
                    <template v-slot:item.numeroPhoneList="{ item }">
                      <div class="d-flex justify-space-between">

                        <v-chip outlined>{{ item.numeroPhoneList ? item.numeroPhoneList[0].num : 'NULL' }}</v-chip>

                        <v-menu>
                          <template v-slot:activator="{ on: menu, attrs }">
                            <v-tooltip bottom>
                              <template v-slot:activator="{ on: tooltip }">
                                <v-btn fab x-small v-if="item.numeroPhoneList && item.numeroPhoneList.length > 1" v-bind="attrs" v-on="{ ...tooltip, ...menu }">
                                  <v-icon> mdi-eye-outline </v-icon>
                                </v-btn>
                              </template>
                              <span>Afficher les autres N° Tel</span>
                            </v-tooltip>
                          </template>
                          <v-list>
                            <v-list-item v-for="(item, index) in item.numeroPhoneList" :key="index">
                              <v-list-item-title>{{ item.num }}</v-list-item-title>
                            </v-list-item>
                          </v-list>
                        </v-menu>
                      </div>
                    </template>
                    <template v-slot:item.fidel="{ item }">
                      <v-icon x-large color="error" v-if="item.fidel == 0">mdi-account-remove-outline</v-icon>
                      <v-icon x-large color="success" v-else>mdi-account-heart-outline</v-icon>
                    </template>
                    <template v-slot:item.nom_prenom="{ item }">
                      <v-chip outlined>{{ item.nom_prenom }}</v-chip>
                    </template>
                    <template v-slot:item.actions="{ item }">
                      <div style="width:130px">
                        <v-tooltip bottom>
                          <template v-slot:activator="{ on }">
                            <v-btn color="info" class="mr-1" @click="reglerClientCredit(item)" :disabled="item.credit == 0" fab small v-on="on">
                              <v-icon>mdi-cash-register</v-icon>
                            </v-btn>
                          </template>
                          <span>remboursement des dettes</span>
                        </v-tooltip>
                        <v-tooltip bottom>
                          <template v-slot:activator="{ on }">
                            <v-btn color="success" class="mr-1" @click="editClient(item)" fab small v-on="on">
                              <v-icon>mdi-account-edit</v-icon>
                            </v-btn>
                          </template>
                          <span>Modifier {{ item.type == 0 ? 'Client' : 'Fornisseur' }}</span>
                        </v-tooltip>
                        <v-tooltip bottom>
                          <template v-slot:activator="{ on }">
                            <v-btn color="error" fab small class="pa-1" @click="deleteClient(item)" v-on="on">
                              <v-icon>mdi-delete-circle-outline</v-icon>
                            </v-btn>
                          </template>
                          <span>Supprimer {{ item.type == 0 ? 'Client' : 'Fornisseur' }}</span>
                        </v-tooltip>
                      </div>

                    </template>
                  </v-data-table>
                </v-card>
              </v-col>
              <v-col cols="4" class="pl-0">
                <v-card class="ma-0 pa-0 overflow-auto" :height="height + 135">
                  <v-card-text>
                    <v-form ref="form" v-model="validClient" lazy-validation>
                      <v-text-field outlined v-model="clientForm.nom_prenom" :rules="[(v) => !!v || 'Ce champ est requis']" dense hide-details="auto" label="Nom et prénom "></v-text-field>
                      <v-radio-group hide-details v-model="clientForm.type" row>
                        <v-radio color="success" label="Client" value="0"></v-radio>
                        <v-radio color="info" label="Fournisseur" value="1"></v-radio>
                        <v-spacer></v-spacer>
                        <v-checkbox v-model="clientForm.fidel" class="mt-0 pt-0" color="orange" hide-details :label="`Fidèle`"></v-checkbox>
                      </v-radio-group>
                      <br>
                      <v-divider inset></v-divider>
                      <v-card :max-height="height - 65" class="overflow-auto">
                        <v-card-text class="d-flex justify-space-between">
                          <h3 class="mt-2"><span>List De N° Tel</span></h3>
                          <v-spacer></v-spacer>
                          <v-tooltip bottom>
                            <template v-slot:activator="{ on }">
                              <v-btn color="success" fab x-small v-on="on" @click="addPhone">
                                <v-icon>mdi-plus</v-icon>
                              </v-btn>
                            </template>
                            <span>Remboursement des dettes</span>
                          </v-tooltip>
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-sheet elevation="2" v-for="(item,i) in clientForm.numeroPhoneList" :key="i" class="d-flex justify-space-between">
                          <v-text-field outlined type="number" v-model="item.num" dense hide-details="auto" :label="`N° Tel ${i+1}`" :rules="[v => !!v || 'Ce champ est requis' , 
                              v => v.length >= 9 || 'Le numéro de téléphone doit comporter au moins 10 chiffres',
                              v => v.length < 11 || 'Le numéro de téléphone ne doit pas comporter plus de 10 chiffres'
                              ]" @click:append-outer="delPhone(i)">
                            <template v-slot:append-outer>
                              <v-tooltip bottom>
                                <template v-slot:activator="{ on }">
                                  <v-btn color="red" fab x-small :disabled="clientForm.numeroPhoneList.length == 1" @click="delPhone(i)" v-on="on">
                                    <v-icon>mdi-trash-can</v-icon>
                                  </v-btn>
                                </template>
                                <span>Supprimer</span>
                              </v-tooltip>

                            </template>
                          </v-text-field>
                        </v-sheet>
                      </v-card>
                    </v-form>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn class="ml-2" outlined rounded small color="error" @click="refresh">
                      Réinitialiser
                      <v-icon class="ml-3">mdi-autorenew</v-icon>
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn class="ma-2 float-right" v-if="!isEdit" outlined rounded small :disabled="!validClient" color="success" @click="saveClient">
                      souvgarder
                      <v-icon class="ml-3">mdi-content-save-outline</v-icon>
                    </v-btn>
                    <v-btn class="ma-2 float-right" v-else outlined rounded small :disabled="!validClient" color="orange" @click="saveClient">
                      Mise à jour
                      <v-icon class="ml-3">mdi-content-save-outline</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
            <!-- </v-container> -->
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </template>
    <div class="text-center">
      <v-dialog v-model="credit" width="500">
        <v-card>
          <v-card-title class=" ">
            Rembourser les dettes manquées
            <v-spacer></v-spacer>
            <v-btn color="error" icon @click="credit = false">
              <v-icon>mdi-window-close</v-icon>
            </v-btn>
          </v-card-title>
          <v-divider></v-divider>
          <v-form ref="formCredit" v-model="validCredit" lazy-validation>
            <v-card-text class="py-4">
              <v-row>
                <v-col cols="12" sm="6">
                  Nom et Prénom : <v-chip outlined>
                    {{ formCredit.item ? formCredit.item.nom_prenom : '' }}
                  </v-chip>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field label="ancient crédit" disabled color="dark" append-icon="mdi-cash-register" dense hide-details outlined v-model="formCredit.item.credit"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field label="Le montant payé" append-icon="mdi-cash-check" dense hide-details="auto" outlined type="number" min="0" max="5" :rules="[ 
                        v => !!v || 'Le montant payé doit être saisi',
                        v => v <= formCredit.item.credit || 'Vous ne pouvez pas payer plus que ce qui est dû',
                      ]" v-model="formCredit.somme_payee"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field label="Le montant restant" disabled dense hide-details="auto" append-icon="mdi-cash-refund" outlined type="number" min="0" :value="formCredit.rest_somme = formCredit.item.credit - formCredit.somme_payee"></v-text-field>
                </v-col>
              </v-row>

            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn color="error" @click="credit = false">
                Annuler
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn color="success" @click="regler" :disabled="!validCredit || formCredit.somme_payee == 0">
                Payer
                <v-icon>mdi-cash-register</v-icon>
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-dialog>
    </div>
  </v-container>
</div>
</template>

<script>
import {
  baxios 
} from '../store/helpers.js' 
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
      isLoadingDjezzy: false,
      isLoadingMobilis: false,
      isLoadingOoredoo: false,
      formCredit: {
        somme_payee: 0,
        rest_somme: 0,
        credit: 0,
        item: {}
      },
      clientForm: {
        nom_prenom: "",
        numeroPhoneList: [{
          num: ''
        }],
        fidel: false,
        type: "0",
      },
      tabsMenu: [{
          id: 1,
          title: "Historique",
          icon: "mdi-history",
          img: "",
        },
        {
          id: 2,
          title: "Client",
          icon: "mdi-account-cog-outline",
          img: "",
        },
        {
          id: 3,
          title: "Statistique",
          icon: "mdi-monitor-dashboard",
          img: "",
        },
        {
          id: 4,
          title: "activation",
          icon: "mdi-shield-lock-outline",
          img: "",
        },
      ],
      headers: [{
          text: 'Operateur ',
          align: 'start',
          sortable: false,
          value: 'operateur',
        },
        {
          text: 'client',
          value: 'Client.nom_prenom'
        },
        {
          text: 'N° Tel ',
          value: 'Numero',
        },
        {
          text: 'Solde',
          value: 'somme',
        },
        {
          text: 'status',
          value: 'status'
        },
        {
          text: 'credit',
          value: 'credit'
        },

      ],
      headersClient: [{
          text: 'Nome et Prénom ',
          align: 'start',
          value: 'nom_prenom',
        },
        {
          text: 'Fidel',
          value: 'fidel',
        },

        {
          text: 'N° Tel',
          value: 'numeroPhoneList'
        },
        {
          text: 'credit',
          value: 'credit'
        },
        {
          text: 'Actions',
          value: 'actions'
        },

      ],
      validCredit: false,
      isEdit: false,
      searchClient: "",
      filterClient: "0",
    }
  },
  computed: {
    historique() {
      return this.$store.getters.getHistorique(this.filterOpe, this.filterHist);
    },
    clients() {
      return this.$store.getters.getClients(this.filterClient);
    },
    loadHist() {
      return this.$store.state.loadHist;
    },
    loadClient() {
      return this.$store.state.loadClient;
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
    regler() {
      if (this.$refs.formCredit.validate()) {
        this.$store.dispatch('reglreCredit', this.formCredit)
        this.formCredit = {
          somme_payee: 0,
          rest_somme: 0,
          credit: 0,
          item: {}
        }
        Toast.fire({
          icon: 'success',
          title: 'La dette a été remboursée avec succès'
        })
        this.$refs.formCredit.resetValidation()
        this.credit = true
      }
    },
    reglerClientCredit(item) {
      this.credit = true
      this.formCredit.item = item
      this.formCredit.credit = item.credit
    },
    editClient(item) {
      this.isEdit = true
      this.clientForm = JSON.parse(JSON.stringify(item))
      this.clientForm.type = this.clientForm.type.toString()
    },
    deleteClient(item) {
      Swal.fire({
        title: `Voulez-vous vraiment supprimer des clients?`,
        text: `êtes-vous sûr de supprimer ce client "${item.nom_prenom}"`,
        showDenyButton: true,
        confirmButtonText: `Yes`,
        denyButtonText: `No`,
      }).then(async (result) => {
        if (result.isConfirmed) {
          this.$store.dispatch('deleteClients', {
            id: item.id
          })
          Toast.fire({
            icon: 'success',
            title: 'supprimé avec succès'
          })
        } else if (result.isDenied) {
          Toast.fire({
            icon: 'error',
            title: "Le client n'a pas été supprimé"
          })
        }
      })
    },
    refresh() {
      this.isEdit = false
      this.clientForm = {
        nom_prenom: "",
        numeroPhoneList: [{
          num: ''
        }],
        fidel: "0",
        type: "0",
        credit: 0,
      }
      this.$refs.form.resetValidation()
    },
    async saveClient() {
      if (this.$refs.form.validate()) {
        await this.$store.dispatch('saveClients', this.clientForm)
        Toast.fire({
          icon: 'success',
          title: !this.isEdit ? 'Enregistré avec succès' : 'Mise à jour réussie'
        })
        this.refresh()
      }
    },
    delPhone(i) {
      this.clientForm.numeroPhoneList.splice(i, 1)
    },
    addPhone() {
      this.clientForm.numeroPhoneList.push({
        num: ''
      })
    },
    filterOnlyCapsText(value, search, item) {
      let srch = search.toString().toLowerCase()
      let result = item['Client.nom_prenom'] ? item['Client.nom_prenom'].toString().toLowerCase().indexOf(search) : ''
      if (typeof parseInt(search) === NaN) return value != null && search != null && ~result
      return value != null && search != null && value.toString().toLowerCase().indexOf(srch) !== -1
    },
    async init() {},
    flexy() {
      Fire.$emit('flexy')
    },
    writeNum(n) {
      Fire.$emit('writeNum', n)
    }
  },
  async mounted() {
    this.ressizing()
    this.height = window.innerHeight - (235 + 228)
    window.addEventListener('resize', (erg) => {
      this.height = window.innerHeight - (235 + 228)
      console.log('this.height :>> ', this.height);
    })
    await this.$store.dispatch('getClients')
    await this.$store.dispatch('getHistorique')
    await this.init()
  }

}
</script>
