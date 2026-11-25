export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  navLabel: string;
  /** SEO */
  title: string;
  description: string;
  primaryKeyword: string;
  supportingKeywords: string[];
  intent: "commercial" | "transactional" | "commercial + informational";
  /** Page content */
  h1: string;
  heroKicker: string;
  heroLede: string;
  heroImage: { src: string; alt: string };
  secondaryImage: { src: string; alt: string };
  cardSummary: string;
  problem: { heading: string; body: string[] };
  whatWeDo: { heading: string; items: { title: string; body: string }[] };
  benefits: { title: string; body: string }[];
  process: { step: string; detail: string }[];
  localNote: string;
  faqs: Faq[];
  related: string[];
  schemaServiceType: string;
};

const CITY = "Vacaville";

export const services: Service[] = [
  {
    slug: "collision-repair",
    name: "Collision Repair",
    shortName: "Collision",
    navLabel: "Collision Repair",
    title: "Collision Repair in Vacaville, CA | Fix Auto Vacaville",
    description:
      "Collision repair in Vacaville from Fix Auto Vacaville. Insurance claims handled, structural and cosmetic repairs, status updates by text, and a nationwide limited lifetime warranty.",
    primaryKeyword: "collision repair Vacaville",
    supportingKeywords: [
      "collision repair shop Vacaville",
      "accident repair Vacaville CA",
      "collision center near Vacaville",
      "insurance collision repair",
    ],
    intent: "commercial + informational",
    h1: "Collision Repair in Vacaville",
    heroKicker: "Collision Repair",
    heroLede:
      "After an accident, you need one shop that handles the estimate, the insurance claim and the repair, then hands back a vehicle that is safe, straight and finished to a factory standard. That is what Fix Auto Vacaville does every day.",
    heroImage: {
      src: "/images/body-shop-vehicle-in-primer.jpg",
      alt: "Vehicle in primer inside a collision repair shop during bodywork",
    },
    secondaryImage: {
      src: "/images/technician-working-on-vehicle-panel.jpg",
      alt: "Technician working on a vehicle body panel",
    },
    cardSummary:
      "Complete accident repair, from the first photo estimate to final inspection, with insurance paperwork handled for you.",
    problem: {
      heading: "A collision does more than you can see",
      body: [
        "Modern vehicles are engineered to absorb impact. A bumper that looks lightly scuffed can hide a crushed absorber, bent reinforcement, damaged sensors or shifted mounting points. Repairing only what is visible leaves safety systems compromised.",
        "Collision repair at Fix Auto Vacaville starts with a thorough teardown and inspection so the written estimate reflects the real damage, not a guess from the parking lot. You get one honest plan, and your insurer gets documentation they can approve quickly.",
      ],
    },
    whatWeDo: {
      heading: "What collision repair includes",
      items: [
        {
          title: "Damage assessment & documentation",
          body: "Disassembly of the affected area, photos and a line-by-line estimate shared with you and your insurance company.",
        },
        {
          title: "Structural & frame repair",
          body: "Measuring and returning structural components to manufacturer specifications before any cosmetic work begins.",
        },
        {
          title: "Panel repair & replacement",
          body: "Fenders, doors, quarter panels, hoods and bumpers repaired where possible and replaced where required for safety.",
        },
        {
          title: "Refinish & color match",
          body: "Computerized color matching, blended into adjacent panels so the repair disappears.",
        },
        {
          title: "Reassembly & systems check",
          body: "Lights, sensors, trim and glass reinstalled and checked so everything works as it did before the accident.",
        },
      ],
    },
    benefits: [
      {
        title: "Insurance handled for you",
        body: "We work directly with your insurance company on the estimate, supplements and approvals so you are not the go-between.",
      },
      {
        title: "Status updates by text and email",
        body: "You will know when parts arrive, when paint is complete and when your vehicle is ready. No chasing for answers.",
      },
      {
        title: "Nationwide limited lifetime warranty",
        body: "Repairs are backed by the Fix Auto USA nationwide limited lifetime warranty. Ask us for the written terms.",
      },
      {
        title: "Returned clean",
        body: "Customers consistently mention it: vehicles go back washed and vacuumed, not just repaired.",
      },
    ],
    process: [
      { step: "Estimate", detail: "Send photos online or stop by 70 Peabody Road for a written estimate." },
      { step: "Claim & approval", detail: "We coordinate with your insurer and agree the repair plan before work starts." },
      { step: "Teardown & order parts", detail: "Hidden damage is documented and parts are ordered up front to avoid mid-repair delays." },
      { step: "Structure, body & paint", detail: "Frame and panels are repaired to spec, then refinished and color-matched." },
      { step: "Reassembly & QC", detail: "Systems are checked, the vehicle is inspected, cleaned and you are notified it is ready." },
    ],
    localNote:
      "We are located on Peabody Road in Vacaville, a short drive from I-80 and I-505, and we serve drivers across Vacaville and neighboring Solano County communities who want their collision repair handled locally rather than at a dealership hours away.",
    faqs: [
      {
        q: "Do I have to use the body shop my insurance company recommends?",
        a: "No. In California you have the right to choose the repair shop that fixes your vehicle. Your insurer may suggest a shop, but the decision is yours. Tell your adjuster you are using Fix Auto Vacaville and we will take it from there.",
      },
      {
        q: "How long does collision repair take?",
        a: "It depends on the extent of the damage, parts availability and insurance approval timing. Minor bumper and panel repairs are typically measured in days; repairs that involve structural work or back-ordered parts take longer. We give you a realistic target date up front and update you as the repair progresses.",
      },
      {
        q: "Will the repaired area match the rest of my car?",
        a: "Yes. We use computerized color matching and blend the new finish into adjacent panels so there is no visible edge between repaired and original paint.",
      },
      {
        q: "What should I do right after an accident?",
        a: "Make sure everyone is safe, move out of traffic if possible, exchange information, photograph the scene and damage, and notify your insurer. Then call us at (707) 898-7313. We can advise on whether the vehicle is safe to drive and help you start the claim.",
      },
      {
        q: "Do you work with all insurance companies?",
        a: "We work directly with insurance companies on claims and approvals. If you are unsure about your carrier, call us and we will confirm the process for your claim.",
      },
    ],
    related: ["auto-body-repair", "paint-repair", "post-collision-diagnostics"],
    schemaServiceType: "Collision repair",
  },
  {
    slug: "auto-body-repair",
    name: "Auto Body Repair",
    shortName: "Auto Body",
    navLabel: "Auto Body Repair",
    title: "Auto Body Repair in Vacaville | Bumpers, Fenders & Panels",
    description:
      "Auto body repair in Vacaville, CA. Bumper repair, fender repair, door and panel work finished to a factory standard by Fix Auto Vacaville. Get a free estimate.",
    primaryKeyword: "auto body repair Vacaville",
    supportingKeywords: [
      "auto body shop Vacaville",
      "bumper repair Vacaville",
      "fender repair Vacaville",
      "body shop near me Vacaville CA",
    ],
    intent: "commercial",
    h1: "Auto Body Repair in Vacaville",
    heroKicker: "Auto Body Shop",
    heroLede:
      "Bumper scrapes, parking-lot dents, cracked fenders and creased doors. Not every repair is a full insurance claim, and not every panel needs replacing. We fix what can be fixed and replace only what should be.",
    heroImage: {
      src: "/images/technician-working-on-vehicle-panel.jpg",
      alt: "Auto body technician repairing a vehicle panel in the shop",
    },
    secondaryImage: {
      src: "/images/grey-sedan-front-three-quarter.jpg",
      alt: "Grey sedan with straight, undamaged body panels",
    },
    cardSummary:
      "Bumpers, fenders, doors and quarter panels repaired or replaced with a finish that matches the rest of your car.",
    problem: {
      heading: "Small body damage gets worse if you leave it",
      body: [
        "A chipped bumper cover or a scraped quarter panel is cosmetic today, but exposed plastic degrades and bare metal rusts. Misaligned panels also let water and road noise in and lower your vehicle's resale value more than the cost of fixing them.",
        "Our auto body team in Vacaville handles everything from a single bumper to multiple panels, and we will tell you plainly when a repair is the better value than a replacement.",
      ],
    },
    whatWeDo: {
      heading: "Auto body services we provide",
      items: [
        { title: "Bumper repair & replacement", body: "Plastic welding, reshaping and refinishing of bumper covers, or replacement when the cover or absorber is beyond repair." },
        { title: "Fender & quarter panel repair", body: "Metal finishing, filler where appropriate and refinishing, or panel replacement for severe damage." },
        { title: "Door, hood & trunk repair", body: "Dents, creases and misalignment corrected; hinges and latches adjusted so gaps are even." },
        { title: "Trim, moldings & lamps", body: "Headlamps, tail lamps, grilles and trim pieces replaced and aligned with the surrounding bodywork." },
        { title: "Rust and corrosion repair", body: "Affected metal treated or replaced before refinishing so the problem does not return under new paint." },
      ],
    },
    benefits: [
      { title: "Honest repair-vs-replace advice", body: "We recommend the option that is right for your vehicle and budget, not the one with the biggest invoice." },
      { title: "Factory-standard finish", body: "Color-matched paint blended across adjacent panels. The goal is a repair nobody can find." },
      { title: "Out-of-pocket friendly", body: "Not every repair needs an insurance claim. We provide clear written estimates for self-pay work." },
      { title: "Nationwide limited lifetime warranty", body: "Body and paint work is backed by the Fix Auto USA warranty program." },
    ],
    process: [
      { step: "Photos or walk-in", detail: "Send pictures for a preliminary estimate or visit the shop for an in-person look." },
      { step: "Written estimate", detail: "Repair-versus-replace options explained, with pricing you can take to your insurer if needed." },
      { step: "Repair & refinish", detail: "Panels are repaired, prepped and painted in a controlled environment." },
      { step: "Fit, finish & delivery", detail: "Gaps, alignment and finish are inspected before your vehicle is cleaned and returned." },
    ],
    localNote:
      "Vacaville drivers deal with tight parking at the Premium Outlets, shopping-cart dings and daily I-80 commuting. Those are exactly the kinds of bumper and panel repairs we see most, and we are set up to turn them around efficiently.",
    faqs: [
      { q: "Can a cracked bumper be repaired, or does it have to be replaced?", a: "Many cracked or torn bumper covers can be plastic-welded, reshaped and refinished. Replacement is recommended when the damage affects mounting tabs, sensor areas or the energy absorber behind the cover. We will show you the difference on your vehicle." },
      { q: "Do I need an appointment for an auto body estimate?", a: "Walk-ins are welcome during business hours, Monday through Friday 9:00 AM to 5:00 PM. You can also send photos through our estimate form and we will follow up." },
      { q: "Will you use original manufacturer parts?", a: "Part type depends on your vehicle, the repair and, for insurance claims, your policy. We explain the options on your estimate and answer any questions before ordering." },
      { q: "How much does bumper repair cost in Vacaville?", a: "Cost depends on the bumper material, the extent of damage, whether sensors are involved and the paint required. Rather than quote a range that may not apply to your car, we provide a free written estimate from photos or an in-person inspection." },
    ],
    related: ["collision-repair", "paintless-dent-repair", "paint-repair"],
    schemaServiceType: "Auto body repair",
  },
  {
    slug: "paintless-dent-repair",
    name: "Paintless Dent Repair",
    shortName: "Dent Repair",
    navLabel: "Dent Repair",
    title: "Paintless Dent Repair in Vacaville | Door Dings & Hail Dents",
    description:
      "Paintless dent repair (PDR) in Vacaville, CA. Door dings, hail dents and minor creases removed without repainting, preserving your factory finish. Fix Auto Vacaville.",
    primaryKeyword: "paintless dent repair Vacaville",
    supportingKeywords: [
      "dent repair Vacaville",
      "door ding repair Vacaville",
      "hail damage repair Vacaville CA",
      "PDR near me",
    ],
    intent: "commercial",
    h1: "Paintless Dent Repair in Vacaville",
    heroKicker: "Dent Repair & Removal",
    heroLede:
      "When the paint is intact, the dent can often be massaged out from behind the panel with no filler, no sanding and no repaint. Paintless dent repair keeps your factory finish and costs less than conventional bodywork.",
    heroImage: {
      src: "/images/blue-coupe-flawless-bodywork.jpg",
      alt: "Blue coupe with smooth, dent-free body panels at sunset",
    },
    secondaryImage: {
      src: "/images/technician-using-precision-tool.jpg",
      alt: "Technician using a precision hand tool",
    },
    cardSummary:
      "Door dings, hail dents and shallow creases removed without repainting, preserving your original factory finish.",
    problem: {
      heading: "Dents are annoying. Repainting a whole panel for one ding is worse.",
      body: [
        "Conventional repair of a small dent means filler, primer, paint and clear coat across a panel, then blending into the next. That is overkill for a shopping-cart ding, and it means your car no longer has 100 percent factory paint, which matters at trade-in time.",
        "Paintless dent repair uses specialized tools and lighting to work the metal back to its original shape from behind. When PDR is the right fit, the result is faster, cheaper and completely invisible.",
      ],
    },
    whatWeDo: {
      heading: "What PDR can fix",
      items: [
        { title: "Door dings", body: "The classic parking lot dent from a neighboring door. Usually an ideal PDR candidate." },
        { title: "Hail damage", body: "Multiple shallow dents across hoods, roofs and trunks removed one by one without repainting." },
        { title: "Minor creases and body line dents", body: "More complex than round dents but often still repairable with PDR by an experienced technician." },
        { title: "Dents from debris or impacts", body: "Shallow dents where the paint is not cracked or chipped." },
      ],
    },
    benefits: [
      { title: "Factory paint stays on the car", body: "No filler, no primer, no repaint. The original finish and its warranty remain intact." },
      { title: "Typically faster", body: "Many single-dent repairs are completed the same day because there is no paint cure time." },
      { title: "Lower cost than conventional repair", body: "Less labor and no materials means a smaller bill, often a sensible self-pay option." },
      { title: "Honest assessment", body: "If a dent is too sharp or the paint is damaged, we will tell you and recommend conventional auto body repair instead." },
    ],
    process: [
      { step: "Assess the dent", detail: "We check depth, location, paint condition and panel access to confirm PDR is suitable." },
      { step: "Gain access", detail: "Trim or panels are carefully removed where needed to reach behind the dent." },
      { step: "Work the metal", detail: "Using PDR tools and reflection lighting, the panel is slowly pushed back to its original contour." },
      { step: "Inspect and reassemble", detail: "The surface is checked under light from multiple angles, then trim is reinstalled." },
    ],
    localNote:
      "Door dings and shopping-cart dents are a fact of life around Vacaville's busy retail lots. Bring your vehicle to Peabody Road and we will tell you on the spot whether paintless dent repair will work.",
    faqs: [
      { q: "How do I know if my dent qualifies for paintless dent repair?", a: "Generally, the paint must be intact (no cracks or chips), the dent should be shallow rather than sharply creased, and a technician needs access behind the panel. Dents on panel edges or on areas with heavy bracing are more difficult. Send us a photo and we will give you an honest answer." },
      { q: "Does PDR damage the paint?", a: "No. When performed correctly on suitable dents, PDR does not affect the paint. That is the entire point of the technique." },
      { q: "Can hail damage be repaired with PDR?", a: "Yes, hail damage is one of the most common uses for paintless dent repair. Each dent is worked individually. Severe hail with cracked paint or very large dents may require conventional repair for some panels." },
      { q: "How long does paintless dent repair take?", a: "A single door ding can often be completed within hours. Hail repair across multiple panels takes longer depending on the number of dents. We will give you a time estimate when we assess the vehicle." },
    ],
    related: ["auto-body-repair", "paint-repair", "collision-repair"],
    schemaServiceType: "Paintless dent repair",
  },
  {
    slug: "paint-repair",
    name: "Auto Paint & Scratch Repair",
    shortName: "Paint Repair",
    navLabel: "Paint Repair",
    title: "Auto Paint Repair in Vacaville | Scratch Repair & Color Match",
    description:
      "Auto paint and scratch repair in Vacaville, CA. Computerized color matching, clear coat and deep scratch repair, bumper scuff refinishing. Fix Auto Vacaville.",
    primaryKeyword: "auto paint repair Vacaville",
    supportingKeywords: [
      "car scratch repair Vacaville",
      "car paint shop Vacaville",
      "bumper scuff repair Vacaville",
      "clear coat repair",
    ],
    intent: "commercial",
    h1: "Auto Paint & Scratch Repair in Vacaville",
    heroKicker: "Paint & Refinish",
    heroLede:
      "A keyed door, a scraped bumper or clear coat that has started to peel. Paint repair is as much about matching as it is about covering, and a repair that is even slightly off color is one you will notice every time you walk up to the car.",
    heroImage: {
      src: "/images/blue-sedan-gloss-paint-finish.jpg",
      alt: "Blue sedan with a deep gloss paint finish",
    },
    secondaryImage: {
      src: "/images/red-vehicle-paint-detail.jpg",
      alt: "Close-up of a red vehicle's refinished paint",
    },
    cardSummary:
      "Scratch, scuff and clear coat repair with computerized color matching so the repair blends into the surrounding panels.",
    problem: {
      heading: "Why paint repair is harder than it looks",
      body: [
        "Factory paint is a layered system: e-coat, primer, base color and clear coat. Every vehicle's color also shifts slightly with age and sun exposure, so the paint code alone is not enough for an invisible match.",
        "We identify the scratch depth first. Clear coat scratches can sometimes be polished out. Scratches into the base coat or primer need proper refinishing. Scratches to bare metal need to be treated and sealed before paint, or corrosion follows.",
      ],
    },
    whatWeDo: {
      heading: "Paint services",
      items: [
        { title: "Scratch repair", body: "From light clear coat marks to deep key scratches, repaired to the correct depth and refinished." },
        { title: "Bumper scuff refinishing", body: "Scraped and scuffed bumper covers sanded, repaired and resprayed to match." },
        { title: "Clear coat failure", body: "Peeling or oxidized clear coat stripped and refinished on affected panels." },
        { title: "Panel refinishing and blending", body: "Color blended into adjacent panels so there is no visible transition." },
        { title: "Collision refinish", body: "Paint for repaired or replaced panels as part of a collision or body repair." },
      ],
    },
    benefits: [
      { title: "Computerized color matching", body: "Your vehicle's color is measured and the formula adjusted so the new paint matches your car as it is today." },
      { title: "Controlled refinish environment", body: "Paint is applied in a clean, controlled setting for an even finish without dust or contamination." },
      { title: "Durable, warrantied work", body: "Refinish work is backed by the Fix Auto USA nationwide limited lifetime warranty." },
      { title: "Clear guidance on what is worth doing", body: "If a polish will do the job, we will say so rather than quoting a respray." },
    ],
    process: [
      { step: "Depth assessment", detail: "We determine whether the damage is in clear coat, color or down to primer or metal." },
      { step: "Prep", detail: "Sanding, feathering and priming the area so the new finish bonds and sits level." },
      { step: "Color match & spray", detail: "Base color and clear coat applied and blended into neighboring panels." },
      { step: "Cure, polish & inspect", detail: "The finish is cured, polished and inspected under lighting before delivery." },
    ],
    localNote:
      "Vacaville's summer sun is hard on paint. Fading and clear coat wear are common on vehicles that live outdoors here, and we see plenty of it alongside everyday scratches and scuffs.",
    faqs: [
      { q: "Can you fix a scratch without repainting the whole panel?", a: "Often, yes. Light clear coat scratches may be polished out, and localized repairs can be blended so only a small area is refinished. Deeper or longer scratches may require refinishing the full panel for a seamless result." },
      { q: "Will the new paint match my car's color exactly?", a: "We use computerized color matching and blend into adjacent panels specifically so the repair is not visible. Matching accounts for your vehicle's age and sun exposure, not just the factory paint code." },
      { q: "How long does paint repair take?", a: "Small repairs can be completed in a day or two; full-panel or multi-panel work takes longer due to prep and cure time. We confirm timing on your estimate." },
      { q: "Is a key scratch covered by insurance?", a: "Vandalism is often covered under comprehensive coverage, subject to your deductible. We can help you decide whether a claim makes sense and work directly with your insurer if you file one." },
    ],
    related: ["auto-body-repair", "paintless-dent-repair", "collision-repair"],
    schemaServiceType: "Automotive paint repair",
  },
  {
    slug: "windshield-repair",
    name: "Windshield & Auto Glass",
    shortName: "Auto Glass",
    navLabel: "Windshield Repair",
    title: "Windshield Repair & Replacement in Vacaville | Fix Auto",
    description:
      "Windshield chip repair, crack repair and auto glass replacement in Vacaville, CA, including glass damaged in a collision. Fix Auto Vacaville, 70 Peabody Road.",
    primaryKeyword: "windshield repair Vacaville",
    supportingKeywords: [
      "windshield replacement Vacaville",
      "auto glass repair Vacaville CA",
      "windshield chip repair",
      "collision glass replacement",
    ],
    intent: "transactional",
    h1: "Windshield Repair & Auto Glass in Vacaville",
    heroKicker: "Windshield & Glass",
    heroLede:
      "A rock chip on I-80 can turn into a crack across your windshield with one hot afternoon. Small chips can often be repaired; larger damage needs replacement. We handle both, including glass damaged in a collision.",
    heroImage: {
      src: "/images/white-ev-sedan-clean-lines.jpg",
      alt: "White sedan with a clear, undamaged windshield",
    },
    secondaryImage: {
      src: "/images/vehicle-interior-dashboard.jpg",
      alt: "View of a vehicle dashboard and windshield from inside the cabin",
    },
    cardSummary:
      "Chip and crack repair or full windshield replacement, including glass damaged in a collision.",
    problem: {
      heading: "Your windshield is a structural part, not just a window",
      body: [
        "The windshield contributes to roof strength in a rollover and supports proper airbag deployment. Many newer vehicles also mount forward-facing cameras for lane-keeping and emergency braking behind it.",
        "That is why glass should be repaired or replaced properly, with the right adhesive and cure time, and why we treat it as part of a complete repair rather than an afterthought.",
      ],
    },
    whatWeDo: {
      heading: "Glass services",
      items: [
        { title: "Windshield chip repair", body: "Resin repair of small chips and stars to stop them spreading and restore clarity." },
        { title: "Windshield replacement", body: "Removal and replacement with correct urethane adhesive and safe drive-away cure time." },
        { title: "Collision-related glass", body: "Windshields, side glass, quarter glass and rear glass damaged in an accident, handled as part of your collision repair." },
        { title: "Moldings and trim", body: "Glass moldings and cowl trim replaced so the installation looks and seals like factory." },
      ],
    },
    benefits: [
      { title: "Repair when possible", body: "Chips that qualify for repair cost less and keep your original glass." },
      { title: "One shop for glass and body", body: "If glass damage is part of a collision, it is handled under the same estimate and claim." },
      { title: "Insurance coordination", body: "Glass coverage varies by policy; we help you understand what applies and work with your insurer." },
      { title: "Proper materials and cure", body: "Correct adhesives and cure times so the windshield performs as designed." },
    ],
    process: [
      { step: "Inspect the damage", detail: "Chip size, depth, location and whether it is in the driver's view determine repair or replace." },
      { step: "Confirm the glass", detail: "We match the correct glass for your vehicle, including camera and sensor brackets where fitted." },
      { step: "Repair or replace", detail: "Resin repair for chips; full removal and urethane installation for replacements." },
      { step: "Cure and check", detail: "Safe drive-away time is confirmed and the installation is inspected for fit and seal." },
    ],
    localNote:
      "Highway gravel and agricultural traffic around Vacaville and the I-80 corridor make rock chips common. Repairing a chip early is far cheaper than replacing a cracked windshield later.",
    faqs: [
      { q: "Can my windshield chip be repaired instead of replaced?", a: "Small chips and short cracks that are not in the driver's direct line of sight and have not reached the edge of the glass are often repairable. Longer cracks, damage at the edge or damage in the primary viewing area usually require replacement. We will inspect it and advise." },
      { q: "My vehicle has a camera behind the windshield. Does that matter?", a: "Yes. Vehicles with advanced driver assistance systems often require the camera to be recalibrated after a windshield replacement. Ask us about your specific vehicle when you request service." },
      { q: "How soon can I drive after a windshield replacement?", a: "Safe drive-away time depends on the adhesive used and conditions. We will tell you the specific time for your vehicle when it is finished." },
      { q: "Is windshield damage covered by insurance?", a: "Glass is often covered under comprehensive coverage, sometimes with a reduced or waived deductible for repairs. Check your policy or ask us and we will help you confirm." },
    ],
    related: ["collision-repair", "post-collision-diagnostics", "auto-body-repair"],
    schemaServiceType: "Auto glass repair and replacement",
  },
  {
    slug: "post-collision-diagnostics",
    name: "Post-Collision Inspection & Diagnostics",
    shortName: "Diagnostics",
    navLabel: "Inspection & Diagnostics",
    title: "Post-Collision Vehicle Inspection & Diagnostics | Vacaville",
    description:
      "Post-collision inspection and vehicle diagnostics in Vacaville, CA. Hidden damage assessment, sensor and system checks, and a documented repair plan from Fix Auto Vacaville.",
    primaryKeyword: "post-collision vehicle inspection Vacaville",
    supportingKeywords: [
      "vehicle diagnostics after accident",
      "hidden collision damage inspection",
      "car inspection after accident Vacaville",
      "ADAS check after collision",
    ],
    intent: "commercial + informational",
    h1: "Post-Collision Inspection & Vehicle Diagnostics",
    heroKicker: "Inspection & Diagnostics",
    heroLede:
      "Not sure how badly your vehicle was damaged? A low-speed impact can shift suspension geometry, damage sensors or trigger fault codes without an obvious dent. Our inspection tells you what actually happened and what it will take to make it right.",
    heroImage: {
      src: "/images/technician-inspecting-engine-bay.jpg",
      alt: "Technician inspecting a vehicle engine bay",
    },
    secondaryImage: {
      src: "/images/technician-under-hood-service.jpg",
      alt: "Technician working under the hood of a vehicle",
    },
    cardSummary:
      "Hidden-damage assessment, system scans and a documented repair plan after an accident, even when the damage looks minor.",
    problem: {
      heading: "The most expensive damage is the kind you cannot see",
      body: [
        "Today's vehicles carry radar, cameras and ultrasonic sensors in bumpers, grilles, mirrors and windshields. Impacts that barely mark the paint can knock these out of calibration or damage their mounts, and the vehicle may not show a warning light.",
        "A post-collision inspection combines a physical teardown of the impacted area with electronic diagnostics so the estimate covers everything your insurer needs to approve and everything your vehicle needs to be safe.",
      ],
    },
    whatWeDo: {
      heading: "What the inspection covers",
      items: [
        { title: "Visual and teardown inspection", body: "Removing bumper covers and trim to inspect absorbers, reinforcements, brackets and mounting points." },
        { title: "Diagnostic scan", body: "Reading stored and pending fault codes from vehicle modules to identify systems affected by the impact." },
        { title: "Structural measurement", body: "Checking key structural points against manufacturer specifications where the impact warrants it." },
        { title: "Suspension, wheel and alignment check", body: "Identifying bent components and alignment issues caused by curb or wheel impacts." },
        { title: "Documented repair plan", body: "A written, photo-supported estimate you can share with your insurer." },
      ],
    },
    benefits: [
      { title: "Peace of mind", body: "Know whether your vehicle is safe to drive and what needs attention." },
      { title: "A complete estimate from the start", body: "Documenting hidden damage early means fewer surprises and fewer supplement delays with insurance." },
      { title: "Safety systems addressed", body: "Sensors and driver-assistance components are identified for repair or recalibration as needed." },
      { title: "One shop from inspection to repair", body: "If repairs are needed, the same team that inspected the vehicle carries them out." },
    ],
    process: [
      { step: "Intake", detail: "Tell us what happened; impact direction and speed guide where we look." },
      { step: "Scan and inspect", detail: "Electronic scan plus physical inspection of the impact zone." },
      { step: "Report", detail: "Findings and a photo-supported estimate explained to you in plain language." },
      { step: "Repair plan", detail: "If you proceed, we coordinate with your insurer and schedule the repair." },
    ],
    localNote:
      "Whether it was a fender bender on Nut Tree Parkway or a highway merge on I-80, bring the vehicle to our Vacaville shop before assuming it is fine. The inspection often saves money by catching issues before they compound.",
    faqs: [
      { q: "My car looks fine after a minor accident. Do I really need an inspection?", a: "If the impact was more than a tap, it is worth it. Bumper covers are designed to spring back and hide damage to the structure behind them, and sensor misalignment does not always trigger a warning. An inspection confirms whether anything needs attention." },
      { q: "Is a diagnostic scan the same as a mechanical diagnosis?", a: "A post-collision scan focuses on fault codes and systems affected by an impact. It is not a general mechanical diagnosis for unrelated issues like check-engine lights from engine or emissions problems. We are a collision and body repair shop; for unrelated mechanical repairs we will point you to an appropriate specialist." },
      { q: "Will my insurance pay for the inspection?", a: "When an inspection is part of a claim estimate, it is typically part of the covered repair process. Contact us or your adjuster to confirm for your claim." },
      { q: "Do you do general auto repair or oil changes?", a: "No. Fix Auto Vacaville specializes in collision, auto body, paint, dent and auto glass repair, including the diagnostics and alignment checks that go with accident repair. We do not perform routine maintenance such as oil changes." },
    ],
    related: ["collision-repair", "windshield-repair", "auto-body-repair"],
    schemaServiceType: "Post-collision vehicle inspection",
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

export const serviceNavItems = services.map((s) => ({
  label: s.navLabel,
  href: `/services/${s.slug}` as const,
}));

export { CITY };
