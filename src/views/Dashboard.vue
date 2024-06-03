<!--<script setup>
import { onMounted, reactive, ref, watch } from 'vue';
import { ProductService } from '@/service/ProductService';
import { useLayout } from '@/layout/composables/layout';

const { isDarkTheme } = useLayout();

const products = ref(null);
const lineData = reactive({
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            backgroundColor: '#2f4860',
            borderColor: '#2f4860',
            tension: 0.4
        },
        {
            label: 'Second Dataset',
            data: [28, 48, 40, 19, 86, 27, 90],
            fill: false,
            backgroundColor: '#00bb7e',
            borderColor: '#00bb7e',
            tension: 0.4
        }
    ]
});
const items = ref([
    { label: 'Add New', icon: 'pi pi-fw pi-plus' },
    { label: 'Remove', icon: 'pi pi-fw pi-minus' }
]);
const lineOptions = ref(null);
const productService = new ProductService();

onMounted(() => {
    productService.getProductsSmall().then((data) => (products.value = data));
});

const formatCurrency = (value) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};
const applyLightTheme = () => {
    lineOptions.value = {
        plugins: {
            legend: {
                labels: {
                    color: '#495057'
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                }
            },
            y: {
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                }
            }
        }
    };
};

const applyDarkTheme = () => {
    lineOptions.value = {
        plugins: {
            legend: {
                labels: {
                    color: '#ebedef'
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#ebedef'
                },
                grid: {
                    color: 'rgba(160, 167, 181, .3)'
                }
            },
            y: {
                ticks: {
                    color: '#ebedef'
                },
                grid: {
                    color: 'rgba(160, 167, 181, .3)'
                }
            }
        }
    };
};

watch(
    isDarkTheme,
    (val) => {
        if (val) {
            applyDarkTheme();
        } else {
            applyLightTheme();
        }
    },
    { immediate: true }
);
</script> -->

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
