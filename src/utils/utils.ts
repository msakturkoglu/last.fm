import { TImageSize } from "../components/Image/Image";
import { TImage } from "../service/models/base-model";

export function getArtistImage(images: TImage[], size: TImageSize) {
    return images.find(item => item.size === size)?.["#text"];
}