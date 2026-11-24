# A06 - Bench and planter: detailed exterior assembly

180 final source-model positions, partitioned into 4 disjoint stages. This is an assembly guide for the saved exterior study, not a complete functional building or game-tested schematic. The PDIM is not created; no construction is recorded.

## Setout and coordinates

Local footprint X0..7, Z0..7; northwest origin, +X east and +Z south. Civil Y-1..+2, with future walkable surface S at civil0. World block Y=S+civilY; world anchor, S, rotation and dimension ID remain blank.

Eight-square landscape furniture bay; planting material unassigned.

## Block palette and gathering stock

![Role palette](block-palette.png)

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.korpBlock | 2 | 28 | 0 stacks + 28 | K |
| Ztones:tile.laveBlock | 12 | 22 | 0 stacks + 22 | L |
| minecraft:dirt | 0 | 18 | 0 stacks + 18 | E |
| minecraft:leaves | 0 | 36 | 0 stacks + 36 | V |
| minecraft:stone_slab | 0 | 12 | 0 stacks + 12 | s |
| minecraft:stonebrick | 0 | 64 | 1 stacks + 0 | F |

Counts are inventory items, not crafting ingredients. G/Q and s/S aggregate by inventory identity; placed states remain separate. E=dirt0; T=vertical oak log0; V=oak leaf placed4/item0; Q=dry glass0. New proposed bindings do not alter the source geometry. Recipe evidence and static vanilla inspection: ../../evidence/PALETTE_EVIDENCE.md.

## Geometry and assembly milestones

![Construction progress](construction-progress.png)

Facades are nearest-hit projections, not flat wall placement grids. Construct from layers and exact depth coordinates. Diagonals are stepped full cubes; no shaped-block NBT.

## Numbered construction stages

Every final cell appears exactly once. Bounds locate the work; never fill their whole volume. Work the occupied Y levels lowest first.

### S01 - Base, floor and ground-level frame / civil Y-1..+0

98 new positions; 98 cumulative. Local X0..7, Z0..7; civil Y-1..+0. Roles: F=64, K=22, s=12.

1. Set out the full footprint and place only the base/floor and ground-frame cells assigned to this step. Keep model openings and stair apertures empty.
2. Check each slab symbol: s occupies the lower half (placed meta0); S occupies the upper half (placed meta8). Both consume ordinary stone slab inventory0. Keep half-steps separate; do not make double slabs.
3. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.korpBlock | 2 | 22 | 0 stacks + 22 | K |
| minecraft:stone_slab | 0 | 12 | 0 stacks + 12 | s |
| minecraft:stonebrick | 0 | 64 | 1 stacks + 0 | F |

Exact new cells: stages/S01-runs.csv.gz. Stage stock: stages/S01-stock.csv. Leave completion checks blank until actually built.

### S02 - Ascending structural lift / civil Y+1..+1

28 new positions; 126 cumulative. Local X0..7, Z0..7; civil Y+1..+1. Roles: K=6, L=22.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.korpBlock | 2 | 6 | 0 stacks + 6 | K |
| Ztones:tile.laveBlock | 12 | 22 | 0 stacks + 22 | L |

Exact new cells: stages/S02-runs.csv.gz. Stage stock: stages/S02-stock.csv. Leave completion checks blank until actually built.

### S03 - Planting-bed dirt / civil Y+0..+0

18 new positions; 144 cumulative. Local X1..6, Z1..3; civil Y+0..+0. Roles: E=18.

1. Fill only E positions with dirt0 inside the modeled beds. Do not backfill open paths, bench gaps or the whole planter envelope.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| minecraft:dirt | 0 | 18 | 0 stacks + 18 | E |

Exact new cells: stages/S03-runs.csv.gz. Stage stock: stages/S03-stock.csv. Leave completion checks blank until actually built.

### S04 - Player-placed oak foliage / civil Y+1..+2

36 new positions; 180 cumulative. Local X1..6, Z1..3; civil Y+1..+2. Roles: V=36.

1. Place V using oak leaf inventory0; the inspected vanilla ItemLeaves path adds persistence flag4. Match every foliage cell, then inspect the actual placed leaves in the target game. No growth or crop behavior is claimed.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| minecraft:leaves | 0 | 36 | 0 stacks + 36 | V |

Exact new cells: stages/S04-runs.csv.gz. Stage stock: stages/S04-stock.csv. Leave completion checks blank until actually built.

## Complete level schedule

| Civil Y | Positions | Role counts | Stages |
| --- | --- | --- | --- |
| -1 | 64 | F:64 | S01 |
| +0 | 52 | E:18 K:22 s:12 | S01 S03 |
| +1 | 46 | K:6 L:22 V:18 | S02 S04 |
| +2 | 18 | V:18 | S04 |

## Finish and validation

Compare all four facades and roof plan with the exact source model. Reconcile roles, placed states and inventory separately. Check slabs, upright logs and foliage persistence. Keep civil accesses and capped utility interfaces. Actual collision, roof protection, lighting, recipes, machine fit and accessible interiors remain open. No native schematic/import or operating plant is supplied. Use completion-record.csv only after actual construction.

