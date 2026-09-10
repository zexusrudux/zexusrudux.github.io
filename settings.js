const DEFAULT_SETTINGS={speed:0.7,enemySpeed:0.7,jumpPower:15,gravity:0.95};
function loadSettings(){return JSON.parse(localStorage.getItem('kof_settings')||JSON.stringify(DEFAULT_SETTINGS));}
function saveSettings(s){localStorage.setItem('kof_settings',JSON.stringify(s));}
function getSpeedLabel(v){if(v<=0.5)return"🐢 LENTO";if(v<=0.75)return"🚶 TRANQUI";if(v<=1.0)return"🏃 NORMAL";if(v<=1.4)return"⚡ RÁPIDO";return"🔥 TURBO";}