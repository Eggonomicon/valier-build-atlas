# CP19 · Four-way crew gallery

Four five-wide passages meet under a molded crossing ceiling. Each arm carries the same pale skirt and dark wall lining.

Local +X is east and +Z is south. Heights are relative to the piece origin. The walk of a level piece is Y0. A port lists X along a north or south face and Z along an east or west face.

| Opening | Face | Along | Walking Y |
| --- | --- | --- | --- |
| North gallery | N | 5–9 | 0 |
| South gallery | S | 5–9 | 0 |
| East gallery | E | 5–9 | 0 |
| West gallery | W | 5–9 | 0 |

Choose a world position for local (0,0,0). Add **(0, -2, 0)** to that position for the clipboard minimum. The occupied source coordinates end at **(14, 5, 14)** inclusive. Both WorldEdit origin and offset are zero.



- Set the seven-wide outer spine against the 7×7 junction arms. Shift CP14 by +4 along the join face.
- Keep the rock outside the two intersecting cuts. Close unused openings with dark wall courses until you extend the gallery.

Open placement.json for the inclusive excavation boxes. Each row is [minimum X, minimum Y, minimum Z, maximum X, maximum Y, maximum Z]. Clear these positions and use the layer sheets to identify rock that needs replacing by floors, walls, roof or facade. Keep the surrounding cliff.

Open `index.html` for level grids and `coordinates.csv.gz` for precise hosts. The grid keys give material metadata, shaped-block facing and multipart slots. Stock counts placed blocks and separate cut parts. Fill any marked sources by hand after closing the bank. Use the matching facing file in Schematica with Printer OFF for manual placement.
