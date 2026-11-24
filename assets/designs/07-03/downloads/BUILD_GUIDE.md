# 07-03 - Bio feedstocks: detailed exterior assembly

17,728 final source-model positions, partitioned into 12 disjoint stages. This is an assembly guide for the saved exterior study, not a complete functional building or game-tested schematic. The PDIM is not created; no construction is recorded.

## Setout and coordinates

Local footprint X0..63, Z0..63; northwest origin, +X east and +Z south. Civil Y-1..+25, with future walkable surface S at civil0. World block Y=S+civilY; world anchor, S, rotation and dimension ID remain blank.

City reservation X214..277, Z598..661. City X=214+local X; city Z=598+local Z. Stake local corners (0,0), (63,0), (0,63), (63,63); these are last block centers, not outer edge coordinates.

## Block palette and gathering stock

![Role palette](block-palette.png)

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| ExtraUtilities:greenscreen | 9 | 208 | 3 stacks + 16 | N |
| Ztones:tile.bittBlock | 0 | 713 | 11 stacks + 9 | B |
| Ztones:tile.korpBlock | 2 | 844 | 13 stacks + 12 | K |
| Ztones:tile.laveBlock | 12 | 3,930 | 61 stacks + 26 | L |
| minecraft:glass | 0 | 7,937 | 124 stacks + 1 | G |
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

Civil service stub U-07-03 is city X242..249, Z585..594, capped at Z594. Its reserve is [242, 595, 249, 597]. Keep the capped civil interface and access intact. This exterior guide supplies no new pipe/cable route, hatch, floor penetration or capacity.

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

1,170 new positions; 5,494 cumulative. Local X0..63, Z0..63; civil Y+1..+4. Roles: B=266, K=68, L=836.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.bittBlock | 0 | 266 | 4 stacks + 10 | B |
| Ztones:tile.korpBlock | 2 | 68 | 1 stacks + 4 | K |
| Ztones:tile.laveBlock | 12 | 836 | 13 stacks + 4 | L |

Exact new cells: stages/S02-runs.csv.gz. Stage stock: stages/S02-stock.csv. Leave completion checks blank until actually built.

### S03 - Ascending structural lift / civil Y+5..+8

468 new positions; 5,962 cumulative. Local X0..63, Z0..63; civil Y+5..+8. Roles: B=68, K=144, L=256.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.bittBlock | 0 | 68 | 1 stacks + 4 | B |
| Ztones:tile.korpBlock | 2 | 144 | 2 stacks + 16 | K |
| Ztones:tile.laveBlock | 12 | 256 | 4 stacks + 0 | L |

Exact new cells: stages/S03-runs.csv.gz. Stage stock: stages/S03-stock.csv. Leave completion checks blank until actually built.

### S04 - Ascending structural lift / civil Y+9..+12

468 new positions; 6,430 cumulative. Local X0..63, Z0..63; civil Y+9..+12. Roles: B=68, K=144, L=256.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.bittBlock | 0 | 68 | 1 stacks + 4 | B |
| Ztones:tile.korpBlock | 2 | 144 | 2 stacks + 16 | K |
| Ztones:tile.laveBlock | 12 | 256 | 4 stacks + 0 | L |

Exact new cells: stages/S04-runs.csv.gz. Stage stock: stages/S04-stock.csv. Leave completion checks blank until actually built.

### S05 - Ascending structural lift / civil Y+13..+16

372 new positions; 6,802 cumulative. Local X0..63, Z0..63; civil Y+13..+16. Roles: B=20, K=96, L=256.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.bittBlock | 0 | 20 | 0 stacks + 20 | B |
| Ztones:tile.korpBlock | 2 | 96 | 1 stacks + 32 | K |
| Ztones:tile.laveBlock | 12 | 256 | 4 stacks + 0 | L |

Exact new cells: stages/S05-runs.csv.gz. Stage stock: stages/S05-stock.csv. Leave completion checks blank until actually built.

### S06 - Ascending structural lift / civil Y+17..+20

1,051 new positions; 7,853 cumulative. Local X0..63, Z0..63; civil Y+17..+20. Roles: B=291, K=72, L=688.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.bittBlock | 0 | 291 | 4 stacks + 35 | B |
| Ztones:tile.korpBlock | 2 | 72 | 1 stacks + 8 | K |
| Ztones:tile.laveBlock | 12 | 688 | 10 stacks + 48 | L |

Exact new cells: stages/S06-runs.csv.gz. Stage stock: stages/S06-stock.csv. Leave completion checks blank until actually built.

### S07 - Ascending structural lift / civil Y+21..+24

1,586 new positions; 9,439 cumulative. Local X0..63, Z0..63; civil Y+21..+24. Roles: K=304, L=1,282.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.korpBlock | 2 | 304 | 4 stacks + 48 | K |
| Ztones:tile.laveBlock | 12 | 1,282 | 20 stacks + 2 | L |

Exact new cells: stages/S07-runs.csv.gz. Stage stock: stages/S07-stock.csv. Leave completion checks blank until actually built.

### S08 - Ascending structural lift / civil Y+25..+25

144 new positions; 9,583 cumulative. Local X6..57, Z0..63; civil Y+25..+25. Roles: L=144.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.laveBlock | 12 | 144 | 2 stacks + 16 | L |

Exact new cells: stages/S08-runs.csv.gz. Stage stock: stages/S08-stock.csv. Leave completion checks blank until actually built.

### S09 - Glazing infill / civil Y+3..+11

1,711 new positions; 11,294 cumulative. Local X2..61, Z2..61; civil Y+3..+11. Roles: G=1,711.

1. Fit the listed glass cells into the completed frame. This includes any roof or clerestory glazing at these levels. Use the depth coordinates, not a flat facade projection.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| minecraft:glass | 0 | 1,711 | 26 stacks + 47 | G |

Exact new cells: stages/S09-runs.csv.gz. Stage stock: stages/S09-stock.csv. Leave completion checks blank until actually built.

### S10 - Glazing infill / civil Y+12..+23

4,064 new positions; 15,358 cumulative. Local X2..61, Z0..63; civil Y+12..+23. Roles: G=4,064.

1. Fit the listed glass cells into the completed frame. This includes any roof or clerestory glazing at these levels. Use the depth coordinates, not a flat facade projection.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| minecraft:glass | 0 | 4,064 | 63 stacks + 32 | G |

Exact new cells: stages/S10-runs.csv.gz. Stage stock: stages/S10-stock.csv. Leave completion checks blank until actually built.

### S11 - Glazing infill / civil Y+24..+25

2,162 new positions; 17,520 cumulative. Local X4..59, Z0..63; civil Y+24..+25. Roles: G=2,162.

1. Fit the listed glass cells into the completed frame. This includes any roof or clerestory glazing at these levels. Use the depth coordinates, not a flat facade projection.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| minecraft:glass | 0 | 2,162 | 33 stacks + 50 | G |

Exact new cells: stages/S11-runs.csv.gz. Stage stock: stages/S11-stock.csv. Leave completion checks blank until actually built.

### S12 - Cyan trim and white fixtures / civil Y+15..+15

208 new positions; 17,728 cumulative. Local X0..63, Z0..63; civil Y+15..+15. Roles: N=208.

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
| +3 | 292 | B:37 G:175 K:16 L:64 | S02 S09 |
| +4 | 292 | B:17 G:175 K:36 L:64 | S02 S09 |
| +5 | 300 | B:17 G:183 K:36 L:64 | S03 S09 |
| +6 | 300 | B:17 G:183 K:36 L:64 | S03 S09 |
| +7 | 316 | B:17 G:199 K:36 L:64 | S03 S09 |
| +8 | 316 | B:17 G:199 K:36 L:64 | S03 S09 |
| +9 | 316 | B:17 G:199 K:36 L:64 | S04 S09 |
| +10 | 316 | B:17 G:199 K:36 L:64 | S04 S09 |
| +11 | 316 | B:17 G:199 K:36 L:64 | S04 S09 |
| +12 | 316 | B:17 G:199 K:36 L:64 | S04 S10 |
| +13 | 316 | B:17 G:199 K:36 L:64 | S05 S10 |
| +14 | 316 | B:1 G:231 K:20 L:64 | S05 S10 |
| +15 | 524 | B:1 G:231 K:20 L:64 N:208 | S05 S10 S12 |
| +16 | 316 | B:1 G:231 K:20 L:64 | S05 S10 |
| +17 | 316 | B:1 G:231 K:20 L:64 | S06 S10 |
| +18 | 316 | B:17 G:199 K:36 L:64 | S06 S10 |
| +19 | 732 | B:37 G:199 L:496 | S06 S10 |
| +20 | 316 | B:236 K:16 L:64 | S06 |
| +21 | 316 | K:16 L:300 | S07 |
| +22 | 1696 | G:1172 K:160 L:364 | S07 S10 |
| +23 | 1632 | G:1172 K:96 L:364 | S07 S10 |
| +24 | 1568 | G:1282 K:32 L:254 | S07 S11 |
| +25 | 1024 | G:880 L:144 | S08 S11 |

## Finish and validation

Compare all four facades and roof plan with the exact source model. Reconcile roles, placed states and inventory separately. Check slabs, upright logs and foliage persistence. Keep civil accesses and capped utility interfaces. Actual collision, roof protection, lighting, recipes, machine fit and accessible interiors remain open. No native schematic/import or operating plant is supplied. Use completion-record.csv only after actual construction.

