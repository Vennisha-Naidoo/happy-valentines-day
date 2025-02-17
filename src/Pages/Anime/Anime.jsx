import { Link } from "react-router-dom";
import ImageDiv from "../../Components/ImageDiv";

export default function Anime() {
    return <div>
        <ImageDiv
            imgSrc="https://i.pinimg.com/originals/e8/4e/db/e84edb279472c7ab49e97ec276d4ffda.gif"
            text="You are my special... person and... I love you, baby"
        />

        <ImageDiv
            imgSrc="https://64.media.tumblr.com/425421c9894cfb5824e4bdf0b157ab2f/d4c815706248b969-04/s1280x1920/00dca609cf6f7bf61815905c5a2fd4384abde930.gifv"
            text="The way Nanami felt in this scene is how I constantly feel when you're by my side - at peace"
        />

        <ImageDiv
            imgSrc="https://i.pinimg.com/originals/83/bb/9f/83bb9fdfac132aea2b873abd28fc0558.gif"
            text="I'm not giving up... on my love. I will not give up... on the person I love. Even if I end up looking like Asta after every fight :)"
        />

        <ImageDiv
            imgSrc="https://64.media.tumblr.com/20e18dccd35afe75d6dbf678ba51fa37/tumblr_inline_ou88v3aUsK1r5ight_500.gifv"
            text="Loving you is never a stretch"
        />

        <ImageDiv
            imgSrc="https://i.pinimg.com/originals/96/71/b8/9671b84d08123677bc4681ff6eff8fe1.gif"
            text="Nice snake you got... there ;) - (I'm sorry)"
        />

        <ImageDiv
            imgSrc="https://gifdb.com/images/high/kafka-hibino-kaiju-no-8-fight-i6hxikwhf5oxb2je.gif"
            text="My love for you is THIS strong!"
        />

        <ImageDiv
            imgSrc="https://blog.lootcrate.com/wp-content/uploads/2018/11/gc_dn_bookheader.gif"
            text="The only place I would NOT write your name ;) - (since I've been writing it EVERYWHERE)"
        />

        <div className="container" style={{ paddingBottom: 50 }}>
            <Link to="/game">
                <button className="anime-button">Next Next Next!</button>
            </Link>
        </div>
    </div>
}