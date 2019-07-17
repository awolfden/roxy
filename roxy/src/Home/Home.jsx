import React, {Component} from 'react';
//import Video from '../images/record_player_004.mp4';

class Home extends Component {


    render(){
        return(
            <div id="home">
                {/* <video style={{position: "absolute", opacity: .3, zIndex: 0, height: "100%", maxWidth: "100%"}}id="background-video" loop autoPlay>
                    <source src={Video} type="video/mp4" />
                    <source src={Video} type="video/ogg" />
                </video> */}
                <div className="flexContainer" style={{zIndex: 50}}>
                    <svg id="roxylogo" xmlns="http://www.w3.org/2000/svg" width="344.844" height="188.412">
                    <g className="est1978" data-name="Layer 4" fill="#fff" stroke="#fff" strokeMiterlimit="10">
                        <path d="M145.511 181.964h-4.765v4.42h5.311v1.328h-6.893v-12.259h6.62v1.328h-5.038v3.874h4.765zM147.894 185.784a5.608 5.608 0 0 0 2.837.8c1.619 0 2.565-.855 2.565-2.091 0-1.146-.655-1.801-2.31-2.438-2-.71-3.238-1.746-3.238-3.474 0-1.91 1.583-3.328 3.965-3.328a5.573 5.573 0 0 1 2.71.6l-.436 1.291a4.883 4.883 0 0 0-2.328-.582c-1.674 0-2.31 1-2.31 1.837 0 1.146.745 1.71 2.437 2.365 2.073.8 3.128 1.8 3.128 3.601 0 1.892-1.4 3.528-4.292 3.528a6.337 6.337 0 0 1-3.129-.781zM159.406 176.799h-3.728v-1.346h9.076v1.346h-3.747v10.913h-1.6zM164.59 186.766a1.075 1.075 0 0 1 1.09-1.146 1.148 1.148 0 1 1-1.09 1.146zM175.556 177.38h-.036l-2.056 1.11-.309-1.219 2.583-1.381h1.364v11.822h-1.546zM182.34 186.584a6.687 6.687 0 0 0 1.29-.054 4.459 4.459 0 0 0 2.474-1.146 5.188 5.188 0 0 0 1.564-3.147h-.054a3.47 3.47 0 0 1-2.783 1.273 3.425 3.425 0 0 1-3.492-3.62 4.054 4.054 0 0 1 4.038-4.201c2.419 0 3.91 1.964 3.91 4.983a7.47 7.47 0 0 1-2.037 5.548 5.91 5.91 0 0 1-3.438 1.582 7.44 7.44 0 0 1-1.473.091zm.581-6.802a2.275 2.275 0 0 0 2.274 2.51 2.646 2.646 0 0 0 2.328-1.238 1.053 1.053 0 0 0 .145-.582c0-2.018-.745-3.564-2.419-3.564-1.364 0-2.327 1.2-2.327 2.874zM198.418 175.89v1.054l-5.148 10.768h-1.655l5.13-10.459v-.036h-5.785v-1.327zM199.926 184.711a3.378 3.378 0 0 1 2.347-3.165l-.018-.055a2.928 2.928 0 0 1-1.874-2.655c0-1.874 1.583-3.147 3.656-3.147 2.292 0 3.438 1.437 3.438 2.91a3.004 3.004 0 0 1-1.947 2.765v.055a3.277 3.277 0 0 1 2.383 3.055c0 2.056-1.764 3.438-4.02 3.438-2.473 0-3.965-1.474-3.965-3.201zm6.367-.073c0-1.437-1-2.128-2.601-2.583a2.569 2.569 0 0 0-2.128 2.438 2.186 2.186 0 0 0 2.364 2.255 2.14 2.14 0 0 0 2.365-2.11zm-4.402-5.911c0 1.182.891 1.819 2.255 2.182a2.329 2.329 0 0 0 1.801-2.146 1.838 1.838 0 0 0-2-1.928 1.88 1.88 0 0 0-2.056 1.892zM212.492 181.149h132.352M0 181.149h132.352"/>
                    </g>
                    <g className="locations" data-name="Layer 3" fill="#fff" stroke="#fff" strokeMiterlimit="10">
                        <path d="M11.815 149.32H4.53v6.756h8.118v2.029H2.112v-18.738h10.12v2.03H4.531v5.921h7.284zM15.793 158.105v-18.738h2.64l6.006 9.48a52.994 52.994 0 0 1 3.364 6.088l.056-.028c-.223-2.502-.278-4.781-.278-7.7v-7.84h2.28v18.738h-2.447l-5.95-9.508a59.447 59.447 0 0 1-3.503-6.256l-.083.028c.139 2.363.194 4.615.194 7.73v8.006zM47.184 157.493a12.008 12.008 0 0 1-4.948.89c-5.283 0-9.258-3.336-9.258-9.48 0-5.866 3.975-9.842 9.786-9.842a10.049 10.049 0 0 1 4.448.834l-.584 1.974a8.802 8.802 0 0 0-3.78-.778c-4.394 0-7.313 2.808-7.313 7.729 0 4.587 2.641 7.534 7.201 7.534a9.682 9.682 0 0 0 3.948-.779zM52.636 139.367v18.738h-2.419v-18.738zM56.863 158.105v-18.738h2.641l6.006 9.48a53.008 53.008 0 0 1 3.363 6.088l.056-.028c-.222-2.502-.278-4.781-.278-7.7v-7.84h2.28v18.738h-2.447l-5.95-9.508a59.43 59.43 0 0 1-3.503-6.256l-.083.028c.139 2.363.194 4.615.194 7.73v8.006zM77.578 139.367v18.738H75.16v-18.738zM85.364 141.424h-5.7v-2.057h13.874v2.057H87.81v16.681h-2.447zM96.57 152.211l-1.946 5.894h-2.502l6.367-18.738h2.919l6.394 18.738h-2.586l-2.001-5.894zm6.145-1.89l-1.835-5.394c-.417-1.223-.696-2.335-.974-3.42h-.055a56.649 56.649 0 0 1-.946 3.392l-1.835 5.421zM110.224 155.158a8.574 8.574 0 0 0 4.337 1.223c2.474 0 3.92-1.306 3.92-3.197 0-1.751-1-2.752-3.531-3.726-3.058-1.084-4.949-2.668-4.949-5.31 0-2.919 2.42-5.087 6.061-5.087a8.516 8.516 0 0 1 4.143.917l-.668 1.974a7.465 7.465 0 0 0-3.558-.89c-2.558 0-3.531 1.53-3.531 2.808 0 1.752 1.14 2.614 3.726 3.615 3.17 1.223 4.781 2.752 4.781 5.504 0 2.892-2.14 5.393-6.56 5.393a9.683 9.683 0 0 1-4.783-1.195zM122.598 161.524a39.96 39.96 0 0 0 1.668-6.644l2.725-.278a33.883 33.883 0 0 1-2.641 6.756zM149.011 157.493a12.007 12.007 0 0 1-4.948.89c-5.283 0-9.258-3.336-9.258-9.48 0-5.866 3.975-9.842 9.786-9.842a10.048 10.048 0 0 1 4.448.834l-.584 1.974a8.803 8.803 0 0 0-3.78-.778c-4.394 0-7.313 2.808-7.313 7.729 0 4.587 2.642 7.534 7.201 7.534a9.681 9.681 0 0 0 3.948-.779zM155.186 152.211l-1.946 5.894h-2.503l6.367-18.738h2.92l6.394 18.738h-2.586l-2.002-5.894zm6.144-1.89l-1.835-5.394c-.417-1.223-.695-2.335-.973-3.42h-.055a56.647 56.647 0 0 1-.946 3.392l-1.835 5.421zM204.542 139.617a34.62 34.62 0 0 1 5.144-.39c3.475 0 5.949.807 7.59 2.336a8.632 8.632 0 0 1 2.64 6.728 9.91 9.91 0 0 1-2.696 7.284c-1.752 1.751-4.643 2.697-8.285 2.697a38.99 38.99 0 0 1-4.393-.223zm2.42 16.57a15.255 15.255 0 0 0 2.445.139c5.172 0 7.98-2.891 7.98-7.951.027-4.42-2.475-7.229-7.59-7.229a13.729 13.729 0 0 0-2.836.25zM232.764 149.32h-7.284v6.756h8.118v2.029h-10.537v-18.738h10.12v2.03h-7.7v5.921h7.283zM236.742 158.105v-18.738h2.641l6.005 9.48a53.008 53.008 0 0 1 3.364 6.088l.056-.028c-.223-2.502-.278-4.781-.278-7.7v-7.84h2.28v18.738h-2.447l-5.95-9.508a59.43 59.43 0 0 1-3.503-6.256l-.083.028c.139 2.363.195 4.615.195 7.73v8.006zM259.153 158.105l-6.116-18.738h2.614l2.918 9.23c.807 2.53 1.501 4.81 2.002 7.006h.056c.528-2.168 1.307-4.532 2.14-6.979l3.17-9.257h2.586l-6.7 18.738zM280.257 149.32h-7.284v6.756h8.118v2.029h-10.536v-18.738h10.119v2.03h-7.701v5.921h7.284zM284.236 139.617a25.16 25.16 0 0 1 4.642-.39c2.585 0 4.254.473 5.421 1.53a4.667 4.667 0 0 1 1.474 3.558 4.92 4.92 0 0 1-3.53 4.782v.083c1.445.5 2.307 1.835 2.752 3.782a29.852 29.852 0 0 0 1.445 5.143h-2.502a24.292 24.292 0 0 1-1.251-4.476c-.556-2.586-1.557-3.56-3.753-3.643h-2.28v8.119h-2.418zm2.418 8.535h2.474c2.586 0 4.226-1.418 4.226-3.559 0-2.418-1.751-3.475-4.309-3.503a9.95 9.95 0 0 0-2.392.223zM297.527 161.524a40.109 40.109 0 0 0 1.668-6.644l2.725-.278a33.91 33.91 0 0 1-2.642 6.756zM323.94 157.493a12.006 12.006 0 0 1-4.949.89c-5.282 0-9.258-3.336-9.258-9.48 0-5.866 3.976-9.842 9.786-9.842a10.049 10.049 0 0 1 4.449.834l-.584 1.974a8.8 8.8 0 0 0-3.782-.778c-4.392 0-7.311 2.808-7.311 7.729 0 4.587 2.641 7.534 7.2 7.534a9.68 9.68 0 0 0 3.948-.779zM342.403 148.541c0 6.45-3.92 9.87-8.702 9.87-4.949 0-8.424-3.836-8.424-9.508 0-5.95 3.698-9.842 8.703-9.842 5.115 0 8.423 3.92 8.423 9.48zm-14.54.306c0 4.004 2.168 7.59 5.977 7.59 3.837 0 6.006-3.53 6.006-7.784 0-3.726-1.946-7.618-5.978-7.618-4.004 0-6.006 3.697-6.006 7.812z"/>
                    </g>
                    <g className="roxy" data-name="Layer 2" fill="#fff" stroke="#fff" strokeMiterlimit="10">
                        <path d="M8.91 34.635a106.248 106.248 0 0 1 19.58-1.642c10.905 0 17.94 1.993 22.864 6.449 3.986 3.518 6.214 8.91 6.214 15.008 0 10.435-6.566 17.353-14.89 20.166v.352c6.097 2.11 9.731 7.739 11.607 15.946 2.58 11.022 4.456 18.643 6.097 21.691H49.83c-1.29-2.228-3.049-9.028-5.276-18.877-2.345-10.904-6.566-15.008-15.829-15.36h-9.614v34.237H8.91zm10.2 35.995h10.436c10.904 0 17.821-5.98 17.821-15.008 0-10.2-7.386-14.656-18.173-14.773a41.952 41.952 0 0 0-10.083.938zM164.38 72.271c0 27.202-16.532 41.624-36.699 41.624-20.87 0-35.526-16.18-35.526-40.1 0-25.09 15.594-41.505 36.7-41.505 21.573 0 35.525 16.532 35.525 39.981zm-61.32 1.29c0 16.884 9.145 32.01 25.208 32.01 16.18 0 25.325-14.89 25.325-32.83 0-15.711-8.207-32.126-25.208-32.126-16.884-.001-25.326 15.593-25.326 32.946zM245.75 112.605l-10.084-17.47c-4.103-6.683-6.683-11.021-9.145-15.594h-.235c-2.227 4.573-4.455 8.794-8.559 15.711l-9.497 17.353h-11.725l24.153-39.982-23.215-39.043h11.842l10.435 18.524c2.932 5.16 5.16 9.146 7.27 13.367h.352c2.227-4.69 4.22-8.325 7.152-13.367L245.28 33.58h11.725L232.97 72.037l24.623 40.568zM306.485 112.605V79.072L281.51 33.58h11.607l11.139 21.808c3.049 5.98 5.394 10.787 7.855 16.297h.235c2.227-5.159 4.925-10.318 7.973-16.297l11.373-21.808h11.608l-26.498 45.375v33.65z"/>
                    </g>
                    <g className="the" data-name="Layer 1" fill="#fff" stroke="#fff" strokeMiterlimit="10">
                        <path d="M151.812 2.558h-5.7V.5h13.874v2.058h-5.727v16.68h-2.447zM164.492.5v7.84h9.063V.5h2.447v18.738h-2.447v-8.785h-9.063v8.785h-2.42V.5zM189.905 10.453h-7.283v6.756h8.118v2.03h-10.537V.5h10.12v2.03h-7.7v5.921h7.283zM207.589 10.615h132.352M0 10.615h132.352"/>
                        <circle cx="183.954" cy="148.794" r="1.37"/>
                    </g>
                    </svg>
                </div>
                <div className="flexContainer">
                    <h6>1920's Ambiance · Classic Cocktails · Share Plates · Live Music</h6>
                </div>
                
            </div>
        )
    }
}

export default Home;