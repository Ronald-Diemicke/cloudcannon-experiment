import React from 'react';
import type {Page_FragmentsQuery, Page_FragmentsQueryVariables} from '../../../tina/__generated__/types.ts';
import ContentBlock from '../oldblocks/contentBlock.tsx';
import { useTina, tinaField } from "tinacms/dist/react";
import FragmentBlock from "../oldblocks/fragmentBlock.tsx";
import SecNavBlock from "../oldblocks/secNavBlock.tsx";

interface Props {
    tinaProps: {
        variables: Page_FragmentsQueryVariables;
        data: Page_FragmentsQuery;
        query: string;
    };
}

export default function pageFragmentBlocksSection ({ tinaProps }: Props) {
    const { data } = useTina({
        variables: tinaProps.variables,
        data: tinaProps.data,
        query: tinaProps.query
    });

    const {page_fragments} = data;

    return (
        <>
            {page_fragments.blocksSection
                ? page_fragments.blocksSection.map(function (blockData, i) {
                    switch (blockData.__typename) {
                        case 'Page_fragmentsBlocksSectionContentBlock':
                            return (
                                <React.Fragment key={i + blockData.__typename}>
                                    <ContentBlock tinaProps={blockData}/>
                                </React.Fragment>
                            )
                        case 'Page_fragmentsBlocksSectionSecNavBlock':
                            return (
                                <React.Fragment key={i + blockData.__typename}>
                                    <SecNavBlock tinaProps={blockData}/>
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
    )
}