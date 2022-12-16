// Simple
// Just a simple area overlay

function addChapter(map) {

    // New layer with id `collectibles` from geoJSON `collectibles`
    map.addInteractiveLayer('chapter', chapter, {

        // The display name for this layer
        name: 'Chapter',

        // This layer should have a tab in the sidebar with a list for each feature ID
        create_checkbox: false,

        // Each feature should have a popup
        // This internally calls `getPopupMedia()` to associate an image or video
        // See `map_utils.js` for an example
        create_feature_popup: false,

        // This layer should be visible by default
        is_default: true,

        // Assign to new featureGroup so we don't merge clusters with the other marker
        feature_group: L.featureGroup(),

        // Mouse hover styling
        polygon_style_highlight: {
            color: 'red',
            opacity: 1.0,
            fillColor: 'blue',
            fillOpacity: 0.2
        },

        // Normal styling
        polygon_style: {
            color: 'blue',
            opacity: 0.7,
            fillOpacity: 0.1
        },

        // Do something on each feature
        onEachFeature: function (feature, layer) {
            layer.on({

                // Highlight feature on mouse over
                mouseover: event => {
                    this.highlightFeature(feature.properties.id);
                },

                // Reset styling on mouse out
                mouseout: event => {
                    this.removeFeatureHighlight(feature.properties.id);
                },

                // On clicking the feature:
                // * Zoom to boundaries
                // * Prevent setting share marker
                // * Rewrite URL so the feature can be shared
                click: event => {
                    map.getShareMarker().prevent();
                    this.zoomToFeature(feature.properties.id);
                    Utils.setHistoryState(this.id, feature.properties.id);
                }
            });

            // Show a tooltip with the name following the cursor
            layer.bindTooltip(feature.properties.name, {
                sticky: true
            });
        }
    });
}
