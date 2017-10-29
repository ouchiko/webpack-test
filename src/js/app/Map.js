class Map
{
    /**
     * Map Constructor
     *
     * @param <string> token
     */
    constructor(token)
    {
        this._token = token;
    }

    /**
     * Returns the mapbox reference.
     *
     * @return <mapbox object>
     */
    get mapReference()
    {
        return this._map;
    }

    /**
     * Defines a new map instance.
     *
     * @param <htmlid> container
     * @param <string> style
     * @param <float> lat
     * @param <float> lon
     * @param <int> zoom
     *
     * @return <mapbox object>
     */
    defineMapInstance(container, style, lat, lon, zoom)
    {
        mapboxgl.accessToken = this._token;

        this._map = new mapboxgl.Map(
            {
                container: container,
                style: style,
                center: [lat, lon],
                zoom: zoom
            }
        );

        this.disableAttributeModel();

        return this._map;
    }

    disableAttributeModel()
    {
        $(".mapboxgl-ctrl-attrib").hide();
    }
}

export default Map;
