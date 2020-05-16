// Node Script to build vue js component 
// Required --name option to set name of Component
// Procedure:
// Copy template from " __dirname + 'template.component.vue' " on process.cwd()
// Change {ComponentName} with --name option
// DONE!!! 
const args = require('minimist')(process.argv.slice(2))
console.log(__dirname)
console.log(process.cwd())
console.log(args)

