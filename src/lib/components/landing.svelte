    <div class="wrapper relative h-[50vh]">
        <div class="center">
            <h1 class="title-font">Hyvinvointikeskus Luxus</h1>
        </div>
    </div>

    <style>
        body {
            margin: 0;
            padding: 0;
        }
        
        .title-font {
            font-family: 'Instrument Serif', serif;
            font-style: italic;
            font-size: clamp(2.3rem, 1.2946rem + 2.8571vw, 3.4375rem);
            color: whitesmoke;
        }
        
        .wrapper {
            height: 50vh;
            position: relative;
            background-image: url('https://firebasestorage.googleapis.com/v0/b/hyvinvointikeskusluxus1.appspot.com/o/statics%2Fheader.webp?alt=media&token=e6ec8ced-17ab-4b89-b09e-c1c34694ba38');
            background-size: cover;
            background-position: center;
            animation: gentle-float 20s ease-in-out infinite alternate;
        }
        
        @keyframes gentle-float {
            from {
                background-position: center center;
                background-size: 100%;
            }
            to {
                background-position: 52% 48%;
                background-size: 105%;
            }
        }
        
        .center {
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            margin: auto;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background: rgba(94, 94, 222, 0.3);
            border-radius: 3px;
        }
        
        .center h1 {
            text-align: center;
            text-transform: uppercase;
        }
    </style>
