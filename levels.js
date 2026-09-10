const LEVELS=[
{id:1,name:"NIVEL 1: LA COCINA",length:2000,bg:"linear-gradient(90deg,#87CEEB 0%,#ffb703 50%,#8B4513 100%)",floor:"#8B4513",
obstacles:[{x:300,y:0,w:80,h:60,type:"mesa",color:"#6b3a1f"},{x:600,y:0,w:60,h:40,type:"silla",color:"#8B4513"},{x:950,y:0,w:100,h:80,type:"refri",color:"#ccc"},{x:1300,y:0,w:120,h:50,type:"estufa",color:"#333"}],
enemy:{name:"EL BRYAN",shirt:"#0af",pants:"#111",skin:"#D2A679",hair:"#000",chancla:"#fff",eyes:"#fff",hp:80,speed:0.7,damage:8}},
{id:2,name:"NIVEL 2: EL MERCADO",length:3000,bg:"linear-gradient(90deg,#ff9a00,#ffcc00,#ff6a00)",floor:"#c97a20",
obstacles:[{x:250,y:0,w:90,h:70,type:"puesto",color:"#ff4444"},{x:500,y:0,w:70,h:45,type:"caja",color:"#8B4513"},{x:1100,y:0,w:150,h:90,type:"camion",color:"#0af"},{x:1600,y:0,w:80,h:60,type:"puesto",color:"#0f8"},{x:2400,y:0,w:60,h:40,type:"silla",color:"#8B4513"}],
enemy:{name:"LA VECINA",shirt:"#ff88ff",pants:"#ffde59",skin:"#FFDBAC",hair:"#f22",chancla:"#fb8500",eyes:"#0f0",hp:110,speed:1.0,damage:12}},
{id:3,name:"NIVEL 3: AZOTEA FINAL",length:3500,bg:"linear-gradient(90deg,#220033,#440066,#001133)",floor:"#111",
obstacles:[{x:200,y:0,w:60,h:100,type:"tinaco",color:"#333"},{x:450,y:0,w:120,h:50,type:"barda",color:"#555"},{x:1000,y:0,w:200,h:60,type:"barda",color:"#555"},{x:1400,y:0,w:80,h:120,type:"antena",color:"#222"},{x:2200,y:0,w:100,h:100,type:"tinaco",color:"#333"}],
enemy:{name:"ABUELA FINAL",shirt:"#000",pants:"#000",skin:"#E8B899",hair:"#fff",chancla:"#ffde59",eyes:"#f00",hp:180,speed:1.2,damage:18,doubleChancla:true}}
];
function getLevel(n){return LEVELS[n-1]||LEVELS[0];}
function saveProgress(l){localStorage.setItem('kof_level',l);}
function loadProgress(){return parseInt(localStorage.getItem('kof_level')||'1');}