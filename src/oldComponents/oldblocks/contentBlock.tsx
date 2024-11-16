import { TinaMarkdown } from "tinacms/dist/rich-text";
import type {PageBlocksSectionContentBlock} from "../../../tina/__generated__/types.ts";

interface Props {
    tinaProps: PageBlocksSectionContentBlock;
}

const className = (props) => {
    return <span className={props.className}>{props.text}</span>
}

export default function contentBlock({ tinaProps }: Props) {

    return (
        <>
            <h2>{tinaProps.contentTitle}</h2>
        <h2><TinaMarkdown components={{className}}
                          content={tinaProps.contentText}/></h2>
        </>
    );
};