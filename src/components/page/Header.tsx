import * as React from "react";
import {Logo} from "../elements/Logo";
import {SectionTitle} from "../section/SectionTitle";
import {Box, Typography} from "@material-ui/core";
import {L} from "../../modules/i18n/Locale";

interface Props {}

export const Header: React.FC<Props> = (props: Props): React.ReactElement => {
    return (
        <>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="80vh"
                flexDirection="column"
            >
                <Logo size={16} />
                <SectionTitle>zuffik.eu</SectionTitle>
                <Typography variant="h5">
                    {L.get("Hello, I am zuffik, a fullstack web / QA / DevOps developer.")}
                </Typography>
            </Box>
        </>
    );
};
