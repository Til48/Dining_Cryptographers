<template>
    <div class=" landing">
        <h1>Dining Cryptographers</h1>
        <p>The Dining Cryptographers protocol is a method for anonymous communication, ensuring that a message can be sent in a group such that the sender's identity remains concealed. 
            It achieves this by having participants share bits of random information, which collectively allow the message to be reconstructed while keeping the source hidden. This page was set up
            in a group project for the Cyber Security course under Professor C. Cap at the University of Rostock.</p>

        <a href="/uikit/Setting"><button>Try it out</button></a>
    </div>
</template>

<style scoped>

.landing{
    height: 82vh;
    background:linear-gradient(to bottom right,rgb(122, 187, 122),rgb(83, 113, 79));
    text-align: center;
    padding: 7% 20%;
    }
    
    h1{
        font-weight: 800;
        font-size: 5rem;
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        color:rgb(3, 60, 3) ;
    }
    p{
        text-align: justify;
        color: rgb(244, 252, 212);
        font-size: 1.25rem;
        padding: 25px 0;
    }
    button{
        font-size: large;
        padding: 10px 30px;
        border: none;
        background-color: #a6e5b6;
        border-radius: 20px;
        font-weight: bold;
    }
    button:hover{
        cursor: pointer;
        box-shadow: 10px rgb(2, 42, 2);
        color: rgb(250, 241, 229);
        background-color: rgb(15, 27, 3);
    }

</style>