# 01-01 - Steam works: detailed exterior assembly

28,766 final source-model positions, partitioned into 15 disjoint stages. This is an assembly guide for the saved exterior study, not a complete functional building or game-tested schematic. The PDIM is not created; no construction is recorded.

## Setout and coordinates

Local footprint X0..63, Z0..63; northwest origin, +X east and +Z south. Civil Y-8..+26, with future walkable surface S at civil0. World block Y=S+civilY; world anchor, S, rotation and dimension ID remain blank.

City reservation X22..85, Z22..85. City X=22+local X; city Z=22+local Z. Stake local corners (0,0), (63,0), (0,63), (63,63); these are last block centers, not outer edge coordinates.

Steam Works v2 is reused unchanged. This guide uses civil Y=original building-local Y-8. Its basement/floor/stair and roof details remain documented in the existing Steam Works v2 guide; do not mix its local Y numbers with these civil levels.

## Block palette and gathering stock

![Role palette](block-palette.png)

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| ExtraUtilities:greenscreen | 0 | 65 | 1 stacks + 1 | W |
| ExtraUtilities:greenscreen | 9 | 276 | 4 stacks + 20 | N |
| Ztones:tile.bittBlock | 0 | 7,734 | 120 stacks + 54 | B |
| Ztones:tile.korpBlock | 2 | 2,455 | 38 stacks + 23 | K |
| Ztones:tile.laveBlock | 12 | 4,356 | 68 stacks + 4 | L |
| minecraft:glass | 0 | 760 | 11 stacks + 56 | G |
| minecraft:stone_slab | 0 | 174 | 2 stacks + 46 | Ss |
| minecraft:stonebrick | 0 | 12,946 | 202 stacks + 18 | F |

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

Civil service stub U-01-01 is city X50..57, Z9..18, capped at Z18. Its reserve is [50, 19, 57, 21]. Keep the capped civil interface and access intact. This exterior guide supplies no new pipe/cable route, hatch, floor penetration or capacity. The existing gallery walkable level is S-9 and Steam Works basement walkable level S-7; the two-block rise remains a separate interface design.

## Numbered construction stages

Every final cell appears exactly once. Bounds locate the work; never fill their whole volume. Work the occupied Y levels lowest first.

### S01 - Subgrade structure and access / civil Y-8..-5

5,602 new positions; 5,602 cumulative. Local X0..63, Z0..63; civil Y-8..-5. Roles: F=5,536, K=48, S=9, s=9.

1. Build the below-surface cells from the lowest listed civil Y upward. Follow the stairwell, retaining-wall and support gaps exactly; do not fill the bounding rectangle.
2. Check each slab symbol: s occupies the lower half (placed meta0); S occupies the upper half (placed meta8). Both consume ordinary stone slab inventory0. Keep half-steps separate; do not make double slabs.
3. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.korpBlock | 2 | 48 | 0 stacks + 48 | K |
| minecraft:stone_slab | 0 | 18 | 0 stacks + 18 | Ss |
| minecraft:stonebrick | 0 | 5,536 | 86 stacks + 32 | F |

Exact new cells: stages/S01-runs.csv.gz. Stage stock: stages/S01-stock.csv. Leave completion checks blank until actually built.

### S02 - Subgrade structure and access / civil Y-4..-2

5,076 new positions; 10,678 cumulative. Local X0..63, Z0..63; civil Y-4..-2. Roles: F=5,030, K=28, S=9, s=9.

1. Build the below-surface cells from the lowest listed civil Y upward. Follow the stairwell, retaining-wall and support gaps exactly; do not fill the bounding rectangle.
2. Check each slab symbol: s occupies the lower half (placed meta0); S occupies the upper half (placed meta8). Both consume ordinary stone slab inventory0. Keep half-steps separate; do not make double slabs.
3. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.korpBlock | 2 | 28 | 0 stacks + 28 | K |
| minecraft:stone_slab | 0 | 18 | 0 stacks + 18 | Ss |
| minecraft:stonebrick | 0 | 5,030 | 78 stacks + 38 | F |

Exact new cells: stages/S02-runs.csv.gz. Stage stock: stages/S02-stock.csv. Leave completion checks blank until actually built.

### S03 - Base, floor and ground-level frame / civil Y-1..+0

4,429 new positions; 15,107 cumulative. Local X0..63, Z0..63; civil Y-1..+0. Roles: B=2,218, F=1,684, K=47, L=468, S=6, s=6.

1. Set out the full footprint and place only the base/floor and ground-frame cells assigned to this step. Keep model openings and stair apertures empty.
2. Check each slab symbol: s occupies the lower half (placed meta0); S occupies the upper half (placed meta8). Both consume ordinary stone slab inventory0. Keep half-steps separate; do not make double slabs.
3. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.bittBlock | 0 | 2,218 | 34 stacks + 42 | B |
| Ztones:tile.korpBlock | 2 | 47 | 0 stacks + 47 | K |
| Ztones:tile.laveBlock | 12 | 468 | 7 stacks + 20 | L |
| minecraft:stone_slab | 0 | 12 | 0 stacks + 12 | Ss |
| minecraft:stonebrick | 0 | 1,684 | 26 stacks + 20 | F |

Exact new cells: stages/S03-runs.csv.gz. Stage stock: stages/S03-stock.csv. Leave completion checks blank until actually built.

### S04 - Ascending structural lift / civil Y+1..+4

2,244 new positions; 17,351 cumulative. Local X0..63, Z0..63; civil Y+1..+4. Roles: B=456, F=300, K=116, L=1,348, S=12, s=12.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. Check each slab symbol: s occupies the lower half (placed meta0); S occupies the upper half (placed meta8). Both consume ordinary stone slab inventory0. Keep half-steps separate; do not make double slabs.
3. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.bittBlock | 0 | 456 | 7 stacks + 8 | B |
| Ztones:tile.korpBlock | 2 | 116 | 1 stacks + 52 | K |
| Ztones:tile.laveBlock | 12 | 1,348 | 21 stacks + 4 | L |
| minecraft:stone_slab | 0 | 24 | 0 stacks + 24 | Ss |
| minecraft:stonebrick | 0 | 300 | 4 stacks + 44 | F |

Exact new cells: stages/S04-runs.csv.gz. Stage stock: stages/S04-stock.csv. Leave completion checks blank until actually built.

### S05 - Ascending structural lift / civil Y+5..+8

1,672 new positions; 19,023 cumulative. Local X0..63, Z0..63; civil Y+5..+8. Roles: B=704, F=228, K=316, L=400, S=12, s=12.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. Check each slab symbol: s occupies the lower half (placed meta0); S occupies the upper half (placed meta8). Both consume ordinary stone slab inventory0. Keep half-steps separate; do not make double slabs.
3. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.bittBlock | 0 | 704 | 11 stacks + 0 | B |
| Ztones:tile.korpBlock | 2 | 316 | 4 stacks + 60 | K |
| Ztones:tile.laveBlock | 12 | 400 | 6 stacks + 16 | L |
| minecraft:stone_slab | 0 | 24 | 0 stacks + 24 | Ss |
| minecraft:stonebrick | 0 | 228 | 3 stacks + 36 | F |

Exact new cells: stages/S05-runs.csv.gz. Stage stock: stages/S05-stock.csv. Leave completion checks blank until actually built.

### S06 - Ascending structural lift / civil Y+9..+12

996 new positions; 20,019 cumulative. Local X0..63, Z0..63; civil Y+9..+12. Roles: B=424, F=132, K=176, L=240, S=12, s=12.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. Check each slab symbol: s occupies the lower half (placed meta0); S occupies the upper half (placed meta8). Both consume ordinary stone slab inventory0. Keep half-steps separate; do not make double slabs.
3. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.bittBlock | 0 | 424 | 6 stacks + 40 | B |
| Ztones:tile.korpBlock | 2 | 176 | 2 stacks + 48 | K |
| Ztones:tile.laveBlock | 12 | 240 | 3 stacks + 48 | L |
| minecraft:stone_slab | 0 | 24 | 0 stacks + 24 | Ss |
| minecraft:stonebrick | 0 | 132 | 2 stacks + 4 | F |

Exact new cells: stages/S06-runs.csv.gz. Stage stock: stages/S06-stock.csv. Leave completion checks blank until actually built.

### S07 - Ascending structural lift / civil Y+13..+16

4,168 new positions; 24,187 cumulative. Local X0..63, Z0..63; civil Y+13..+16. Roles: B=1,850, F=36, K=1,025, L=1,233, S=12, s=12.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. Check each slab symbol: s occupies the lower half (placed meta0); S occupies the upper half (placed meta8). Both consume ordinary stone slab inventory0. Keep half-steps separate; do not make double slabs.
3. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.bittBlock | 0 | 1,850 | 28 stacks + 58 | B |
| Ztones:tile.korpBlock | 2 | 1,025 | 16 stacks + 1 | K |
| Ztones:tile.laveBlock | 12 | 1,233 | 19 stacks + 17 | L |
| minecraft:stone_slab | 0 | 24 | 0 stacks + 24 | Ss |
| minecraft:stonebrick | 0 | 36 | 0 stacks + 36 | F |

Exact new cells: stages/S07-runs.csv.gz. Stage stock: stages/S07-stock.csv. Leave completion checks blank until actually built.

### S08 - Ascending structural lift / civil Y+17..+20

1,880 new positions; 26,067 cumulative. Local X2..55, Z0..63; civil Y+17..+20. Roles: B=1,008, K=593, L=255, S=12, s=12.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. Check each slab symbol: s occupies the lower half (placed meta0); S occupies the upper half (placed meta8). Both consume ordinary stone slab inventory0. Keep half-steps separate; do not make double slabs.
3. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.bittBlock | 0 | 1,008 | 15 stacks + 48 | B |
| Ztones:tile.korpBlock | 2 | 593 | 9 stacks + 17 | K |
| Ztones:tile.laveBlock | 12 | 255 | 3 stacks + 63 | L |
| minecraft:stone_slab | 0 | 24 | 0 stacks + 24 | Ss |

Exact new cells: stages/S08-runs.csv.gz. Stage stock: stages/S08-stock.csv. Leave completion checks blank until actually built.

### S09 - Ascending structural lift / civil Y+21..+24

1,365 new positions; 27,432 cumulative. Local X22..55, Z0..63; civil Y+21..+24. Roles: B=1,074, K=88, L=197, S=3, s=3.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. Check each slab symbol: s occupies the lower half (placed meta0); S occupies the upper half (placed meta8). Both consume ordinary stone slab inventory0. Keep half-steps separate; do not make double slabs.
3. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.bittBlock | 0 | 1,074 | 16 stacks + 50 | B |
| Ztones:tile.korpBlock | 2 | 88 | 1 stacks + 24 | K |
| Ztones:tile.laveBlock | 12 | 197 | 3 stacks + 5 | L |
| minecraft:stone_slab | 0 | 6 | 0 stacks + 6 | Ss |

Exact new cells: stages/S09-runs.csv.gz. Stage stock: stages/S09-stock.csv. Leave completion checks blank until actually built.

### S10 - Ascending structural lift / civil Y+25..+26

233 new positions; 27,665 cumulative. Local X44..55, Z10..28; civil Y+25..+26. Roles: K=18, L=215.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.korpBlock | 2 | 18 | 0 stacks + 18 | K |
| Ztones:tile.laveBlock | 12 | 215 | 3 stacks + 23 | L |

Exact new cells: stages/S10-runs.csv.gz. Stage stock: stages/S10-stock.csv. Leave completion checks blank until actually built.

### S11 - Glazing infill / civil Y+10..+11

272 new positions; 27,937 cumulative. Local X2..61, Z2..61; civil Y+10..+11. Roles: G=272.

1. Fit the listed glass cells into the completed frame. This includes any roof or clerestory glazing at these levels. Use the depth coordinates, not a flat facade projection.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| minecraft:glass | 0 | 272 | 4 stacks + 16 | G |

Exact new cells: stages/S11-runs.csv.gz. Stage stock: stages/S11-stock.csv. Leave completion checks blank until actually built.

### S12 - Glazing infill / civil Y+12..+21

488 new positions; 28,425 cumulative. Local X2..61, Z2..61; civil Y+12..+21. Roles: G=488.

1. Fit the listed glass cells into the completed frame. This includes any roof or clerestory glazing at these levels. Use the depth coordinates, not a flat facade projection.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| minecraft:glass | 0 | 488 | 7 stacks + 40 | G |

Exact new cells: stages/S12-runs.csv.gz. Stage stock: stages/S12-stock.csv. Leave completion checks blank until actually built.

### S13 - Cyan trim and white fixtures / civil Y-3..-1

53 new positions; 28,478 cumulative. Local X8..56, Z8..56; civil Y-3..-1. Roles: N=4, W=49.

1. Place the cyan trim and white fixtures at the listed positions after the frame/glazing. These are individual blocks; do not turn every edge into a continuous cyan strip or assume the counts establish light coverage.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| ExtraUtilities:greenscreen | 0 | 49 | 0 stacks + 49 | W |
| ExtraUtilities:greenscreen | 9 | 4 | 0 stacks + 4 | N |

Exact new cells: stages/S13-runs.csv.gz. Stage stock: stages/S13-stock.csv. Leave completion checks blank until actually built.

### S14 - Cyan trim and white fixtures / civil Y+8..+14

260 new positions; 28,738 cumulative. Local X0..63, Z0..63; civil Y+8..+14. Roles: N=244, W=16.

1. Place the cyan trim and white fixtures at the listed positions after the frame/glazing. These are individual blocks; do not turn every edge into a continuous cyan strip or assume the counts establish light coverage.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| ExtraUtilities:greenscreen | 0 | 16 | 0 stacks + 16 | W |
| ExtraUtilities:greenscreen | 9 | 244 | 3 stacks + 52 | N |

Exact new cells: stages/S14-runs.csv.gz. Stage stock: stages/S14-stock.csv. Leave completion checks blank until actually built.

### S15 - Cyan trim and white fixtures / civil Y+21..+21

28 new positions; 28,766 cumulative. Local X31..31, Z18..45; civil Y+21..+21. Roles: N=28.

1. Place the cyan trim and white fixtures at the listed positions after the frame/glazing. These are individual blocks; do not turn every edge into a continuous cyan strip or assume the counts establish light coverage.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| ExtraUtilities:greenscreen | 9 | 28 | 0 stacks + 28 | N |

Exact new cells: stages/S15-runs.csv.gz. Stage stock: stages/S15-stock.csv. Leave completion checks blank until actually built.

## Complete level schedule

| Civil Y | Positions | Role counts | Stages |
| --- | --- | --- | --- |
| -8 | 4096 | F:4096 | S01 |
| -7 | 502 | F:480 K:16 S:3 s:3 | S01 |
| -6 | 502 | F:480 K:16 S:3 s:3 | S01 |
| -5 | 502 | F:480 K:16 S:3 s:3 | S01 |
| -4 | 502 | F:480 K:16 S:3 s:3 | S02 |
| -3 | 563 | F:496 K:12 S:3 W:49 s:3 | S02 S13 |
| -2 | 4060 | F:4054 S:3 s:3 | S02 |
| -1 | 4060 | B:2218 F:1600 L:232 N:4 S:3 s:3 | S03 S13 |
| +0 | 373 | F:84 K:47 L:236 S:3 s:3 | S03 |
| +1 | 744 | F:78 L:660 S:3 s:3 | S04 |
| +2 | 738 | B:152 F:72 K:28 L:480 S:3 s:3 | S04 |
| +3 | 384 | B:152 F:78 K:44 L:104 S:3 s:3 | S04 |
| +4 | 378 | B:152 F:72 K:44 L:104 S:3 s:3 | S04 |
| +5 | 396 | B:160 F:66 K:44 L:120 S:3 s:3 | S05 |
| +6 | 366 | B:160 F:60 K:44 L:96 S:3 s:3 | S05 |
| +7 | 416 | B:176 F:54 K:44 L:136 S:3 s:3 | S05 |
| +8 | 706 | B:208 F:48 K:184 L:48 N:212 S:3 s:3 | S05 S14 |
| +9 | 396 | B:208 F:42 K:44 L:96 S:3 s:3 | S06 |
| +10 | 374 | B:72 F:36 G:136 K:44 L:48 N:32 S:3 s:3 | S06 S11 S14 |
| +11 | 336 | B:72 F:30 G:136 K:44 L:48 S:3 s:3 | S06 S11 |
| +12 | 330 | B:72 F:24 G:136 K:44 L:48 S:3 s:3 | S06 S12 |
| +13 | 756 | B:208 F:18 K:28 L:496 S:3 s:3 | S07 |
| +14 | 766 | B:208 F:12 K:508 L:16 S:3 W:16 s:3 | S07 S14 |
| +15 | 744 | F:6 K:480 L:252 S:3 s:3 | S07 |
| +16 | 1918 | B:1434 K:9 L:469 S:3 s:3 | S07 |
| +17 | 412 | B:80 G:88 K:238 S:3 s:3 | S08 S12 |
| +18 | 1107 | B:794 K:126 L:181 S:3 s:3 | S08 |
| +19 | 260 | B:80 K:120 L:54 S:3 s:3 | S08 |
| +20 | 277 | B:54 G:88 K:109 L:20 S:3 s:3 | S08 S12 |
| +21 | 1351 | B:920 G:176 K:24 L:197 N:28 S:3 s:3 | S09 S12 S15 |
| +22 | 73 | B:50 K:23 | S09 |
| +23 | 73 | B:50 K:23 | S09 |
| +24 | 72 | B:54 K:18 | S09 |
| +25 | 216 | K:18 L:198 | S10 |
| +26 | 17 | L:17 | S10 |

## Finish and validation

Compare all four facades and roof plan with the exact source model. Reconcile roles, placed states and inventory separately. Check slabs, upright logs and foliage persistence. Keep civil accesses and capped utility interfaces. Actual collision, roof protection, lighting, recipes, machine fit and accessible interiors remain open. No native schematic/import or operating plant is supplied. Use completion-record.csv only after actual construction.

