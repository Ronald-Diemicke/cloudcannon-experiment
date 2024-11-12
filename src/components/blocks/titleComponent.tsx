interface Props {
    block: {
        title: string;
        body: string;
    };
}

export default function titleComponent({ block }) {
    return (
        <>
            <h1 className="gb-headline1" data-cms-bind="#titleComponent.title">{block.title}</h1>
            <div data-cms-bind="#titleComponent.body">{block.body}</div>
        </>
    );
};