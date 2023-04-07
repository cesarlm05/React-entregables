const products = [
  {
    name: "Cambio",
    description: "ASX",
    price: "25000",
    id: 1,
    img: "https://www.sram.com/globalassets/image-hierarchy/sram-product-root-images/derailleurs---rear/derailleurs---rear/rd-xx-sle-b1/productassets_rd-xx-sle-b1_fg/am-rd-xx-sl-eagle-axs-t-type-c-front-s.png?w=450&h=450&mode=max&format=webp",
  },
  {
    name: "Shifter",
    description: "ASX",
    price: "15000",
    id: 2,
    img: "https://www.sram.com/globalassets/publicsites/t3-transparent-product-images/ec-axs-sram-a1_black_front_t.png?w=357&quality=80&format=webp",
  },
  {
    name: "Frenos",
    description: "Disc",
    price: "30000",
    id: 3,
    img: "https://www.sram.com/globalassets/publicsites/t3-transparent-product-images/sram-mtb/brakes/db-gde-rsc-b1_lever_caliper_rotor_black_h.png?w=357&quality=80&format=webp",
  },
  {
    name: "Cassette",
    description: "9-52",
    price: "50000",
    id: 4,
    img: "https://www.sram.com/globalassets/image-hierarchy/sram-product-root-images/cassettes/cassettes/cs-xg-1299-b1/crainbowsides.png?w=450&h=450&mode=max&format=webp",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};


export const getProduct = (productId) => {
  return new Promise((resolve) => {
    setTimeout( () => {
      const product = products.find(p => p.id === productId);
      resolve(product);
    }, 2000)
  })
}