# R03 - Under-road service gallery / exact civil crop: detailed exterior assembly

1,200 final source-model positions, partitioned into 4 disjoint stages. This is an assembly guide for the saved exterior study, not a complete functional building or game-tested schematic. The PDIM is not created; no construction is recorded.

## Setout and coordinates

Local footprint X0..11, Z0..23; northwest origin, +X east and +Z south. Civil Y-10..-1, with future walkable surface S at civil0. World block Y=S+civilY; world anchor, S, rotation and dimension ID remain blank.

Existing footprint only. Preserve required-clear cells and all access.

This detached module copies city X96..107, Z24..47. Its geometry matches the existing civil crop; do not add its quantities again to the civil construction allocation.

## Block palette and gathering stock

![Role palette](block-palette.png)

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| minecraft:stonebrick | 0 | 1,200 | 18 stacks + 48 | F |

Counts are inventory items, not crafting ingredients. G/Q and s/S aggregate by inventory identity; placed states remain separate. E=dirt0; T=vertical oak log0; V=oak leaf placed4/item0; Q=dry glass0. New proposed bindings do not alter the source geometry. Recipe evidence and static vanilla inspection: ../../evidence/PALETTE_EVIDENCE.md.

## Geometry and assembly milestones

![Construction progress](construction-progress.png)

Facades are nearest-hit projections, not flat wall placement grids. Construct from layers and exact depth coordinates. Diagonals are stepped full cubes; no shaped-block NBT.

## Numbered construction stages

Every final cell appears exactly once. Bounds locate the work; never fill their whole volume. Work the occupied Y levels lowest first.

### S01 - Subgrade structure and access / civil Y-10..-9

240 new positions; 240 cumulative. Local X2..9, Z0..23; civil Y-10..-9. Roles: F=240.

1. Build the below-surface cells from the lowest listed civil Y upward. Follow the stairwell, retaining-wall and support gaps exactly; do not fill the bounding rectangle.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| minecraft:stonebrick | 0 | 240 | 3 stacks + 48 | F |

Exact new cells: stages/S01-runs.csv.gz. Stage stock: stages/S01-stock.csv. Leave completion checks blank until actually built.

### S02 - Subgrade structure and access / civil Y-8..-5

192 new positions; 432 cumulative. Local X2..9, Z0..23; civil Y-8..-5. Roles: F=192.

1. Build the below-surface cells from the lowest listed civil Y upward. Follow the stairwell, retaining-wall and support gaps exactly; do not fill the bounding rectangle.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| minecraft:stonebrick | 0 | 192 | 3 stacks + 0 | F |

Exact new cells: stages/S02-runs.csv.gz. Stage stock: stages/S02-stock.csv. Leave completion checks blank until actually built.

### S03 - Subgrade structure and access / civil Y-4..-2

480 new positions; 912 cumulative. Local X0..11, Z0..23; civil Y-4..-2. Roles: F=480.

1. Build the below-surface cells from the lowest listed civil Y upward. Follow the stairwell, retaining-wall and support gaps exactly; do not fill the bounding rectangle.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| minecraft:stonebrick | 0 | 480 | 7 stacks + 32 | F |

Exact new cells: stages/S03-runs.csv.gz. Stage stock: stages/S03-stock.csv. Leave completion checks blank until actually built.

### S04 - Base, floor and ground-level frame / civil Y-1..-1

288 new positions; 1,200 cumulative. Local X0..11, Z0..23; civil Y-1..-1. Roles: F=288.

1. Set out the full footprint and place only the base/floor and ground-frame cells assigned to this step. Keep model openings and stair apertures empty.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| minecraft:stonebrick | 0 | 288 | 4 stacks + 32 | F |

Exact new cells: stages/S04-runs.csv.gz. Stage stock: stages/S04-stock.csv. Leave completion checks blank until actually built.

## Complete level schedule

| Civil Y | Positions | Role counts | Stages |
| --- | --- | --- | --- |
| -10 | 192 | F:192 | S01 |
| -9 | 48 | F:48 | S01 |
| -8 | 48 | F:48 | S02 |
| -7 | 48 | F:48 | S02 |
| -6 | 48 | F:48 | S02 |
| -5 | 48 | F:48 | S02 |
| -4 | 192 | F:192 | S03 |
| -3 | 0 |  |  |
| -2 | 288 | F:288 | S03 |
| -1 | 288 | F:288 | S04 |

## Finish and validation

Compare all four facades and roof plan with the exact source model. Reconcile roles, placed states and inventory separately. Check slabs, upright logs and foliage persistence. Keep civil accesses and capped utility interfaces. Actual collision, roof protection, lighting, recipes, machine fit and accessible interiors remain open. No native schematic/import or operating plant is supplied. Use completion-record.csv only after actual construction.

