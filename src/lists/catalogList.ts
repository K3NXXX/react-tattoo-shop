import img1 from "../../src/assets/img/Catalog/catalog1.png"
import img2 from "../../src/assets/img/Catalog/catalog2.png"
import img3 from "../../src/assets/img/Catalog/catalog3.png"
import img4 from "../../src/assets/img/Catalog/catalog4.png"
import img5 from "../../src/assets/img/Catalog/catalog5.png"
export type catalogListType = {
    id: number;
    image:string;
    description: string;
    url: string;
    filterName:string;
}
export const catalogList: catalogListType[] = [
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