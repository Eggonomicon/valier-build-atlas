# 04-09 - Fluid storage: detailed exterior assembly

21,230 final source-model positions, partitioned into 15 disjoint stages. This is an assembly guide for the saved exterior study, not a complete functional building or game-tested schematic. The PDIM is not created; no construction is recorded.

## Setout and coordinates

Local footprint X0..63, Z0..63; northwest origin, +X east and +Z south. Civil Y-1..+45, with future walkable surface S at civil0. World block Y=S+civilY; world anchor, S, rotation and dimension ID remain blank.

City reservation X790..853, Z310..373. City X=790+local X; city Z=310+local Z. Stake local corners (0,0), (63,0), (0,63), (63,63); these are last block centers, not outer edge coordinates.

## Block palette and gathering stock

![Role palette](block-palette.png)

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| ExtraUtilities:greenscreen | 9 | 208 | 3 stacks + 16 | N |
| Ztones:tile.bittBlock | 0 | 9,186 | 143 stacks + 34 | B |
| Ztones:tile.korpBlock | 2 | 2,418 | 37 stacks + 50 | K |
| Ztones:tile.laveBlock | 12 | 4,522 | 70 stacks + 42 | L |
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

Civil service stub U-04-09 is city X818..825, Z297..306, capped at Z306. Its reserve is [818, 307, 825, 309]. Keep the capped civil interface and access intact. This exterior guide supplies no new pipe/cable route, hatch, floor penetration or capacity.

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

1,232 new positions; 7,076 cumulative. Local X0..63, Z0..63; civil Y+5..+8. Roles: B=756, K=220, L=256.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.bittBlock | 0 | 756 | 11 stacks + 52 | B |
| Ztones:tile.korpBlock | 2 | 220 | 3 stacks + 28 | K |
| Ztones:tile.laveBlock | 12 | 256 | 4 stacks + 0 | L |

Exact new cells: stages/S03-runs.csv.gz. Stage stock: stages/S03-stock.csv. Leave completion checks blank until actually built.

### S04 - Ascending structural lift / civil Y+9..+12

1,264 new positions; 8,340 cumulative. Local X0..63, Z0..63; civil Y+9..+12. Roles: B=784, K=224, L=256.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.bittBlock | 0 | 784 | 12 stacks + 16 | B |
| Ztones:tile.korpBlock | 2 | 224 | 3 stacks + 32 | K |
| Ztones:tile.laveBlock | 12 | 256 | 4 stacks + 0 | L |

Exact new cells: stages/S04-runs.csv.gz. Stage stock: stages/S04-stock.csv. Leave completion checks blank until actually built.

### S05 - Ascending structural lift / civil Y+13..+16

1,264 new positions; 9,604 cumulative. Local X0..63, Z0..63; civil Y+13..+16. Roles: B=784, K=224, L=256.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.bittBlock | 0 | 784 | 12 stacks + 16 | B |
| Ztones:tile.korpBlock | 2 | 224 | 3 stacks + 32 | K |
| Ztones:tile.laveBlock | 12 | 256 | 4 stacks + 0 | L |

Exact new cells: stages/S05-runs.csv.gz. Stage stock: stages/S05-stock.csv. Leave completion checks blank until actually built.

### S06 - Ascending structural lift / civil Y+17..+20

1,264 new positions; 10,868 cumulative. Local X0..63, Z0..63; civil Y+17..+20. Roles: B=784, K=224, L=256.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.bittBlock | 0 | 784 | 12 stacks + 16 | B |
| Ztones:tile.korpBlock | 2 | 224 | 3 stacks + 32 | K |
| Ztones:tile.laveBlock | 12 | 256 | 4 stacks + 0 | L |

Exact new cells: stages/S06-runs.csv.gz. Stage stock: stages/S06-stock.csv. Leave completion checks blank until actually built.

### S07 - Ascending structural lift / civil Y+21..+24

1,264 new positions; 12,132 cumulative. Local X0..63, Z0..63; civil Y+21..+24. Roles: B=784, K=224, L=256.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.bittBlock | 0 | 784 | 12 stacks + 16 | B |
| Ztones:tile.korpBlock | 2 | 224 | 3 stacks + 32 | K |
| Ztones:tile.laveBlock | 12 | 256 | 4 stacks + 0 | L |

Exact new cells: stages/S07-runs.csv.gz. Stage stock: stages/S07-stock.csv. Leave completion checks blank until actually built.

### S08 - Ascending structural lift / civil Y+25..+28

664 new positions; 12,796 cumulative. Local X0..63, Z0..63; civil Y+25..+28. Roles: B=280, K=128, L=256.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.bittBlock | 0 | 280 | 4 stacks + 24 | B |
| Ztones:tile.korpBlock | 2 | 128 | 2 stacks + 0 | K |
| Ztones:tile.laveBlock | 12 | 256 | 4 stacks + 0 | L |

Exact new cells: stages/S08-runs.csv.gz. Stage stock: stages/S08-stock.csv. Leave completion checks blank until actually built.

### S09 - Ascending structural lift / civil Y+29..+32

1,480 new positions; 14,276 cumulative. Local X0..63, Z0..63; civil Y+29..+32. Roles: B=696, K=96, L=688.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.bittBlock | 0 | 696 | 10 stacks + 56 | B |
| Ztones:tile.korpBlock | 2 | 96 | 1 stacks + 32 | K |
| Ztones:tile.laveBlock | 12 | 688 | 10 stacks + 48 | L |

Exact new cells: stages/S09-runs.csv.gz. Stage stock: stages/S09-stock.csv. Leave completion checks blank until actually built.

### S10 - Ascending structural lift / civil Y+33..+36

3,712 new positions; 17,988 cumulative. Local X0..63, Z0..63; civil Y+33..+36. Roles: B=2,272, K=504, L=936.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.bittBlock | 0 | 2,272 | 35 stacks + 32 | B |
| Ztones:tile.korpBlock | 2 | 504 | 7 stacks + 56 | K |
| Ztones:tile.laveBlock | 12 | 936 | 14 stacks + 40 | L |

Exact new cells: stages/S10-runs.csv.gz. Stage stock: stages/S10-stock.csv. Leave completion checks blank until actually built.

### S11 - Ascending structural lift / civil Y+37..+40

1,944 new positions; 19,932 cumulative. Local X10..52, Z0..63; civil Y+37..+40. Roles: B=1,448, K=280, L=216.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.bittBlock | 0 | 1,448 | 22 stacks + 40 | B |
| Ztones:tile.korpBlock | 2 | 280 | 4 stacks + 24 | K |
| Ztones:tile.laveBlock | 12 | 216 | 3 stacks + 24 | L |

Exact new cells: stages/S11-runs.csv.gz. Stage stock: stages/S11-stock.csv. Leave completion checks blank until actually built.

### S12 - Ascending structural lift / civil Y+41..+44

192 new positions; 20,124 cumulative. Local X10..52, Z12..18; civil Y+41..+44. Roles: K=192.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.korpBlock | 2 | 192 | 3 stacks + 0 | K |

Exact new cells: stages/S12-runs.csv.gz. Stage stock: stages/S12-stock.csv. Leave completion checks blank until actually built.

### S13 - Ascending structural lift / civil Y+45..+45

98 new positions; 20,222 cumulative. Local X10..52, Z12..18; civil Y+45..+45. Roles: L=98.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.laveBlock | 12 | 98 | 1 stacks + 34 | L |

Exact new cells: stages/S13-runs.csv.gz. Stage stock: stages/S13-stock.csv. Leave completion checks blank until actually built.

### S14 - Glazing infill / civil Y+26..+29

800 new positions; 21,022 cumulative. Local X2..61, Z2..61; civil Y+26..+29. Roles: G=800.

1. Fit the listed glass cells into the completed frame. This includes any roof or clerestory glazing at these levels. Use the depth coordinates, not a flat facade projection.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| minecraft:glass | 0 | 800 | 12 stacks + 32 | G |

Exact new cells: stages/S14-runs.csv.gz. Stage stock: stages/S14-stock.csv. Leave completion checks blank until actually built.

### S15 - Cyan trim and white fixtures / civil Y+27..+27

208 new positions; 21,230 cumulative. Local X0..63, Z0..63; civil Y+27..+27. Roles: N=208.

1. Place the cyan trim and white fixtures at the listed positions after the frame/glazing. These are individual blocks; do not turn every edge into a continuous cyan strip or assume the counts establish light coverage.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| ExtraUtilities:greenscreen | 9 | 208 | 3 stacks + 16 | N |

Exact new cells: stages/S15-runs.csv.gz. Stage stock: stages/S15-stock.csv. Leave completion checks blank until actually built.

## Complete level schedule

| Civil Y | Positions | Role counts | Stages |
| --- | --- | --- | --- |
| -1 | 4096 | F:4096 | S01 |
| +0 | 228 | K:16 L:212 | S01 |
| +1 | 644 | L:644 | S02 |
| +2 | 292 | B:212 K:16 L:64 | S02 |
| +3 | 292 | B:212 K:16 L:64 | S02 |
| +4 | 292 | B:174 K:54 L:64 | S02 |
| +5 | 300 | B:182 K:54 L:64 | S03 |
| +6 | 300 | B:182 K:54 L:64 | S03 |
| +7 | 316 | B:196 K:56 L:64 | S03 |
| +8 | 316 | B:196 K:56 L:64 | S03 |
| +9 | 316 | B:196 K:56 L:64 | S04 |
| +10 | 316 | B:196 K:56 L:64 | S04 |
| +11 | 316 | B:196 K:56 L:64 | S04 |
| +12 | 316 | B:196 K:56 L:64 | S04 |
| +13 | 316 | B:196 K:56 L:64 | S05 |
| +14 | 316 | B:196 K:56 L:64 | S05 |
| +15 | 316 | B:196 K:56 L:64 | S05 |
| +16 | 316 | B:196 K:56 L:64 | S05 |
| +17 | 316 | B:196 K:56 L:64 | S06 |
| +18 | 316 | B:196 K:56 L:64 | S06 |
| +19 | 316 | B:196 K:56 L:64 | S06 |
| +20 | 316 | B:196 K:56 L:64 | S06 |
| +21 | 316 | B:196 K:56 L:64 | S07 |
| +22 | 316 | B:196 K:56 L:64 | S07 |
| +23 | 316 | B:196 K:56 L:64 | S07 |
| +24 | 316 | B:196 K:56 L:64 | S07 |
| +25 | 316 | B:196 K:56 L:64 | S08 |
| +26 | 316 | B:28 G:200 K:24 L:64 | S08 S14 |
| +27 | 524 | B:28 G:200 K:24 L:64 N:208 | S08 S14 S15 |
| +28 | 316 | B:28 G:200 K:24 L:64 | S08 S14 |
| +29 | 316 | B:28 G:200 K:24 L:64 | S09 S14 |
| +30 | 316 | B:196 K:56 L:64 | S09 |
| +31 | 732 | B:236 L:496 | S09 |
| +32 | 316 | B:236 K:16 L:64 | S09 |
| +33 | 316 | K:16 L:300 | S10 |
| +34 | 1816 | B:1328 K:152 L:336 | S10 |
| +35 | 324 | B:124 K:200 | S10 |
| +36 | 1256 | B:820 K:136 L:300 | S10 |
| +37 | 264 | B:128 K:136 | S11 |
| +38 | 1584 | B:1320 K:48 L:216 | S11 |
| +39 | 48 | K:48 | S11 |
| +40 | 48 | K:48 | S11 |
| +41 | 48 | K:48 | S12 |
| +42 | 48 | K:48 | S12 |
| +43 | 48 | K:48 | S12 |
| +44 | 48 | K:48 | S12 |
| +45 | 98 | L:98 | S13 |

## Finish and validation

Compare all four facades and roof plan with the exact source model. Reconcile roles, placed states and inventory separately. Check slabs, upright logs and foliage persistence. Keep civil accesses and capped utility interfaces. Actual collision, roof protection, lighting, recipes, machine fit and accessible interiors remain open. No native schematic/import or operating plant is supplied. Use completion-record.csv only after actual construction.

