
interface Props {
    fill?:string
    stroke?:string
    width?:string
}

export default function Heart({fill="rgba(0 0 0 / 0%)", stroke="#8a8a8a", width="1.5rem"}:Props){
    return(
        <svg width={width} height="1.5rem" viewBox="0 0 24 24" fill={fill}><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7 4C18.87 4 21 6.98 21 9.76C21 15.39 12.16 20 12 20C11.84 20 3 15.39 3 9.76C3 6.98 5.13 4 8.3 4C10.12 4 11.31 4.91 12 5.71C12.69 4.91 13.88 4 15.7 4Z" stroke={stroke} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
    )
}