# 02-04 - LV circuits: detailed exterior assembly

17,873 final source-model positions, partitioned into 12 disjoint stages. This is an assembly guide for the saved exterior study, not a complete functional building or game-tested schematic. The PDIM is not created; no construction is recorded.

## Setout and coordinates

Local footprint X0..63, Z0..63; northwest origin, +X east and +Z south. Civil Y-1..+32, with future walkable surface S at civil0. World block Y=S+civilY; world anchor, S, rotation and dimension ID remain blank.

City reservation X310..373, Z118..181. City X=310+local X; city Z=118+local Z. Stake local corners (0,0), (63,0), (0,63), (63,63); these are last block centers, not outer edge coordinates.

## Block palette and gathering stock

![Role palette](block-palette.png)

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| ExtraUtilities:greenscreen | 9 | 208 | 3 stacks + 16 | N |
| Ztones:tile.bittBlock | 0 | 6,341 | 99 stacks + 5 | B |
| Ztones:tile.korpBlock | 2 | 1,102 | 17 stacks + 14 | K |
| Ztones:tile.laveBlock | 12 | 3,958 | 61 stacks + 54 | L |
| minecraft:glass | 0 | 2,168 | 33 stacks + 56 | G |
| minecraft:stonebrick | 0 | 4,096 | 64 stacks + 0 | F |

Counts are inventory items, not crafting ingredients. G/Q and s/S aggregate by inventory identity; placed states remain separate. E=dirt0; T=vertical oak log0; V=oak leaf placed4/item0; Q=dry glass0. New proposed bindings do not alter the source geometry. Recipe evidence and static vanilla inspection: ../../evidence/PALETTE_EVIDENCE.md.

## Geometry and assembly milestones

![Construction progress](construction-progress.png)

Facades are nearest-hit projections, not flat wall placement grids. Construct from layers and exact depth coordinates. Diagonals are stepped full cubes; no shaped-block NBT.

### Clear facade runs at civil Y0..2

Only the listed skin planes are tested; this is not an interior route or door-fit check. Plane coordinates are Z for north/south and X for west/east.

| Face | Skin planes | Run axis | Clear inclusive runs |
| --- | --- | --- | --- |
| north | 0/1/2 | X | 28..35 |
| south | 61/62/63 | X | 28..35 |
| west | 0/1/2 | Z | 30..33 |
| east | 61/62/63 | Z | 30..33 |

Civil service stub U-02-04 is city X338..345, Z105..114, capped at Z114. Its reserve is [338, 115, 345, 117]. Keep the capped civil interface and access intact. This exterior guide supplies no new pipe/cable route, hatch, floor penetration or capacity.

## Numbered construction stages

Every final cell appears exactly once. Bounds locate the work; never fill their whole volume. Work the occupied Y levels lowest first.

### S01 - Base, floor and ground-level frame / civil Y-1..+0

4,324 new positions; 4,324 cumulative. Local X0..63, Z0..63; civil Y-1..+0. Roles: F=4,096, K=16, L=212.

1. Set out the full footprint and place only the base/floor and ground-frame cells assigned to this step. Keep model openings and stair apertures empty.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.korpBlock | 2 | 16 | 0 stacks + 16 | K |
| Ztones:tile.laveBlock | 12 | 212 | 3 stacks + 20 | L |
| minecraft:stonebrick | 0 | 4,096 | 64 stacks + 0 | F |

Exact new cells: stages/S01-runs.csv.gz. Stage stock: stages/S01-stock.csv. Leave completion checks blank until actually built.

### S02 - Ascending structural lift / civil Y+1..+4

1,520 new positions; 5,844 cumulative. Local X0..63, Z0..63; civil Y+1..+4. Roles: B=598, K=86, L=836.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.bittBlock | 0 | 598 | 9 stacks + 22 | B |
| Ztones:tile.korpBlock | 2 | 86 | 1 stacks + 22 | K |
| Ztones:tile.laveBlock | 12 | 836 | 13 stacks + 4 | L |

Exact new cells: stages/S02-runs.csv.gz. Stage stock: stages/S02-stock.csv. Leave completion checks blank until actually built.

### S03 - Ascending structural lift / civil Y+5..+8

464 new positions; 6,308 cumulative. Local X0..63, Z0..63; civil Y+5..+8. Roles: B=112, K=96, L=256.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.bittBlock | 0 | 112 | 1 stacks + 48 | B |
| Ztones:tile.korpBlock | 2 | 96 | 1 stacks + 32 | K |
| Ztones:tile.laveBlock | 12 | 256 | 4 stacks + 0 | L |

Exact new cells: stages/S03-runs.csv.gz. Stage stock: stages/S03-stock.csv. Leave completion checks blank until actually built.

### S04 - Ascending structural lift / civil Y+9..+12

664 new positions; 6,972 cumulative. Local X0..63, Z0..63; civil Y+9..+12. Roles: B=280, K=128, L=256.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.bittBlock | 0 | 280 | 4 stacks + 24 | B |
| Ztones:tile.korpBlock | 2 | 128 | 2 stacks + 0 | K |
| Ztones:tile.laveBlock | 12 | 256 | 4 stacks + 0 | L |

Exact new cells: stages/S04-runs.csv.gz. Stage stock: stages/S04-stock.csv. Leave completion checks blank until actually built.

### S05 - Ascending structural lift / civil Y+13..+16

864 new positions; 7,836 cumulative. Local X0..63, Z0..63; civil Y+13..+16. Roles: B=448, K=160, L=256.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.bittBlock | 0 | 448 | 7 stacks + 0 | B |
| Ztones:tile.korpBlock | 2 | 160 | 2 stacks + 32 | K |
| Ztones:tile.laveBlock | 12 | 256 | 4 stacks + 0 | L |

Exact new cells: stages/S05-runs.csv.gz. Stage stock: stages/S05-stock.csv. Leave completion checks blank until actually built.

### S06 - Ascending structural lift / civil Y+17..+20

1,280 new positions; 9,116 cumulative. Local X0..63, Z0..63; civil Y+17..+20. Roles: B=488, K=104, L=688.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.bittBlock | 0 | 488 | 7 stacks + 40 | B |
| Ztones:tile.korpBlock | 2 | 104 | 1 stacks + 40 | K |
| Ztones:tile.laveBlock | 12 | 688 | 10 stacks + 48 | L |

Exact new cells: stages/S06-runs.csv.gz. Stage stock: stages/S06-stock.csv. Leave completion checks blank until actually built.

### S07 - Ascending structural lift / civil Y+21..+24

2,784 new positions; 11,900 cumulative. Local X0..63, Z0..63; civil Y+21..+24. Roles: B=1,748, K=336, L=700.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.bittBlock | 0 | 1,748 | 27 stacks + 20 | B |
| Ztones:tile.korpBlock | 2 | 336 | 5 stacks + 16 | K |
| Ztones:tile.laveBlock | 12 | 700 | 10 stacks + 60 | L |

Exact new cells: stages/S07-runs.csv.gz. Stage stock: stages/S07-stock.csv. Leave completion checks blank until actually built.

### S08 - Ascending structural lift / civil Y+25..+28

3,183 new positions; 15,083 cumulative. Local X12..55, Z0..63; civil Y+25..+28. Roles: B=2,493, K=176, L=514.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.bittBlock | 0 | 2,493 | 38 stacks + 61 | B |
| Ztones:tile.korpBlock | 2 | 176 | 2 stacks + 48 | K |
| Ztones:tile.laveBlock | 12 | 514 | 8 stacks + 2 | L |

Exact new cells: stages/S08-runs.csv.gz. Stage stock: stages/S08-stock.csv. Leave completion checks blank until actually built.

### S09 - Ascending structural lift / civil Y+29..+32

414 new positions; 15,497 cumulative. Local X40..55, Z10..24; civil Y+29..+32. Roles: B=174, L=240.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.bittBlock | 0 | 174 | 2 stacks + 46 | B |
| Ztones:tile.laveBlock | 12 | 240 | 3 stacks + 48 | L |

Exact new cells: stages/S09-runs.csv.gz. Stage stock: stages/S09-stock.csv. Leave completion checks blank until actually built.

### S10 - Glazing infill / civil Y+5..+11

1,368 new positions; 16,865 cumulative. Local X2..61, Z2..61; civil Y+5..+11. Roles: G=1,368.

1. Fit the listed glass cells into the completed frame. This includes any roof or clerestory glazing at these levels. Use the depth coordinates, not a flat facade projection.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| minecraft:glass | 0 | 1,368 | 21 stacks + 24 | G |

Exact new cells: stages/S10-runs.csv.gz. Stage stock: stages/S10-stock.csv. Leave completion checks blank until actually built.

### S11 - Glazing infill / civil Y+15..+18

800 new positions; 17,665 cumulative. Local X2..61, Z2..61; civil Y+15..+18. Roles: G=800.

1. Fit the listed glass cells into the completed frame. This includes any roof or clerestory glazing at these levels. Use the depth coordinates, not a flat facade projection.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| minecraft:glass | 0 | 800 | 12 stacks + 32 | G |

Exact new cells: stages/S11-runs.csv.gz. Stage stock: stages/S11-stock.csv. Leave completion checks blank until actually built.

### S12 - Cyan trim and white fixtures / civil Y+16..+16

208 new positions; 17,873 cumulative. Local X0..63, Z0..63; civil Y+16..+16. Roles: N=208.

1. Place the cyan trim and white fixtures at the listed positions after the frame/glazing. These are individual blocks; do not turn every edge into a continuous cyan strip or assume the counts establish light coverage.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| ExtraUtilities:greenscreen | 9 | 208 | 3 stacks + 16 | N |

Exact new cells: stages/S12-runs.csv.gz. Stage stock: stages/S12-stock.csv. Leave completion checks blank until actually built.

## Complete level schedule

| Civil Y | Positions | Role counts | Stages |
| --- | --- | --- | --- |
| -1 | 4096 | F:4096 | S01 |
| +0 | 228 | K:16 L:212 | S01 |
| +1 | 644 | L:644 | S02 |
| +2 | 292 | B:212 K:16 L:64 | S02 |
| +3 | 292 | B:212 K:16 L:64 | S02 |
| +4 | 292 | B:174 K:54 L:64 | S02 |
| +5 | 300 | B:28 G:184 K:24 L:64 | S03 S10 |
| +6 | 300 | B:28 G:184 K:24 L:64 | S03 S10 |
| +7 | 316 | B:28 G:200 K:24 L:64 | S03 S10 |
| +8 | 316 | B:28 G:200 K:24 L:64 | S03 S10 |
| +9 | 316 | B:28 G:200 K:24 L:64 | S04 S10 |
| +10 | 316 | B:28 G:200 K:24 L:64 | S04 S10 |
| +11 | 316 | B:28 G:200 K:24 L:64 | S04 S10 |
| +12 | 316 | B:196 K:56 L:64 | S04 |
| +13 | 316 | B:196 K:56 L:64 | S05 |
| +14 | 316 | B:196 K:56 L:64 | S05 |
| +15 | 316 | B:28 G:200 K:24 L:64 | S05 S11 |
| +16 | 524 | B:28 G:200 K:24 L:64 N:208 | S05 S11 S12 |
| +17 | 316 | B:28 G:200 K:24 L:64 | S06 S11 |
| +18 | 316 | B:28 G:200 K:24 L:64 | S06 S11 |
| +19 | 316 | B:196 K:56 L:64 | S06 |
| +20 | 732 | B:236 L:496 | S06 |
| +21 | 316 | B:236 K:16 L:64 | S07 |
| +22 | 316 | K:16 L:300 | S07 |
| +23 | 1816 | B:1328 K:152 L:336 | S07 |
| +24 | 336 | B:184 K:152 | S07 |
| +25 | 1280 | B:892 K:88 L:300 | S08 |
| +26 | 272 | B:184 K:88 | S08 |
| +27 | 1573 | B:1359 L:214 | S08 |
| +28 | 58 | B:58 | S08 |
| +29 | 58 | B:58 | S09 |
| +30 | 58 | B:58 | S09 |
| +31 | 58 | B:58 | S09 |
| +32 | 240 | L:240 | S09 |

## Finish and validation

Compare all four facades and roof plan with the exact source model. Reconcile roles, placed states and inventory separately. Check slabs, upright logs and foliage persistence. Keep civil accesses and capped utility interfaces. Actual collision, roof protection, lighting, recipes, machine fit and accessible interiors remain open. No native schematic/import or operating plant is supplied. Use completion-record.csv only after actual construction.

