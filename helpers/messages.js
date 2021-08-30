require('colors');

const showMenu = () => {

    return new Promise((resolve) =>{

        console.clear();
        console.log('======================'.green);
        console.log('   Choose an option'.green);
        console.log('======================\n'.green);
    
        console.log(`${'1.'.green } Create new TODO`);
        console.log(`${'2.'.green } Show all TODOS`);
        console.log(`${'3.'.green } Show completed TODOS`);
        console.log(`${'4.'.green } Show pending TODOS`);
        console.log(`${'5.'.green } Complete TODO`);
        console.log(`${'6.'.green } Delete TODO`);
        console.log(`${'0.'.green } OUT \n`);
    
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readLine.question('Choose an option: ', (answer)=> {
            readLine.close();
            resolve(answer);
        });

    });



}

const pause = () => {
    return new Promise((resolve) =>{

        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readLine.question(`\nPress ${'ENTER'.green} to continue\n`, (answer)=> {
            readLine.close();
            resolve();
        });

    });

}

module.exports = {showMenu, pause}