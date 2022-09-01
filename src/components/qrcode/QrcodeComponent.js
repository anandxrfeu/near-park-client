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

    return (<div style={{display: "flex", flexDirection: "column", alignItems: "center",
     border: "1px solid black", borderRadius: "12px", width:'220px', height: "220px", padding: "2px"}}>
              <div>
                <img src={src} alt="url"/>
              </div>
              <div>
                 <a style={{textDecoration: "none"}}
                     href={src} download={src}>
                    <button className="badge-pill" type="submit">Download</button>
                </a>
              </div>
            </div>)


}

export default QrcodeComponent;
