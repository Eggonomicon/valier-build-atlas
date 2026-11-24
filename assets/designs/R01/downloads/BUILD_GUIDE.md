# R01 - 12-wide street / 48-block finish study: detailed exterior assembly

2,400 final source-model positions, partitioned into 5 disjoint stages. This is an assembly guide for the saved exterior study, not a complete functional building or game-tested schematic. The PDIM is not created; no construction is recorded.

## Setout and coordinates

Local footprint X0..11, Z0..47; northwest origin, +X east and +Z south. Civil Y-10..-1, with future walkable surface S at civil0. World block Y=S+civilY; world anchor, S, rotation and dimension ID remain blank.

Existing footprint only. Preserve required-clear cells and all access.

This detached module copies city X96..107, Z24..71. It is an optional surface-replacement study, not additional blocks layered onto the civil road.

## Block palette and gathering stock

![Role palette](block-palette.png)

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| ExtraUtilities:greenscreen | 9 | 4 | 0 stacks + 4 | N |
| Ztones:tile.bittBlock | 0 | 384 | 6 stacks + 0 | B |
| Ztones:tile.laveBlock | 12 | 188 | 2 stacks + 60 | L |
| minecraft:stonebrick | 0 | 1,824 | 28 stacks + 32 | F |

Counts are inventory items, not crafting ingredients. G/Q and s/S aggregate by inventory identity; placed states remain separate. E=dirt0; T=vertical oak log0; V=oak leaf placed4/item0; Q=dry glass0. New proposed bindings do not alter the source geometry. Recipe evidence and static vanilla inspection: ../../evidence/PALETTE_EVIDENCE.md.

## Geometry and assembly milestones

![Construction progress](construction-progress.png)

Facades are nearest-hit projections, not flat wall placement grids. Construct from layers and exact depth coordinates. Diagonals are stepped full cubes; no shaped-block NBT.

## Numbered construction stages

Every final cell appears exactly once. Bounds locate the work; never fill their whole volume. Work the occupied Y levels lowest first.

### S01 - Subgrade structure and access / civil Y-10..-9

480 new positions; 480 cumulative. Local X2..9, Z0..47; civil Y-10..-9. Roles: F=480.

1. Build the below-surface cells from the lowest listed civil Y upward. Follow the stairwell, retaining-wall and support gaps exactly; do not fill the bounding rectangle.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| minecraft:stonebrick | 0 | 480 | 7 stacks + 32 | F |

Exact new cells: stages/S01-runs.csv.gz. Stage stock: stages/S01-stock.csv. Leave completion checks blank until actually built.

### S02 - Subgrade structure and access / civil Y-8..-5

384 new positions; 864 cumulative. Local X2..9, Z0..47; civil Y-8..-5. Roles: F=384.

1. Build the below-surface cells from the lowest listed civil Y upward. Follow the stairwell, retaining-wall and support gaps exactly; do not fill the bounding rectangle.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| minecraft:stonebrick | 0 | 384 | 6 stacks + 0 | F |

Exact new cells: stages/S02-runs.csv.gz. Stage stock: stages/S02-stock.csv. Leave completion checks blank until actually built.

### S03 - Subgrade structure and access / civil Y-4..-2

960 new positions; 1,824 cumulative. Local X0..11, Z0..47; civil Y-4..-2. Roles: F=960.

1. Build the below-surface cells from the lowest listed civil Y upward. Follow the stairwell, retaining-wall and support gaps exactly; do not fill the bounding rectangle.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| minecraft:stonebrick | 0 | 960 | 15 stacks + 0 | F |

Exact new cells: stages/S03-runs.csv.gz. Stage stock: stages/S03-stock.csv. Leave completion checks blank until actually built.

### S04 - Base, floor and ground-level frame / civil Y-1..-1

572 new positions; 2,396 cumulative. Local X0..11, Z0..47; civil Y-1..-1. Roles: B=384, L=188.

1. Set out the full footprint and place only the base/floor and ground-frame cells assigned to this step. Keep model openings and stair apertures empty.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.bittBlock | 0 | 384 | 6 stacks + 0 | B |
| Ztones:tile.laveBlock | 12 | 188 | 2 stacks + 60 | L |

Exact new cells: stages/S04-runs.csv.gz. Stage stock: stages/S04-stock.csv. Leave completion checks blank until actually built.

### S05 - Cyan trim and white fixtures / civil Y-1..-1

4 new positions; 2,400 cumulative. Local X1..10, Z12..36; civil Y-1..-1. Roles: N=4.

1. Place the cyan trim and white fixtures at the listed positions after the frame/glazing. These are individual blocks; do not turn every edge into a continuous cyan strip or assume the counts establish light coverage.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| ExtraUtilities:greenscreen | 9 | 4 | 0 stacks + 4 | N |

Exact new cells: stages/S05-runs.csv.gz. Stage stock: stages/S05-stock.csv. Leave completion checks blank until actually built.

## Complete level schedule

| Civil Y | Positions | Role counts | Stages |
| --- | --- | --- | --- |
| -10 | 384 | F:384 | S01 |
| -9 | 96 | F:96 | S01 |
| -8 | 96 | F:96 | S02 |
| -7 | 96 | F:96 | S02 |
| -6 | 96 | F:96 | S02 |
| -5 | 96 | F:96 | S02 |
| -4 | 384 | F:384 | S03 |
| -3 | 0 |  |  |
| -2 | 576 | F:576 | S03 |
| -1 | 576 | B:384 L:188 N:4 | S04 S05 |

## Finish and validation

Compare all four facades and roof plan with the exact source model. Reconcile roles, placed states and inventory separately. Check slabs, upright logs and foliage persistence. Keep civil accesses and capped utility interfaces. Actual collision, roof protection, lighting, recipes, machine fit and accessible interiors remain open. No native schematic/import or operating plant is supplied. Use completion-record.csv only after actual construction.

