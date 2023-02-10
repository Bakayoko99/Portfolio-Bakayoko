import project1 from "../chatbox-image.png";

import image1 from "./image-1.png";
import image2 from "./image-2.png";
import image3 from "./image-3.png";
import image4 from "./image-4.png";
import image5 from "./image-5.png";
import image6 from "./image-6.png";

const site_images = () => {
    return ([
        {
            label: 'Project 1',
            imgPath: project1,
        },
        {
            label: 'Accueil',
            imgPath: image1,
        },
        {
            label: 'Connection',
            imgPath: image2,
        },
        {
            label: 'Inscription',
            imgPath: image3,
        },
        {
            label: 'Menu',
            imgPath: image4,
        },
        {
            label: 'Creer un nouveau groupe de conversation',
            imgPath: image5,
        },
        {
            label: 'Chat',
            imgPath: image6,
        },
    

    ])

}



export default site_images;