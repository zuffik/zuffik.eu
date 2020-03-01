import React from "react";
import {database} from "../modules/database/Database";
import {Header} from "../components/page/Header";
import {Footer} from "../components/page/Footer";

export default {
    title: "Page",
};

export const header = () => <Header />;
export const footer = () => <Footer person={database.person} />;
