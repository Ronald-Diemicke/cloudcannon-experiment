import React from 'react';
import type {PageQuery, PageQueryVariables} from '../../../tina/__generated__/types.ts';
import ContentBlock from '../blocks/contentBlock.tsx';
import FragmentBlock from '../blocks/fragmentBlock.tsx';
import SecNavBlock from '../blocks/secNavBlock.tsx';
import HeroImageBlock from '../blocks/heroImageBlock.tsx';
import HeroTextBlock from '../blocks/heroTextBlock.tsx';
import TwoColFeaturesBlock from '../blocks/twoColFeaturesBlock.tsx';
import HalfPageColorizerBlock from '../blocks/halfPageColorizerBlock.tsx';
import { useTina, tinaField } from "tinacms/dist/react";

interface Props {
    tinaProps: {
        variables: PageQueryVariables;
        data: PageQuery;
        query: string;
    };
}

export default function pageBlocksSection ({ tinaProps }: Props) {
    const { data } = useTina({
        variables: tinaProps.variables,
        data: tinaProps.data,
        query: tinaProps.query
    });

    const {page} = data;

    return (
        <>
            {page.blocksSection
                ? page.blocksSection.map(function (blockData, i) {
                    switch (blockData.__typename) {
                        case 'PageBlocksSectionContentBlock':
                            return (
                                <React.Fragment key={i + blockData.__typename}>
                                    <ContentBlock tinaProps={blockData}/>
                                </React.Fragment>
                            )
                        case 'PageBlocksSectionSecNavBlock':
                            return (
                                <React.Fragment key={i + blockData.__typename}>
                                    <SecNavBlock tinaProps={blockData}/>
                                </React.Fragment>
                            )
                        case 'PageBlocksSectionHeroImageBlock':
                            return (
                                <React.Fragment key={i + blockData.__typename}>
                                    <HeroImageBlock tinaProps={blockData}/>
                                </React.Fragment>
                            )
                        case 'PageBlocksSectionHeroTextBlock':
                            return (
                                <React.Fragment key={i + blockData.__typename}>
                                    <HeroTextBlock tinaProps={blockData}/>
                                </React.Fragment>
                            )
                        case 'PageBlocksSectionTwoColFeaturesBlock':
                            return (
                                <React.Fragment key={i + blockData.__typename}>
                                    <TwoColFeaturesBlock tinaProps={blockData}/>
                                </React.Fragment>
                            )
                        case 'PageBlocksSectionHalfPageColorizerBlock':
                            return (
                                <React.Fragment key={i + blockData.__typename}>
                                    <HalfPageColorizerBlock tinaProps={blockData}/>
                                </React.Fragment>
                            )
                        case 'PageBlocksSectionPageFragmentBlock':
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