import {Job} from "./Job";
import {Moment} from "moment";
import {EntityImage} from "../Entity";
import {LocalizationResource} from "../LocalizationResource";

export class Company extends Job {
    constructor(
        id: string,
        label: LocalizationResource,
        image: EntityImage,
        link: string,
        public readonly from: Moment,
        public readonly to?: Moment,
        description?: LocalizationResource,
        public readonly primaryTask?: LocalizationResource,
        public readonly hidden: boolean = false
    ) {
        super(id, label, image, link, description);
    }
}
