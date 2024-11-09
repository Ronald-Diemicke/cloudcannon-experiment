import type {Page_Fragments, Page_FragmentsBlocksSectionPageFragmentBlock} from "../../../tina/__generated__/types.ts";
import React from "react";
import ContentBlock from './contentBlock.tsx';
import FragmentBlock from './fragmentBlock.tsx';

interface Props {
    tinaProps: Page_FragmentsBlocksSectionPageFragmentBlock;
}

export default function fragmentBlock({ tinaProps }: Props) {
    return (
        <>
            {tinaProps.pageFragmentRef.blocksSection
                ? tinaProps.pageFragmentRef.blocksSection.map(function (blockData, i) {
                    switch (blockData.__typename) {
                        case 'Page_fragmentsBlocksSectionContentBlock':
                            return (
                                <React.Fragment key={i + blockData.__typename}>
                                    <ContentBlock tinaProps={blockData}/>
                                </React.Fragment>
                            )
                        case 'Page_fragmentsBlocksSectionPageFragmentBlock':
                            return (
                                <React.Fragment key={i + blockData.__typename}>
                                    <FragmentBlock tinaProps={blockData}/>
                                </React.Fragment>
                            )
                        default:
                            return null
                    }
                })
                : null}
        </>
    );
};