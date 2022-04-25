class TPVideoPlayer {
    render() {
        return `
            <img id="TPVideoPlayer">
        `
    }
    livestreamVideo(){
        if(urlObject){
            URL.revokeObjectURL(urlObject);
        }
        urlObject = URL.createObjectURL(arrayBuffer);
        
        let img = document.getElementById("TPVideoPlayer")
        img.src = urlObject;
    }
}