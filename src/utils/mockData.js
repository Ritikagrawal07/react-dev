
const resList = [
  {
    info: {
      id: "750239",
      name: "Shake",
      cloudinaryImageId: "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Shake.png",
      cuisines: ["Beverages"],
      costForTwo: "₹150 for two",
      avgRating: 4.5,
      sla: {
        deliveryTime: 20,
        slaString: "20-25 mins"
      }
    }
  },
  {
    info: {
      id: "750132",
      name: "Dosa",
      cloudinaryImageId: "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Dosa.png",
      cuisines: ["South Indian"],
      costForTwo: "₹100 for two",
      avgRating: 4.3,
      sla: {
        deliveryTime: 18,
        slaString: "15-20 mins"
      }
    }
  },
  {
    info: {
      id: "750580",
      name: "Pizzas",
      cloudinaryImageId: "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png",
      cuisines: ["Italian"],
      costForTwo: "₹400 for two",
      avgRating: 4.4,
      sla: {
        deliveryTime: 30,
        slaString: "25-30 mins"
      }
    }
  },
  {
    info: {
      id: "762797",
      name: "Burgers",
      cloudinaryImageId: "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_burger.png",
      cuisines: ["American"],
      costForTwo: "₹250 for two",
      avgRating: 4.2,
      sla: {
        deliveryTime: 22,
        slaString: "20-25 mins"
      }
    }
  },
  {
    info: {
      id: "750584",
      name: "South Indian",
      cloudinaryImageId: "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Salad-1.png",
      cuisines: ["South Indian"],
      costForTwo: "₹180 for two",
      avgRating: 4.3,
      sla: {
        deliveryTime: 19,
        slaString: "15-20 mins"
      }
    }
  },
  {
    info: {
      id: "750592",
      name: "Biryani",
      cloudinaryImageId: "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png",
      cuisines: ["Biryani"],
      costForTwo: "₹300 for two",
      avgRating: 4.1,
      sla: {
        deliveryTime: 28,
        slaString: "25-30 mins"
      }
    }
  },
  {
    info: {
      id: "750588",
      name: "Chinese",
      cloudinaryImageId: "MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/e7e36151-9e90-40eb-b6bb-bb7d946ac219_Chinese2.png",
      cuisines: ["Chinese"],
      costForTwo: "₹220 for two",
      avgRating: 4.0,
      sla: {
        deliveryTime: 26,
        slaString: "25-30 mins"
      }
    }
  },
  {
    info: {
      id: "750223",
      name: "Rolls",
      cloudinaryImageId: "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/17/4ec9d604-32db-4820-a21d-4dde0ced8ecc_Rolls1.png",
      cuisines: ["Rolls"],
      costForTwo: "₹150 for two",
      avgRating: 4.2,
      sla: {
        deliveryTime: 20,
        slaString: "15-20 mins"
      }
    }
  },
  {
    info: {
      id: "750209",
      name: "Pastry",
      cloudinaryImageId: "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_pastry.png",
      cuisines: ["Desserts"],
      costForTwo: "₹120 for two",
      avgRating: 4.6,
      sla: {
        deliveryTime: 15,
        slaString: "10-15 mins"
      }
    }
  },
  {
    info: {
      id: "749874",
      name: "Cakes",
      cloudinaryImageId: "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_cake.png",
      cuisines: ["Desserts"],
      costForTwo: "₹280 for two",
      avgRating: 4.5,
      sla: {
        deliveryTime: 18,
        slaString: "15-20 mins"
      }
    }
  },
  {
    info: {
      id: "750597",
      name: "Ice Cream",
      cloudinaryImageId: "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_chocolate icecream.png",
      cuisines: ["Desserts"],
      costForTwo: "₹100 for two",
      avgRating: 4.3,
      sla: {
        deliveryTime: 16,
        slaString: "15-20 mins"
      }
    }
  },
  {
    info: {
      id: "750249",
      name: "Shawarma",
      cloudinaryImageId: "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_shawarma.png",
      cuisines: ["Middle Eastern"],
      costForTwo: "₹200 for two",
      avgRating: 4.2,
      sla: {
        deliveryTime: 21,
        slaString: "20-25 mins"
      }
    }
  },
  {
    info: {
      id: "750582",
      name: "North Indian",
      cloudinaryImageId: "MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/7b7d0577-54a4-4d59-8f62-9db0a568831e_northindian1.png",
      cuisines: ["North Indian"],
      costForTwo: "₹250 for two",
      avgRating: 4.4,
      sla: {
        deliveryTime: 22,
        slaString: "20-25 mins"
      }
    }
  }
];

export default resList;