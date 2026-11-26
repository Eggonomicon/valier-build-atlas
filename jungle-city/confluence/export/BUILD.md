# Building the Cliff Promenade

WC01-A contains 21,748 occupied architectural positions. Build it as a detached sample beside a surveyed bank. The source-local avenue walking plane is Y0, the lower garden is Y−3 and the upper crossing is Y+14. North is −Z and east is +X.

## Set out the ghost

Choose a world position (X, Y, Z) corresponding to **scene-local (0, 0, 0)**. The trimmed ghost's lowest northwest corner belongs at **(X + 3, Y − 8, Z + 0)**. Its inclusive source limits are X3..109, Y-8..32, Z0..75. Its size in X, Y, Z is 107 × 41 × 76. Embedded WorldEdit origins and offsets are all zero. Source-local (3, 0, 0), for example, is world (X+3, Y, Z). Native host orientations are supplied for this facing.

For a survival guide, copy `WC01-A-Architecture_ONLY.schematic` to the active instance's `.minecraft/schematics` folder, open it in Schematica, set the minimum as above, turn **Printer OFF**, and place your own materials. For WorldEdit clipboard inspection, copy the same file to `.minecraft/config/worldedit/schematics` and enter `//schematic load mcedit WC01-A-Architecture_ONLY`. The load command reads the clipboard; placement is manual.

## Build by level

1. Stake the road at X36 and trace the park approach east through Z49..52. Check the high bridge's two bank landings against solid ground and the intended tunnel clearance. Survey caves and adjust terrain/support heights for your site.
2. Open `index.html` inside the extracted blueprint ZIP. Select a level and zoom in. Coordinates along the top and left refer to the full scene. Each grid cell specifies one occupied host. Blank cells carry no placement instruction. Keep the 6,818 reserved air positions open. Each row of `WC01-clearance.json` lists local Y, Z, first X and last X inclusive. The accompanying `WC01-guide.json` gives the route centerlines and corresponding walking heights.
3. Build the bed, banks, bearings and low structural courses upward, then the garden, road, cliff frontage, stair and elevated bridge. Keep the four-wide park entrance open. Lay a continuous paving threshold from the hall to the road. Fit glass and trim after the piers.
4. For a cube use the registry and placed metadata in the layer legend. For an **A** code use the listed base material, ArchitectureCraft shape, side and turn. For an **M** code place all the listed cuts in the same Forge Multipart host. The exact native arrays and part order also appear in `WC01-A-coordinates.csv.gz`. The face/edge/post slot index is the low nibble of the native shape byte. Thickness in eighths is its high nibble.
5. Check the five closed sides of every marked water cell in your terrain. Fill the 684 river cells in `manual-water.csv` by hand after lining and containing the channel. Flowers, built planters and their soil are part of the architectural stock. The authored preview cliffs and water are separate from that stock. The stock counts placed items and cut pieces. Crafting yields still require an in-game check.

The export uses the GTNH block-name mappings and architecture-only native tile records. The archive includes one vector grid per occupied architectural level, exact coordinates and component stock. Each SVG links the host code to its material and orientation in the key below the grid. Static NBT reconciliation is documented in checks.json. Target-game re-import, actual walking/collision, lighting and water updates remain untested.
