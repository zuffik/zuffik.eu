import {Job} from "./Job";
import {Moment} from "moment";
import {EntityImage} from "../Entity";

export class School extends Job {
    constructor(
        id: string,
        label: string,
        image: EntityImage,
        link: string,
        public readonly level: string,
        public readonly from: Moment,
        public readonly to?: Moment,
        description?: string,
    ) {
        super(id, label, image, link, description);
    }
}
