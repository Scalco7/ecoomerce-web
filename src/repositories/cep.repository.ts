import axios from "axios"

interface GetAddressByCepResponse {
    cep: string
    logradouro: string
    complemento: string
    unidade: string
    bairro: string
    localidade: string
    uf: string
    estado: string
    regiao: string
    ibge: string
    gia: string
    ddd: string
    siafi: string
}

export class CepRepository {
    private getApiUrl(cep: string): string {
        return `https://viacep.com.br/ws/${cep}/json/`
    }

    public async getAddressByCep(cep: string): Promise<GetAddressByCepResponse> {
        try {
            const url = this.getApiUrl(cep)
            const response = await axios.get(url)
            return response.data
        } catch (e) {
            throw e
        }
    }
}