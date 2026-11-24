# 05-05 - HQ + ceremonial plaza: detailed exterior assembly

19,946 final source-model positions, partitioned into 31 disjoint stages. This is an assembly guide for the saved exterior study, not a complete functional building or game-tested schematic. The PDIM is not created; no construction is recorded.

## Setout and coordinates

Local footprint X0..64, Z0..64; northwest origin, +X east and +Z south. Civil Y-1..+65, with future walkable surface S at civil0. World block Y=S+civilY; world anchor, S, rotation and dimension ID remain blank.

City reservation X405..469, Z405..469. City X=405+local X; city Z=405+local Z. Stake local corners (0,0), (64,0), (0,64), (64,64); these are last block centers, not outer edge coordinates.

## Block palette and gathering stock

![Role palette](block-palette.png)

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| ExtraUtilities:greenscreen | 9 | 97 | 1 stacks + 33 | N |
| Ztones:tile.bittBlock | 0 | 8,745 | 136 stacks + 41 | B |
| Ztones:tile.korpBlock | 2 | 194 | 3 stacks + 2 | K |
| Ztones:tile.laveBlock | 12 | 4,472 | 69 stacks + 56 | L |
| minecraft:dirt | 0 | 50 | 0 stacks + 50 | E |
| minecraft:glass | 0 | 2,251 | 35 stacks + 11 | G |
| minecraft:leaves | 0 | 314 | 4 stacks + 58 | V |
| minecraft:log | 0 | 8 | 0 stacks + 8 | T |
| minecraft:stone_slab | 0 | 12 | 0 stacks + 12 | s |
| minecraft:stonebrick | 0 | 3,803 | 59 stacks + 27 | F |

Counts are inventory items, not crafting ingredients. G/Q and s/S aggregate by inventory identity; placed states remain separate. E=dirt0; T=vertical oak log0; V=oak leaf placed4/item0; Q=dry glass0. New proposed bindings do not alter the source geometry. Recipe evidence and static vanilla inspection: ../../evidence/PALETTE_EVIDENCE.md.

## Geometry and assembly milestones

![Construction progress](construction-progress.png)

Facades are nearest-hit projections, not flat wall placement grids. Construct from layers and exact depth coordinates. Diagonals are stepped full cubes; no shaped-block NBT.

### Clear facade runs at civil Y0..2

Only the listed skin planes are tested; this is not an interior route or door-fit check. Plane coordinates are Z for north/south and X for west/east.

| Face | Skin planes | Run axis | Clear inclusive runs |
| --- | --- | --- | --- |
| north | 1/2 | X | 28..36 |
| south | 41/42 | X | 28..36 |

Civil service stub U-05-05 is city X434..441, Z393..402, capped at Z402. Its reserve is [434, 403, 441, 404]. Keep the capped civil interface and access intact. This exterior guide supplies no new pipe/cable route, hatch, floor penetration or capacity.

## Numbered construction stages

Every final cell appears exactly once. Bounds locate the work; never fill their whole volume. Work the occupied Y levels lowest first.

### S01 - Base, floor and ground-level frame / civil Y-1..+0

4,645 new positions; 4,645 cumulative. Local X0..64, Z0..64; civil Y-1..+0. Roles: B=248, F=3,803, K=116, L=466, s=12.

1. Set out the full footprint and place only the base/floor and ground-frame cells assigned to this step. Keep model openings and stair apertures empty.
2. Check each slab symbol: s occupies the lower half (placed meta0); S occupies the upper half (placed meta8). Both consume ordinary stone slab inventory0. Keep half-steps separate; do not make double slabs.
3. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.bittBlock | 0 | 248 | 3 stacks + 56 | B |
| Ztones:tile.korpBlock | 2 | 116 | 1 stacks + 52 | K |
| Ztones:tile.laveBlock | 12 | 466 | 7 stacks + 18 | L |
| minecraft:stone_slab | 0 | 12 | 0 stacks + 12 | s |
| minecraft:stonebrick | 0 | 3,803 | 59 stacks + 27 | F |

Exact new cells: stages/S01-runs.csv.gz. Stage stock: stages/S01-stock.csv. Leave completion checks blank until actually built.

### S02 - Ascending structural lift / civil Y+1..+4

1,294 new positions; 5,939 cumulative. Local X0..64, Z1..58; civil Y+1..+4. Roles: B=820, K=30, L=444.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.bittBlock | 0 | 820 | 12 stacks + 52 | B |
| Ztones:tile.korpBlock | 2 | 30 | 0 stacks + 30 | K |
| Ztones:tile.laveBlock | 12 | 444 | 6 stacks + 60 | L |

Exact new cells: stages/S02-runs.csv.gz. Stage stock: stages/S02-stock.csv. Leave completion checks blank until actually built.

### S03 - Ascending structural lift / civil Y+5..+8

528 new positions; 6,467 cumulative. Local X0..64, Z1..47; civil Y+5..+8. Roles: B=304, K=32, L=192.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.bittBlock | 0 | 304 | 4 stacks + 48 | B |
| Ztones:tile.korpBlock | 2 | 32 | 0 stacks + 32 | K |
| Ztones:tile.laveBlock | 12 | 192 | 3 stacks + 0 | L |

Exact new cells: stages/S03-runs.csv.gz. Stage stock: stages/S03-stock.csv. Leave completion checks blank until actually built.

### S04 - Ascending structural lift / civil Y+9..+12

1,344 new positions; 7,811 cumulative. Local X0..64, Z1..42; civil Y+9..+12. Roles: B=712, K=16, L=616.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.bittBlock | 0 | 712 | 11 stacks + 8 | B |
| Ztones:tile.korpBlock | 2 | 16 | 0 stacks + 16 | K |
| Ztones:tile.laveBlock | 12 | 616 | 9 stacks + 40 | L |

Exact new cells: stages/S04-runs.csv.gz. Stage stock: stages/S04-stock.csv. Leave completion checks blank until actually built.

### S05 - Ascending structural lift / civil Y+13..+16

3,114 new positions; 10,925 cumulative. Local X1..63, Z1..42; civil Y+13..+16. Roles: B=2,688, L=426.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.bittBlock | 0 | 2,688 | 42 stacks + 0 | B |
| Ztones:tile.laveBlock | 12 | 426 | 6 stacks + 42 | L |

Exact new cells: stages/S05-runs.csv.gz. Stage stock: stages/S05-stock.csv. Leave completion checks blank until actually built.

### S06 - Ascending structural lift / civil Y+17..+20

376 new positions; 11,301 cumulative. Local X12..52, Z6..38; civil Y+17..+20. Roles: B=248, L=128.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.bittBlock | 0 | 248 | 3 stacks + 56 | B |
| Ztones:tile.laveBlock | 12 | 128 | 2 stacks + 0 | L |

Exact new cells: stages/S06-runs.csv.gz. Stage stock: stages/S06-stock.csv. Leave completion checks blank until actually built.

### S07 - Ascending structural lift / civil Y+21..+24

500 new positions; 11,801 cumulative. Local X12..52, Z6..38; civil Y+21..+24. Roles: B=372, L=128.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.bittBlock | 0 | 372 | 5 stacks + 52 | B |
| Ztones:tile.laveBlock | 12 | 128 | 2 stacks + 0 | L |

Exact new cells: stages/S07-runs.csv.gz. Stage stock: stages/S07-stock.csv. Leave completion checks blank until actually built.

### S08 - Ascending structural lift / civil Y+25..+28

492 new positions; 12,293 cumulative. Local X12..52, Z6..38; civil Y+25..+28. Roles: B=124, L=368.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.bittBlock | 0 | 124 | 1 stacks + 60 | B |
| Ztones:tile.laveBlock | 12 | 368 | 5 stacks + 48 | L |

Exact new cells: stages/S08-runs.csv.gz. Stage stock: stages/S08-stock.csv. Leave completion checks blank until actually built.

### S09 - Ascending structural lift / civil Y+29..+32

360 new positions; 12,653 cumulative. Local X14..50, Z6..38; civil Y+29..+32. Roles: B=232, L=128.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.bittBlock | 0 | 232 | 3 stacks + 40 | B |
| Ztones:tile.laveBlock | 12 | 128 | 2 stacks + 0 | L |

Exact new cells: stages/S09-runs.csv.gz. Stage stock: stages/S09-stock.csv. Leave completion checks blank until actually built.

### S10 - Ascending structural lift / civil Y+33..+36

592 new positions; 13,245 cumulative. Local X14..50, Z6..38; civil Y+33..+36. Roles: B=464, L=128.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.bittBlock | 0 | 464 | 7 stacks + 16 | B |
| Ztones:tile.laveBlock | 12 | 128 | 2 stacks + 0 | L |

Exact new cells: stages/S10-runs.csv.gz. Stage stock: stages/S10-stock.csv. Leave completion checks blank until actually built.

### S11 - Ascending structural lift / civil Y+37..+40

360 new positions; 13,605 cumulative. Local X14..50, Z6..38; civil Y+37..+40. Roles: B=232, L=128.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.bittBlock | 0 | 232 | 3 stacks + 40 | B |
| Ztones:tile.laveBlock | 12 | 128 | 2 stacks + 0 | L |

Exact new cells: stages/S11-runs.csv.gz. Stage stock: stages/S11-stock.csv. Leave completion checks blank until actually built.

### S12 - Ascending structural lift / civil Y+41..+44

568 new positions; 14,173 cumulative. Local X14..50, Z6..38; civil Y+41..+44. Roles: B=216, L=352.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.bittBlock | 0 | 216 | 3 stacks + 24 | B |
| Ztones:tile.laveBlock | 12 | 352 | 5 stacks + 32 | L |

Exact new cells: stages/S12-runs.csv.gz. Stage stock: stages/S12-stock.csv. Leave completion checks blank until actually built.

### S13 - Ascending structural lift / civil Y+45..+48

344 new positions; 14,517 cumulative. Local X16..48, Z6..38; civil Y+45..+48. Roles: B=216, L=128.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.bittBlock | 0 | 216 | 3 stacks + 24 | B |
| Ztones:tile.laveBlock | 12 | 128 | 2 stacks + 0 | L |

Exact new cells: stages/S13-runs.csv.gz. Stage stock: stages/S13-stock.csv. Leave completion checks blank until actually built.

### S14 - Ascending structural lift / civil Y+49..+52

452 new positions; 14,969 cumulative. Local X16..48, Z6..38; civil Y+49..+52. Roles: B=324, L=128.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.bittBlock | 0 | 324 | 5 stacks + 4 | B |
| Ztones:tile.laveBlock | 12 | 128 | 2 stacks + 0 | L |

Exact new cells: stages/S14-runs.csv.gz. Stage stock: stages/S14-stock.csv. Leave completion checks blank until actually built.

### S15 - Ascending structural lift / civil Y+53..+56

444 new positions; 15,413 cumulative. Local X16..48, Z6..38; civil Y+53..+56. Roles: B=108, L=336.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.bittBlock | 0 | 108 | 1 stacks + 44 | B |
| Ztones:tile.laveBlock | 12 | 336 | 5 stacks + 16 | L |

Exact new cells: stages/S15-runs.csv.gz. Stage stock: stages/S15-stock.csv. Leave completion checks blank until actually built.

### S16 - Ascending structural lift / civil Y+57..+60

328 new positions; 15,741 cumulative. Local X18..46, Z6..38; civil Y+57..+60. Roles: B=200, L=128.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.bittBlock | 0 | 200 | 3 stacks + 8 | B |
| Ztones:tile.laveBlock | 12 | 128 | 2 stacks + 0 | L |

Exact new cells: stages/S16-runs.csv.gz. Stage stock: stages/S16-stock.csv. Leave completion checks blank until actually built.

### S17 - Ascending structural lift / civil Y+61..+64

528 new positions; 16,269 cumulative. Local X18..46, Z6..38; civil Y+61..+64. Roles: B=400, L=128.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.bittBlock | 0 | 400 | 6 stacks + 16 | B |
| Ztones:tile.laveBlock | 12 | 128 | 2 stacks + 0 | L |

Exact new cells: stages/S17-runs.csv.gz. Stage stock: stages/S17-stock.csv. Leave completion checks blank until actually built.

### S18 - Ascending structural lift / civil Y+65..+65

957 new positions; 17,226 cumulative. Local X18..46, Z6..38; civil Y+65..+65. Roles: B=837, L=120.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.bittBlock | 0 | 837 | 13 stacks + 5 | B |
| Ztones:tile.laveBlock | 12 | 120 | 1 stacks + 56 | L |

Exact new cells: stages/S18-runs.csv.gz. Stage stock: stages/S18-stock.csv. Leave completion checks blank until actually built.

### S19 - Glazing infill / civil Y+5..+8

752 new positions; 17,978 cumulative. Local X2..62, Z1..42; civil Y+5..+8. Roles: G=752.

1. Fit the listed glass cells into the completed frame. This includes any roof or clerestory glazing at these levels. Use the depth coordinates, not a flat facade projection.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| minecraft:glass | 0 | 752 | 11 stacks + 48 | G |

Exact new cells: stages/S19-runs.csv.gz. Stage stock: stages/S19-stock.csv. Leave completion checks blank until actually built.

### S20 - Glazing infill / civil Y+17..+18

248 new positions; 18,226 cumulative. Local X12..52, Z6..38; civil Y+17..+18. Roles: G=248.

1. Fit the listed glass cells into the completed frame. This includes any roof or clerestory glazing at these levels. Use the depth coordinates, not a flat facade projection.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| minecraft:glass | 0 | 248 | 3 stacks + 56 | G |

Exact new cells: stages/S20-runs.csv.gz. Stage stock: stages/S20-stock.csv. Leave completion checks blank until actually built.

### S21 - Glazing infill / civil Y+24..+32

445 new positions; 18,671 cumulative. Local X12..52, Z6..38; civil Y+24..+32. Roles: G=445.

1. Fit the listed glass cells into the completed frame. This includes any roof or clerestory glazing at these levels. Use the depth coordinates, not a flat facade projection.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| minecraft:glass | 0 | 445 | 6 stacks + 61 | G |

Exact new cells: stages/S21-runs.csv.gz. Stage stock: stages/S21-stock.csv. Leave completion checks blank until actually built.

### S22 - Glazing infill / civil Y+38..+46

417 new positions; 19,088 cumulative. Local X14..50, Z6..38; civil Y+38..+46. Roles: G=417.

1. Fit the listed glass cells into the completed frame. This includes any roof or clerestory glazing at these levels. Use the depth coordinates, not a flat facade projection.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| minecraft:glass | 0 | 417 | 6 stacks + 33 | G |

Exact new cells: stages/S22-runs.csv.gz. Stage stock: stages/S22-stock.csv. Leave completion checks blank until actually built.

### S23 - Glazing infill / civil Y+52..+59

289 new positions; 19,377 cumulative. Local X16..48, Z6..38; civil Y+52..+59. Roles: G=289.

1. Fit the listed glass cells into the completed frame. This includes any roof or clerestory glazing at these levels. Use the depth coordinates, not a flat facade projection.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| minecraft:glass | 0 | 289 | 4 stacks + 33 | G |

Exact new cells: stages/S23-runs.csv.gz. Stage stock: stages/S23-stock.csv. Leave completion checks blank until actually built.

### S24 - Glazing infill / civil Y+60..+60

100 new positions; 19,477 cumulative. Local X18..46, Z6..38; civil Y+60..+60. Roles: G=100.

1. Fit the listed glass cells into the completed frame. This includes any roof or clerestory glazing at these levels. Use the depth coordinates, not a flat facade projection.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| minecraft:glass | 0 | 100 | 1 stacks + 36 | G |

Exact new cells: stages/S24-runs.csv.gz. Stage stock: stages/S24-stock.csv. Leave completion checks blank until actually built.

### S25 - Cyan trim and white fixtures / civil Y+2..+2

4 new positions; 19,481 cumulative. Local X16..17, Z46..47; civil Y+2..+2. Roles: N=4.

1. Place the cyan trim and white fixtures at the listed positions after the frame/glazing. These are individual blocks; do not turn every edge into a continuous cyan strip or assume the counts establish light coverage.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| ExtraUtilities:greenscreen | 9 | 4 | 0 stacks + 4 | N |

Exact new cells: stages/S25-runs.csv.gz. Stage stock: stages/S25-stock.csv. Leave completion checks blank until actually built.

### S26 - Cyan trim and white fixtures / civil Y+24..+24

35 new positions; 19,516 cumulative. Local X15..49, Z38..38; civil Y+24..+24. Roles: N=35.

1. Place the cyan trim and white fixtures at the listed positions after the frame/glazing. These are individual blocks; do not turn every edge into a continuous cyan strip or assume the counts establish light coverage.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| ExtraUtilities:greenscreen | 9 | 35 | 0 stacks + 35 | N |

Exact new cells: stages/S26-runs.csv.gz. Stage stock: stages/S26-stock.csv. Leave completion checks blank until actually built.

### S27 - Cyan trim and white fixtures / civil Y+38..+38

31 new positions; 19,547 cumulative. Local X17..47, Z38..38; civil Y+38..+38. Roles: N=31.

1. Place the cyan trim and white fixtures at the listed positions after the frame/glazing. These are individual blocks; do not turn every edge into a continuous cyan strip or assume the counts establish light coverage.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| ExtraUtilities:greenscreen | 9 | 31 | 0 stacks + 31 | N |

Exact new cells: stages/S27-runs.csv.gz. Stage stock: stages/S27-stock.csv. Leave completion checks blank until actually built.

### S28 - Cyan trim and white fixtures / civil Y+52..+52

27 new positions; 19,574 cumulative. Local X19..45, Z38..38; civil Y+52..+52. Roles: N=27.

1. Place the cyan trim and white fixtures at the listed positions after the frame/glazing. These are individual blocks; do not turn every edge into a continuous cyan strip or assume the counts establish light coverage.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| ExtraUtilities:greenscreen | 9 | 27 | 0 stacks + 27 | N |

Exact new cells: stages/S28-runs.csv.gz. Stage stock: stages/S28-stock.csv. Leave completion checks blank until actually built.

### S29 - Planting-bed dirt / civil Y+0..+0

50 new positions; 19,624 cumulative. Local X6..58, Z53..57; civil Y+0..+0. Roles: E=50.

1. Fill only E positions with dirt0 inside the modeled beds. Do not backfill open paths, bench gaps or the whole planter envelope.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| minecraft:dirt | 0 | 50 | 0 stacks + 50 | E |

Exact new cells: stages/S29-runs.csv.gz. Stage stock: stages/S29-stock.csv. Leave completion checks blank until actually built.

### S30 - Upright decorative oak trunks / civil Y+1..+4

8 new positions; 19,632 cumulative. Local X8..56, Z55..55; civil Y+1..+4. Roles: T=8.

1. Place T as oak log0 with the end grain up/down. The trunks are decorative built forms, not growing trees or a working tree-farm design.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| minecraft:log | 0 | 8 | 0 stacks + 8 | T |

Exact new cells: stages/S30-runs.csv.gz. Stage stock: stages/S30-stock.csv. Leave completion checks blank until actually built.

### S31 - Player-placed oak foliage / civil Y+1..+9

314 new positions; 19,946 cumulative. Local X6..58, Z53..57; civil Y+1..+9. Roles: V=314.

1. Place V using oak leaf inventory0; the inspected vanilla ItemLeaves path adds persistence flag4. Match every foliage cell, then inspect the actual placed leaves in the target game. No growth or crop behavior is claimed.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| minecraft:leaves | 0 | 314 | 4 stacks + 58 | V |

Exact new cells: stages/S31-runs.csv.gz. Stage stock: stages/S31-stock.csv. Leave completion checks blank until actually built.

## Complete level schedule

| Civil Y | Positions | Role counts | Stages |
| --- | --- | --- | --- |
| -1 | 4225 | F:3803 L:422 | S01 |
| +0 | 470 | B:248 E:50 K:116 L:44 s:12 | S01 S29 |
| +1 | 436 | B:76 K:6 L:304 T:2 V:48 | S02 S30 S31 |
| +2 | 354 | B:248 K:8 L:44 N:4 T:2 V:48 | S02 S25 S30 S31 |
| +3 | 306 | B:248 K:8 L:48 T:2 | S02 S30 |
| +4 | 306 | B:248 K:8 L:48 T:2 | S02 S30 |
| +5 | 354 | B:76 G:172 K:8 L:48 V:50 | S03 S19 S31 |
| +6 | 354 | B:76 G:172 K:8 L:48 V:50 | S03 S19 S31 |
| +7 | 386 | B:76 G:204 K:8 L:48 V:50 | S03 S19 S31 |
| +8 | 386 | B:76 G:204 K:8 L:48 V:50 | S03 S19 S31 |
| +9 | 354 | B:280 K:8 L:48 V:18 | S04 S31 |
| +10 | 336 | B:280 K:8 L:48 | S04 |
| +11 | 336 | B:76 L:260 | S04 |
| +12 | 336 | B:76 L:260 | S04 |
| +13 | 2646 | B:2440 L:206 | S05 |
| +14 | 156 | L:156 | S05 |
| +15 | 156 | B:124 L:32 | S05 |
| +16 | 156 | B:124 L:32 | S05 |
| +17 | 156 | G:124 L:32 | S06 S20 |
| +18 | 156 | G:124 L:32 | S06 S20 |
| +19 | 156 | B:124 L:32 | S06 |
| +20 | 156 | B:124 L:32 | S06 |
| +21 | 156 | B:124 L:32 | S07 |
| +22 | 156 | B:124 L:32 | S07 |
| +23 | 156 | B:124 L:32 | S07 |
| +24 | 156 | G:89 L:32 N:35 | S07 S21 S26 |
| +25 | 156 | G:124 L:32 | S08 S21 |
| +26 | 156 | B:124 L:32 | S08 |
| +27 | 156 | L:156 | S08 |
| +28 | 148 | L:148 | S08 |
| +29 | 148 | B:116 L:32 | S09 |
| +30 | 148 | B:116 L:32 | S09 |
| +31 | 148 | G:116 L:32 | S09 S21 |
| +32 | 148 | G:116 L:32 | S09 S21 |
| +33 | 148 | B:116 L:32 | S10 |
| +34 | 148 | B:116 L:32 | S10 |
| +35 | 148 | B:116 L:32 | S10 |
| +36 | 148 | B:116 L:32 | S10 |
| +37 | 148 | B:116 L:32 | S11 |
| +38 | 148 | G:85 L:32 N:31 | S11 S22 S27 |
| +39 | 148 | G:116 L:32 | S11 S22 |
| +40 | 148 | B:116 L:32 | S11 |
| +41 | 148 | L:148 | S12 |
| +42 | 140 | L:140 | S12 |
| +43 | 140 | B:108 L:32 | S12 |
| +44 | 140 | B:108 L:32 | S12 |
| +45 | 140 | G:108 L:32 | S13 S22 |
| +46 | 140 | G:108 L:32 | S13 S22 |
| +47 | 140 | B:108 L:32 | S13 |
| +48 | 140 | B:108 L:32 | S13 |
| +49 | 140 | B:108 L:32 | S14 |
| +50 | 140 | B:108 L:32 | S14 |
| +51 | 140 | B:108 L:32 | S14 |
| +52 | 140 | G:81 L:32 N:27 | S14 S23 S28 |
| +53 | 140 | G:108 L:32 | S15 S23 |
| +54 | 140 | B:108 L:32 | S15 |
| +55 | 140 | L:140 | S15 |
| +56 | 132 | L:132 | S15 |
| +57 | 132 | B:100 L:32 | S16 |
| +58 | 132 | B:100 L:32 | S16 |
| +59 | 132 | G:100 L:32 | S16 S23 |
| +60 | 132 | G:100 L:32 | S16 S24 |
| +61 | 132 | B:100 L:32 | S17 |
| +62 | 132 | B:100 L:32 | S17 |
| +63 | 132 | B:100 L:32 | S17 |
| +64 | 132 | B:100 L:32 | S17 |
| +65 | 957 | B:837 L:120 | S18 |

## Finish and validation

Compare all four facades and roof plan with the exact source model. Reconcile roles, placed states and inventory separately. Check slabs, upright logs and foliage persistence. Keep civil accesses and capped utility interfaces. Actual collision, roof protection, lighting, recipes, machine fit and accessible interiors remain open. No native schematic/import or operating plant is supplied. Use completion-record.csv only after actual construction.

