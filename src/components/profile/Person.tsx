import * as React from "react";
import {makeStyles, Theme} from "@material-ui/core/styles";
import {Person as PersonType} from "../../types/person/Person";
import {Avatar, Box, Button, Grid, Typography} from "@material-ui/core";
import {SectionTitle} from "../section/SectionTitle";
import {L} from "../../modules/i18n/Locale";
import {Facebook, GithubCircle, Gmail, Instagram, Phone, Pinterest, Twitter, Whatsapp} from "mdi-material-ui";
import {ContactIcon} from "./ContactIcon";
import {currentShortLanguage} from "../../modules/i18n/Language";

interface Props {
    person: PersonType;
}

const useStyles = makeStyles((theme: Theme) => ({
    avatar: {
        width: "100%",
        maxWidth: theme.spacing(37),
        height: theme.spacing(37),
        marginRight: theme.spacing(3),
    },
    bio: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    rightItems: {
        textAlign: "justify",
        [theme.breakpoints.up("md")]: {
            direction: "rtl",
        },
    },
}));

export const Person: React.FC<Props> = (props: Props): React.ReactElement => {
    const styles = useStyles(props);

    return (
        <>
            <SectionTitle>{L.get("About me")}</SectionTitle>
            <Grid container spacing={3} justify="space-between">
                <Grid item>
                    <Avatar src={props.person.photo} variant="rounded" classes={{root: styles.avatar}} />
                </Grid>
                <Grid item xs={12} sm={6} classes={{root: styles.rightItems}}>
                    <Typography variant="h4">{props.person.fullName}</Typography>
                    <Typography classes={{root: styles.bio}}>{props.person.bio}</Typography>
                    <Grid container spacing={1}>
                        <Grid item>
                            <ContactIcon link={props.person.contact.facebook}>
                                <Facebook color="inherit" />
                            </ContactIcon>
                        </Grid>
                        <Grid item>
                            <ContactIcon link={props.person.contact.twitter}>
                                <Twitter color="inherit" />
                            </ContactIcon>
                        </Grid>
                        <Grid item>
                            <ContactIcon link={props.person.contact.email}>
                                <Gmail color="inherit" />
                            </ContactIcon>
                        </Grid>
                        <Grid item>
                            <ContactIcon link={props.person.contact.github}>
                                <GithubCircle color="inherit" />
                            </ContactIcon>
                        </Grid>
                        <Grid item>
                            <ContactIcon link={props.person.contact.pinterest}>
                                <Pinterest color="inherit" />
                            </ContactIcon>
                        </Grid>
                        <Grid item>
                            <ContactIcon link={props.person.contact.instagram}>
                                <Instagram color="inherit" />
                            </ContactIcon>
                        </Grid>
                        <Grid item>
                            <ContactIcon link={props.person.contact.whatsApp}>
                                <Whatsapp color="inherit" />
                            </ContactIcon>
                        </Grid>
                        <Grid item>
                            <ContactIcon link={props.person.contact.phone}>
                                <Phone color="inherit" />
                            </ContactIcon>
                        </Grid>
                    </Grid>
                    <Box mt={2}>
                        <Button
                            href={`/${currentShortLanguage}.pdf`}
                            target="_blank"
                            variant="contained"
                            color="secondary"
                        >
                            {L.get("Download my CV")}
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
};
