"use client";
import Link from "next/link";
import Image from "next/image";
import "../styles/globals.css";

//import images
import install_pi_os from "public/wireguard/install_pi_os.png";
import install_pi_os2 from "public/wireguard/install_pi_os2.png";
import img6 from "public/wireguard/20240313181245.png";
import img9 from "public/wireguard/20240313181452.png";
import img10 from "public/wireguard/20240313181850.png";
import img11 from "public/wireguard/20240313182127.png";
import img12 from "public/wireguard/20240313182513.png";
import img13 from "public/wireguard/20240313182656.png";
import img14 from "public/wireguard/20240313182859.png";
import img15 from "public/wireguard/20240313183149.png";
import img17 from "public/wireguard/20240313201900.png";
import img18 from "public/wireguard/20240313234057.png";
import img19 from "public/wireguard/20240314002005.png";
import img20 from "public/wireguard/20240314005943.png";

export default function PiPVN() {
  return (
    <>
      <main className="mt-50">
        <h1 className="blog-title">Creating a Wireguard VPN using PiVPN</h1>
        <h1 id="overview" className="blog-h1">
          Overview
        </h1>
        <p>
          This summer, I will be watching the Indy500 from Lili's Aunt &amp;
          Uncles house near Indianapolis. The problem is, their house is too
          close to the race and are in the blackout zone which is supposed to
          encourage Indy locals to watch the race in person. To get around this,
          I will be streaming the race from my computer at home which is outside
          of the blackout zone and stream that feed to my laptop in
          Indianapolis. To complete This, I will need to setup my own VPN using
          the Raspberry Pi I finally have a use for and then using Wireguard to
          tunnel the traffic to and from my home network and my mobile devices.
        </p>
        <br />
        <h2 id="quicklinks" className="blog-h2">
          QuickLinks
        </h2>
        <ul className="blog-ul">
          <li className="blog-quicklink">
            <Link href="#tutorial-im-following">Tutorial I'm Following</Link>
          </li>
          <li className="blog-quicklink">
            <Link href="#materials-and-software">Materials and Software</Link>
          </li>
          <li className="blog-quicklink">
            <Link href="#step-by-step">Step by step</Link>
          </li>
          <li className="blog-quicklink">
            <Link href="#installing-and-updating-raspberry-pi-os">
              Installing and updating Raspberry Pi OS
            </Link>
          </li>
          <li className="blog-quicklink">
            <Link href="#installing-pivpn-and-wireguard">
              Installing PiVPN and Wireguard
            </Link>
          </li>
          <li className="blog-quicklink">
            <Link href="#network-port-forwarding">Network Port Forwarding</Link>
          </li>
          <li className="blog-quicklink">
            <Link href="#network-change">Network Change</Link>
          </li>
          <li className="blog-quicklink">
            <Link href="#setting-static-ip-address">
              Setting static ip address
            </Link>{" "}
            -{" "}
          </li>
          <li className="blog-quicklink">
            <Link href="#port-forwarding">Port Forwarding</Link> -{" "}
          </li>
          <li className="blog-quicklink">
            <Link href="#adding-client--profile-to-vpn-server">
              Adding client / Profile to VPN server
            </Link>
          </li>
          <li className="blog-quicklink">
            <Link href="#performance-and-conclusion">
              Performance and Conclusion
            </Link>
          </li>
        </ul>
        <br />
        <h1 className="blog-h1" id="tutorial-im-following">
          Tutorial I'm Following
        </h1>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/am55fi_Czl8?si=ysEUaSbMIyFdk0je"
          title="YouTube video player"
          //frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          //allowfullscreen
        ></iframe>
        <br />
        <h1 className="blog-h1" id="materials-and-software">
          Materials and Software
        </h1>
        <ul className="blog-ul">
          <li>Raspberry Pi</li>
          <li>Updated Pi OS</li>
          <li>PiVPN</li>
          <li>Wireguard</li>
          <li>Router Software to</li>
        </ul>
        <br />
        <h1 className="blog-h1" id="step-by-step">
          Step by step
        </h1>
        <h2 className="blog-h2" id="installing-and-updating-raspberry-pi-os">
          Installing and updating Raspberry Pi OS
        </h2>
        <p>
          I'm installing the lite version via the Raspberry Pi Imager, which is
          without a desktop environment because :
        </p>
        <ol className="blog-ol">
          <li>
            it doesn't take as long to download the image file and flash it onto
            the SD card compared to the full version
          </li>
          <li>
            More terminal practice. Real programmers don't need a desktop
            environment (strong arm emoji)
          </li>
        </ol>
        <div className="blog-img">
          <Image
            src={install_pi_os}
            alt="Screenshot of Raspberry Pi Imager writing to disk"
            width={1360}
            height={914}
          />
        </div>
        <br />
        <p>
          After that, I realized that I need to connect to wifi. How do you do
          that from a terminal? Oh change the config file? okay, so how do i
          check if it worked? After running some commands and trying a couple
          things, I gave up after realizing that Most of the tutorials I'm
          looking at use the GUI, so I'm reinstalling PIOS! With a desktop
          environment because:
        </p>
        <ol>
          <li>
            This is already a challenge and I don't need to make it
            unnecessarily hard on myself and
          </li>
          <li>
            Real programmers use the tools they already know, like a desktop
            environment
          </li>
        </ol>
        <Image
          className="blog-img"
          src={install_pi_os2}
          alt="Screenshot of Raspberry Pi Imager writing to disk"
          width={1360}
          height={914}
        />
        <p>
          After that, I used PuTTY to ssh into the raspberry pi. This is useful
          for pasting download commands during the PiVPN and Wireguard tutorials
          <Image
            className="blog-img"
            src={img6}
            alt=""
            width={825}
            height={521}
          />
        </p>
        <br />
        <h2 className="blog-h2" id="installing-pivpn-and-wireguard">
          Installing PiVPN and Wireguard
        </h2>
        <p>
          Running the following command to install{" "}
          <a href="https://www.pivpn.io/">PiVPN</a>
        </p>
        <pre>
          <code className="language-Bash">
            curl -L https://install.pivpn.io | bash
          </code>
        </pre>
        <Image
          className="blog-img"
          src={img9}
          alt=""
          width={825}
          height={521}
        />
        <p>After a couple of minutes I get this user interface :</p>
        <Image
          className="blog-img"
          src={img10}
          alt=""
          width={858}
          height={764}
        />
        <p>Options I Chose during setup:</p>
        <ul>
          <li>
            <p>Block IPv6 Leaks</p>
          </li>
          <li>
            <p>Use static IP instead of DHCP with these settings :</p>
            <Image
              className="blog-img"
              src={img11}
              alt=""
              width={825}
              height={521}
            />
            <p>The raspberry pi restarting: </p>
            <Image
              className="blog-img"
              src={img17}
              alt=""
              width={864}
              height={652}
            />
          </li>
          <li>
            <p>
              Using Wireguard instad of OpenVPN because it's newer and much more
              compact than OpenVPN
            </p>
            <Image
              className="blog-img"
              src={img12}
              alt=""
              width={825}
              height={521}
            />
          </li>
          <li>
            <p>Assign the standard wireguard port : 51820</p>
            <Image
              className="blog-img"
              src={img13}
              alt=""
              width={825}
              height={521}
            />
          </li>
          <li>
            <p>
              Select OpenDNS as a DNS provider and use my public IP address to
              connect
            </p>
          </li>
        </ul>
        <Image
          className="blog-img"
          src={img14}
          alt=""
          width={825}
          height={521}
        />
        <p>Then I reboot the system: </p>
        <Image
          className="blog-img"
          src={img15}
          alt=""
          width={825}
          height={521}
        />
        <br />
        <h2 className="blog-h2" id="network-port-forwarding">
          Network Port Forwarding
        </h2>
        <p>
          Because we use TP-Link's Deco mesh network system at home, I have to
          configure everything inside of their app.
        </p>
        <p>
          Here I tried to setup port forwarding for a WireGuard server, but the
          save button was not working :
        </p>
        <p>[screenshot of the issue]</p>
        <p>
          First I tried uninstalling and reinstalling the DECO app on my phone.
          That didn't work
        </p>
        <br />
        <h2 className="blog-h2" id="network-change">
          Network Change
        </h2>
        <p>
          We have two networks at my house, and I just changed all of my devices
          over to that one. Before I was on a mesh wifi system that was piggy
          backing off of the network I'm currently on. The TP link app wouldn't
          let me port forward for some unknown reason, so I've changed nerworks
          in hope that this one works better
        </p>
        <br />
        <h2 className="blog-h2" id="setting-static-ip-address">
          Setting static ip address
        </h2>
        <h5 className="blog-h5" id="-before-setting-static-ip-address-">
          ~~ Before setting static ip address ~~
        </h5>
        <Image src={img18} alt="" width={832} height={910} />
        <h5 className="blog-h5" id="-after-setting-static-ip-address-">
          ~~ After setting static ip address ~~
        </h5>
        <Image src={img19} alt="" width={828} height={857} />
        <h5 className="blog-h5" id="-what-the-eero-app-looks-like-">
          ~~ What the eero app looks like ~~
        </h5>
        <br />
        <h2 className="blog-h2" id="port-forwarding">
          Port Forwarding
        </h2>
        <p>Open the port 51820 for wireguard to connect to :</p>
        <h5 className="blog-h5" id="-what-the-eero-app-looks-like--1">
          ~~ What the eero app looks like ~~
        </h5>
        <br />
        <h2 className="blog-h2" id="adding-client--profile-to-vpn-server">
          Adding client / Profile to VPN server
        </h2>
        <p>To add a client to the server use the command :</p>
        <pre>
          <code className="language-Bash">pivpn add</code>
        </pre>

        <p>
          and then give a name to the client. This creates a client that
          wireguard assigns to a device.
        </p>
        <br />
        <h2 className="blog-h2" id="setting-up-client">
          Setting Up Client
        </h2>
        <h3 className="blog-h3" id="phone--tablet">
          Phone / Tablet
        </h3>
        <p>To add a mobile device, you can create a QR code using :</p>
        <pre>
          <code className="language-Bash">pivpn -qr</code>
        </pre>
        <p>
          and then selecting the client you would like to assign that device to.
          Here's what it looks like on my WireGuard app after scanning the QR
          code:
        </p>
        <br />
        <h3 className="blog-h3" id="laptop--desktop">
          Laptop / Desktop
        </h3>
        <p>
          For my laptop I first added a client / profile (see above) named
          alec-laptop. I then copied the config file to a usb thumb drive
        </p>
        <p>[Picture of the pi + usb]</p>
        <p>
          Next, I downloaded the wireguard client software from wireguards
          website, installed the WireGuard program, and configured the client
          from the config file I copied onto the usb thumb drive. After
          connecting to the VPN my laptop looks like this :
        </p>
        <Image src={img20} alt="" width={825} height={647} />
        <br />
        <h1 className="blog-h1" id="performance-and-conclusion">
          Performance and Conclusion
        </h1>
        <p>
          Overall, I thought this project was super fun. I learned a lot about
          static IP addresses and port forwarding, because this was my first
          time needing to do either of those things :) It went well! Very few
          hiccups. Really, the only thing that went wrong was not being able to
          log onto the eero app for a while and thus not being able to reserve
          any IP addresses or assign those IP addresses to any ports.
        </p>
        <p>
          One of the first things I tried doing was connecting my windows
          desktop to the PiVPN as well to see if I could remote into my desktop
          from my laptop while they are on different networks. After downloading
          and configuring Wire Guard on my desktop, I Used Windows 10 and 11s
          built in program Remote Desktop to run my test. And it totally worked!
        </p>
        <p>
          I would like to add that I still need to test this on a wifi network
          outside of my house.
        </p>
        <p>
          Performance was lackluster at best. With both the Raspberry Pi and my
          laptop on wifi, I had a very laggy time trying to playback a formula
          one race on YouTube. You can see the speed test results here : [Coming
          soon]
        </p>
        <p>
          It is clear that I am going to have to increase performance in order
          to have an enjoyable experience live streaming the Indy 500 from
          halfway across the state. I have two main suspects right now.
        </p>
        <ol>
          <li>
            Network performance caused by using a wireless connection to the
            network or
          </li>
          <li>The sad performance of my Raspberry pi.</li>
        </ol>
        <p>
          It could be either one of these, I suspect that its both of them.
          First I tried using a wired connection on my Pi, but encountered
          errors before I could run a speed test. First, the Raspberry Pi came
          up on my eero app as a different IP address that the one I reserved to
          it and with a different host name. No problem, I just deleted the old
          IP reservation and recreated it with the &quot;new&quot; device on my
          network. After that, I was able to connect to the PiVPN from my
          laptop, but I could not connect to any websites afterward.
        </p>
        <p>
          Next, I need a beefier computer. Luckily, I have a friend named Alex
          who has a mountain of servers and he says he'll give me one. So, I
          think that I am going to take him up on that offer and then try to get
          WireGuard up and running on that machine.
        </p>
      </main>
    </>
  );
}
