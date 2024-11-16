const components = {};
const componentImports = import.meta.glob("../blocks/*.tsx", {
    eager: true,
});
Object.entries(componentImports).forEach(([path, obj]) => {
    console.log('path',path);
    const parts = path.replace("../blocks/", "").split(".")[0].split("/");
    console.log('parts',parts);
    if (parts.length > 1 && parts[parts.length - 1] === parts[parts.length - 2]) {
        parts.pop();
    }
    const name = parts.join("/");
    components[name] = obj.default;
    console.log('components',components);
});

export default function PageBlocksSection({ blocksSection }) {
    return (
        <main>
            {console.log('blocksection', blocksSection)}
            {blocksSection.map((block, i) => {
                const Component = components[block._componentName];
                console.log('Componentnametest', {...block});
                return <Component block={block} key={i} />;
            })}
        </main>
    );
}
