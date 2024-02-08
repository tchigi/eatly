import IconArrowRight from "../../../assets/icons/arrow-right.tsx"

interface IconProps {
    id: string
}
function Icon({ id }:IconProps) {
    switch (id) {
        case "arrow-right":
            return <IconArrowRight/>
        default:
            return <></>
    }
}

export default Icon;