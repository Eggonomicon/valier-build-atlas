# 05-01 - Logistics hub: detailed exterior assembly

16,016 final source-model positions, partitioned into 10 disjoint stages. This is an assembly guide for the saved exterior study, not a complete functional building or game-tested schematic. The PDIM is not created; no construction is recorded.

## Setout and coordinates

Local footprint X0..63, Z0..63; northwest origin, +X east and +Z south. Civil Y-1..+26, with future walkable surface S at civil0. World block Y=S+civilY; world anchor, S, rotation and dimension ID remain blank.

City reservation X22..85, Z406..469. City X=22+local X; city Z=406+local Z. Stake local corners (0,0), (63,0), (0,63), (63,63); these are last block centers, not outer edge coordinates.

## Block palette and gathering stock

![Role palette](block-palette.png)

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| ExtraUtilities:greenscreen | 9 | 208 | 3 stacks + 16 | N |
| Ztones:tile.bittBlock | 0 | 6,384 | 99 stacks + 48 | B |
| Ztones:tile.korpBlock | 2 | 1,892 | 29 stacks + 36 | K |
| Ztones:tile.laveBlock | 12 | 2,636 | 41 stacks + 12 | L |
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
| north | 0/1/2 | X | 12..51 |
| south | 61/62/63 | X | 12..51 |
| west | 0/1/2 | Z | 30..33 |
| east | 61/62/63 | Z | 30..33 |

Civil service stub U-05-01 is city X50..57, Z393..402, capped at Z402. Its reserve is [50, 403, 57, 405]. Keep the capped civil interface and access intact. This exterior guide supplies no new pipe/cable route, hatch, floor penetration or capacity.

## Numbered construction stages

Every final cell appears exactly once. Bounds locate the work; never fill their whole volume. Work the occupied Y levels lowest first.

### S01 - Base, floor and ground-level frame / civil Y-1..+0

4,260 new positions; 4,260 cumulative. Local X0..63, Z0..63; civil Y-1..+0. Roles: F=4,096, K=16, L=148.

1. Set out the full footprint and place only the base/floor and ground-frame cells assigned to this step. Keep model openings and stair apertures empty.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.korpBlock | 2 | 16 | 0 stacks + 16 | K |
| Ztones:tile.laveBlock | 12 | 148 | 2 stacks + 20 | L |
| minecraft:stonebrick | 0 | 4,096 | 64 stacks + 0 | F |

Exact new cells: stages/S01-runs.csv.gz. Stage stock: stages/S01-stock.csv. Leave completion checks blank until actually built.

### S02 - Ascending structural lift / civil Y+1..+4

880 new positions; 5,140 cumulative. Local X0..63, Z0..63; civil Y+1..+4. Roles: B=418, K=74, L=388.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.bittBlock | 0 | 418 | 6 stacks + 34 | B |
| Ztones:tile.korpBlock | 2 | 74 | 1 stacks + 10 | K |
| Ztones:tile.laveBlock | 12 | 388 | 6 stacks + 4 | L |

Exact new cells: stages/S02-runs.csv.gz. Stage stock: stages/S02-stock.csv. Leave completion checks blank until actually built.

### S03 - Ascending structural lift / civil Y+5..+8

816 new positions; 5,956 cumulative. Local X0..63, Z0..63; civil Y+5..+8. Roles: B=520, K=168, L=128.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.bittBlock | 0 | 520 | 8 stacks + 8 | B |
| Ztones:tile.korpBlock | 2 | 168 | 2 stacks + 40 | K |
| Ztones:tile.laveBlock | 12 | 128 | 2 stacks + 0 | L |

Exact new cells: stages/S03-runs.csv.gz. Stage stock: stages/S03-stock.csv. Leave completion checks blank until actually built.

### S04 - Ascending structural lift / civil Y+9..+12

1,408 new positions; 7,364 cumulative. Local X0..63, Z0..63; civil Y+9..+12. Roles: B=718, K=562, L=128.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.bittBlock | 0 | 718 | 11 stacks + 14 | B |
| Ztones:tile.korpBlock | 2 | 562 | 8 stacks + 50 | K |
| Ztones:tile.laveBlock | 12 | 128 | 2 stacks + 0 | L |

Exact new cells: stages/S04-runs.csv.gz. Stage stock: stages/S04-stock.csv. Leave completion checks blank until actually built.

### S05 - Ascending structural lift / civil Y+13..+16

888 new positions; 8,252 cumulative. Local X0..63, Z0..63; civil Y+13..+16. Roles: B=280, K=480, L=128.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.bittBlock | 0 | 280 | 4 stacks + 24 | B |
| Ztones:tile.korpBlock | 2 | 480 | 7 stacks + 32 | K |
| Ztones:tile.laveBlock | 12 | 128 | 2 stacks + 0 | L |

Exact new cells: stages/S05-runs.csv.gz. Stage stock: stages/S05-stock.csv. Leave completion checks blank until actually built.

### S06 - Ascending structural lift / civil Y+17..+20

1,384 new positions; 9,636 cumulative. Local X0..63, Z0..63; civil Y+17..+20. Roles: B=696, K=96, L=592.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.bittBlock | 0 | 696 | 10 stacks + 56 | B |
| Ztones:tile.korpBlock | 2 | 96 | 1 stacks + 32 | K |
| Ztones:tile.laveBlock | 12 | 592 | 9 stacks + 16 | L |

Exact new cells: stages/S06-runs.csv.gz. Stage stock: stages/S06-stock.csv. Leave completion checks blank until actually built.

### S07 - Ascending structural lift / civil Y+21..+24

3,620 new positions; 13,256 cumulative. Local X0..63, Z0..63; civil Y+21..+24. Roles: B=2,304, K=408, L=908.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.bittBlock | 0 | 2,304 | 36 stacks + 0 | B |
| Ztones:tile.korpBlock | 2 | 408 | 6 stacks + 24 | K |
| Ztones:tile.laveBlock | 12 | 908 | 14 stacks + 12 | L |

Exact new cells: stages/S07-runs.csv.gz. Stage stock: stages/S07-stock.csv. Leave completion checks blank until actually built.

### S08 - Ascending structural lift / civil Y+25..+26

1,752 new positions; 15,008 cumulative. Local X20..43, Z0..63; civil Y+25..+26. Roles: B=1,448, K=88, L=216.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.bittBlock | 0 | 1,448 | 22 stacks + 40 | B |
| Ztones:tile.korpBlock | 2 | 88 | 1 stacks + 24 | K |
| Ztones:tile.laveBlock | 12 | 216 | 3 stacks + 24 | L |

Exact new cells: stages/S08-runs.csv.gz. Stage stock: stages/S08-stock.csv. Leave completion checks blank until actually built.

### S09 - Glazing infill / civil Y+14..+17

800 new positions; 15,808 cumulative. Local X2..61, Z2..61; civil Y+14..+17. Roles: G=800.

1. Fit the listed glass cells into the completed frame. This includes any roof or clerestory glazing at these levels. Use the depth coordinates, not a flat facade projection.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| minecraft:glass | 0 | 800 | 12 stacks + 32 | G |

Exact new cells: stages/S09-runs.csv.gz. Stage stock: stages/S09-stock.csv. Leave completion checks blank until actually built.

### S10 - Cyan trim and white fixtures / civil Y+15..+15

208 new positions; 16,016 cumulative. Local X0..63, Z0..63; civil Y+15..+15. Roles: N=208.

1. Place the cyan trim and white fixtures at the listed positions after the frame/glazing. These are individual blocks; do not turn every edge into a continuous cyan strip or assume the counts establish light coverage.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| ExtraUtilities:greenscreen | 9 | 208 | 3 stacks + 16 | N |

Exact new cells: stages/S10-runs.csv.gz. Stage stock: stages/S10-stock.csv. Leave completion checks blank until actually built.

## Complete level schedule

| Civil Y | Positions | Role counts | Stages |
| --- | --- | --- | --- |
| -1 | 4096 | F:4096 | S01 |
| +0 | 164 | K:16 L:148 | S01 |
| +1 | 324 | L:324 | S02 |
| +2 | 164 | B:148 K:16 | S02 |
| +3 | 196 | B:148 K:16 L:32 | S02 |
| +4 | 196 | B:122 K:42 L:32 | S02 |
| +5 | 204 | B:130 K:42 L:32 | S03 |
| +6 | 204 | B:130 K:42 L:32 | S03 |
| +7 | 204 | B:130 K:42 L:32 | S03 |
| +8 | 204 | B:130 K:42 L:32 | S03 |
| +9 | 204 | B:130 K:42 L:32 | S04 |
| +10 | 284 | B:196 K:56 L:32 | S04 |
| +11 | 284 | B:196 K:56 L:32 | S04 |
| +12 | 636 | B:196 K:408 L:32 | S04 |
| +13 | 636 | B:196 K:408 L:32 | S05 |
| +14 | 284 | B:28 G:200 K:24 L:32 | S05 S09 |
| +15 | 492 | B:28 G:200 K:24 L:32 N:208 | S05 S09 S10 |
| +16 | 284 | B:28 G:200 K:24 L:32 | S05 S09 |
| +17 | 284 | B:28 G:200 K:24 L:32 | S06 S09 |
| +18 | 284 | B:196 K:56 L:32 | S06 |
| +19 | 732 | B:236 L:496 | S06 |
| +20 | 284 | B:236 K:16 L:32 | S06 |
| +21 | 284 | K:16 L:268 | S07 |
| +22 | 1816 | B:1328 K:152 L:336 | S07 |
| +23 | 280 | B:128 K:152 | S07 |
| +24 | 1240 | B:848 K:88 L:304 | S07 |
| +25 | 216 | B:128 K:88 | S08 |
| +26 | 1536 | B:1320 L:216 | S08 |

## Finish and validation

Compare all four facades and roof plan with the exact source model. Reconcile roles, placed states and inventory separately. Check slabs, upright logs and foliage persistence. Keep civil accesses and capped utility interfaces. Actual collision, roof protection, lighting, recipes, machine fit and accessible interiors remain open. No native schematic/import or operating plant is supplied. Use completion-record.csv only after actual construction.

