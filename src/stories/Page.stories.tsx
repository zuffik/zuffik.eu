import React from "react";
import {database} from "../modules/database/Database";
import {Header} from "../components/page/Header";
import {Footer} from "../components/page/Footer";
import {PrintSection} from "../components/pdf/PrintSection";
import {PrintSectionTitle} from "../components/pdf/PrintSectionTitle";
import {Typography} from "@material-ui/core";

export default {
    title: "Page",
};

export const header = () => <Header />;
export const footer = () => <Footer person={database.person} />;
export const printSection = () => (
    <PrintSection>
        {[
            [<PrintSectionTitle fontSize={32}>Title</PrintSectionTitle>, ""],
            [<PrintSectionTitle>Subtitle</PrintSectionTitle>, <Typography>Value</Typography>],
            [<PrintSectionTitle>Subtitle</PrintSectionTitle>, <Typography>Value</Typography>],
            [<PrintSectionTitle>Subtitle</PrintSectionTitle>, <Typography>Value</Typography>],
            [<PrintSectionTitle>Subtitle</PrintSectionTitle>, <Typography>Value</Typography>],
            [<PrintSectionTitle>Subtitle</PrintSectionTitle>, <Typography>Value</Typography>],
            [<PrintSectionTitle>Subtitle</PrintSectionTitle>, <Typography>Value</Typography>],
        ]}
    </PrintSection>
);
