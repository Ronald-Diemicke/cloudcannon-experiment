import { TinaMarkdown } from "tinacms/dist/rich-text";
import type {PageBlocksSectionHeroTextBlock} from "../../../tina/__generated__/types.ts";

interface Props {
    tinaProps: PageBlocksSectionHeroTextBlock;
}

export default function heroTextBlock({ tinaProps }: Props) {
    return (
        <>
            <section>
                <TinaMarkdown content={tinaProps.heroText}/>
            </section>
        </>
    );
};