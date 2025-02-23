import FaceAvatar from "../../../assets/images/MyFace.png"

function Landing(){
    return(
        <>
            <div className="Landing">
                <div className="L_Left">
                    <div>
                        <h2><span style={{color:"#C6C6C6"}}>My name's</span></h2>
                        <h1>BERTRAND</h1>
                    </div>                  
                </div>
                <div className="L_Right"><img src={FaceAvatar}/></div>
            </div>
        </>
    )
}
export default Landing;