export default function ImageDiv({ text, imgSrc, altText = "image", className = "" }) {
    return (
        <div className={`image-div ${className}`} style={{ maxWidth: '100%' }}>
            <img 
                src={imgSrc} 
                alt={altText} 
                style={{ maxWidth: '100%', height: 'auto' }} 
            />
            <div className="text-container" style={{ wordWrap: 'break-word', maxWidth: '100%', textAlign:"center" }}>
                <p style={{ margin: 0 }}>{text}</p>
            </div>
        </div>
    );
}
