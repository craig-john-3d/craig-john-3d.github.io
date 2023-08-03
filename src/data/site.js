import APP from "../js/app.js";

import oasis1 from "../assets/projects/oasis/01.jpg"
import oasis2 from "../assets/projects/oasis/02.jpg"
import oasis3 from "../assets/projects/oasis/03.jpg"
import oasis4 from "../assets/projects/oasis/04.jpg"

import fant1 from "../assets/projects/fantascapes/01.jpg"
import fant2 from "../assets/projects/fantascapes/01.png"
import fant3 from "../assets/projects/fantascapes/02.png"
import fant4 from "../assets/projects/fantascapes/03.png"
import fant5 from "../assets/projects/fantascapes/04.png"




APP.data = {
    "title": "Craig John",
    "page-title":"Craig John | Portfolio",
    "home":{
        "title": "Craig John",
        "page-title": "Craig John | Portfolio",
        "subtitle": "3D Artist | Web Designer",
        "link": "home",
        
    },
    "webgl":{
        "title": "...",
        "page-title": "...",
    },
    "about":{
        "title": "About",
        "page-title": "Craig John | About",
    },
    "projects": {
        "title": "projects",
        "page-title": "Craig John | Projects",
        "subtitle": "University Projects | Work Projects",
        "list": [
            {
                "page-title": "Craig John | Chasing Trains",
                "title": "Chasing Trains",
                "subtitle":"HTML | CSS | JavaScript",
                "thumbnail": "assets/projects/chasing-trains/ct-thumbnail.jpg",
                "link": "projects/chasingtrains",
                "description": "<p>'Chasing Trains' is an interactive story experience that follows a young teen grappling with the trials of adolescence. After waking up in an unfamiliar mindscape with no memory of the past 24 hours, the protagonist, Micah, is in a race against time to escape the mysterious beast haunting the realm. Along with their family dog Beef, they must untangle the mystery while coming to terms with the end of their childhood.</p><br>",
                "role": "Lead Developer",
                "dev": "<p>As the Lead Developer for the project 'Chasing Trains' within my Collaborative Studio class at Penn State, I played a crucial role in bringing our vision of a narrative-driven game to life. Our project delved into the 2008 financial crisis, drawing inspiration from personal experiences to create a captivating coming-of-age narrative within the given timeframe.</p><br><p>My responsibilities encompassed translating the game concept into a functional and engaging web-based experience. Leveraging my expertise in HTML, CSS, and JavaScript, I coded the game to ensure seamless playability on any web browser. Through my technical prowess, I designed an interactive environment where players navigate through various settings, seeking out corrupted 'memory items' as they progress</p><br><p>To enhance the immersive storytelling, I employed JavaScript to create dynamic revealing text boxes, allowing players to uncover hidden details and immerse themselves further in the narrative. Additionally, I developed a sophisticated system using JavaScript that adjusted character sprites based on their emotions during dialogue exchanges, heightening the emotional impact of the game. To create a visually captivating experience, I utilized Three.js to integrate 2D painted environments into a 3D space, providing the illusion of depth and enhancing the overall immersion of each level. This attention to detail added layers of richness to the player's journey. Furthermore, I integrated GSAP (GreenSock Animation Platform) to implement dynamic animations, ensuring fluid transitions between scenes and adding visual polish to the game. The inclusion of immersive sound effects and an original score, achieved through Howler.js, further heightened the player's engagement, creating a captivating and memorable audiovisual experience.</p><p><br><a href='https://youtu.be/nb0_vh99mE8'>Full Playthrough</a></p><br>",
                "feature": "video",
                "id": "841020128"

            },
            {
                "page-title": "Craig John | Crosswalk",
                "title": "Crosswalk",
                "subtitle": "Blender | Premiere Pro",
                "thumbnail": "assets/projects/crosswalk/crosswalk-thumbnail.jpg",
                "link": "projects/crosswalk",
                "description": "<p>'Crosswalk' is an animated short film that follows a man, anxious about getting to work on time, who stands at a crosswalk and imagines increasingly absurd scenarios that would make him late for work.</p><br>",
                "role": "Director",
                "dev": "<p>This film is a personal story that explores themes of anxiety and the unpredictable nature of life. By highlighting the character’s mental journey, I aimed to emphasize the ways in which our thoughts can sometime spiral out of control, leading to unnecessary stress and anxiety. Through the character’s vivid imagination, I wanted to illustrate how our minds conjure up unlikely scenarios, further fueling our fears and worries. Despite the serious subject matter, I wanted to convey this in a light and comedic way. By finding humor in the character’s struggles, I hoped to provide a moment of levity and relief to those who may be grappling with similar feelings. Ultimately, my goal was to create a piece that was both entertaining and thought-provoking, encouraging viewers to laugh at the outrageous scenarios while still acknowledging the seriousness of anxiety.</p><br><p>'Crosswalk' was created as the final for my 'Animation Studio' class taught by John Summerson in my junior year at Penn State. To create this short, I worked in Blender to design and model a character that fit the 'everyday man'. I wanted the film to have a painterly look to emphasize the dreamlike quality of the scenarios, utilizing shaders to accomplish this. The protagonist's clothes change every few frames in order to illustrate the burden of anxiety and highlight his rapid flowing thoughts. Moreover, many of the exteriors feature hand-drawn details using Blender's Grease Pencil tool.</p>",
                "feature": "video",
                "id": "841008615",
            },
            {
                "page-title": "Craig John | Oasis",
                "title": "Oasis",
                "subtitle": "Blender | Photoshop",
                "link": "projects/oasis",
                "description": "<p>'Oasis' is a speculative design project aimed at imagining sustainable housing to combat desertification. Desertification is the process in which once fertile land becomes a desert. This is typically caused by poor agriculture, deforestation, and drought. 40% of the Earth's surface is susceptible to this type of land degradation, but not many are aware of this.</p><br>",
                "role": "Designer",
                "dev": "<p>'Oasis' was my first attempt at doing architectural visualization with a heavy emphasis on research. I used Blender to design and model the house with nature in mind, taking inspiration from natural mushroom growth and the Dracaena Cinnabari tree. It features speculative elements such as a geometric patterned roof in order to eliminate heat gain, as well as tree-like supports that trap heat. I further textured the house to make it look as if it were built with 3D printed materials, ultimately fostering a sustainable environment. I created my own and modified existing nature assets based off of the Sonoran Desert in Arizona, employing the use of the Geo-Scatter addon to achieve this.</p>",
                "feature": "gallery",
                "images": [
                    {
                        src: oasis1,
                        alt: "OASIS Render 01",
                    },
                    {
                        src: oasis2,
                        alt: "OASIS Render 02",
                    },
                    {
                        src: oasis3,
                        alt: "OASIS Render 03",
                    },
                    {
                        src: oasis4,
                        alt: "OASIS Render 04",
                    }
                ]
            },
            {
                "page-title": "Craig John | Rebirth",
                "title": "Rebirth",
                "subtitle": "Blender | Adobe Premiere",
                "link": "projects/rebirth",
                "description": "<p>'Rebirth' is an animated short film that tells the life cycle of a cherry blossom tree, from blossoming, to its eventual death.</p><br>",
                "role": "Director",
                "dev": "This project was created for my '3D Studio' class taught by Michael Collins during my sophomore year at Penn State. The original goal of the project was to create a journey. As I was not familiar with character design, I wanted to base this journey in nature, telling a short story using visuals alone. Every asset was meticiously created in Blender, taking inspiration from real life cherry blossom trees and their blossoming patterns.</p>",
                "feature": "video",
                "id": "703997273"
            },
            {
                "page-title": "Craig John | Fantascapes",
                "title": "Fantascapes",
                "subtitle": "Blender | Photoshop | InDesign",
                "link": "projects/fantascapes",
                "role": "Designer | Author",
                "description": "<p>'Fantascapes: Excerpts From Distant Lands' is a short book that includes 3D renderings of fantastical landscapes. Each landscape is accompanied by an excerpt from a fictional, in-universe book that gives context and a story to the landscape.</p><br>",
                "dev": "</p>Fantasy is one of my favorite genres, so I was eager to create my own fantasy world. It was important that each landscape felt distinct from one another, but could still exist within one big world; I wanted each one to have a different visual tone. The visuals of the landscapes were inspired by various fantastical worlds, including 'The Lord of the Rings' and 'The Witcher'.</p><br><p>Taking inspiration from Frank Herbert's acclaimed science fiction novel, 'Dune', I incorporated a similar approach in 'Fantascapes'. Like 'Dune', where each chapter begins with a short passage from a book within the story, my book features accompanying excerpts that provide context and background for each landscape. This idea works particularly well for my book, offering readers a glimpse into the world's richness despite its concise nature. With each passage, accompanied by its corresponding landscape, a distinct tone emerges, showcasing the diverse inhabitants and locations within this captivating realm.</p>",
                "feature": "gallery",
                "images": [
                    {
                        src: fant1,
                        alt: "The Wizard's House",
                    },
                    {
                        src: fant2,
                        alt: "The Floating Islands",
                    },
                    {
                        src: fant3,
                        alt: "The Gate",
                    },
                    {
                        src: fant4,
                        alt: "The Tree",
                    },
                    {
                        src: fant5,
                        alt: "The Willow",
                    }
                ]

            }
        ]
    }   
}