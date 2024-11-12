import type {PageBlocksSectionSecNavBlock} from "../../../tina/__generated__/types.ts";

interface Props {
    tinaProps: PageBlocksSectionSecNavBlock;
}

export default function secNavBlock({ tinaProps }: Props) {

    return (
        <>
            <nav class="gb-sec-nav">
                <div>
                    <div class="gb-display4 heavy">{tinaProps.secNavHeading}</div>
                    <div class="gb-body3">{tinaProps.secNavSubHeading}</div>
                </div>
                <div>
                    <a class="gb-tertiary-button gb-small-button" href={tinaProps.secNavPrimaryCTALink}>{tinaProps.secNavPrimaryCTALabel}</a>
                    <a class="gb-primary-button gb-small-button" href={tinaProps.secNavSecondaryCTALink}>{tinaProps.secNavSecondaryCTALabel}</a>
                </div>
            </nav>
        </>
    );
};