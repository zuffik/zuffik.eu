import React from "react";
import {StaticData} from "../../types/StaticData";
import {database} from "../../modules/database/Database";

const ctx = React.createContext<StaticData>(database);

export const DatabaseProvider = ctx.Provider;
export const DatabaseConsumer = ctx.Consumer;
