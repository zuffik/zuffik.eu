import {Job} from "./Job";
import {Moment} from "moment";
import {EntityImage} from "../Entity";
import {LocalizationResource} from "../LocalizationResource";

export class School extends Job {
    constructor(
        id: string,
        label: LocalizationResource,
        image: EntityImage,
        link: string,
        public readonly level: LocalizationResource,
        public readonly section: LocalizationResource,
        from: Moment,
        to?: Moment,
        description?: LocalizationResource
    ) {
        super(id, label, image, link, description, from, to);
    }
}
