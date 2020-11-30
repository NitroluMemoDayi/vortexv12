const config = {
    "ownerID": "679690636164857859", //kendi IDınızı yazınız
    "admins": ["679690636164857859"],
    "support": ["679690636164857859"],
    "token": "NzgyOTQxOTg0NzE3NDA2MjM4.X8Thiw.WYDfXTRz39iPnvb9oW9KC2dSV0A", //botunuzun tokenini yazınız
    "dashboard" : {
      "oauthSecret": "", //botunuzun secretini yazınız
      "callbackURL": `https://dash.vortexbot.org/callback`, //site URLnizi yazınız /callback kısmını silmeyiniz!
      "sessionSecret": "", //kalsın
      "domain": "https://dash.vortexbot.org/", //site URLnizi yazınız!
          "port": process.env.PORT
    }
  };
  
  module.exports = config;