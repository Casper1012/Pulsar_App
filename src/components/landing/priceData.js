export const priceList1 = {
    head: ["$100", "Basic Plan"],
    data: ["4 Cores @ 2.90GHz", "2TB NVME SSD", "2TB NVME SSD", "1 Dedicated IP Address", "10GB Commit"],
    option: true,
};

export const priceList2 = {
    head: ["$200", "Business Plan"],
    data: ["8 Cores @ 3.10GHz", "2x 2TB NVME SSD", "32GB RAM", "2 Dedicated IP Address", "20GB Commit"],
    option: true,
};

export const priceList3 = {
    head: ["$400", "Enterprise Plan"],
    data: ["16 Cores @ 3.20GHz", "4x 2TB NVME SSD", "64GB RAM", "8 Dedicated IP Address", "40GB Commit"],
    option: true,
};

export const priceList4 = {
    head: ["$150", "Hardware costs"],
    data: ["6 Cores @ 2.90GHz", "2x 2TB NVME", "16GB RAM", "1 Dedicated IP Address"],
    option: false,
};

export const configurations = [
    {
        Location: "Phoenix",
        Processor: "24 Cores (3.10GHz)",
        spec: "Dual Xeon Gold 5317",
        Storage: "2× 2TB NVME",
        RAM: "256GB",
        IPs: 24,
        Cost: "$500"
    },
    {
        Location: "Phoenix",
        Processor: "12 Cores (3.20GHz)",
        spec: "Dual Xeon Gold 5317",
        Storage: "2TB NVME",
        RAM: "32GB",
        IPs: 16,
        Cost: "$300"
    },
    {
        Location: "Ashburn",
        Processor: "8 Cores (2.90GHz)",
        spec: "Dual Xeon Gold 5317",
        Storage: "500GB NVME",
        RAM: "16GB",
        IPs: 1,
        Cost: "$100"
    },
    {
        Location: "Ashburn",
        Processor: "4 Cores (3.10GHz)",
        spec: "Dual Xeon Gold 5317",
        Storage: "1TB NVME",
        RAM: "64GB",
        IPs: 8,
        Cost: "$250"
    }
];

export const tblPlan = [
    {
        name: "Servers",
        cost: "$1150",
    },
    {
        name: "Bandwidth Commit",
        cost: "$60",
    },
    {
        name: "Support Plan",
        cost: "$15",
    },
    {
        name: "Total",
        cost: "$1225",
    }
]