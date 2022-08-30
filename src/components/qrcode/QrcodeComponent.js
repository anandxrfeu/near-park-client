import QRCode from "qrcode"
import { useEffect, useState } from "react";

const QrcodeComponent  = (props) => {
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
                <a  style={{textDecoration: "none"}} 
                     href={src} download={src}>
                    {/* <button className="badge-pill" type="submit">Download</button> */}
                </a>
            </div>)
    

}

export default QrcodeComponent;