export default function Home(){
    return(
        <form method="POST" action="/api/login" class="login">
            <input name="username" type="text" placeholder="Username" required/>
            <input name="password" type="password" placeholder="Password" required/>
            <button type="submit">Login</button>
        </form>
    )
}