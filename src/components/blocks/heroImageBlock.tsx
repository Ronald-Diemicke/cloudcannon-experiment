import {getImage,inferRemoteSize} from "astro:assets";
import fs from "node:fs/promises";
import type {PageBlocksSectionHeroImageBlock} from "../../../tina/__generated__/types.ts";

interface Props {
    tinaProps: PageBlocksSectionHeroImageBlock;
}

const img = async ({tinaProps}: Props) => {
    const image = await inferRemoteSize("http://localhost:8080" + tinaProps.heroImage)
    return image;
}
export default function heroImageBlock({tinaProps}: Props) {


    let image = <img className="gb-universal-image"
                           src={tinaProps.heroImage}
                           width={img({tinaProps}).width}
                           alt={tinaProps.heroImageAlt}/>;
    return (
        <>
            <section>
                {image}
            </section>
        </>
    );
};