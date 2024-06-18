const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "255738132447" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255738132447";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_07_06_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAzMixcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTM5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTA3LFxuICAgICAgICA5NyxcbiAgICAgICAgODksXG4gICAgICAgIDYyLFxuICAgICAgICA5OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTY1LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjUsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDQ4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMDUsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDk3LFxuICAgICAgICA4MyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDc1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDcwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDUzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDk2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTYxLFxuICAgICAgICA4NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjgsXG4gICAgICAgIDg4LFxuICAgICAgICAxMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODgsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDkyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNDksXG4gICAgICAgIDYwLFxuICAgICAgICAyMyxcbiAgICAgICAgNyxcbiAgICAgICAgODgsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEsXG4gICAgICAgIDU0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDExNixcbiAgICAgICAgMjA5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTY4LFxuICAgICAgICA4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNyxcbiAgICAgICAgMzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTE1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTg4LFxuICAgICAgICA0MCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzLFxuICAgICAgICAxMixcbiAgICAgICAgMjE2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAzNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg2LFxuICAgICAgICAxNjksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTMyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDExLFxuICAgICAgICAyNDgsXG4gICAgICAgIDc4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjI0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTE2LFxuICAgICAgICA0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDcxLFxuICAgICAgICA0LFxuICAgICAgICAyMzksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTE0LFxuICAgICAgICA0OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA5OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDY4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDg4LFxuICAgICAgICA1MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDksXG4gICAgICAgIDI5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjMwLFxuICAgICAgICA0OCxcbiAgICAgICAgODQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDU1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2LFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWVIrcEF1aUZES0x0WEhtQ2MyaDJWSVN3dnM0VkhlMHlGV0k4SzRVK3UvZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiYXFrU1piVV9Uc2lUWVZqN3RQTm10Z1wiLFxuICBcInBob25lSWRcIjogXCJmNDI5ZGY1OS03NTRhLTQ3NTctOWE5Ny02ZWZkNmE2NzUyZjlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA3LFxuICAgICAgNjUsXG4gICAgICA0OSxcbiAgICAgIDIzMyxcbiAgICAgIDAsXG4gICAgICAxMjQsXG4gICAgICAyMTIsXG4gICAgICAxODIsXG4gICAgICA5OSxcbiAgICAgIDEzNSxcbiAgICAgIDE3LFxuICAgICAgMjA1LFxuICAgICAgMCxcbiAgICAgIDIwMixcbiAgICAgIDQ2LFxuICAgICAgMTM2LFxuICAgICAgMTczLFxuICAgICAgMTYxLFxuICAgICAgMTQzLFxuICAgICAgNjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTEwLFxuICAgICAgMjIwLFxuICAgICAgMTA3LFxuICAgICAgMjUxLFxuICAgICAgMzUsXG4gICAgICAxMjIsXG4gICAgICAxNjcsXG4gICAgICAxOTEsXG4gICAgICA3MSxcbiAgICAgIDgxLFxuICAgICAgMjQ0LFxuICAgICAgODIsXG4gICAgICAxNjQsXG4gICAgICA2LFxuICAgICAgMTUwLFxuICAgICAgODYsXG4gICAgICAyMzAsXG4gICAgICAyMDksXG4gICAgICAzMCxcbiAgICAgIDQ3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjNRUkFLTTMyXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTU3MzgxMzI0NDc6MzhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjUwNDcwMzk2MDY4OTQ6MzhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTGVrZzcwRkVOZjl4ck1HR0FjZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIxRFNUU0dScWlMUjlDK3M1NU14QytGOFJaTWl6OURhWkkvenUra0VXTTFBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImJvZzZoZzcvTlVCY0hPZVJnNXlQeE05emdUazdYd2dqdmVub0cwMjU0QnZWTkhWbWV1UVZIS3hLYnNnd0FoYWF3SGNYWGNicVVOamN3TzE2M3ZMa0NBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInYrZ25xd0xZNXk3a0RSb0F6ZWlJeVYweHZ1OWhHNVhTZWtJaGtscEVReHRLazlFWUpjVURIT2tmR3dGV1J2N09wWHZzRGVVeDZKeGJNZGUrUnl6eEN3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NTczODEzMjQ0NzozOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA4MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4NzMwNDYwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTXRqXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNdGouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ6ZTlzY0xCdGF2WklBa1Qzb1FFVzJWaE5UcFA0dVpGam5tQlMzYUFPYXFzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0NzAxNTczNjcsXCJjdXJyZW50SW5kZXhcIjo1LFwiZGV2aWNlSW5kZXhlc1wiOlswLDMsNF19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.6",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "HUMBLE-TECHNOLOGY",
  ownername:process.env.OWNER_NAME|| "HUMBLE-TECHNOLOGY",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
