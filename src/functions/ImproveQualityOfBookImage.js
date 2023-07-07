export function ImproveQualityOfBookImage(url, zoomLevel) {
    try {
        if (typeof zoomLevel !== 'number') return new Error('ZoomLevel need to be number')
        let imgZoom = url.replace('zoom=1', `zoom=${zoomLevel}`)

        return imgZoom
    } catch (erro) {
        console.erro(erro)
    }
}