export class Character {

    public urlImage: string;
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public thumbnail: { path: string, extension: string },
        public favorite: boolean
    ) {
        this.urlImage = `${thumbnail.path}.${thumbnail.extension}`;
    }
}