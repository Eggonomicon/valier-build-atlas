# Valier roads and infrastructure - manual construction fieldbook

Revision civil-fieldguide-v2. Complete coordinate assembly guide; no construction is recorded complete. Local northwest origin, +X east, +Z south, +Y up. Civil Y0 is your future walkable surface S. All bounds are inclusive. World origin, S and rotation remain unassigned. Current installed client is GTNH 2.9.2; the geometry derives from preserved civil v1 and the refined R01/SD01 models.

## What you can build from this pack

The complete 876x876 civil network:20 street ribbons,100 junctions,9 maintenance stairs,81 capped plot branches,324 approach paths,1,440 thin cyan curb inserts and 351 explicitly sited smooth lamps with paved aprons. There are84 disjoint work orders and 1,512 matching host-layer grids. Each order supplies exact coordinates, separate clear-space runs, ordinary inventory, native cut pieces and temporary cap transitions. No schematic, printer, command or creative mode is required to read or follow the manual.

These are structural galleries and road fixtures. Actual pipes, cables, fluids, power, machine connections, buildings, gardens and terrain-dependent extra supports are not installed by this pack. Final crafting recipes/cutting access, actual FMP/AC placement and light/spawn behavior still require a small target-game sample. No live game window or world is accessed to produce this guide.

## P0 - unlock, survey and set out

1. Enter your intended PDIM and record its save/server and actual dimension. Do not infer its ID from a config default. Check the complete 876-square envelope, ten blocks below S and the future building height above it. If the terrain/void/floor does not allow the gallery, change the surveyed S or site before building. No unsupported ground/void-foundation claim is made.
2. Choose the point representing city(0,0), the walkable surface S and a compass orientation. Prefer +X east/+Z south for straightforward reading; rotations are supported by the viewer's calculator. City(0,0) is always the anchor point, even when rotated; it need not be the world's minimum X/Z.
3. Mark the four civil corners(0,0),(875,0),(0,875),(875,875). The original core ends at863. The outer east/south roads are864..875. Mark the HQ reservation405..469 on both axes and keep it empty.
4. Road strips begin at0,96,192,288,384,480,576,672,768,864. Mark each strip's two edges a and a+11. The centerline lies between a+5 and a+6; do not round it into a block column.
5. Stake the first stair at X98..115,Z118..143, then the NW sector X/Z0..395. Record actual surface, terrain support, water/lava/void and access observations before excavation.

For orientation0 only: worldX=anchorX+cityX, worldZ=anchorZ+cityZ, world Y=S+civil Y. For90degrees use(-cityZ,+cityX);180(-cityX,-cityZ);270(+cityZ,-cityX), then add the anchor. Do not use the older proposed world Y64 or58 as a measured datum.

## Start with WO01 / M11

Build the maintenance stair and short gallery connection before extending the street. Its exact envelope is X98..115,Z118..143, civil Y-10..0. It has2,018 occupied permanent hosts;2,017 are ordinary blocks and 1 is a two-part curb host. The first temporary end cap is60 additional stone bricks, not part of permanent stock. Ordinary stock is in orders/WO01/ordinary-stock.csv; native pieces are separate. Add60 reusable temporary bricks to its permanent stonebrick row when gathering. Do not reuse the older all-stone stock bill for this finished revision.

1. On the viewer choose WO01, Required clear, and each layer. Only those highlighted cells are the modeled clear volume. Dots in the permanent view are not excavation instructions.
2. Place the floor at-10. Build walls, stair supports and exact bottom/top half-slabs from the lower layers upward. Keep the orange clear cells free of permanent blocks.
3. Place temporary-cap-add.csv positions. Keep those caps until their listed removal order. Inspect actual access and ground support while the roof is still open.
4. Complete the roof at-4 and road/path bases at-2 where the layer grid actually shows them. Never fill an entire nominal layer rectangle: the stair opening overrides the generic road section.
5. Finish the-1 surface in the exact paving blocks. WO01 includes one cyan curb inset; the native detail inspector gives both piece bounds. You may leave that finish cell pending while learning cutting; do not count a temporary full cube as its finished multipart assembly.
6. Follow the 18 half-steps from the upper landing toward increasing Z. Each tread is three blocks wide, X110..112. Bottom slab metadata 0 occupies the lower half of its host; top slab metadata 8 occupies the upper half. Both consume the same metadata 0 stone-slab inventory item.
7. Inspect stair headroom and footing, cap continuity, lighting and surface edges in game. Fill the completion log only after your inspection. No test result is pre-filled.

WO02 extends V01 north. WO03 extends H00 west. WO04..19 complete the 16 northwest parcels. WO20 begins the central civic block; the order selector continues through the civic cross/perimeter and remaining sectors to WO84. P4 is inspection and handoff after all assigned cells are placed. The numbered work envelopes overlap, but their NEW placement lists never overlap.

## Exact road and gallery section

For a straight north-south road at X=a..a+11: sidewalk offsets0,1 and 10,11; running offsets2..9. At civil Y-1, ordinary sidewalks use Agon15 and running lanes Agon13. Both surfaces are flush at S. East-west streets use the identical profile with X/Z exchanged. Junction running cells are the union of both 8-wide lanes; the four 2x2 corner pads remain sidewalks. The junction has no mast roots or diagonal obstacles in its road cells.

The foundation is at-2; no general placements are assigned at-3. The gallery roof is at-4; the standard clear interior is-9..-5; its floor is-10. The gallery spans offsets2..9 outside, with offsets3..8 clear inside. Six clear blocks contain two proposed fluid lanes3/4, the two-block central walking lane5/6, and two proposed electrical lanes7/8. These are space reservations, not working pipes/cables or verified voltage/throughput.

At junctions and plot takeoffs, follow union geometry rather than building crossing walls. Each branch U-plot ends capped at tileZ+18, Xtile+50..57. Do not remove that permanent cap until the chosen building's matching interface is designed and built. The newer SI01 transition is an independent future building connection, not an instruction to open every civil cap now. The old Steam Works basement and refined basement use different elevations.

## Final palette and thin curb insets

R: Ztones:tile.agonBlock damage 13, dark road panels. W/P/d: same registry damage 15, gray sidewalks/approaches/aprons. F/G/C/B/K: minecraft:stonebrick damage 0, foundation/gallery/stair support. s/S: minecraft:stone_slab placed0/8, inventory0. Lamp plinths use Agon13. Lamp dark native pieces also use Agon13, cyan ExtraUtilities:greenscreen damage 9, white ExtraUtilities:greenscreen damage 0.

At each listed curb host, replace the ordinary sidewalk cube with the TWO listed pieces, not with two overlapping full cubes. The main piece is a 7/8-thick Agon15 face cover; a 1/8-square cyan edge fills its top inner rim. Both fit inside the same1x1x1 host. In a V street, west curb face is against the west side, cyan at east/top; east curb is mirrored. In an H street, north curb face is against north, cyan at south/top; south curb is mirrored. The inspector reports exact bounds as fractions of the host. Insets occur every 24 blocks along streets, at along12+24n, outside junctions. No block is added above walk level.

Use a real saw with sufficient strength and the actual NEI cutting recipes. A piece's world shape byte is NOT inventory item damage. Use the placement preview to match the highlighted face/edge bounds before placing; exact mouse modifiers were not game-tested here. A7/8 cover is not a 7/8 ordinary block or seven full items. Keep full-block inventory, cut-piece quantities and recipe-derived ingredient costs separate.

## Smooth lamp - SD01, one complete assembly

The exact source module is copied under details/SD01 with its coordinates, part list, native export, layers and two previous-source images. The full street placement register gives each actual base position; these are not detached or floating lamp ideas. Aprons are3x3 gray paving at-1 over3x3 stonebrick foundations at-2. They touch the road sidewalk while the mast remains in the parcel setback. Nine candidate lamps were omitted where they would conflict with maintenance stairs.

For a lamp base at(Xb,Zb), the source offset is(Xb-1,0,Zb-1). At relative(1,0,1) place the full Agon13 plinth. At relative(1,1,1) fit a 7/8 bottom dark cover and a 1/8 top cyan cover. At y2..5 place half-width centered vertical dark posts. At(1,6,1) fit another vertical post and two1/8 white edges at the north/top and south/top host edges. At(1,7,1) fit a 3/8 bottom dark cover. Put the four actual ArchitectureCraft shape 56 cornices at(1,7,0),(1,7,2),(0,7,1),(2,7,1), facing inward toward the center. Their side/turn and exact host positions are in the native inspector and CSV. Do not substitute full cubes for these head pieces.

Cut pieces per lamp:five half-width centered posts, one 7/8 dark face, one 3/8 dark face, one 1/8 cyan face and two1/8 white edges. Four shape 56 dark cornices are counted separately. The source sawbench batch observation is four shape 56 items per base block; treat this as static source evidence, not a tested crafting bill. Saw access, actual material eligibility and placement preview should be checked on one sample before making hundreds.

## Temporary caps and working light

Every order includes cap-add, cap-remove and cap-end-state files in city coordinates. Add the new frontier closures before removing old ones once adjoining floor/walls/roof are ready. A removed cap can be reused. Full-network maximum end-state inventory is1,250 stone bricks; handover overlap is additional and listed per order. The final temporary frontier count is0; the 81 permanent plot branch caps stay in place. Do not remove all caps merely because a work order ends.

The lamps and cyan inserts have exact modeled positions, but this pack does not establish spawn-safe light levels. White Caelestis emits15 and cyan10 by preserved installed-source evidence; fullbright appearance and shader bloom do not prove local illumination. Carry working lights, illuminate newly enclosed passages while building, check actual light/spawn overlays on every floor, stair, junction and boundary, and add lighting before leaving dark sections active. Working-light stock and positions depend on that inspection and are not hidden in the permanent bill. The central walking lane and maintenance access must remain usable. Covers/guards for exposed work and terrain-specific scaffolding are also field decisions, not included in permanent counts.

## Counts, delivery and tests

This revision contains907,480 occupied hosts: 902,179 ordinary placements, 3,897 multipart hosts and 1,404 ArchitectureCraft hosts. The multipart hosts contain6,390 cut pieces. Counts of hosts and parts are different; do not add both as full blocks. New lamp/apron hosts are10,530; all 896,950 original civil occupied positions remain occupied. Native curb insets replace existing sidewalk hosts; they are not extra surface blocks.

The older196base/19P1 schematic packs and all previous models stay unchanged and use their own material bills. They do not silently become exports of this finished revision. Use this manual's coordinate files when following this palette. Native import/re-import certification is still open; the manual can be followed without importing anything.

Open index.html for exact layer zoom, cell inspection, world-coordinate calculator, work-order stock, stage selection and local progress notes. The viewer works directly from disk and uses no network services. Download Valier_Civil_Fieldbook_V2.pdf for the illustrated manual, all 84 work cards and enlarged first-stair layers; all 1,512 text grids and exact CSV runs are in the ZIP. Read verification.json for the independent reconstruction, counts, native geometry, road-width, cap and source-preservation checks. These static checks do not certify recipes, collisions, actual lighting, functional services or surveyed terrain.
