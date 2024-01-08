
interface Props {
    fill?:string
    width?:string
}

export default function Comment({fill="#8a8a8a", width="1.25rem"}:Props){
    return(
        <svg width={width} viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" fill={fill}><g id="SVGRepo_bgCarrier" stroke-width="10"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>comment-5</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="10" fill="none" fill-rule="evenodd"> <g id="Icon-Set" transform="translate(-360.000000, -255.000000)" fill={fill}> <path d="M390,277 C390,278.463 388.473,280 387,280 L379,280 L376,284 L373,280 L365,280 C363.527,280 362,278.463 362,277 L362,260 C362,258.537 363.527,257 365,257 L387,257 C388.473,257 390,258.537 390,260 L390,277 L390,277 Z M386.667,255 L365.333,255 C362.388,255 360,257.371 360,260.297 L360,277.187 C360,280.111 362.055,282 365,282 L371.639,282 L376,287.001 L380.361,282 L387,282 C389.945,282 392,280.111 392,277.187 L392,260.297 C392,257.371 389.612,255 386.667,255 L386.667,255 Z" id="comment-5"> </path> </g> </g> </g></svg>
    )
}