<!--<script setup>
import { ref, onMounted } from 'vue';

const Cryptographer = ref([
    { name: 'Cryptographer A'},
    { name: 'Cryptographer B'},
    { name: 'Cryptographer C'},
    { name: 'Cryptographer D'},
    { name: 'Cryptographer E'},
    { name: 'None'}
]);

const value = ref(null);
const shared_key = ref(null);

</script>-->

<template>
   <div class="card">
        <h1>Dining Cryptographers Problem</h1>
            <Panel header="Definition" :toggleable="false">
                <p class="line-height-3 m-0">
                    The dining cryptographers problem, introduced by David Chaum in the 1980s, is a cryptographic protocol designed to enable anonymous 
                    communication within a group while ensuring that the source of the communication remains untraceable. The problem is typically illustrated 
                    with a scenario involving three cryptographers dining together. They wish to know if one among them has paid for their meal or if an 
                    external party, such as the NSA, has covered the cost, all while preserving the anonymity of the paying cryptographer. This mechanism 
                    ensures that while the payer's identity is protected, the group can still determine if the payer is one of them or an external entity. <br>
                    <br>    
                    This problem has broader applications in anonymous communication systems, often referred to as DC-nets (Dining Cryptographers networks), 
                    which enable anonymous message transmission by employing similar principles.<br>
                </p>
            </Panel>
            <Panel header="Brief Overview" :toggleable="true">
                <p class="line-height-3 m-0">
                    Coin Flips: Each cryptographer shares a coin flip with their neighbors. If there are three cryptographers, Alice, Bob, and Charlie, 
                    Alice shares a coin flip with Bob, Bob with Charlie, and Charlie with Alice. <br>
                    <br>
                    XOR Operation: Each cryptographer then performs an XOR operation (exclusive OR) between their own coin and the coin shared with 
                    their right-hand neighbor. If a cryptographer is the payer, they invert the result of this XOR operation. <br>
                    <br>
                    Announcement: The results of these operations are publicly announced. If the total XOR of all announced values equals 0, it 
                    indicates that the external party paid. If it equals 1, one of the cryptographers paid anonymously.<br>
                </p>
            </Panel>
            <Panel header="Limitations" :toggleable="true">
                <p class="line-height-3 m-0">
                    <ol>
                        <li> <b>Collision</b> <br>
                            If two cryptographers paid for the dinner, their messages will cancel each other out, and the final XOR result will be 0. 
                            This is called a collision and allows only one participant to transmit at a time using this protocol. In a more general case, 
                            a collision happens as long as any even number of participants send messages. <br>
                        </li> <br>
                        <li> <b>Disruption</b> <br>
                            Any malicious cryptographer who does not want the group to communicate successfully can jam the protocol so that the final XOR 
                            result is useless, simply by sending random bits instead of the correct result of the XOR. This problem occurs because the original 
                            protocol was designed without using any public key technology and lacks reliable mechanisms to check whether participants honestly 
                            follow the protocol. <br>
                        </li> <br>
                        <li> <b>Complexity</b> <br>
                            The protocol requires pairwise shared secret keys between the participants, which may be problematic if there are many participants. 
                            Also, though the DC-net protocol is "unconditionally secure", it actually depends on the assumption that "unconditionally secure" 
                            channels already exist between pairs of the participants, which is not easy to achieve in practice. <br>
                        </li>
                    </ol>
                </p>
            </Panel>
            <Panel header="Generalizations" :toggleable="true">
                <p class="line-height-3 m-0">
                    <b>Transmissions of longer messages</b> <br>
                    To enable an anonymous sender to transmit more than one bit of information per DC-nets round, the group of cryptographers can simply repeat 
                    the protocol as many times as desired to create a desired number of bits worth of transmission bandwidth. These repetitions need not be 
                    performed serially. In practical DC-net systems, it is typical for pairs of participants to agree up-front on a single shared "master" 
                    secret, using Diffie–Hellman key exchange for example. Each participant then locally feeds this shared master secret into a pseudorandom 
                    number generator, in order to produce as many shared "coin flips" as desired to allow an anonymous sender to transmit multiple bits of 
                    information.<br>
                    <br>
                    <b>Larger group sizes</b> <br>
                    The protocol can be generalized to a group of 𝑛 participants, each with a shared secret key in common with each other participant. 
                    In each round of the protocol, if a participant wants to transmit an untraceable message to the group, they invert their publicly 
                    announced bit. The participants can be visualized as a fully connected graph with the vertices representing the participants and the 
                    edges representing their shared secret keys.<br>
                    <br>
                </p>
            </Panel>
    </div>
</template>

<style scoped>

.main{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
        margin: 0;
}
.container{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 20px;
    width: 100%;
    margin-bottom: 20px;
}
.fig{
    grid-area: 1/2/3/3;
}

@media(max-width:1000px){
    .container{
        display: flex;
        flex-direction: column;
    }
}

.button {
    text-align: center;
}
.raised {
    font-size: large;
    background: linear-gradient(to top left,rgb(180, 241, 172),rgb(5, 52, 9));
    border: none;
    color: aliceblue;
}
.secondary {
    background-color: rgb(229, 247, 215);
}
.subheading {
    padding-bottom: 20px;
}
#dropdown{
    width: 250px;
    font-weight: 600;
    background: linear-gradient(rgb(191, 238, 191), rgb(249, 225, 225));
}
table{
        border-collapse: collapse;
        text-align: center;
        width: 100%;
    }
tr{
    border-bottom: 1px solid black;
}
th{
    background: linear-gradient(rgb(234, 249, 234),rgb(159, 194, 159));
    padding: 10px 0;
}
td{
    padding: 7px;
}

.circle{
    position: relative;
    top:30px;
    width: 280px;
    height: 280px;
    border: 3px solid black;
    border-radius: 50%;
    margin: auto;
    background: repeating-radial-gradient(rgb(248, 226, 226),rgb(165, 221, 254)); 
}

.block{
    width: 80px;
    height: 50px;
    margin:20px;
    background: radial-gradient(rgb(227, 241, 207),rgb(209, 249, 196));
    text-align: center;
    padding: 15px;
    font-weight: 600;
}

.dinerA{
    position: absolute;
    top: -80px;
    left: 75px;
}
.dinerB{
    position: absolute;
    top:20px;
    left: 250px;
}
.dinerC{
    position: absolute;
    bottom: -20px;
    left: 230px;
}
.dinerD{
    position: absolute;
    bottom: -20px;
    right: 230px;
}
.dinerE{
    position: absolute;
    top: 20px;
    right: 250px;
}
.result{
    position: absolute;
    top:90px;
    left:80px;
    width: fit-content;
    background: rgb(82, 139, 182) !important;
    color: aliceblue;

}

@media(min-width:1000px){
    .circle{
        top: 100px;
    }
}

</style>


