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

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <div>
            <img src={src} alt="url"></img>
          </div>
          <div >
            <a href={src} download={src} style={{textDecoration: "none"}}><button type="submit" className="badge-pill">Download</button></a>
          </div>
        </div>)


}

export default QRCOde;
