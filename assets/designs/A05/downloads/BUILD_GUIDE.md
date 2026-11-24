# A05 - Lamp and bollard bay: detailed exterior assembly

44 final source-model positions, partitioned into 4 disjoint stages. This is an assembly guide for the saved exterior study, not a complete functional building or game-tested schematic. The PDIM is not created; no construction is recorded.

## Setout and coordinates

Local footprint X0..3, Z0..7; northwest origin, +X east and +Z south. Civil Y-1..+6, with future walkable surface S at civil0. World block Y=S+civilY; world anchor, S, rotation and dimension ID remain blank.

Place on a parcel-side reserved strip, outside both sidewalk and utility-access volumes; game light coverage untested.

## Block palette and gathering stock

![Role palette](block-palette.png)

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| ExtraUtilities:greenscreen | 0 | 1 | 0 stacks + 1 | W |
| ExtraUtilities:greenscreen | 9 | 2 | 0 stacks + 2 | N |
| Ztones:tile.korpBlock | 2 | 5 | 0 stacks + 5 | K |
| Ztones:tile.laveBlock | 12 | 4 | 0 stacks + 4 | L |
| minecraft:stonebrick | 0 | 32 | 0 stacks + 32 | F |

Counts are inventory items, not crafting ingredients. G/Q and s/S aggregate by inventory identity; placed states remain separate. E=dirt0; T=vertical oak log0; V=oak leaf placed4/item0; Q=dry glass0. New proposed bindings do not alter the source geometry. Recipe evidence and static vanilla inspection: ../../evidence/PALETTE_EVIDENCE.md.

## Geometry and assembly milestones

![Construction progress](construction-progress.png)

Facades are nearest-hit projections, not flat wall placement grids. Construct from layers and exact depth coordinates. Diagonals are stepped full cubes; no shaped-block NBT.

## Numbered construction stages

Every final cell appears exactly once. Bounds locate the work; never fill their whole volume. Work the occupied Y levels lowest first.

### S01 - Base, floor and ground-level frame / civil Y-1..+0

34 new positions; 34 cumulative. Local X0..3, Z0..7; civil Y-1..+0. Roles: F=32, K=1, L=1.

1. Set out the full footprint and place only the base/floor and ground-frame cells assigned to this step. Keep model openings and stair apertures empty.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.korpBlock | 2 | 1 | 0 stacks + 1 | K |
| Ztones:tile.laveBlock | 12 | 1 | 0 stacks + 1 | L |
| minecraft:stonebrick | 0 | 32 | 0 stacks + 32 | F |

Exact new cells: stages/S01-runs.csv.gz. Stage stock: stages/S01-stock.csv. Leave completion checks blank until actually built.

### S02 - Ascending structural lift / civil Y+2..+4

3 new positions; 37 cumulative. Local X0..0, Z2..2; civil Y+2..+4. Roles: K=3.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.korpBlock | 2 | 3 | 0 stacks + 3 | K |

Exact new cells: stages/S02-runs.csv.gz. Stage stock: stages/S02-stock.csv. Leave completion checks blank until actually built.

### S03 - Ascending structural lift / civil Y+5..+6

4 new positions; 41 cumulative. Local X0..2, Z2..2; civil Y+5..+6. Roles: K=1, L=3.

1. Build this structural lift one horizontal layer at a time, lowest first. Place the dark fields/supports and pale frame at their separate coordinates; include roof-deck cells only where listed. Do not flatten stepped ribs or join separated facade planes into one solid wall.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| Ztones:tile.korpBlock | 2 | 1 | 0 stacks + 1 | K |
| Ztones:tile.laveBlock | 12 | 3 | 0 stacks + 3 | L |

Exact new cells: stages/S03-runs.csv.gz. Stage stock: stages/S03-stock.csv. Leave completion checks blank until actually built.

### S04 - Cyan trim and white fixtures / civil Y+1..+5

3 new positions; 44 cumulative. Local X0..2, Z2..6; civil Y+1..+5. Roles: N=2, W=1.

1. Place the cyan trim and white fixtures at the listed positions after the frame/glazing. These are individual blocks; do not turn every edge into a continuous cyan strip or assume the counts establish light coverage.
2. In the layer viewer select this step, then work through its occupied Y levels. Bright cells belong to this step; muted cells show the complete model for context. A dot or empty square is not an excavation instruction.

| Inventory block | Item meta | Items | Stacks of 64 + loose | Roles |
| --- | --- | --- | --- | --- |
| ExtraUtilities:greenscreen | 0 | 1 | 0 stacks + 1 | W |
| ExtraUtilities:greenscreen | 9 | 2 | 0 stacks + 2 | N |

Exact new cells: stages/S04-runs.csv.gz. Stage stock: stages/S04-stock.csv. Leave completion checks blank until actually built.

## Complete level schedule

| Civil Y | Positions | Role counts | Stages |
| --- | --- | --- | --- |
| -1 | 32 | F:32 | S01 |
| +0 | 2 | K:1 L:1 | S01 |
| +1 | 2 | N:2 | S04 |
| +2 | 1 | K:1 | S02 |
| +3 | 1 | K:1 | S02 |
| +4 | 1 | K:1 | S02 |
| +5 | 2 | K:1 W:1 | S03 S04 |
| +6 | 3 | L:3 | S03 |

## Finish and validation

Compare all four facades and roof plan with the exact source model. Reconcile roles, placed states and inventory separately. Check slabs, upright logs and foliage persistence. Keep civil accesses and capped utility interfaces. Actual collision, roof protection, lighting, recipes, machine fit and accessible interiors remain open. No native schematic/import or operating plant is supplied. Use completion-record.csv only after actual construction.

