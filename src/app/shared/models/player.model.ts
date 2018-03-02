export type GenderType = 'männlich' | 'weiblich' | 'unbekannt';

export class Player {
    constructor(
        public Id: number,
        public FirstName: string,
        public LastName: string,
        public Gender: GenderType,
        public Email: string,
    ) {

    }
}
