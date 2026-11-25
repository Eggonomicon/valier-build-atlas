# Prototype palette refinement evidence

Separate read-only installed-instance research for the new architectural prototype. No earlier models, exports, palettes, renders or site assets were changed. Game-tested:false.

|Role|Registry|Placed / inventory metadata|Exact micro-material key|
|---|---|---|---|
|L|`Ztones:tile.agonBlock`|0 / 0|`Ztones:tile.agonBlock`|
|P|`Ztones:tile.agonBlock`|15 / 15|`Ztones:tile.agonBlock_15`|
|B|`Ztones:tile.korpBlock`|14 / 14|`Ztones:tile.korpBlock_14`|
|R|`Ztones:tile.korpBlock`|14 / 14|`Ztones:tile.korpBlock_14`|
|K|`Ztones:tile.agonBlock`|13 / 13|`Ztones:tile.agonBlock_13`|
|M|`Ztones:tile.korpBlock`|2 / 2|`Ztones:tile.korpBlock_2`|
|G|`TConstruct:GlassBlock.StainedClear`|3 / 3|`not claimed`|
|g|`chisel:glass`|6 / 6|`not claimed`|

## Pale and dark surfaces

L=Agon0 supplies pale warm-gray tiles; P=Agon15 is a darker pavement panel. B/R=Korp14 supplies full-block horizontal courses rather than tiny masonry mosaics. K=Agon13 gives restrained dark square joints. M=Korp2 remains the inset. Their raw16x16 textures are preserved, repeated without smoothing or recoloring in selected-4x4-repeats.png. These are aesthetic selections from actual assets, not a claim that palette alone reproduces the reference massing.

BlockAgon and BlockKorp set names agonBlock/korpBlock; ModBlocks registers getUnlocalizedName as the registry path, producing tile.agonBlock/tile.korpBlock within Ztones. Metadata indexes the texture array directly and is returned unchanged for inventory drops. Installed microblocks.cfg explicitly lists both blocks0..15. The previously verified BlockMicroMaterial material-key rule appends _metadata only when metadata>0. Therefore Agon0 has no _0 suffix. Ordinary opaque, non-TE full-block behavior meets the installed AC sawbench predicate; material registry/saw execution remains untested.

## Clean colored glass

G is TConstruct:GlassBlock.StainedClear metadata3 (light_blue); optional metadata7 is gray. The exact case and punctuation follow TinkerSmeltery registration. Constructor color-array indices3/7 select these variants; damageDropped returns metadata unchanged. Each variation has16 separate whole-face icons. The fully connected index15 uses glass_4.png and has no perimeter or arrow glints. Base icon0 still has an outer border. The blue/gray color and alpha are the actual PNG pixels, with no invented tint or opacity reduction.

TConstruct GlassBlockConnectedMeta extends GlassBlockConnected, then MantleBlock, then Minecraft Block. These installed classes do not provide tile-entity creation. No extra native tile entity is needed for this full-cube glass proposal. The blocks are not opaque and tile.GlassBlock.StainedClear is absent from the installed ArchitectureCraft whitelist, so roof role g remains the earlier verified chisel:glass metadata6. No TConstruct micro-material eligibility is asserted.

The exact16-icon mapping, face-neighbor vectors and all32 source/hash records are in tconstruct-ctm-spec.json. Bit order is U,D,L,R. The selector needs direct neighbors only. Installed Tinkers connected-texture mode2 allows connection between differently colored stained-clear blocks; a same-color prototype is unaffected. Hodgepodge fixBottomFaceUV is false in installed config; if enabled at runtime, the DOWN L/R tests swap. Actual launch blackboard was not queried.

## Compared alternatives

EnderIO:blockFusedQuartz metadata1 (Quite Clear Glass) has a completely transparent fusedGlass.png; its separate connected frame has no arrow glints. Metadata0 Fused Quartz has four low-alpha speckle pixels. However the installed block creates TileEntityPaintedBlock through BlockEnder, so it must not be silently exported as a cube-only native state. This option is outside the chosen quick prototype scope.

TConstruct gray/light-blue connected centers have alpha130..133. Chisel gray/lightblue/lightgray transparent variants were also extracted separately: their alpha140..215 is more opaque and does not improve clarity. Their packed identities are recorded in chisel-transparent-options.json; they are not selected.

## Evidence and limits

public-palette-evidence.json records installed JAR/class/PNG hashes, exact member paths, config hashes/lines, albedo override checks and disassembly citations. All selected PNGs have no active albedo override. No game, sawbench, mod initialization, recipe, registry execution, world import or in-game lighting test was performed.

Evidence ztones_identity: `verification/reference-refinement-v1/com.riciJak.Ztones.init.ModBlocks.javap.txt` lines443–532; `verification/reference-refinement-v1/com.riciJak.Ztones.block.MBlocks.BlockAgon.javap.txt` lines13–18; `verification/reference-refinement-v1/com.riciJak.Ztones.block.MBlocks.BlockAgon.javap.txt` lines89–103; `verification/reference-refinement-v1/com.riciJak.Ztones.block.MBlocks.BlockKorp.javap.txt` lines13–18.

Evidence glass_identity: `verification/reference-refinement-v1/tconstruct.smeltery.TinkerSmeltery.javap.txt` lines1223–1260; `verification/reference-refinement-v1/tconstruct.smeltery.TinkerSmeltery.javap.txt` lines1274–1278; `verification/reference-refinement-v1/tconstruct.smeltery.TinkerSmeltery.javap.txt` lines1443–1452; `verification/reference-refinement-v1/tconstruct.smeltery.blocks.GlassBlockConnectedMeta.javap.txt` lines161–165.

Evidence ctm: `verification/reference-refinement-v1/tconstruct.smeltery.blocks.GlassBlockConnected.javap.txt` lines606–750; `verification/reference-refinement-v1/tconstruct.smeltery.blocks.GlassBlockConnected.javap.txt` lines1006–1011; `verification/reference-refinement-v1/tconstruct.smeltery.blocks.GlassBlockConnectedMeta.javap.txt` lines64–93; `verification/reference-refinement-v1/tconstruct.smeltery.blocks.GlassBlockConnectedMeta.javap.txt` lines166–176.

Evidence no_tile_entity: `verification/reference-refinement-v1/tconstruct.smeltery.blocks.GlassBlockConnectedMeta.javap.txt` lines2–23; `verification/reference-refinement-v1/tconstruct.smeltery.blocks.GlassBlockConnected.javap.txt` lines2–9; `verification/reference-refinement-v1/mantle.blocks.MantleBlock.javap.txt` lines2–11.

Evidence enderio_scope: `verification/reference-refinement-v1/crazypants.enderio.material.BlockFusedQuartz.javap.txt` lines24–40; `verification/reference-refinement-v1/com.enderio.core.common.BlockEnder.javap.txt` lines85–96; `verification/reference-refinement-v1/crazypants.enderio.material.BlockFusedQuartz$Type.javap.txt` lines179–196.
