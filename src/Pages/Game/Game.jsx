import { Link } from "react-router-dom";
import ImageDiv from "../../Components/ImageDiv";

export default function Game() {
    return <div>
        <ImageDiv
            imgSrc="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/08ad9f32-6458-4708-aaa7-4a4678118294/dbi7f0p-c65b4aa1-5ec4-49b4-9f59-a7971750bb30.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA4YWQ5ZjMyLTY0NTgtNDcwOC1hYWE3LTRhNDY3ODExODI5NFwvZGJpN2YwcC1jNjViNGFhMS01ZWM0LTQ5YjQtOWY1OS1hNzk3MTc1MGJiMzAuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.rm5-IFAX3yfpRIbAjiRYNRuetgL-ufeEGMJtc05Gh3A"
            text="You've got game! ;)"
        />

        <ImageDiv
            imgSrc="https://miro.medium.com/v2/resize:fit:640/format:webp/0*E8e1sz4HQRaehMEt"
            text="I will go with you into Electrical <3 - You will never have to face situations with fear or anxiety alone. I got you! - Because Among Us was the first game I agreed to playing with you - and your friends"
        />

        <ImageDiv
            imgSrc="https://www.teechu.com/wp-content/uploads/2021/05/best-nintendo-coop-games-friends8.gif"
            text="I want to be your 'Player 2', for the rest of my life. I will ALWAYS be on your team and by your side, through games and in life. Yes, I used Overcooked since we played it togther and I enjoyed playing with you ;)"
        />

        <ImageDiv
            imgSrc="https://i.giphy.com/wBJBooogTQBA5fWpiV.mp4https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaTlodmdxbmZlejY4dTVicHltNzkycHMxb3d4NzVnaHcyNGU3Z2E5cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/wBJBooogTQBA5fWpiV/giphy.gif"
            text="We can face every obstacle that comes our way - and reach the finish line, stronger, together."
        />

        <ImageDiv
            imgSrc="https://images.hive.blog/p/99pyU5Ga1kwqSXWA2evTexn6YzPHotJF8R85JZsErvtTWYkPrHM2KMHou8SCiiaJMRBVuf92CXk8nsXRjwrAN3wLLptoroeTA5rrh88TaGe5XsPzumjowRNtbecPbiMRTs?format=match&mode=fit"
            text="My love for you is on another level ;)"
        />

        <ImageDiv
            imgSrc="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXk3MDMxejliNWR3YzJ0MGMzeXI5cmc5MzN2aHpjMzdrajlkYnJ3OCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/t7GCqjyrLwQVsZF4b3/giphy.gif"
            text="I would spend every chance I get at life with you, my love. Until it's 'Game Over!' for me"
        />

        <div className="container" style={{ paddingBottom: 50 }}>
            <Link to="/reasons">
                <button className="anime-button">Next Next Next!</button>
            </Link>
        </div>
    </div>
}
