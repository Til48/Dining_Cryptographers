<template>
    <main>
        <section class="dc-problem">
            <h2><b>About the Problem</b></h2>
            <div class="upper-content-grid">
                <div class="definition">
                    <h3>Definition</h3>
                    <p>The Dining Cryptographers Problem, introduced by David Chaum in the 1980s, is a cryptographic protocol that enables anonymous communication within a group, ensuring that the source of communication cannot be traced. The problem is typically illustrated with a scenario where three cryptographers are dining together. They want to know if one of them paid for their meal or if an external party, like the NSA, covered the costs, while preserving the anonymity of the paying cryptographer. This mechanism ensures that the identity of the payer remains protected, but the group can still determine whether the payer was one of them or an external party.</p>
                    <p>This problem has broader applications in anonymous communication systems, often referred to as DC-Nets (Dining Cryptographers Networks), which use similar principles.</p> <br>
                    <div class="simulationbutton">
                        <a href="/uikit/setting">
                            <button class="styled-button"><b>Simulation</b></button>
                        </a>
                    </div>
                </div>
                <div class="visualization">
                    <img src="/src/pictures/dcfinal.png" alt="The Dining Cryptographers Problem">
                    <p><b>The Dining Cryptographers Problem</b></p>
                    <p style="color: grey;"></p>
                </div>
            </div>
            <div class="upper-content-grid">
                <div class="brief-overview">
                    <h3>Brief Overview</h3>
                    <p><b>Coin Tosses:</b> Each cryptographer shares a coin toss with their neighbors. If there are three cryptographers, Alice shares a coin toss with Bob, Bob with Charlie, and Charlie with Alice.</p>
                    <p><b>XOR Operation:</b> Each cryptographer then performs an XOR operation (exclusive or) between their own coin and the coin shared with the right-hand neighbor. If a cryptographer is the payer, they invert the result of this XOR operation.</p>
                    <p><b>Announcement:</b> The results of these operations are announced publicly. If the overall XOR of all announced values is 0, it means the external party paid. If it is 1, one of the cryptographers paid anonymously.</p><br>
                </div>
            </div>
            <div class="upper-content-grid">
                <div class="limitations">
                    <h3>Limitations</h3>
                    <ol>
                        <li><b>Collision:</b>
                            <p>If two cryptographers paid for the dinner, their messages cancel each other out and the final XOR result will be 0. This is called a collision and allows only one participant to send at a time. In the general case, a collision occurs as long as an even number of participants send messages.</p><br>
                        </li>
                        <li><b>Disruption:</b>
                            <p>A malicious cryptographer who does not want the group to communicate successfully can disrupt the protocol by simply sending random bits instead of the correct XOR result. This problem arises because the original protocol was developed without the use of public-key technology, lacking reliable mechanisms to verify that participants follow the protocol honestly.</p><br>
                        </li>
                        <li><b>Complexity:</b>
                            <p>The protocol requires pairwise shared secret keys between participants, which can be problematic if there are many participants. Although the DC-Net protocol is "unconditionally secure," it actually depends on the assumption that "unconditionally secure" channels already exist between pairs of participants, which is difficult to achieve in practice.</p><br>
                        </li>
                        <li><b>False Identiy Creation:</b>
                            <p>In systems where identities are not trustworthy, attackers can create false identities to tamper with messages and later discard these identities when detected. This poses a problem particularly in internet-based systems with short-lived participation​​.</p><br>
                        </li>
                        <li><b>Complexity in privacy definitions:</b>
                            <p>For mix networks involving interaction among players, adversaries can induce errors or failures, complicating privacy definitions. The non-interactivity of the DC-net simplifies privacy definitions, but interactive mix networks pose broader challenges​​.</p><br>
                        </li>
                    </ol>
                </div>
                <div class="generalizations">
                    <h3>Generalizations</h3>
                    <p><b>Transmitting Longer Messages:</b></p>
                    <p>To allow an anonymous sender to transmit more than one bit of information per DC-Net round, the group of cryptographers can repeat the protocol as many times as desired to generate the desired amount of transmission bandwidth. These repetitions do not need to be performed serially. In practical DC-Net systems, it is common for pairs of participants to agree on a single shared "master" key in advance, for example using Diffie-Hellman key exchange. Each participant then locally feeds this shared master key into a pseudorandom number generator to generate as many shared "coin tosses" as desired, enabling an anonymous sender to transmit multiple bits of information.</p>
                    <p><b>Larger Group Sizes:</b></p>
                    <p>The protocol can be generalized to a group of n participants, where each participant has a shared secret key with every other participant. In each round of the protocol, if a participant wants to send an untraceable message to the group, they invert their publicly announced bit. Participants can be visualized as a fully connected graph, with the nodes representing the participants and the edges representing their shared secret keys.</p>
                </div>
            </div>
            <div class="max-content-grid">
                <div class="cheating">
                    <h3>Ways to cheat</h3>
                    <p><b>Introduction:</b></p>
                    <p>The Dining Cryptographers protocol is designed to ensure the anonymity of the payer in a group. However, there are several potential vulnerabilities that could be exploited to cheat the system. Understanding these possible ways to cheat is crucial for implementing robust and secure cryptographic protocols.</p>
                    <p><b>Jamming Attacks</b></p>
                    <p>Malicious players can disrupt the protocol by broadcasting invalid messages or simply dropping out of the protocol. This prevents the delivery of messages from honest participants and can effectively jam the network.</p>
                    <p><b>Message Collision</b></p>
                    <p>Even when all players are honest, selecting message positions can lead to collisions. Two or more players might choose the same slot, causing their messages to interfere and appear as a combined message in the final output. This reduces the system's throughput and can be exploited by malicious players to create confusion​.</p>
                    <p><b>False Identity Creation</b></p>
                    <p>In anonymous systems where identities are not trustworthy, a savvy attacker might create false identities and cheat. They can tamper with messages and discard the false identities when detected. This can be particularly problematic in Internet systems with short-lived participation​​.</p>
                    <p><b>Lack of Recovery Without Interaction</b></p>
                    <p>If the system cannot recover from failure (and thus from cheating) without an additional round of interaction, it opens a vulnerability. An adversary could simulate the absence of a player to determine their input by comparing the set of all messages with the set of messages excluding that player's input​​.</p>
                    <p><b>High-Probability Detection</b></p>
                    <p>New constructions of DC-nets allow for efficient detection and identification of cheating players with high probability while maintaining non-interactivity. When cheating is detected, a single additional broadcast round is sufficient for full fault recovery.
                    By understanding these vulnerabilities, developers and researchers can better protect against potential cheating and ensure the integrity and reliability of the Dining Cryptographers network.</p>
                    <p><b></b></p>
                    <p></p>
                </div>
                <div class="sources">
                    <h3>Sources</h3>
                    <p><b><a href="https://en.wikipedia.org/wiki/Dining_cryptographers_problem">Wikipedia</a></b></p>
                    <p><b><a href="https://crypto.stanford.edu/~pgolle/papers/nim.pdf">Dining Cryptographers Revisited</a></b></p>
                </div>
            </div>
        </section>
    </main>
</template>

<style>
main {
    margin: 10px;
    max-width: auto;
    font-family: sans-serif;
    color: #333333;
}

h3 {
    color: grey;
}

.dc-problem {
    margin-bottom: 0.5em;
    padding: 1em;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
}

.upper-content-grid {
    display: grid;
    grid-template-areas:
        "definition visualization";
    grid-template-columns: 1fr 1fr;
    gap: 1em;
}

.lower-content-grid {
    display: grid;
    grid-template-areas:
        "brief-overview limitations generalizations";
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1em;
}

.definition,
.visualization {
    width: 650px; /* Set the width of the image */
  height: 110%; /* Maintain aspect ratio */
  border: 0px solid #ccc; /* Add a border */
  border-radius: 0px; /* Rounded corners */
  box-shadow: 0 0px 0px rgba(0, 0, 0, 0.2); /* Add a shadow */
  /*transition: transform 0.2s; /* Smooth transition for hover effect */
}
.brief-overview,
.limitations,
.generalizations {
    border-radius: 0 0.5em 0.5em;
    border: hidden;
    padding: 10px;
    margin: 10px;
    background-color: rgb(255, 255, 255);
}

.cheating {
    border-radius: 0 0.5em 0.5em;
    border: hidden;
    padding: 10px;
    margin: 10px;
    background-color: rgb(255, 255, 255);
}

.sources {
    border-radius: 0 0.5em 0.5em;
    border: hidden;
    padding: 10px;
    margin: 10px;
    background-color: rgb(255, 255, 255);
}

.simulationbutton,
.informationbutton {
    display: block;
    text-align: left;
    margin: 0.5em 0;
}

.styled-button {
    background-color: rgb(166, 229, 182);
    color: rgb(0, 0, 0);
    border: none;
    width: 17em;
    padding: 0.5em 1em;
    cursor: pointer;
    border-radius: 5px;
    text-decoration: none;
    font-size: 1em; /* Change this value to adjust font size */
}
.styled-button:hover{
        cursor: pointer;
        box-shadow: 10px rgb(2, 42, 2);
        color: rgb(250, 241, 229);
        background-color: rgb(15, 27, 3);
    }

img {
    width: 100%;
    object-fit: cover;
    height: 80%;
}
</style>
