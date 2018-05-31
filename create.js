const log      = require('./logger')
const fs       = require('fs')

let profiles   = JSON.parse(fs.readFileSync('profiles.json', 'utf-8'))
let config     = JSON.parse(fs.readFileSync('config.json','utf-8'))

let sizes      = [4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14]
let ratio      = Math.floor(parseInt(config.Accounts) / parseInt(profiles.length))
let remainer   = parseInt(config.Accounts) % parseInt(profiles.length)
let totalTasks = [];

for (let i = 0; i < profiles.length; i++) {
    if (remainer != 0) {
        for (let b = 0; b != ratio + 1; b++) {
            totalTasks.push({
                "URL"        : config.Sku,
                "Size"       : sizes[Math.floor(Math.random() * sizes.length)].toString(),
                "Proxy"      : "",
                "Account"    : "",
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
                "Size"       : sizes[Math.floor(Math.random() * sizes.length)].toString(),
                "Proxy"      : "",
                "Account"    : "",
                "Profile"    : `${profiles[i].Name}`,
                "Product"    : config.Sku,
                "RandomApt"  : config.RandomApt,
                "RandomName" : config.RandomName,
                "RandomPhone": config.RandomPhone
            });
        }
    }
}
fs.writeFile(`${config.ExportName}.json`, JSON.stringify(totalTasks), () => {
    log(`Finished making ${totalTasks.length + remainer} tasks with 1:${ratio} ratio.`, 'success')
})