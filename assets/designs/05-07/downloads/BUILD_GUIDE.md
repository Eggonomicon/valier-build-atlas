# 05-07 - Public garden: detailed exterior assembly

5,237 final source-model positions, partitioned into 8 disjoint stages. This is an assembly guide for the saved exterior study, not a complete functional building or game-tested schematic. The PDIM is not created; no construction is recorded.

## Setout and coordinates

Local footprint X0..63, Z0..63; northwest origin, +X east and +Z south. Civil Y-1..+9, with future walkable surface S at civil0. World block Y=S+civilY; world anchor, S, rotation and dimension ID remain blank.

City reservation X598..661, Z406..469. City X=598+local X; city Z=406+local Z. Stake local corners (0,0), (63,0), (0,63), (63,63); these are last block centers, not outer edge coordinates.

## Block palette and gathering stock

![Role palette](block-palette.png)

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| ExtraUtilities:greenscreen | 0 | 2 | 0 stacks + 2 | W |
| ExtraUtilities:greenscreen | 9 | 2 | 0 stacks + 2 | N |
| Ztones:tile.korpBlock | 2 | 162 | 2 stacks + 34 | K |
| Ztones:tile.laveBlock | 12 | 1,629 | 25 stacks + 29 | L |
| minecraft:dirt | 0 | 100 | 1 stacks + 36 | E |
| minecraft:glass | 0 | 49 | 0 stacks + 49 | Q |
| minecraft:leaves | 0 | 628 | 9 stacks + 52 | V |
| minecraft:log | 0 | 16 | 0 stacks + 16 | T |
| minecraft:stone_slab | 0 | 48 | 0 stacks + 48 | s |
| minecraft:stonebrick | 0 | 2,601 | 40 stacks + 41 | F |

Counts are inventory items, not crafting ingredients. G/Q and s/S aggregate by inventory identity; placed states remain separate. E=dirt0; T=vertical oak log0; V=oak leaf placed4/item0; Q=dry glass0. New proposed bindings do not alter the source geometry. Recipe evidence and static vanilla inspection: ../../evidence/PALETTE_EVIDENCE.md.

## Geometry and assembly milestones

![Construction progress](construction-progress.png)

Facades are nearest-hit projections, not flat wall placement grids. Construct from layers and exact depth coordinates. Diagonals are stepped full cubes; no shaped-block NBT.

Civil service stub U-05-07 is city X626..633, Z393..402, capped at Z402. Its reserve is [626, 403, 633, 405]. Keep the capped civil interface and access intact. This exterior guide supplies no new pipe/cable route, hatch, floor penetration or capacity.

## Numbered construction stages

Every final cell appears exactly once. Bounds locate the work; never fill their whole volume. Work the occupied Y levels lowest first.

### S01 - Base, floor and ground-level frame / civil Y-1..+0

4,274 new positions; 4,274 cumulative. Local X0..63, Z0..63; civil Y-1..+0. Roles: F=2,601, K=130, L=1,495, s=48.

1. Set out the full footprint and place only the base/floor and ground-frame cells assigned to this step. Keep model openings and stair apertures empty.
2. Check each slab symbol: s occupies the lower half (placed meta0); S occupies the upper half (placed meta8). Both consume ordinary stone slab inventory0. Keep half-steps separate; do not make double slabs.
3. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.korpBlock | 2 | 130 | 2 stacks + 2 | K |
| Ztones:tile.laveBlock | 12 | 1,495 | 23 stacks + 23 | L |
| minecraft:stone_slab | 0 | 48 | 0 stacks + 48 | s |
| minecraft:stonebrick | 0 | 2,601 | 40 stacks + 41 | F |

Exact new cells: stages/S01-runs.csv.gz. Stage stock: stages/S01-stock.csv. Leave completion checks blank until actually built.

### S02 - Ascending structural lift / civil Y+1..+4

158 new positions; 4,432 cumulative. Local X4..57, Z7..56; civil Y+1..+4. Roles: K=30, L=128.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.korpBlock | 2 | 30 | 0 stacks + 30 | K |
| Ztones:tile.laveBlock | 12 | 128 | 2 stacks + 0 | L |

Exact new cells: stages/S02-runs.csv.gz. Stage stock: stages/S02-stock.csv. Leave completion checks blank until actually built.

### S03 - Ascending structural lift / civil Y+5..+6

8 new positions; 4,440 cumulative. Local X4..59, Z23..40; civil Y+5..+6. Roles: K=2, L=6.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.korpBlock | 2 | 2 | 0 stacks + 2 | K |
| Ztones:tile.laveBlock | 12 | 6 | 0 stacks + 6 | L |

Exact new cells: stages/S03-runs.csv.gz. Stage stock: stages/S03-stock.csv. Leave completion checks blank until actually built.

### S04 - Cyan trim and white fixtures / civil Y+1..+5

4 new positions; 4,444 cumulative. Local X4..59, Z23..40; civil Y+1..+5. Roles: N=2, W=2.

1. Place the cyan trim and white fixtures at the listed positions after the frame/glazing. These are individual blocks; do not turn every edge into a continuous cyan strip or assume the counts establish light coverage.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| ExtraUtilities:greenscreen | 0 | 2 | 0 stacks + 2 | W |
| ExtraUtilities:greenscreen | 9 | 2 | 0 stacks + 2 | N |

Exact new cells: stages/S04-runs.csv.gz. Stage stock: stages/S04-stock.csv. Leave completion checks blank until actually built.

### S05 - Dry glass basin fill / civil Y+0..+0

49 new positions; 4,493 cumulative. Local X17..23, Z9..15; civil Y+0..+0. Roles: Q=49.

1. Fill Q positions with glass0 for the chosen dry ornamental basin. No water sources, fluid simulation or bucket quantities are part of this guide.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| minecraft:glass | 0 | 49 | 0 stacks + 49 | Q |

Exact new cells: stages/S05-runs.csv.gz. Stage stock: stages/S05-stock.csv. Leave completion checks blank until actually built.

### S06 - Planting-bed dirt / civil Y+0..+0

100 new positions; 4,593 cumulative. Local X8..55, Z8..55; civil Y+0..+0. Roles: E=100.

1. Fill only E positions with dirt0 inside the modeled beds. Do not backfill open paths, bench gaps or the whole planter envelope.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| minecraft:dirt | 0 | 100 | 1 stacks + 36 | E |

Exact new cells: stages/S06-runs.csv.gz. Stage stock: stages/S06-stock.csv. Leave completion checks blank until actually built.

### S07 - Upright decorative oak trunks / civil Y+1..+4

16 new positions; 4,609 cumulative. Local X10..53, Z10..53; civil Y+1..+4. Roles: T=16.

1. Place T as oak log0 with the end grain up/down. The trunks are decorative built forms, not growing trees or a working tree-farm design.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| minecraft:log | 0 | 16 | 0 stacks + 16 | T |

Exact new cells: stages/S07-runs.csv.gz. Stage stock: stages/S07-stock.csv. Leave completion checks blank until actually built.

### S08 - Player-placed oak foliage / civil Y+1..+9

628 new positions; 5,237 cumulative. Local X8..55, Z8..55; civil Y+1..+9. Roles: V=628.

1. Place V using oak leaf inventory0; the inspected vanilla ItemLeaves path adds persistence flag4. Match every foliage cell, then inspect the actual placed leaves in the target game. No growth or crop behavior is claimed.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| minecraft:leaves | 0 | 628 | 9 stacks + 52 | V |

Exact new cells: stages/S08-runs.csv.gz. Stage stock: stages/S08-stock.csv. Leave completion checks blank until actually built.

## Complete level schedule

| Civil Y | Positions | Role counts | Stages |
| --- | --- | --- | --- |
| -1 | 4096 | F:2601 L:1495 | S01 |
| +0 | 327 | E:100 K:130 Q:49 s:48 | S01 S05 S06 |
| +1 | 254 | K:24 L:128 N:2 T:4 V:96 | S02 S04 S07 S08 |
| +2 | 102 | K:2 T:4 V:96 | S02 S07 S08 |
| +3 | 6 | K:2 T:4 | S02 S07 |
| +4 | 6 | K:2 T:4 | S02 S07 |
| +5 | 104 | K:2 V:100 W:2 | S03 S04 S08 |
| +6 | 106 | L:6 V:100 | S03 S08 |
| +7 | 100 | V:100 | S08 |
| +8 | 100 | V:100 | S08 |
| +9 | 36 | V:36 | S08 |

## Finish and validation

Compare all four facades and roof plan with the exact source model. Reconcile roles, placed states and inventory separately. Check slabs, upright logs and foliage persistence. Keep civil accesses and capped utility interfaces. Actual collision, roof protection, lighting, recipes, machine fit and accessible interiors remain open. No native schematic/import or operating plant is supplied. Use completion-record.csv only after actual construction.

