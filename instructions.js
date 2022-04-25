class Instructions {
    render() {
        return `
        <div>
            <p>
            To connect webui to robot locally, both the webui and robot must be connected to
            the same wifi. Enter the local wifi ip address into the uri.
            </p>
            <p>
            To connect webui to robot over internet, enter robot platform servers uri.
            example ... ws://dnull.com/telepresrence
            </p>
        </div>
        `
    }
}