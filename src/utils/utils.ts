import { TImageSize } from "../components/Image/Image";
import { TArtistImage } from "../service/models/artists-model";

export function getArtistImage(images: TArtistImage[], size: TImageSize) {
    return images.find(item => item.size === size)?.["#text"];
}