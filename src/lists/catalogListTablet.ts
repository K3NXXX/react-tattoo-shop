import img1 from "../../src/assets/img/Catalog/catalogTablet1.png"
import img2 from "../../src/assets/img/Catalog/catalogTablet2.png"
import img3 from "../../src/assets/img/Catalog/catalogTablet3.png"
import img4 from "../../src/assets/img/Catalog/catalogTablet4.png"
import img5 from "../../src/assets/img/Catalog/catalogTablet5.png"
import { catalogListType } from "./catalogList"


export const catalogListTablet : catalogListType[] = [
    {
        id: 1,
        image: img1,
        description: " Тату набори",
        url: "тату-набори",
        filterName: "tattooSets",
    },
    {
        id: 2,
        image: img2,
        description: " Тримачі",
        url: "тримачі",
        filterName: "holders",
    },
    {
        id: 3,
        image: img3,
        description: " Тату машинки",
        url: "тату-машинки",
        filterName: "tattooMachines",
    },
    {
        id: 4,
        image: img4,
        description: " Педалі та провода",
        url: "педалі-та-провода",
        filterName: "pedals",
    },
    {
        id: 5,
        image: img5,
        description: " Фарби",
        url: "фарби",
        filterName: "paints",
    },
]