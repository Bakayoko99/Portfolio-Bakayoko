import project3 from "../dys-help-image.png";

import image1 from "./image-1.png";
import image2 from "./image-2.png";
import image3 from "./image-3.png";
import image4 from "./image-4.png";
import image5 from "./image-5.png";
import image6 from "./image-6.png";

const site_images = () => {
    return ([
        {
            label: 'Project 3',
            imgPath: project3,
        },
        {
            label: 'Accueil 1',
            imgPath: image1,
        },
        {
            label: 'Accueil 2',
            imgPath: image2,
        },
        {
            label: 'Outils "dys" 1',
            imgPath: image3,
        },
        {
            label: 'Outils "dys" 2',
            imgPath: image4,
        },
        {
            label: 'Transcription',
            imgPath: image5,
        },
        {
            label: 'Contacts',
            imgPath: image6,
        },
    ])

}



export default site_images;