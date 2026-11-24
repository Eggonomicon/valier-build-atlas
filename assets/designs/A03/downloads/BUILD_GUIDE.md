# A03 - Entry forecourt and canopy: detailed exterior assembly

762 final source-model positions, partitioned into 6 disjoint stages. This is an assembly guide for the saved exterior study, not a complete functional building or game-tested schematic. The PDIM is not created; no construction is recorded.

## Setout and coordinates

Local footprint X0..23, Z0..15; northwest origin, +X east and +Z south. Civil Y-1..+8, with future walkable surface S at civil0. World block Y=S+civilY; world anchor, S, rotation and dimension ID remain blank.

Study for a future building approach; do not superimpose on existing access stairs or roads.

## Block palette and gathering stock

![Role palette](block-palette.png)

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| ExtraUtilities:greenscreen | 9 | 16 | 0 stacks + 16 | N |
| Ztones:tile.korpBlock | 2 | 100 | 1 stacks + 36 | K |
| Ztones:tile.laveBlock | 12 | 190 | 2 stacks + 62 | L |
| minecraft:dirt | 0 | 24 | 0 stacks + 24 | E |
| minecraft:leaves | 0 | 48 | 0 stacks + 48 | V |
| minecraft:stonebrick | 0 | 384 | 6 stacks + 0 | F |

Counts are inventory items, not crafting ingredients. G/Q and s/S aggregate by inventory identity; placed states remain separate. E=dirt0; T=vertical oak log0; V=oak leaf placed4/item0; Q=dry glass0. New proposed bindings do not alter the source geometry. Recipe evidence and static vanilla inspection: ../../evidence/PALETTE_EVIDENCE.md.

## Geometry and assembly milestones

![Construction progress](construction-progress.png)

Facades are nearest-hit projections, not flat wall placement grids. Construct from layers and exact depth coordinates. Diagonals are stepped full cubes; no shaped-block NBT.

## Numbered construction stages

Every final cell appears exactly once. Bounds locate the work; never fill their whole volume. Work the occupied Y levels lowest first.

### S01 - Base, floor and ground-level frame / civil Y-1..+0

428 new positions; 428 cumulative. Local X0..23, Z0..15; civil Y-1..+0. Roles: F=384, K=44.

1. Set out the full footprint and place only the base/floor and ground-frame cells assigned to this step. Keep model openings and stair apertures empty.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.korpBlock | 2 | 44 | 0 stacks + 44 | K |
| minecraft:stonebrick | 0 | 384 | 6 stacks + 0 | F |

Exact new cells: stages/S01-runs.csv.gz. Stage stock: stages/S01-stock.csv. Leave completion checks blank until actually built.

### S02 - Ascending structural lift / civil Y+1..+4

68 new positions; 496 cumulative. Local X1..22, Z1..14; civil Y+1..+4. Roles: K=32, L=36.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.korpBlock | 2 | 32 | 0 stacks + 32 | K |
| Ztones:tile.laveBlock | 12 | 36 | 0 stacks + 36 | L |

Exact new cells: stages/S02-runs.csv.gz. Stage stock: stages/S02-stock.csv. Leave completion checks blank until actually built.

### S03 - Ascending structural lift / civil Y+5..+8

178 new positions; 674 cumulative. Local X1..22, Z1..7; civil Y+5..+8. Roles: K=24, L=154.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.korpBlock | 2 | 24 | 0 stacks + 24 | K |
| Ztones:tile.laveBlock | 12 | 154 | 2 stacks + 26 | L |

Exact new cells: stages/S03-runs.csv.gz. Stage stock: stages/S03-stock.csv. Leave completion checks blank until actually built.

### S04 - Cyan trim and white fixtures / civil Y+7..+7

16 new positions; 690 cumulative. Local X4..19, Z5..5; civil Y+7..+7. Roles: N=16.

1. Place the cyan trim and white fixtures at the listed positions after the frame/glazing. These are individual blocks; do not turn every edge into a continuous cyan strip or assume the counts establish light coverage.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| ExtraUtilities:greenscreen | 9 | 16 | 0 stacks + 16 | N |

Exact new cells: stages/S04-runs.csv.gz. Stage stock: stages/S04-stock.csv. Leave completion checks blank until actually built.

### S05 - Planting-bed dirt / civil Y+0..+0

24 new positions; 714 cumulative. Local X2..21, Z11..13; civil Y+0..+0. Roles: E=24.

1. Fill only E positions with dirt0 inside the modeled beds. Do not backfill open paths, bench gaps or the whole planter envelope.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| minecraft:dirt | 0 | 24 | 0 stacks + 24 | E |

Exact new cells: stages/S05-runs.csv.gz. Stage stock: stages/S05-stock.csv. Leave completion checks blank until actually built.

### S06 - Player-placed oak foliage / civil Y+1..+2

48 new positions; 762 cumulative. Local X2..21, Z11..13; civil Y+1..+2. Roles: V=48.

1. Place V using oak leaf inventory0; the inspected vanilla ItemLeaves path adds persistence flag4. Match every foliage cell, then inspect the actual placed leaves in the target game. No growth or crop behavior is claimed.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| minecraft:leaves | 0 | 48 | 0 stacks + 48 | V |

Exact new cells: stages/S06-runs.csv.gz. Stage stock: stages/S06-stock.csv. Leave completion checks blank until actually built.

## Complete level schedule

| Civil Y | Positions | Role counts | Stages |
| --- | --- | --- | --- |
| -1 | 384 | F:384 | S01 |
| +0 | 68 | E:24 K:44 | S01 S05 |
| +1 | 68 | K:8 L:36 V:24 | S02 S06 |
| +2 | 32 | K:8 V:24 | S02 S06 |
| +3 | 8 | K:8 | S02 |
| +4 | 8 | K:8 | S02 |
| +5 | 8 | K:8 | S03 |
| +6 | 8 | K:8 | S03 |
| +7 | 24 | K:8 N:16 | S03 S04 |
| +8 | 154 | L:154 | S03 |

## Finish and validation

Compare all four facades and roof plan with the exact source model. Reconcile roles, placed states and inventory separately. Check slabs, upright logs and foliage persistence. Keep civil accesses and capped utility interfaces. Actual collision, roof protection, lighting, recipes, machine fit and accessible interiors remain open. No native schematic/import or operating plant is supplied. Use completion-record.csv only after actual construction.

