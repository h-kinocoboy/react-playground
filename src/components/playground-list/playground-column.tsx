import Link from "next/link"
type Props = {
    name: string,
    uri: string
}
const PlaygroundColumn = ({ name, uri }: Props) => {
    return (
        <li>
            <div>
                <Link href={uri}>{ name }</Link>
            </div>
        </li>
    )
}

export default PlaygroundColumn