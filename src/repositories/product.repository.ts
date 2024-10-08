import { ProductSection } from "@/states/productsState";
import axios from "axios";

interface IGetProductsBySectionResponse {
    sections: ProductSection[]
}

export class ProductRepository {
    private apiUrl: string;

    constructor() {
        this.apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/products`
    }

    public async getProductsBySection(): Promise<IGetProductsBySectionResponse> {
        const url = `${this.apiUrl}/getBySection`

        try {
            // const response = await axios.get(url)
            const response = {
                data: dataMock
            }
            return response.data
        }
        catch (error) {
            throw error
        }
    }
}

const dataMock = {
    "sections": [
        {
            "name": "Oversized",
            "productTypes": [
                {
                    "id": "00000002",
                    "name": "Camiseta oversized Banana Monkeys - ugly guy",
                    "description": "",
                    "products": [
                        {
                            "id": "00000012",
                            "imgUrls": [
                                "/mocks/product-type-00000002/preto-atras-1.jpeg",
                                "/mocks/product-type-00000002/preto-logo-1.jpeg",
                                "/mocks/product-type-00000002/preto-frente-1.jpeg",
                                "/mocks/product-type-00000002/preto-frente-2.jpeg",
                                "/mocks/product-type-00000002/preto-frente-3.jpeg"
                            ],
                            "price": 119,
                            "promotionPrice": 79,
                            "availableQuantity": 3,
                            "variant1Id": " 1xQrnwpj",
                            "variant2Id": " QWL7jZVC"
                        },
                        {
                            "id": "00000013",
                            "imgUrls": [
                                "/mocks/product-type-00000002/branco-atras-1.jpeg",
                                "/mocks/product-type-00000002/branco-frente-4.jpeg",
                                "/mocks/product-type-00000002/branco-frente-1.jpeg",
                                "/mocks/product-type-00000002/branco-frente-2.jpeg",
                                "/mocks/product-type-00000002/branco-frente-3.jpeg"
                            ],
                            "price": 119,
                            "promotionPrice": 79,
                            "availableQuantity": 3,
                            "variant1Id": " 7Q3CJglH",
                            "variant2Id": " QWL7jZVC"
                        },
                        {
                            "id": "00000014",
                            "imgUrls": [
                                "/mocks/product-type-00000002/preto-atras-1.jpeg",
                                "/mocks/product-type-00000002/preto-logo-1.jpeg",
                                "/mocks/product-type-00000002/preto-frente-1.jpeg",
                                "/mocks/product-type-00000002/preto-frente-2.jpeg",
                                "/mocks/product-type-00000002/preto-frente-3.jpeg"
                            ],
                            "price": 119,
                            "promotionPrice": 79,
                            "availableQuantity": 4,
                            "variant1Id": " 1xQrnwpj",
                            "variant2Id": " 3pAL8A1s"
                        },
                        {
                            "id": "00000015",
                            "imgUrls": [
                                "/mocks/product-type-00000002/branco-atras-1.jpeg",
                                "/mocks/product-type-00000002/branco-frente-4.jpeg",
                                "/mocks/product-type-00000002/branco-frente-1.jpeg",
                                "/mocks/product-type-00000002/branco-frente-2.jpeg",
                                "/mocks/product-type-00000002/branco-frente-3.jpeg"
                            ],
                            "price": 119,
                            "promotionPrice": 79,
                            "availableQuantity": 4,
                            "variant1Id": " 7Q3CJglH",
                            "variant2Id": " 3pAL8A1s"
                        },
                        {
                            "id": "00000016",
                            "imgUrls": [
                                "/mocks/product-type-00000002/preto-atras-1.jpeg",
                                "/mocks/product-type-00000002/preto-logo-1.jpeg",
                                "/mocks/product-type-00000002/preto-frente-1.jpeg",
                                "/mocks/product-type-00000002/preto-frente-2.jpeg",
                                "/mocks/product-type-00000002/preto-frente-3.jpeg"
                            ],
                            "price": 119,
                            "promotionPrice": 79,
                            "availableQuantity": 3,
                            "variant1Id": " 1xQrnwpj",
                            "variant2Id": " ksnhLC5f"
                        },
                        {
                            "id": "00000017",
                            "imgUrls": [
                                "/mocks/product-type-00000002/branco-atras-1.jpeg",
                                "/mocks/product-type-00000002/branco-frente-4.jpeg",
                                "/mocks/product-type-00000002/branco-frente-1.jpeg",
                                "/mocks/product-type-00000002/branco-frente-2.jpeg",
                                "/mocks/product-type-00000002/branco-frente-3.jpeg"
                            ],
                            "price": 119,
                            "promotionPrice": 79,
                            "availableQuantity": 3,
                            "variant1Id": " 7Q3CJglH",
                            "variant2Id": " ksnhLC5f"
                        }
                    ],
                    "variantType1": {
                        "type": "Cor",
                        "variants": [
                            {
                                "id": " 1xQrnwpj",
                                "name": "Preto"
                            },
                            {
                                "id": " 7Q3CJglH",
                                "name": "Branco"
                            }
                        ]
                    },
                    "variantType2": {
                        "type": "Tamanho",
                        "variants": [
                            {
                                "id": " QWL7jZVC",
                                "name": "P"
                            },
                            {
                                "id": " 3pAL8A1s",
                                "name": "M"
                            },
                            {
                                "id": " ksnhLC5f",
                                "name": "G"
                            }
                        ]
                    }
                },
                {
                    "id": "00000000",
                    "name": "Camiseta oversized Banana Monkeys - truco player",
                    "description": "",
                    "products": [
                        {
                            "id": "00000000",
                            "imgUrls": [
                                "/mocks/product-type-00000000/preto-costas-2.jpeg",
                                "/mocks/product-type-00000000/preto-costas-3.jpeg",
                                "/mocks/product-type-00000000/preto-costas-4.jpeg",
                                "/mocks/product-type-00000000/preto-frente-5.jpeg",
                                "/mocks/product-type-00000000/preto-frente-1.jpeg",
                                "/mocks/product-type-00000000/preto-frente-4.jpeg",
                                "/mocks/product-type-00000000/preto-trio-1.jpeg"
                            ],
                            "price": 119,
                            "promotionPrice": 79,
                            "availableQuantity": 3,
                            "variant1Id": " vsA23ok0",
                            "variant2Id": " A4hRXTxA"
                        },
                        {
                            "id": "00000001",
                            "imgUrls": [],
                            "price": 119,
                            "promotionPrice": 79,
                            "availableQuantity": 3,
                            "variant1Id": " 1MGf6ttU",
                            "variant2Id": " A4hRXTxA"
                        },
                        {
                            "id": "00000002",
                            "imgUrls": [
                                "/mocks/product-type-00000000/preto-frente-5.jpeg",
                                "/mocks/product-type-00000000/preto-costas-2.jpeg",
                                "/mocks/product-type-00000000/preto-costas-3.jpeg",
                                "/mocks/product-type-00000000/preto-costas-4.jpeg",
                                "/mocks/product-type-00000000/preto-frente-1.jpeg",
                                "/mocks/product-type-00000000/preto-frente-4.jpeg",
                                "/mocks/product-type-00000000/preto-trio-1.jpeg"
                            ],
                            "price": 119,
                            "promotionPrice": 79,
                            "availableQuantity": 4,
                            "variant1Id": " vsA23ok0",
                            "variant2Id": " HKevMlLF"
                        },
                        {
                            "id": "00000003",
                            "imgUrls": [],
                            "price": 119,
                            "promotionPrice": 79,
                            "availableQuantity": 4,
                            "variant1Id": " 1MGf6ttU",
                            "variant2Id": " HKevMlLF"
                        },
                        {
                            "id": "00000004",
                            "imgUrls": [
                                "/mocks/product-type-00000000/preto-frente-5.jpeg",
                                "/mocks/product-type-00000000/preto-costas-2.jpeg",
                                "/mocks/product-type-00000000/preto-costas-3.jpeg",
                                "/mocks/product-type-00000000/preto-costas-4.jpeg",
                                "/mocks/product-type-00000000/preto-frente-1.jpeg",
                                "/mocks/product-type-00000000/preto-frente-4.jpeg",
                                "/mocks/product-type-00000000/preto-trio-1.jpeg"
                            ],
                            "price": 119,
                            "promotionPrice": 79,
                            "availableQuantity": 3,
                            "variant1Id": " vsA23ok0",
                            "variant2Id": " arcFOi4p"
                        },
                        {
                            "id": "00000005",
                            "imgUrls": [],
                            "price": 119,
                            "promotionPrice": 79,
                            "availableQuantity": 3,
                            "variant1Id": " 1MGf6ttU",
                            "variant2Id": " arcFOi4p"
                        }
                    ],
                    "variantType1": {
                        "type": "Cor",
                        "variants": [
                            {
                                "id": " vsA23ok0",
                                "name": "Preto"
                            },
                            {
                                "id": " 1MGf6ttU",
                                "name": "Branco"
                            }
                        ]
                    },
                    "variantType2": {
                        "type": "Tamanho",
                        "variants": [
                            {
                                "id": " A4hRXTxA",
                                "name": "P"
                            },
                            {
                                "id": " HKevMlLF",
                                "name": "M"
                            },
                            {
                                "id": " arcFOi4p",
                                "name": "G"
                            }
                        ]
                    }
                },
                {
                    "id": "00000001",
                    "name": "Camiseta oversized Banana Monkeys - Let's de game begin",
                    "description": "",
                    "products": [
                        {
                            "id": "00000006",
                            "imgUrls": [
                                "/mocks/product-type-00000001/preto-atras-1.jpeg",
                                "/mocks/product-type-00000001/preto-atras-2.jpeg",
                                "/mocks/product-type-00000001/preto-frente-1.jpeg",
                                "/mocks/product-type-00000001/preto-frente-2.jpeg",
                                "/mocks/product-type-00000001/preto-frente-3.jpeg"
                            ],
                            "price": 119,
                            "promotionPrice": 79,
                            "availableQuantity": 3,
                            "variant1Id": " EF2pFrSA",
                            "variant2Id": " SdxkUMqq"
                        },
                        {
                            "id": "00000007",
                            "imgUrls": [
                                "/mocks/product-type-00000001/branco-atras-1.jpeg",
                                "/mocks/product-type-00000001/branco-atras-2.jpeg",
                                "/mocks/product-type-00000001/branco-atras-3.jpeg",
                                "/mocks/product-type-00000001/branco-atras-4.jpeg",
                                "/mocks/product-type-00000001/branco-frente-1.jpeg",
                                "/mocks/product-type-00000001/branco-frente-2.jpeg"
                            ],
                            "price": 119,
                            "promotionPrice": 79,
                            "availableQuantity": 3,
                            "variant1Id": " ETKPDYdO",
                            "variant2Id": " SdxkUMqq"
                        },
                        {
                            "id": "00000008",
                            "imgUrls": [
                                "/mocks/product-type-00000001/preto-atras-1.jpeg",
                                "/mocks/product-type-00000001/preto-atras-2.jpeg",
                                "/mocks/product-type-00000001/preto-frente-1.jpeg",
                                "/mocks/product-type-00000001/preto-frente-2.jpeg",
                                "/mocks/product-type-00000001/preto-frente-3.jpeg"
                            ],
                            "price": 119,
                            "promotionPrice": 79,
                            "availableQuantity": 4,
                            "variant1Id": " EF2pFrSA",
                            "variant2Id": " IUnsEtZe"
                        },
                        {
                            "id": "00000009",
                            "imgUrls": [
                                "/mocks/product-type-00000001/branco-atras-1.jpeg",
                                "/mocks/product-type-00000001/branco-atras-2.jpeg",
                                "/mocks/product-type-00000001/branco-atras-3.jpeg",
                                "/mocks/product-type-00000001/branco-atras-4.jpeg",
                                "/mocks/product-type-00000001/branco-frente-1.jpeg",
                                "/mocks/product-type-00000001/branco-frente-2.jpeg"
                            ],
                            "price": 119,
                            "promotionPrice": 79,
                            "availableQuantity": 4,
                            "variant1Id": " ETKPDYdO",
                            "variant2Id": " IUnsEtZe"
                        },
                        {
                            "id": "00000010",
                            "imgUrls": [
                                "/mocks/product-type-00000001/preto-atras-1.jpeg",
                                "/mocks/product-type-00000001/preto-atras-2.jpeg",
                                "/mocks/product-type-00000001/preto-frente-1.jpeg",
                                "/mocks/product-type-00000001/preto-frente-2.jpeg",
                                "/mocks/product-type-00000001/preto-frente-3.jpeg"
                            ],
                            "price": 119,
                            "promotionPrice": 79,
                            "availableQuantity": 3,
                            "variant1Id": " EF2pFrSA",
                            "variant2Id": " 53RUvfQl"
                        },
                        {
                            "id": "00000011",
                            "imgUrls": [
                                "/mocks/product-type-00000001/branco-atras-1.jpeg",
                                "/mocks/product-type-00000001/branco-atras-2.jpeg",
                                "/mocks/product-type-00000001/branco-atras-3.jpeg",
                                "/mocks/product-type-00000001/branco-atras-4.jpeg",
                                "/mocks/product-type-00000001/branco-frente-1.jpeg",
                                "/mocks/product-type-00000001/branco-frente-2.jpeg"
                            ],
                            "price": 119,
                            "promotionPrice": 79,
                            "availableQuantity": 3,
                            "variant1Id": " ETKPDYdO",
                            "variant2Id": " 53RUvfQl"
                        }
                    ],
                    "variantType1": {
                        "type": "Cor",
                        "variants": [
                            {
                                "id": " EF2pFrSA",
                                "name": "Preto"
                            },
                            {
                                "id": " ETKPDYdO",
                                "name": "Branco"
                            }
                        ]
                    },
                    "variantType2": {
                        "type": "Tamanho",
                        "variants": [
                            {
                                "id": " SdxkUMqq",
                                "name": "P"
                            },
                            {
                                "id": " IUnsEtZe",
                                "name": "M"
                            },
                            {
                                "id": " 53RUvfQl",
                                "name": "G"
                            }
                        ]
                    }
                }
            ]
        },
        {
            "name": "Acessórios",
            "productTypes": [
                {
                    "id": "00000005",
                    "name": "Boné Banana Monkeys - monkey white",
                    "description": "",
                    "products": [
                        {
                            "id": "00000024",
                            "imgUrls": [
                                "/mocks/product-type-00000005/perto-1.jpeg",
                                "/mocks/product-type-00000005/perto-2.jpeg",
                                "/mocks/product-type-00000005/perto-3.jpeg",
                                "/mocks/product-type-00000005/longe-1.jpeg"
                            ],
                            "price": 89,
                            "promotionPrice": 49,
                            "availableQuantity": 10
                        }
                    ]
                },
                {
                    "id": "00000006",
                    "name": "Bone Banana Monkeys - gorila Monkeys",
                    "description": "",
                    "products": [
                        {
                            "id": "00000025",
                            "imgUrls": [
                                "/mocks/product-type-00000006/perto-1.jpeg",
                                "/mocks/product-type-00000006/perto-2.jpeg",
                                "/mocks/product-type-00000006/perto-3.png"
                            ],
                            "price": 89,
                            "promotionPrice": 49,
                            "availableQuantity": 10
                        }
                    ]
                }
            ]
        }
    ]
}