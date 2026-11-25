# Installed microblock detail guide

Read-only JAR/bytecode/config inspection; no world/save reads, mod initialization, game commands or existing model/export changes.

Use the installed FMP quarter-square centered posts for thinner lamp columns/arms, eighth face covers for facade layers, and eighth-square edge strips for thin cyan accents. These are actual sub-block shapes. No old full-cube export or source model was altered.

Current smooth facade selection: B=Korp2, K=Bitt0, L=Lave12. Nucrete15 remains the pavement material. The earlier rough candidates are retained as historical observations, not the selected smooth facade. White Caelestis0 is additionally verified as a15-light cut-material option.

|Material|Exact micro-material name|Static emitted light|
|---|---|---:|
|Basalt Brick|`ProjRed|Exploration:projectred.exploration.stone_4`|0|
|Dark Concrete Tiles|`chisel:nucrete_7`|0|
|Light Concrete Tiles|`chisel:nucrete_15`|0|
|Cyan Lapis Caelestis|`tile.extrautils:greenscreen_9`|10|
|Glowstone|`minecraft:glowstone`|15|
|Gray Stained Glass|`minecraft:stained_glass_7`|0|
|White Stained Glass|`minecraft:stained_glass`|0|
|Clear Glass|`minecraft:glass`|0|
|Korp2 smooth charcoal|`Ztones:tile.korpBlock_2`|0|
|Bitt0 dark frame|`Ztones:tile.bittBlock`|0|
|Lave12 pale frame|`Ztones:tile.laveBlock_12`|0|
|White Lapis Caelestis|`tile.extrautils:greenscreen`|15|

Material names above are saved part-material strings; they are not block registry names or numeric world IDs. The Caelestis exception is deliberate.

## Geometry to author

- Quarter-square centered vertical post: `mcr_post`, shape32. Bounds X/Z3/8..5/8, Y0..1.
- Quarter-square centered horizontal arm: shape34 along X, or shape33 along Z. Different-axis post pairs are allowed by installed occlusion logic in one host cell; same-axis duplicates are rejected.
- Eighth face cover: `mcr_face`, shape16+side; side0bottom,1top,2north,3south,4west,5east.
- Eighth-square edge: `mcr_edge`, shape16+edge index. X-running strips use shapes24..27; Z-running20..23; Y-running16..19. Full low/high axis tables and exact bounds are in the JSON detail spec.
- All coordinates are cell-local; +X east,+Y up,+Z south. An edge strip is attached to a cell edge, not freely translated inside a cell. Centered posts have minimum width1/4; no1/8 centered post is established.
- A multipart host is one occupied world cell containing one or more parts. Report host-cell counts, individual-part counts and cutting/crafting bills separately. Leave that cell available rather than placing a second full block/ArchitectureCraft tile at the same coordinate.

## Native NBT format

Host block is `ForgeMultipart:block` (default metadata0). Tile root uses `id:"savedMultipart"`, integer x/y/z and compound list parts. Each part has string id, byte shape and string material. A documented two-post shape example is in `generated/shaped-detail-v1/evidence/native-part-format-example.snbt.txt`. This text is a schema example, not a clipboard or tested import.

World part `shape` is `(size_eighths<<4)|local_shape_index`. Inventory microblock items instead have NBT `mat` and a separate class/size damage encoding. Never copy numeric runtime material IDs or confuse inventory damage with world part shape.

The installed format is name-based and can be specified without an existing save. A save/test world is needed to validate runtime material loading, generated multipart containers, editor import/re-import and appearance; it is not needed to guess universal material IDs. No import-ready claim follows from static schema recovery.

## Current smooth materials

Current shaped-detail direction selects B=Ztones Korp2, K=Bitt0, L=Lave12, with nucrete15 retained for pavement. Installed microblocks.cfg explicitly registers all metadata0..15 of tile.korpBlock, tile.bittBlock and tile.laveBlock. The standard ConfigContent path creates BlockMicroMaterial from those registered blocks/metas; materialKey appends _meta only when meta>0. Therefore exact keys are Ztones:tile.korpBlock_2, Ztones:tile.bittBlock and Ztones:tile.laveBlock_12. Their inspected classes inherit ordinary BlockZTNS/Block rendering and metadata icon selection; no special-shaped block tile/NBT is needed for the cut material. Actual registry/saw execution remains untested. White Caelestis0 is tile.extrautils:greenscreen without _0, uses the same custom fullbright material integration and explicitly emits15. Four actual raw albedos/hashes are provided in smooth-material-assets.json.

Evidence: `verification/shaped-detail-v1/com.riciJak.Ztones.block.BlockZTNS.javap.txt` lines 1–21; `verification/shaped-detail-v1/com.riciJak.Ztones.block.MBlocks.BlockKorp.javap.txt` lines 8–25; `verification/shaped-detail-v1/codechicken.microblock.ConfigContent$$anonfun$load$1.javap.txt` lines 5–62; `verification/shaped-detail-v1/codechicken.microblock.BlockMicroMaterial$.javap.txt` lines 24–48; `verification/shaped-detail-v1/com.rwtema.extrautils.ExtraUtils.javap.txt` lines 3891–3897; `verification/shaped-detail-v1/com.rwtema.extrautils.multipart.RegisterMicroMaterials.javap.txt` lines 18–56; `verification/shaped-detail-v1/com.rwtema.extrautils.multipart.FullBrightMicroMaterial.javap.txt` lines 24–31; `verification/shaped-detail-v1/config-observations.json` lines 1–82.

## Native names and portability

Native Microblock.save writes shape as byte and material as string materialName(runtimeID). load resolves the string with materialID. ItemMicroPart stores material in item NBT mat, while item damage encodes item class/size. No saved world numeric micro-material ID is needed to author the installed native format. Unknown names or changed integration keys can still fail; string portability is not game/import certification. Host registry is ForgeMultipart:block. MultipartSaveLoad registers generated tile names as savedMultipart. TileMultipart writes superclass id/x/y/z and a parts list; each part compound has id=getType followed by part.save.

Evidence: `verification/shaped-detail-v1/codechicken.microblock.Microblock.javap.txt` lines 275–304; `verification/shaped-detail-v1/codechicken.microblock.ItemMicroPart$.javap.txt` lines 42–65; `verification/shaped-detail-v1/codechicken.multipart.handler.MultipartSaveLoad$.javap.txt` lines 56–63; `verification/shaped-detail-v1/codechicken.multipart.TileMultipart.javap.txt` lines 1106–1127; `verification/shaped-detail-v1/codechicken.multipart.TileMultipart$$anonfun$writeToNBT$1.javap.txt` lines 7–30; `verification/shaped-detail-v1/codechicken.multipart.handler.MultipartProxy_serverImpl.javap.txt` lines 64–81.

## Thin shapes

Face and edge bounds use s/8; faces occupy1×s/8×1 and edges s/8×1×s/8 before rotation/cycling. Face size is1..7 eighths and has6 sides; edge has12 positions, maps to host slot15+edgeIndex. Centered posts use transverse0.5±s/16 and full-axis length1, with supported s=2,4,6. Quarter-square posts are shape32Y/33Z/34X. The attached JSON provides every eighth face and edge unit-cell bounding box with shape bytes and slot indices.

Evidence: `verification/shaped-detail-v1/codechicken.microblock.Microblock.javap.txt` lines 92–118; `verification/shaped-detail-v1/codechicken.microblock.FaceMicroClass$$anonfun$1$$anonfun$apply$mcVI$sp$1.javap.txt` lines 16–53; `verification/shaped-detail-v1/codechicken.microblock.EdgeMicroClass$$anonfun$1$$anonfun$apply$mcVI$sp$1.javap.txt` lines 16–53; `verification/shaped-detail-v1/codechicken.microblock.PostMicroClass$$anonfun$2.javap.txt` lines 12–43; `verification/shaped-detail-v1/codechicken.microblock.PostMicroClass$$anonfun$2$$anonfun$apply$mcVI$sp$2.javap.txt` lines 16–61; `verification/shaped-detail-v1/codechicken.multipart.PartMap.javap.txt` lines 288–345.

## Shared center joints

Different-axis centered posts explicitly pass post/post occlusionTest even though their base cuboids cross; same-axis duplicate post fails. A quarter Y post and quarter X/Z arm may therefore share a host cell in the installed placement logic. PostMicroblockClient has separate rendered-bound recalculation, so visual clipping and different-material junctions remain runtime checks. This exception does not permit arbitrary overlapping ordinary blocks or ArchitectureCraft tiles.

Evidence: `verification/shaped-detail-v1/codechicken.microblock.PostMicroblock$class.javap.txt` lines 49–99; `verification/shaped-detail-v1/codechicken.microblock.PostMicroblockClient$class.javap.txt` lines 45–63.

## Material registration

Basalt stone variants call BlockMicroMaterial.createAndRegister directly. Chisel full cube variations send ForgeMicroblock microMaterial ItemStack IMC via CarvableHelper/FMPIMC and the installed handler creates/registers that block metadata. Vanilla DefaultContent registers glowstone, glass and all16 stained glass states. No config edit is required by these observed integrations. Eligibility is installed registration-code evidence; no live material registry, saw cutting or NEI recipe was executed.

Evidence: `verification/shaped-detail-v1/mrtjp.projectred.exploration.ExplorationProxy_server$$anonfun$init$4.javap.txt` lines 5–18; `verification/shaped-detail-v1/codechicken.microblock.BlockMicroMaterial$.javap.txt` lines 24–48; `verification/shaped-detail-v1/com.cricketcraft.chisel.api.FMPIMC.javap.txt` lines 31–44; `verification/shaped-detail-v1/codechicken.microblock.ConfigContent$$anonfun$handleIMC$1.javap.txt` lines 6–39; `verification/concept-match-v1/com.cricketcraft.chisel.api.carving.CarvableHelper.javap.txt` lines 454–493; `verification/shaped-detail-v1/codechicken.microblock.DefaultContent$.javap.txt` lines 185–192; `verification/shaped-detail-v1/codechicken.microblock.DefaultContent$.javap.txt` lines 248–258; `verification/shaped-detail-v1/codechicken.microblock.DefaultContent$.javap.txt` lines 97–104.

## Cyan and warm emission

Generic BlockMicroMaterial reads block.getLightValue() without world/metadata, which alone would lose Caelestis metadata emission. Installed ExtraUtilities explicitly supplies FullBrightMicroMaterial for all16 greenscreen variants, keyed from unlocalized tile.extrautils:greenscreen plus _meta. Its getLightValue calls BlockGreenScreen.getLightLevel(meta), preserving cyan10 and white15; getColour preserves metadata tint and the fullbright render pipeline is separate. Glowstone base emission15 survives ordinary micro-material cuts. Microblock part light delegates to the material; TileMultipart emits the maximum part value. A thin cyan strip remains10 by code, not a scaled fractional light value or colored-light guarantee.

Evidence: `verification/shaped-detail-v1/codechicken.microblock.BlockMicroMaterial.javap.txt` lines 308–314; `verification/shaped-detail-v1/com.rwtema.extrautils.ExtraUtils.javap.txt` lines 3891–3897; `verification/shaped-detail-v1/com.rwtema.extrautils.multipart.RegisterMicroMaterials.javap.txt` lines 18–56; `verification/shaped-detail-v1/com.rwtema.extrautils.multipart.FullBrightMicroMaterial.javap.txt` lines 24–31; `verification/shaped-detail-v1/com.rwtema.extrautils.multipart.FullBrightMicroMaterial.javap.txt` lines 11–33; `verification/shaped-detail-v1/codechicken.microblock.Microblock.javap.txt` lines 314–320; `verification/shaped-detail-v1/codechicken.multipart.TileMultipart.javap.txt` lines 430–459.

## Saw and manual workflow

The installed recipe checks saw cutting strength against material harvest level (or maximum cutting-strength exception). A saw above the material creates two pieces with half the size; repeated thinning reaches halves, quarters and eighths. Side cuts change common shape class via splitting recipes; final centered posts are placement/orientation variants of the edge item class. Do not equate item damage with world shape. Local multipart.cfg has saw durability settings. GTNH dreamcraft presence suppresses the default saw/stone-rod crafting recipes in this jar, so actual saw acquisition and cutting recipes must be checked in target NEI; no universal saw crafting bill is asserted.

Evidence: `verification/shaped-detail-v1/codechicken.microblock.MicroRecipe$.javap.txt` lines 508–529; `verification/shaped-detail-v1/codechicken.microblock.MicroRecipe$.javap.txt` lines 531–649; `verification/shaped-detail-v1/codechicken.microblock.MicroRecipe$.javap.txt` lines 79–108; `verification/shaped-detail-v1/codechicken.microblock.PostMicroblock$class.javap.txt` lines 43–49; `verification/shaped-detail-v1/codechicken.microblock.BlockMicroMaterial.javap.txt` lines 339–348; `verification/shaped-detail-v1/codechicken.microblock.handler.MicroblockProxy_serverImpl.javap.txt` lines 290–304.

## Practical build sequence

1. In a disposable test copy, confirm the required micro-material appears and can be cut with the actual unlocked saw. Keep recipes/acquisition separate from this dimensional guide.
2. Make the required cover/edge pieces through the installed saw UI. Use the placement preview to choose a face/edge or centered-post mode; exact click/modifier behavior must be observed in game before writing a player instruction as tested.
3. Assemble one thin column/arm joint, one pale facade cover and one cyan edge accent. Check actual collision, connection clipping, texture orientation and block light before scaling to a city design.
4. Capture/export and re-import the sample, inspect its saved part names/shape bytes and compare against this static evidence. Only then can native shaped-detail exports be called game-validated.

Existing full-cube geometry/exterior packs remain preserved alternatives. This research creates no native schematic, edits no world and certifies no functional utilities or spawn-safe lighting.
