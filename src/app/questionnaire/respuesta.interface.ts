export interface Respuesta {
    //name: string;
    respuestas: Respuestas[];
}

export interface Respuestas {
    usuarioId: number;
    tecnologiaId: Tecnologia;
    practico: number;
    proyecto: number;
    teorico: number;
}

export interface Tecnologia{
    tecnologiaId: number;
    nombreTecnologia: string;
}