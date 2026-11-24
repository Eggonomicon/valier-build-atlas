# R04 - M11 stair access / exact civil crop: detailed exterior assembly

2,018 final source-model positions, partitioned into 4 disjoint stages. This is an assembly guide for the saved exterior study, not a complete functional building or game-tested schematic. The PDIM is not created; no construction is recorded.

## Setout and coordinates

Local footprint X0..17, Z0..25; northwest origin, +X east and +Z south. Civil Y-10..+0, with future walkable surface S at civil0. World block Y=S+civilY; world anchor, S, rotation and dimension ID remain blank.

Existing footprint only. Preserve required-clear cells and all access.

This detached module copies city X98..115, Z118..143. Its geometry matches the existing civil crop; do not add its quantities again to the civil construction allocation.

## Block palette and gathering stock

![Role palette](block-palette.png)

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| minecraft:stone_slab | 0 | 54 | 0 stacks + 54 | Ss |
| minecraft:stonebrick | 0 | 1,964 | 30 stacks + 44 | F |

Counts are inventory items, not crafting ingredients. G/Q and s/S aggregate by inventory identity; placed states remain separate. E=dirt0; T=vertical oak log0; V=oak leaf placed4/item0; Q=dry glass0. New proposed bindings do not alter the source geometry. Recipe evidence and static vanilla inspection: ../../evidence/PALETTE_EVIDENCE.md.

## Geometry and assembly milestones

![Construction progress](construction-progress.png)

Facades are nearest-hit projections, not flat wall placement grids. Construct from layers and exact depth coordinates. Diagonals are stepped full cubes; no shaped-block NBT.

## Numbered construction stages

Every final cell appears exactly once. Bounds locate the work; never fill their whole volume. Work the occupied Y levels lowest first.

### S01 - Subgrade structure and access / civil Y-10..-9

501 new positions; 501 cumulative. Local X0..16, Z0..25; civil Y-10..-9. Roles: F=495, S=3, s=3.

1. Build the below-surface cells from the lowest listed civil Y upward. Follow the stairwell, retaining-wall and support gaps exactly; do not fill the bounding rectangle.
2. Check each slab symbol: s occupies the lower half (placed meta0); S occupies the upper half (placed meta8). Both consume ordinary stone slab inventory0. Keep half-steps separate; do not make double slabs.
3. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| minecraft:stone_slab | 0 | 6 | 0 stacks + 6 | Ss |
| minecraft:stonebrick | 0 | 495 | 7 stacks + 47 | F |

Exact new cells: stages/S01-runs.csv.gz. Stage stock: stages/S01-stock.csv. Leave completion checks blank until actually built.

### S02 - Subgrade structure and access / civil Y-8..-5

556 new positions; 1,057 cumulative. Local X0..16, Z0..25; civil Y-8..-5. Roles: F=532, S=12, s=12.

1. Build the below-surface cells from the lowest listed civil Y upward. Follow the stairwell, retaining-wall and support gaps exactly; do not fill the bounding rectangle.
2. Check each slab symbol: s occupies the lower half (placed meta0); S occupies the upper half (placed meta8). Both consume ordinary stone slab inventory0. Keep half-steps separate; do not make double slabs.
3. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| minecraft:stone_slab | 0 | 24 | 0 stacks + 24 | Ss |
| minecraft:stonebrick | 0 | 532 | 8 stacks + 20 | F |

Exact new cells: stages/S02-runs.csv.gz. Stage stock: stages/S02-stock.csv. Leave completion checks blank until actually built.

### S03 - Subgrade structure and access / civil Y-4..-2

628 new positions; 1,685 cumulative. Local X0..17, Z0..25; civil Y-4..-2. Roles: F=610, S=9, s=9.

1. Build the below-surface cells from the lowest listed civil Y upward. Follow the stairwell, retaining-wall and support gaps exactly; do not fill the bounding rectangle.
2. Check each slab symbol: s occupies the lower half (placed meta0); S occupies the upper half (placed meta8). Both consume ordinary stone slab inventory0. Keep half-steps separate; do not make double slabs.
3. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| minecraft:stone_slab | 0 | 18 | 0 stacks + 18 | Ss |
| minecraft:stonebrick | 0 | 610 | 9 stacks + 34 | F |

Exact new cells: stages/S03-runs.csv.gz. Stage stock: stages/S03-stock.csv. Leave completion checks blank until actually built.

### S04 - Base, floor and ground-level frame / civil Y-1..+0

333 new positions; 2,018 cumulative. Local X0..17, Z0..25; civil Y-1..+0. Roles: F=327, S=3, s=3.

1. Set out the full footprint and place only the base/floor and ground-frame cells assigned to this step. Keep model openings and stair apertures empty.
2. Check each slab symbol: s occupies the lower half (placed meta0); S occupies the upper half (placed meta8). Both consume ordinary stone slab inventory0. Keep half-steps separate; do not make double slabs.
3. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| minecraft:stone_slab | 0 | 6 | 0 stacks + 6 | Ss |
| minecraft:stonebrick | 0 | 327 | 5 stacks + 7 | F |

Exact new cells: stages/S04-runs.csv.gz. Stage stock: stages/S04-stock.csv. Leave completion checks blank until actually built.

## Complete level schedule

| Civil Y | Positions | Role counts | Stages |
| --- | --- | --- | --- |
| -10 | 347 | F:347 | S01 |
| -9 | 154 | F:148 S:3 s:3 | S01 |
| -8 | 148 | F:142 S:3 s:3 | S02 |
| -7 | 142 | F:136 S:3 s:3 | S02 |
| -6 | 136 | F:130 S:3 s:3 | S02 |
| -5 | 130 | F:124 S:3 s:3 | S02 |
| -4 | 314 | F:308 S:3 s:3 | S03 |
| -3 | 18 | F:12 S:3 s:3 | S03 |
| -2 | 296 | F:290 S:3 s:3 | S03 |
| -1 | 290 | F:284 S:3 s:3 | S04 |
| +0 | 43 | F:43 | S04 |

## Finish and validation

Compare all four facades and roof plan with the exact source model. Reconcile roles, placed states and inventory separately. Check slabs, upright logs and foliage persistence. Keep civil accesses and capped utility interfaces. Actual collision, roof protection, lighting, recipes, machine fit and accessible interiors remain open. No native schematic/import or operating plant is supplied. Use completion-record.csv only after actual construction.

