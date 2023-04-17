const products = [
  {
    name: "XX SL Eagle Transmission Derailleur",
    description:
      "The XX Eagle Transmission derailleur foundationally changes the relationship between cassette and derailleur. Engineered as integrated, interdependent transmission components, the T-Type derailleur mounts around the wheel axle itself, contacting the cassette directly with a first-of-its-kind Hangerless Interface. Its game-changing Full Mount attachment method creates a far stronger connection and grips both sides of the frame. The new transmission derailleurs feature the same intuitive pairing and set-up procedure as our Eagle AXS derailleurs.",
    price: "25000",
    id: "1",
    cat: "mountain",
    img: "https://www.sram.com/globalassets/image-hierarchy/sram-product-root-images/derailleurs---rear/derailleurs---rear/rd-xx-sle-b1/productassets_rd-xx-sle-b1_fg/am-rd-xx-sl-eagle-axs-t-type-c-front-s.png?w=450&h=450&mode=max&format=webp",
  },
  {
    name: "Shifter Eagle AXS Controller",
    description:
      "It’s simple. It’s about performance. The pure shifting performance of Eagle AXS™ is the real difference maker. Shift under load, over the roughest terrain, uphill, without changing your grip on the bar.",
    price: "15000",
    id: "2",
    cat: "mountain",
    img: "https://www.sram.com/globalassets/publicsites/t3-transparent-product-images/ec-axs-sram-a1_black_front_t.png?w=357&quality=80&format=webp",
  },
  {
    name: "BRAKE",
    description:
      "G2 RE is our braking solution for trail ready E-MTBs, capable of handling the higher average speeds and increased mass. It combines the proven G2 R lever with a powerful 4-piston caliper derived from the gravity-focused Code brakes. G2 RE provides real, usable on-trail control-optimal power and modulation mean speed can be controlled in all terrain and in all situations, both uphill and downhill.",
    price: "30000",
    id: "3",
    cat: "mountain",
    img: "https://www.sram.com/globalassets/publicsites/t3-transparent-product-images/sram-mtb/brakes/db-gde-rsc-b1_lever_caliper_rotor_black_h.png?w=357&quality=80&format=webp",
  },
  {
    name: "Cassette",
    description:
      "Whether for prized race machines or the build of their dreams, the XG-1299 cassette is the ultimate, giving riders unprecedented 520-percent range thanks to the new 10-52 tooth-span. Stronger racers are now free to choose larger chainrings for more top-end speed, without sacrificing climbing range. More time is spent higher up in the cassette where athletes power transfer is most efficient and wear is minimized. Featuring the industry’s strongest X-Dome™ architecture and proven XD™ driver body, it’s also backwards compatible to give riders even more Eagle™ upgrade options for their current bikes. With multiple Olympic, World Cup and World Championship titles, it also matches up perfectly to XX1 Eagle AXS™ enabled componentry. The XG-1299 cassette utilizes the full depth of the new Eagle™ Colorsystem.",
    price: "50000",
    id: "4",
    cat: "mountain",
    img: "https://www.sram.com/globalassets/image-hierarchy/sram-product-root-images/cassettes/cassettes/cs-xg-1299-b1/crainbowsides.png?w=450&h=450&mode=max&format=webp",
  },
  {
    name: "RED ETAP AXS SHIFT-BRAKE LEVER",
    description:
      "Award-winning eTap® shift logic, now with the connectivity of AXS™. The SRAM RED eTap™ shift-brake levers build on this foundation while integrating our newest technologies. And it’s easily personalized, from shifting sequences to reach.",
    price: "80000",
    id: "5",
    cat: "road",
    img: "https://www.sram.com/globalassets/image-hierarchy/sram-product-root-images/shiftbrake-combo/eb-red-d1/rightblack3ql2.jpg?w=800&quality=80&format=webp",
  },
  {
    name: "RED eTap AXS Front Derailleur",
    description:
      "The SRAM RED eTap AXS front derailleur leverages our advancements with X-Range gearing. The derailleur design carves out space for wide rear-tire clearance, making it a perfect fit for modern riding. And the shifting is quick and precise.",
    price: "75000",
    id: "6",
    cat: "road",
    img: "https://www.sram.com/globalassets/image-hierarchy/sram-product-root-images/derailleurs---front/derailleurs---front/fd-red-e-d1/blacksidel.jpg?w=800&quality=80&format=webp",
  },
  {
    name: "RED XPLR eTap AXS Rear Derailleur",
    description:
      "If your ride doesn’t feel complete until you get a little dirt on your tires, you know the importance of capable components that can tackle anything. The RED XPLR eTap AXS rear derailleur is a dedicated 1x-specific unit designed for use with the XPLR 10-44 cassette. It makes for an uncluttered drivetrain that takes on pavement and singletrack with equal aplomb. Wireless and proven eTap shift logic, AXS connectivity and advanced chain management mean this derailleur does exactly what you want when you need it.",
    price: "90000",
    id: "7",
    cat: "road",
    img: "https://www.sram.com/globalassets/image-hierarchy/sram-product-root-images/derailleurs---rear/derailleurs---rear/rd-red1-e-d1/productassets_rd-red1-e-d1_fg/rd-red-xplr-etap-axs-d1-max-44t-c-side-s.png?w=800&quality=80&format=webp",
  },
  {
    name: "RED XG-1290 Cassette",
    description:
      "The workhorse of X-Range gearing. The SRAM RED XG-1290 cassette progresses fluidly and quickly through a wider range of gears. It's specifically designed for wireless electronic shifting and the one-piece design offers you the best in weight savings.",
    price: "60000",
    id: "8",
    cat: "road",
    img: "https://www.sram.com/globalassets/image-hierarchy/sram-product-root-images/cassettes/cassettes/cs-xg-1290-d1/productassets_cs-xg-1290-d1_fg/am-cs-xg-1290-d1-10-28-rainbow-c-side-s.png?w=800&quality=80&format=webp",
  },
  {
    name: "RED HRD Shift-Brake Control",
    description:
      "If you believe in performance then you should believe in hydraulic road (HydroR™) brakes. Our award winning HydroR™ technology is the fulfillment of the promise of better braking, more control, and improved performance in all conditions. SRAM RED delivers braking confidence and security that brings speed control and stability to a new level.",
    price: "120000",
    id: "9",
    cat: "gravel",
    img: "https://www.sram.com/globalassets/image-hierarchy/sram-product-root-images/shiftbrake-combo/shiftbrake-hrd/sb-red-hydraulicroaddisc-b2/slcaliper3q.jpg?w=800&quality=80&format=webp",
  },
  {
    name: "Force 1 Wide Crankset",
    description:
      "We originated the 1x drivetrain, and the SRAM Force 1 Wide crankset evolves the innovation. It's lighter, stronger and simpler with a direct mount chainring for less weight. Wide variant cranks accommodate the largest of tires for your 1x gravel machine.",
    price: "90000",
    id: "10",
    cat: "gravel",
    img: "https://www.sram.com/globalassets/image-hierarchy/sram-product-root-images/cranksets/cranksets/fc-force-1-d1/productassets_fc-frc-1-d1_fg/fc-force-1-d1-dub-gls-1725-dm-44-c-side-h.png?w=1000&quality=80&format=webp",
  },
  {
    name: "RED 22 Chain",
    description:
      "The SRAM RED 22 chain features more heavily chamfered outer plates for improved shifting and quieter running. Other advancements include a new inner plate finish plus chrome hardened pin construction, both for longer chain life. The HollowPin construction of SRAM's 11-speed chain provides smooth, precise shifting and weight savings without sacrificing strength.",
    price: "55000",
    id: "11",
    cat: "gravel",
    img: "https://www.sram.com/globalassets/image-hierarchy/sram-product-root-images/chain-connectors/chains/cn-red-a1/red22chain1000x1000?w=800&quality=80&format=webp",
  },
  {
    name: "MTH 700 Hub",
    description:
      "Our MTH 700 hubs aim at making through axle bikes more affordable. The internal mechanism is exactly the same used in our X9 12x142 hubs, we only made those more affordable by using a much simpler hub shell. Being part of our non-series line, whose hub will perfectly fit any through axle bikes, offering a brand name that riders know they can trust.",
    price: "63000",
    id: "12",
    cat: "mountain",
    img: "https://www.sram.com/globalassets/image-hierarchy/sram-product-root-images/hubs/hubs/hu-mtb-hub-700-a1/srammtb700serieshubfrontmd?w=800&quality=80&format=webp",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

export const getProduct = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = products.find((p) => p.id === productId);
      resolve(product);
    }, 1000);
  });
};

export const gerProductsCategories = (cat) => {
  return new Promise((resolve) => {
    const porductsCategory = products.filter((product) => product.cat === cat);
    resolve(porductsCategory);
  }, 100);
};
