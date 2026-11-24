# A01 - Civic plaza / clear crossing: detailed exterior assembly

1,372 final source-model positions, partitioned into 5 disjoint stages. This is an assembly guide for the saved exterior study, not a complete functional building or game-tested schematic. The PDIM is not created; no construction is recorded.

## Setout and coordinates

Local footprint X0..23, Z0..23; northwest origin, +X east and +Z south. Civil Y-1..+9, with future walkable surface S at civil0. World block Y=S+civilY; world anchor, S, rotation and dimension ID remain blank.

24-square plaza inside an open-space reservation; six-wide crossing remains clear.

## Block palette and gathering stock

![Role palette](block-palette.png)

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.korpBlock | 2 | 80 | 1 stacks + 16 | K |
| Ztones:tile.laveBlock | 12 | 332 | 5 stacks + 12 | L |
| minecraft:dirt | 0 | 64 | 1 stacks + 0 | E |
| minecraft:leaves | 0 | 556 | 8 stacks + 44 | V |
| minecraft:log | 0 | 16 | 0 stacks + 16 | T |
| minecraft:stonebrick | 0 | 324 | 5 stacks + 4 | F |

Counts are inventory items, not crafting ingredients. G/Q and s/S aggregate by inventory identity; placed states remain separate. E=dirt0; T=vertical oak log0; V=oak leaf placed4/item0; Q=dry glass0. New proposed bindings do not alter the source geometry. Recipe evidence and static vanilla inspection: ../../evidence/PALETTE_EVIDENCE.md.

## Geometry and assembly milestones

![Construction progress](construction-progress.png)

Facades are nearest-hit projections, not flat wall placement grids. Construct from layers and exact depth coordinates. Diagonals are stepped full cubes; no shaped-block NBT.

## Numbered construction stages

Every final cell appears exactly once. Bounds locate the work; never fill their whole volume. Work the occupied Y levels lowest first.

### S01 - Base, floor and ground-level frame / civil Y-1..+0

656 new positions; 656 cumulative. Local X0..23, Z0..23; civil Y-1..+0. Roles: F=324, K=80, L=252.

1. Set out the full footprint and place only the base/floor and ground-frame cells assigned to this step. Keep model openings and stair apertures empty.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.korpBlock | 2 | 80 | 1 stacks + 16 | K |
| Ztones:tile.laveBlock | 12 | 252 | 3 stacks + 60 | L |
| minecraft:stonebrick | 0 | 324 | 5 stacks + 4 | F |

Exact new cells: stages/S01-runs.csv.gz. Stage stock: stages/S01-stock.csv. Leave completion checks blank until actually built.

### S02 - Ascending structural lift / civil Y+1..+1

80 new positions; 736 cumulative. Local X1..22, Z1..22; civil Y+1..+1. Roles: L=80.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.laveBlock | 12 | 80 | 1 stacks + 16 | L |

Exact new cells: stages/S02-runs.csv.gz. Stage stock: stages/S02-stock.csv. Leave completion checks blank until actually built.

### S03 - Planting-bed dirt / civil Y+0..+0

64 new positions; 800 cumulative. Local X2..21, Z2..21; civil Y+0..+0. Roles: E=64.

1. Fill only E positions with dirt0 inside the modeled beds. Do not backfill open paths, bench gaps or the whole planter envelope.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| minecraft:dirt | 0 | 64 | 1 stacks + 0 | E |

Exact new cells: stages/S03-runs.csv.gz. Stage stock: stages/S03-stock.csv. Leave completion checks blank until actually built.

### S04 - Upright decorative oak trunks / civil Y+1..+4

16 new positions; 816 cumulative. Local X4..20, Z4..20; civil Y+1..+4. Roles: T=16.

1. Place T as oak log0 with the end grain up/down. The trunks are decorative built forms, not growing trees or a working tree-farm design.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| minecraft:log | 0 | 16 | 0 stacks + 16 | T |

Exact new cells: stages/S04-runs.csv.gz. Stage stock: stages/S04-stock.csv. Leave completion checks blank until actually built.

### S05 - Player-placed oak foliage / civil Y+1..+9

556 new positions; 1,372 cumulative. Local X2..22, Z2..22; civil Y+1..+9. Roles: V=556.

1. Place V using oak leaf inventory0; the inspected vanilla ItemLeaves path adds persistence flag4. Match every foliage cell, then inspect the actual placed leaves in the target game. No growth or crop behavior is claimed.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| minecraft:leaves | 0 | 556 | 8 stacks + 44 | V |

Exact new cells: stages/S05-runs.csv.gz. Stage stock: stages/S05-stock.csv. Leave completion checks blank until actually built.

## Complete level schedule

| Civil Y | Positions | Role counts | Stages |
| --- | --- | --- | --- |
| -1 | 576 | F:324 L:252 | S01 |
| +0 | 144 | E:64 K:80 | S01 S03 |
| +1 | 144 | L:80 T:4 V:60 | S02 S04 S05 |
| +2 | 64 | T:4 V:60 | S04 S05 |
| +3 | 4 | T:4 | S04 |
| +4 | 4 | T:4 | S04 |
| +5 | 100 | V:100 | S05 |
| +6 | 100 | V:100 | S05 |
| +7 | 100 | V:100 | S05 |
| +8 | 100 | V:100 | S05 |
| +9 | 36 | V:36 | S05 |

## Finish and validation

Compare all four facades and roof plan with the exact source model. Reconcile roles, placed states and inventory separately. Check slabs, upright logs and foliage persistence. Keep civil accesses and capped utility interfaces. Actual collision, roof protection, lighting, recipes, machine fit and accessible interiors remain open. No native schematic/import or operating plant is supplied. Use completion-record.csv only after actual construction.

