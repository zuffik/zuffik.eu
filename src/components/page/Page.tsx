import * as React from "react";
import {DatabaseConsumer} from "../context/DatabaseContext";
import {Header} from "./Header";
import {Main} from "./Main";
import {Footer} from "./Footer";
import {Box} from "@material-ui/core";

interface Props {}

export const Page: React.FC<Props> = (props: Props): React.ReactElement => {
    return (
        <DatabaseConsumer>
            {(db) => (
                <Box paddingLeft="32px" paddingRight="32px">
                    <Header />
                    <Main
                        companies={db.companies}
                        schools={db.schools}
                        projects={db.projects}
                        frameworks={db.frameworks}
                        languages={db.languages}
                        platforms={db.platforms}
                        utilities={db.utilities}
                    />
                    <Footer person={db.person} />
                </Box>
            )}
        </DatabaseConsumer>
    );
};
