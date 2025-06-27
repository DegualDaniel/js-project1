const drugs = [
  {
    id: 1,
    name: "Amoxicillin",
    category: "Antibiotic",
    dosageMg: 500,
    isPrescriptionOnly: true,
    stock: 120,
    manufacturer: "Pfizer",
  },

  {
    id: 2,
    name: "Paracetamol",
    category: "Analgesic",
    dosageMg: 1000,
    isPrescriptionOnly: false,
    stock: 200,
    manufacturer: "GSK",
  },

  {
    id: 3,
    name: "Ibuprofen",
    category: "Analgesic",
    dosageMg: 400,
    isPrescriptionOnly: false,
    stock: 150,
    manufacturer: "Bayer",
  },

  {
    id: 4,
    name: "Chloroquine",
    category: "Antimalarial",
    dosageMg: 250,
    isPrescriptionOnly: true,
    stock: 80,
    manufacturer: "Sanofi",
  },

  {
    id: 5,
    name: "Ciprofloxacin",
    category: "Antibiotic",
    dosageMg: 500,
    isPrescriptionOnly: true,
    stock: 70,
    manufacturer: "Pfizer",
  },

  {
    id: 6,
    name: "Loratadine",
    category: "Antihistamine",
    dosageMg: 10,
    isPrescriptionOnly: false,
    stock: 160,
    manufacturer: "Novartis",
  },

  {
    id: 7,
    name: "Metformin",
    category: "Antidiabetic",
    dosageMg: 850,
    isPrescriptionOnly: true,
    stock: 140,
    manufacturer: "Teva",
  },

  {
    id: 8,
    name: "Artemether",
    category: "Antimalarial",
    dosageMg: 20,
    isPrescriptionOnly: true,
    stock: 60,
    manufacturer: "Roche",
  },

  {
    id: 9,
    name: "Aspirin",
    category: "Analgesic",
    dosageMg: 300,
    isPrescriptionOnly: false,
    stock: 180,
    manufacturer: "Bayer",
  },

  {
    id: 10,
    name: "Omeprazole",
    category: "Antacid",
    dosageMg: 20,
    isPrescriptionOnly: true,
    stock: 90,
    manufacturer: "AstraZeneca",
  },

  {
    id: 11,
    name: "Azithromycin",
    category: "Antibiotic",
    dosageMg: 250,
    isPrescriptionOnly: true,
    stock: 50,
    manufacturer: "Pfizer",
  },

  {
    id: 12,
    name: "Cetirizine",
    category: "Antihistamine",
    dosageMg: 10,
    isPrescriptionOnly: false,
    stock: 110,
    manufacturer: "Novartis",
  },

  {
    id: 13,
    name: "Insulin",
    category: "Antidiabetic",
    dosageMg: 100,
    isPrescriptionOnly: true,
    stock: 30,
    manufacturer: "Novo Nordisk",
  },

  {
    id: 14,
    name: "Artemisinin",
    category: "Antimalarial",
    dosageMg: 100,
    isPrescriptionOnly: true,
    stock: 50,
    manufacturer: "GSK",
  },

  {
    id: 15,
    name: "Codeine",
    category: "Analgesic",
    dosageMg: 30,
    isPrescriptionOnly: true,
    stock: 20,
    manufacturer: "Teva",
  },

  {
    id: 16,
    name: "Vitamin C",
    category: "Supplement",
    dosageMg: 500,
    isPrescriptionOnly: false,
    stock: 300,
    manufacturer: "Nature’s Bounty",
  },

  {
    id: 17,
    name: "Ranitidine",
    category: "Antacid",
    dosageMg: 150,
    isPrescriptionOnly: false,
    stock: 90,
    manufacturer: "Sanofi",
  },

  {
    id: 18,
    name: "Doxycycline",
    category: "Antibiotic",
    dosageMg: 100,
    isPrescriptionOnly: true,
    stock: 40,
    manufacturer: "Pfizer",
  },

  {
    id: 19,
    name: "Tramadol",
    category: "Analgesic",
    dosageMg: 50,
    isPrescriptionOnly: true,
    stock: 45,
    manufacturer: "Teva",
  },

  {
    id: 20,
    name: "Folic Acid",
    category: "Supplement",
    dosageMg: 5,
    isPrescriptionOnly: false,
    stock: 250,
    manufacturer: "Nature’s Bounty",
  },
];

//SOLUTION

// 1. Get all drugs that are antibiotics.

const drugName = drugs
  .filter((list) => {
    return list.category.toLowerCase() === "antibiotic";
  })
  .map((list) => {
    return list.name;
  });
console.log(drugName);

//2. Return an array of drug names in lowercase.

const names_list = drugs.map((name) => {
  return name.name.toLowerCase();
});
console.log(names_list);

// 3. Write a function that accepts a category and returns all drugs under that category.

const newCategory = drugs
  .filter((cat) => {
    return cat.category.toLowerCase() === "analgesic";
  })
  .map((cat) => {
    return cat.name;
  });
console.log(newCategory);

// 4. Log each drug’s name and its manufacturer.
const inventory = drugs.forEach((list) => {
  // console.log(`${list.name}, ${list.manufacturer}`)
  console.log({
    name: list.name,
    manufacturer: list.manufacturer,
  });
});

// 5. Return all drugs that require a prescription.

const prescriptions = drugs
  .filter((list) => {
    return list.isPrescriptionOnly == true;
  })
  .map((list) => {
    return list.name;
  });
console.log(prescriptions);

//6. Return a new array, each item should follow the format:
// "Drug: [name] - [dosageMg]mg".

const pharm1 = drugs.forEach((list) => {
  console.log([`Drug: ${list.name} - ${list.dosageMg}mg`]);
});

//7. Write a function that returns all drugs with a stock less than 50.
const pharm2 = drugs
  .filter((list) => {
    return list.stock <= 50;
  })
  .map((list) => {
    return list.name;
  });
console.log(pharm2);

//8. Return all drugs that are not prescription-only.

const noPrescriptions = drugs
  .filter((list) => {
    return list.isPrescriptionOnly == false;
  })
  .map((list) => {
    return list.name;
  });
console.log(noPrescriptions);

//9. Write a function that takes a manufacturer name and returns how many drugs are from that company.
// Pfizer Company
const pharmOwner = drugs
  .filter((list) => {
    return list.manufacturer == "Pfizer";
  })
  .map((list) => {
    return list.name;
  });
console.log(pharmOwner.length);

//GSK company
const pharmOwner2 = drugs
  .filter((list) => {
    return list.manufacturer == "GSK";
  })
  .map((list) => {
    return list.name;
  });
console.log(pharmOwner2.length);

//Bayer company
const pharmOwner3 = drugs
  .filter((list) => {
    return list.manufacturer == "Bayer";
  })
  .map((list) => {
    return list.name;
  });
console.log(pharmOwner3.length);

//Sanofi company
const pharmOwner4 = drugs
  .filter((list) => {
    return list.manufacturer == "Sanofi";
  })
  .map((list) => {
    return list.name;
  });
console.log(pharmOwner4.length);

//Novartis company
const pharmOwner5 = drugs
  .filter((list) => {
    return list.manufacturer == "Novartis";
  })
  .map((list) => {
    return list.name;
  });
console.log(pharmOwner5.length);

//Teva company
const pharmOwner6 = drugs
  .filter((list) => {
    return list.manufacturer == "Teva";
  })
  .map((list) => {
    return list.name;
  });
console.log(pharmOwner6.length);

//Roche company
const pharmOwner7 = drugs
  .filter((list) => {
    return list.manufacturer == "Roche";
  })
  .map((list) => {
    return list.name;
  });
console.log(pharmOwner7.length);

//AstraZeneca company
const pharmOwner8 = drugs
  .filter((list) => {
    return list.manufacturer == "AstraZeneca";
  })
  .map((list) => {
    return list.name;
  });
console.log(pharmOwner8.length);

//Novo Nordiskcompany
const pharmOwner9 = drugs
  .filter((list) => {
    return list.manufacturer == "Novo Nordisk";
  })
  .map((list) => {
    return list.name;
  });
console.log(pharmOwner9.length);

//Nature’s Bounty company
const pharmOwner10 = drugs
  .filter((list) => {
    return list.manufacturer == "Nature’s Bounty";
  })
  .map((list) => {
    return list.name;
  });
console.log(pharmOwner10.length);

// 10. Use forEach() to count how many drugs are Analgesics.

const drugAmt = drugs
  .filter((list) => {
    return list.category == "Analgesic";
  })
  .forEach((list) => {
    console.log(list.length);
  });
