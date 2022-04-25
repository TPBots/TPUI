class FormRoboConn {
    render(){
        return `
            <form>
                ${this.renderInputs()}
            </form>
        `
    }
    renderInputs() {
        return this.slice(this.forminputs).map((inputOBJ=>{
            return `
                <input 
                    type="${inputOBJ.type}"
                    name="${inputOBJ.name}"
                    value="${inputOBJ.value}"
                >
            `;
        }));
    }
    forminputs = [
        {
            name: 'protocol',
            value: 'ws',
            type: 'text',
        },
        {
            name: 'ipv4',
            value: '',
            type: 'text',
        },
        {
            name: 'port',
            value: 8080,
            type: 'text',
        },
        {
            name: 'path',
            value: '/registerUI',
            type: 'text',
        },
        {
            name: '',
            value: 'open connection',
            type: 'submit',
        }
    ]
}