# Valier GTNH2.9 architectural schematics

196 exports: all81 plot exteriors and15 components, plus100 disjoint civil tiles covering the876-square infrastructure envelope. They use actual installed registry names and exact placed metadata. The source designs remain unchanged. These are architecture/civil exports, not functional machine assemblies.

## Inspected loaders

- worldedit-v0.0.10.jar: current //schematic command reader consumes BlockMapping.
- Schematica-1.12.6-GTNH.jar: normal Alpha reader consumes SchematicaMapping; current config useSchematicplusFormat=false.
- Both mapping compounds are identical registry-name→short mappings. All file IDs0..10 are local to the clipboard, not saved-world numeric IDs. No AddBlocks extension is needed; installed readers disagree on its nibble ordering, so it is deliberately absent.
- No generic compatibility claim for unrelated/obsolete MCEdit Java APIs or other editor versions.

## Files and placement convention

buildings/ contains96 .schematic files. civil/ contains100 files; C01-01 is the northwest96-square civil tile, row/column10 are the12-wide east/south closures. All civil occupied cells are assigned once. manifests/ gives dimensions, exact source hashes, state/role counts and city minimum coordinates for each file.

Clipboard anchor is the northwest MINIMUM corner, at its lowest cellY. +X east,+Z south. No rotation is encoded. Align its minimum X/Z to surveyed city origin plus the manifest city_minimum_xz. Align its minimum Y to future surface S plus source_bounds_xyz_inclusive[1]. Example Steam Works01-01 minimum is cityX22,Z22,civilY−8. Its top-level walking surface is S. HQ keeps65x65 at city405..469. Detached components have no assigned city site.

No intended PDIM has been created or surveyed. No existing unrelated save establishes a city anchor. Schematica ghost positioning is manual; its Alpha loader ignores WorldEdit anchor tags.

## Air and scope

Arrays include air in every unused bounding-box cell. Air is excluded from occupied block counts and is NOT an instruction to excavate an entire parcel. In the inspected WorldEdit, //paste -a skips air; a normal paste can clear destination cells. Civil required-clear masks and all installation/terrain checks remain separate. Export creation/loading does not authorize a world paste.

No machines, machine NBT, multipart shapes, doors, inventories, fluids or entities are exported. The32 machine-layout proposals remain separate planning overlays. Q is dry glass0; V is placed oak leaves4; stone slab states0/8 remain distinct. G/Q glass share one exported state but retain separate role counts in sidecars.

## Verification status

Installed loader code/config inspected; gzip/NBT/source reconstruction and remapping simulations are recorded in the project verification folder. No target-game import, re-import, ghost placement, printer action or live-world edit was performed. Test in an explicitly authorized disposable copy before calling any export build-ready. Recipes, affordability, complete access/lighting, machine/utility function and world fit remain open.
