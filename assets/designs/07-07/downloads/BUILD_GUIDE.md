# 07-07 - LuV energy: detailed exterior assembly

20,294 final source-model positions, partitioned into 16 disjoint stages. This is an assembly guide for the saved exterior study, not a complete functional building or game-tested schematic. The PDIM is not created; no construction is recorded.

## Setout and coordinates

Local footprint X0..63, Z0..63; northwest origin, +X east and +Z south. Civil Y-1..+47, with future walkable surface S at civil0. World block Y=S+civilY; world anchor, S, rotation and dimension ID remain blank.

City reservation X598..661, Z598..661. City X=598+local X; city Z=598+local Z. Stake local corners (0,0), (63,0), (0,63), (63,63); these are last block centers, not outer edge coordinates.

## Block palette and gathering stock

![Role palette](block-palette.png)

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| ExtraUtilities:greenscreen | 9 | 248 | 3 stacks + 56 | N |
| Ztones:tile.bittBlock | 0 | 9,218 | 144 stacks + 2 | B |
| Ztones:tile.korpBlock | 2 | 2,348 | 36 stacks + 44 | K |
| Ztones:tile.laveBlock | 12 | 3,584 | 56 stacks + 0 | L |
| minecraft:glass | 0 | 800 | 12 stacks + 32 | G |
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

Civil service stub U-07-07 is city X626..633, Z585..594, capped at Z594. Its reserve is [626, 595, 633, 597]. Keep the capped civil interface and access intact. This exterior guide supplies no new pipe/cable route, hatch, floor penetration or capacity.

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

1,392 new positions; 5,716 cumulative. Local X0..63, Z0..63; civil Y+1..+4. Roles: B=598, K=86, L=708.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.bittBlock | 0 | 598 | 9 stacks + 22 | B |
| Ztones:tile.korpBlock | 2 | 86 | 1 stacks + 22 | K |
| Ztones:tile.laveBlock | 12 | 708 | 11 stacks + 4 | L |

Exact new cells: stages/S02-runs.csv.gz. Stage stock: stages/S02-stock.csv. Leave completion checks blank until actually built.

### S03 - Ascending structural lift / civil Y+5..+8

1,104 new positions; 6,820 cumulative. Local X0..63, Z0..63; civil Y+5..+8. Roles: B=756, K=220, L=128.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.bittBlock | 0 | 756 | 11 stacks + 52 | B |
| Ztones:tile.korpBlock | 2 | 220 | 3 stacks + 28 | K |
| Ztones:tile.laveBlock | 12 | 128 | 2 stacks + 0 | L |

Exact new cells: stages/S03-runs.csv.gz. Stage stock: stages/S03-stock.csv. Leave completion checks blank until actually built.

### S04 - Ascending structural lift / civil Y+9..+12

1,136 new positions; 7,956 cumulative. Local X0..63, Z0..63; civil Y+9..+12. Roles: B=784, K=224, L=128.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.bittBlock | 0 | 784 | 12 stacks + 16 | B |
| Ztones:tile.korpBlock | 2 | 224 | 3 stacks + 32 | K |
| Ztones:tile.laveBlock | 12 | 128 | 2 stacks + 0 | L |

Exact new cells: stages/S04-runs.csv.gz. Stage stock: stages/S04-stock.csv. Leave completion checks blank until actually built.

### S05 - Ascending structural lift / civil Y+13..+16

1,136 new positions; 9,092 cumulative. Local X0..63, Z0..63; civil Y+13..+16. Roles: B=784, K=224, L=128.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.bittBlock | 0 | 784 | 12 stacks + 16 | B |
| Ztones:tile.korpBlock | 2 | 224 | 3 stacks + 32 | K |
| Ztones:tile.laveBlock | 12 | 128 | 2 stacks + 0 | L |

Exact new cells: stages/S05-runs.csv.gz. Stage stock: stages/S05-stock.csv. Leave completion checks blank until actually built.

### S06 - Ascending structural lift / civil Y+17..+20

1,136 new positions; 10,228 cumulative. Local X0..63, Z0..63; civil Y+17..+20. Roles: B=784, K=224, L=128.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.bittBlock | 0 | 784 | 12 stacks + 16 | B |
| Ztones:tile.korpBlock | 2 | 224 | 3 stacks + 32 | K |
| Ztones:tile.laveBlock | 12 | 128 | 2 stacks + 0 | L |

Exact new cells: stages/S06-runs.csv.gz. Stage stock: stages/S06-stock.csv. Leave completion checks blank until actually built.

### S07 - Ascending structural lift / civil Y+21..+24

1,136 new positions; 11,364 cumulative. Local X0..63, Z0..63; civil Y+21..+24. Roles: B=784, K=224, L=128.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.bittBlock | 0 | 784 | 12 stacks + 16 | B |
| Ztones:tile.korpBlock | 2 | 224 | 3 stacks + 32 | K |
| Ztones:tile.laveBlock | 12 | 128 | 2 stacks + 0 | L |

Exact new cells: stages/S07-runs.csv.gz. Stage stock: stages/S07-stock.csv. Leave completion checks blank until actually built.

### S08 - Ascending structural lift / civil Y+25..+28

536 new positions; 11,900 cumulative. Local X0..63, Z0..63; civil Y+25..+28. Roles: B=280, K=128, L=128.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.bittBlock | 0 | 280 | 4 stacks + 24 | B |
| Ztones:tile.korpBlock | 2 | 128 | 2 stacks + 0 | K |
| Ztones:tile.laveBlock | 12 | 128 | 2 stacks + 0 | L |

Exact new cells: stages/S08-runs.csv.gz. Stage stock: stages/S08-stock.csv. Leave completion checks blank until actually built.

### S09 - Ascending structural lift / civil Y+29..+32

1,384 new positions; 13,284 cumulative. Local X0..63, Z0..63; civil Y+29..+32. Roles: B=696, K=96, L=592.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.bittBlock | 0 | 696 | 10 stacks + 56 | B |
| Ztones:tile.korpBlock | 2 | 96 | 1 stacks + 32 | K |
| Ztones:tile.laveBlock | 12 | 592 | 9 stacks + 16 | L |

Exact new cells: stages/S09-runs.csv.gz. Stage stock: stages/S09-stock.csv. Leave completion checks blank until actually built.

### S10 - Ascending structural lift / civil Y+33..+36

3,656 new positions; 16,940 cumulative. Local X0..63, Z0..63; civil Y+33..+36. Roles: B=2,304, K=408, L=944.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.bittBlock | 0 | 2,304 | 36 stacks + 0 | B |
| Ztones:tile.korpBlock | 2 | 408 | 6 stacks + 24 | K |
| Ztones:tile.laveBlock | 12 | 944 | 14 stacks + 48 | L |

Exact new cells: stages/S10-runs.csv.gz. Stage stock: stages/S10-stock.csv. Leave completion checks blank until actually built.

### S11 - Ascending structural lift / civil Y+37..+40

1,824 new positions; 18,764 cumulative. Local X7..56, Z0..63; civil Y+37..+40. Roles: B=1,448, K=88, L=288.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.bittBlock | 0 | 1,448 | 22 stacks + 40 | B |
| Ztones:tile.korpBlock | 2 | 88 | 1 stacks + 24 | K |
| Ztones:tile.laveBlock | 12 | 288 | 4 stacks + 32 | L |

Exact new cells: stages/S11-runs.csv.gz. Stage stock: stages/S11-stock.csv. Leave completion checks blank until actually built.

### S12 - Ascending structural lift / civil Y+41..+44

72 new positions; 18,836 cumulative. Local X7..56, Z16..18; civil Y+41..+44. Roles: L=72.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.laveBlock | 12 | 72 | 1 stacks + 8 | L |

Exact new cells: stages/S12-runs.csv.gz. Stage stock: stages/S12-stock.csv. Leave completion checks blank until actually built.

### S13 - Ascending structural lift / civil Y+45..+47

410 new positions; 19,246 cumulative. Local X7..56, Z16..18; civil Y+45..+47. Roles: K=410.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.korpBlock | 2 | 410 | 6 stacks + 26 | K |

Exact new cells: stages/S13-runs.csv.gz. Stage stock: stages/S13-stock.csv. Leave completion checks blank until actually built.

### S14 - Glazing infill / civil Y+26..+29

800 new positions; 20,046 cumulative. Local X2..61, Z2..61; civil Y+26..+29. Roles: G=800.

1. Fit the listed glass cells into the completed frame. This includes any roof or clerestory glazing at these levels. Use the depth coordinates, not a flat facade projection.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| minecraft:glass | 0 | 800 | 12 stacks + 32 | G |

Exact new cells: stages/S14-runs.csv.gz. Stage stock: stages/S14-stock.csv. Leave completion checks blank until actually built.

### S15 - Cyan trim and white fixtures / civil Y+27..+27

208 new positions; 20,254 cumulative. Local X0..63, Z0..63; civil Y+27..+27. Roles: N=208.

1. Place the cyan trim and white fixtures at the listed positions after the frame/glazing. These are individual blocks; do not turn every edge into a continuous cyan strip or assume the counts establish light coverage.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| ExtraUtilities:greenscreen | 9 | 208 | 3 stacks + 16 | N |

Exact new cells: stages/S15-runs.csv.gz. Stage stock: stages/S15-stock.csv. Leave completion checks blank until actually built.

### S16 - Cyan trim and white fixtures / civil Y+45..+45

40 new positions; 20,294 cumulative. Local X12..51, Z18..18; civil Y+45..+45. Roles: N=40.

1. Place the cyan trim and white fixtures at the listed positions after the frame/glazing. These are individual blocks; do not turn every edge into a continuous cyan strip or assume the counts establish light coverage.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| ExtraUtilities:greenscreen | 9 | 40 | 0 stacks + 40 | N |

Exact new cells: stages/S16-runs.csv.gz. Stage stock: stages/S16-stock.csv. Leave completion checks blank until actually built.

## Complete level schedule

| Civil Y | Positions | Role counts | Stages |
| --- | --- | --- | --- |
| -1 | 4096 | F:4096 | S01 |
| +0 | 228 | K:16 L:212 | S01 |
| +1 | 644 | L:644 | S02 |
| +2 | 228 | B:212 K:16 | S02 |
| +3 | 260 | B:212 K:16 L:32 | S02 |
| +4 | 260 | B:174 K:54 L:32 | S02 |
| +5 | 268 | B:182 K:54 L:32 | S03 |
| +6 | 268 | B:182 K:54 L:32 | S03 |
| +7 | 284 | B:196 K:56 L:32 | S03 |
| +8 | 284 | B:196 K:56 L:32 | S03 |
| +9 | 284 | B:196 K:56 L:32 | S04 |
| +10 | 284 | B:196 K:56 L:32 | S04 |
| +11 | 284 | B:196 K:56 L:32 | S04 |
| +12 | 284 | B:196 K:56 L:32 | S04 |
| +13 | 284 | B:196 K:56 L:32 | S05 |
| +14 | 284 | B:196 K:56 L:32 | S05 |
| +15 | 284 | B:196 K:56 L:32 | S05 |
| +16 | 284 | B:196 K:56 L:32 | S05 |
| +17 | 284 | B:196 K:56 L:32 | S06 |
| +18 | 284 | B:196 K:56 L:32 | S06 |
| +19 | 284 | B:196 K:56 L:32 | S06 |
| +20 | 284 | B:196 K:56 L:32 | S06 |
| +21 | 284 | B:196 K:56 L:32 | S07 |
| +22 | 284 | B:196 K:56 L:32 | S07 |
| +23 | 284 | B:196 K:56 L:32 | S07 |
| +24 | 284 | B:196 K:56 L:32 | S07 |
| +25 | 284 | B:196 K:56 L:32 | S08 |
| +26 | 284 | B:28 G:200 K:24 L:32 | S08 S14 |
| +27 | 492 | B:28 G:200 K:24 L:32 N:208 | S08 S14 S15 |
| +28 | 284 | B:28 G:200 K:24 L:32 | S08 S14 |
| +29 | 284 | B:28 G:200 K:24 L:32 | S09 S14 |
| +30 | 284 | B:196 K:56 L:32 | S09 |
| +31 | 732 | B:236 L:496 | S09 |
| +32 | 284 | B:236 K:16 L:32 | S09 |
| +33 | 284 | K:16 L:268 | S10 |
| +34 | 1816 | B:1328 K:152 L:336 | S10 |
| +35 | 298 | B:128 K:152 L:18 | S10 |
| +36 | 1258 | B:848 K:88 L:322 | S10 |
| +37 | 234 | B:128 K:88 L:18 | S11 |
| +38 | 1554 | B:1320 L:234 | S11 |
| +39 | 18 | L:18 | S11 |
| +40 | 18 | L:18 | S11 |
| +41 | 18 | L:18 | S12 |
| +42 | 18 | L:18 | S12 |
| +43 | 18 | L:18 | S12 |
| +44 | 18 | L:18 | S12 |
| +45 | 150 | K:110 N:40 | S13 S16 |
| +46 | 150 | K:150 | S13 |
| +47 | 150 | K:150 | S13 |

## Finish and validation

Compare all four facades and roof plan with the exact source model. Reconcile roles, placed states and inventory separately. Check slabs, upright logs and foliage persistence. Keep civil accesses and capped utility interfaces. Actual collision, roof protection, lighting, recipes, machine fit and accessible interiors remain open. No native schematic/import or operating plant is supplied. Use completion-record.csv only after actual construction.

