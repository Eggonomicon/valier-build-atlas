# 03-07 — LuV chemistry

Local NW origin; +X east,+Z south. Civil Y0=future surface S. World anchor, S and rotation unassigned.

This is the measured reference-architecture reconstruction. Its exact model, native schematic, host layers, elevations, coordinates and quantities belong together. The authored orientation is north=-Z; native clipboard rotation beyond it has not been validated. Earlier finish packs remain preserved. The set specifies architecture and circulation; functional machinery/networks and target-game import/recipe/collision/lighting tests remain open. It has not been certified build-ready in game.

Footprint 64 × 64; civil Y-7..38. City X598..661,Z214..277.

## Quantity types

19718 ordinary/fluid host positions, 2485 ArchitectureCraft pieces, 1700 multipart hosts and 1786 individual cut parts. Do not add host and cut-part counts. parts-and-stock.csv separates full blocks, sawbench pieces, microparts and fluid source cells. Water is not an inventory-block or bucket bill. Source-volume-and-sawbench-batches.csv gives geometric micro-material volume and enum-based AC source batches separately; it is not a verified progression/crafting bill. Alternatives and detached scenes are not an additive city shopping list.

## Read before placing

Every host-grid square is one block coordinate. `.` is unspecified air, not excavation; `@` is ArchitectureCraft; `+` is ForgeMultipart; other symbols are palette roles. A partial host is not a filled cube. Each layer lists full shape/side/turn or part IDs/size bytes/material roles after the grid. native-detail-coordinates.csv gives exact detail coordinates and fields; cube-runs.csv gives all ordinary/fluid placements. The layer files and native NBT are generated from this same model.

Palette: B Korp14 charcoal courses; R Agon13 charcoal square paving; L Agon0 pale panels; P Agon15 gray paving; M Korp2 recesses; K Agon13 dark panels; G TConstruct:GlassBlock.StainedClear3 (light blue), exact sixteen-icon connected textures; g original chisel:glass (meta6) for eligible AC roofs; N cyan Caelestis9; W white Caelestis0. Dirt, oak trunks, persistent leaves, alliums, slabs and real contained water remain distinct. Read palette.json for exact registry names/metas and source assets. Raw/display swatches are original extracted/cropped pixels. The offline images additionally use physical daylight/glass/reflection/emission; they are not game screenshots or a verified shader.

## Construction order

1. Survey/anchor the intended PDIM before converting local coordinates. Preserve the 864 core,876 civil envelope,12-wide streets and HQ405..469 reservation. Establish civil surface S; world blockY=S+civilY. New detached SC/SX/detail scenes are demonstrations, not automatically placed city structures.
2. Build the existing civil work orders first. WO01/M11 is the unchanged infrastructure starter. Where this new building has a basement, use the separate SI01 interface placement register. Civil gallery walks at-9; the new basement walks at-6. Its six half-steps, landing and ceiling are explicitly modeled. Open only the listed30cap cells after the connector is built and inspected. No pipe/cable capacity or operational utility network is implied.
3. Set out this model's footprint and all required below-ground space. Build foundations, basin bottoms and retaining walls first. Empty schematic cells are not a required-clear mask. Do not bury doors, galleries, stairs or floor openings. Retain temporary access until the permanent route is inspected.
4. Follow ascending host layers for the shell. Keep the recess depth and projecting cornices: do not flatten the glazing onto the front of the piers. Use the exact stepped/planted roof, canopy and terrace layers. Floor/stair openings are part of the model; do not fill rectangular floor bounding boxes blindly.
5. Cut AC pieces from their stated eligible base material. Shape0 is the45-degree roof profile;94/95 are complementary shallow profiles, rotated into continuous steep ribs. Side/turn are exact saved orientations, not compass labels. The source matrices in architecture-spec.json and the native preview establish the orientation; the sawbench/hammer's live controls still require a test sample. G TConstruct clear glass is not eligible for AC; use role g glass6 as modeled, not G.
6. Saw and place the listed FMP covers/edges/posts. The high nibble of the shape byte is size-in-eighths; the low nibble is the installed face/edge/axis index. Lamp mast posts are half a block wide. The shallow1.75-square head uses four actual AC56 molded cornices facing the central3/8 cover. The upper mast host contains its half-width post and two disjoint1/8 white underside edges at front/back. Their Z slices do not overlap the centered post. Follow exact part fields and rotations. A lamp plinth uses opposite7/8 dark and1/8 cyan covers; those touch without overlap. Do not replace them with cubes.
7. Fit glazing and lights. Connected full-cube glass removes internal inventory-icon borders using the installed CTM rules; its deliberate dark mullions remain real microparts. Cyan microcuts emit10; white Caelestis microcuts emit15 through the installed integration. Normal AC shapes do not inherit base emission. Bloom/colored reflection is illustrative; verify actual spawn light and shader appearance in game.
8. Fill the modeled soil cells, then plants/trunks/leaves/alliums. Use persistent player-placed leaf metadata4 where listed. Fill basins only after their floor and all four boundaries are complete. These are real source-water cells, with a recorded first-animation-frame/default-biome preview; future PDIM biome tint and fluid updates remain untested.
9. Inspect all doors, stairs, galleries, bridge openings and roof access before adding machines. Tall-hall central clear volume and reserved bays are geometric proposals. Obtain actual machine footprints/hatch/maintenance/network evidence before fitting a factory. Earlier operations diagrams used earlier shells and must be reconciled.

## Start with a disposable sample when you choose to test

SD01 is the lamp/cutting sample; SF01 is the facade/stair/terrace sample. SI01 is a distinct service-level transition. Copy only the selected file to the installed `.minecraft/config/worldedit/schematics` directory. In a disposable test world, use `//schematic load mcedit Valier_03-07_Shaped_GTNH29`, check dimensions, set `//pos1 X,Y,Z`, confirm the installed placement-at-pos1 mode (`//toggleplace` feedback), then `//paste -a -s` when ready. All file origins/offsets are zero; TE positions are clipboard-local; minimum pasteY=S+(-7). `-a` preserves destination air and does not excavate. Inspect native materials, orientations, parts, light and re-export/re-import before marking the result build-ready. No world was opened or pasted by this project work.

## Gathering ordinary blocks

ordinary-inventory.csv combines upper/lower slab and persistent-leaf placed states into their correct inventory metadata. It excludes AC pieces, microcuts and fluid cells. parts-and-stock.csv retains placed/base metadata and a separate source inventory metadata column. Sawbench/cut-piece lists and source-volume lower bounds remain separate.

## Shared architectural manual

See CONSTRUCTION_MANUAL.md in the pack root for the family dimensions, service interface, street composition and construction sequence.
