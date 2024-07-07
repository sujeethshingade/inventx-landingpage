import "./style.css";
import { Alumni_data } from "./alumni";
export default function Animated3D ()
{
    return(
        <>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 justify-center" >
        {Alumni_data.map((item, index) => 
        <div className="p-20 flex">
        <div className="card">
            <div className="lines"></div>
            <div className="imgBx">
                <img src={item.image} alt="person-image"></img>
            </div>
            <div className="content">
                <div className="details">
                    <h2>
                       {item.name}
                    </h2>
                    <div className="data">
                        <h3>342<br /><span>Posts</span></h3>
                        <h3>120k<br /><span>Followers</span></h3>
                        <h3>285<br /><span>Following</span></h3>
                    </div>
                    <div className="actionBtn">
                        <button></button>
                        <button></button>
                    </div>
                </div>
            </div>
            </div>
        </div>
        )}
        </div>
        </>
        );
}



