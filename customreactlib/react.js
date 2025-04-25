function customRenderer(reactElement, container) {
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);

    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://github.com/dhirendraj-cmd',
        target: '_blank'
    },
    children: 'Click me '
}

const mainContainer = document.querySelector("#root")

customRenderer(reactElement, mainContainer)

