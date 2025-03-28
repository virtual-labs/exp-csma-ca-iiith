## Carrier Sense Multiple Access with Collision Avoidance (CSMA/CA) - Overview
### What is CSMA/CA?
CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance) is a network protocol used in wireless communication to avoid data collisions. It is commonly used in Wi-Fi networks (IEEE 802.11) since, unlike wired networks, wireless devices cannot simultaneously send and listen for collisions (as in CSMA/CD used in Ethernet).

## How Does CSMA/CA Work?
CSMA/CA follows these key steps:

1. Listen to the Channel (Carrier Sensing): Before transmitting, the device checks whether the channel is free.

2. If Channel is Busy → Backoff Mechanism: If another device is transmitting, the sender waits for a random backoff time before checking again.

3. If Channel is Free → Request to Send (RTS) & Clear to Send (CTS) (Optional): Some networks use RTS/CTS to prevent collisions in hidden node scenarios.

4. Transmit Data: The sender transmits the data.

5. Receive Acknowledgment (ACK): If the receiver successfully gets the data, it sends an ACK. If no ACK is received, the sender assumes a collision happened and retries after a backoff.

## Why Use CSMA/CA Instead of CSMA/CD?
In wireless networks, CSMA/CD (Collision Detection) doesn’t work effectively because a device cannot listen while transmitting.

CSMA/CA prevents collisions instead of detecting them, reducing the need for retransmissions.

Key Features of CSMA/CA
Avoids collisions rather than detecting them

Uses a backoff timer to reduce simultaneous transmissions

Can include RTS/CTS handshaking to improve transmission reliability

Used in Wi-Fi networks (802.11) and wireless communication