import { createStore } from 'vuex'

export default createStore({
  state: {
    sginfo:{
      saboresbiz:[
        {
          nombre: "Fresa",
          precio: "100"
        },
        {
          nombre: "Chocolate",
          precio: "100"
        },
        {
          nombre: "Vainilla",
          precio: "100"
        },
        {
          nombre: "Zanahoria",
          precio: "150"
        },
        {
          nombre: "Red Velvet",
          precio: "170"
        },
        {
          nombre: "Piña",
          precio: "125"
        },
        {
          nombre: "Tres Leches",
          precio: "140"
        },
        {
          nombre: "Limón",
          precio: "115"
        }
      ],
saboresrel:[
  {
    nombre: "Durazno",
    precio: "50"
  },
  {
    nombre: "Plátano",
    precio: "50"
  },
  {
    nombre: "Piña",
    precio: "50"
  },
  {
    nombre: "Fresa",
    precio: "70"
  },
  {
    nombre: "Zarzamora",
    precio: "70"
  }
],
adornodec:[
  {
    nombre: "Velas",
    precio: "5"
  },
  {
    nombre: "Fondant",
    precio: "100"
  },
  {
    nombre: "Cararmelo",
    precio: "15"
  }
],
adornofru:[
  {
    nombre: "Frutos Rojos",
    precio: "55"
  },
  {
    nombre: "Fresa",
    precio: "30"
  },
  {
    nombre: "Moras",
    precio: "30"
  },
  {
    nombre: "Piña",
    precio: "30"
  },
  {
    nombre: "Durazno",
    precio: "15"
  },
  {
    nombre: "Plátano",
    precio: "15"
  },
  {
    nombre: "Cereza",
    precio: "40"
  }
],
adornobet:[
  {
    nombre: "Normal",
    precio: "10"
  },
  {
    nombre: "Rosa",
    precio: "20"
  },
  {
    nombre: "Azul",
    precio: "20"
  },
  {
    nombre: "Rojo",
    precio: "20"
  },
  {
    nombre: "Verde",
    precio: "20"
  },
  {
    nombre: "Amarillo",
    precio: "20"
  },
  {
    nombre: "Morado",
    precio: "20"
  }
],
adornonuch:[
  {
    nombre: "Nuez",
    precio: "15"
  },
  {
    nombre: "Almendras",
    precio: "15"
  },
  {
    nombre: "Uva Pasa",
    precio: "15"
  },
  {
    nombre: "Chuspa de Colores",
    precio: "10"
  },
  {
    nombre: "Ralladura de Coco",
    precio: "15"
  },
  {
    nombre: "Ralladura de Chocolate",
    precio: "10"
  }
]



    },
    
    saboresb:{
      sb1: 'Fresa',
      sb2: 'Chocolate',
      sb3: 'Vainilla',
      sb4:'Zanahoria',
      sb5: 'Red Velvet',
      sb6: 'Piña',
      sb7: 'Tres Leches',
      sb8: 'Limón'
    },
    preciob: {
      preciosb1: 100,
      preciosb2: 100,
      preciosb3: 100,
      preciosb4: 150 ,
      preciosb5: 170 ,
      preciosb6: 125 ,
      preciosb7: 125 ,
      preciosb8: 115 
    },
    saboresr:{
      sr1: 'Durazno',
      sr2: 'Plátano',
      sr3: 'Piña',
      sr4: 'Fresa',
      sr5: 'Zarzamora'
    },
    precior: {
      preciosr1: 50,
      preciosr2: 50,
      preciosr3: 50,
      preciosr4: 70,
      preciosr5: 70
    },
    adornod:{
      ad1: 'Velas',
      ad2: 'Fondant',
      ad3: 'Caramelo'
    },
    preciod: {
      precioad1: 5,
      precioad2: 30,
      precioad3: 15
    },
    adornof:{
      af1:'Frutos Rojos',
      af2: 'Fresas',
      af3: 'Moras',
      af4: 'Piña',
      af5: 'Durazno',
      af6: 'Plátano',
      af7: 'Cereza'
    },
    preciof: {
      precioaf1: 55,
      precioaf2: 30,
      precioaf3: 30,
      precioaf4: 25,
      precioaf5: 15,
      precioaf6: 15,
      precioaf7: 40
    },
    adornobet:{
      ab1: 'Normal',
      ab2: 'Rosa',
      ab3: 'Azul',
      ab4: 'Rojo',
      ab5: 'Verde',
      ab6: 'Amarillo',
      ab7: 'Moeado',
      ab8: 'Chocolate'
    },
    preciobet:{
      precioab: 10,
      precioabcolor: 20
    },
    adornonc:{
      anc1: 'Nuez',
      anc2: 'Almendras',
      anc3: 'Uva Pasas',
      anc4: 'Chispas de Colores',
      anc5: 'Ralladura de Coco',
      anc6: 'Ralladura de Chocolate'
    },
    precionc:{
      precioanc1: 15,
      precioanc2: 15,
      precioanc3: 15,
      precioanc4: 10,
      precioanc5: 5,
      precioanc6: 10
    },

    pedidosP: [],
    pedidosR: [],
    txtNombre : "",
    txtCorreo : "",
    txtTelefono : "",
    txtDireccion: "",
    txtFecha: "",
    txtLista: "",
    txtMensaje: "",
    crSaboresB: [],
    crSaboresR: [],
    crAdornoD: [],
    crAdornoF:[],
    crAdornoB: [],
    crAdornoNC:[]

  },
  getters: {
    totalPedidos(state){
      var vtotalPedido = 0;
      
      state.crSaboresB.forEach((value, index) => {
        vtotalPedido += parseFloat(state.sginfo.saboresbiz.find(element => element.nombre == value).precio)
      })
      state.crSaboresR.forEach((value, index) => {
        vtotalPedido += parseFloat(state.sginfo.saboresrel.find(element => element.nombre == value).precio)
      })
      state.crAdornoD.forEach((value, index) => {
        vtotalPedido += parseFloat(state.sginfo.adornodec.find(element => element.nombre == value).precio)
      })
      state.crAdornoF.forEach((value, index) => {
        vtotalPedido += parseFloat(state.sginfo.adornofru.find(element => element.nombre == value).precio)
      })
      state.crAdornoB.forEach((value, index) => {
        vtotalPedido += parseFloat(state.sginfo.adornobet.find(element => element.nombre == value).precio)
      })
      state.crAdornoNC.forEach((value, index) => {
        vtotalPedido += parseFloat(state.sginfo.adornonuch.find(element => element.nombre == value).precio)
      })

      return vtotalPedido

    }

  },
  mutations: {
    altaPedido (state,{nombre, correo, telefono, direccion, fecha, lista, mensaje, saboresb, saboresr, adornod, adornof, adornob, adornonc}){
      state.txtNombre = nombre
      state.txtCorreo = correo
      state.txtTelefono = telefono
      state.txtDireccion = direccion
      state.txtFecha = fecha
      state.txtLista = lista
      state.txtMensaje = mensaje
      state.crSaboresB = saboresb
      state.crSaboresR = saboresr
      state.crAdornoD = adornod
      state.crAdornoF = adornof
      state.crAdornoB = adornob
      state.crAdornoNC = adornonc
    },
    cleanDatos(state) {
      state.txtNombre = ""
      state.txtCorreo = ""
      state.txtTelefono = ""
      state.txtDireccion = ""
      state.txtFecha = ""
      state.txtLista = ""
      state.txtMensaje = ""
      state.crSaboresB = []
      state.crSaboresR = []
      state.crAdornoD = []
      state.crAdornoF = []
      state.crAdornoB = []
      state.crAdornoNC = []
    },
    nuevoPedido(state) {
      var pedidoNuevo = {
        nombre : state.txtNombre,
        correo : state.txtCorreo,
        telefono : state.txtTelefono,
        direccion : state.txtDireccion,
        fecha : state.txtFecha,
        lista : state.txtLista,
        mensaje : state.txtMensaje,
        saboresb : state.crSaboresB,
        saboresr : state.crSaboresR,
        adornod : state.crAdornoD,
        adornof : state.crAdornoF,
        adornob : state.crAdornoB,
        adornonc : state.crAdornoNC,
      }
      console.log(pedidoNuevo)
      state.pedidosP.push(pedidoNuevo)
      console.log(state.pedidosP)
    }

  },
  actions: {
  },
  modules: {
  }
})
