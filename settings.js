const DEFAULT_SETTINGS={speed:0.35,enemySpeed:0.35,jumpPower:12,gravity:0.75};
function loadSettings(){return JSON.parse(localStorage.getItem('kof_settings')||JSON.stringify(DEFAULT_SETTINGS));}
function saveSettings(s){localStorage.setItem('kof_settings',JSON.stringify(s));}
function getSpeedLabel(v){if(v<=0.3)return"🐢 LENTISIMO";if(v<=0.5)return"🚶 LENTO";if(v<=0.7)return"🐌 TRANQUI";if(v<=1.0)return"🏃 NORMAL";if(v<=1.4)return"⚡ RÁPIDO";return"🔥 TURBO";}