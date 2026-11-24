# Valier city operations planning

Local NW origin; +X east, +Z south, north up. Y is civil relative to future surface S; world origin/rotation/S unassigned. Bounds inclusive.

All81 original plot purposes are preserved. Four named zones per plot are operating allocations, not modeled partitions.32 singleblock machine cells are proposed across Steam Works, LV factory, ore processing, chemistry and circuits. Source shell blocks are unchanged. None are installed/game-tested.

## Infrastructure and startup

1. P0 create/survey PDIM and translate local coordinates
2. P1 nineteen existing northwest civil work orders
3. P2 civic/perimeter civil network
4. P3 remaining street/gallery network
5. P4 parcel approach, cover, access and inspection
6. P5 water/fuel/Steam/LV commissioning one building at a time; permanent09-08/09-09 generation later

## First process startup

1. 01-03 choose and test water supply
2. 01-02 choose/test coke/fuel process
3. 01-01 one boiler and steam process trial; add proposed second boiler only after measured demand
4. 01-04 basic LV turbine and one consumer at a time
5. 02-01 choose ore-specific recipe chain
6. 02-03/02-04 reagents/circuits after NEI checks
7. 02-02 furnace after energy, coil, hatch and formation checks

## Road/service standard

Surface offsets0..1 and10..11 are sidewalks;2..9 is the eight-wide running surface. This preserves the adopted12-block civil ribbon. The optional dark/light surface treatment replaces existing cells and has no adopted stock bill. Gallery fluid reserves3..4, walking5..6, electrical7..8; keep floorY-10, clearY-9..-5, roofY-4. Actual networks and junction separation remain undesigned.

## Proposed machine cells

Machine ID is a GregTech meta-tile/item-damage ID, not placed vanilla metadata. Native block subtype, facing NBT and export are unverified. Each selected unit uses one source-supported cell; the3x3x5 clearance module is a design allowance, not machine dimensions. Steam process main face is proposed South, configured exhaust North. The exhaust cell is reserved outside cell-center operator paths; runtime wrench/cover behavior still needs a test. Boilers and turbine output orientation require separate setup.

## City department register

### 01-01 / Steam works
Sector NW; original label Steam/LV; city bounds [22, 22, 85, 85].
Fuel and water → steam → six starter steam processes; output to LV factory.
Zones: Boiler room; Hot processing; Forming workshop; Ore and recovery.
Interfaces: Water01-03; coke01-02; processed stock01-04.
Status: Exact proposed singleblock cells with checked shell clearances.

### 01-02 / Coke ovens
Sector NW; original label Steam/LV; city bounds [118, 22, 181, 85].
Raw fuel → coke and creosote; isolate liquid collection from solid dispatch.
Zones: Fuel receiving; Coke conversion; Creosote collection; Coke dispatch.
Interfaces: Feed from tree/charcoal departments later; coke to01-01; creosote to fluid store.
Status: Program zoning only; equipment selection/fit not checked.

### 01-03 / Water works
Sector NW; original label Steam/LV; city bounds [214, 22, 277, 85].
Acquire water → buffer → separate boiler/process branches; select source and pump after recipe checks.
Zones: Water intake; Buffer storage; Pump and distribution; Inspection workshop.
Interfaces: Boiler01-01; ore02-01; chemistry02-03.
Status: Program zoning only; equipment selection/fit not checked.

### 01-04 / LV factory
Sector NW; original label Steam/LV; city bounds [310, 22, 373, 85].
Ingots/plates/wire → motors, pumps, pistons and reusable components.
Zones: Metal working; Assembly; Component fabrication; Finished stock.
Interfaces: Ore02-01; Steam01-01; circuits02-04; logistics01-05.
Status: Exact proposed singleblock cells with checked shell clearances.

### 01-05 / Logistics hub
Sector C; original label All; city bounds [406, 22, 469, 85].
North district stock exchange; manual buffers first, digital network later.
Zones: Receiving; Bulk stores; Dispatch; Network service.
Interfaces: Manufacturing NW; chemistry NE; trunk through civic cross.
Status: Program zoning only; equipment selection/fit not checked.

### 01-06 / Polymer plant
Sector NE; original label Steam/LV; city bounds [502, 22, 565, 85].
Keep feed preparation, polymer reaction and molding separate; recipe-specific trains later.
Zones: Monomer preparation; Polymer conversion; Molding and finishing; Product buffer.
Interfaces: Oil01-07; chemistry02-03; fluids04-09.
Status: Program zoning only; equipment selection/fit not checked.

### 01-07 / Oil processing
Sector NE; original label Steam/LV; city bounds [598, 22, 661, 85].
Crude feed → separated fractions → treated fuel or chemistry feed.
Zones: Crude intake; Primary separation; Fuel finishing; Fluid dispatch.
Interfaces: MV fuel03-02; polymer01-06; fluids04-09.
Status: Program zoning only; equipment selection/fit not checked.

### 01-08 / Materials laboratory
Sector NE; original label Steam/LV; city bounds [694, 22, 757, 85].
Small-batch material development; isolate experimental recipes from bulk production.
Zones: Sample receiving; Material tests; Batch preparation; Reference archive.
Interfaces: Metallurgy04-01; research cross; chemistry02-03.
Status: Program zoning only; equipment selection/fit not checked.

### 01-09 / Electronics lab
Sector NE; original label Steam/LV; city bounds [790, 22, 853, 85].
Prepare electronics and inspect products; detailed circuits stay in02-04.
Zones: Electronic preparation; Precision fabrication; Testing; Component stock.
Interfaces: LV circuits02-04; logistics01-05.
Status: Program zoning only; equipment selection/fit not checked.

### 02-01 / LV ore processing
Sector NW; original label Steam/LV; city bounds [22, 118, 85, 181].
Route ore-specific chains; dry reduction first, wet/separation steps when unlocked.
Zones: Ore receiving; Primary reduction; Washing reservation; Dust and byproducts.
Interfaces: Water01-03; EBF02-02; factory01-04.
Status: Exact proposed singleblock cells with checked shell clearances.

### 02-02 / EBF hall
Sector NW; original label Steam/LV; city bounds [118, 118, 181, 181].
Recipe-specific furnace → cooling where required → alloy output; reserve tall maintenance space.
Zones: Charge preparation; Furnace island; Cooling reservation; Alloy dispatch.
Interfaces: Ore02-01; gases02-03; metallurgy04-01.
Status: Program zoning only; equipment selection/fit not checked.

### 02-03 / LV chemistry
Sector NW; original label Steam/LV; city bounds [214, 118, 277, 181].
Batch reagents → chemical conversion; keep each reagent and product independently identifiable.
Zones: Reagent preparation; Reaction; Electrolysis reservation; Fluid buffers.
Interfaces: Water01-03; circuits02-04; fluids04-09.
Status: Exact proposed singleblock cells with checked shell clearances.

### 02-04 / LV circuits
Sector NW; original label Steam/LV; city bounds [310, 118, 373, 181].
Prepare boards, fine wire and parts → circuit assembly after exact recipes are checked.
Zones: Board preparation; Circuit assembly; Fine components; Circuit stock.
Interfaces: Factory01-04; electronics01-09; chemistry02-03.
Status: Exact proposed singleblock cells with checked shell clearances.

### 02-05 / Logistics hub
Sector C; original label All; city bounds [406, 118, 469, 181].
Second north logistics interface; distribute without duplicating production responsibilities.
Zones: Receiving; Manufacturing buffers; Dispatch; Network service.
Interfaces: Tier factories; research cross; NE processes.
Status: Program zoning only; equipment selection/fit not checked.

### 02-06 / EV chemistry
Sector NE; original label MV/HV; city bounds [502, 118, 565, 181].
EV chemistry department; historical phase label does not establish unlock availability.
Zones: EV reagent receiving; EV reactions; Product treatment; Buffers.
Interfaces: Chemical reactors04-07; fluid storage04-09.
Status: Program zoning only; equipment selection/fit not checked.

### 02-07 / EV processing
Sector NE; original label MV/HV; city bounds [598, 118, 661, 181].
Dedicated EV processing trains after throughput and machine choices.
Zones: EV material intake; EV processing; Sorting; Product buffers.
Interfaces: EV chemistry02-06; IV assembly03-06.
Status: Program zoning only; equipment selection/fit not checked.

### 02-08 / IV chemistry
Sector NE; original label MV/HV; city bounds [694, 118, 757, 181].
IV chemical trains; select recipe machines only when the installed tier is reached.
Zones: IV reagent intake; IV reactions; Product treatment; Buffers.
Interfaces: LuV chemistry03-07; fluid storage04-09.
Status: Program zoning only; equipment selection/fit not checked.

### 02-09 / Platinum line
Sector NE; original label MV/HV; city bounds [790, 118, 853, 181].
Separate platinum-group processing and side-stream recovery; exact recipe sequence pending.
Zones: Feed preparation; Platinum separation; Recovery; Product storage.
Interfaces: HV metallurgy04-01; IV chemistry02-08.
Status: Program zoning only; equipment selection/fit not checked.

### 03-01 / MV fabrication
Sector NW; original label MV/HV; city bounds [22, 214, 85, 277].
MV-tier fabrication and components; avoid copying bulk chemistry into this hall.
Zones: MV metal working; MV assembly; Machine components; Stock.
Interfaces: Factory01-04; circuits02-04; logistics02-05.
Status: Program zoning only; equipment selection/fit not checked.

### 03-02 / MV fuel
Sector NW; original label MV/HV; city bounds [118, 214, 181, 277].
Prepare chosen MV fuel route; no fuel-rate or machine-count commitment yet.
Zones: Fuel receiving; Fuel processing; Buffer storage; Dispatch.
Interfaces: Oil01-07; power03-03; fluid storage04-09.
Status: Program zoning only; equipment selection/fit not checked.

### 03-03 / MV power
Sector NW; original label MV/HV; city bounds [214, 214, 277, 277].
Local MV generation annex; long-term generation district remains in SE.
Zones: Fuel interface; MV generation; Electrical distribution; Maintenance.
Interfaces: Fuel03-02; MV fabrication03-01.
Status: Program zoning only; equipment selection/fit not checked.

### 03-04 / HV fabrication
Sector NW; original label MV/HV; city bounds [310, 214, 373, 277].
HV fabrication with separated production and upgrade aisles.
Zones: HV metal working; HV assembly; Advanced components; Stock.
Interfaces: Metallurgy04-01; cleanroom04-03; HV chemistry04-02.
Status: Program zoning only; equipment selection/fit not checked.

### 03-05 / Research gallery
Sector C; original label All; city bounds [406, 214, 469, 277].
Research gallery with demonstrators, test records and maintenance access.
Zones: Public displays; Test workshop; Archive; Service support.
Interfaces: Adjacent fabrication; central research cross.
Status: Program zoning only; equipment selection/fit not checked.

### 03-06 / IV assembly
Sector NE; original label EV+; city bounds [502, 214, 565, 277].
IV assembly and future line reservation; machine height/length must be verified before installation.
Zones: Component intake; IV assembly; Testing; Product buffer.
Interfaces: EV processing02-07; circuits02-04; cleanroom04-03.
Status: Program zoning only; equipment selection/fit not checked.

### 03-07 / LuV chemistry
Sector NE; original label EV+; city bounds [598, 214, 661, 277].
Later LuV chemistry; preserve independent feed and waste routes.
Zones: LuV reagent intake; LuV reactions; Recovery; Buffer storage.
Interfaces: IV chemistry02-08; ZPM chemistry03-08.
Status: Program zoning only; equipment selection/fit not checked.

### 03-08 / ZPM chemistry
Sector NE; original label EV+; city bounds [694, 214, 757, 277].
Later ZPM chemistry; exact machine and containment design deferred.
Zones: ZPM reagent intake; ZPM reactions; Recovery; Buffer storage.
Interfaces: LuV chemistry03-07; UV reserve03-09.
Status: Program zoning only; equipment selection/fit not checked.

### 03-09 / UV reserve
Sector NE; original label EV+; city bounds [790, 214, 853, 277].
Unassigned UV process expansion; leave empty until a specific process is approved.
Zones: Future intake; UV process reserve; Utility reserve; Maintenance reserve.
Interfaces: ZPM chemistry03-08; outer expansion if needed.
Status: Program zoning only; equipment selection/fit not checked.

### 04-01 / HV metallurgy
Sector NW; original label EV+; city bounds [22, 310, 85, 373].
HV metallurgy; separate hot equipment from operator and dispatch routes.
Zones: Metal feed receiving; High temperature processing; Cooling and finishing; Alloy stock.
Interfaces: EBF02-02; platinum02-09; HV fabrication03-04.
Status: Program zoning only; equipment selection/fit not checked.

### 04-02 / HV chemistry
Sector NW; original label EV+; city bounds [118, 310, 181, 373].
HV chemistry with independent reagent buffers and recipe-specific conversion trains.
Zones: Reagent receiving; HV reactions; Recovery; Fluid dispatch.
Interfaces: Chemical reactors04-07; metallurgy04-01.
Status: Program zoning only; equipment selection/fit not checked.

### 04-03 / Cleanroom
Sector NW; original label EV+; city bounds [214, 310, 277, 373].
Reserve a cleanroom enclosure inside the shell; enclosure dimensions/doors/filter formation remain unverified.
Zones: Gowning and service; Cleanroom reserve; External utilities; Output inspection.
Interfaces: HV fabrication03-04; IV assembly03-06.
Status: Program zoning only; equipment selection/fit not checked.

### 04-04 / HV reserves
Sector NW; original label EV+; city bounds [310, 310, 373, 373].
Hold HV overflow space; assign only after measured bottlenecks.
Zones: Future intake; HV production reserve; Utility reserve; Maintenance reserve.
Interfaces: HV fabrication03-04; chemistry04-02.
Status: Program zoning only; equipment selection/fit not checked.

### 04-05 / Research gallery
Sector C; original label All; city bounds [406, 310, 469, 373].
Civic research gallery; no bulk hazardous process on public circulation.
Zones: Public displays; Test workshop; Archive; Service support.
Interfaces: HQ05-05; cleanroom04-03.
Status: Program zoning only; equipment selection/fit not checked.

### 04-06 / Chemistry intake
Sector NE; original label EV+; city bounds [502, 310, 565, 373].
Northeast chemical receiving and staging.
Zones: Bulk receipt; Feed sorting; Reagent buffers; Dispatch.
Interfaces: Reactors04-07; distillation04-08; fluids04-09.
Status: Program zoning only; equipment selection/fit not checked.

### 04-07 / Chemical reactors
Sector NE; original label EV+; city bounds [598, 310, 661, 373].
Chemical reactor department; per-recipe hatches and service sides later.
Zones: Feed preparation; Reactor trains; Product conditioning; Maintenance.
Interfaces: Chemistry intake04-06; fluid storage04-09.
Status: Program zoning only; equipment selection/fit not checked.

### 04-08 / Distillation
Sector NE; original label EV+; city bounds [694, 310, 757, 373].
Reserve tall distillation equipment; exact column, output elevations and roof clearance need source evidence.
Zones: Feed buffers; Column reserve; Fraction collection; Maintenance.
Interfaces: Oil01-07; chemical reactors04-07; fluids04-09.
Status: Program zoning only; equipment selection/fit not checked.

### 04-09 / Fluid storage
Sector NE; original label EV+; city bounds [790, 310, 853, 373].
One labeled buffer family per fluid; distinguish incompatible networks and overflow policies.
Zones: Receiving manifold; Dedicated fluid buffers; Product manifold; Inspection.
Interfaces: NE chemistry and SE fuel departments.
Status: Program zoning only; equipment selection/fit not checked.

### 05-01 / Logistics hub
Sector C; original label All; city bounds [22, 406, 85, 469].
West civic logistics interface; stores and handover point.
Zones: Receiving; West district stores; Dispatch; Network service.
Interfaces: NW production; SW biological departments.
Status: Program zoning only; equipment selection/fit not checked.

### 05-02 / Logistics hub
Sector C; original label All; city bounds [118, 406, 181, 469].
Civic distribution buffers without changing original plot purpose.
Zones: Receiving; Civic stores; Dispatch; Network service.
Interfaces: HQ05-05; research galleries; west districts.
Status: Program zoning only; equipment selection/fit not checked.

### 05-03 / Research gallery
Sector C; original label All; city bounds [214, 406, 277, 469].
Research exhibits and records; utility access stays outside visitor displays.
Zones: Public displays; Demonstration workshop; Archive; Maintenance.
Interfaces: HQ05-05; manufacturing and biological research.
Status: Program zoning only; equipment selection/fit not checked.

### 05-04 / Research gallery
Sector C; original label All; city bounds [310, 406, 373, 469].
Central research displays and project documentation.
Zones: Public displays; Demonstration workshop; Archive; Maintenance.
Interfaces: HQ05-05; adjacent logistics and transit.
Status: Program zoning only; equipment selection/fit not checked.

### 05-05 / HQ + ceremonial plaza
Sector C; original label Steam onward; city bounds [405, 405, 469, 469].
HQ program within preserved65-square reservation; tower floors and public routes need a separate interior model.
Zones: Reception and plaza; Operations and records; Exhibition; Building services.
Interfaces: Research cross; transit05-06; city control06-09.
Status: Program zoning only; equipment selection/fit not checked.

### 05-06 / Transit station
Sector C; original label All; city bounds [502, 406, 565, 469].
Transport mode and gauge remain undecided; reserve accessible public route and separate freight handling.
Zones: Passenger concourse; Platform reservation; Freight handover; Maintenance.
Interfaces: HQ05-05; civic logistics; south transit06-05.
Status: Program zoning only; equipment selection/fit not checked.

### 05-07 / Public garden
Sector C; original label All; city bounds [598, 406, 661, 469].
Public landscape; no industrial equipment in visitor routes.
Zones: Arrival court; Seating garden; Planting; Service path.
Interfaces: Transit05-06; adjacent garden05-08.
Status: Program zoning only; equipment selection/fit not checked.

### 05-08 / Public garden
Sector C; original label All; city bounds [694, 406, 757, 469].
Public landscape extension with independent maintenance access.
Zones: Garden rooms; Seating; Planting; Service path.
Interfaces: Garden05-07; east logistics05-09.
Status: Program zoning only; equipment selection/fit not checked.

### 05-09 / Logistics hub
Sector C; original label All; city bounds [790, 406, 853, 469].
Eastern logistics exchange between chemistry and power.
Zones: Receiving; East district stores; Dispatch; Network service.
Interfaces: NE chemistry; SE generation; city trunk.
Status: Program zoning only; equipment selection/fit not checked.

### 06-01 / Tree farm
Sector SW; original label EV+; city bounds [22, 502, 85, 565].
Choose farm mechanism after recipe/footprint evidence; exterior planting is decorative only.
Zones: Sapling and stock; Growing reserve; Harvest service; Timber dispatch.
Interfaces: Charcoal06-02; bio feedstocks07-03.
Status: Program zoning only; equipment selection/fit not checked.

### 06-02 / Charcoal production
Sector SW; original label EV+; city bounds [118, 502, 181, 565].
Charcoal processing separate from forestry; exact oven technology pending.
Zones: Timber receiving; Charcoal conversion; Byproduct buffer; Solid fuel dispatch.
Interfaces: Tree farm06-01; coke01-02; generation.
Status: Program zoning only; equipment selection/fit not checked.

### 06-03 / CropsNH
Sector SW; original label EV+; city bounds [214, 502, 277, 565].
CropsNH species-specific farm cells and access; water/light/growth behavior need in-game checks.
Zones: Seed bank; Crop lanes reserve; Harvest sorting; Service.
Interfaces: Crop processing07-01; greenhouses07-02.
Status: Program zoning only; equipment selection/fit not checked.

### 06-04 / Bee apiary
Sector SW; original label EV+; city bounds [310, 502, 373, 565].
Bee production and breeding; species/environment/work area not yet certified.
Zones: Breeding records; Apiary reserve; Product sorting; Service.
Interfaces: Advanced bees08-01; crop processing07-01.
Status: Program zoning only; equipment selection/fit not checked.

### 06-05 / Transit station
Sector C; original label All; city bounds [406, 502, 469, 565].
South civic transit; preserve cross-city maintenance routes.
Zones: Passenger concourse; Platform reservation; Freight handover; Maintenance.
Interfaces: Transit05-06; biological district; power district.
Status: Program zoning only; equipment selection/fit not checked.

### 06-06 / HV generation
Sector SE; original label EV+; city bounds [502, 502, 565, 565].
HV power department; choose generation route and electrical topology from measured demand.
Zones: Fuel intake; HV generation; Distribution; Maintenance.
Interfaces: Fuel03-02; buffers06-08; switchyard09-06.
Status: Program zoning only; equipment selection/fit not checked.

### 06-07 / EV generation
Sector SE; original label EV+; city bounds [598, 502, 661, 565].
EV generation program; no unverified generator count or output promise.
Zones: Fuel intake; EV generation; Distribution; Maintenance.
Interfaces: Fluid storage04-09; buffers06-08; control06-09.
Status: Program zoning only; equipment selection/fit not checked.

### 06-08 / Battery buffers
Sector SE; original label EV+; city bounds [694, 502, 757, 565].
Tier-separated electrical buffers; cable amps, voltage and loss calculations remain open.
Zones: Receiving switchgear; Buffer banks; Outgoing switchgear; Maintenance.
Interfaces: SE generators; switchyard09-06; control06-09.
Status: Program zoning only; equipment selection/fit not checked.

### 06-09 / Control center
Sector SE; original label EV+; city bounds [790, 502, 853, 565].
City operations displays and configuration records; no automatic safety claim.
Zones: Monitoring; Operations desks; Network service; Emergency access.
Interfaces: HQ05-05; buffers06-08; switchyard09-06.
Status: Program zoning only; equipment selection/fit not checked.

### 07-01 / Crop processing
Sector SW; original label EV+; city bounds [22, 598, 85, 661].
Sort and process biological products; per-product trains after recipe selection.
Zones: Harvest intake; Crop processing; Byproduct treatment; Products.
Interfaces: Crops06-03; bees06-04; food07-04.
Status: Program zoning only; equipment selection/fit not checked.

### 07-02 / Greenhouses
Sector SW; original label EV+; city bounds [118, 598, 181, 661].
Greenhouse architecture is not a verified farming/climate enclosure.
Zones: Seed preparation; Growing reserve; Harvest service; Climate service.
Interfaces: Crops06-03; processing07-01.
Status: Program zoning only; equipment selection/fit not checked.

### 07-03 / Bio feedstocks
Sector SW; original label EV+; city bounds [214, 598, 277, 661].
Biological feedstock preparation; exact fuel/chemical route pending.
Zones: Biomass intake; Pretreatment; Conversion; Buffers.
Interfaces: Tree farm06-01; crops06-03; renewables08-02.
Status: Program zoning only; equipment selection/fit not checked.

### 07-04 / Food storage
Sector SW; original label EV+; city bounds [310, 598, 373, 661].
Food storage and dispatch, with clear player access.
Zones: Receiving; Food stores; Preparation; Dispatch.
Interfaces: Crop processing07-01; logistics09-05.
Status: Program zoning only; equipment selection/fit not checked.

### 07-05 / Public garden
Sector C; original label All; city bounds [406, 598, 469, 661].
Public garden on the civic cross; detached landscape modules need clash-checked placement.
Zones: Arrival court; Seating; Planting; Service path.
Interfaces: Transit06-05; south research and logistics.
Status: Program zoning only; equipment selection/fit not checked.

### 07-06 / IV generation
Sector SE; original label EV+; city bounds [502, 598, 565, 661].
IV generation program, matched to future demand.
Zones: Fuel intake; IV generation; Distribution; Maintenance.
Interfaces: Buffers06-08; switchyard09-06.
Status: Program zoning only; equipment selection/fit not checked.

### 07-07 / LuV energy
Sector SE; original label EV+; city bounds [598, 598, 661, 661].
LuV energy equipment reservation; select installed machine before fixing footprint.
Zones: Fuel intake; LuV energy reserve; Distribution; Maintenance.
Interfaces: SE electrical distribution.
Status: Program zoning only; equipment selection/fit not checked.

### 07-08 / Fusion reserve
Sector SE; original label EV+; city bounds [694, 598, 757, 661].
Fusion reservation only. Do not infer fit or construct a reactor from the hall envelope; expand outside core if required.
Zones: Feed and coolant reserve; Fusion envelope reserve; Output reserve; Maintenance reserve.
Interfaces: Fuel production; switchyard09-06; outer superplots.
Status: Program zoning only; equipment selection/fit not checked.

### 07-09 / ZPM generation
Sector SE; original label EV+; city bounds [790, 598, 853, 661].
ZPM power reserve subject to future machine footprint and demand.
Zones: Fuel intake; ZPM generation reserve; Distribution; Maintenance.
Interfaces: Buffers06-08; switchyard09-06.
Status: Program zoning only; equipment selection/fit not checked.

### 08-01 / Advanced bees
Sector SW; original label EV+; city bounds [22, 694, 85, 757].
Advanced bee research separated from ordinary apiary production.
Zones: Species archive; Breeding reserve; Production reserve; Product sorting.
Interfaces: Apiary06-04; botanical lab08-03.
Status: Program zoning only; equipment selection/fit not checked.

### 08-02 / Renewables
Sector SW; original label EV+; city bounds [118, 694, 181, 757].
Select actual renewable route after local conditions and pack evidence.
Zones: Feed preparation; Renewable conversion; Energy buffers; Maintenance.
Interfaces: Bio feedstocks07-03; power district.
Status: Program zoning only; equipment selection/fit not checked.

### 08-03 / Botanical lab
Sector SW; original label EV+; city bounds [214, 694, 277, 757].
Botanical experiments and small-scale grow tests; no growth rate claim.
Zones: Sample preparation; Botanical testing; Controlled growing reserve; Records.
Interfaces: Research gardens08-04; crops06-03.
Status: Program zoning only; equipment selection/fit not checked.

### 08-04 / Research gardens
Sector SW; original label EV+; city bounds [310, 694, 373, 757].
Research gardens for controlled visual/game trials; decorative cells do not establish crop function.
Zones: Display planting; Experimental beds; Observation; Service.
Interfaces: Botanical lab08-03.
Status: Program zoning only; equipment selection/fit not checked.

### 08-05 / Public garden
Sector C; original label All; city bounds [406, 694, 469, 757].
Public civic garden; preserve utility access and independent maintenance.
Zones: Arrival court; Seating; Planting; Service path.
Interfaces: Research gardens08-04; south logistics09-05.
Status: Program zoning only; equipment selection/fit not checked.

### 08-06 / UV generation
Sector SE; original label EV+; city bounds [502, 694, 565, 757].
UV power reserve; exact machine footprint and grid needs open.
Zones: Fuel intake; UV generation reserve; Distribution; Maintenance.
Interfaces: SE switchyard09-06; outer expansion.
Status: Program zoning only; equipment selection/fit not checked.

### 08-07 / Space materials
Sector SE; original label EV+; city bounds [598, 694, 661, 757].
Space-related materials processing; no launch/rocket structure fit is implied.
Zones: Material receiving; Space-material process reserve; Inspection; Stock.
Interfaces: Advanced metallurgy; logistics; outer special processes.
Status: Program zoning only; equipment selection/fit not checked.

### 08-08 / UHV reserve
Sector SE; original label EV+; city bounds [694, 694, 757, 757].
UHV reserve only; large machines may require outer superplots.
Zones: Future intake; UHV process reserve; Utility reserve; Maintenance reserve.
Interfaces: Future power08-09; outer expansion.
Status: Program zoning only; equipment selection/fit not checked.

### 08-09 / Future power
Sector SE; original label EV+; city bounds [790, 694, 853, 757].
Unassigned future energy expansion; no machine/capacity promise.
Zones: Future intake; Future power reserve; Utility reserve; Maintenance reserve.
Interfaces: UHV08-08; outer expansion.
Status: Program zoning only; equipment selection/fit not checked.

### 09-01 / Water recycling
Sector SW; original label EV+; city bounds [22, 790, 85, 853].
Water recycling separated from clean supply until quality and recipe behavior are checked.
Zones: Return water receiving; Treatment reserve; Clean water buffers; Inspection.
Interfaces: Biological processing; water works01-03.
Status: Program zoning only; equipment selection/fit not checked.

### 09-02 / Bio reserves
Sector SW; original label EV+; city bounds [118, 790, 181, 853].
Hold biological expansion; no process assigned before need.
Zones: Future intake; Biological reserve; Utility reserve; Maintenance reserve.
Interfaces: Adjacent biological departments.
Status: Program zoning only; equipment selection/fit not checked.

### 09-03 / Public park
Sector SW; original label EV+; city bounds [214, 790, 277, 853].
Public park with maintainable paths and planting; exact finished access/lighting remain open.
Zones: Park arrival; Seating and walks; Planting; Service.
Interfaces: Bio reserves; civic south.
Status: Program zoning only; equipment selection/fit not checked.

### 09-04 / Future bio
Sector SW; original label EV+; city bounds [310, 790, 373, 853].
Unassigned future biological process; keep adaptable.
Zones: Future intake; Future biological reserve; Utility reserve; Maintenance reserve.
Interfaces: Biological district; outer expansion.
Status: Program zoning only; equipment selection/fit not checked.

### 09-05 / Logistics hub
Sector C; original label All; city bounds [406, 790, 469, 853].
South trunk logistics exchange for biological products and power consumables.
Zones: Receiving; South district stores; Dispatch; Network service.
Interfaces: Biological district; power switchyard09-06.
Status: Program zoning only; equipment selection/fit not checked.

### 09-06 / Power switchyard
Sector SE; original label EV+; city bounds [502, 790, 565, 853].
Electrical switchyard; verify voltage/amperage, protection and losses before cable placement.
Zones: Incoming power reserve; Tier-separated switching; Outgoing feeds; Maintenance.
Interfaces: Buffers06-08; all SE generation; city demands.
Status: Program zoning only; equipment selection/fit not checked.

### 09-07 / Steam turbine hall
Sector SE; original label EV+; city bounds [598, 790, 661, 853].
Later steam turbine hall; not the initial two basic LV turbine slots in the LV factory.
Zones: Steam interface; Turbine reserve; Condensate reserve; Maintenance.
Interfaces: Water09-01; switchyard09-06; late steam supply.
Status: Program zoning only; equipment selection/fit not checked.

### 09-08 / LV generation
Sector SE; original label EV+; city bounds [694, 790, 757, 853].
Permanent LV generation department; early local turbines stay in01-04 initially.
Zones: Fuel interface; LV generation; Distribution; Maintenance.
Interfaces: Switchyard09-06; LV factory01-04.
Status: Program zoning only; equipment selection/fit not checked.

### 09-09 / MV generation
Sector SE; original label EV+; city bounds [790, 790, 853, 853].
Permanent MV generation department;03-03 remains a local manufacturing annex.
Zones: Fuel interface; MV generation; Distribution; Maintenance.
Interfaces: Switchyard09-06; MV fabrication03-01.
Status: Program zoning only; equipment selection/fit not checked.

## Commissioning checks

1. Inspect all chosen recipes and machine IDs in target GTNH2.9
2. Establish continuous water before fuel; follow actual machine warnings
3. Configure main/exhaust/output faces and covers; keep vent cells out of aisles
4. Select real pipes/cables, branch topology, voltage/amperage and losses
5. Test one recipe per machine, then simultaneous load and buffers
6. Record measured fuel/water/steam/power rates before choosing final unit counts
7. Check all hatches, maintenance, player collision, lighting and egress in game
8. Only export/import native NBT after target mapping and authorized disposable-world test

No throughput or combined materials bill is supplied. Boiler/turbine counts are proposals, not balanced supply/demand. Future fusion, cleanroom, assembly-line, distillation and other multiblock reservations do not establish machine fit. Expand beyond the core instead of forcing a machine into a64-square hall.
