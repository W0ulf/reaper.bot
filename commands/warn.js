module.exports = {
    name: 'warn',
    
    execute(message, args){
        message.channel.send('test');
    }
}