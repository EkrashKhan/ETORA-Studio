import { ProjectItem } from '../types';

/**
 * REUSABLE ETORA STUDIO PROJECT DATA STORE
 *
 * Real studio projects can be added one by one using this exact structure.
 *
 * Supported Fields:
 * - id: string (unique identifier)
 * - projectName: string (Display title, e.g. 'Magic City Tourism')
 * - industry: string (e.g. 'Tourism')
 * - location?: string (e.g. 'Dubai, UAE')
 * - whatWeBuilt?: string (e.g. 'Travel Agency Website')
 * - description?: string (Short 1-2 line summary for the card)
 * - technologies?: string[] (e.g. ['WordPress', 'Elementor', 'HTML', 'CSS', 'JavaScript'])
 * - liveUrl?: string (Live website URL)
 * - heroImage?: string (URL to Desktop homepage screenshot; leave empty for [PROJECT SCREENSHOT PLACEHOLDER])
 * - secondaryImages?: { mobileScreenshot?: string; additionalScreenshot?: string }
 * - clientLogo?: string (URL to Client Logo; leave empty for [CLIENT LOGO PLACEHOLDER])
 * - overview?: string (Project overview)
 * - problemSolved?: string (Problem solved details)
 * - featured?: boolean
 */
export const PROJECTS: ProjectItem[] = [
  {
    id: 'magic-city-tourism',
    projectName: 'Magic City Tourism',
    industry: 'Tourism',
    location: 'Dubai, UAE',
    whatWeBuilt: 'Travel Agency Website',
    category: 'Tourism',
    description: 'A modern travel agency website designed to showcase tourism services, improve the customer experience and make booking-related information easier to access.',
    technologies: ['WordPress', 'Elementor', 'HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://magiccitytourism.com',
    projectUrl: 'https://magiccitytourism.com',
    heroImage: 'https://i.postimg.cc/9QhKSX6K/Magic-1.png',
    image: 'https://i.postimg.cc/9QhKSX6K/Magic-1.png',
    secondaryImages: {
      mobileScreenshot: 'https://i.postimg.cc/h4T51hsY/Magic-Mobile.jpg',
      additionalScreenshot: '', // [MAGIC CITY TOURISM ADDITIONAL SCREENSHOT]
    },
    clientLogo: 'https://i.postimg.cc/ryZ1dhyp/cropped-Logo-2.png',
    featured: true,
    overview: 'A modern travel agency website designed to improve the business\'s online presence and make travel and booking information easier for customers to explore.',
    problemSolved: 'The website was designed to improve the travel agency\'s online presence and make it easier for customers to explore tourism services, travel offerings and booking-related information. It also provides the business with a clearer digital platform for presenting its travel services and handling customer enquiries related to tours and travel.',
    caseStudy: {
      overview: 'A modern travel agency website designed to improve the business\'s online presence and make travel and booking information easier for customers to explore.',
      whatWeBuilt: 'Travel Agency Website',
      solution: 'The website was designed to improve the travel agency\'s online presence and make it easier for customers to explore tourism services, travel offerings and booking-related information. It also provides the business with a clearer digital platform for presenting its travel services and handling customer enquiries related to tours and travel.',
      problemSolved: 'The website was designed to improve the travel agency\'s online presence and make it easier for customers to explore tourism services, travel offerings and booking-related information. It also provides the business with a clearer digital platform for presenting its travel services and handling customer enquiries related to tours and travel.',
    },
    mockupType: 'browser',
  },
  {
    id: 'nassim-al-bahr-restaurant',
    projectName: 'Nassim Al Bahr Restaurant',
    industry: 'Food & Restaurant',
    location: 'Dubai, UAE',
    whatWeBuilt: 'Restaurant Website',
    category: 'Food & Restaurant',
    description: 'A modern restaurant website designed to showcase the menu, dishes and visual identity while making essential restaurant information easy for customers to explore.',
    technologies: ['WordPress', 'Elementor', 'HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://nassimalbharrestaurant.com/',
    projectUrl: 'https://nassimalbharrestaurant.com/',
    heroImage: 'https://i.postimg.cc/brbnKs3p/NAB-1.png',
    image: 'https://i.postimg.cc/brbnKs3p/NAB-1.png',
    secondaryImages: {
      mobileScreenshot: 'https://i.postimg.cc/c1QrGy0b/NAB-m-OBILE.jpg',
      additionalScreenshot: '', // [NASSIM AL BAHR ADDITIONAL SCREENSHOT]
    },
    clientLogo: 'https://i.postimg.cc/cCDhLKwp/NAB.png',
    featured: true,
    overview: 'A modern restaurant website created to present the restaurant\'s menu, dishes and visual experience in a clear and engaging way. The website helps customers explore the food offering and access important restaurant information through a stronger digital presence.',
    problemSolved: 'The website was created to give the restaurant a strong digital presence and provide customers with an easy way to explore the restaurant\'s full menu, dishes, cuisines and visual presentation. It showcases food and dish imagery and presents important restaurant information in a clear, attractive and customer-friendly format.',
    caseStudy: {
      overview: 'A modern restaurant website created to present the restaurant\'s menu, dishes and visual experience in a clear and engaging way. The website helps customers explore the food offering and access important restaurant information through a stronger digital presence.',
      whatWeBuilt: 'Restaurant Website',
      solution: 'The website was created to give the restaurant a strong digital presence and provide customers with an easy way to explore the restaurant\'s full menu, dishes, cuisines and visual presentation. It showcases food and dish imagery and presents important restaurant information in a clear, attractive and customer-friendly format.',
      problemSolved: 'The website was created to give the restaurant a strong digital presence and provide customers with an easy way to explore the restaurant\'s full menu, dishes, cuisines and visual presentation. It showcases food and dish imagery and presents important restaurant information in a clear, attractive and customer-friendly format.',
    },
    mockupType: 'browser',
  },
  {
    id: 'edglo-advisors',
    projectName: 'Edglo Advisors',
    industry: 'Student Consultancy',
    location: 'Pakistan',
    whatWeBuilt: 'Study Abroad & Student Consultancy Website',
    category: 'Student Consultancy',
    description: 'A study-abroad consultancy website designed to help students explore study destinations, understand admission steps and discover the consultancy support available to them.',
    technologies: ['WordPress', 'Elementor', 'HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://edgloadvisors.com/',
    projectUrl: 'https://edgloadvisors.com/',
    heroImage: 'https://i.postimg.cc/Yq9pdhqW/Edglo-1.png',
    image: 'https://i.postimg.cc/Yq9pdhqW/Edglo-1.png',
    secondaryImages: {
      mobileScreenshot: 'https://i.postimg.cc/d1xWvHrw/Edglo.jpg',
      additionalScreenshot: '', // [EDGLO ADVISORS ADDITIONAL SCREENSHOT]
    },
    clientLogo: 'https://i.postimg.cc/ZnNLmTJc/Logo-2.jpg',
    featured: true,
    overview: 'A digital platform for students who want to study abroad. The website brings together information about study destinations, admission steps and consultancy support, helping students understand their options and learn how Edglo Advisors can assist them throughout the process.',
    problemSolved: 'The website was created as a digital platform for students who want to study abroad. It provides students with information about different study destinations, admission processes, consultancy support and the ways Edglo Advisors helps students throughout their study-abroad journey. The website brings the consultancy\'s services and important student information together in one clear and accessible online platform.',
    caseStudy: {
      overview: 'A digital platform for students who want to study abroad. The website brings together information about study destinations, admission steps and consultancy support, helping students understand their options and learn how Edglo Advisors can assist them throughout the process.',
      whatWeBuilt: 'Study Abroad & Student Consultancy Website',
      solution: 'The website was created as a digital platform for students who want to study abroad. It provides students with information about different study destinations, admission processes, consultancy support and the ways Edglo Advisors helps students throughout their study-abroad journey. The website brings the consultancy\'s services and important student information together in one clear and accessible online platform.',
      problemSolved: 'The website was created as a digital platform for students who want to study abroad. It provides students with information about different study destinations, admission processes, consultancy support and the ways Edglo Advisors helps students throughout their study-abroad journey. The website brings the consultancy\'s services and important student information together in one clear and accessible online platform.',
    },
    mockupType: 'browser',
  },
];

