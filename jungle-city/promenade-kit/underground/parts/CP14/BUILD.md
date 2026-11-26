# CP14 · Crew gallery straight

A five-wide, four-high walk behind the canyon face. Use the charcoal lane to find the way through pale gaskets and recessed lighting to the next workshop.

Local +X is east and +Z is south. Heights are relative to the piece origin. The walk of a level piece is Y0. A port lists X along a north or south face and Z along an east or west face.

| Opening | Face | Along | Walking Y |
| --- | --- | --- | --- |
| North crew gallery | N | 1–5 | 0 |
| South crew gallery | S | 1–5 | 0 |

Choose a world position for local (0,0,0). Add **(0, -2, 0)** to that position for the clipboard minimum. The occupied source coordinates end at **(6, 5, 15)** inclusive. Both WorldEdit origin and offset are zero.

Match seven-block outer ends at Y0. Split to CP15 at its X5–9 or Z5–9 ports. For a north or south CP15 face, shift the gallery origin four blocks east of the junction's origin.

- Excavate a five-wide, four-high void. Clear the planned lining hosts and place both floor courses, the sidewall and the two ceiling courses.
- Lay the pale floor edges and center stripe before trimming the portal. Keep wall inserts inside their own host so the whole four-high passage stays clear.

Open placement.json for the inclusive excavation boxes. Each row is [minimum X, minimum Y, minimum Z, maximum X, maximum Y, maximum Z]. Clear these positions and use the layer sheets to identify rock that needs replacing by floors, walls, roof or facade. Keep the surrounding cliff.

Open `index.html` for level grids and `coordinates.csv.gz` for precise hosts. The grid keys give material metadata, shaped-block facing and multipart slots. Stock counts placed blocks and separate cut parts. Fill any marked sources by hand after closing the bank. Use the matching facing file in Schematica with Printer OFF for manual placement.
