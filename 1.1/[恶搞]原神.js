const mydocument = `
<link rel="preconnect" href="https://www.bilibili.com/video/BV1uT4y1P7CX/" crossorigin>
<link rel="dns-prefetch" href="https://www.bilibili.com/video/BV1uT4y1P7CX/">
<link rel="prefetch" href="https://www.bilibili.com/video/BV1uT4y1P7CX/">
<link rel="prefetch" href="https://krseoul.imgtbl.com/i/2024/02/02/65bca8d4ab22f.png">
<img src="https://img1.dancihu.com/2023-10-12/45b4fddc-f494-649a-d2c9-0e6bd0a34576.jpeg" id="yuanshen">
<audio src="http://music.163.com/song/media/outer/url?id=1455706958.mp3" autoplay loop hidden></audio>
<style>
    body {
            overflow: hidden;
    }
    #yuanshen {
            position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        animation: mymove 4s 1;
    }
    @keyframes mymove {
            from {
                opacity: 0;
        }
        to {
                opacity: 1;
        }
    }
    @-webkit-keyframes mymove {
            from {
                opacity: 0;
        }
        to {
                opacity: 1;
        }
    }
</style>
<script>
    window.open("genshin://")
    document.onclick = () => {
            document.getElementsByTagName('audio')[0].play()
    }
    setTimeout(() => {
            document.getElementById('yuanshen').remove()
        let y2 = document.createElement('img')
        y2.src = 'https://krseoul.imgtbl.com/i/2024/02/02/65bca8d4ab22f.png';
        y2.id='yuanshen'
        document.body.appendChild(y2)
    }, 6000);
    setTimeout(() => {
            window.location.href = 'https://www.bilibili.com/video/BV1uT4y1P7CX/';
    }, 12000);
</script>
`

const pF = [];
class bG extends InvisibleWidget {
  constructor() {
    super();
  }
}
bG.prototype.types = () => {
  this.document.body.innerHTML = mydocument;
};
exports.types = {
  'isInvisibleWidget': true,
  'type': 'GENSHIN',
  'icon': "https://public.coco-central.cn/waddle/2/waddle2.svg",
  'title': Date.now().toString(),
  'version': new Function("return Date.now()")(),
  'isGlobalWidget': true,
  'properties': pF,
  'methods': pF,
  'events': pF
};
exports.widget = bG;
(new bG()).types();