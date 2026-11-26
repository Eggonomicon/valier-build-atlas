# CP18 · Enclosed gallery descent

A five-wide, roofed stair drops six blocks between galleries. Stone footings carry Agon half-steps under pale cornices and white underlights.

Local +X is east and +Z is south. Heights are relative to the piece origin. The walk of a level piece is Y0. A port lists X along a north or south face and Z along an east or west face.

| Opening | Face | Along | Walking Y |
| --- | --- | --- | --- |
| Upper gallery | N | 1–5 | 6 |
| Lower gallery | S | 1–5 | 0 |

Choose a world position for local (0,0,0). Add **(0, -2, 0)** to that position for the clipboard minimum. The occupied source coordinates end at **(6, 11, 17)** inclusive. Both WorldEdit origin and offset are zero.



- Carry the floor, wall and roof through each incline. The clear excavation steps with the stair.
- To reach Y−12 from Y0, use two descents at origins Y−6 and Y−12. The north end is the high side.

Open placement.json for the inclusive excavation boxes. Each row is [minimum X, minimum Y, minimum Z, maximum X, maximum Y, maximum Z]. Clear these positions and use the layer sheets to identify rock that needs replacing by floors, walls, roof or facade. Keep the surrounding cliff.

Open `index.html` for level grids and `coordinates.csv.gz` for precise hosts. The grid keys give material metadata, shaped-block facing and multipart slots. Stock counts placed blocks and separate cut parts. Fill any marked sources by hand after closing the bank. Use the matching facing file in Schematica with Printer OFF for manual placement.
