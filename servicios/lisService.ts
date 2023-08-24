export type LocaleType = "es" | "en"
export type Programmers = {
    name: string,
    charge: string
}

const service = {
    es:  [
            {
                name: "David Upegui",
                charge: "Resolver todo"
            },
            {
                name: "Waldo",
                charge: "Ser el lindo"
            },
            {
                name: "Laura Tascón",
                charge: "Trabajar"
            }
        ]
    ,
    en: [
            {
                name: "David Upegui",
                charge: "Solve everything"
            },
            {
                name: "Waldo",
                charge: "Be cute as fuck"
            },
            {
                name: "Laura Tascón",
                charge: "Work"
            }
        ]
    
}

export const lisService = (locale:string|undefined) => locale==="es" ? service.es : service.en