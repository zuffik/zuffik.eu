import * as _ from "lodash";

import {Framework} from "../../types/skills/Framework";
import {Language} from "../../types/skills/Language";
import {Platform} from "../../types/skills/Platform";
import {Utility} from "../../types/skills/Utility";
import {jobs} from "./Jobs";
import {createImg} from "../../components/elements/Img";
import {defineMessage} from "react-intl";

import imgAngular from "../../static/skills/frameworks/angular.svg";
import imgDotnetCore from "../../static/skills/frameworks/dotnet-core.svg";
import imgIonic from "../../static/skills/frameworks/ionic.svg";
import imgLaravel from "../../static/skills/frameworks/laravel.svg";
import imgGraphql from "../../static/skills/frameworks/graphql.svg";
import imgNestjs from "../../static/skills/frameworks/nestjs.svg";
import imgNextjs from "../../static/skills/frameworks/nextjs.svg";
import imgNodejs from "../../static/skills/frameworks/nodejs.svg";
import imgReact from "../../static/skills/frameworks/react.svg";
import imgTypescript from "../../static/skills/frameworks/typescript.svg";
import imgVuejs from "../../static/skills/frameworks/vuejs.svg";
import imgCypress from "../../static/skills/frameworks/cypress.png";
import imgSelenium from "../../static/skills/frameworks/selenium.png";
import imgBootstrap from "../../static/skills/frameworks/bootstrap.svg";
import imgJest from "../../static/skills/frameworks/jest.svg";
import imgMaterialUi from "../../static/skills/frameworks/material-ui.svg";
import imgUnity from "../../static/skills/frameworks/unity.svg";
import imgCpp from "../../static/skills/languages/cpp.svg";
import imgCss from "../../static/skills/languages/css.svg";
import imgHtml from "../../static/skills/languages/html.svg";
import imgJava from "../../static/skills/languages/java.svg";
import imgJavascript from "../../static/skills/languages/javascript.svg";
import imgPhp from "../../static/skills/languages/php.svg";
import imgCsharp from "../../static/skills/languages/csharp.svg";
import imgLatex from "../../static/skills/languages/latex.svg";
import imgMarkdown from "../../static/skills/languages/markdown.svg";
import imgMongodb from "../../static/skills/languages/mongodb.png";
import imgSql from "../../static/skills/languages/mysql.svg";
import imgPython from "../../static/skills/languages/python.svg";
import imgRedis from "../../static/skills/languages/redis.svg";
import imgAndroid from "../../static/skills/platforms/android.svg";
import imgApple from "../../static/skills/platforms/apple.svg";
import imgArduino from "../../static/skills/platforms/arduino.svg";
import imgBrowser from "../../static/skills/platforms/browser.svg";
import imgLinux from "../../static/skills/platforms/linux.svg";
import imgRaspberry from "../../static/skills/platforms/raspberry.svg";
import imgAws from "../../static/skills/utilities/aws.svg";
import imgGit from "../../static/skills/utilities/git.svg";
import imgGitlab from "../../static/skills/utilities/gitlab.svg";
import imgANN from "../../static/skills/utilities/ann.svg";
import imgBitbucket from "../../static/skills/utilities/bitbucket.svg";
import imgCucumber from "../../static/skills/utilities/cucumber.svg";
import imgJenkins from "../../static/skills/utilities/jenkins.svg";
import imgTravisCi from "../../static/skills/utilities/travis-ci.svg";
import imgWebpack from "../../static/skills/utilities/webpack.svg";
import imgDocker from "../../static/skills/utilities/docker.svg";
import imgDockerCompose from "../../static/skills/utilities/docker-compose.png";
import {Project} from "../../types/jobs/Project";

export const skills = {
    frameworks: {
        angular: new Framework(
            "angular",
            defineMessage({id: "db.skills.frameworks.angular.label", defaultMessage: "Angular"}),
            createImg(imgAngular),
            "https://angular.io/",
            [jobs.companies.freelancer],
            [jobs.projects.odfarmara],
            20,
            defineMessage({
                id: "db.skills.frameworks.angular.description",
                defaultMessage: "basics",
            })
        ),
        dotnetCore: new Framework(
            "dotnetCore",
            defineMessage({id: "db.skills.frameworks.dotnetCore.label", defaultMessage: "Dotnet Core"}),
            createImg(imgDotnetCore),
            "https://dotnet.microsoft.com/download",
            [jobs.schools.friBc, jobs.schools.friIng],
            [],
            20,
            defineMessage({
                id: "db.skills.frameworks.dotnetCore.description",
                defaultMessage: "Microsoft pfff...",
            })
        ),
        ionic: new Framework(
            "ionic",
            defineMessage({id: "db.skills.frameworks.ionic.label", defaultMessage: "Ionic"}),
            createImg(imgIonic),
            "https://ionicframework.com/",
            [jobs.companies.freelancer],
            [jobs.projects.odfarmara],
            20,
            defineMessage({
                id: "db.skills.frameworks.ionic.description",
                defaultMessage: "mobile angular",
            })
        ),
        laravel: new Framework(
            "laravel",
            defineMessage({id: "db.skills.frameworks.laravel.label", defaultMessage: "Laravel"}),
            createImg(imgLaravel),
            "https://laravel.com",
            [jobs.companies.eliasItSolutions],
            [],
            60,
            defineMessage({
                id: "db.skills.frameworks.laravel.description",
                defaultMessage: "best for PHP",
            })
        ),
        graphql: new Framework(
            "graphql",
            defineMessage({id: "db.skills.frameworks.graphql.label", defaultMessage: "GraphQL"}),
            createImg(imgGraphql),
            "https://graphql.org",
            [
                jobs.companies.eliasItSolutions,
                jobs.schools.friBc,
                jobs.schools.friIng,
                jobs.companies.digitoo,
                jobs.companies.brainsoft,
            ],
            [jobs.projects.digitoo, jobs.projects.ibm],
            60,
            defineMessage({
                id: "db.skills.frameworks.graphql.description",
                defaultMessage: "I ♥ it",
            })
        ),
        nestjs: new Framework(
            "nestjs",
            defineMessage({id: "db.skills.frameworks.nestjs.label", defaultMessage: "nest.js"}),
            createImg(imgNestjs),
            "https://nestjs.com",
            [jobs.companies.freelancer, jobs.companies.digitoo],
            [jobs.projects.digitoo],
            40,
            defineMessage({
                id: "db.skills.frameworks.nestjs.description",
                defaultMessage: "I ♥ it",
            })
        ),
        nextjs: new Framework(
            "nextjs",
            defineMessage({id: "db.skills.frameworks.nextjs.label", defaultMessage: "next.js"}),
            createImg(imgNextjs),
            "https://nextjs.org",
            [jobs.companies.freelancer, jobs.companies.brainsoft],
            [jobs.projects.patria, jobs.projects.ibm],
            80,
            defineMessage({
                id: "db.skills.frameworks.nextjs.description",
                defaultMessage: "React SSR",
            })
        ),
        nodejs: new Framework(
            "nodejs",
            defineMessage({id: "db.skills.frameworks.nodejs.label", defaultMessage: "Node.js"}),
            createImg(imgNodejs),
            "https://nodejs.org",
            [
                jobs.companies.eliasItSolutions,
                jobs.companies.sprinx,
                jobs.companies.digitoo,
                jobs.companies.brainsoft,
                jobs.companies.twigsee,
            ],
            [
                jobs.projects.benefitPlus,
                jobs.projects.emu,
                jobs.projects.mailtrapClient,
                jobs.projects.cucumberGenerator,
                jobs.projects.digitoo,
                jobs.projects.patria,
                jobs.projects.ibm,
                jobs.projects.twigsee,
            ],
            80,
            defineMessage({
                id: "db.skills.frameworks.nodejs.description",
                defaultMessage: "multifunctional",
            })
        ),
        react: new Framework(
            "react",
            defineMessage({id: "db.skills.frameworks.react.label", defaultMessage: "React"}),
            createImg(imgReact),
            "https://react.com",
            [
                jobs.companies.eliasItSolutions,
                jobs.companies.sprinx,
                jobs.companies.digitoo,
                jobs.companies.brainsoft,
                jobs.companies.twigsee,
            ],
            [
                jobs.projects.benefitPlus,
                jobs.projects.emu,
                jobs.projects.fitradio,
                jobs.projects.digitoo,
                jobs.projects.benefitPlus,
                jobs.projects.eset,
                jobs.projects.patria,
                jobs.projects.twigsee,
                jobs.projects.ibm,
            ],
            90,
            defineMessage({
                id: "db.skills.frameworks.react.description",
                defaultMessage: "I ♥ it",
            })
        ),
        reactNative: new Framework(
            "reactNative",
            defineMessage({id: "db.skills.frameworks.reactNative.label", defaultMessage: "React Native"}),
            createImg(imgReact),
            "https://facebook.github.io/react-native/",
            [jobs.companies.eliasItSolutions, jobs.companies.sprinx],
            [jobs.projects.benefitPlus, jobs.projects.fitradio, jobs.projects.benefitPlus],
            85,
            defineMessage({
                id: "db.skills.frameworks.reactNative.description",
                defaultMessage: "react for mobiles",
            })
        ),
        vuejs: new Framework(
            "vuejs",
            defineMessage({id: "db.skills.frameworks.vuejs.label", defaultMessage: "Vue.js"}),
            createImg(imgVuejs),
            "https://vuejs.org",
            [jobs.companies.eliasItSolutions, jobs.companies.digitoo],
            [jobs.projects.digitoo],
            20,
            defineMessage({
                id: "db.skills.frameworks.vuejs.description",
                defaultMessage: "interesting...",
            })
        ),
        cypress: new Framework(
            "cypress",
            defineMessage({id: "db.skills.frameworks.cypress.label", defaultMessage: "Cypress"}),
            createImg(imgCypress),
            "https://cypress.io",
            [jobs.companies.digitoo, jobs.companies.twigsee],
            [jobs.projects.digitoo, jobs.projects.twigsee],
            48,
            defineMessage({
                id: "db.skills.frameworks.cypress.description",
                defaultMessage: "better selenium",
            })
        ),
        selenium: new Framework(
            "selenium",
            defineMessage({id: "db.skills.frameworks.selenium.label", defaultMessage: "Selenium"}),
            createImg(imgSelenium),
            "https://selenium.dev",
            [],
            [],
            5,
            defineMessage({
                id: "db.skills.frameworks.selenium.description",
                defaultMessage: "necessary",
            })
        ),
        bootstrap: new Framework(
            "bootstrap",
            defineMessage({id: "db.skills.frameworks.bootstrap.label", defaultMessage: "Bootstrap"}),
            createImg(imgBootstrap),
            "https://getbootstrap.com",
            [jobs.schools.sstv, jobs.companies.freelancer, jobs.companies.mgm],
            [
                jobs.projects.svadobnedekoracie,
                jobs.projects.penziontimea,
                jobs.projects.estateVoke,
                jobs.projects.albumovo,
            ],
            20,
            defineMessage({
                id: "db.skills.frameworks.bootstrap.description",
                defaultMessage: "design",
            })
        ),
        jest: new Framework(
            "jest",
            defineMessage({id: "db.skills.frameworks.jest.label", defaultMessage: "Jest"}),
            createImg(imgJest),
            "https://jestjs.io",
            [
                jobs.companies.eliasItSolutions,
                jobs.companies.freelancer,
                jobs.companies.sprinx,
                jobs.companies.digitoo,
                jobs.companies.twigsee,
            ],
            [jobs.projects.benefitPlus, jobs.projects.emu, jobs.projects.digitoo, jobs.projects.twigsee],
            83,
            defineMessage({
                id: "db.skills.frameworks.jest.description",
                defaultMessage: "testing",
            })
        ),
        materialUi: new Framework(
            "materialUi",
            defineMessage({id: "db.skills.frameworks.materialUi.label", defaultMessage: "Material UI"}),
            createImg(imgMaterialUi),
            "http://material-ui.com",
            [
                jobs.companies.eliasItSolutions,
                jobs.companies.freelancer,
                jobs.companies.sprinx,
                jobs.companies.digitoo,
                jobs.companies.twigsee,
            ],
            [jobs.projects.benefitPlus, jobs.projects.digitoo, jobs.projects.patria, jobs.projects.twigsee],
            76,
            defineMessage({
                id: "db.skills.frameworks.materialUi.description",
                defaultMessage: "great FE",
            })
        ),
        unity: new Framework(
            "unity",
            defineMessage({id: "db.skills.frameworks.unity.label", defaultMessage: "Unity"}),
            createImg(imgUnity),
            "https://unity.com",
            [jobs.schools.friBc, jobs.schools.friIng],
            [],
            36,
            defineMessage({
                id: "db.skills.frameworks.unity.description",
                defaultMessage: "games",
            })
        ),
    },
    languages: {
        typescript: new Language(
            "typescript",
            defineMessage({id: "db.skills.languages.typescript.label", defaultMessage: "TypeScript"}),
            createImg(imgTypescript),
            "https://typescriptlang.org",
            [
                jobs.companies.eliasItSolutions,
                jobs.companies.sprinx,
                jobs.companies.digitoo,
                jobs.companies.brainsoft,
                jobs.companies.twigsee,
            ],
            [
                jobs.projects.benefitPlus,
                jobs.projects.emu,
                jobs.projects.fitradio,
                jobs.projects.cucumberGenerator,
                jobs.projects.mailtrapClient,
                jobs.projects.digitoo,
                jobs.projects.eset,
                jobs.projects.patria,
                jobs.projects.twigsee,
                jobs.projects.ibm,
            ],
            99,
            defineMessage({
                id: "db.skills.languages.typescript.description",
                defaultMessage: "prevent bugs",
            })
        ),
        javascript: new Language(
            "javascript",
            defineMessage({id: "db.skills.languages.javascript.label", defaultMessage: "JavaScript"}),
            createImg(imgJavascript),
            "https://javascript.com",
            [..._.values(jobs.companies), ..._.values(jobs.schools)],
            _.values(jobs.projects),
            99,
            defineMessage({
                id: "db.skills.languages.javascript.description",
                defaultMessage: "perfect",
            })
        ),
        cpp: new Language(
            "cpp",
            defineMessage({id: "db.skills.languages.cpp.label", defaultMessage: "C++"}),
            createImg(imgCpp),
            "http://www.cplusplus.com/",
            [..._.values(jobs.schools)],
            [],
            10,
            defineMessage({
                id: "db.skills.languages.cpp.description",
                defaultMessage: "excellent",
            })
        ),
        csharp: new Language(
            "csharp",
            defineMessage({id: "db.skills.languages.csharp.label", defaultMessage: "C#"}),
            createImg(imgCsharp),
            "https://docs.microsoft.com/en-us/dotnet/csharp/",
            [..._.values(jobs.schools)],
            [],
            11,
            defineMessage({
                id: "db.skills.languages.csharp.description",
                defaultMessage: "better C++",
            })
        ),
        latex: new Language(
            "latex",
            defineMessage({id: "db.skills.languages.latex.label", defaultMessage: "LaTeX"}),
            createImg(imgLatex),
            "http://latex.org",
            [jobs.schools.friIng],
            [],
            23,
            defineMessage({
                id: "db.skills.languages.latex.description",
                defaultMessage: "math docs",
            })
        ),
        mongodb: new Language(
            "mongodb",
            defineMessage({id: "db.skills.languages.mongodb.label", defaultMessage: "MongoDB"}),
            createImg(imgMongodb),
            "https://www.mongodb.com",
            [jobs.schools.friBc, jobs.schools.friIng],
            [],
            34,
            defineMessage({
                id: "db.skills.languages.mongodb.description",
                defaultMessage: "elegant DB",
            })
        ),
        sql: new Language(
            "sql",
            defineMessage({id: "db.skills.languages.sql.label", defaultMessage: "SQL"}),
            createImg(imgSql),
            "https://www.mysql.com",
            [
                ..._.values(jobs.schools),
                jobs.companies.mgm,
                jobs.companies.eliasItSolutions,
                jobs.companies.freelancer,
                jobs.companies.pokec,
            ],
            [
                jobs.projects.albumovo,
                jobs.projects.estateVoke,
                jobs.projects.odfarmara,
                jobs.projects.penziontimea,
                jobs.projects.svadobnedekoracie,
            ],
            89,
            defineMessage({
                id: "db.skills.languages.sql.description",
                defaultMessage: '"(my)SQL"',
            })
        ),
        python: new Language(
            "python",
            defineMessage({id: "db.skills.languages.python.label", defaultMessage: "Python"}),
            createImg(imgPython),
            "https://www.python.org",
            [jobs.schools.friBc, jobs.schools.friIng],
            [],
            56,
            defineMessage({
                id: "db.skills.languages.python.description",
                defaultMessage: "fast math",
            })
        ),
        redis: new Language(
            "redis",
            defineMessage({id: "db.skills.languages.redis.label", defaultMessage: "Redis"}),
            createImg(imgRedis),
            "https://redis.io",
            [..._.values(jobs.schools)],
            [],
            64,
            defineMessage({
                id: "db.skills.languages.redis.description",
                defaultMessage: "fast db",
            })
        ),
        css: new Language(
            "css",
            defineMessage({id: "db.skills.languages.css.label", defaultMessage: "CSS"}),
            createImg(imgCss),
            "https://css-tricks.com/",
            [..._.values(jobs.companies), ..._.values(jobs.schools)],
            _.values(jobs.projects).filter(
                (p) => !["fitradio", "cucumberGenerator", "mailtrapClient"].includes(p.id)
            ) as Project[],
            99,
            defineMessage({
                id: "db.skills.languages.css.description",
                defaultMessage: "everyone knows",
            })
        ),
        html: new Language(
            "html",
            defineMessage({id: "db.skills.languages.html.label", defaultMessage: "HTML"}),
            createImg(imgHtml),
            "https://www.w3schools.com/html/",
            [..._.values(jobs.companies), ..._.values(jobs.schools)],
            _.values(jobs.projects).filter(
                (p) => !["fitradio", "cucumberGenerator", "mailtrapClient"].includes(p.id)
            ) as Project[],
            99,
            defineMessage({
                id: "db.skills.languages.html.description",
                defaultMessage: "everyone knows",
            })
        ),
        java: new Language(
            "java",
            defineMessage({id: "db.skills.languages.java.label", defaultMessage: "Java"}),
            createImg(imgJava),
            "https://java.com",
            [jobs.schools.friBc, jobs.schools.friIng],
            [],
            35,
            defineMessage({
                id: "db.skills.languages.java.description",
                defaultMessage: "meh",
            })
        ),
        php: new Language(
            "php",
            defineMessage({id: "db.skills.languages.php.label", defaultMessage: "PHP"}),
            createImg(imgPhp),
            "https://php.net",
            [..._.values(jobs.companies), ..._.values(jobs.schools)],
            [
                jobs.projects.odfarmara,
                jobs.projects.albumovo,
                jobs.projects.estateVoke,
                jobs.projects.penziontimea,
                jobs.projects.svadobnedekoracie,
            ],
            99,
            defineMessage({
                id: "db.skills.languages.php.description",
                defaultMessage: "was perfect",
            })
        ),
        markdown: new Language(
            "markdown",
            defineMessage({id: "db.skills.languages.markdown.label", defaultMessage: "MarkDown"}),
            createImg(imgMarkdown),
            "https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet",
            [..._.values(jobs.schools), ..._.values(jobs.companies)],
            [..._.values(jobs.projects)],
            76,
            defineMessage({
                id: "db.skills.languages.markdown.description",
                defaultMessage: "all docs",
            })
        ),
    },
    platforms: {
        android: new Platform(
            "android",
            defineMessage({id: "db.skills.platforms.android.label", defaultMessage: "Android"}),
            createImg(imgAndroid),
            "https://android.com",
            [jobs.companies.eliasItSolutions, jobs.companies.sprinx],
            [jobs.projects.benefitPlus, jobs.projects.fitradio],
            40,
            defineMessage({
                id: "db.skills.platforms.android.description",
                defaultMessage: "s-l-o-w",
            })
        ),
        apple: new Platform(
            "apple",
            defineMessage({id: "db.skills.platforms.apple.label", defaultMessage: "Apple"}),
            createImg(imgApple),
            "https://apple.com",
            [jobs.companies.eliasItSolutions, jobs.companies.sprinx],
            [jobs.projects.benefitPlus, jobs.projects.fitradio],
            30,
            defineMessage({
                id: "db.skills.platforms.apple.description",
                defaultMessage: "my precious",
            })
        ),
        arduino: new Platform(
            "arduino",
            defineMessage({id: "db.skills.platforms.arduino.label", defaultMessage: "Arduino"}),
            createImg(imgArduino),
            "https://arduino.cc",
            [jobs.companies.freelancer],
            [],
            30,
            defineMessage({
                id: "db.skills.platforms.arduino.description",
                defaultMessage: "can be anywhere",
            })
        ),
        browser: new Platform(
            "browser",
            defineMessage({id: "db.skills.platforms.browser.label", defaultMessage: "Browser"}),
            createImg(imgBrowser),
            "https://www.browserstack.com/",
            [..._.values(jobs.companies), ..._.values(jobs.schools)],
            _.values(jobs.projects).filter((p) => !["fitradio", "cucumberGenerator"].includes(p.id)),
            99,
            defineMessage({
                id: "db.skills.platforms.browser.description",
                defaultMessage: "bedrock",
            })
        ),
        linux: new Platform(
            "linux",
            defineMessage({id: "db.skills.platforms.linux.label", defaultMessage: "Linux"}),
            createImg(imgLinux),
            "https://linux.org",
            [jobs.companies.freelancer, jobs.companies.mgm, jobs.companies.eliasItSolutions],
            [jobs.projects.estateVoke, jobs.projects.odfarmara],
            80,
            defineMessage({
                id: "db.skills.platforms.linux.description",
                defaultMessage: "heaven (cloud)",
            })
        ),
        raspberry: new Platform(
            "raspberry",
            defineMessage({id: "db.skills.platforms.raspberry.label", defaultMessage: "Raspberry"}),
            createImg(imgRaspberry),
            "https://raspberrypi.org",
            [jobs.companies.freelancer],
            [],
            80,
            defineMessage({
                id: "db.skills.platforms.raspberry.description",
                defaultMessage: "smaller heaven",
            })
        ),
    },
    utilities: {
        aws: new Utility(
            "aws",
            defineMessage({id: "db.skills.utilities.aws.label", defaultMessage: "aws"}),
            createImg(imgAws),
            "https://aws.amazon.com",
            [jobs.companies.eliasItSolutions, jobs.companies.freelancer],
            [jobs.projects.patria],
            10,
            defineMessage({
                id: "db.skills.utilities.aws.description",
                defaultMessage: "universal heaven",
            })
        ),
        git: new Utility(
            "git",
            defineMessage({id: "db.skills.utilities.git.label", defaultMessage: "git"}),
            createImg(imgGit),
            "https://git-scm.com",
            [..._.values(jobs.companies), ..._.values(jobs.schools)],
            _.values(jobs.projects),
            90,
            defineMessage({
                id: "db.skills.utilities.git.description",
                defaultMessage: "conflict!",
            })
        ),
        gitlab: new Utility(
            "gitlab",
            defineMessage({id: "db.skills.utilities.gitlab.label", defaultMessage: "GitLab-CI"}),
            createImg(imgGitlab),
            "https://gitlab.com",
            [
                ..._.values(jobs.schools),
                jobs.companies.freelancer,
                jobs.companies.eliasItSolutions,
                jobs.companies.mgm,
                jobs.companies.pokec,
                jobs.companies.digitoo,
            ],
            [jobs.projects.estateVoke, jobs.projects.digitoo],
            90,
            defineMessage({
                id: "db.skills.utilities.gitlab.description",
                defaultMessage: "best CI",
            })
        ),
        bitbucket: new Utility(
            "bitbucket",
            defineMessage({id: "db.skills.utilities.bitbucket.label", defaultMessage: "BitBucket CI"}),
            createImg(imgBitbucket),
            "https://bitbucket.com",
            [jobs.companies.eliasItSolutions, jobs.companies.sprinx],
            [jobs.projects.benefitPlus],
            60,
            defineMessage({
                id: "db.skills.utilities.bitbucket.description",
                defaultMessage: "alt CI",
            })
        ),
        jenkins: new Utility(
            "jenkins",
            defineMessage({id: "db.skills.utilities.jenkins.label", defaultMessage: "Jenkins"}),
            createImg(imgJenkins),
            "https://jenkins.io",
            [jobs.companies.eliasItSolutions],
            [jobs.projects.emu],
            20,
            defineMessage({
                id: "db.skills.utilities.jenkins.description",
                defaultMessage: "custom CI",
            })
        ),
        travisCi: new Utility(
            "travisCi",
            defineMessage({id: "db.skills.utilities.travisCi.label", defaultMessage: "Travis CI"}),
            createImg(imgTravisCi),
            "https://travis-ci.org",
            [jobs.companies.freelancer],
            [jobs.projects.cucumberGenerator, jobs.projects.mailtrapClient],
            24,
            defineMessage({
                id: "db.skills.utilities.travisCi.description",
                defaultMessage: "Travis CI",
            })
        ),
        webpack: new Utility(
            "webpack",
            defineMessage({id: "db.skills.utilities.webpack.label", defaultMessage: "Webpack"}),
            createImg(imgWebpack),
            "https://webpack.js.org",
            [jobs.companies.freelancer, jobs.companies.eliasItSolutions, jobs.companies.sprinx],
            [jobs.projects.emu, jobs.projects.benefitPlus],
            32,
            defineMessage({
                id: "db.skills.utilities.webpack.description",
                defaultMessage: "all together",
            })
        ),
        cucumber: new Utility(
            "cucumber",
            defineMessage({id: "db.skills.utilities.cucumber.label", defaultMessage: "Cucumber"}),
            createImg(imgCucumber),
            "https://cucumber.io",
            [jobs.companies.freelancer, jobs.companies.eliasItSolutions],
            [],
            46,
            defineMessage({
                id: "db.skills.utilities.cucumber.description",
                defaultMessage: "dummy testing",
            })
        ),
        ann: new Utility(
            "ann",
            defineMessage({id: "db.skills.utilities.ann.label", defaultMessage: "ANN"}),
            createImg(imgANN),
            "https://en.wikipedia.org/wiki/Artificial_neural_network",
            [jobs.schools.friIng],
            [],
            10,
            defineMessage({
                id: "db.skills.utilities.ann.description",
                defaultMessage: "machine learning",
            })
        ),
        docker: new Utility(
            "docker",
            defineMessage({id: "db.skills.utilities.docker.label", defaultMessage: "Docker"}),
            createImg(imgDocker),
            "https://www.docker.com",
            [
                jobs.schools.friIng,
                jobs.companies.freelancer,
                jobs.companies.sprinx,
                jobs.companies.digitoo,
                jobs.companies.brainsoft,
                jobs.companies.twigsee,
            ],
            [jobs.projects.digitoo, jobs.projects.benefitPlus, jobs.projects.patria, jobs.projects.twigsee],
            68,
            defineMessage({
                id: "db.skills.utilities.docker.description",
                defaultMessage: "isolation",
            })
        ),
        dockerCompose: new Utility(
            "dockerCompose",
            defineMessage({id: "db.skills.utilities.dockerCompose.label", defaultMessage: "D. compose"}),
            createImg(imgDockerCompose),
            "https://docs.docker.com/compose/",
            [jobs.schools.friIng, jobs.companies.freelancer, jobs.companies.sprinx, jobs.projects.digitoo],
            [jobs.projects.digitoo, jobs.projects.benefitPlus],
            78,
            defineMessage({
                id: "db.skills.utilities.dockerCompose.description",
                defaultMessage: "composer",
            })
        ),
    },
};
