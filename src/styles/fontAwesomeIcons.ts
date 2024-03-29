import { config, library } from '@fortawesome/fontawesome-svg-core';
import {
    faAndroid,
    faFirefoxBrowser,
    faGithub,
    faGooglePlay,
    faHtml5,
    faJava,
    faLinkedin,
    faMicrosoft,
    faStackOverflow,
    faTwitter,
    faXing
} from '@fortawesome/free-brands-svg-icons';
import { faArrowLeft, faCircle, faEye, faFilePdf, faGlobe, faVideo, faDesktop, faTable, faCode, faListAlt, faCloud, faBuilding, faCalendar, faMapMarker, faExternalLinkAlt, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false;
library.add(
    faCircle, faEye, faFilePdf, faVideo, faArrowLeft,
    faGithub, faStackOverflow, faTwitter, faLinkedin, faXing, faGooglePlay, faJava, faAndroid, faMicrosoft, faHtml5,
    faFirefoxBrowser, faGlobe, faDesktop, faTable, faCode, faListAlt, faCloud, faBuilding, faCalendar, faMapMarker, faExternalLinkAlt,
    faBriefcase
);