# Model provenance

`build_transect.py` constructs the road, roofed crossing, hall threshold, two principal stair connections, park, river walk and lined stream. It imports the twelve named module placements recorded in `WC01-guide.json`, including repeated modules. The translations and native side/turn transforms use the attached archive's local northwest coordinate system. The issued files and their hashes are recorded in the build pack.

Each retained planted flower in WC01-A stands on a grass or dirt block. All retained trunks have a supporting trunk, dirt or grass below. The full scenic view includes one allium at (11, 33, 68) above air where the foreground hall excavation clips a decorative cliff-edge grass patch. This flower belongs to the illustrated backdrop and is absent from the architecture ghost and stock.

`build_vista.py` reads the full WC01, its dry ghost and three native source models into a larger independent landscape. It transforms every native shape and multipart orientation and checks every placed building host against the final composition. The wide view uses a continuous river and a curved avenue beyond the issued district. Its additional scenery and architecture have separate placement and hash records in `WC01-vista-guide.json`. World anchoring, design fit and runtime testing remain open.
