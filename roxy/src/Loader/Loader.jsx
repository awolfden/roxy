import React, {Component} from 'react';

class Loader extends Component {
    constructor(){
        super(); 
        this.state = {

        }
    }

    timer = () => {

    }

    render(){
        return(
            <div id="loader">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 118.39 118.39">
                    <g className="roxy" fill="#231f20" stroke="#231f20" stroke-miterlimit="10">
                        <path d="M27.99 48.69a26 26 0 0 1 4.72-.39c2.63 0 4.32.48 5.51 1.55a4.76 4.76 0 0 1 1.5 3.62 5 5 0 0 1-3.59 4.86v.08c1.47.52 2.35 1.87 2.8 3.85a30.78 30.78 0 0 0 1.51 5.23h-2.58a23.86 23.86 0 0 1-1.28-4.55c-.56-2.63-1.58-3.62-3.82-3.7h-2.32v8.25h-2.45zm2.45 8.68h2.52c2.62 0 4.29-1.44 4.29-3.62 0-2.45-1.78-3.53-4.38-3.55a9.79 9.79 0 0 0-2.43.22zM59.85 57.77c0 6.56-4 10-8.85 10-5 0-8.57-3.9-8.57-9.66 0-6 3.76-10 8.85-10s8.57 4 8.57 9.64m-14.79.31c0 4.07 2.2 7.72 6.08 7.72s6.11-3.59 6.11-7.92c0-3.79-2-7.75-6.08-7.75s-6.11 3.76-6.11 8M72.99 67.49l-2.43-4.21c-1-1.61-1.61-2.66-2.2-3.76h-.06c-.53 1.1-1.08 2.12-2.06 3.78l-2.29 4.19h-2.83l5.83-9.64-5.6-9.41h2.85l2.52 4.47c.71 1.24 1.24 2.2 1.75 3.22h.09c.53-1.13 1-2 1.72-3.22l2.6-4.47h2.83l-5.8 9.27 5.94 9.78zM83.37 67.49V59.4l-6-11h2.8l2.68 5.26a72.4 72.4 0 0 1 1.89 3.93h.06c.54-1.25 1.19-2.49 1.93-3.93l2.71-5.22h2.8l-6.39 10.94v8.11z" opacity=".74"/>
                    </g>
                    <g className="orb" fill="#231f20" stroke="#231f20" stroke-miterlimit="10">
                        <path d="M59.2.5a58.32 58.32 0 0 0-32.82 10.07l.46.54a58 58 0 1 1-15.71 15.68l-.63-.32a58.68 58.68 0 1 0 48.7-26" opacity=".74"/>
                        <path opacity=".74" d="M11.88 21.91l-1.2 1.25-.46-.43 2.94-3.06.46.44-1.22 1.26 3.68 3.54-.52.53-3.68-3.53zM14.71 18.07l1.73 1.65 1.92-1.99-1.73-1.66.52-.54 4.13 3.97-.52.54-1.94-1.87-1.92 2.01 1.94 1.86-.52.53-4.12-3.97.51-.53zM22.88 13.96l-1.54 1.61L22.82 17l1.73-1.79.44.42-2.23 2.33-4.13-3.97 2.14-2.23.45.43-1.63 1.69 1.3 1.26 1.54-1.6.45.42z"/>
                    </g>
                </svg>
            </div>
        )
    }
}

export default Loader;