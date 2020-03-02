import {Company} from "../../types/jobs/Company";
import {Project} from "../../types/jobs/Project";
import {School} from "../../types/jobs/School";
import {createImg} from "../../components/elements/Img";
import moment from "moment";

import imgEliasItSolutions from "../../static/jobs/companies/elias-it-solutions.png";
import imgFreelancer from "../../static/jobs/companies/freelancer.svg";
import imgAlbumovo from "../../static/jobs/projects/albumovo.png";
import imgBenefitPlus from "../../static/jobs/projects/benefit-plus.svg";
import imgEmu from "../../static/jobs/projects/emu.svg";
import imgEstatevoke from "../../static/jobs/projects/estatevoke.png";
import imgOdfarmara from "../../static/jobs/projects/odfarmara.svg";
import imgPenzionTimea from "../../static/jobs/projects/penziontimea.svg";
import imgSvadobneDekoracie from "../../static/jobs/projects/svadobnedekoracie.png";
import imgMGM from "../../static/jobs/companies/mgm.png";
import imgPokec from "../../static/jobs/companies/pokec.png";
import imgFRI from "../../static/jobs/schools/fri.png";
import imgSSTV from "../../static/jobs/schools/sstv.png";
import {L} from "../i18n/Locale";

export const jobs = {
    companies: {
        freelancer: new Company(
            "freelancer",
            "Freelancer",
            createImg(imgFreelancer),
            "http://localhost",
            moment("2014-07-01"),
            moment("2016-04-01"),
            L.get(
                "As a freelancer I participated in various project with various languages and platforms. It was all on the beginning of my career."
            ),
            L.get("Full-stack web developer (mainly with PHP, react, ...)")
        ),
        pokec: new Company(
            "pokec",
            "Pokec",
            createImg(imgPokec),
            "https://pokec.sk",
            moment("2016-04-01"),
            moment("2016-09-01"),
            L.get(
                "Pokec is the first division of the largest Slovak company Azet.sk. It is a dating web which almost every Slovak citizen is aware of."
            ),
            L.get("PHP web developer")
        ),
        mgm: new Company(
            "mgm",
            "Reality MGM",
            createImg(imgMGM),
            "https://realitymgm.sk",
            moment("2016-06-01"),
            moment("2018-06-01"),
            L.get(
                "Living is important part for every one of us. It is even better when your houm is bought online. CRM is one of the tool which can make it possible."
            ),
            L.get("Full-stack web developer (PHP, jquery, javascript, ...)")
        ),
        eliasItSolutions: new Company(
            "eliasItSolutions",
            "Eliáš IT Solutions",
            createImg(imgEliasItSolutions),
            "https://elias-itsolutions.com/",
            moment("2018-06-01"),
            undefined,
            L.get(
                "My current employment. So much opportunities to do various jobs. I've learnt most of the things here."
            ),
            L.get("Multiple projects for many clients (react.js, node.js, php, ...)")
        ),
    },
    projects: {
        albumovo: new Project(
            "albumovo",
            "Albumovo.sk",
            createImg(imgAlbumovo),
            "https://albumovo.sk",
            L.get(
                "One of the first e-shops made with my own CMS based on PHP. I was learning the language (and bit of seo) within this project."
            )
        ),
        benefitPlus: new Project(
            "benefitPlus",
            "BenefitPlus",
            createImg(imgBenefitPlus),
            "https://www.benefit-plus.eu/",
            L.get(
                "My current project, based on react.js. I love it, there is still so much to learn and this project took me higher."
            )
        ),
        emu: new Project(
            "emu",
            "EMU",
            createImg(imgEmu),
            "https://www.emu.hr/",
            L.get(
                "React.js first project I have ever done with professionality. There were many concepts I have understood."
            )
        ),
        estateVoke: new Project(
            "estateVoke",
            "ESTATeVOKE",
            createImg(imgEstatevoke),
            "https://www.estatevoke.sk/",
            L.get(
                "Indirect communication with client and entire process of buying estates is captured in this application."
            )
        ),
        odfarmara: new Project(
            "odfarmara",
            "OdFarmara.sk",
            createImg(imgOdfarmara),
            "https://odfarmara.sk/",
            L.get(
                "Are you living healthy? You can order material for baking, cooking and eating food from actual farmers from web or your phone."
            )
        ),
        penziontimea: new Project(
            "penziontimea",
            "Penzión Timea",
            createImg(imgPenzionTimea),
            "https://penziontimea.sk/",
            L.get(
                "Skiing or hiking. This web page is prepared for you to order right vacation in beautiful village Zuberec in Roháče."
            )
        ),
        svadobnedekoracie: new Project(
            "svadobnedekoracie",
            "Svadobné dekorácie",
            createImg(imgSvadobneDekoracie),
            "https://penziontimea.sk/",
            L.get(
                "If you are starting a family with a great celebration (marriage) you'll certainly need some stuff to make it possible."
            )
        ),
    },
    schools: {
        sstv: new School(
            "sstv",
            L.get("United school Tvrdošín"),
            createImg(imgSSTV),
            "https://sstv.sk",
            L.get("High school"),
            L.get("Technical academy"),
            moment("2011-09-01"),
            moment("2015-06-01")
        ),
        friBc: new School(
            "friBc",
            L.get("University of Žilina - Bc."),
            createImg(imgFRI),
            "https://fri.uniza.sk",
            L.get("Bachelor"),
            L.get("Faculty of management and information technology"),
            moment("2015-09-01"),
            moment("2018-06-01")
        ),
        friIng: new School(
            "friIng",
            L.get("University of Žilina - Ing."),
            createImg(imgFRI),
            "https://fri.uniza.sk",
            L.get("Master"),
            L.get("Faculty of management and information technology"),
            moment("2018-09-01")
            //moment("2020-06-01")
        ),
    },
};
