import {Company} from "../../types/jobs/Company";
import {Project} from "../../types/jobs/Project";
import {School} from "../../types/jobs/School";
import {createImg} from "../../components/elements/Img";
import moment from "moment";

import imgEliasItSolutions from '../../static/jobs/companies/elias-it-solutions.png';
import imgFreelancer from '../../static/jobs/companies/freelancer.svg';
import imgAlbumovo from '../../static/jobs/projects/albumovo.png';
import imgBenefitPlus from '../../static/jobs/projects/benefit-plus.svg';
import imgEmu from '../../static/jobs/projects/emu.svg';
import imgEstatevoke from '../../static/jobs/projects/estatevoke.png';
import imgOdfarmara from '../../static/jobs/projects/odfarmara.svg';
import imgPenzionTimea from '../../static/jobs/projects/penziontimea.svg';
import imgSvadobneDekoracie from '../../static/jobs/projects/svadobnedekoracie.png';
import imgMGM from '../../static/jobs/companies/mgm.png';
import imgPokec from '../../static/jobs/companies/pokec.png';
import imgFRI from '../../static/jobs/schools/fri.png';
import imgSSTV from '../../static/jobs/schools/sstv.png';


export const jobs = {
    companies: {
        freelancer: new Company(
            'freelancer',
            'Freelancer',
            createImg(imgFreelancer),
            'http://localhost',
            moment('2014-07-01'),
            moment('2016-04-01'),
        ),
        pokec: new Company(
            'pokec',
            'Pokec',
            createImg(imgPokec),
            'https://pokec.sk',
            moment('2016-04-01'),
            moment('2016-09-01'),
        ),
        mgm: new Company(
            'mgm',
            'Reality MGM',
            createImg(imgMGM),
            'https://realitymgm.sk',
            moment('2016-06-01'),
            moment('2018-06-01'),
        ),
        eliasItSolutions: new Company(
            'eliasItSolutions',
            'Eliáš IT Solutions',
            createImg(imgEliasItSolutions),
            'https://elias-itsolutions.com/',
            moment('2018-06-01')
        ),
    },
    projects: {
        albumovo: new Project(
            'albumovo',
            'Albumovo.sk',
            createImg(imgAlbumovo),
            'https://albumovo.sk'
        ),
        benefitPlus: new Project(
            'benefitPlus',
            'BenefitPlus',
            createImg(imgBenefitPlus),
            'https://www.benefit-plus.eu/'
        ),
        emu: new Project(
            'emu',
            'EMU',
            createImg(imgEmu),
            'https://www.emu.hr/'
        ),
        estateVoke: new Project(
            'estateVoke',
            'ESTATeVOKE',
            createImg(imgEstatevoke),
            'https://www.estatevoke.sk/'
        ),
        odfarmara: new Project(
            'odfarmara',
            'OdFarmara.sk',
            createImg(imgOdfarmara),
            'https://odfarmara.sk/'
        ),
        penziontimea: new Project(
            'penziontimea',
            'Penzión Timea',
            createImg(imgPenzionTimea),
            'https://penziontimea.sk/'
        ),
        svadobnedekoracie: new Project(
            'svadobnedekoracie',
            'Svadobné dekorácie',
            createImg(imgSvadobneDekoracie),
            'https://penziontimea.sk/'
        ),
    },
    schools: {
        sstv: new School(
            'sstv',
            'Spojená škola Tvrdošín',
            createImg(imgSSTV),
            'https://sstv.sk',
            'High school',
            moment('2011-09-01'),
            moment('2015-06-01'),
        ),
        friBc: new School(
            'friBc',
            'University of Žilina - FRI',
            createImg(imgFRI),
            'https://fri.uniza.sk',
            'Bachelor',
            moment('2015-09-01'),
            moment('2018-06-01'),
        ),
        friIng: new School(
            'friIng',
            'University of Žilina - FRI',
            createImg(imgFRI),
            'https://fri.uniza.sk',
            'Master',
            moment('2018-09-01'),
            moment('2020-06-01'),
        ),
    }
};
