# P1 permanent workorder schematic loading guide

19 separate permanent-only additions follow the existing fieldpack WO01..WO19 ownership order. Their total is198,608 permanent positions:198,554 stone bricks and54 stone slabs. Existing source geometry and the196 whole-design/civil schematics are unchanged. These are civil structure blocks, not functional pipes or cables.

WO01 is M11 maintenance stair and gallery connection: local X98..115,Z118..143,civilY-10..0;18x11x26. It contains2,018 permanent positions:1,964 stone bricks,27 bottom slabs metadata0 and27 top slabs metadata8. C01-01 from the broad civil tile pack is not this starter module.

## Files and exact folder

For the supplied Prism singleplayer instance, WorldEdit reads from its `.minecraft/config/worldedit/schematics` folder. Extract/copy the chosen files from this pack's `schematics/` directly into that folder. This is different from Schematica's ghost folder. For a multiplayer game use the real server's `config/worldedit/schematics` (or its configured schematic-save-dir); a client-only copy does not upload files to a server. The installed WorldEdit must be present on the executing game/server, and the player must have its load/paste/history permissions (normally operator/admin).

These paths and commands are statically checked against installed worldedit-v0.0.10.jar and its current config, not executed in game. No world has been edited by generating this pack.

## Starter commands

Use a surveyed authorized build location or disposable test copy. The intended PDIM and world origin/surface are not yet assigned. In commands below X,Y,Z are placeholders: replace them with the minimum corner `(city_origin_X+98, surface_S-10, city_origin_Z+118)`, as three integer coordinates. Do not type the formula or placeholders into the game.

```text
//schematic list -p 1
//schematic load mcedit Valier_P1_WO01_Permanent_GTNH29.schematic
//pos1 X,Y,Z
//toggleplace
```

Check the toggle response. It must say `Now placing at pos #1.`; if it says `Now placing at the block you stand in.`, run `//toggleplace` once more. Set pos1 again for each following workorder's minimum world corner from its manifest. This mode uses pos1 without needing the player to stand at the underground minimum.

Only when ready to place the selected workorder:

```text
//paste -a -s
```

`-a` preserves destination cells where this addition has air; `-s` selects the pasted extent. Do not use `-o`: all stored origin/offset tags are zero and that flag would target local0,0,0. No rotation is applied: +X east,+Z south,north -Z. The anchor is the NW minimum at civilY-10, not the walkable surface.

Default player placement, if selected instead, uses the block you stand IN at your feet, not the supporting block below. Explicit pos1 placement avoids this vertical ambiguity.

```text
//undo 1
//schematic formats
/we help schematic load
//help schematic load
```

Undo operates on available session history; it does not replace a disposable test copy. Installed current history-size is15. Loading a clipboard alone does not place blocks.

## Permanent additions, temporary caps and clearance

Only the new permanent positions owned by each workorder are included. Earlier workorders can appear as air holes in later files: keep `-a`. These files do not remove older temporary caps, do not add temporary caps, and do not excavate modeled corridors or entire work rectangles.

Each manifest separately links `references/WOxx/temporary-cap-add.csv`, `temporary-cap-remove.csv` and `temporary-cap-end-state.csv`, copied byte-for-byte from the fieldpack. Follow their construction sequence separately; the CSVs are not part of the schematic arrays. The existing fieldpack required-clear runs remain the authority for modeled clear space. Structural completion, access, lighting, frontier protection, terrain clearance and machine utilities still require their own checks.

The first WO01 end state separately lists60 temporary caps; they are excluded from its2,018 permanent blocks. Inspect gallery/stair access and junctions before concealing them with roofs/surface layers. No completed-build, safe-access or in-game import certification is implied.

## Evidence and checks

NBT uses gzip Alpha named root Schematic; exact registry-name short mappings in both BlockMapping and SchematicaMapping; file-local IDs air0,stonebrick1,stone_slab2. Top slab metadata8 is kept distinct from inventory metadata0. No high-ID extensions, entities or tile entities are present. Schematica's installed useSchematicplusFormat=false remains a prerequisite for its normal reader.

`verification/p1-schematics-v1-checks.json` in the project records independent typed-NBT/source/ownership reconstruction and archive checks. `verification/worldedit-loading-v1/public-command-evidence.json` records hashed installed loader/config evidence. Neither static verification is an in-game test. All manifests have game_tested=false.
