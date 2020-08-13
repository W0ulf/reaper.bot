module.exports = {
    name: 'warn',
    description: "warn a user with this command!",
    execute(message, args){
        message.channel.send('test');
    }
}