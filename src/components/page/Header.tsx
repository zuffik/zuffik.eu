import * as React from "react";
import {Logo} from "../elements/Logo";
import {SectionTitle} from "../section/SectionTitle";
import {Box, Typography} from "@material-ui/core";
import {useIntl} from "react-intl";

interface Props {}

export const Header: React.FC<Props> = (props: Props): React.ReactElement => {
    const intl = useIntl();
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
                    {intl.formatMessage({
                        defaultMessage: "Hello, I am zuffik, a fullstack web / QA / DevOps developer.",
                        id: "general.mainTitle",
                    })}
                </Typography>
            </Box>
        </>
    );
};
