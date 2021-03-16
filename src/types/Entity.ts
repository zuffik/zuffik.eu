import React, {ImgHTMLAttributes} from "react";
import {LocalizationResource} from "./LocalizationResource";

export type EntityImage = React.ComponentType<ImgHTMLAttributes<HTMLImageElement>>;

export abstract class Entity {
    protected constructor(
        public readonly id: string,
        public readonly label: LocalizationResource,
        public readonly image: EntityImage,
        public readonly link: string,
        public readonly description?: LocalizationResource
    ) {}
}
