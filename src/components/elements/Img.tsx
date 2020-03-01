import * as React from "react";

export const createImg = (src: string): React.ComponentType<React.ImgHTMLAttributes<HTMLImageElement>> => (
    props: React.ImgHTMLAttributes<HTMLImageElement>
) => <img alt={props.alt} src={src} {...props} />;
