// Step 0:
// Add all feature geoJSON and layer logic to the `index.html`

// Step 1:
// Initialize the map with basic information
var interactive_map = new InteractiveMap('map', {
    // This will limit automatic zooming to this zoom level
    max_good_zoom: 6,
    // This is the max zoom the map will allow
    max_map_zoom: 7,
    website_source: 'https://github.com/interactive-game-maps/aporia_beyond_the_valley',
    website_subdir: 'aporia_beyond_the_valley',
    attribution: `
    <li>This <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=1150741177">guide</a> from <a href="https://steamcommunity.com/profiles/76561198070453188">Innocentive</a> was a great help!</li>
`
});

// Step 2:
// Add at least one tile layer
interactive_map.addTileLayer('Ingame map', {
    minNativeZoom: 2,
    maxNativeZoom: 5,
    attribution: 'Map from <a href="https://aporiathegame.com/">Invisible Walls</a> (game data files)'
});

// Step 3:
// Add at least one marker layer
addAlcoholic(interactive_map);

// Step 3.5 (optional):
addChapter(interactive_map);

// Step 3.5 (optional):
addGlassShards(interactive_map);

// Step 3.5 (optional):
addHerbivore(interactive_map);

// Step 3.5 (optional):
addLightMyFire(interactive_map);

// Step 4:
// Finalize the map after adding all layers.
interactive_map.finalize();

// Step 5:
// Open `index.html` to view the map.
// You can now add additional layers by clicking the edit button in the lower left
// While editing a layer you can export the geoJSON in the toolbar on the right when you're done
// and add them here to step 3 to display them fixed for all users.
