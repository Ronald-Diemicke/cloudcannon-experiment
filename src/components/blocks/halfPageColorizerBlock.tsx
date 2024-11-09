import type {
    PageBlocksSectionHalfPageColorizerBlock,
    PageBlocksSectionHalfPageColorizerBlockTrimsTrim,
    PageBlocksSectionHalfPageColorizerBlockTrimsTrimColorsColor
} from "../../../tina/__generated__/types.ts";

interface Props {
    tinaProps: PageBlocksSectionHalfPageColorizerBlock;
}

declare module "react/jsx-runtime" {
    namespace JSX {
        interface IntrinsicElements {
            "gb-hfpg-colorizer": JSX.HTMLAttributes<GB_HF_PG_Colorizer>,
        }
    }
}
class GB_HF_PG_Colorizer {}

export default function halfPageColorizerBlock({ tinaProps }: Props) {

    const GetDefaultTrim = ({tinaProps}: Props) => {
        return tinaProps.trims?.find((trim: PageBlocksSectionHalfPageColorizerBlockTrimsTrim) => {
            if (trim.isDefault) {
                return trim.trimName;
            }
        })
    }

    const GetDefaultColor = ({tinaProps}: Props) => {
        /*return tinaProps.trims?.find((trim: PageBlocksSectionHalfPageColorizerBlockTrimsTrim) => {
            if(trim.isDefault) {
                return trim.colors?.find((color: PageBlocksSectionHalfPageColorizerBlockTrimsTrimColorsColor) => {
                    if(color.isDefault) {
                        return color;
                    }
                })
            }
        })*/
        const defaultTrim = GetDefaultTrim({tinaProps});
        if (defaultTrim) {
            return defaultTrim.colors?.find((color: PageBlocksSectionHalfPageColorizerBlockTrimsTrimColorsColor) => {
                if(color.isDefault) {
                    return color;
                }
            })
        }
    }

    return (
        <>
            <gb-hfpg-colorizer>
                <div style={{backgroundColor:GetDefaultColor({tinaProps}).colorBackground}}>
                    <div>{tinaProps.title}</div>
                    <div>{tinaProps.subTitle}</div>
                    <button class="open">test</button>
                </div>
            </gb-hfpg-colorizer>
        </>
    );
};