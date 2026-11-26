# MK23 / Access gallery / east–west 3-block transition

Pre-rotatedMK18; west walks0, east3. Native cut orientations are transformed. Use equal-height ports and the explicit clear-cell file.

Detached module; local northwest origin, +X east,+Z south. Datum y0 is walking level (pad: finished future hall datum). Choose a terrain anchor before construction; this component does not require the full city grid.

Bounds X/Y/Z inclusive: [0, -2, 0, 9, 7, 6]. 230 full-model occupied hosts, 230 exported architectural hosts. Individual microparts are counted separately. No crafting-yield bill is claimed.

## Ports and placement

- W face: along-axis inclusive[1, 5], walk y0, clear width5.
- E face: along-axis inclusive[1, 5], walk y3, clear width5.

To join modules face to face, put the next module one block beyond the current bounds, align the along-axis clear-port centers, and translate Y until the two port walk elevations match. For example MK01 at(0,0,0) joins another MK01 at(0,0,32). MK08 at(0,−9,0) can run below it; road0 and gallery−9 are independent datums. A four-block grade changes the next component’s datum by4. Use the pre-authored T/corner rotation variants; do not assume a legacy WorldEdit rotation rewrites native tile data.

## Build in layers

1. Survey solid ground, caves and the required clear volume. Stake the footprint/ports; leave a safe walking route. Bearing legs and pad depth are starting components, not surveyed footings.
2. Work bottom-up through the included layer sheets. Each sheet uses model X/Z coordinates and labels its exact Y. Empty cells are not an automatic excavation mask. Use the explicit gallery clear cells, and leave native cut hosts for their exact listed pieces.
3. Place ordinary material roles first. Axx labels an ArchitectureCraft shape ID and base role; M marks a host with multiple Forge Microblock cuts. Read the online/offline inspector and exact coordinate JSON for side/turn and cut face/edge/axis. Supply parts manually.
4. Check openings, supports, handrails and lighting; add landscaping last. Test target-game recipes, shapes and collision before repeating a component across your PDIM.

## Native ghost / WorldEdit clipboard

Copy MK23-Architecture_ONLY.schematic to your chosen Schematica folder for a manual ghost, Printer OFF. Installed WorldEdit expects .minecraft/config/worldedit/schematics; load clipboard with //schematic load mcedit MK23-Architecture_ONLY. Loading does not paste. Clipboard minimum Y is chosen module datum +(-2). Its X/Z minimum is the chosen module northwest; all offsets0. No placement/import/re-import was performed.

The architecture-only ghost excludes functional blocks and any displayed water. Fountain water is a separate manual fill. The rendered gallery roof may be hidden solely for a labeled cutaway; the model and schematic keep it.
