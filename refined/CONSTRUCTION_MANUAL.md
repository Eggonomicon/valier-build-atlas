# Valier reference architecture — construction manual

The three user boards are the design target. This revision rebuilds the visible architecture instead of only changing the palette: recessed bays, projecting light cornices, continuous native ribs, planted setbacks, detailed lamps, two glazed bridges, a water/V square and six roof families. It supplies102 explicit models:81 plot alternatives,15 components,2 detached street/plaza demonstrations and4 construction samples. Its exact exports and counted layers are a measured architectural plan. Actual target-game import/re-import, recipes, collision/light behavior and functional factories remain untested.

Local northwest origin; +X east,+Z south; civilY0 is future surface S. Actual PDIM is not created. World anchor, orientation and S remain unassigned. Core864×864; civil envelope876×876; HQ cityX/Z405..469 remains65×65. Preserve every Phase3 purpose. These alternative shells do not silently replace civil infrastructure or the protected Steam Works v2 source.

## Build sequence and module choice

1. Existing civil WO01/M11 → remaining P1 road/gallery orders → later civil sectors. Those196base+19P1 files remain unchanged.
2. SD01: reference lamp,4×3 host footprint, half-width square mast, cyan plinth, shallow1.75-square molded cap. It teaches the exact cutting/placement system.
3. SF01:40×24 facade module. Ground walk0; upper walks9/18; planted roof walk28. Recessed glazing is atZ9; projecting piers/covers/cornices occupy the modeled neighbors. The facade has four8-to9-block bays and five slim pale-faced piers. Six short5-row shaped knees replace the former26-row full-height diagonals. The interior stairs remain explicit. Real3-wide stairs run alongX inside the module. Follow the openings rather than filling the full floor rectangles.
4. SI01:8×10 underground interface, minimumcivilY-10, walk-9→-6 in6 half-steps. Place only at the rows in service-interface-placements.csv. The gallery cap clear list is separate because paste-air must not act as excavation. Keep original caps until safe to open them. Utility pipe/cable design remains separate.
5. 01-01: Steam Hall building alternative. Then use the relevant department model; each retains its assigned city reservation and purpose.

## Six families

| Representative | Massing and roof | Architectural circulation |
|---|---|---|
|01-01 Steam Hall|Deep piers, paired pale ribs, stepped dark roof, planted edges, hollow clerestory|Ground, upper floor, roof promenade and clerestory stairs; basement access|
|02-03 Chemistry|Tall glazed bays,3 native gables,3 capped stacks|Ground, perimeter maintenance gallery, basement stair|
|07-02 Greenhouse|3 glazed gables, pale ribs, explicit planted beds|Ground, perimeter gallery, basement stair|
|03-03 Power|Exterior flying ribs, heavy roof runners, capped gantry silhouette|Tall central hall, perimeter gallery, basement stair|
|05-05 Civic HQ|Water/V square inside65-square, cascading planted podiums, glazed spine/crown|A six-rise alternating stair core from basement through the tower floors; terrace doorway thresholds|
|01-05 Logistics|3 genuinely open loading portals, overhead lights, layered low roof|Open ground hall, perimeter maintenance gallery, basement stair|

Department assignment is preserved even where several departments use a common architectural family. Names do not establish working machines. Geometric bays, functional machines, networks and crafting bills remain separate evidence categories.

## Streets and junctions

R01/R02 retain the12-wide civil surface allocation:2 sidewalk +8 running surface +2 sidewalk. Optional fine pavers and narrow cyan inset variants change finish, not street width. Place tree beds and mast roots in parcel setbacks, keeping the road/gallery/hatch corridors clear. Source street and junction layers establish every block.

SX01 is a detached128×256 composition:8 layered facade modules, road/junction, planted margins, repeated lamp/curb details,2 enclosed skybridges and a focal HQ. Its bridges have floors atcivil8 (walk9), matching the facade floor; openings are cleared explicitly through both ends. This is a complete composition sample, not a city-wide bridge-placement authorization. Use its exact module coordinates to understand the look, then retain the baseline city road and reserved access geometry when adapting it.

SX02 is a standalone measured water/V square. SG01 combines a quiet48-square garden and a40-wide planted facade, within48×80 local hosts. A03 andA04 provide forecourt and promenade construction modules. The HQ plot includes its own front square rather than assuming a plaza outside its protected reservation.

## Materials and image fidelity

Korp14 horizontal charcoal courses, Agon0 pale panel framing, Agon13 dark square piers/road pavers and Agon15 sidewalk paving replace the previous materials. Fuller planted terraces and rounded crowns soften the repeated8-to9-block facade bays. AC56 molded cornices shape both the facade ledges and the shallow lamp caps, using installed meshes rather than rendered-only geometry. TConstruct light-blue clear glazing uses its exact16 whole-face icons and four-neighbor face-specific mapping. It is an ordinary cube without a tile entity. Eligible roof glass g remains the original Chisel6 material; G must not be substituted in AC roofs. Source CTM variants may depend on neighbors and world-coordinate phase; the future world/shader/biome remains unmeasured. Palette swatches retain source pixels; offline physical glazing, sky, reflections, shadows and glow are illustrative. The SX01 presentation uses two broad display-only area fill lights to reveal the street details; its base diffuse-light view is retained. These extra presentation lights are not blocks or a game illumination guarantee. No AI pixels are used as the architectural construction image.

Each manifest binds model/schematic hashes, names/metas, native TE fields and placed quantities. All partial hosts are distinguished from full blocks. Layers/coordinate lists/elevations are generated from that same model. Symbolic elevations use measured geometry and a material color key; they are labeled technical drawings rather than block-texture screenshots. Original AI boards and every earlier design/export remain available as reference history.

## Before a build-ready claim

Perform a real native import/re-import sample in the target pack, inspect AC/FMP orientation/materials and collisions, verify material eligibility/cutting/recipes and required progression, measure actual light/biome/shader behavior, and reconcile any chosen machines/networks/throughput. Static source/schema/geometry checks do not substitute for these game results. No live world was edited.
