# White Canopy / full Sample 2 construction guide

This is a complete static architectural layout, not a commissioned factory or a target-game import certificate. Read the terrain limits before staking it. Preserve Sample A and the first four-building B field study as separate alternatives.

## Coordinates and measured evidence

Core X/Z0..863; closing road band to875. Northwest origin; +X east,+Z south; north is−Z. Standard 96-square plots reserve 12 blocks north/west for roads; source halls start tile+22 and end tile+85. HQ05-05 is65square at405..469 inclusive, with origin405,23,405. No source geometry is rotated or cut.

All vertical coordinates are city-local y=previewY−64. The seed424242 RWG2_CONTINENTS creative preview has NW worldX1152/Z−256. That translation is ONLY preview evidence; it is not the future PDIM anchor. With a future north-aligned origin A=(Ax,Az) and datum S, city(x,y,z) becomes world(Ax+x,S+y,Az+z). Recompute terrain fit and support if your PDIM differs. Rotation requires a separate native-orientation validation.

The864-square survey contains746,496 loaded columns, Y47..172, mixed neighboring biomes,53,836 Jungle Canyon biome328 columns and61,472 white-clay columns above63. It excludes foliage and does not resolve caves/overhang interiors. The closing12-block southern/eastern band is unmeasured. No foundation or excavation volume is certified from column data.

## Surviving the build

Start with JW07-A lamp, then JW06-A facade. Test actual recipes, sawbench/cutting, materials, collision, daylight and night lighting. The quarter-block-diameter pole is AC17, not a full cube. Molded caps use AC56. Pale facade slopes use94/95 and0. FMP records use size in eighths and explicit face/edge/axis indices; several pieces can occupy one host.

Use Schematica ghost overlays with Printer OFF. Supply and place all blocks manually. Native hosts require the matching AC material/orientation or FMP cuts listed in the inspector and stock CSV; a simple colored host grid does not replace shape orientation. Symbolic sample elevations show silhouettes; installed-texture renders show the same saved scene geometry with illustrative lighting. Demonstration terrain is authored and excluded from JWxx-A ghosts. JW05 is an intentionally open display cutaway; use CV worktiles for actual closed galleries.

After surveying the actual PDIM, stake the96-block grid and protected HQ. Begin CV-01-01 and01-01 Steam Works, extend the north/west road/gallery and one adjoining worktile at a time. Keep temporary end caps and a safe construction path until joining the next worktile. Permanent exported tiles connect to their neighbors and are not individually sealed at tile borders.

## Roads, tunnels, bridges and terrace walks

The180 street edges join100 graded junctions. Each edge has84 longitudinal cells between12-square junctions. Select the edge on the site for its exact cell-by-cell walk_y2 profile: walking elevation=walk_y2/2 city-local; previewY=64+walk_y2/2. The maximum successive rise is0.5 block. A whole-height floor uses a cube one block below walking Y. A half-height floor uses an FMP bottom cover size4/8 in floor(Y); there is a foundation block below it.

Street width12: P sidewalks on offsets0..2 and9..11, R lane3..8. Fractional cyan insets replace selected sidewalk hosts; do not place full glow cubes there. Portal columns stay at0/11; the required road clear envelope is offsets1..10 and six full blocks from ceil(walkY). Headers sit above it. Bridge edges have clear-blue guards and molded cornices; bearing piers follow sampled ground columns. Pillars, retaining and natural rock need inspection for caves, unsupported clay faces and actual load/appearance. A few isolated support cells are deliberately omitted where they would block galleries.

The100 junctions retain a central six-wide cross; furniture is in the corner. Each source hall has a gross four-wide perimeter loop. Guards reduce the clear walk locally to three; the north approach throat has a minimum two-wide overlap. Do not pave over the approach stairs. There are85 bridge and149 tunnel classified sections (44/112 at least12 long),170 rock-cut and150 terrace sections. These are sections of graded streets, not234 separate major structures. Interior tunnel/retaining surfaces also retain natural rock where no authored block is present; do not blindly fill the complete mesa with lining.

Clear volumes are explicit: civil/road-clear-boxes.json.gz has inclusive[x0,y0,z0,x1,y1,z1,road]; gallery-clear-runs.json.gz has[y,z,x0,x1]. public-approach-clear-cells.json contains[x,y,z]. Preserve natural terrain outside the necessary clear volumes and shell interior. Review sections and overhangs in game before excavating.

## Service gallery and building connection

Main galleries walk nine blocks below the street, width5 at road offsets4..8, clear height4. Native cover grades match the road. The corridor air union opens all junctions. Boundary blocks, floor and roofs are explicit. basement-open-port-cells.json lists deliberate source-room apertures; do not cap them.

For every building tile(tx,tz), the service takeoff is Xtx+68..71 from north-gallery Ztz+6..13. Its first three rows preserve the main's cross-grade. The remaining ramp reaches the local lower datum. Sixty-eight basement halls have a five-rise south-up flight at Ztz+14..18, a turn landing Xtx+68..79/Ztz+19..20, then four north-up rises at Xtx+76..79/Ztz+18..15. An upper landing Xtx+76..85/Ztz+13..14 turns into a side corridor Xtx+82..85 and the source's existing north port. Vanilla stonebrick stair metadata2 ascends south,3 north. These are walking steps, not decorative facade slopes.

The thirteen sources without basements instead get small capped service vaults. No basement is invented inside them. Keep all galleries clear for maintenance; pipes/cables/machines are separate manual work. Electricity remains diesel/lightfuel primary through EV; two36-HP solid-fuel Railcraft boilers and a compact steam workshop are the Steam Works program with limited backup power. The existing EV functional guide belongs to Sample A; its exact routes require a B adaptation before installation. No functional B network is claimed complete.

## Native schematic loading and anchors

All238 files are architecture only:81 shells,100 disjoint civil worktiles,7 detached filtered samples and50 terrain-adaptable modules. Name-based BlockMapping and SchematicaMapping, AC shape NBT and FMP savedMultipart records are independently decoded. No machines, tanks, coils, pipes, cables, conduits or entities are included. Static decode does not prove the target-game importer retains every mod tile entity.

Copy the selected .schematic into your Schematica directory for a manual ghost overlay. For WorldEdit1.7.10, the observed instance directory is .minecraft/config/worldedit/schematics. Use //schematic load mcedit <filename-without-extension>. This loads a clipboard; it does not place blocks. For example: //schematic load mcedit CV-01-01-Architecture_ONLY. No paste is necessary for survival ghost building.

Export register data/exports.json gives ghost_anchor_city for each clipboard: its northwest minimum at its lowest occupied source Y. World clipboard minimum=(Ax+anchorX,S+anchorY,Az+anchorZ). All WE origins/offsets are zero; tile entities are clipboard-relative. Buildings retain source-local Y; civil tile Y already equals city-local Y. Do not add building floor elevation twice. Demonstrations are detached alternatives with no assigned city anchor.

Only in a separate disposable test world, if you choose to test placement: load, inspect dimensions/materials, set //pos1 X,Y,Z to that minimum, check //toggleplace feedback, then explicitly choose placement. //paste -a -s preserves destination air; it does not excavate terrain or guarantee survival behavior. Do not use paste or Printer to grant yourself materials in the survival PDIM. Game import/re-export/re-import remains open; none was performed for these files.

## Counts and provenance

Counts below describe occupied authored host coordinates. AC hosts and FMP hosts are blocks/TE positions; microparts and sawbench shape items are counted separately in parts-and-stock.csv. Native stock is not a full-block crafting bill. Natural terrain, unoccupied/clear air, player inventory and functional equipment are excluded. Seven alternative demos are not added to the city purchase bill. Source texture pixels, declared display tints and offline illumination remain separate evidence categories.

City occupied hosts: 1,718,914 shells + 1,076,606 civil = 2,795,520. Gallery clear air: 397,704. Original source removals: 0. No functional equipment.

## Terrain-adaptable modular kit

Use the50 detached MK components independently of the full city grid. Survey your terrain and select a safe route before choosing an anchor. Roads, access galleries, walkways, bridges, cliff portals,64/65-square basement-ready pads, facade, planters, tree courts, benches and a basin share the same exact native palette. Every module has a separate guide, full-coordinate CSV.gz, all-level blueprint ZIP, matching stock and WorldEdit schematic. The site has zoom/pan inspection for every occupied level and an actual installed-texture render. Gallery renders omit roof cubes only for a labeled cutaway; the native models/ghosts retain them.

Road ports are12wide. Access galleries have5clear within7outer. Walkways/footbridges have6clear within8outer. Match the opposite faces, clear-port centers and WALKING Y, then place the next component one block beyond the previous envelope. For example, MK01 at(0,0,0) joins MK01 at(0,0,32); MK02 can join at the matching12-wide intersection arm. MK08 can sit at datum−9 beneath a road. Road gradeMK19 rises0north→4south; pre-orientedMK20 rises0west→4east. Three-block gallery changes areMK18/MK23, four-block changesMK21/MK24. Supplied T/corner R1/R2/R3 variants preserve native side/turn and cut orientations; do not assume legacy WorldEdit transforms tile entities on rotate.

UseMK13 temporary caps on isolated access galleries. Building-pad y0 is the future finished hall datum, foundation−8/bearing−9; install the matching source hall floor before treating the basement as walkable. Merge overlapping ordinary pad/source hosts once rather than adding both bills. Bridge bearings are short starter legs that must be extended/trimmed to real solid ground. FountainMK33 shows60 water sources in the full model/render; they are excluded from its architectural ghost and must be filled manually after a containment check. The50 alternative module bills are not added to the full-city bill.

Recommended small start: JW07 lamp / MK25 facade material mock-up → MK01/MK02 flat road → MK08/MK09 gallery → a chosen junction → actual building pad and hall → bridge/portal only after surveying the crossing. Parks and furniture should preserve the stated clear walking lanes. All functional pipes, cables and machines remain separate manual work.

## Building and civil worktile register

| ID | Department | Sector | City origin x,y,z | Preview walkY | Ghost minimum city x,y,z |
|---|---|---|---|---|---|
|01-01|Steam works|NW|[22, 22, 22]|86|[22, 15, 22]|
|01-02|Coke ovens|NW|[118, 20, 22]|84|[118, 13, 22]|
|01-03|Water works|NW|[214, 18, 22]|82|[214, 11, 22]|
|01-04|LV factory|NW|[310, 16, 22]|80|[310, 9, 22]|
|01-05|Logistics hub|C|[406, 7, 22]|71|[406, 0, 22]|
|01-06|Polymer plant|NE|[502, 7, 22]|71|[502, 0, 22]|
|01-07|Oil processing|NE|[598, 14, 22]|78|[598, 7, 22]|
|01-08|Materials laboratory|NE|[694, 16, 22]|80|[694, 9, 22]|
|01-09|Electronics lab|NE|[790, 20, 22]|84|[790, 13, 22]|
|02-01|LV ore processing|NW|[22, 19, 118]|83|[22, 12, 118]|
|02-02|EBF hall|NW|[118, 19, 118]|83|[118, 12, 118]|
|02-03|LV chemistry|NW|[214, 16, 118]|80|[214, 9, 118]|
|02-04|LV circuits|NW|[310, 14, 118]|78|[310, 7, 118]|
|02-05|Logistics hub|C|[406, 15, 118]|79|[406, 8, 118]|
|02-06|EV chemistry|NE|[502, 18, 118]|82|[502, 11, 118]|
|02-07|EV processing|NE|[598, 14, 118]|78|[598, 7, 118]|
|02-08|IV chemistry|NE|[694, 14, 118]|78|[694, 7, 118]|
|02-09|Platinum line|NE|[790, 26, 118]|90|[790, 19, 118]|
|03-01|MV fabrication|NW|[22, 18, 214]|82|[22, 11, 214]|
|03-02|MV fuel|NW|[118, 17, 214]|81|[118, 10, 214]|
|03-03|MV power|NW|[214, 13, 214]|77|[214, 6, 214]|
|03-04|HV fabrication|NW|[310, 9, 214]|73|[310, 2, 214]|
|03-05|Research gallery|C|[406, 14, 214]|78|[406, 7, 214]|
|03-06|IV assembly|NE|[502, 19, 214]|83|[502, 12, 214]|
|03-07|LuV chemistry|NE|[598, 17, 214]|81|[598, 10, 214]|
|03-08|ZPM chemistry|NE|[694, 13, 214]|77|[694, 6, 214]|
|03-09|UV reserve|NE|[790, 16, 214]|80|[790, 15, 214]|
|04-01|HV metallurgy|NW|[22, 8, 310]|72|[22, 1, 310]|
|04-02|HV chemistry|NW|[118, 5, 310]|69|[118, -2, 310]|
|04-03|Cleanroom|NW|[214, 10, 310]|74|[214, 3, 310]|
|04-04|HV reserves|NW|[310, 18, 310]|82|[310, 17, 310]|
|04-05|Research gallery|C|[406, 15, 310]|79|[406, 8, 310]|
|04-06|Chemistry intake|NE|[502, 8, 310]|72|[502, 1, 310]|
|04-07|Chemical reactors|NE|[598, 5, 310]|69|[598, -2, 310]|
|04-08|Distillation|NE|[694, 3, 310]|67|[694, -4, 310]|
|04-09|Fluid storage|NE|[790, 8, 310]|72|[790, 1, 310]|
|05-01|Logistics hub|C|[22, 20, 406]|84|[22, 13, 406]|
|05-02|Logistics hub|C|[118, 17, 406]|81|[118, 10, 406]|
|05-03|Research gallery|C|[214, 22, 406]|86|[214, 15, 406]|
|05-04|Research gallery|C|[310, 26, 406]|90|[310, 19, 406]|
|05-05|HQ + ceremonial plaza|C|[405, 23, 405]|87|[405, 16, 405]|
|05-06|Transit station|C|[502, 16, 406]|80|[502, 9, 406]|
|05-07|Public garden|C|[598, 8, 406]|72|[598, 7, 406]|
|05-08|Public garden|C|[694, 8, 406]|72|[694, 7, 406]|
|05-09|Logistics hub|C|[790, 16, 406]|80|[790, 9, 406]|
|06-01|Tree farm|SW|[22, 16, 502]|80|[22, 9, 502]|
|06-02|Charcoal production|SW|[118, 22, 502]|86|[118, 15, 502]|
|06-03|CropsNH|SW|[214, 20, 502]|84|[214, 13, 502]|
|06-04|Bee apiary|SW|[310, 15, 502]|79|[310, 8, 502]|
|06-05|Transit station|C|[406, 13, 502]|77|[406, 6, 502]|
|06-06|HV generation|SE|[502, 8, 502]|72|[502, 1, 502]|
|06-07|EV generation|SE|[598, 6, 502]|70|[598, -1, 502]|
|06-08|Battery buffers|SE|[694, 13, 502]|77|[694, 6, 502]|
|06-09|Control center|SE|[790, 17, 502]|81|[790, 10, 502]|
|07-01|Crop processing|SW|[22, 22, 598]|86|[22, 15, 598]|
|07-02|Greenhouses|SW|[118, 16, 598]|80|[118, 9, 598]|
|07-03|Bio feedstocks|SW|[214, 8, 598]|72|[214, 1, 598]|
|07-04|Food storage|SW|[310, 12, 598]|76|[310, 5, 598]|
|07-05|Public garden|C|[406, 16, 598]|80|[406, 15, 598]|
|07-06|IV generation|SE|[502, 14, 598]|78|[502, 7, 598]|
|07-07|LuV energy|SE|[598, 18, 598]|82|[598, 11, 598]|
|07-08|Fusion reserve|SE|[694, 25, 598]|89|[694, 24, 598]|
|07-09|ZPM generation|SE|[790, 29, 598]|93|[790, 22, 598]|
|08-01|Advanced bees|SW|[22, 32, 694]|96|[22, 25, 694]|
|08-02|Renewables|SW|[118, 24, 694]|88|[118, 17, 694]|
|08-03|Botanical lab|SW|[214, 12, 694]|76|[214, 5, 694]|
|08-04|Research gardens|SW|[310, 10, 694]|74|[310, 9, 694]|
|08-05|Public garden|C|[406, 12, 694]|76|[406, 11, 694]|
|08-06|UV generation|SE|[502, 16, 694]|80|[502, 9, 694]|
|08-07|Space materials|SE|[598, 28, 694]|92|[598, 21, 694]|
|08-08|UHV reserve|SE|[694, 37, 694]|101|[694, 36, 694]|
|08-09|Future power|SE|[790, 41, 694]|105|[790, 40, 694]|
|09-01|Water recycling|SW|[22, 30, 790]|94|[22, 23, 790]|
|09-02|Bio reserves|SW|[118, 20, 790]|84|[118, 19, 790]|
|09-03|Public park|SW|[214, 8, 790]|72|[214, 7, 790]|
|09-04|Future bio|SW|[310, 2, 790]|66|[310, 1, 790]|
|09-05|Logistics hub|C|[406, 8, 790]|72|[406, 1, 790]|
|09-06|Power switchyard|SE|[502, 20, 790]|84|[502, 13, 790]|
|09-07|Steam turbine hall|SE|[598, 28, 790]|92|[598, 21, 790]|
|09-08|LV generation|SE|[694, 30, 790]|94|[694, 23, 790]|
|09-09|MV generation|SE|[790, 36, 790]|100|[790, 29, 790]|

All original source guides/grids are preserved under source/. Their city placements belong to Sample A: use only shell-local coordinates plus this B register. In the full B guide, source shells remain unchanged; material joins keep shared physical finish/lining hosts only once in the civil bill.

| Civil tile | City X/Z origin | Lowest / highest local Y | Occupied hosts |
|---|---|---|---|
|CV-01-01|0, 0|1 / 26|12,692|
|CV-02-01|0, 96|1 / 20|12,463|
|CV-03-01|0, 192|-7 / 19|13,321|
|CV-04-01|0, 288|-11 / 20|12,022|
|CV-05-01|0, 384|-7 / 23|12,336|
|CV-06-01|0, 480|-7 / 22|12,336|
|CV-07-01|0, 576|5 / 34|11,868|
|CV-08-01|0, 672|13 / 35|12,278|
|CV-09-01|0, 768|9 / 39|12,032|
|CV-10-01|0, 864|17 / 47|4,568|
|CV-01-02|96, 0|-3 / 27|12,077|
|CV-02-02|96, 96|1 / 21|12,042|
|CV-03-02|96, 192|-11 / 19|12,833|
|CV-04-02|96, 288|-13 / 18|12,345|
|CV-05-02|96, 384|-1 / 22|11,932|
|CV-06-02|96, 480|3 / 23|12,484|
|CV-07-02|96, 576|-7 / 30|12,204|
|CV-08-02|96, 672|1 / 31|11,998|
|CV-09-02|96, 768|-3 / 34|11,206|
|CV-10-02|96, 864|5 / 35|4,636|
|CV-01-03|192, 0|-3 / 19|12,604|
|CV-02-03|192, 96|-3 / 19|12,539|
|CV-03-03|192, 192|-13 / 17|12,294|
|CV-04-03|192, 288|-13 / 16|12,231|
|CV-05-03|192, 384|-1 / 28|11,933|
|CV-06-03|192, 480|-7 / 23|12,750|
|CV-07-03|192, 576|-11 / 11|13,028|
|CV-08-03|192, 672|-11 / 19|13,111|
|CV-09-03|192, 768|-15 / 22|11,697|
|CV-10-03|192, 864|-7 / 23|4,636|
|CV-01-04|288, 0|-7 / 23|12,105|
|CV-02-04|288, 96|-7 / 15|13,105|
|CV-03-04|288, 192|-9 / 16|12,127|
|CV-04-04|288, 288|-1 / 28|11,301|
|CV-05-04|288, 384|1 / 29|12,269|
|CV-06-04|288, 480|-11 / 19|12,888|
|CV-07-04|288, 576|-11 / 18|12,428|
|CV-08-04|288, 672|-15 / 14|12,231|
|CV-09-04|288, 768|-15 / 3|11,907|
|CV-10-04|288, 864|-7 / 14|4,796|
|CV-01-05|384, 0|-13 / 11|12,172|
|CV-02-05|384, 96|-9 / 16|12,256|
|CV-03-05|384, 192|-9 / 20|12,445|
|CV-04-05|384, 288|-7 / 24|12,171|
|CV-05-05|384, 384|-5 / 25|12,222|
|CV-06-05|384, 480|-5 / 18|12,092|
|CV-07-05|384, 576|-3 / 19|11,897|
|CV-08-05|384, 672|-15 / 15|12,158|
|CV-09-05|384, 768|-15 / 14|12,275|
|CV-10-05|384, 864|-3 / 26|4,636|
|CV-01-06|480, 0|-13 / 16|12,312|
|CV-02-06|480, 96|-1 / 20|11,932|
|CV-03-06|480, 192|-7 / 21|12,408|
|CV-04-06|480, 288|-11 / 15|12,136|
|CV-05-06|480, 384|-7 / 23|12,316|
|CV-06-06|480, 480|-15 / 15|12,371|
|CV-07-06|480, 576|-7 / 15|12,720|
|CV-08-06|480, 672|-7 / 22|12,229|
|CV-09-06|480, 768|-3 / 26|11,933|
|CV-10-06|480, 864|9 / 30|4,636|
|CV-01-07|576, 0|-7 / 20|12,848|
|CV-02-07|576, 96|-9 / 21|12,066|
|CV-03-07|576, 192|-11 / 19|12,733|
|CV-04-07|576, 288|-13 / 7|12,326|
|CV-05-07|576, 384|-15 / 11|12,396|
|CV-06-07|576, 480|-15 / 14|12,046|
|CV-07-07|576, 576|-3 / 22|11,986|
|CV-08-07|576, 672|5 / 34|11,933|
|CV-09-07|576, 768|9 / 30|12,085|
|CV-10-07|576, 864|1 / 31|4,636|
|CV-01-08|672, 0|-9 / 19|12,968|
|CV-02-08|672, 96|-9 / 15|12,581|
|CV-03-08|672, 192|-13 / 17|12,722|
|CV-04-08|672, 288|-15 / 5|12,900|
|CV-05-08|672, 384|-11 / 9|11,936|
|CV-06-08|672, 480|-7 / 22|12,246|
|CV-07-08|672, 576|5 / 34|11,254|
|CV-08-08|672, 672|13 / 40|11,238|
|CV-09-08|672, 768|1 / 31|13,240|
|CV-10-08|672, 864|1 / 19|4,588|
|CV-01-09|768, 0|-3 / 26|12,074|
|CV-02-09|768, 96|-7 / 32|11,933|
|CV-03-09|768, 192|-15 / 22|11,618|
|CV-04-09|768, 288|-15 / 14|12,000|
|CV-05-09|768, 384|-7 / 22|12,519|
|CV-06-09|768, 480|-1 / 21|11,968|
|CV-07-09|768, 576|11 / 40|11,932|
|CV-08-09|768, 672|13 / 42|11,229|
|CV-09-09|768, 768|1 / 42|12,782|
|CV-10-09|768, 864|1 / 23|4,588|
|CV-01-10|864, 0|9 / 32|4,568|
|CV-02-10|864, 96|5 / 33|4,636|
|CV-03-10|864, 192|-3 / 23|4,636|
|CV-04-10|864, 288|-3 / 22|4,636|
|CV-05-10|864, 384|1 / 23|4,656|
|CV-06-10|864, 480|1 / 23|4,630|
|CV-07-10|864, 576|13 / 42|4,636|
|CV-08-10|864, 672|25 / 43|4,636|
|CV-09-10|864, 768|13 / 43|4,636|
|CV-10-10|864, 864|13 / 31|595|
