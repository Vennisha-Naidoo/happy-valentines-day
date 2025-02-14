export default function ImageDiv({ text, imgSrc, altText = "image", className = "" }) {
    return (
        <div className={`image-div ${className}`} style={{ maxWidth: '100%', paddingBottom:"5%" }}>
            <img 
                src={imgSrc} 
                alt={altText} 
                style={{ maxWidth: '100%', height: 'auto', display:"block", marginLeft:"auto", marginRight:"auto" }} 
            />
            <div className="text-container" style={{ wordWrap: 'break-word', maxWidth: '100%', textAlign:"center", padding:"10%" }}>
                <p style={{ margin: 0 }}>{text}</p>
            </div>
        </div>
    );
}
