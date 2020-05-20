import { PAGE_LOADED, PAGE_LOADING } from './types';
import { faFacebookF, faLinkedinIn, faGithub, faCss3, faWordpressSimple, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { SteelcomBG, MladezHC, DkbbBG, PortfolioImage } from '../assets/Images';
import { faHeadset } from '@fortawesome/free-solid-svg-icons';
import { Profile } from '../assets/Images';

export const loadPageWithLanguage = (lang) => async dispatch => {
    dispatch({ type: PAGE_LOADING });

    const body = [{
        lang: 'en',
        nav: {
            logo: 'Dominik Míček',
            menu: [{
                name: 'About',
                url: '#about',
            }, {
                name: 'Portfolio',
                url: '#portfolio',
            }, {
                name: 'Contact',
                url: '#contact',
            }],
            social: [{
                url: '#facebook',
                icon: faFacebookF
            }, {
                url: '#linkedin',
                icon: faLinkedinIn
            }, {
                url: '#github',
                icon: faGithub
            }]
        },
        header: {},
        sections: [{
            name: 'About me',
            description: "My name is Dominik and I'm junior fullstack developer from Ostrava, Czech republic. I specialize in building web applications. I have done work in web development, front-end/back-end web, social marketing and IT specialist.",
            knowledge: [{
                icon: faCss3,
                name: 'HTML/CSS/',
                description: 'Coding clean HTML5 and CSS3 webpages or parts of it.'
            }, {
                icon: faWordpressSimple,
                name: 'Wordpress',
                description: 'Wordpress templates, pages, plugins.'
            }, {
                icon: faNodeJs,
                name: 'REST API',
                description: 'Create REST API with node.js with autentications and more..'
            }, {
                icon: faReact,
                name: 'React.js',
                description: 'Create React + Redux applications (Beginner), with connection to REST API custom or existing.'
            }, {
                icon: faHeadset,
                name: 'Support',
                description: 'Ajdustmensts for current sites and more...'
            }]
        }, {
            name: 'Portfolio',
            description: '',
            projects: [{
                name: 'Steelcom',
                description: 'Set up WP industry tepmlate (including HTML/CSS changes), added content, UI design',
                url: 'https://www.steelcom.cz',
                github: '',
                bg: SteelcomBG
            }, {
                name: 'Mladez HC Vítkovice',
                description: 'Created new WP template according to the graphic design(delivered by graphic in Adobe xD), created custom pages, posts and taxonomies + connected them together (ACF). Made user access and permissions more then (10 users).',
                url: 'https://mladez.hc-vitkovice.cz',
                github: '',
                bg: MladezHC
            }, {
                name: 'DKBB',
                description: 'Created new WP template according to the graphic design(delivered by graphic in PDF!), added multilanguage content',
                url: 'https://www.dkbb.cz',
                github: '',
                bg: DkbbBG
            }, {
                name: 'This page',
                description: 'Created React.js frontend web app, in backend "Invoicer"(Still in development) + small CMS for frontend in Node.js',
                url: '#',
                github: 'https://www.github.com/Ballonek',
                bg: PortfolioImage
            }]
        }, {
            name: 'Contact',
            avatar: Profile,
            person: {
                name: 'Dominik Míček',
                phone: '+420 725 715 492',
                email: 'dominik@micek.cz',
                ico: '09113606'
                    
            },
            address: {
                street: 'Zákrejsova 1067/6',
                city: 'Ostrava-Přívoz',
                postcode: '702 00',
                state: 'Czech republic'
            }

        }],
        footer: {}
    }, {
        lang: 'cz',
        nav: {
            logo: 'Dominik Míček',
            menu: [{
                name: 'About',
                url: '#about',
            }, {
                name: 'Portfolio',
                url: '#portfolio',
            }, {
                name: 'Kontact',
                url: '#contact',
            }],
            social: [{
                url: '#facebook',
                icon: faFacebookF
            }, {
                url: '#linkedin',
                icon: faLinkedinIn
            }, {
                url: '#github',
                icon: faGithub
            }]
        },
        header: {},
        sections: [{
            name: 'About me',
            description: "My name is Dominik and I'm junior fullstack developer from Ostrava, Czech republic. I specialize in building web applications. I have done work in web development, front-end/back-end web, social marketing and IT specialist.",
            knowledge: [{
                icon: faCss3,
                name: 'HTML/CSS/',
                description: 'Coding clean HTML5 and CSS3 webpages or parts of it.'
            }, {
                icon: faWordpressSimple,
                name: 'Wordpress',
                description: 'Wordpress templates, pages, plugins.'
            }, {
                icon: faNodeJs,
                name: 'REST API',
                description: 'Create REST API with node.js with autentications and more..'
            }, {
                icon: faReact,
                name: 'React.js',
                description: 'Create React + Redux applications (Beginner), with connection to REST API custom or existing.'
            }, {
                icon: faHeadset,
                name: 'Support',
                description: 'Ajdustmensts for current sites and more...'
            }]
        }, {
            name: 'Portfolio',
            description: '',
            projects: [{
                name: 'Steelcom',
                description: 'Set up WP industry tepmlate (including HTML/CSS changes), added content, UI design',
                url: 'https://www.steelcom.cz',
                github: '',
                bg: SteelcomBG
            }, {
                name: 'Mladez HC Vítkovice',
                description: 'Created new WP template according to the graphic design(delivered by graphic in Adobe xD), created custom pages, posts and taxonomies + connected them together (ACF). Made user access and permissions more then (10 users).',
                url: 'https://mladez.hc-vitkovice.cz',
                github: '',
                bg: MladezHC
            }, {
                name: 'DKBB',
                description: 'Created new WP template according to the graphic design(delivered by graphic in PDF!), added multilanguage content',
                url: 'https://www.dkbb.cz',
                github: '',
                bg: DkbbBG
            }, {
                name: 'This page',
                description: 'Created React.js frontend web app, in backend "Invoicer"(Still in development) + small CMS for frontend in Node.js',
                url: '#',
                github: 'https://www.github.com/Ballonek',
                bg: PortfolioImage
            }]
        }, {
            name: 'Contact',
            avatar: Profile,
            person: {
                name: 'Dominik Míček',
                phone: '+420 725 715 492',
                email: 'dominik@micek.cz',
                ico: '09113606'
                    
            },
            address: {
                street: 'Zákrejsova 1067/6',
                city: 'Ostrava-Přívoz',
                postcode: '702 00',
                state: 'Czech republic'
            }

        }],
        footer: {}
    }]

    try {
        const langs = await body.map(item => item.lang);
    
        const pageOfLanguage = await body.find(item => item.lang === lang)
        
        dispatch({
            type: PAGE_LOADED,
            payload: pageOfLanguage
        })
    
        return langs;
    
    } catch (error) {
    
    }


}