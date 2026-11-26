# CP13 · Vaulted road tunnel lining

A repeatable 16-block section cut into the canyon. Pale ribs follow the shape of the portal through the dark vault. The twelve-wide avenue and both curbs run straight through.

Local +X is east and +Z is south. Heights are relative to the piece origin. The walk of a level piece is Y0. A port lists X along a north or south face and Z along an east or west face.

| Opening | Face | Along | Walking Y |
| --- | --- | --- | --- |
| North avenue | N | 2–13 | 0 |
| South avenue | S | 2–13 | 0 |

Choose a world position for local (0,0,0). Add **(0, -2, 0)** to that position for the clipboard minimum. The occupied source coordinates end at **(15, 10, 15)** inclusive. Both WorldEdit origin and offset are zero.

Set CP13 directly behind CP03 at the same X and Y origin, with consecutive Z faces. The lane, pale curbs, sidewalk and floor course meet block for block. Repeat every 16 blocks.

- Clear the listed passage and the whole hosts of the planned lining. Keep a twelve-wide, six-high clear corridor even where the extra vault height tapers.
- Set the floor, dark backing and pale jambs before the wedge cuts and ceiling covers. Each light descends only within the Y8 ceiling host.
- Check the rock cover and route through both ends before extending the next section.

Open placement.json for the inclusive excavation boxes. Each row is [minimum X, minimum Y, minimum Z, maximum X, maximum Y, maximum Z]. Clear these positions and use the layer sheets to identify rock that needs replacing by floors, walls, roof or facade. Keep the surrounding cliff.

Open `index.html` for level grids and `coordinates.csv.gz` for precise hosts. The grid keys give material metadata, shaped-block facing and multipart slots. Stock counts placed blocks and separate cut parts. Fill any marked sources by hand after closing the bank. Use the matching facing file in Schematica with Printer OFF for manual placement.
