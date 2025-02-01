const products = [
    {
        category: "Sativa Strain",
        strains: [
            "Jack Herer",
            "Durban Poison",
            "Strawberry Cough",
            "Green Crack",
            "Sour Diesel",
            "Super Silver Haze",
            "Thunderfuck",
            "Island Sweet Skunk"
        ],
        img: "sativa.jpg"
    },
    {
        category: "Indica Strain",
        strains: [
            "Granddaddy Purple",
            "Purple Kush",
            "Grape Ape",
            "BlackBerry Kush",
            "Master Kush",
            "Death Star",
            "Northern Lights",
            "God's Gift",
            "Afghan Kush",
            "Moon Rock",
            "Hindu Kush"
        ],
        img: "indica.jpg"
    },
    {
        category: "Hybrid Strain",
        strains: [
            "Blue Dream",
            "OG Kush",
            "White Widow",
            "Pineapple Express",
            "Guerrilla Glue",
            "Train Wreck",
            "Chemdog",
            "Tahoe OG",
            "Platinum OG"
        ],
        img: "hybrid.jpg"
    }
];

const container = document.getElementById("product-container");

products.forEach(product => {
    const div = document.createElement("div");
    div.classList.add("product");

    div.innerHTML = `
        <img src="${product.img}" alt="${product.category}">
        <h2>${product.category}</h2>
        <p><strong>Popular Strains:</strong></p>
        <ul class="strain-list">${product.strains.map(strain => `<li>${strain}</li>`).join("")}</ul>
        <p class="price">$80 - $800</p>
    `;

    container.appendChild(div);
});
