import QRCode from "qrcode"
import { useEffect, useState } from "react";

const QRCOde  = (props) => {
    const [src, setSrc] = useState("")

    useEffect(() => {  
        
        async function fetch () {
            const data = await QRCode.toDataURL(props.url)
            setSrc(data)
        }
        fetch()

    }, [props.url])

    return (<div>
            <img src={src} alt="url"></img>
        </div>)
    

}

export default QRCOde;