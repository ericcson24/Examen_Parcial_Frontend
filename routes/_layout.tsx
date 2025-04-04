import { PageProps } from "$fresh/server.ts";

export default function Layout(props:PageProps) {
    // do something with state here
    const Component = props.Component
    return (
        <div class="layout">
            <header>
                <h1><a href="Telefono info"></a></h1>
            </header>
            <Component/>
            <footer><p>Copyright Nebrija</p></footer>
        </div>
    );
}