import EventEmitter from 'node:events';
class greetingApp extends EventEmitter { };
const app = new greetingApp();
import Event from './eventNames.js';

app.on('greet', () => {
    console.log('Hello from the app')
})

// app.emit('greet');

app.on('greetUser', (name) => {
    console.log(`Hello ${name}!`)

})

// app.emit('greetUser', "Angela")
// app.emit('greetUser', { name: "Angela" });

app.on(Event.greet_user_obj, (userObj) => {
    if (userObj instanceof Object) {
        if (userObj.age >= 18) {
            console.log(`Welcome ${userObj.name}`)
        } else {
            console.log(`${userObj.name} come back when you are 18 or older`)
        }
    } else {
        console.log('incorrect data')
    }
})

// app.emit('greetUserObj', { name: "Angela", age: 14 })
// app.emit('greetUserObj', { name: "Mite", age: 19 })


app.once('once',()=>{
    console.log('Sending welcome email')
})
// app.emit('once');
// app.emit('once');

app
.on('userReg',(name)=>{
    console.log(`Welcome ${name}`)
})
.prependOnceListener('userReg',()=>{
    app.emit('once');
})
.prependListener('userReg',()=>{
    console.log(`Successfully registered`)
})

app.emit('userReg',"Angela");



