const log      = require('./logger')
const fs       = require('fs')

let profiles   = JSON.parse(fs.readFileSync('profiles.json', 'utf-8'))
let config     = JSON.parse(fs.readFileSync('config.json', 'utf-8'))
let ratio      = Math.floor(parseInt(config.Accounts) / parseInt(profiles.length))
let remainer   = parseInt(config.Accounts) % parseInt(profiles.length)
let totalTasks = [];

log('---------------------------')
log("-----Made by @Cody_Ncc-----")
log('---------------------------')
log('')
for (let i = 0; i < profiles.length; i++) {
    if (remainer != 0) {
        for (let b = 0; b != ratio + 1; b++) {
            totalTasks.push({
                "URL"        : config.Sku,
                "Size"       : config.sizes[Math.floor(Math.random() * config.sizes.length)].toString(),
                "Proxy"      : "",
                "Account"    : "",
                "Device"     : config.device,
                "Profile"    : `${profiles[i].Name}`,
                "Product"    : config.Sku,
                "RandomApt"  : config.RandomApt,
                "RandomName" : config.RandomName,
                "RandomPhone": config.RandomPhone
            });
        }
        remainer = remainer - 1;
    }
    else {
        for (let b = 0; b != ratio; b++) {
            totalTasks.push({
                "URL"        : config.Sku,
                "Size"       : config.sizes[Math.floor(Math.random() * config.sizes.length)].toString(),
                "Proxy"      : "",
                "Account"    : "",
                "Device"     : config.device,
                "Profile"    : `${profiles[i].Name}`,
                "Product"    : config.Sku,
                "RandomApt"  : config.RandomApt,
                "RandomName" : config.RandomName,
                "RandomPhone": config.RandomPhone
            });
        }
    }
}
fs.writeFile(`${config.ExportName}.json`, JSON.stringify(totalTasks), (err) => {
    if (err)
        log(err, 'error')
    else
        log(`Finished making ${totalTasks.length + remainer} tasks with 1:${ratio} ratio.`, 'success')

})
