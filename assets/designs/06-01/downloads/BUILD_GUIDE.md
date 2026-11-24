# 06-01 - Tree farm: detailed exterior assembly

16,464 final source-model positions, partitioned into 10 disjoint stages. This is an assembly guide for the saved exterior study, not a complete functional building or game-tested schematic. The PDIM is not created; no construction is recorded.

## Setout and coordinates

Local footprint X0..63, Z0..63; northwest origin, +X east and +Z south. Civil Y-1..+21, with future walkable surface S at civil0. World block Y=S+civilY; world anchor, S, rotation and dimension ID remain blank.

City reservation X22..85, Z502..565. City X=22+local X; city Z=502+local Z. Stake local corners (0,0), (63,0), (0,63), (63,63); these are last block centers, not outer edge coordinates.

## Block palette and gathering stock

![Role palette](block-palette.png)

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| ExtraUtilities:greenscreen | 9 | 208 | 3 stacks + 16 | N |
| Ztones:tile.bittBlock | 0 | 645 | 10 stacks + 5 | B |
| Ztones:tile.korpBlock | 2 | 700 | 10 stacks + 60 | K |
| Ztones:tile.laveBlock | 12 | 3,674 | 57 stacks + 26 | L |
| minecraft:glass | 0 | 7,141 | 111 stacks + 37 | G |
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

Civil service stub U-06-01 is city X50..57, Z489..498, capped at Z498. Its reserve is [50, 499, 57, 501]. Keep the capped civil interface and access intact. This exterior guide supplies no new pipe/cable route, hatch, floor penetration or capacity.

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

372 new positions; 6,334 cumulative. Local X0..63, Z0..63; civil Y+9..+12. Roles: B=20, K=96, L=256.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.bittBlock | 0 | 20 | 0 stacks + 20 | B |
| Ztones:tile.korpBlock | 2 | 96 | 1 stacks + 32 | K |
| Ztones:tile.laveBlock | 12 | 256 | 4 stacks + 0 | L |

Exact new cells: stages/S04-runs.csv.gz. Stage stock: stages/S04-stock.csv. Leave completion checks blank until actually built.

### S05 - Ascending structural lift / civil Y+13..+16

1,051 new positions; 7,385 cumulative. Local X0..63, Z0..63; civil Y+13..+16. Roles: B=291, K=72, L=688.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.bittBlock | 0 | 291 | 4 stacks + 35 | B |
| Ztones:tile.korpBlock | 2 | 72 | 1 stacks + 8 | K |
| Ztones:tile.laveBlock | 12 | 688 | 10 stacks + 48 | L |

Exact new cells: stages/S05-runs.csv.gz. Stage stock: stages/S05-stock.csv. Leave completion checks blank until actually built.

### S06 - Ascending structural lift / civil Y+17..+20

1,586 new positions; 8,971 cumulative. Local X0..63, Z0..63; civil Y+17..+20. Roles: K=304, L=1,282.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.korpBlock | 2 | 304 | 4 stacks + 48 | K |
| Ztones:tile.laveBlock | 12 | 1,282 | 20 stacks + 2 | L |

Exact new cells: stages/S06-runs.csv.gz. Stage stock: stages/S06-stock.csv. Leave completion checks blank until actually built.

### S07 - Ascending structural lift / civil Y+21..+21

144 new positions; 9,115 cumulative. Local X6..57, Z0..63; civil Y+21..+21. Roles: L=144.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.laveBlock | 12 | 144 | 2 stacks + 16 | L |

Exact new cells: stages/S07-runs.csv.gz. Stage stock: stages/S07-stock.csv. Leave completion checks blank until actually built.

### S08 - Glazing infill / civil Y+3..+11

1,775 new positions; 10,890 cumulative. Local X2..61, Z2..61; civil Y+3..+11. Roles: G=1,775.

1. Fit the listed glass cells into the completed frame. This includes any roof or clerestory glazing at these levels. Use the depth coordinates, not a flat facade projection.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| minecraft:glass | 0 | 1,775 | 27 stacks + 47 | G |

Exact new cells: stages/S08-runs.csv.gz. Stage stock: stages/S08-stock.csv. Leave completion checks blank until actually built.

### S09 - Glazing infill / civil Y+12..+21

5,366 new positions; 16,256 cumulative. Local X2..61, Z0..63; civil Y+12..+21. Roles: G=5,366.

1. Fit the listed glass cells into the completed frame. This includes any roof or clerestory glazing at these levels. Use the depth coordinates, not a flat facade projection.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| minecraft:glass | 0 | 5,366 | 83 stacks + 54 | G |

Exact new cells: stages/S09-runs.csv.gz. Stage stock: stages/S09-stock.csv. Leave completion checks blank until actually built.

### S10 - Cyan trim and white fixtures / civil Y+11..+11

208 new positions; 16,464 cumulative. Local X0..63, Z0..63; civil Y+11..+11. Roles: N=208.

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
| +0 | 228 | K:16 L:212 | S01 |
| +1 | 644 | L:644 | S02 |
| +2 | 292 | B:212 K:16 L:64 | S02 |
| +3 | 292 | B:37 G:175 K:16 L:64 | S02 S08 |
| +4 | 292 | B:17 G:175 K:36 L:64 | S02 S08 |
| +5 | 300 | B:17 G:183 K:36 L:64 | S03 S08 |
| +6 | 300 | B:17 G:183 K:36 L:64 | S03 S08 |
| +7 | 316 | B:17 G:199 K:36 L:64 | S03 S08 |
| +8 | 316 | B:17 G:199 K:36 L:64 | S03 S08 |
| +9 | 316 | B:17 G:199 K:36 L:64 | S04 S08 |
| +10 | 316 | B:1 G:231 K:20 L:64 | S04 S08 |
| +11 | 524 | B:1 G:231 K:20 L:64 N:208 | S04 S08 S10 |
| +12 | 316 | B:1 G:231 K:20 L:64 | S04 S09 |
| +13 | 316 | B:1 G:231 K:20 L:64 | S05 S09 |
| +14 | 316 | B:17 G:199 K:36 L:64 | S05 S09 |
| +15 | 732 | B:37 G:199 L:496 | S05 S09 |
| +16 | 316 | B:236 K:16 L:64 | S05 |
| +17 | 316 | K:16 L:300 | S06 |
| +18 | 1696 | G:1172 K:160 L:364 | S06 S09 |
| +19 | 1632 | G:1172 K:96 L:364 | S06 S09 |
| +20 | 1568 | G:1282 K:32 L:254 | S06 S09 |
| +21 | 1024 | G:880 L:144 | S07 S09 |

## Finish and validation

Compare all four facades and roof plan with the exact source model. Reconcile roles, placed states and inventory separately. Check slabs, upright logs and foliage persistence. Keep civil accesses and capped utility interfaces. Actual collision, roof protection, lighting, recipes, machine fit and accessible interiors remain open. No native schematic/import or operating plant is supplied. Use completion-record.csv only after actual construction.

