# 07-04 / Food storage — concept finish

Local northwest origin; +X east, +Z south; civil Y0 = future walkable surface S. World origin, S and rotation unassigned.

This is an alternate real-block finish. Its own schematic, coordinate CSV, stock list and layer grids agree. Earlier architecture, guides and exports remain unchanged; do not mix their old palette stock with this variant.

Bounds [0, -1, 0, 63, 26, 63]; 16,016 occupied positions. Minimum world Y=S+(-1). City footprint [310, 598, 373, 661]. No rotation is applied.

For an existing model, footprint, openings, clearances and every occupied position are preserved. Only role/material bindings are revised, including pavement surface role separation on R01/R02. New street/garden demonstrations are detached scenes; they do not insert buildings, flowers, lamps or pavement into the civil masterplan.

Assembly: verify the surveyed site; follow the included grids from minimum Y upward for supports, floors/walls/frames, glazing/fixtures, then decorative planting. Keep source access openings and service paths clear. Stacked top/bottom slab metadata and crossed allium geometry remain distinct. Required-clear masks and temporary civil caps are separate. Recipes and construction completion are not recorded as verified.

Cyan Caelestis9 emits block light10. Glowstone0 emits15. Bloom, colored spill, reflection and leaf biome colors are renderer/shader dependent; these previews do not establish actual world light coverage. The demonstration basin is dry glass, not functioning water. No operating doors, machines, pipes, cables or tile entities are included.

WorldEdit uses config/worldedit/schematics under the executing instance/server. Load this filename with //schematic load mcedit. Set //pos1 to the manifest's surveyed NW minimum and //toggleplace until 'Now placing at pos #1.' Use //paste -a -s only in an authorized test/build location; never -o with zero stored origin. Import/re-import in GTNH remains untested.
