const graphs = document.getElementsByClassName("mermaid");
if (document.getElementsByClassName("mermaid").length > 0) {
    const { default: mermaid } = await import("mermaid");
    mermaid.initialize({
        startOnLoad: false,
        fontFamily: "var(--sans-font)",
        // @ts-ignore This works, but TS expects a enum for some reason
        theme: localStorage.getItem("isDark") === "true" ? "dark" : "default",
    });
    for (const graph of graphs) {
        const content = graph.getAttribute("data-content");
        if (!content) continue;
        let svg = document.createElement("svg");
        const id = (svg.id = "mermaid-" + Math.round(Math.random() * 100000));
        graph.appendChild(svg);
        mermaid.render(id, content, (result) => {
            graph.innerHTML = result;
        });
    }
}