# R02 - 12 by 12 junction / unobstructed finish study: detailed exterior assembly

624 final source-model positions, partitioned into 4 disjoint stages. This is an assembly guide for the saved exterior study, not a complete functional building or game-tested schematic. The PDIM is not created; no construction is recorded.

## Setout and coordinates

Local footprint X0..11, Z0..11; northwest origin, +X east and +Z south. Civil Y-10..-1, with future walkable surface S at civil0. World block Y=S+civilY; world anchor, S, rotation and dimension ID remain blank.

Existing footprint only. Preserve required-clear cells and all access.

This detached module copies city X96..107, Z96..107. It is an optional surface-replacement study, not additional blocks layered onto the civil road.

## Block palette and gathering stock

![Role palette](block-palette.png)

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.bittBlock | 0 | 128 | 2 stacks + 0 | B |
| Ztones:tile.laveBlock | 12 | 16 | 0 stacks + 16 | L |
| minecraft:stonebrick | 0 | 480 | 7 stacks + 32 | F |

Counts are inventory items, not crafting ingredients. G/Q and s/S aggregate by inventory identity; placed states remain separate. E=dirt0; T=vertical oak log0; V=oak leaf placed4/item0; Q=dry glass0. New proposed bindings do not alter the source geometry. Recipe evidence and static vanilla inspection: ../../evidence/PALETTE_EVIDENCE.md.

## Geometry and assembly milestones

![Construction progress](construction-progress.png)

Facades are nearest-hit projections, not flat wall placement grids. Construct from layers and exact depth coordinates. Diagonals are stepped full cubes; no shaped-block NBT.

## Numbered construction stages

Every final cell appears exactly once. Bounds locate the work; never fill their whole volume. Work the occupied Y levels lowest first.

### S01 - Subgrade structure and access / civil Y-10..-9

144 new positions; 144 cumulative. Local X0..11, Z0..11; civil Y-10..-9. Roles: F=144.

1. Build the below-surface cells from the lowest listed civil Y upward. Follow the stairwell, retaining-wall and support gaps exactly; do not fill the bounding rectangle.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| minecraft:stonebrick | 0 | 144 | 2 stacks + 16 | F |

Exact new cells: stages/S01-runs.csv.gz. Stage stock: stages/S01-stock.csv. Leave completion checks blank until actually built.

### S02 - Subgrade structure and access / civil Y-8..-5

64 new positions; 208 cumulative. Local X0..11, Z0..11; civil Y-8..-5. Roles: F=64.

1. Build the below-surface cells from the lowest listed civil Y upward. Follow the stairwell, retaining-wall and support gaps exactly; do not fill the bounding rectangle.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| minecraft:stonebrick | 0 | 64 | 1 stacks + 0 | F |

Exact new cells: stages/S02-runs.csv.gz. Stage stock: stages/S02-stock.csv. Leave completion checks blank until actually built.

### S03 - Subgrade structure and access / civil Y-4..-2

272 new positions; 480 cumulative. Local X0..11, Z0..11; civil Y-4..-2. Roles: F=272.

1. Build the below-surface cells from the lowest listed civil Y upward. Follow the stairwell, retaining-wall and support gaps exactly; do not fill the bounding rectangle.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| minecraft:stonebrick | 0 | 272 | 4 stacks + 16 | F |

Exact new cells: stages/S03-runs.csv.gz. Stage stock: stages/S03-stock.csv. Leave completion checks blank until actually built.

### S04 - Base, floor and ground-level frame / civil Y-1..-1

144 new positions; 624 cumulative. Local X0..11, Z0..11; civil Y-1..-1. Roles: B=128, L=16.

1. Set out the full footprint and place only the base/floor and ground-frame cells assigned to this step. Keep model openings and stair apertures empty.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.bittBlock | 0 | 128 | 2 stacks + 0 | B |
| Ztones:tile.laveBlock | 12 | 16 | 0 stacks + 16 | L |

Exact new cells: stages/S04-runs.csv.gz. Stage stock: stages/S04-stock.csv. Leave completion checks blank until actually built.

## Complete level schedule

| Civil Y | Positions | Role counts | Stages |
| --- | --- | --- | --- |
| -10 | 128 | F:128 | S01 |
| -9 | 16 | F:16 | S01 |
| -8 | 16 | F:16 | S02 |
| -7 | 16 | F:16 | S02 |
| -6 | 16 | F:16 | S02 |
| -5 | 16 | F:16 | S02 |
| -4 | 128 | F:128 | S03 |
| -3 | 0 |  |  |
| -2 | 144 | F:144 | S03 |
| -1 | 144 | B:128 L:16 | S04 |

## Finish and validation

Compare all four facades and roof plan with the exact source model. Reconcile roles, placed states and inventory separately. Check slabs, upright logs and foliage persistence. Keep civil accesses and capped utility interfaces. Actual collision, roof protection, lighting, recipes, machine fit and accessible interiors remain open. No native schematic/import or operating plant is supplied. Use completion-record.csv only after actual construction.

