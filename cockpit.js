class CockPit {
    render(){
        let html = ``;
        this.htmlTags.forEach((htmlObj)=>{
            htmlObj.instance = new htmlObj.class();
            let taghtml = htmlObj.instance.render();
            html += `
                <center>${taghtml}</center>
            `
        })
        return html;
    }
    htmlTags = [
        {
            class: TPFormRoboConn,
            instance: {},
        },
        {
            class: TPAudioPlayer,
            instance: {},
        },
        {
            class: TPVideoPlayer,
            instance: {},
        },
        {
            class: TPController,
            instance: {},
        }
    ]


}