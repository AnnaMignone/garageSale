class product {
  constructor(id, img, name, price, color, brand, size, condition, img2, img3) {
    this.id = id;
    this.img = img;
    this.name = name;
    this.price = price;
    this.color = color;
    this.brand = brand;
    this.size = size;
    this.condition = condition;
    this.img2 = img2;
    this.img3 = img3;
  }
}

const aire = new product(
  "1",
  "img/aire1.jpeg",
  "Aire acondicionado portatil",
  70,
  "Negro",
  "Klarstein",
  "-",
  "2 meses de uso. Sin fallas",
  "img/aire2.jpeg",
  "img/aire3.jpeg"
);

const aspiradora = new product(
  "2",
  "img/aspiradora1.jpeg",
  "Aspiradora Black & Decker",
  12,
  "Gris y blanco",
  "Black & Decker",
  "Aspiradora de mano. 3.6V",
  "Nueva. Sin fallas",
  "img/aspiradora2.jpeg",
  "img/aspiradora3.jpeg"
);

const blazerZara = new product(
  "3",
  "img/blazerZara1.jpeg",
  "Blazer Zara mujer talle 2XL",
  6,
  "Rosa claro",
  "Zara Argentina",
  "2XL",
  "Usado. Tiene unas manchas de roce en el cuello, del lado de adentro. Falta planchado",
  "img/blazerZara2.jpeg",
  "img/blazerZara3.jpeg"
);

const buzoAzul = new product(
  "4",
  "img/buzoAzul1.jpeg",
  "Buzo H&M talle XL",
  4,
  "Azul",
  "H&M - Divided",
  "XL",
  "Sin uso",
  "img/buzoAzul2.jpeg",
  "img/buzoAzul3.jpeg"
);

const buzoHollister = new product(
  "5",
  "img/buzoHollister1.jpeg",
  "Buzo Hollister talle M",
  4,
  "Turquesa",
  "Hollister",
  "M",
  "Poco uso. No tiene ninguna falla",
  "img/buzoHollister2.jpeg",
  "img/buzoHollister3.jpeg"
);

const buzoKakashi = new product(
  "6",
  "img/buzoKakashi1.jpeg",
  "Buzo unisex talle XXL",
  4,
  "Verde",
  "Sin marca - Emprendimiento argentino",
  "2XL - unisex",
  "Sin uso",
  "img/buzoKakashi2.jpeg",
  "img/buzoKakashi3.jpeg"
);

const camisaGap = new product(
  "7",
  "img/camisaGap1.jpeg",
  "Camisa GAP talle XL",
  3,
  "Blanca con rayas celestes",
  "GAP (eeuu)",
  "XL",
  "Sin uso",
  "img/camisaGap2.jpeg",
  "img/camisaGap3.jpeg"
);

const camisaVerde = new product(
  "8",
  "img/camisaSinMangas1.jpeg",
  "Camisa mujer talle XL",
  3,
  "Verde petroleo",
  "Valvinna",
  "XL",
  "Poco uso. Tiene las mangas tipo ardilla voladora y es tirando a corta",
  "img/camisaSinMangas2.jpeg",
  "img/camisaSinMangas3.jpeg"
);

const camisaVolados = new product(
  "9",
  "img/camisaVolados1.jpeg",
  "Camisa con volados grande",
  2,
  "Negro",
  "Sin marca",
  "Sin talle marcado. Talle grande",
  "Usada. Sin detalles.",
  "img/camisaVolados2.jpeg",
  "img/camisaVolados3.jpeg"
);

const camperaColumbia = new product(
  "10",
  "img/camperaColumbia1.jpeg",
  "Campera Columbia talle XL",
  45,
  "Verde militar",
  "Columbia (eeuu)",
  "XL - unisex",
  "Sin uso.Impermeable.La campera se mete dentro de uno de los bolsillos hasta hacerse una bolsa con cierre",
  "img/camperaColumbia2.jpeg",
  "img/camperaColumbia3.jpeg"
);

const camperaUniqlo = new product(
  "11",
  "img/camperaUniqlo1.jpeg",
  "Campera Uniqlo talle XXL",
  45,
  "Negro",
  "Uniqlo (eeuu)",
  "XXL",
  "Sin uso. Viene con la bolsa para guardarla",
  "img/camperaUniqlo2.jpeg",
  "img/camperaUniqlo3.jpeg"
);

const cubos = new product(
  "12",
  "img/cubos1.jpeg",
  "Set de 3 cubos rubik + regalo",
  40,
  "Varios",
  "Varias. Comprados por Amazon",
  "2x2 // 7x7 // 4x4x12 Megaminx Dodecaedro",
  "Usados pero están en perfecto estado",
  "img/cubos2.jpg",
  "img/cubos3.jpg"
);

const libroEvelyn = new product(
  "14",
  "img/libroEvelyn1.jpeg",
  "Los siete maridos de Evelyn H",
  5,
  "-",
  "Los siete maridos de Evelyn Hugo - Taylor Jenkins Reid (Umbriel editores)",
  "-",
  "Nuevo. Sin marcas. Está en español",
  "img/libroEvelyn2.jpeg",
  "img/libroEvelyn3.jpeg"
);
const libroJapon = new product(
  "15",
  "img/libroJapon1.jpeg",
  "Diseño gráfico japones (IT)",
  10,
  "-",
  "Graphic design Giapponese",
  "-",
  "Está rota la tapa del lado de adentro, como se ve en la foto. El resto está en perfecto estado. Está en italiano, aunque tiene más imágenes que texto",
  "img/libroJapon2.jpeg",
  "img/libroJapon3.jpg"
);
const libroMatilde = new product(
  "16",
  "img/libroMatilde1.jpeg",
  "Matilde debe morir",
  4,
  "-",
  "Matilde debe morir - Cristian Acevedo (Barenhaus)",
  "-",
  "Nuevo. Sin marcas. Está en español",
  "img/libroMatilde2.jpeg",
  "img/libroMatilde3.jpeg"
);

const pelota = new product(
  "17",
  "img/pelota1.jpeg",
  "Pelota de basket Decathlon",
  4,
  "Naranja",
  "Tarmak - Decathlon",
  "7",
  "Poco uso. Sin fallas. Se vende con inflador",
  "img/pelota2.jpeg",
  "img/pelota3.jpeg"
);

const piloto = new product(
  "18",
  "img/piloto1.jpeg",
  "Piloto vintage talle único",
  8,
  "Amarillo",
  "Sin marca. Comprado en un vintage",
  "Sin talle. Equivaldrá a un M",
  "Perfecto estado. Vintage",
  "img/piloto2.jpeg",
  "img/piloto3.jpeg"
);

const poncho = new product(
  "19",
  "img/ponchoLluvia1.jpeg",
  "Poncho para lluvia talle único",
  2,
  "Verde petroleo",
  "Forclaz - Decathlon",
  "Talle único XS/XL",
  "Sin uso. Hay 3 ponchos iguales para vender. Se venden separados o juntos, con precio a charlar",
  "img/ponchoLluvia2.jpeg",
  "img/ponchoLluvia3.jpeg"
);

const fitNegra = new product(
  "20",
  "img/remeraFitNegra1.jpeg",
  "Remera hombre talle 3XL",
  3,
  "Negro",
  "Kalenji - Decathlon",
  "3XL - hombre",
  "Sin uso",
  "img/remeraFitNegra2.jpeg",
  "img/remeraFitNegra3.jpeg"
);
const fitRoja = new product(
  "21",
  "img/remeraFitRoja1.jpeg",
  "Remera hombre talle 3XL",
  3,
  "Rojo oscuro",
  "Kalenji - Decathlon",
  "3XL - hombre",
  "Sin uso",
  "img/remeraFitRoja2.jpeg",
  "img/remeraFitRoja3.jpeg"
);
const remeraGris = new product(
  "22",
  "img/remeraGris1.jpeg",
  "Remera mujer talle grande",
  2,
  "Gris claro",
  "Sin marca",
  "Sin talle marcado. Talle grande",
  "Poco uso. Sin fallas",
  "img/remeraGris2.jpeg",
  "img/remeraGris3.jpeg"
);

const remeron = new product(
  "23",
  "img/remeron1.jpeg",
  "Remerón mujer talle 3XL",
  4,
  "Amarillo con inscripción en rosa",
  "Valvinna",
  "3XL",
  "Sin uso y sin fallas",
  "img/remeron2.jpeg",
  "img/remeron3.jpeg"
);

const sharpies = new product(
  "24",
  "img/sharpies1.jpeg",
  "Set 24 Sharpies- colores varios",
  15,
  "Varios",
  "Sharpie",
  "-",
  "Poco usadas. Hay dos colores repetidos. Funcionan bien",
  "img/sharpies2.jpeg",
  "img/sharpies3.jpg"
);

const sweater = new product(
  "25",
  "img/sweater1.jpeg",
  "Sweater H&M talle M",
  4,
  "Beige/crema",
  "H&M - Divided (eeuu)",
  "M",
  "Poco uso. Sin fallas",
  "img/sweater2.jpeg",
  "img/sweater3.jpeg"
);

const zapatillasNba = new product(
  "26",
  "img/zapatillasNba1.jpeg",
  "Zapatillas NBA talle 47",
  40,
  "Negras con detalles en violeta y amarillo",
  "Tarmak - Decathlon",
  "EU: 47 // US: 13",
  "Poco uso. Sin fallas",
  "img/zapatillasNba2.jpeg",
  "img/zapatillasNba3.jpeg"
);

const zapatillasNegras = new product(
  "27",
  "img/zapatillasNegras1.jpeg",
  "Zapatillas deportivas talle 47",
  5,
  "Negro",
  "Newfeel - Decathlon",
  "EU: 47 // US: 13",
  "Usadas. Está un poco gastado el forro interior como se ve en la tercera foto",
  "img/zapatillasNegras2.jpeg",
  "img/zapatillasNegras3.jpeg"
);

export const arrayProducts = [
  aire,
  aspiradora,
  blazerZara,
  buzoAzul,
  buzoHollister,
  buzoKakashi,
  camisaGap,
  camisaVerde,
  camisaVolados,
  camperaColumbia,
  camperaUniqlo,
  cubos,
  libroEvelyn,
  libroJapon,
  libroMatilde,
  pelota,
  piloto,
  poncho,
  fitNegra,
  fitRoja,
  remeraGris,
  remeron,
  sharpies,
  sweater,
  zapatillasNba,
  zapatillasNegras,
];
