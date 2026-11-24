# 04-08 - Distillation: detailed exterior assembly

20,550 final source-model positions, partitioned into 14 disjoint stages. This is an assembly guide for the saved exterior study, not a complete functional building or game-tested schematic. The PDIM is not created; no construction is recorded.

## Setout and coordinates

Local footprint X0..63, Z0..63; northwest origin, +X east and +Z south. Civil Y-1..+42, with future walkable surface S at civil0. World block Y=S+civilY; world anchor, S, rotation and dimension ID remain blank.

City reservation X694..757, Z310..373. City X=694+local X; city Z=310+local Z. Stake local corners (0,0), (63,0), (0,63), (63,63); these are last block centers, not outer edge coordinates.

## Block palette and gathering stock

![Role palette](block-palette.png)

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| ExtraUtilities:greenscreen | 9 | 208 | 3 stacks + 16 | N |
| Ztones:tile.bittBlock | 0 | 8,794 | 137 stacks + 26 | B |
| Ztones:tile.korpBlock | 2 | 2,258 | 35 stacks + 18 | K |
| Ztones:tile.laveBlock | 12 | 4,394 | 68 stacks + 42 | L |
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

Civil service stub U-04-08 is city X722..729, Z297..306, capped at Z306. Its reserve is [722, 307, 729, 309]. Keep the capped civil interface and access intact. This exterior guide supplies no new pipe/cable route, hatch, floor penetration or capacity.

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

1,064 new positions; 11,932 cumulative. Local X0..63, Z0..63; civil Y+21..+24. Roles: B=616, K=192, L=256.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.bittBlock | 0 | 616 | 9 stacks + 40 | B |
| Ztones:tile.korpBlock | 2 | 192 | 3 stacks + 0 | K |
| Ztones:tile.laveBlock | 12 | 256 | 4 stacks + 0 | L |

Exact new cells: stages/S07-runs.csv.gz. Stage stock: stages/S07-stock.csv. Leave completion checks blank until actually built.

### S08 - Ascending structural lift / civil Y+25..+28

664 new positions; 12,596 cumulative. Local X0..63, Z0..63; civil Y+25..+28. Roles: B=280, K=128, L=256.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.bittBlock | 0 | 280 | 4 stacks + 24 | B |
| Ztones:tile.korpBlock | 2 | 128 | 2 stacks + 0 | K |
| Ztones:tile.laveBlock | 12 | 256 | 4 stacks + 0 | L |

Exact new cells: stages/S08-runs.csv.gz. Stage stock: stages/S08-stock.csv. Leave completion checks blank until actually built.

### S09 - Ascending structural lift / civil Y+29..+32

3,180 new positions; 15,776 cumulative. Local X0..63, Z0..63; civil Y+29..+32. Roles: B=1,800, K=184, L=1,196.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.bittBlock | 0 | 1,800 | 28 stacks + 8 | B |
| Ztones:tile.korpBlock | 2 | 184 | 2 stacks + 56 | K |
| Ztones:tile.laveBlock | 12 | 1,196 | 18 stacks + 44 | L |

Exact new cells: stages/S09-runs.csv.gz. Stage stock: stages/S09-stock.csv. Leave completion checks blank until actually built.

### S10 - Ascending structural lift / civil Y+33..+36

3,428 new positions; 19,204 cumulative. Local X10..52, Z0..63; civil Y+33..+36. Roles: B=2,392, K=520, L=516.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.bittBlock | 0 | 2,392 | 37 stacks + 24 | B |
| Ztones:tile.korpBlock | 2 | 520 | 8 stacks + 8 | K |
| Ztones:tile.laveBlock | 12 | 516 | 8 stacks + 4 | L |

Exact new cells: stages/S10-runs.csv.gz. Stage stock: stages/S10-stock.csv. Leave completion checks blank until actually built.

### S11 - Ascending structural lift / civil Y+37..+40

192 new positions; 19,396 cumulative. Local X10..52, Z12..18; civil Y+37..+40. Roles: K=192.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.korpBlock | 2 | 192 | 3 stacks + 0 | K |

Exact new cells: stages/S11-runs.csv.gz. Stage stock: stages/S11-stock.csv. Leave completion checks blank until actually built.

### S12 - Ascending structural lift / civil Y+41..+42

146 new positions; 19,542 cumulative. Local X10..52, Z12..18; civil Y+41..+42. Roles: K=48, L=98.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.korpBlock | 2 | 48 | 0 stacks + 48 | K |
| Ztones:tile.laveBlock | 12 | 98 | 1 stacks + 34 | L |

Exact new cells: stages/S12-runs.csv.gz. Stage stock: stages/S12-stock.csv. Leave completion checks blank until actually built.

### S13 - Glazing infill / civil Y+24..+27

800 new positions; 20,342 cumulative. Local X2..61, Z2..61; civil Y+24..+27. Roles: G=800.

1. Fit the listed glass cells into the completed frame. This includes any roof or clerestory glazing at these levels. Use the depth coordinates, not a flat facade projection.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| minecraft:glass | 0 | 800 | 12 stacks + 32 | G |

Exact new cells: stages/S13-runs.csv.gz. Stage stock: stages/S13-stock.csv. Leave completion checks blank until actually built.

### S14 - Cyan trim and white fixtures / civil Y+25..+25

208 new positions; 20,550 cumulative. Local X0..63, Z0..63; civil Y+25..+25. Roles: N=208.

1. Place the cyan trim and white fixtures at the listed positions after the frame/glazing. These are individual blocks; do not turn every edge into a continuous cyan strip or assume the counts establish light coverage.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| ExtraUtilities:greenscreen | 9 | 208 | 3 stacks + 16 | N |

Exact new cells: stages/S14-runs.csv.gz. Stage stock: stages/S14-stock.csv. Leave completion checks blank until actually built.

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
| +24 | 316 | B:28 G:200 K:24 L:64 | S07 S13 |
| +25 | 524 | B:28 G:200 K:24 L:64 N:208 | S08 S13 S14 |
| +26 | 316 | B:28 G:200 K:24 L:64 | S08 S13 |
| +27 | 316 | B:28 G:200 K:24 L:64 | S08 S13 |
| +28 | 316 | B:196 K:56 L:64 | S08 |
| +29 | 732 | B:236 L:496 | S09 |
| +30 | 316 | B:236 K:16 L:64 | S09 |
| +31 | 316 | K:16 L:300 | S09 |
| +32 | 1816 | B:1328 K:152 L:336 | S09 |
| +33 | 324 | B:124 K:200 | S10 |
| +34 | 1256 | B:820 K:136 L:300 | S10 |
| +35 | 264 | B:128 K:136 | S10 |
| +36 | 1584 | B:1320 K:48 L:216 | S10 |
| +37 | 48 | K:48 | S11 |
| +38 | 48 | K:48 | S11 |
| +39 | 48 | K:48 | S11 |
| +40 | 48 | K:48 | S11 |
| +41 | 48 | K:48 | S12 |
| +42 | 98 | L:98 | S12 |

## Finish and validation

Compare all four facades and roof plan with the exact source model. Reconcile roles, placed states and inventory separately. Check slabs, upright logs and foliage persistence. Keep civil accesses and capped utility interfaces. Actual collision, roof protection, lighting, recipes, machine fit and accessible interiors remain open. No native schematic/import or operating plant is supplied. Use completion-record.csv only after actual construction.

