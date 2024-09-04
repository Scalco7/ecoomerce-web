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
            const response = await axios.get(url)
            return response.data
        }
        catch (error) {
            throw error
        }
    }
}