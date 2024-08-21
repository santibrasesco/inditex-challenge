import { Character } from "./Character";

export class Comic {

    public urlImage: string;
    constructor(
        public id: number,
        public characterId: number,
        public title: string,
        public saleDate: number,
        public thumbnail: { path: string, extension: string }
    ) {
        this.urlImage = `${thumbnail.path}.${thumbnail.extension}`;
    }
}