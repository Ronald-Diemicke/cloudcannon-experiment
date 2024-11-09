import { TinaMarkdown } from "tinacms/dist/rich-text";
import type {PageBlocksSectionTwoColFeaturesBlock} from "../../../tina/__generated__/types.ts";

interface Props {
    tinaProps: PageBlocksSectionTwoColFeaturesBlock
}

export default function twoColFeaturesBlock({tinaProps}: Props) {
    return (
        <>
            <section className="gb-two-col-feature">
                <div>
                    <h2>{tinaProps.colOneFeatureHeading}</h2>
                    <TinaMarkdown
                        content={tinaProps.colOneFeatureText}/>
                </div>
                <div>
                    <h2>{tinaProps.colTwoFeatureHeading}</h2>
                    <TinaMarkdown
                        content={tinaProps.colTwoFeatureText}/>
                </div>
            </section>
        </>
    );
};