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
import imgCpp from "../../static/skills/languages/cpp.svg";
import imgCss from "../../static/skills/languages/css.svg";
import imgHtml from "../../static/skills/languages/html.svg";
import imgJava from "../../static/skills/languages/java.svg";
import imgJavascript from "../../static/skills/languages/javascript.svg";
import imgPhp from "../../static/skills/languages/php.svg";
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
            [jobs.companies.eliasItSolutions],
            [jobs.projects.benefitPlus, jobs.projects.emu],
            80,
            L.get("multifunctional")
        ),
        react: new Framework(
            "react",
            "React",
            createImg(imgReact),
            "https://react.com",
            [jobs.companies.eliasItSolutions],
            [jobs.projects.benefitPlus, jobs.projects.emu],
            90,
            L.get("I ♥ it")
        ),
        reactNative: new Framework(
            "reactNative",
            "React Native",
            createImg(imgReact),
            "https://facebook.github.io/react-native/",
            [jobs.companies.eliasItSolutions],
            [jobs.projects.benefitPlus],
            85,
            L.get("react for mobiles")
        ),
        typescript: new Framework(
            "typescript",
            "TypeScript",
            createImg(imgTypescript),
            "https://typescriptlang.org",
            [jobs.companies.eliasItSolutions],
            [jobs.projects.benefitPlus, jobs.projects.emu],
            99,
            L.get("prevent bugs")
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
            5,
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
        css: new Language(
            "css",
            "CSS",
            createImg(imgCss),
            "https://css-tricks.com/",
            [..._.values(jobs.companies), ..._.values(jobs.schools)],
            _.values(jobs.projects),
            99,
            L.get("everyone knows")
        ),
        html: new Language(
            "html",
            "HTML",
            createImg(imgHtml),
            "https://www.w3schools.com/html/",
            [..._.values(jobs.companies), ..._.values(jobs.schools)],
            _.values(jobs.projects),
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
    },
    platforms: {
        android: new Platform(
            "android",
            "Android",
            createImg(imgAndroid),
            "https://android.com",
            [jobs.companies.eliasItSolutions],
            [jobs.projects.benefitPlus],
            40,
            L.get("s-l-o-w")
        ),
        apple: new Platform(
            "apple",
            "Apple",
            createImg(imgApple),
            "https://apple.com",
            [jobs.companies.eliasItSolutions],
            [jobs.projects.benefitPlus],
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
            _.values(jobs.projects),
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
            "gitlab",
            createImg(imgGitlab),
            "https://gitlab.com",
            [..._.values(jobs.companies), ..._.values(jobs.schools)],
            _.values(jobs.projects),
            90,
            L.get("best CI")
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
