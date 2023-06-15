import bug from "../assets/img/types/bug.png";
import dark from "../assets/img/types/dark.png";
import dragon from "../assets/img/types/dragon.png";
import electric from "../assets/img/types/electric.png";
import fairy from "../assets/img/types/fairy.png";
import fighting from "../assets/img/types/fighting.png";
import fire from "../assets/img/types/fire.png";
import flying from "../assets/img/types/flying.png";
import ghost from "../assets/img/types/ghost.png";
import grass from "../assets/img/types/grass.png";
import ground from "../assets/img/types/ground.png";
import ice from "../assets/img/types/ice.png";
import normal from "../assets/img/types/normal.png";
import poison from "../assets/img/types/poison.png";
import psychic from "../assets/img/types/psychic.png";
import rock from "../assets/img/types/rock.png";
import steel from "../assets/img/types/steel.png";
import water from "../assets/img/types/water.png";

export const pokemonTypeCards = (type) => {
    switch (type) {
        case "bug":
            return bug;
        case "dark":
            return dark;
        case "dragon":
            return dragon;
        case "electric":
            return electric;
        case "fairy":
            return fairy;
        case "fighting":
            return fighting;
        case "fire":
            return fire;
        case "flying":
            return flying;
        case "ghost":
            return ghost;
        case "grass":
            return grass;
        case "ground":
            return ground;
        case "ice":
            return ice;
        case "normal":
            return normal;
        case "poison":
            return poison;
        case "psychic":
            return psychic;
        case "rock":
            return rock;
        case "steel":
            return steel;
        case "water":
            return water;
        default:
            return water;
    }
}
