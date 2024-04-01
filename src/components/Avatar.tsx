import style from "./Avatar.module.css"
export function Avatar({ src, hasBorder = true }: Props) {
    return (
        <img className={hasBorder ? style.avatarWithBorder : style.avatar}
        src={src} />
    );
}

interface Props {
    src: string;
    hasBorder?: boolean;
}