import {Company} from "../../types/jobs/Company";
import {Project} from "../../types/jobs/Project";
import {School} from "../../types/jobs/School";
import {createImg} from "../../components/elements/Img";
import moment from "moment";
import {defineMessage} from "react-intl";

import imgEliasItSolutions from "../../static/jobs/companies/elias-it-solutions.png";
import imgFreelancer from "../../static/jobs/companies/freelancer.svg";
import imgAlbumovo from "../../static/jobs/projects/albumovo.png";
import imgBenefitPlus from "../../static/jobs/projects/benefit-plus.svg";
import imgEmu from "../../static/jobs/projects/emu.svg";
import imgFitradio from "../../static/jobs/projects/fitradio.jpg";
import imgEstatevoke from "../../static/jobs/projects/estatevoke.png";
import imgOdfarmara from "../../static/jobs/projects/odfarmara.svg";
import imgPenzionTimea from "../../static/jobs/projects/penziontimea.svg";
import imgSvadobneDekoracie from "../../static/jobs/projects/svadobnedekoracie.png";
import imgNpm from "../../static/jobs/projects/npm.svg";
import imgDigitooProject from "../../static/jobs/projects/digitoo.png";
import imgEset from "../../static/jobs/projects/eset.svg";
import imgMGM from "../../static/jobs/companies/mgm.png";
import imgPokec from "../../static/jobs/companies/pokec.png";
import imgSprinx from "../../static/jobs/companies/sprinx.png";
import imgDigitooCompany from "../../static/jobs/companies/digitoo.svg";
import imgFRI from "../../static/jobs/schools/fri.png";
import imgSSTV from "../../static/jobs/schools/sstv.png";

export const jobs = {
    companies: {
        freelancer: new Company(
            "freelancer",
            defineMessage({
                id: "db.companies.freelancer.label",
                defaultMessage: "Freelancer",
            }),
            createImg(imgFreelancer),
            "http://localhost",
            moment("2012-07-01"),
            moment("2016-04-01"),
            defineMessage({
                id: "db.companies.freelancer.description",
                defaultMessage:
                    "As a freelancer I participated in various project with various languages and platforms. It was all on the beginning of my career.",
            }),
            defineMessage({
                id: "db.companies.freelancer.primaryTask",
                defaultMessage: "Full-stack web developer (mainly with PHP, react, ...)",
            })
        ),
        pokec: new Company(
            "pokec",
            defineMessage({
                id: "db.companies.pokec.label",
                defaultMessage: "Pokec",
            }),
            createImg(imgPokec),
            "https://pokec.sk",
            moment("2016-04-01"),
            moment("2016-09-01"),
            defineMessage({
                id: "db.companies.pokec.description",
                defaultMessage:
                    "Pokec is the first division of the largest Slovak company Azet.sk. It is a dating web which almost every Slovak citizen is aware of.",
            }),
            defineMessage({
                id: "db.companies.pokec.primaryTask",
                defaultMessage: "PHP web developer",
            })
        ),
        mgm: new Company(
            "mgm",
            defineMessage({
                id: "db.companies.mgm.label",
                defaultMessage: "Reality MGM",
            }),
            createImg(imgMGM),
            "https://realitymgm.sk",
            moment("2017-06-01"),
            moment("2018-06-01"),
            defineMessage({
                id: "db.companies.mgm.description",
                defaultMessage:
                    "Living is important part for every one of us. It is even better when your home is bought online. CRM is one of the tool which can make it possible.",
            }),
            defineMessage({
                id: "db.companies.mgm.primaryTask",
                defaultMessage: "Full-stack web developer (PHP, jquery, javascript, ...)",
            })
        ),
        eliasItSolutions: new Company(
            "eliasItSolutions",
            defineMessage({
                id: "db.companies.eliasItSolutions.label",
                defaultMessage: "Eliáš IT Solutions",
            }),
            createImg(imgEliasItSolutions),
            "https://elias-itsolutions.com/",
            moment("2018-06-01"),
            moment("2020-07-01"),
            defineMessage({
                id: "db.companies.eliasItSolutions.description",
                defaultMessage:
                    "So much opportunities to do various jobs. I've learnt most of the things here.",
            }),
            defineMessage({
                id: "db.companies.eliasItSolutions.primaryTask",
                defaultMessage: "Multiple projects for many clients (react.js, node.js, php, ...)",
            })
        ),
        sprinx: new Company(
            "sprinx",
            defineMessage({
                id: "db.companies.sprinx.label",
                defaultMessage: "Sprinx Systems",
            }),
            createImg(imgSprinx),
            "http://sprinx.com",
            moment("2020-07-01"),
            undefined,
            defineMessage({
                id: "db.companies.sprinx.description",
                defaultMessage: "Steady, full time job as senior frontend developer.",
            }),
            defineMessage({
                id: "db.companies.sprinx.primaryTask",
                defaultMessage:
                    "My task is to develop BenefitPlus application with its subprojects (React development).",
            })
        ),
        digitoo: new Company(
            "digitoo",
            defineMessage({
                id: "db.companies.digitoo.label",
                defaultMessage: "Digitoo",
            }),
            createImg(imgDigitooCompany),
            "https://digitoo.cz",
            moment("2020-11-01"),
            undefined,
            defineMessage({
                id: "db.companies.digitoo.description",
                defaultMessage: "Part time job as a frontend developer.",
            }),
            defineMessage({
                id: "db.companies.digitoo.primaryTask",
                defaultMessage: "Digitoo is startup platform for accountants .",
            })
        ),
    },
    projects: {
        benefitPlus: new Project(
            "benefitPlus",
            defineMessage({
                id: "db.projects.benefitPlus.label",
                defaultMessage: "BenefitPlus",
            }),
            createImg(imgBenefitPlus),
            "https://www.benefit-plus.eu/",
            defineMessage({
                id: "db.projects.benefitPlus.description",
                defaultMessage:
                    "Project based on react.js. There is still so much to learn and this project took me higher.",
            }),
            moment("2019-09-01")
        ),
        emu: new Project(
            "emu",
            defineMessage({
                id: "db.projects.emu.label",
                defaultMessage: "EMU",
            }),
            createImg(imgEmu),
            "https://www.emu.hr/",
            defineMessage({
                id: "db.projects.emu.description",
                defaultMessage:
                    "React.js first project I have ever done with professionality. There were many concepts I have understood.",
            }),
            moment("2018-12-01"),
            moment("2019-06-01")
        ),
        fitradio: new Project(
            "fitradio",
            defineMessage({
                id: "db.projects.fitradio.label",
                defaultMessage: "Fitradio",
            }),
            createImg(imgFitradio),
            "https://fitradio.sk/",
            defineMessage({
                id: "db.projects.fitradio.description",
                defaultMessage: "React Native app for streaming real time sound and in-app songs.",
            }),
            moment("2019-02-01"),
            moment("2019-05-01")
        ),
        odfarmara: new Project(
            "odfarmara",
            defineMessage({
                id: "db.projects.odfarmara.label",
                defaultMessage: "OdFarmara.sk",
            }),
            createImg(imgOdfarmara),
            "https://odfarmara.sk/",
            defineMessage({
                id: "db.projects.odfarmara.description",
                defaultMessage:
                    "Are you living healthy? You can order material for baking, cooking and eating food from actual farmers from web or your phone.",
            }),
            moment("2018-12-01"),
            moment("2017-06-01")
        ),
        penziontimea: new Project(
            "penziontimea",
            defineMessage({
                id: "db.projects.penziontimea.label",
                defaultMessage: "Penzión Timea",
            }),
            createImg(imgPenzionTimea),
            "https://penziontimea.sk/",
            defineMessage({
                id: "db.projects.penziontimea.description",
                defaultMessage:
                    "Skiing or hiking. This web page is prepared for you to order right vacation in beautiful village Zuberec in Roháče.",
            }),
            moment("2015-06-01"),
            moment("2015-07-01")
        ),
        svadobnedekoracie: new Project(
            "svadobnedekoracie",
            defineMessage({
                id: "db.projects.svadobnedekoracie.label",
                defaultMessage: "Svadobné dekorácie",
            }),
            createImg(imgSvadobneDekoracie),
            "http://svadobnedekoracie.sk/",
            defineMessage({
                id: "db.projects.svadobnedekoracie.description",
                defaultMessage:
                    "If you are starting a family with a great celebration (marriage) you'll certainly need some stuff to make it possible.",
            }),
            moment("2013-12-01"),
            moment("2014-01-01")
        ),
        albumovo: new Project(
            "albumovo",
            defineMessage({
                id: "db.projects.albumovo.label",
                defaultMessage: "Albumovo.sk",
            }),
            createImg(imgAlbumovo),
            "https://albumovo.sk",
            defineMessage({
                id: "db.projects.albumovo.description",
                defaultMessage:
                    "One of the first e-shops made with my own CMS based on PHP. I was learning the language (and bit of seo) within this project.",
            }),
            moment("2013-12-01"),
            moment("2014-06-01")
        ),
        estateVoke: new Project(
            "estateVoke",
            defineMessage({
                id: "db.projects.estateVoke.label",
                defaultMessage: "ESTATeVOKE",
            }),
            createImg(imgEstatevoke),
            "https://www.estatevoke.sk/",
            defineMessage({
                id: "db.projects.estateVoke.description",
                defaultMessage:
                    "Indirect communication with client and entire process of buying estates is captured in this application.",
            }),
            moment("2017-06-01"),
            moment("2018-06-01")
        ),
        cucumberGenerator: new Project(
            "cucumberGenerator",
            defineMessage({
                id: "db.projects.cucumberGenerator.label",
                defaultMessage: "cucumber-generator",
            }),
            createImg(imgNpm),
            "https://www.npmjs.com/package/cucumber-generator",
            defineMessage({
                id: "db.projects.cucumberGenerator.description",
                defaultMessage: "Generate step definitions for cucumber scenarios.",
            }),
            moment("2020-10-01")
        ),
        mailtrapClient: new Project(
            "mailtrapClient",
            defineMessage({
                id: "db.projects.mailtrapClient.label",
                defaultMessage: "mailtrap-client",
            }),
            createImg(imgNpm),
            "https://www.npmjs.com/package/mailtrap-client",
            defineMessage({
                id: "db.projects.mailtrapClient.description",
                defaultMessage: "Mailtrap.io api client with some added features.",
            }),
            moment("2020-09-01")
        ),
        digitoo: new Project(
            "digitoo",
            defineMessage({
                id: "db.projects.digitoo.label",
                defaultMessage: "Digitoo app",
            }),
            createImg(imgDigitooProject),
            "https://app.digitoo.cz",
            defineMessage({
                id: "db.projects.digitoo.description",
                defaultMessage: "Digitoo application for digital accounting",
            }),
            moment("2020-10-02")
        ),
        eset: new Project(
            "eset",
            defineMessage({
                id: "db.projects.eset.label",
                defaultMessage: "ESET",
            }),
            createImg(imgEset),
            "https://eset.com",
            defineMessage({
                id: "db.projects.eset.description",
                defaultMessage: "Cart handling and licence renewal for eset antivirus",
            }),
            moment("2020-03-01")
        ),
    },
    schools: {
        sstv: new School(
            "sstv",
            defineMessage({
                id: "db.school.sstv.label",
                defaultMessage: "United school Tvrdošín",
            }),
            createImg(imgSSTV),
            "https://sstv.sk",
            defineMessage({
                id: "db.school.sstv.level",
                defaultMessage: "High school",
            }),
            defineMessage({
                id: "db.school.sstv.section",
                defaultMessage: "Technical academy",
            }),
            moment("2011-09-01"),
            moment("2015-06-01")
        ),
        friBc: new School(
            "friBc",
            defineMessage({
                id: "db.school.friBc.label",
                defaultMessage: "University of Žilina - Bc.",
            }),
            createImg(imgFRI),
            "https://fri.uniza.sk",
            defineMessage({
                id: "db.school.friBc.level",
                defaultMessage: "Bachelor",
            }),
            defineMessage({
                id: "db.school.friBc.section",
                defaultMessage: "Faculty of management and information technology",
            }),
            moment("2015-09-01"),
            moment("2018-06-01")
        ),
        friIng: new School(
            "friIng",
            defineMessage({
                id: "db.school.friIng.label",
                defaultMessage: "University of Žilina - Ing.",
            }),
            createImg(imgFRI),
            "https://fri.uniza.sk",
            defineMessage({
                id: "db.school.friIng.level",
                defaultMessage: "Master",
            }),
            defineMessage({
                id: "db.school.friIng.section",
                defaultMessage: "Faculty of management and information technology",
            }),
            moment("2018-09-01"),
            moment("2020-06-01")
        ),
    },
};
