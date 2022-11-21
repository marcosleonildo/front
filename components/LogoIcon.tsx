export default function LogoIcon(props: { type?: "cliente-kuenda" | "admin-kuenda" }) {
    return (
        props ? (
            props.type == "cliente-kuenda" ? (
                <img src="/assets/img/logo.png" className="w-44" />
            ) : (
                <img src="/assets/img/logo-black.png" className="w-44" />
            )
        ) : (
            <img src="/assets/img/logo.png" className="w-44" />
        )
    );
}