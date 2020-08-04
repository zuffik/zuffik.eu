import * as _ from "lodash";

import {Framework} from "../../types/skills/Framework";
import {Language} from "../../types/skills/Language";
import {Platform} from "../../types/skills/Platform";
import {Utility} from "../../types/skills/Utility";
import {jobs} from "./Jobs";
import {createImg} from "../../components/elements/Img";
import {L} from "../i18n/Locale";

import imgAngular from "../../static/skills/frameworks/angular.svg";
import imgDotnetCore from "../../static/skills/frameworks/dotnet-core.svg";
import imgIonic from "../../static/skills/frameworks/ionic.svg";
import imgLaravel from "../../static/skills/frameworks/laravel.svg";
import imgGraphql from "../../static/skills/frameworks/graphql.svg";
import imgNestjs from "../../static/skills/frameworks/nestjs.svg";
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
//import imgPwa from "../../static/skills/utilities/pwa.svg";

export const skills = {
    frameworks: {
        angular: new Framework(
            "angular",
            "Angular",
            createImg(imgAngular),
            "https://angular.io/",
            [jobs.companies.freelancer],
            [jobs.projects.odfarmara],
            20,
            L.get("basics")
        ),
        dotnetCore: new Framework(
            "dotnetCore",
            "Dotnet Core",
            createImg(imgDotnetCore),
            "https://dotnet.microsoft.com/download",
            [jobs.schools.friBc, jobs.schools.friIng],
            [],
            20,
            L.get("Microsoft pfff...")
        ),
        ionic: new Framework(
            "ionic",
            "Ionic",
            createImg(imgIonic),
            "https://ionicframework.com/",
            [jobs.companies.freelancer],
            [jobs.projects.odfarmara],
            20,
            L.get("mobile angular")
        ),
        laravel: new Framework(
            "laravel",
            "Laravel",
            createImg(imgLaravel),
            "https://laravel.com",
            [jobs.companies.eliasItSolutions],
            [],
            60,
            L.get("best for PHP")
        ),
        graphql: new Framework(
            "graphql",
            "GraphQL",
            createImg(imgGraphql),
            "https://graphql.org",
            [jobs.companies.eliasItSolutions, jobs.schools.friBc, jobs.schools.friIng],
            [],
            60,
            L.get("I ♥ it")
        ),
        nestjs: new Framework(
            "nestjs",
            "nest.js",
            createImg(imgNestjs),
            "https://nestjs.com",
            [jobs.companies.freelancer],
            [],
            40,
            L.get("I ♥ it")
        ),
        nodejs: new Framework(
            "nodejs",
            "Node.js",
            createImg(imgNodejs),
            "https://nodejs.org",
            [jobs.companies.eliasItSolutions, jobs.companies.sprinx],
            [
                jobs.projects.benefitPlus,
                jobs.projects.emu,
                jobs.projects.mailtrapClient,
                jobs.projects.cucumberGenerator,
            ],
            80,
            L.get("multifunctional")
        ),
        react: new Framework(
            "react",
            "React",
            createImg(imgReact),
            "https://react.com",
            [jobs.companies.eliasItSolutions, jobs.companies.sprinx],
            [jobs.projects.benefitPlus, jobs.projects.emu, jobs.projects.fitradio],
            90,
            L.get("I ♥ it")
        ),
        reactNative: new Framework(
            "reactNative",
            "React Native",
            createImg(imgReact),
            "https://facebook.github.io/react-native/",
            [jobs.companies.eliasItSolutions, jobs.companies.sprinx],
            [jobs.projects.benefitPlus, jobs.projects.fitradio],
            85,
            L.get("react for mobiles")
        ),
        typescript: new Framework(
            "typescript",
            "TypeScript",
            createImg(imgTypescript),
            "https://typescriptlang.org",
            [jobs.companies.eliasItSolutions, jobs.companies.sprinx],
            [
                jobs.projects.benefitPlus,
                jobs.projects.emu,
                jobs.projects.fitradio,
                jobs.projects.cucumberGenerator,
                jobs.projects.mailtrapClient,
            ],
            99,
            L.get("prevent bugs")
        ),
        javascript: new Language(
            "javascript",
            "JavaScript",
            createImg(imgJavascript),
            "https://javascript.com",
            [..._.values(jobs.companies), ..._.values(jobs.schools)],
            _.values(jobs.projects),
            99,
            L.get("perfect")
        ),
        vuejs: new Framework(
            "vuejs",
            "Vue.js",
            createImg(imgVuejs),
            "https://vuejs.org",
            [jobs.companies.eliasItSolutions],
            [],
            20,
            L.get("interesting...")
        ),
        cypress: new Framework(
            "cypress",
            "Cypress",
            createImg(imgCypress),
            "https://cypress.io",
            [],
            [],
            48,
            L.get("better selenium")
        ),
        selenium: new Framework(
            "selenium",
            "Selenium",
            createImg(imgSelenium),
            "https://selenium.dev",
            [],
            [],
            5,
            L.get("necessary")
        ),
        bootstrap: new Framework(
            "bootstrap",
            "Bootstrap",
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
            L.get("design")
        ),
        jest: new Framework(
            "jest",
            "Jest",
            createImg(imgJest),
            "https://jestjs.io",
            [jobs.companies.eliasItSolutions, jobs.companies.freelancer, jobs.companies.sprinx],
            [jobs.projects.benefitPlus, jobs.projects.emu],
            83,
            L.get("testing")
        ),
        materialUi: new Framework(
            "materialUi",
            "Material UI",
            createImg(imgMaterialUi),
            "http://material-ui.com",
            [jobs.companies.eliasItSolutions, jobs.companies.freelancer, jobs.companies.sprinx],
            [jobs.projects.benefitPlus],
            76,
            L.get("great FE")
        ),
        unity: new Framework(
            "unity",
            "Unity",
            createImg(imgUnity),
            "https://unity.com",
            [jobs.schools.friBc, jobs.schools.friIng],
            [],
            36,
            L.get("games")
        ),
    },
    languages: {
        cpp: new Language(
            "cpp",
            "C++",
            createImg(imgCpp),
            "http://www.cplusplus.com/",
            [..._.values(jobs.schools)],
            [],
            10,
            L.get("excellent")
        ),
        csharp: new Language(
            "csharp",
            "C#",
            createImg(imgCsharp),
            "https://docs.microsoft.com/en-us/dotnet/csharp/",
            [..._.values(jobs.schools)],
            [],
            11,
            L.get("better C++")
        ),
        latex: new Language(
            "latex",
            "LaTeX",
            createImg(imgLatex),
            "http://latex.org",
            [jobs.schools.friIng],
            [],
            23,
            L.get("math docs")
        ),
        mongodb: new Language(
            "mongodb",
            "MongoDB",
            createImg(imgMongodb),
            "https://www.mongodb.com",
            [jobs.schools.friBc, jobs.schools.friIng],
            [],
            34,
            L.get("elegant DB")
        ),
        sql: new Language(
            "sql",
            "SQL",
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
            "(my)SQL"
        ),
        python: new Language(
            "python",
            "Python",
            createImg(imgPython),
            "https://www.python.org",
            [jobs.schools.friBc, jobs.schools.friIng],
            [],
            56,
            L.get("fast math")
        ),
        redis: new Language(
            "redis",
            "Redis",
            createImg(imgRedis),
            "https://redis.io",
            [..._.values(jobs.schools)],
            [],
            64,
            L.get("fast db")
        ),
        css: new Language(
            "css",
            "CSS",
            createImg(imgCss),
            "https://css-tricks.com/",
            [..._.values(jobs.companies), ..._.values(jobs.schools)],
            _.values(jobs.projects).filter(
                (p) => !["fitradio", "cucumberGenerator", "mailtrapClient"].includes(p.id)
            ),
            99,
            L.get("everyone knows")
        ),
        html: new Language(
            "html",
            "HTML",
            createImg(imgHtml),
            "https://www.w3schools.com/html/",
            [..._.values(jobs.companies), ..._.values(jobs.schools)],
            _.values(jobs.projects).filter(
                (p) => !["fitradio", "cucumberGenerator", "mailtrapClient"].includes(p.id)
            ),
            99,
            L.get("everyone knows")
        ),
        java: new Language(
            "java",
            "Java",
            createImg(imgJava),
            "https://java.com",
            [jobs.schools.friBc, jobs.schools.friIng],
            [],
            35,
            L.get("meh")
        ),
        php: new Language(
            "php",
            "PHP",
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
            L.get("was perfect")
        ),
        markdown: new Language(
            "markdown",
            "MarkDown",
            createImg(imgMarkdown),
            "https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet",
            [..._.values(jobs.schools), ..._.values(jobs.companies)],
            [..._.values(jobs.projects)],
            76,
            L.get("all docs")
        ),
    },
    platforms: {
        android: new Platform(
            "android",
            "Android",
            createImg(imgAndroid),
            "https://android.com",
            [jobs.companies.eliasItSolutions, jobs.companies.sprinx],
            [jobs.projects.benefitPlus, jobs.projects.fitradio],
            40,
            L.get("s-l-o-w")
        ),
        apple: new Platform(
            "apple",
            "Apple",
            createImg(imgApple),
            "https://apple.com",
            [jobs.companies.eliasItSolutions, jobs.companies.sprinx],
            [jobs.projects.benefitPlus, jobs.projects.fitradio],
            30,
            L.get("my precious")
        ),
        arduino: new Platform(
            "arduino",
            "Arduino",
            createImg(imgArduino),
            "https://arduino.cc",
            [jobs.companies.freelancer],
            [],
            30,
            L.get("can be anywhere")
        ),
        browser: new Platform(
            "browser",
            "Browser",
            createImg(imgBrowser),
            "https://www.browserstack.com/",
            [..._.values(jobs.companies), ..._.values(jobs.schools)],
            _.values(jobs.projects).filter((p) => !["fitradio", "cucumberGenerator"].includes(p.id)),
            99,
            L.get("bedrock")
        ),
        linux: new Platform(
            "linux",
            "Linux",
            createImg(imgLinux),
            "https://linux.org",
            [jobs.companies.freelancer, jobs.companies.mgm, jobs.companies.eliasItSolutions],
            [jobs.projects.estateVoke, jobs.projects.odfarmara],
            80,
            L.get("heaven (cloud)")
        ),
        raspberry: new Platform(
            "raspberry",
            "Raspberry",
            createImg(imgRaspberry),
            "https://raspberrypi.org",
            [jobs.companies.freelancer],
            [],
            80,
            L.get("smaller heaven")
        ),
    },
    utilities: {
        aws: new Utility(
            "aws",
            "aws",
            createImg(imgAws),
            "https://aws.amazon.com",
            [jobs.companies.eliasItSolutions, jobs.companies.freelancer],
            [],
            10,
            L.get("universal heaven")
        ),
        git: new Utility(
            "git",
            "git",
            createImg(imgGit),
            "https://git-scm.com",
            [..._.values(jobs.companies), ..._.values(jobs.schools)],
            _.values(jobs.projects),
            90,
            L.get("conflict!")
        ),
        gitlab: new Utility(
            "gitlab",
            "GitLab-CI",
            createImg(imgGitlab),
            "https://gitlab.com",
            [
                ..._.values(jobs.schools),
                jobs.companies.freelancer,
                jobs.companies.eliasItSolutions,
                jobs.companies.mgm,
                jobs.companies.pokec,
            ],
            [jobs.projects.estateVoke],
            90,
            L.get("best CI")
        ),
        bitbucket: new Utility(
            "bitbucket",
            "BitBucket CI",
            createImg(imgBitbucket),
            "https://bitbucket.com",
            [jobs.companies.eliasItSolutions, jobs.companies.sprinx],
            [jobs.projects.benefitPlus],
            60,
            L.get("alt CI")
        ),
        jenkins: new Utility(
            "jenkins",
            "Jenkins",
            createImg(imgJenkins),
            "https://jenkins.io",
            [jobs.companies.eliasItSolutions],
            [jobs.projects.emu],
            20,
            L.get("custom CI")
        ),
        /*pwa: new Utility(
            "pwa",
            "PWA",
            createImg(imgPwa),
            "https://web.dev/progressive-web-apps/",
            [jobs.companies.eliasItSolutions],
            [jobs.projects.benefitPlus],
            14,
            L.get("progress")
        ),*/
        travisCi: new Utility(
            "travisCi",
            "Travis CI",
            createImg(imgTravisCi),
            "https://travis-ci.org",
            [jobs.companies.freelancer],
            [jobs.projects.cucumberGenerator, jobs.projects.mailtrapClient],
            24,
            L.get("Github CI")
        ),
        webpack: new Utility(
            "webpack",
            "Webpack",
            createImg(imgWebpack),
            "https://webpack.js.org",
            [jobs.companies.freelancer, jobs.companies.eliasItSolutions, jobs.companies.sprinx],
            [jobs.projects.emu, jobs.projects.benefitPlus],
            32,
            L.get("all together")
        ),
        cucumber: new Utility(
            "cucumber",
            "Cucumber",
            createImg(imgCucumber),
            "https://cucumber.io",
            [jobs.companies.freelancer, jobs.companies.eliasItSolutions],
            [],
            46,
            L.get("dummy testing")
        ),
        ann: new Utility(
            "ann",
            "ANN",
            createImg(imgANN),
            "https://en.wikipedia.org/wiki/Artificial_neural_network",
            [jobs.schools.friIng],
            [],
            10,
            L.get("machine learning")
        ),
    },
};
