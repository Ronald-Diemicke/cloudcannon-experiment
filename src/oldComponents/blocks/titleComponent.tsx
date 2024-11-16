interface Props {
    block: {
        title: string;
        body: string;
    };
}

export default function titleComponent({ block }) {
    return (
        <>
            <h1 className="gb-headline1" data-cms-bind="#blocksSection.titleComponent.title">{block.title}</h1>
            <div data-cms-bind="#blocksSection.titleComponent.body">{block.body}</div>
        </>
    );
};