const fs = require('fs')

global.creator = 'XiezhoID' 
global.apikey = ["XiezhoID", "Alphabot", "Alpha"]

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
	delete require.cache[file]
	require(file)
})
