'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => { 
   return queryInterface.bulkInsert('Settings', [
      {
        id: 1,
        codeTrensfert: '760',
        typeOperator: '1',
        codeSolde: '766',
        codeInternational: '760',
        codePin: '00000',
        codeFacteur: '761',
        MsgIntTrn1: 'VOUS VOULEZ',
        MsgCnfTrn1: 'TRANSFERE DE VOTRE',
        MsgIntTrn2: 'VOUS VOULEZ',
        MsgCnfTrn2: 'VOUS VENEZ DE TRANSF',
        MsgIntTrn3: '1:MILLENIUM 1200',
        MsgCnfTrn3: 'EST ACTUELLEMENT EN COURS',
        autoConfirmation: 1,
        regexConsultation: 'VOTRE SOLDE EST (.*?)\s',
        buttonList: JSON.stringify(
          [{
              id: 1,
              title: "100",
              marge: "10"
            },
            {
              id: 2,
              title: "150",
              marge: "10"
            },
            {
              id: 3,
              title: "200",
              marge: "10"
            },
            {
              id: 4,
              title: "250",
              marge: "10"
            },
            {
              id: 5,
              title: "300",
              marge: "10"
            },
            {
              id: 6,
              title: "40",
              marge: "10"
            },
            {
              id: 7,
              title: "500",
              marge: "10"
            },
            {
              id: 8,
              title: "1000",
              marge: "20"
            },
          ]
        ),
        margeSome: JSON.stringify({}),
        autoDetectUSB: 1,
        audioEnabled: 1,
        audioSpeed: 1,
        audioPerson: 'none',
        confYes: 1,
        confNo: 2,
      }, {
        id: 2,
        codeTrensfert: '630',
        typeOperator: '2',
        codeSolde: '632',
        codeInternational: '666',
        codePin: '00000',
        codeFacteur: '633',
        autoConfirmation: 1,
        MsgIntTrn1: 'VOUS VOULEZ',
        MsgCnfTrn1: 'TRANSFERE DE VOTRE',
        MsgIntTrn2: 'VOUS VOULEZ',
        MsgCnfTrn2: 'VOUS VENEZ DE TRANSF',
        MsgIntTrn3: 'VOUS VOULEZ',
        MsgCnfTrn3: 'VOUS AVEZ TRANSF',
        regexConsultation: '/Votre balance Arselli est  (.*?)\s/',
        buttonList: JSON.stringify([{
            id: 1,
            title: "100",
            marge: "10"
          },
          {
            id: 2,
            title: "150",
            marge: "10"
          },
          {
            id: 3,
            title: "200",
            marge: "10"
          },
          {
            id: 4,
            title: "250",
            marge: "10"
          },
          {
            id: 5,
            title: "300",
            marge: "10"
          },
          {
            id: 6,
            title: "40",
            marge: "10"
          },
          {
            id: 7,
            title: "500",
            marge: "10"
          },
          {
            id: 8,
            title: "1000",
            marge: "20"
          },
        ]),
        margeSome: JSON.stringify({}),
        autoDetectUSB: 1,
        audioEnabled: 1,
        audioSpeed: 1,
        audioPerson: 'none',
        confYes: 1,
        confNo: 0,
      }, {
        id: 3,
        codeTrensfert: '580',
        typeOperator: '3',
        codeSolde: '570',
        codeInternational: '580',
        codePin: '00000',
        codeFacteur: "585",
        autoConfirmation: 1,
        MsgIntTrn1: 'VOUS VOULEZ',
        MsgCnfTrn1: 'TRANSFERE DE VOTRE',
        MsgIntTrn2: 'MAXY HAYA',
        MsgCnfTrn2: 'OK num',
        MsgIntTrn3: 'MAXY HAYA',
        MsgCnfTrn3: 'OK num',
        regexConsultation: 'Votre credit storm-credit est (.*)\s',
        buttonList: JSON.stringify([{
            id: 1,
            title: "100",
            marge: "10"
          },
          {
            id: 2,
            title: "150",
            marge: "10"
          },
          {
            id: 3,
            title: "200",
            marge: "10"
          },
          {
            id: 4,
            title: "250",
            marge: "10"
          },
          {
            id: 5,
            title: "300",
            marge: "10"
          },
          {
            id: 6,
            title: "40",
            marge: "10"
          },
          {
            id: 7,
            title: "500",
            marge: "10"
          },
          {
            id: 8,
            title: "1000",
            marge: "20"
          },
        ]),
        margeSome: JSON.stringify({}),
        autoDetectUSB: 1,
        audioEnabled: 1,
        audioSpeed: 1,
        audioPerson: 'none',
        confYes: 1,
        confNo: 2,
      },
    ], {});
  }, 
  down: async (queryInterface, Sequelize) => { 
     return queryInterface.bulkDelete('Settings', null, {});
  }
};
