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
     border: "1px solid black", borderRadius: "12px", width:'280px', height: "260px", paddingTop: "8px"}}>
              <div style={{marginTop:"10px"}}>
                <img src={src} alt="url"/>
              </div>
              <div>
                 <a style={{textDecoration: "none"}}
                     href={src} download={src}>
                    <button className="badge-pill" style={{width:"160px", marginTop:"10px",
                    border: "1px solid grey", fontWeight:"300", color: "black"}} type="submit">Download</button>
                </a>
              </div>
            </div>)


}

export default QrcodeComponent;
