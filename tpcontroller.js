class TPController {
    render(){}
    commandsPerSecond = 60;
    commandstreamer;
    navigation; // joystick
    other;
    streamCommands(){
        this.commandstreamer = setInterval(()=>{
            let commanddata = {};

            // get data from joystick and etc

            ws.send(commandData);
        },this.commandsperSecond);
    }
    endCommandStream(){
        clearInterval(this.commandstreamer)
    }
}