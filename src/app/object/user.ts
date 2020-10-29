export class user {
    name: string
    birthdate: number
    email: string
    isProfessional: boolean
    adress: userAdress
    workplace?: string
    college?: string
}

export class userAdress {
    logradouro: string
    bairro: string
    cidade: string
    estado: string
    numero: number
    complemento: string
}

