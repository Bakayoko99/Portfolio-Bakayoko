import project2 from "../TaxCommun-image.png";

import image1 from "./image-1.png";
import image2 from "./image-2.png";
import image3 from "./image-3.png";
import image4 from "./image-4.png";
import image5 from "./image-5.png";
import image6 from "./image-6.png";
import image7 from "./image-7.png";
import image8 from "./image-8.png";
import image10 from "./image-10.png";
import image11 from "./image-11.png";

const site_images = () => {
    return ([
        {
            label: 'Project 2',
            imgPath: project2,
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
            label: 'Inscription',
            imgPath: image3,
        },
        {
            label: 'connection user',
            imgPath: image4,
        },
        {
            label: 'conection admin ou agent',
            imgPath: image5,
        },
        {
            label: 'espace personnelle admin',
            imgPath: image6,
        },
        {
            label: 'admin: ajouter admin ou agent',
            imgPath: image7,
        },
        {
            label: 'espace personnelle agent',
            imgPath: image8,
        },
        {
            label: 'espace personelle user',
            imgPath: image10,
        },
        {
            label: 'user: modification informations',
            imgPath: image11,
        },

    ])

}



export default site_images;