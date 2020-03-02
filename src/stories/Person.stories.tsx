import React from "react";
import {database} from "../modules/database/Database";
import {Person} from "../components/profile/Person";
import {PersonPrint} from "../components/profile/PersonPrint";

export default {
    title: "Person",
};

export const person = () => <Person person={database.person} />;

export const print = () => <PersonPrint person={database.person} />;
