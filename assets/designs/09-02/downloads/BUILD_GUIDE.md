# 09-02 - Bio reserves: detailed exterior assembly

4,660 final source-model positions, partitioned into 7 disjoint stages. This is an assembly guide for the saved exterior study, not a complete functional building or game-tested schematic. The PDIM is not created; no construction is recorded.

## Setout and coordinates

Local footprint X0..63, Z0..63; northwest origin, +X east and +Z south. Civil Y-1..+9, with future walkable surface S at civil0. World block Y=S+civilY; world anchor, S, rotation and dimension ID remain blank.

City reservation X118..181, Z790..853. City X=118+local X; city Z=790+local Z. Stake local corners (0,0), (63,0), (0,63), (63,63); these are last block centers, not outer edge coordinates.

## Block palette and gathering stock

![Role palette](block-palette.png)

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| ExtraUtilities:greenscreen | 9 | 16 | 0 stacks + 16 | N |
| Ztones:tile.korpBlock | 2 | 48 | 0 stacks + 48 | K |
| Ztones:tile.laveBlock | 12 | 1,623 | 25 stacks + 23 | L |
| minecraft:dirt | 0 | 50 | 0 stacks + 50 | E |
| minecraft:leaves | 0 | 314 | 4 stacks + 58 | V |
| minecraft:log | 0 | 8 | 0 stacks + 8 | T |
| minecraft:stonebrick | 0 | 2,601 | 40 stacks + 41 | F |

Counts are inventory items, not crafting ingredients. G/Q and s/S aggregate by inventory identity; placed states remain separate. E=dirt0; T=vertical oak log0; V=oak leaf placed4/item0; Q=dry glass0. New proposed bindings do not alter the source geometry. Recipe evidence and static vanilla inspection: ../../evidence/PALETTE_EVIDENCE.md.

## Geometry and assembly milestones

![Construction progress](construction-progress.png)

Facades are nearest-hit projections, not flat wall placement grids. Construct from layers and exact depth coordinates. Diagonals are stepped full cubes; no shaped-block NBT.

Civil service stub U-09-02 is city X146..153, Z777..786, capped at Z786. Its reserve is [146, 787, 153, 789]. Keep the capped civil interface and access intact. This exterior guide supplies no new pipe/cable route, hatch, floor penetration or capacity.

## Numbered construction stages

Every final cell appears exactly once. Bounds locate the work; never fill their whole volume. Work the occupied Y levels lowest first.

### S01 - Base, floor and ground-level frame / civil Y-1..+0

4,160 new positions; 4,160 cumulative. Local X0..63, Z0..63; civil Y-1..+0. Roles: F=2,601, K=48, L=1,511.

1. Set out the full footprint and place only the base/floor and ground-frame cells assigned to this step. Keep model openings and stair apertures empty.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.korpBlock | 2 | 48 | 0 stacks + 48 | K |
| Ztones:tile.laveBlock | 12 | 1,511 | 23 stacks + 39 | L |
| minecraft:stonebrick | 0 | 2,601 | 40 stacks + 41 | F |

Exact new cells: stages/S01-runs.csv.gz. Stage stock: stages/S01-stock.csv. Leave completion checks blank until actually built.

### S02 - Ascending structural lift / civil Y+1..+4

96 new positions; 4,256 cumulative. Local X4..59, Z4..59; civil Y+1..+4. Roles: L=96.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.laveBlock | 12 | 96 | 1 stacks + 32 | L |

Exact new cells: stages/S02-runs.csv.gz. Stage stock: stages/S02-stock.csv. Leave completion checks blank until actually built.

### S03 - Ascending structural lift / civil Y+5..+5

16 new positions; 4,272 cumulative. Local X4..59, Z4..59; civil Y+5..+5. Roles: L=16.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.laveBlock | 12 | 16 | 0 stacks + 16 | L |

Exact new cells: stages/S03-runs.csv.gz. Stage stock: stages/S03-stock.csv. Leave completion checks blank until actually built.

### S04 - Cyan trim and white fixtures / civil Y+3..+3

16 new positions; 4,288 cumulative. Local X4..59, Z4..59; civil Y+3..+3. Roles: N=16.

1. Place the cyan trim and white fixtures at the listed positions after the frame/glazing. These are individual blocks; do not turn every edge into a continuous cyan strip or assume the counts establish light coverage.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| ExtraUtilities:greenscreen | 9 | 16 | 0 stacks + 16 | N |

Exact new cells: stages/S04-runs.csv.gz. Stage stock: stages/S04-stock.csv. Leave completion checks blank until actually built.

### S05 - Planting-bed dirt / civil Y+0..+0

50 new positions; 4,338 cumulative. Local X8..55, Z8..55; civil Y+0..+0. Roles: E=50.

1. Fill only E positions with dirt0 inside the modeled beds. Do not backfill open paths, bench gaps or the whole planter envelope.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| minecraft:dirt | 0 | 50 | 0 stacks + 50 | E |

Exact new cells: stages/S05-runs.csv.gz. Stage stock: stages/S05-stock.csv. Leave completion checks blank until actually built.

### S06 - Upright decorative oak trunks / civil Y+1..+4

8 new positions; 4,346 cumulative. Local X10..53, Z10..53; civil Y+1..+4. Roles: T=8.

1. Place T as oak log0 with the end grain up/down. The trunks are decorative built forms, not growing trees or a working tree-farm design.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| minecraft:log | 0 | 8 | 0 stacks + 8 | T |

Exact new cells: stages/S06-runs.csv.gz. Stage stock: stages/S06-stock.csv. Leave completion checks blank until actually built.

### S07 - Player-placed oak foliage / civil Y+1..+9

314 new positions; 4,660 cumulative. Local X8..55, Z8..55; civil Y+1..+9. Roles: V=314.

1. Place V using oak leaf inventory0; the inspected vanilla ItemLeaves path adds persistence flag4. Match every foliage cell, then inspect the actual placed leaves in the target game. No growth or crop behavior is claimed.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| minecraft:leaves | 0 | 314 | 4 stacks + 58 | V |

Exact new cells: stages/S07-runs.csv.gz. Stage stock: stages/S07-stock.csv. Leave completion checks blank until actually built.

## Complete level schedule

| Civil Y | Positions | Role counts | Stages |
| --- | --- | --- | --- |
| -1 | 4096 | F:2601 L:1495 | S01 |
| +0 | 114 | E:50 K:48 L:16 | S01 S05 |
| +1 | 114 | L:64 T:2 V:48 | S02 S06 S07 |
| +2 | 66 | L:16 T:2 V:48 | S02 S06 S07 |
| +3 | 18 | N:16 T:2 | S04 S06 |
| +4 | 18 | L:16 T:2 | S02 S06 |
| +5 | 66 | L:16 V:50 | S03 S07 |
| +6 | 50 | V:50 | S07 |
| +7 | 50 | V:50 | S07 |
| +8 | 50 | V:50 | S07 |
| +9 | 18 | V:18 | S07 |

## Finish and validation

Compare all four facades and roof plan with the exact source model. Reconcile roles, placed states and inventory separately. Check slabs, upright logs and foliage persistence. Keep civil accesses and capped utility interfaces. Actual collision, roof protection, lighting, recipes, machine fit and accessible interiors remain open. No native schematic/import or operating plant is supplied. Use completion-record.csv only after actual construction.

