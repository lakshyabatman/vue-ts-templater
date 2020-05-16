#!/usr/bin/env node

// Node Script to build vue js component 
// Required --name option to set name of Component
// Procedure:
// Copy template from " __dirname + 'template.component.vue' " on process.cwd()
// Change {ComponentName} with --name option
// DONE!!! 
const args = require('minimist')(process.argv.slice(2))
const path = require('path')
const fs = require('fs');
const Handlebars = require('handlebars');

const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}



(async () => {
    try {
        const source = fs.readFileSync(path.resolve(__dirname,'../template/template.component.vue'),'utf-8');
        const template = await  Handlebars.compile(source);
    
        const contents = await template({name:capitalize(args['name'])});
        fs.writeFile(path.resolve(process.cwd(),`${args['name']|| 'template'}.component.vue`), contents, err => {
            if (err) {
                return console.error(`Autsch! Failed to store template: ${err.message}.`);
            }
    
            console.log(`Saved template!`);
        });
    
    }catch(e) {
        console.log(e)
    }
    
})()


