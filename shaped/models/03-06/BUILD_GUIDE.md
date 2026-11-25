# 03-06 — IV assembly

Local NW origin; +X east,+Z south. Civil Y0=future surface S. World anchor, S and rotation unassigned.

This is the new native shaped-detail alternative, not a completed factory. Preview geometry, host grids, counts and schematic all derive from model.json. ArchitectureCraft slopes and round poles replace coarse stair ribs and cube lamp masts where modeled; FMP covers/edges replace thick lights and selected collars. Other structural cubes/slabs remain intentional. Earlier revisions remain preserved separately.

Footprint 64 × 64; civil Y-1..32. City X502..565,Z214..277.

## Read the layer grids

Every square is one host-block coordinate, not one full cube of material. `.` is unspecified air (not excavation). Lowercase/uppercase role symbols identify ordinary blocks; `@` is ArchitectureCraft and `+` is ForgeMultipart. Each layer appends full native shape/side/turn or individual part IDs/sizes/material roles for every special cell. Use native-detail-coordinates.csv for full positions and fields; cube-runs.csv for ordinary positions. Do not fill a `+` or `@` square with a cube.

Counts: 16020 ordinary positions; 816 ArchitectureCraft items; 1124 multipart hosts containing 1124 cut parts. parts-and-stock.csv separates these quantity types. Host count, individual micropart count, full-block inventory and crafting bill are different. The source-volume file is a geometric lower bound for microcuts, not a saw recipe or shopping bill. ArchitectureCraft's source enum yields are listed as sawbench batches; installed runtime material eligibility/recipes/progression still need a game sample. Counts across alternative scenes must not be added as one city bill.

## Assembly

1. Set out the footprint and clear only explicitly required construction space. Build ordinary foundations/floors first, maintaining existing civil access and service clearances.
2. Work upward using the exact civil-Y layer. Install ordinary wall/roof/slab pieces, then shaped ribs at the coordinates and orientations in the detail list. AC shape0 is Roof Tile;17 Round Pole;94/95 are the complementary two-piece shallow profiles used vertically for smooth steep ribs. Each half has its own side/turn; do not substitute stairs.
3. Use the ArchitectureCraft sawbench with the stated base registry/meta. The hammer changes orientation; the saved side/turn values, source matrices and rendered ribs are the reference for hand matching. Input/cutting mechanics and actual placement need a target-game test.
4. Cut the stated FMP materials with the installed microblock saw. The part shape byte is size-in-eighths in the high nibble and local face/edge index in the low nibble. A one-eighth face cover is0.125 thick; edges are0.125 square; lamp poles are ArchitectureCraft17,0.25 diameter. Material names are persisted strings, not session numeric IDs.
5. Place individual covers and edges on the exact host faces/edges. Multipart hosts in the new exports carry a native `savedMultipart` parts list. FMP and AC cannot share one block cell; the model uses distinct hosts. Cyan Caelestis9 microcuts emit10 statically; white Caelestis0 microcuts emit15 through ExtraUtilities' registered FullBrightMicroMaterial. AC shapes do not inherit base-material light. Bloom and colored lighting in offline renders are illustrative.
6. Fit glazing, soil, persistent decorative leaves and flowers where shown. Retain maintenance paths. Plants, collision, lighting, spawn coverage and multipart render performance need inspection in game.

## Native schematic loading — test sample first

Start with SD01, the4×4 detached lamp coupon; inspect SF01 next. Keep the full city and earlier road/gallery packs separate. These exports contain many tile entities and are statically validated, but have not been imported/re-imported in the target game.

The installed WorldEdit uses `.minecraft/config/worldedit/schematics`. Copy only the desired `.schematic` there. In a disposable test world, when you choose to test, run `//schematic load mcedit Valier_03-06_Shaped_GTNH29`, inspect clipboard dimensions, set `//pos1 X,Y,Z`, select `//gmask`/placement options deliberately, and use the installed placement-at-pos1 mode (`//toggleplace`) before `//paste -a -s`. Confirm mode feedback before pasting. File origins and offsets are zero, and TE positions are clipboard-local. Paste minimum worldY is S+(-1); never substitute civilY for measured worldY. `-a` leaves target air alone; it is not excavation. A successful command alone does not prove all shape and multipart NBT survived; inspect materials, orientation, light and exports and re-import them before calling the module build-ready.

No live world was read or changed. No functional machines, pipe/cable networks, throughput/capacity, full recipe bill or game certification is supplied.
