import { Blub, Gas, Internet, Bundle } from "./Icons"
export const HEADER_TITLE = [{ title: "About", link: "about" }, { title: "How It Works", link: "work" }, { title: "Services", link: "services" }, { title: "Testimonials", link: "testimonials" }, { title: "Why Us", link: "whyus" }, { title: "FAQ", link: "faq" },]
export const LOGO_LIST = [{ src: "/assets/images/webp/first-energy.webp", alt: "first-image" },
    { src: "/assets/images/webp/blue-nrg.webp", alt: "blue" },
    { src: "/assets/images/webp/dodo.webp", alt: "dodo" },
    { src: "/assets/images/webp/origin.webp", alt: "origin" },
    { src: "/assets/images/webp/ovo-logo.webp", alt: "logo" },
    { src: "/assets/images/webp/sumo.webp", alt: "sumo" },
    { src: "/assets/images/webp/agl-logo.webp", alt: "sumo" },
]
export const BENIFITS_LIST = [
    "Save money by finding cheaper deals.",
    "Get better customer service.",
    "Explore greener, more sustainable energy options.",
]
export const SWITCH_LIST = [
    { src: "/assets/images/webp/location-card.webp", alt: "location", cardText:"1.Enter Your Location and Preferences", },
    { src: "/assets/images/webp/providers-card.webp", alt: "providers", cardText: "2. Compare Providers", },
    { src: "/assets/images/webp/switch-easily.webp", alt: "switch", cardText: "3. Switch Easily", },
    { src: "/assets/images/webp/planning-card.webp", alt: "planning", cardText: "4. Choose the Best Plan", },
]
export const COMPREHENSIVE_DETAILS = [
    {
        question: 'Electricity Plan Comparisons',
        comparisonsSvg: <Blub />,
        answer: "Whether you want renewable energy, low rates, or flexible contracts, we'll help you find the best provider..",
    },
    {
        question: 'Gas Plan Comparisons',
        comparisonsSvg: <Gas />,
        answer: "Whether you want renewable energy, low rates, or flexible contracts, we'll help you find the best provider.",
    },
    {
        question: 'Internet Plan Comparisons',
        comparisonsSvg: <Internet />,
    //
        answer: "Whether you want renewable energy, low rates, or flexible contracts, we'll help you find the best provider.",
    },
    {
        question: 'Bundle Packages',
        comparisonsSvg: <Bundle />,
        answer: "Whether you want renewable energy, low rates, or flexible contracts, we'll help you find the best provider.",
    },
]