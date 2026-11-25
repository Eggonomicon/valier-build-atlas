# Steam Works / Railcraft HP utility plant

## Design basis and the building to use

This connected plan targets the current refined Steam Hall01-01 at city X/Z22..85, with ground walk0 and basement walk-6. It does not fit the historical Steam Works-v2 basement at walk-7. Keep the refined facade, floors, upper stairs and roof; install only this plan's additions and exact removal patch. All coordinates use local NW,+X east,+Z south,civil Y0=S. The actual PDIM anchor, S and rotation remain unassigned.

The user selected an HV-era utility plant using Railcraft high-pressure boilers. Two maximum 36-HP solid-fuel boilers are the confirmed design basis; commission one first. A576,000L iron water buffer, six steel steam machines and an optional HV backup turbine/battery station form the selected plant. Source/data checks passed; no game world was accessed or operating result inferred.

## The source figures that set the layout

Railcraft9.17.37 defines the 36-HP assembly as nine solid fireboxes below four 3x3 layers of HP tanks:3x5x3 overall. At1000degrees the source heat level is2;36x2 water per 8ticks, at 160steam perwater, yields theoretical1440L/t steam and 9L/t water per hot boiler. The pair therefore has 2880L/t maximum source steam and 18L/t steady water demand. These numbers require continuous fuel/water, valid formation and maximum heat. Startup, source push timing, pipe filling, chunks and actual flow must be measured.

Use three top tank outlets per boiler at the listed collector row. Each source outlet target is limited to1000L/t by the auto-push call, so a single outlet cannot collect the entire theoretical output. Huge Stainless Steel pipes carry a 1440L/t nameplate parameter each; two headers are preserved through the gallery rise. Their flow graph supports the 2304L/t operating design allocation without a single shared narrow throat. This does not simulate the actual GT distribution algorithm.

## U01 / build the gallery-to-basement connection

Use SI01 at city minimum(50,-10,19), with clear walking in X53/54. Its six half-steps rise from gallery walk-9 to refined basement walk-6. Add the exact U01 structural positions; retain matching source blocks already in the shell.

The existing shell projects a full-height entrance landing over the new ramp. Remove exactly 12 original stonebrick landing blocks: X51..56,Y-7,Z22/23. Six receive the listed bottom slabs; the others become clearance over the lower step. These are separate from the 30 cap cells at X51..56,Y-9..-5,Z18. Open that cap only after the new connector is enclosed and inspected. The other 80 plot takeoffs remain capped.

For a fresh shell, omit the listed landing/paver cells during assembly and install their replacement steps or risers from this model. For an existing shell, remove only the exact patch cells.

The water and fuel lines run in X51/52, the cable in X55 and two steam lines in X56. Keep X53/54 clear at every stair height. The upper steam pipe rises one Z column earlier than the lower one; copying identical stair risers onto both pipes would create a flow pinch. Follow exact coordinates, not a generic stair sketch.

## U02 / boilers and water buffer

B01 occupies city X34..36,Z38..40,Y0..4. B02 occupiesX44..46,Z38..40,Y0..4. Each needs9 solid fireboxes at Y0 and 36 HP tank blocks at Y1..4. Leave their surrounding pattern ring free of other boiler components; never join the two structures. These footprints stay within individual world chunks if the city anchor/orientation preserves the proposed chunk alignment; verify actual chunks after surveying.

WT01 occupiesX34..36,Z48..50,Y0..3. Build31 iron tank walls, one gauge at(35,2,48), an inlet valve at(35,1,48), and a bottom-center outlet valve at(35,0,49). Leave internal(35,1,49) and(35,2,49) empty. This hollow3x3x4 source-supported iron tank has theoretical576000L capacity. Its bottom valve automatically pushes downward into the water feed; no invented electric pump is required.

Keep both fuel chests empty while forming and filling the water system. The exact seven floor penetrations for water/steam/fuel risers appear in remove-exact-cells.csv. Each paver is replaced by its listed service cell; do not remove a whole floor strip.

## U03 / water and twin steam mains

WATER-IN is(64,-6,4), facing east into the future Water Works connection. The upstream source must actively supply water: the plant does not assume an infinite source. Small Steel pipes have80L/t nominal capacity; plan at least18L/t measured continuous supply for both boilers plus refill margin. The inlet line terminates at WT01's north valve; the bottom valve feeds both fireboxes through a separate line. These two pipe groups deliberately communicate through the tank, preserving its buffer role.

Steam collectorA spans(34..36,5,38), then reaches the A-riser(48,38). CollectorB spans(44..46,5,40), rises to the B-riser(50,40). Their basement routes feed separate gallery header cells at(64,-5,3) and(64,-7,3). Both external east connections remain closed until receiving lines and consumers are ready. Never combine both exports into one smaller pipe.

The short H00 cable and fuel crossovers pass between the steam elevations at Y-6. They do not share steam pipe cells. Configure the listed pipe neighbors and machine terminal faces; disconnect unused faces. Current installed GT6-style connection settings are enabled. Confirm actual tool/face states in game before admitting fluids.

## U04 / compact steam workshop

Install six high-pressure steel steam machines at Y0: M01 furnace(40,58), M02 alloy smelter(46,58), M03 forge hammer(40,66), M04 compressor(46,66), M05 macerator(40,70), M06 extractor(46,70). Each position has an existing supporting floor and a checked operator route. Main panels face south; configure the separate steam exhaust toward north and leave its cells uncovered. Steam enters from the top through the listed Steel Fluid Pipe drops.

The overhead manifold is at X43,Y4; it is fed from both main headers. Medium Steel branch pipes have240L/t nominal capacity. The plan reserves 128L/t per machine,768L/t total, as a conservative design allowance rather than claiming that every recipe consumes that amount. Actual recipes, overclock behavior, input/output settings and measured duty cycles remain commissioning work.

This compact workshop uses manual machine inventory I/O. Its steam feeds are modeled. No item-processing automation, recipe chain throughput or completed ore factory is claimed. Operator routes avoid the north vent zones and keep the original building stairs accessible.

## U05 / optional HV backup station

TG01 is the HV steam turbine at(62,-6,36), electrical output north. Feed steam from west(61,-6,36) and east(63,-6,36). Both terminal pipe faces stay disconnected in the normal steam-distribution mode. The source consumes 9L per 3EU, so its nominal512EU/t full output requires 1536L/t steam. A single theoretical1440L/t boiler cannot sustain that output, even before workshop demand.

BB01 is the HV four-slot battery buffer at(62,-6,32), output west. Start with one compatible HV battery; its chemistry/recipe is a separate non-block choice to confirm in game. The turbine's source cable and the buffer's export cable are physically separate networks, preventing a bypass around the buffer.

There are 3 source cable blocks before the buffer and 48 on the shortest export path. At the selected one-EU-per-cable loss, a 512V buffer packet reaches the gallery at 464EU per packet before any additional downstream cable. Sustained energy is also reduced by upstream losses and actual duty; do not treat this as512EU/t delivered to a remote machine. HV-OUT is(64,-5,7). Connect only an inspected HV-rated receiving network; this plan contains no LV/MV transformer branch.

## U06 / fuel feed and the hopper gates

FUEL-IN is the Tin Item Pipe port(64,-7,8). Upstream coke processing needs a configured insertion/extraction source; an item pipe does not automatically pull from an arbitrary chest. The fuel network rises in the service connector, crosses the basement above headroom and feeds the two local fuel chests. You can manually fill those chests for the first isolated boiler trial.

For each boiler, a chest sits above a north-pointing hopper just south of the firebox. The nearby lever powers a stone pedestal beside the hopper. First keep chests empty, lock each hopper with its lever and verify the actual redstone state, then add fuel. Unlock B01 only after water is confirmed. The chests are not face-adjacent to a firebox, so Railcraft's direct adjacent-chest pull cannot bypass the intended hopper gate.

Locking a hopper stops new feed; fuel already in the hopper/firebox can still burn. This is not an instantaneous emergency shutdown or an automatic low-water interlock. Keep water available while boilers are hot. The installed code can explode a superheated dry boiler when water is restored; if a boiler runs dry, stop fuel and let it cool fully before refilling. Record the actual control and recovery behavior in the commissioning log.

## Operating allocations / choose one mode

One-boiler commissioning:1440L/t source maximum; operate within the 1152L/t design allocation, reserving up to768 for the workshop and 384 for tested remote consumers. Keep HV backup off.

Two-boiler steam distribution:2880L/t source maximum; the 2304L/t design allocation reserves 768 for the workshop and 1536 for remote steam users. Keep the turbine's two terminal feed faces closed.

Two-boiler HV backup: reserve 768L/t for the workshop and 1536L/t for full turbine input; close remote steam export connections while using that allocation. It does not simultaneously promise the remote1536L/t steam budget.

These are manual allocation/commissioning modes with 20percent source headroom. No automatic priority regulator or load-shedding controller is present. Actual simultaneous demand, pressure/flow transients and recipe duties must be measured before increasing limits.

## Commission in this order

1. Confirm the real PDIM survey, refined shell revision, exact removal cells and player routes. Assemble and inspect U01 while the original plot cap is closed; open only its30 listed cells after the connector is enclosed.
2. Form the water tank and one boiler. Establish a continuous upstream water supply; fill the buffer and boiler before adding fuel. Check the bottom-valve output and both boiler feed branches.
3. Configure each pipe/cable face from the connection ledger. Keep external ports and turbine terminal steam faces closed. Check every north workshop vent. Allow warm-up and internal/pipe buffer filling.
4. Lock the fuel gates, add a small trial quantity to B01's chest, then enable its hopper. Test each workshop machine individually and measure water, steam, fuel and real access.
5. Commission B02 only after B01 is stable. Test the two-header export flow under a controlled receiving load. Check chunk-boundary/load behavior without risking a hot dry boiler.
6. For HV backup, close the external steam allocation, set the buffer west-facing with one HV battery, open the two turbine terminal feeds, and test packet voltage/loss and the actual downstream tier.
7. Fill the blank measured-results log. Only after a disposable-world import/re-import and actual operating tests may a native functional assembly be certified. This pack exports coordinates and configuration targets, not filled machine NBT.

## Items, removals and evidence

The model adds1052 occupied hosts, including550 pipe/cable hosts, two complete boiler assemblies, the water tank, workshop, electrical station and SI01 additions. Exact removals are 49:30 cap bricks,12 old entrance landing bricks and 7 riser pavers. Matching blocks already present in the shell are retained rather than counted again. The full-block/item ledger is separate from crafting ingredients, tools, fuel, water and the initial HV battery. Recovered materials from removals are not deducted from gather stock.

The independent verifier checks source hashes, all collision/replacement targets, boiler pattern clearance, water separation, fuel-gate bypass, connected network topology, both 2304L/t nameplate design flow allocations, cable losses and 512 player-route samples against conservative full-host utility bounds. These static checks do not establish recipes, real machine formation, multiplayer configuration, actual flow or game collision.

The new guide has one authoritative model under design/steamworks-utilities-v1/model.json. The prior civil and refined-shell sources remain unchanged. Read-only installed evidence uses Railcraft9.17.37 and GregTech5.09.54.277 from client2.9.2, with 24 class disassemblies and tagged primary sources retained locally. No live Minecraft capture, paste, save edit or game initialization occurred. The installed GregTech Railcraft mixin adds boiler pollution; pollution management is not included in this utility revision.