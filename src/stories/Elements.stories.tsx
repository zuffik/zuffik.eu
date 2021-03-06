import React from "react";
import {select} from "@storybook/addon-knobs";
import {Card} from "../components/elements/Card";
import {Logo} from "../components/elements/Logo";

export default {
    title: "Elements",
};

export const card = () => (
    <Card
        background={select(
            "Background",
            {
                gradient: "gradient",
                primary: "primary",
                secondary: "secondary",
                white: "white",
            },
            "white"
        )}
    >
        <div style={{height: 300}} />
    </Card>
);

export const logo = () => <Logo />;
