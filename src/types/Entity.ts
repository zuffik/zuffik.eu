import React, {ImgHTMLAttributes} from "react";

export type EntityImage = React.ComponentType<ImgHTMLAttributes<HTMLImageElement>>;

export abstract class Entity {
    constructor(
        public readonly id: string,
        public readonly label: string,
        public readonly image: EntityImage,
        public readonly link: string,
        public readonly description?: string,
    ) {
    }
}
