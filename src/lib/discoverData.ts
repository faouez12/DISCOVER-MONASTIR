export interface DiscoverItem {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    accentColor: string; // Tailored glow/soul color
    tags: string[];
    category: "attractions" | "destinations" | "secrets" | "crafts";
    facts: { label: string; value: string }[];
    story: string; // The "long read" poetic content
    sensory?: {
        scent: string;
        sound: string;
        touch: string;
        colors: string[];
    };
    kit?: {
        footwear: string;
        photo: string;
        hour: string;
    };
    quote?: {
        text: string;
        author: string;
    };
    chronology?: {
        year: string;
        title: string;
        description: string;
    }[];
    insider?: {
        title: string;
        detail: string;
    }[];
    seasons?: {
        spring: string;
        summer: string;
        autumn: string;
        winter: string;
    };
    pledge?: string;
    recommendations: string[]; // IDs of other items
}

export const discoverData: Record<string, DiscoverItem> = {
    // --- ATTRACTIONS (The 9 Stories) ---
    "ribat-dawn-patrol": {
        id: "ribat-dawn-patrol",
        title: "Ribat Dawn Patrol",
        subtitle: "Guardian of the Mediterranean",
        description: "Witness the first light of day touching the ancient sandstone of North Africa's most majestic fortress.",
        image: "/attractions/Ribat Dawn Patrol.webp",
        accentColor: "#FBBF24",
        tags: ["History", "Architecture", "Sunrise"],
        category: "attractions",
        facts: [
            { label: "Built In", value: "796 AD" },
            { label: "Significance", value: "Oldest Ribat in Maghreb" },
            { label: "Vibe", value: "Spiritual & Epochal" }
        ],
        story: "The Ribat of Monastir has stood as a bastion of faith and defense for over a millennium. As the sun rises over the horizon, its golden rays illuminate the intricate masonry, revealing the soul of a city that never surrendered. Walking through its corridors is like leafing through the pages of an epic chronicle.\n\nOriginally built to house student-warriors who defended the coast, the structure is a masterpiece of early Islamic architecture. Every winding staircase and shadowed alcove tells a story of watchers who kept their eyes on the Mediterranean for centuries. Today, it remains one of the most iconic film locations in the world, having stood in for ancient Jerusalem in world-class cinema.\n\nTo visit the Ribat at dawn is to witness a silent dialogue between the stone and the light. The air is still, the world is quiet, and for a brief moment, the 8th century feels as close as your own heartbeat.",
        sensory: {
            scent: "Ancient Dust & Salt Air",
            sound: "Distant Adhan & Seagulls",
            touch: "Rough, Sun-Warmed Sandstone",
            colors: ["#FBBF24", "#92400E", "#FDE047"]
        },
        kit: {
            footwear: "Comfortable Sneakers (for many stairs)",
            photo: "The view from the Nador Tower",
            hour: "6:15 AM for the blue light"
        },
        quote: {
            text: "The stones don't speak, they vibrate with the history of a thousand prayers.",
            author: "Local Citadel Guardian"
        },
        chronology: [
            {
                year: "796 AD",
                title: "The Cornerstone",
                description: "Built by Harthama ibn A'yan, it became the first and most important defensive bastion along the North African coast."
            },
            {
                year: "9th Century",
                title: "The Spiritual Expansion",
                description: "Transformed from a military fort into a center for Sufi learning, where marabouts studied the sea and the soul."
            },
            {
                year: "1977",
                title: "Cinematic Immortality",
                description: "The Ribat's timeless sandstone served as the perfect backdrop for 'Life of Brian', etching its image into world pop culture."
            },
            {
                year: "Today",
                title: "The Living Museum",
                description: "A UNESCO-worthy monument that continues to guard the city, now acting as a bridge between Tunisia's past and future."
            }
        ],
        insider: [
            {
                title: "The Sunset Stair",
                detail: "Climb the Nador tower exactly 20 minutes before sunset. The way the light hits the Bourguiba Mausoleum from there is unmatched."
            },
            {
                title: "Hidden Acoustics",
                detail: "Stand in the center of the inner prayer hall and whisper. The 8th-century architecture carries your voice to the corners of the room."
            },
            {
                title: "Local Entrance",
                detail: "If the main gate is crowded, wait by the side arches near the sea cemetery. It's the quietest way to appreciate the scale of the outer walls."
            },
            {
                title: "Filming Secrets",
                detail: "Look for the small brass plaque in the lower courtyard which points to the exact spot where famous movie scenes were choreographed."
            }
        ],
        seasons: {
            spring: "The walls bloom with wild jasmine and the air is crisp, making the climb to the Nador Tower effortless.",
            summer: "The stone absorbs the intense Mediterranean sun, creating a heat that feels ancient and powerful.",
            autumn: "Golden hour lasts longer, casting dramatic shadows through the arches as the tourists begin to fade.",
            winter: "The Ribat stands defiant against the grey, crashing sea, offering a quiet, spiritual solitude."
        },
        pledge: "I have walked the stones of the Ribat, I have witnessed the dawn patrol, I am now a guardian of Monastir's eternal memory.",
        recommendations: ["mausoleum-legacy", "medina-treasure-hunt"]
    },
    "mausoleum-legacy": {
        id: "mausoleum-legacy",
        title: "Bourguiba's Golden Legacy",
        subtitle: "A Monument to Leadership",
        description: "A jewel of modern Islamic architecture dedicated to the architect of modern Tunisia.",
        image: "/attractions/Bourguibas Golden Legacy.webp",
        accentColor: "#FBBF24",
        tags: ["Monuments", "National Hero", "Beauty"],
        category: "attractions",
        facts: [
            { label: "Feature", value: "Golden Dome" },
            { label: "Towers", value: "25m Minarets" },
            { label: "Atmosphere", value: "Respectful Grandeur" }
        ],
        story: "With its shimmering golden dome and sky-piercing minarets, the Mausoleum of Habib Bourguiba is more than a tomb—it is a masterpiece. Built with the finest marble and decorated with intricate mosaics, it reflects the light of Monastir's pride.\n\nDesigned by the architect Olivier-Clément Cacoub, the structure is a living tribute to the 'Supreme Combatant' who led Tunisia to independence. The architecture is a bridge between the traditional Islamic ribat-style and the modern aesthetic of a new nation. Walking through the grand gates is like walking through a portal of pure, white marble and national reverence.\n\nInside, the silence is heavy with respect. The light filters through the stained glass, reflecting off the polished floors like a prayer carved in stone. It is a place of profound peace, where the history of a man and the identity of a people become one.",
        sensory: {
            scent: "Polished Marble & Fresh Flowers",
            sound: "Echoes of Soft Footsteps",
            touch: "Smooth, Ice-Cold Stone",
            colors: ["#FBBF24", "#FFFFFF", "#1E40AF"]
        },
        kit: {
            footwear: "Easy-to-remove shoes (for respect)",
            photo: "The symmetry of the main corridor",
            hour: "10:00 AM when the light hits the dome"
        },
        quote: {
            text: "He didn't just build a city; he built the dignity of a nation.",
            author: "Elder of the Sahel"
        },
        chronology: [
            {
                year: "1963",
                title: "The First Stone",
                description: "Construction begins on what would become the most symbolic monument of modern Tunisia."
            },
            {
                year: "1980",
                title: "Architectural Peak",
                description: "The golden dome and minarets are completed, creating the iconic silhouette of the Monastir skyline."
            },
            {
                year: "2000",
                title: "The Eternal Rest",
                description: "Habib Bourguiba is laid to rest in the heart of the mausoleum he envisioned."
            }
        ],
        insider: [
            {
                title: "The Symmetry Secret",
                detail: "Stand exactly in the center of the outer courtyard. The two minarets line up perfectly with the sunset during the spring equinox."
            },
            {
                title: "The Tiny Museum",
                detail: "Don't miss the small room on the side which holds Bourguiba's personal belongings, including his iconic glasses and desk."
            }
        ],
        seasons: {
            spring: "The surrounding gardens are in full bloom, orange blossoms fill the heavy humid air with sweetness.",
            summer: "The white marble acts as a natural cooling system, providing a literal sanctuary from the Tunisian heat.",
            autumn: "The late afternoon light turns the golden dome into a second sun.",
            winter: "A stark, beautiful contrast between the white stone and the deep grey winter clouds of the coast."
        },
        pledge: "I have stood in the shadow of the Golden Dome, I have honored the architect of freedom, I am a carrier of Tunisia's legacy.",
        recommendations: ["ribat-dawn-patrol", "museum-museum"]
    },
    "marina-twilight-escape": {
        id: "marina-twilight-escape",
        title: "Marina Twilight Escape",
        subtitle: "Where Elegance Meets the Sea",
        description: "Sip jasmine tea as the yachts sway under the lavender skies of the Mediterranean evening.",
        image: "/attractions/Marina Twilight Escape.webp",
        accentColor: "#22D3EE",
        tags: ["Leisure", "Placid", "Nightlife"],
        category: "attractions",
        facts: [
            { label: "Lifestyle", value: "Luxury Waterfront" },
            { label: "Activity", value: "Sunset Dining" },
            { label: "Feel", value: "Sophisticated" }
        ],
        story: "The Marina of Monastir is a symphony of turquoise waters and white sails. As dusk settles, the lights of the cafes begin to twinkle like stars on the water's surface, offering a serene escape for those who seek the finer side of travel.\n\nOriginally a simple fishing port, the Marina (Cap Monastir) has transformed into an elite lifestyle hub. It is the perfect blend of Mediterranean luxury and North African hospitality. Here, the hum of yacht engines mixes with the clink of jasmine tea glasses, creating a vibe that is purely 'Beach Chic'.\n\nWalking the quays at twilight is a rite of passage. The air carries the smell of grilled sea bass and the salt of the deep Mediterranean. It is where the city comes to breathe, to see, and to be seen.",
        sensory: {
            scent: "Jasmine Tea & Sea Salt",
            sound: "Halyards Clanking on Masts",
            touch: "Cool Marine Breeze",
            colors: ["#22D3EE", "#E0F2FE", "#0369A1"]
        },
        kit: {
            footwear: "Stylish Sandals or Boat Shoes",
            photo: "The reflection of the boats at blue hour",
            hour: "7:30 PM for the twilight glow"
        },
        quote: {
            text: "In the Marina, time is measured in waves and conversations, not hours.",
            author: "Local Yacht Captain"
        },
        chronology: [
            {
                year: "1980s",
                title: "The First Sail",
                description: "The Marina is inaugurated, marking Monastir as a premier Mediterranean yachting destination."
            },
            {
                year: "2010",
                title: "Modern Refresh",
                description: "Expansion of the dining and retail sectors turns 'Cap Monastir' into a year-round social landmark."
            }
        ],
        insider: [
            {
                title: "The Quiet Quay",
                detail: "Walk to the very end of the second pier. It's the only spot where you can hear the deep sea meeting the harbor wall in total silence."
            },
            {
                title: "Off-Menu Tea",
                detail: "Ask the waiter at the corner cafe for 'Tea with Pine Nuts' (shai bil bonduq)—it's the authentic captain's choice."
            }
        ],
        seasons: {
            spring: "The best time for a morning coffee while watching the first migratory birds cross the harbor.",
            summer: "The peak of energy. The nightlife hums until 3:00 AM and the water stays warm past midnight.",
            autumn: "A gentle quiet returns. The yachts prepare for winter and the sunsets become deep purple.",
            winter: "The 'Sailor's Solitude'. Great for long, reflective walks and the freshest seafood after a storm."
        },
        pledge: "I have shared a breath with the Mediterranean, I have watched the sails return home, I am part of the harbor's peace.",
        recommendations: ["beach-solitude", "hammam-said-swim"]
    },
    "medina-treasure-hunt": {
        id: "medina-treasure-hunt",
        title: "Medina Treasure Hunt",
        subtitle: "Echoes of Ancient Souks",
        description: "Navigate the labyrinth of white-and-blue alleys to find the hidden heartbeat of traditional Monastir.",
        image: "/attractions/Medina Treasure Hunt.webp",
        accentColor: "#96611F",
        tags: ["Market", "Adventure", "Culture"],
        category: "attractions",
        facts: [
            { label: "Best Time", value: "Late Afternoon" },
            { label: "Focus", value: "Traditional Crafts" },
            { label: "Highlight", value: "Blue Doors" }
        ],
        story: "The Medina is a living museum. Every turn brings a new scent—jasmine, leather, or grilled spices. Behind heavy wooden doors lie centuries of family history, and in the small shops, you'll find treasures that no factory could ever replicate.\n\nTo enter the Medina is to leave the modern world at the gate. The alleys are designed like a labyrinth, not to confuse, but to protect. Here, the shade of the high walls provides a cool sanctuary even in the peak of summer. It is a place where you don't shop for items; you shop for stories.\n\nThe blue and white architecture is the 'DNA' of the Sahel. As you walk deeper, the noise of the city fades, replaced by the rhythmic hammering of copper and the calls of neighbors. It is the beating heart of traditional Monastir.",
        sensory: {
            scent: "Grilled Spices & Raw Leather",
            sound: "Distant Traditional Music & Local Chatter",
            touch: "Smooth Lime-Washed Walls",
            colors: ["#96611F", "#3B82F6", "#F8FAFC"]
        },
        kit: {
            footwear: "Light, Breathable Walking Shoes",
            photo: "The arched 'Bab' (gate) during blue hour",
            hour: "5:00 PM when the souk is most alive"
        },
        quote: {
            text: "You don't get lost in the Medina, you find what you didn't know you were looking for.",
            author: "Third-generation Rug Weaver"
        },
        chronology: [
            {
                year: "Middle Ages",
                title: "The Wall Birth",
                description: "The Medina's foundations are laid, serving as the residential soul of the fortified city."
            },
            {
                year: "17th Century",
                title: "Trade Zenith",
                description: "Monastir's Medina becomes a crucial hub for Mediterranean textile and silk trade."
            },
            {
                year: "Today",
                title: "Cultural Guardian",
                description: "A protected zone that preserves the architecture and crafts of Tunisia's golden era."
            }
        ],
        insider: [
            {
                title: "The Copper Corner",
                detail: "Find the smallest alley near Bab el Gharbi. There's a master who still etches geometric maps onto antique plates."
            },
            {
                title: "Family Courtyards",
                detail: "Look for open doors at mid-day. Most families will let you peek at the stunning internal tile-work of their 100-year-old homes."
            }
        ],
        seasons: {
            spring: "The best time to wander without fatigue. Jasmine hangs from every balcony.",
            summer: "The walls provide natural air conditioning. Go at noon to feel the 'cool stone' effect.",
            autumn: "Harvest time in the nearby groves means the olive oil shops are at their freshest.",
            winter: "A quiet, misty time where the blue doors look even more vibrant against the grey stone."
        },
        pledge: "I have threaded the needle of the Medina's alleys, I have found the hidden heart, I am a keeper of the secret souks.",
        recommendations: ["pottery-mastery", "medina-alleys"]
    },
    "hammam-said-swim": {
        id: "hammam-said-swim",
        title: "Hammam Said Secret Swim",
        subtitle: "The Crystal Lagoon",
        description: "A liquid paradise where the water is so clear it feels like swimming in light itself.",
        image: "/attractions/Hammam Said Secret Swim.webp",
        accentColor: "#0D9488",
        tags: ["Nature", "Swimming", "Pristine"],
        category: "attractions",
        facts: [
            { label: "Clarity", value: "Exceptional" },
            { label: "Activity", value: "Snorkeling" },
            { label: "Vibe", value: "Pure Nature" }
        ],
        story: "There is a quiet corner of the coast where the Mediterranean shows its true diamond colors. Hammam Said is a natural sanctuary, a place to leave the world behind and connect with the raw beauty of the Tunisian shore.\n\nThe water here is legend. Filtered by the white limestone rocks, it achieves a clarity that makes boats look like they are floating in the air. It is not just a place to swim; it is a place to be baptized by the sea.\n\nAncient legends say these waters have healing properties. Whether that's true or not, the feeling of the salt on your skin and the sun on your face in this hidden lagoon is a medicine that no pharmacy can provide.",
        sensory: {
            scent: "Intense Sea Salt & Wild Thyme",
            sound: "Waves Cracking Against Limestone",
            touch: "Soft, Buoyant Water",
            colors: ["#0D9488", "#CCFBF1", "#FFFFFF"]
        },
        kit: {
            footwear: "Water shoes (for the rocky entry)",
            photo: "Looking down from the cliff edge",
            hour: "8:00 AM for the highest water clarity"
        },
        quote: {
            text: "The sea here doesn't just touch you, it talks to you.",
            author: "Local Free-diver"
        },
        chronology: [
            {
                year: "Ancient Times",
                title: "Roman Baths",
                description: "Rumored to be a site of coastal refreshment for Roman officials stationed in nearby Ruspina."
            },
            {
                year: "Today",
                title: "The Secret Sanctuary",
                description: "Remains a protected 'local's only' spot, free from major commercial development."
            }
        ],
        insider: [
            {
                title: "The Underwater Arch",
                detail: "Swim exactly 10 meters out from the central rock. There's a natural arch underwater that glows deep emerald."
            },
            {
                title: "Low Tide Secrets",
                detail: "At low tide, small salt crystals form in the rock pools—the purest natural salt you will ever find."
            }
        ],
        seasons: {
            spring: "Too cold for some, but perfect for the brave who want the lagoon entirely to themselves.",
            summer: "The paradise period. The water is like a warm, sapphire bath.",
            autumn: "The water stays warm while the air cools. The 'Goldilocks' time for long swims.",
            winter: "A site of raw power. Watching the storms hit the rocks from the safety of the upper path is epic."
        },
        pledge: "I have surrendered to the turquoise deep, I have been cleansed by the diamond sea, I am a child of Hammam Said.",
        recommendations: ["ghdamsi-cave", "beach-solitude"]
    },
    "beach-solitude": {
        id: "beach-solitude",
        title: "Beach Solitude",
        subtitle: "The Endless Horizon",
        description: " Miles of golden sand where the only footsteps are your own, and the only music is the tide.",
        image: "/attractions/Beach Solitude.webp",
        accentColor: "#F5F5DC",
        tags: ["Relax", "Romance", "Coast"],
        category: "attractions",
        facts: [
            { label: "Length", value: "5km Wilder Coast" },
            { label: "Crowds", value: "Zero to Few" },
            { label: "Feature", value: "Golden Dunes" }
        ],
        story: "Monastir's wilder beaches are its best-kept secrets. Far from the resort zones, these stretches of sand offer a meditative silence, allowing you to walk for hours with nothing but the rhythm of the waves as your companion.\n\nThis is where the golden dunes meet the turquoise shelf. There are no umbrellas here, only the occasional driftwood and the tracks of sea birds. It is a place of absolute horizontal beauty, where the sky and the sea conspire to make you feel like the only person on earth.\n\nAs you walk, the sand changes from fine white powder to a deep ochre. It is the perfect terrain for a 'Thinking Walk'—a space to untangle the mind and reconnect with the raw elements of the Sahel.",
        sensory: {
            scent: "Dry Sand & Pure Ozone",
            sound: "Rhythmic Deep-Sea Swell",
            touch: "Warm, Sifting Sand",
            colors: ["#F5F5DC", "#FEF08A", "#0EA5E9"]
        },
        kit: {
            footwear: "None (Barefoot is best)",
            photo: "A long shot of footsteps disappearing",
            hour: "Sunset for the 'Double Sun' effect"
        },
        quote: {
            text: "The horizon isn't a line here; it's an invitation.",
            author: "Local Solitude Seeker"
        },
        chronology: [
            {
                year: "Eternal",
                title: "The Shifting Dunes",
                description: "These sands have moved with the wind for millennia, hiding and revealing the coast's secrets."
            }
        ],
        insider: [
            {
                title: "The Shell Bank",
                detail: "Walk 2km north of the main entry. There's a bank of purple shells that only appears after a high tide."
            }
        ],
        seasons: {
            spring: "The sand is cool and the walking is endless.",
            summer: "Too hot for the day, but the midnight walks under the full moon are legendary.",
            autumn: "The best light for photography. The dunes turn a deep, burnt orange.",
            winter: "Powerful and dramatic. Wraps you in the salt-spray of the Mediterranean."
        },
        pledge: "I have left my marks on the golden sand, I have stared into the infinite blue, I am a soul of the shore.",
        recommendations: ["swani-beach", "marina-twilight-escape"]
    },
    "ghdamsi-cave": {
        id: "ghdamsi-cave",
        title: "Ghdamsi Cave Quest",
        subtitle: "The Phoenician Coastal Cave",
        description: "An ancient sea-cave carved by time and tide, holding the whispers of prehistoric sailors.",
        image: "/attractions/Ghdamsi Cave Quest.webp",
        accentColor: "#1E293B",
        tags: ["Exploration", "Geology", "Ancient"],
        category: "attractions",
        facts: [
            { label: "Type", value: "Sea Cave" },
            { label: "Age", value: "Millions of Years" },
            { label: "Activity", value: "Caving/Photos" }
        ],
        story: "The Ghdamsi Cave is a cathedral of stone. For centuries, it has served as a landmark for sailors and a haunt for explorers. The light reflecting off the interior walls creates an ethereal blue glow that must be seen to be believed.\n\nCarved into the limestone cliffs of the Monastir peninsula, this sea cave is a testament to the power of the tides. At certain times of day, the sun hits the water at the entrance and projects dancing ripples onto the ceiling, creating a 'living' interior. It is quiet, cool, and ancient.\n\nExplorers have found prehistoric traces in the surrounding rocks, suggesting that this coast has been a haven for humanity since the dawn of time. Entering the cave feels like entering the memory of the earth itself.",
        sensory: {
            scent: "Cold Stone & Mineral Salt",
            sound: "Dripping Water & Echoing Waves",
            touch: "Damp, Ancient Limestone",
            colors: ["#1E293B", "#334155", "#0F172A"]
        },
        kit: {
            footwear: "Grippy Hiking Boots",
            photo: "Silhouettes against the cave mouth",
            hour: "2:00 PM for the ceiling reflections"
        },
        quote: {
            text: "Even the sea needs a place to rest, and it chose this cave.",
            author: "Monastir Coastal Watcher"
        },
        chronology: [
            {
                year: "Prehistoric",
                title: "The First Shelters",
                description: "Early humans use the coastal caves of Monastir for protection and spiritual rites."
            },
            {
                year: "1500s",
                title: "Pirate Hideout",
                description: "Local legends speak of Barbary pirates using the cave to store small caches of fresh water."
            }
        ],
        insider: [
            {
                title: "The Echo Spot",
                detail: "Go to the very back corner where the ceiling dips. If you hum a low note, the entire cave vibrates."
            }
        ],
        seasons: {
            spring: "The clearest air for seeing the rock textures.",
            summer: "The perfect escape from the 40-degree heat. The cave stays a constant 22 degrees.",
            autumn: "High tide brings the waves right into the mouth—sounds like a drum.",
            winter: "The cave feels dark and mysterious, a place for true legends."
        },
        pledge: "I have walked the hall of the stone giants, I have heard the earth's heartbeat, I am a keeper of the cave.",
        recommendations: ["ghdamsi-coast", "hammam-said-swim"]
    },
    "museum-museum": {
        id: "museum-museum",
        title: "Museum Chronicles",
        subtitle: "Tracing the Roots of Power",
        description: "A deep dive into the artifacts and personal history that shaped a nation's destiny.",
        image: "/attractions/bourguiba meusiem.webp",
        accentColor: "#FBBF24",
        tags: ["Education", "Politics", "Art"],
        category: "attractions",
        facts: [
            { label: "Focus", value: "Habib Bourguiba" },
            { label: "Location", value: "Skanes Palace" },
            { label: "Key Piece", value: "Presidential Rolls" }
        ],
        story: "Housed in the former Summer Palace, this museum offers an intimate look at the man who led Tunisia to independence. From personal letters to world gifts, every room tells a story of diplomacy, struggle, and modern vision.",
        recommendations: ["mausoleum-legacy", "museum-destination"]
    },

    // --- CRAFTS (The 6 Traditions) ---
    "olive-wood": {
        id: "olive-wood",
        title: "Olive Wood",
        subtitle: "Sculpted from Ancient Groves",
        description: "The soul of Tunisia's land, masterfully carved into timeless pieces of art.",
        image: "/Exquisite Crafts/Olive Wood.webp",
        accentColor: "#96611F",
        tags: ["Craft", "Heritage", "Artisan"],
        category: "crafts",
        facts: [
            { label: "Material", value: "Ancient Olive Trees" },
            { label: "Technique", value: "Hand Carving" },
            { label: "Tradition", value: "Generational Skills" }
        ],
        story: "Each piece of olive wood is unique, shaped by the sun and the soil of the Sahel. Our artisans read the grain of trees that have stood for centuries, creating functional art that brings the warmth of the Tunisian landscape into your home.\n\nThe olive tree is the 'Golden Tree' of Tunisia. Known for its density and its spectacular marble-like grain, it requires a master's touch to carve. Each piece must be seasoned for years before it touches the chisel, ensuring that the soul of the tree is preserved forever.\n\nFrom honey spoons to massive sculpture-like bowls, olive wood is the ultimate sustainable craft. It is naturally antibacterial, incredibly durable, and it smells like the warm heart of the Mediterranean groves.",
        sensory: {
            scent: "Rich Oil & Earthy Wood",
            sound: "The Soft Rasp of Sandpaper",
            touch: "Silky, Heavy Grain",
            colors: ["#96611F", "#78350F", "#FCD34D"]
        },
        kit: {
            footwear: "Casual shoes for workshop visits",
            photo: "Macro shot of the wood grain",
            hour: "Mid-day when the wood oils shine"
        },
        quote: {
            text: "We don't carve the wood; we just help the tree show its beauty.",
            author: "Master Wood-turner"
        },
        chronology: [
            {
                year: "Ancient",
                title: "The Roman Groves",
                description: "The Sahel region becomes the primary olive oil provider for the Roman Empire."
            },
            {
                year: "Modern Era",
                title: "Artisan Revival",
                description: "Monastir's workshops lead a global resurgence in olive wood design and eco-craft."
            }
        ],
        insider: [
            {
                title: "The Grain Test",
                detail: "Rub a drop of olive oil onto a raw piece. If the grain 'jumps' like marble, it's from a tree over 300 years old."
            }
        ],
        seasons: {
            spring: "The best time to see the groves in bloom before they are harvested.",
            summer: "The wood cures perfectly in the dry heat of the workshops.",
            autumn: "The harvest season. The smell of fresh wood and oil is everywhere.",
            winter: "The time for carving. The artisans spend the long nights creating new designs."
        },
        pledge: "I have touched the grain of the ancient groves, I have brought the golden tree into my home, I am a protector of the Sahel's soul.",
        recommendations: ["pottery-mastery", "copper-lamps"]
    },
    "pottery-mastery": {
        id: "pottery-mastery",
        title: "Moknine Pottery",
        subtitle: "Of Earth and Fire",
        description: "The ancient clay of Moknine, transformed into vibrant ceramics reflecting the colors of the coast.",
        image: "/Exquisite Crafts/pottery.webp",
        accentColor: "#EA580C",
        tags: ["Ceramics", "Authentic", "Local"],
        category: "crafts",
        facts: [
            { label: "Origin", value: "Moknine Workshops" },
            { label: "Method", value: "Traditional Wheel" },
            { label: "Finish", value: "Natural Glaze" }
        ],
        story: "Pottery is the breath of the earth. In the nearby village of Moknine, the rhythmic motion of the potter's wheel has remained unchanged for centuries. Each vase and bowl is a testament to the enduring relationship between the artisan and the Tunisian soil.\n\nThe clay of Moknine is unique, harvested from deep within the Sahel earth. When fired in the traditional wood-burning ovens, it takes on a warm, porous texture that has been prized since Phoenician times. It is the art of the four elements: Earth (clay), Water (shaping), Air (drying), and Fire (kiln).\n\nModern Moknine pottery often features the 'blue of the coast'—a vibrant glaze that mirrors the Mediterranean sky. Owning a piece of Moknine pottery is like owning a fragment of the Tunisian horizon, a piece of art that bridges the gap between the kitchen and the gallery.",
        sensory: {
            scent: "Wet Earth & Wood Smoke",
            sound: "The Rhythmic Hum of the Kick-Wheel",
            touch: "Cool, Raw Clay",
            colors: ["#EA580C", "#FB923C", "#0284C7"]
        },
        kit: {
            footwear: "Clothes you don't mind getting dusty",
            photo: "The artisan's hands in motion",
            hour: "Morning for the best oven-light"
        },
        quote: {
            text: "The wheel turns, but the hand knows the way to the heart of the clay.",
            author: "Fifth-generation Master Potter"
        },
        chronology: [
            {
                year: "Punic Era",
                title: "The First Kilns",
                description: "Moknine becomes a regional center for ceramic production, supplying amphorae to Mediterranean traders."
            },
            {
                year: "19th Century",
                title: "The Color Revolution",
                description: "New glazing techniques allow for the iconic vibrant blues and yellows that define the modern look."
            }
        ],
        insider: [
            {
                title: "The Thumbprint",
                detail: "Check the bottom of any authentic vase. Every master leaves a unique 'hidden' thumbprint mark in the wet clay."
            }
        ],
        seasons: {
            spring: "The best time for air-drying the larger garden pieces.",
            summer: "The ovens can get hot, but the dry air ensures the most durable firing.",
            autumn: "The village of Moknine celebrates the pottery harvest with local markets.",
            winter: "A time for small, intricate indoor work and new design sketches."
        },
        pledge: "I have witnessed the dance of the wheel, I have felt the earth transform, I am a supporter of the flame.",
        recommendations: ["olive-wood", "copper-lamps"]
    },
    "chechia-heritage": {
        id: "chechia-heritage",
        title: "Chechia Hats",
        subtitle: "The Red Cap of Dignity",
        description: "The iconic red headwear of Tunisia, created through an intensive 12-step artisanal process.",
        image: "/Exquisite Crafts/Chechia Hats.webp",
        accentColor: "#991B1B",
        tags: ["Fashion", "Iconic", "Ancient"],
        category: "crafts",
        facts: [
            { label: "Color", value: "Classic Vermillion" },
            { label: "Steps", value: "12 Stages of Prep" },
            { label: "Skill", value: "Master 'Chaouachi'" }
        ],
        story: "To make a single Chechia takes days of carding, knitting, milling, and dying. It is the pride of Tunisian men, representing wisdom and community. In the souks of Monastir, you can still find the masters who carry this ancient secret.\n\nThe 'Chaouachi' (the chechia master) is a figure of immense respect. They use only the finest wool, which is knitted into massive caps and then shrunk down through a process called 'milling' in the mountain rivers. It is then teased with dried thistles to create the signature velvet texture.\n\nThe color is the 'Heart of Tunisia'—a deep, vermillion red that is achieved through a secret recipe of natural dyes. While modern fashion moves fast, the Chechia moves at the speed of tradition, one stitch at a time.",
        sensory: {
            scent: "Clean Wool & Natural Dye",
            sound: "The Soft Scrape of the Carding Brush",
            touch: "Dense, Velvety Wool",
            colors: ["#991B1B", "#DC2626", "#000000"]
        },
        kit: {
            footwear: "None needed (indoor experience)",
            photo: "A close-up of the red texture against stone",
            hour: "Afternoon when the shop colors pop"
        },
        quote: {
            text: "A man doesn't wear a Chechia; he carries the dignity of his ancestors on his head.",
            author: "Master Chaouachi of the Medina"
        },
        chronology: [
            {
                year: "17th Century",
                title: "Andalusian Roots",
                description: "The craft arrives in Tunisia with Andalusian refugees, becoming a symbol of urban sophistication."
            },
            {
                year: "Today",
                title: "The Global Icon",
                description: "The Chechia is recognized by UNESCO as part of Tunisia's intangible cultural heritage."
            }
        ],
        insider: [
            {
                title: "The Thistle Secret",
                detail: "Ask the master to show you the 'Thistles'. They are specific dried flowers used to brush the wool to perfection."
            }
        ],
        seasons: {
            spring: "The wool is fresh and the milling rivers are full.",
            summer: "The best time to see the hats drying on the wooden forms in the sun.",
            autumn: "Traditionally the time when young men receive their first 'adult' Chechia.",
            winter: "The busiest time in the souks as everyone seeks the warmth of the dense wool."
        },
        pledge: "I have learned the twelve steps of the red cap, I have honored the master's hand, I am a guardian of the Chechia.",
        recommendations: ["sahel-embroidery", "fouta-heritage"]
    },
    "fouta-heritage": {
        id: "fouta-heritage",
        title: "Fouta Towels",
        subtitle: "The Weave of the Hammam",
        description: "Loom-woven cotton towels that have been part of the Tunisian lifestyle for generations.",
        image: "/Exquisite Crafts/Fouta Towels.webp",
        accentColor: "#38BDF8",
        tags: ["Textiles", "Spa", "Casual"],
        category: "crafts",
        facts: [
            { label: "Material", value: "100% Cotton" },
            { label: "Use", value: "Hammam/Beach/Home" },
            { label: "Vibe", value: "Light & Absorbent" }
        ],
        story: "The Fouta is the perfect travel companion. Born in the traditional bathhouses (Hammams), these towels are now a global fashion statement, yet they are still made on the same wooden looms right here in the Sahel.\n\nWhat makes the Fouta special is its versatility. It is a towel, a wrap, a tablecloth, and a blanket all in one. Woven from 100% pure cotton, it becomes softer with every wash, holding onto the memory of the water it has touched.\n\nIn Monastir, the weaving patterns often feature subtle 'eye' or 'fish' motifs—ancient symbols of protection. Each tassel is hand-knotted by local women, a communal tradition that ensures every Fouta carries the warmth of a human touch.",
        sensory: {
            scent: "Fresh Cotton & Olive Oil Soap",
            sound: "The Rhythmic Thud of the Wood Loom",
            touch: "Soft, Textured Canvas",
            colors: ["#38BDF8", "#7DD3FC", "#FFFFFF"]
        },
        kit: {
            footwear: "Beach Sandals",
            photo: "Foutas hanging in a row in the wind",
            hour: "Early morning for the soft 'textile' light"
        },
        quote: {
            text: "A Fouta is never finished until it has been to the sea.",
            author: "Village Weaver"
        },
        chronology: [
            {
                year: "Pre-Islamic",
                title: "The Hammam Beginnings",
                description: "The flat-weave technique is developed to create lightweight, fast-drying coverings for the bathhouses."
            },
            {
                year: "Today",
                title: "The Eco-Revolution",
                description: "The Fouta becomes a global symbol of sustainable, plastic-free living."
            }
        ],
        insider: [
            {
                title: "The Tassel Knot",
                detail: "Look closely at the tassels. A 'True Sahel' fouta has a specific three-loop knot that signifies it was hand-finished."
            }
        ],
        seasons: {
            spring: "New cotton arrivals from the local harvests.",
            summer: "The peak season—every traveler needs their signature beach fouta.",
            autumn: "The looms slow down, and new, thicker 'winter foutas' are designed.",
            winter: "Used as lightweight throws in the homes, keeping the memory of summer alive."
        },
        pledge: "I have felt the weave of the loom, I have carried the cloth of the coast, I am a thread in the story of the Sahel.",
        recommendations: ["sahel-embroidery", "chechia-heritage"]
    },
    "copper-lamps": {
        id: "copper-lamps",
        title: "Copper Lamps",
        subtitle: "Chasing the Light",
        description: "Hand-engraved copper and brass that transform light into intricate shadows and patterns.",
        image: "/Exquisite Crafts/Copper Lamps.webp",
        accentColor: "#B45309",
        tags: ["Decor", "Metalwork", "Lighting"],
        category: "crafts",
        facts: [
            { label: "Technique", value: "Cisellage (Engraving)" },
            { label: "Time", value: "One week per lamp" },
            { label: "Effect", value: "Atmospheric Patterns" }
        ],
        story: "In the artisan workshops, the rhythmic 'tink-tink' of the hammer on copper never stops. These lamps are not just for lighting—they are instruments of atmosphere, throwing geometric shadows across the room like ghosts of the Medina.\n\nCopper work in Monastir is an exercise in patience. A single large lamp can require over 10,000 individual hammer strikes, each one careful and deliberate. The master artisan (the 'Saffar') works without a stencil, guided only by the geometric blueprints stored in his memory.\n\nWhen the candle or bulb is lit inside, the brass 'breathes' its patterns onto your walls. It is a bridge between the physical and the ethereal, a way to bring the starlight of the Tunisian night into your own private space.",
        sensory: {
            scent: "Metallic Brass & Chiseled Dust",
            sound: "High-Pitched Rhythmic Hammer Strokes",
            touch: "Intricate, Chiseled Relief",
            colors: ["#B45309", "#D97706", "#78350F"]
        },
        kit: {
            footwear: "Sturdy Shoes (workshops have metal shavings)",
            photo: "The patterns projected on a dark wall",
            hour: "Dusk when the lamp shadows are sharpest"
        },
        quote: {
            text: "We don't make lamps; we make the geometry of the soul visible.",
            author: "Master Saffar"
        },
        chronology: [
            {
                year: "Islamic Golden Age",
                title: "The Art of Chasing",
                description: "Metalworking becomes a peak art form in North Africa, used for palace lighting and scientific instruments."
            },
            {
                year: "Today",
                title: "Contemporary Glow",
                description: "Traditional Monastir copper lamps are exported globally as high-end interior design statements."
            }
        ],
        insider: [
            {
                title: "The Weight Test",
                detail: "A true hand-hammered lamp feels significantly heavier than a factory mold. Always lift it before you buy."
            }
        ],
        seasons: {
            spring: "The best time to visit the open-air workshops in the Medina.",
            summer: "The heat makes the brass more 'malleable', allowing for deeper engravings.",
            autumn: "Perfect for finding the new holiday collections from the master engravers.",
            winter: "When the lamps are most needed, creating warmth and complex shadows in the Tunisian homes."
        },
        pledge: "I have seen the light through the chiseled brass, I have heard the hammer's song, I am a lover of the glow.",
        recommendations: ["pottery-mastery", "sahel-embroidery"]
    },
    "sahel-embroidery": {
        id: "sahel-embroidery",
        title: "Sahel Embroidery",
        subtitle: "Needlework of the Soul",
        description: "Gold and silk thread woven into masterpieces by the masters of the Monastir region.",
        image: "/Exquisite Crafts/Sahel Embroidery.webp",
        accentColor: "#C026D3",
        tags: ["Elegance", "Luxury", "Tradition"],
        category: "crafts",
        facts: [
            { label: "Status", value: "Bridal Heritage" },
            { label: "Detail", value: "Micron-level quality" },
            { label: "Craft", value: "Hand-Silk" }
        ],
        story: "The embroidery of the Sahel is arguably the most complex in North Africa. Every geometric pattern has a meaning, representing protection, fertility, or family lineage, stitched into the fabric of life itself.\n\nMonastir has always been the capital of this 'thread-alchemy'. Using pure silk and real gold thread (el-kentir), the embroiderers spend months on a single bridal costume. It is a meditative act where every stitch is a prayer for the future.\n\nWhile industrial machines try to mimic the look, they can never match the soul of hand-embroidery. A hand-stitched piece 'shimmers' differently under the sun, reacting to the light with a depth and texture that feels organic and alive.",
        sensory: {
            scent: "Silk Thread & Heirloom Cedar",
            sound: "The Whisper of the Needle through Fabric",
            touch: "Dense, Embossed Silk",
            colors: ["#C026D3", "#DB2777", "#FBBF24"]
        },
        kit: {
            footwear: "None (luxury indoor context)",
            photo: "A macro shot of the gold thread detail",
            hour: "Mid-morning for the most natural silk-sheen"
        },
        quote: {
            text: "A dress is just cloth; embroidery is the memory that makes it a legacy.",
            author: "Master Embroiderer of Monastir"
        },
        chronology: [
            {
                year: "18th Century",
                title: "The Golden Era",
                description: "Sahel embroidery becomes the standard of luxury for Tunisian weddings and royal events."
            },
            {
                year: "Today",
                title: "Sustainable Luxury",
                description: "A resurgence in hand-embroidery as a protest against fast-fashion and loss of identity."
            }
        ],
        insider: [
            {
                title: "The Reverse Side",
                detail: "Turn the fabric over. In authentic hand-embroidery, the back is almost as neat as the front—this is the mark of a master."
            }
        ],
        seasons: {
            spring: "The peak of the 'Wedding Season' preparation, when the workshops are at their busiest.",
            summer: "The silk is light and the embroidery reflects the intense coastal sun.",
            autumn: "A time for restoration of old family pieces after the summer celebrations.",
            winter: "The slow season, where new, experimental patterns are developed by the younger generation."
        },
        pledge: "I have seen the gold thread dance, I have touched the silk of legacy, I am a guardian of the needle's art.",
        recommendations: ["chechia-heritage", "fouta-heritage"]
    },

    // --- SECRETS (Lesser Knowns) ---
    "hammam-said-cove": {
        id: "hammam-said-cove",
        title: "Hammam Said Cove",
        subtitle: "The Secret Crystal Bay",
        description: "A small, quiet bay south of Monastir with clear water and fewer tourists.",
        image: "/lesser knows/Hammam Said Cove.webp",
        accentColor: "#0D9488",
        tags: ["Hidden", "Pure", "Local"],
        category: "secrets",
        facts: [
            { label: "Activity", value: "Sunset Picnic" },
            { label: "Access", value: "Walking Trail" },
            { label: "Secret", value: "Underwater Caves" }
        ],
        story: "While the crowds stick to the main beaches, the locals head to Hammam Said. It's a sanctuary of silence where the water meets the white rocks in a perfect, turquoise embrace. Bring a mask—the sea life here is completely undisturbed.\n\nThe cove is tucked away beneath a dramatic cliff line, accessible only by a winding foot-path that discourages the casual tourist. This isolation has preserved a piece of the coast that looks exactly as it did centuries ago. The water is naturally filtered by the surrounding limestone, creating a depth of field that makes the sea-floor look like a high-definition painting.\n\nAt sunset, the cove acts as a natural amphitheater for the sun's descent. The white rocks soak up the orange light, glowing like embers against the cooling blue of the bay. It is a place for whispering, for dreaming, and for truly hearing the Mediterranean.",
        sensory: {
            scent: "Seaweed & Sun-Drenched Limestone",
            sound: "The Gentle Slap of Water in Rock Crevices",
            touch: "Warm, Smooth Shore Rocks",
            colors: ["#0D9488", "#CCFBF1", "#FFFFFF"]
        },
        kit: {
            footwear: "Sturdy hiking sandals",
            photo: "The turquoise window between the rocks",
            hour: "5:30 PM for the rock-glow"
        },
        quote: {
            text: "The main beach is for the body; the cove is for the soul.",
            author: "Local Monastir Poet"
        },
        chronology: [
            {
                year: "Ancient",
                title: "The Natural Harbor",
                description: "Small coastal vessels used the cove for emergency shelter during sudden Mediterranean squalls."
            }
        ],
        insider: [
            {
                title: "The Morning Pool",
                detail: "There's a natural 'jacuzzi' pool carved into the rock on the left side of the beach. It's deepest at 9:00 AM."
            }
        ],
        seasons: {
            spring: "The path to the cove is lined with wild sea-lilies.",
            summer: "The best snorkeling in the city—the water is perfectly calm.",
            autumn: "Great for reading and total isolation as the water stays warm.",
            winter: "A site of wild beauty. The spray hits the cliffs with a majestic roar."
        },
        pledge: "I have found the secret door to the sea, I have shared the silence of the cove, I am a guardian of the hidden bay.",
        recommendations: ["swani-beach", "ghdamsi-coast"]
    },
    "swani-beach": {
        id: "swani-beach",
        title: "Swani Beach",
        subtitle: "The Wilder Stretch",
        description: "A long, wilder stretch of sand beyond the main hotel zones, popular with locals more than tourists.",
        image: "/lesser knows/swani.webp",
        accentColor: "#F59E0B",
        tags: ["Wild", "Authentic", "Hiking"],
        category: "secrets",
        facts: [
            { label: "Vibe", value: "Unspoiled" },
            { label: "Crowds", value: "Only Locals" },
            { label: "Timing", value: "Morning Runner" }
        ],
        story: "Swani is where the desert meets the sea. There are no umbrellas or loud music—just the wind and the salt. It's the perfect place for those who want to experience the Mediterranean as it was fifty years ago.\n\nThe 'Swani' refers to the small coastal gardens that used to line this area. This stretch of beach is a reminder of Monastir's agricultural and maritime hybrid history. The dunes here are taller and more erratic, creating small valleys of sand where you can hide from the world entirely.\n\nBecause it's further from the city center, the water quality is unmatched. It is a favorite spot for local fishermen who cast their lines into the surf at dawn, their silhouettes creating a living clock against the rising sun.",
        sensory: {
            scent: "Dry Dune Grass & Brine",
            sound: "The Constant Hiss of Sifting Sand",
            touch: "Soft, Coarse Dune Sand",
            colors: ["#F59E0B", "#FEF3C7", "#0369A1"]
        },
        kit: {
            footwear: "Flip-flops (easily removable)",
            photo: "The curve of the coast towards the city",
            hour: "6:00 AM to see the surf fishermen"
        },
        quote: {
            text: "In Swani, the only clock is the tide.",
            author: "Coastal Wanderer"
        },
        chronology: [
            {
                year: "Historically",
                title: "The Garden Coast",
                description: "Used as a site for 'Swani' (coastal orchards) that were irrigated by the high water table."
            }
        ],
        insider: [
            {
                title: "The Viewpoint Dune",
                detail: "There is one dune taller than the rest near the old ruin. From there, you can see the entire arc of Skanes."
            }
        ],
        seasons: {
            spring: "Perfect for long hikes when the dune grass is green.",
            summer: "Best for late-night bonfires and stargazing away from city lights.",
            autumn: "The water is at its crystal peak.",
            winter: "Great for witnessing the power of the coastal winds."
        },
        pledge: "I have walked the wild edge of the world, I have found peace in the dunes, I am a spirit of Swani.",
        recommendations: ["hammam-said-cove", "viewpoint-dune"]
    },
    "ghdamsi-coast": {
        id: "ghdamsi-coast",
        title: "Ghdamsi Coast",
        subtitle: "Rocks & Fishing Echoes",
        description: "Rocky shoreline and small coves used by locals for fishing and cliff‑jumping; feels very non‑touristic.",
        image: "/lesser knows/ghdamsi.webp",
        accentColor: "#475569",
        tags: ["Adventure", "Rocks", "Local Life"],
        category: "secrets",
        facts: [
            { label: "Action", value: "Cliff Jumping" },
            { label: "Sight", value: "Old Fishing Hubs" },
            { label: "Feeling", value: "Raw & Rugged" }
        ],
        story: "The Ghdamsi coastline is a playground for the brave. Local kids have been jumping off these limestone cliffs for generations. For the traveler, it offers a raw, unfiltered look at the tectonic beauty of the Monastir peninsula.\n\nThis is not a 'groomed' shoreline. It is a jagged, powerful edge where the rock meets the deep Mediterranean. The salt has carved intricate patterns into the stone over millions of years, creating a geological gallery that stretches as far as the eye can see.\n\nWalking along the upper ridge, you'll find small, sheltered alcoves where the sound of the wind is the only companion. It is a place of primal energy, where you can feel the true scale of the African continent meeting the sea. It's best experienced when the waves are high, sending plumes of spray that turn the rocks into a misty, ethereal landscape.",
        sensory: {
            scent: "Ozone & Wet Iron-Rich Rock",
            sound: "The Booming Thud of Deep-Sea Swells",
            touch: "Sharp, Salt-Crusted Rock",
            colors: ["#475569", "#1E293B", "#DBEAFE"]
        },
        kit: {
            footwear: "High-traction hiking boots",
            photo: "The spray hitting the 'Elephant Rock'",
            hour: "Morning when the sun highlights the rock layers"
        },
        quote: {
            text: "The coast doesn't care about your plans; it only cares about the wind.",
            author: "Coastal Guard"
        },
        chronology: [
            {
                year: "Geological",
                title: "The Tectonic Rise",
                description: "The Monastir peninsula is formed by a massive limestone uplift, creating the cliffs of Ghdamsi."
            }
        ],
        insider: [
            {
                title: "The Natural Seat",
                detail: "There's a rock shaped exactly like a throne near the third cove. It's the best place in the city to watch a storm."
            }
        ],
        seasons: {
            spring: "The rocks are covered in small, vibrant wild-flowers.",
            summer: "The local epicenter for cliff-jumping and deep-sea swimming.",
            autumn: "Brings the clearest horizon—on good days, you can see Kuriat easily.",
            winter: "Pure drama. The coast is a warzone of white foam and dark rock."
        },
        pledge: "I have stood on the jagged edge, I have tasted the salt-mist, I am a protector of the rugged coast.",
        recommendations: ["ghdamsi-cave", "old-port"]
    },
    "old-port": {
        id: "old-port",
        title: "Old Port",
        subtitle: "The Authentic Fishermen Quay",
        description: "Early morning fish market and boats right next to Cap Monastir; authentic daily life and great photos.",
        image: "/lesser knows/Old Port & Fishermen Quay.webp",
        accentColor: "#1D4ED8",
        tags: ["Boats", "Faces", "Early Bird"],
        category: "secrets",
        facts: [
            { label: "Best Time", value: "6:00 AM" },
            { label: "Sight", value: "Blue Boats" },
            { label: "Experience", value: "Fish Auctions" }
        ],
        story: "Before the sun even rises, the Old Port is alive with the shouting of fishermen and the smell of the sea. This is the heart of Monastir's economy. Watching the blue boats return with their silver catch is the most authentic way to start your day.\n\nThe 'Port de Pêche' is a kaleidoscope of primary colors. The bright blue boats (Floukas) contrast with the yellow nets and the silver scales of the morning harvest. It is a place of high stakes and high energy, where a single morning's auction can define a family's week.\n\nWalking among the nets being repaired is a lesson in patience. Most of these fishermen come from families who have sailed these waters since the 10th century. Their hands are mapped by the salt and the ropes, carrying a knowledge of the Mediterranean that no digital map can ever replicate.",
        sensory: {
            scent: "Fresh Sea-Bass & Diesel & Salt Nets",
            sound: "The Rhythmic Clack of Wood Boats",
            touch: "Rough Hemp Ropes",
            colors: ["#1D4ED8", "#FDE047", "#F8FAFC"]
        },
        kit: {
            footwear: "Shoes with good grip (the quay is wet)",
            photo: "The reflection of the boats in the still dawn water",
            hour: "5:30 AM to catch the return of the fleet"
        },
        quote: {
            text: "The sea gives, but the sea also takes; we just show up to say thank you.",
            author: "Elder Fisherman"
        },
        chronology: [
            {
                year: "Ongoing",
                title: "The Maritime Soul",
                description: "The port has remained the primary economic artery of Monastir for over a millennium."
            }
        ],
        insider: [
            {
                title: "The Auction Secret",
                detail: "Stand near the gated area at 6:30 AM. You can witness the 'whisper auction' where the day's best fish are sold to local chefs."
            }
        ],
        seasons: {
            spring: "The height of the sardine season—the port is a silver sea.",
            summer: "Early morning activity is intense to beat the midday heat.",
            autumn: "The return of the larger deep-sea boats after the summer storms.",
            winter: "A time for net mending and boat painting. The port is a vibrant open-air gallery."
        },
        pledge: "I have seen the dawn fleet return, I have honored the men of the sea, I am part of the port's rhythm.",
        recommendations: ["marina-twilight-escape", "cemetery-whispers"]
    },
    "cemetery-whispers": {
        id: "cemetery-whispers",
        title: "Sea Cemetery",
        subtitle: "Strangely Peaceful White Tombs",
        description: "White tombs facing the water just outside the Ribat; strangely peaceful and rarely highlighted.",
        image: "/lesser knows/cemetry-monastir.webp",
        accentColor: "#F1F5F9",
        tags: ["Stillness", "Poetry", "Views"],
        category: "secrets",
        facts: [
            { label: "Location", value: "Adjacent to Ribat" },
            { label: "Mood", value: "Ethereal" },
            { label: "Crowds", value: "Minimal" }
        ],
        story: "The Marine Cemetery is a place where time stops. The rows of white graves contrast sharply with the deep blue Mediterranean. It is a place for contemplation, where the cycle of life and the eternity of the sea become one.\n\nKnown to locals as 'Sidi el Mazeri', it is one of the most beautiful cemeteries in the world. The tombs are simple, lime-washed and facing the sea, reflecting a philosophy of return to the elements. There is no morbid energy here; instead, it feels like a vast, quiet library of stories.\n\nAs the wind whistles through the headstones, carrying the scent of salt and wild jasmine, you realize why the people of Monastir chose this spot. It is a front-row seat to the infinite—a place where the ancestors continue to watch over the waters they once sailed.",
        sensory: {
            scent: "Wild Jasmine & Deep Sea Air",
            sound: "The Wind Whistling through Stone Arches",
            touch: "Cool, Sun-Bleached Stone",
            colors: ["#F1F5F9", "#CBD5E1", "#334155"]
        },
        kit: {
            footwear: "Comfortable walking shoes",
            photo: "Looking through an arch towards the sea",
            hour: "Sunset for the most poetic shadows"
        },
        quote: {
            text: "We don't bury our people; we give them back to the horizon.",
            author: "Local Monastir Historian"
        },
        chronology: [
            {
                year: "Medieval",
                title: "The Holy Ground",
                description: "The area around the Ribat becomes the most sacred burial site in the region."
            }
        ],
        insider: [
            {
                title: "The Blue Arch",
                detail: "Find the small blue-painted arch near the Ribat wall. It frames the cemetery and the sea in a perfect geometric circle."
            }
        ],
        seasons: {
            spring: "The cemetery is covered in white and yellow wild-flowers.",
            summer: "The heat is intense but the sea breeze keeps the air moving.",
            autumn: "The long shadows of the headstones create a stunning graphic landscape.",
            winter: "Quiet and atmospheric. The white tombs look like small ivory blocks against the dark sea."
        },
        pledge: "I have walked the path of the ancestors, I have found peace in the stillness, I am a soul of the sea cemetery.",
        recommendations: ["ribat-dawn-patrol", "viewpoint-dune"]
    },
    "viewpoint-dune": {
        id: "viewpoint-dune",
        title: "Viewpoint Dune",
        subtitle: "The Secret Panorama",
        description: "The big sign plus the low dune behind gives a wide view of the bay and city beyond the quick snap.",
        image: "/lesser knows/love.webp",
        accentColor: "#FBBF24",
        tags: ["Views", "Park", "Panoramic"],
        category: "secrets",
        facts: [
            { label: "Spot", value: "Behind 'I Love Monastir'" },
            { label: "Sight", value: "360-degree Bay" },
            { label: "Perfect For", value: "Last Sunset" }
        ],
        story: "Everyone stops for the 'I Love Monastir' sign, but only the wise ones climb the small dune behind it. From there, the city opens up like a map—the Ribat, the Marina, and the endless sea all in one frame.\n\nThis viewpoint is the city's 'Secret Balcony'. While the tourists are busy taking selfies with the plastic letters, you can sit on the soft dune sand and watch the entire machine of the city move. You see the fishing boats leaving the port, the yachts entering the Marina, and the pigeons circling the battlements of the Ribat.\n\nIt is the perfect place to understand the geography of Monastir—not as a series of isolated spots, but as a single, living organism. At sunset, the light hits the entire facade of the city simultaneously, turning it into a shimmering, golden kingdom reflected in the glass-like water of the bay.",
        sensory: {
            scent: "Dry Sand & Distant Sea Salt",
            sound: "The Muffled Hum of the City Below",
            touch: "Soft, Wind-Swept Sand",
            colors: ["#FBBF24", "#FDE047", "#0EA5E9"]
        },
        kit: {
            footwear: "Sandals or trainers with good grip",
            photo: "A wide panoramic shot of the entire bay",
            hour: "The last 10 minutes before the sun sets"
        },
        quote: {
            text: "You don't see Monastir until you see it from the dune.",
            author: "Local Photographic Guide"
        },
        chronology: [
            {
                year: "Historically",
                title: "The Watcher's Hill",
                description: "Small dunes were traditionally used by coastal sentries to spot incoming trade vessels."
            }
        ],
        insider: [
            {
                title: "The 'I' Spot",
                detail: "If you stand exactly 5 meters behind the letter 'I', the Ribat tower is perfectly centered in your shot."
            }
        ],
        seasons: {
            spring: "The best time for visibility—you can see as far as Sousse.",
            summer: "The best place to find a breeze when the city center is stagnant.",
            autumn: "Brings the most dramatic 'fire clouds' over the bay.",
            winter: "A cold but invigorating spot to watch the storms roll in from the Mediterranean."
        },
        pledge: "I have seen the kingdom from the heights, I have mapped the city with my eyes, I am a watcher of the bay.",
        recommendations: ["cemetery-whispers", "swani-beach"]
    },
    "medina-alleys": {
        id: "medina-alleys",
        title: "Medina Alleys",
        subtitle: "Quiet Streets & Blue Doors",
        description: "A few turns off the main souk into quiet, lived‑in streets with blue doors and local childhood echoes.",
        image: "/lesser knows/old allies.webp",
        accentColor: "#2563EB",
        tags: ["Wander", "Blue", "Alleys"],
        category: "secrets",
        facts: [
            { label: "Vibe", value: "Lived-In" },
            { label: "Secret", value: "Hidden Courtyards" },
            { label: "Tip", value: "Get Lost On Purpose" }
        ],
        story: "This is where the real Monastir lives. Away from the commercial shops, these alleys are a patchwork of blue doors, hanging jasmine, and the distant sound of families sharing a meal. It is the most intimate part of the city.\n\nThe 'Houmani' (neighborhoods) of the Medina are the keepers of the city's social fabric. Each street has its own character—some are narrow and winding to conserve cool air, others open into small squares where elders sit and share stories that are centuries old. The architecture is 'Sober Sahel'—white walls, blue woodwork, and the occasional burst of pink bougainvillea.\n\nWalking here is a lesson in domestic beauty. You'll see the 'Zouaq' (traditional painting) on the doorframes and the intricate iron-work on the windows. It is a slow, quiet world that rewards the traveler who is willing to put their phone away and simply listen to the heartbeat of a living neighborhood.",
        sensory: {
            scent: "Hanging Jasmine & Fresh Bread",
            sound: "Distant Children's Laughter & Local Radio",
            touch: "Cool Shadowed Stone Walls",
            colors: ["#2563EB", "#F8FAFC", "#60A5FA"]
        },
        kit: {
            footwear: "Light, silent shoes (to respect the quiet)",
            photo: "A blue door framed by bougainvillea",
            hour: "4:00 PM for the best 'alley-light'"
        },
        quote: {
            text: "The main streets are for business; the alleys are for friendship.",
            author: "Medina Resident"
        },
        chronology: [
            {
                year: "10th Century",
                title: "The Urban Grid",
                description: "The residential quarters are established, following the defensive logic of the early Islamic city."
            }
        ],
        insider: [
            {
                title: "The Jasmine Secret",
                detail: "If you see a house with jasmine hanging over the door, it's a traditional sign that the family is welcoming to neighbors."
            }
        ],
        seasons: {
            spring: "The entire neighborhood smells like a flower shop.",
            summer: "The alleys are the only place in the city where you can walk in total shade at noon.",
            autumn: "Harvest decorations start appearing on the traditional doors.",
            winter: "A cozy, quiet time where the smell of wood-fires for cooking fills the air."
        },
        pledge: "I have walked the quiet heart, I have shared the neighborhood's breath, I am a friend of the Medina.",
        recommendations: ["medina-treasure-hunt", "pottery-mastery"]
    },

    // --- DESTINATIONS (The 6 Big Ones) ---
    "ribat-destination": {
        id: "ribat-destination",
        title: "Ribat",
        subtitle: "The Beacon of the Maghreb",
        description: "The soul and stone of Monastir, standing unchanged against the tides of history.",
        image: "/destinations/ribat.webp",
        accentColor: "#92400E",
        tags: ["Fortress", "Ancient", "UNESCO"],
        category: "destinations",
        facts: [
            { label: "Highlight", value: "Nador Tower" },
            { label: "Filming", value: "'Life of Brian'" },
            { label: "Legacy", value: "Icon of Tunisia" }
        ],
        story: "To step into the Ribat is to step back 1,200 years. Climb the narrow stairs of the Nador tower for the best view in North Africa, and feel the breeze that has touched the faces of Caliphs and conquerors.\n\nIt is the oldest Ribat in the Maghreb, a structure so formidable that it defined the military architecture of an entire era. But it was more than just a fort; it was a 'Ribat', a place of spiritual retreat where warrior-monks studied the Quran and the coastline simultaneously. This duality of faith and steel is etched into every stone.\n\nWalking the battlements, you see the sea exactly as the 8th-century sentries did. The architecture is a complex puzzle of courtyards, secret passages, and massive gates. It has been the silent protector of Monastir through empires and revolts, and it remains today as the indestructible soul of the city.",
        sensory: {
            scent: "Sun-Drenched Sandstone & Ancient Dust",
            sound: "The Wind Whispering through High Turrets",
            touch: "Rough, Hand-Hewn Stone",
            colors: ["#92400E", "#78350F", "#FBBF24"]
        },
        kit: {
            footwear: "Shoes with good grip (worn stone is slippery)",
            photo: "The view from the top of the Nador Tower",
            hour: "7:00 AM for the first light on the stone"
        },
        quote: {
            text: "This isn't just a fortress; it's the anchor of our history.",
            author: "Local Citadel Guard"
        },
        chronology: [
            {
                year: "796 AD",
                title: "Foundation",
                description: "Harthama ibn A'yan builds the core structure as a defensive bastion."
            },
            {
                year: "9th-11th C",
                title: "Spiritual Peak",
                description: "Becomes a world-renowned center for Sufi retreats and defensive learning."
            },
            {
                year: "Present",
                title: "UNESCO Pride",
                description: "Regarded as one of the best-preserved Islamic fortresses globally."
            }
        ],
        insider: [
            {
                title: "The Silent Hall",
                detail: "Visit the lower oratory room. The acoustics are so precise you can hear a pin drop from 20 meters away."
            }
        ],
        seasons: {
            spring: "The walls are softened by wild greenery and birds nesting in the arches.",
            summer: "The stone is hot, making the cool interior passages even more divine.",
            autumn: "The best light for seeing the golden ochre of the stonework.",
            winter: "The most powerful time to watch the storms from the upper towers."
        },
        pledge: "I have walked the eternal battlements, I have seen the sea of history, I am a guardian of the Ribat.",
        recommendations: ["ribat-dawn-patrol", "mausoleum-destination"]
    },
    "mausoleum-destination": {
        id: "mausoleum-destination",
        title: "Mausoleum",
        subtitle: "Bourguiba's Eternal Rest",
        description: "A stunning architectural marriage of modern statecraft and classic Islamic beauty.",
        image: "/destinations/Mausoleum.webp",
        accentColor: "#FBBF24",
        tags: ["Legacy", "Art", "National"],
        category: "destinations",
        facts: [
            { label: "Architecture", value: "Neo-Traditional" },
            { label: "Material", value: "Carrara Marble" },
            { label: "Respect", value: "Silence Requested" }
        ],
        story: "The Mausoleum of Habib Bourguiba is a temple of national identity. With its golden domes and minarets of white marble, it symbolizes the 'Supreme Combatant's' vision for a modern, independent Tunisia.\n\nIt is an architectural masterpiece that combines Ottoman grandeur with modern Sahelian restraint. The materials alone tell a story of ambition: Carrara marble from Italy, vibrant mosaics from local workshops, and a golden dome that serves as a literal landmark for the entire city. The symmetry of the building is designed to evoke a sense of perfect order and eternal peace.\n\nInside, the massive chandelier and the quiet, reverent atmosphere transform the space into a secular cathedral. It is a place for Tunisians to remember where their modern journey began, and for travelers to witness the scales of beauty that a nation's love can build for its leaders.",
        sensory: {
            scent: "Cold Marble & Fresh Jasmine",
            sound: "High Reverberant Silence",
            touch: "Ice-Cold Polished Stone",
            colors: ["#FBBF24", "#FFFFFF", "#1E40AF"]
        },
        kit: {
            footwear: "Shoes easy to slip on/off (respect tradition)",
            photo: "The long perspective of the central courtyard",
            hour: "Morning light when the white marble glows"
        },
        quote: {
            text: "This is where our freedom has a face and a home.",
            author: "Elder of Monastir"
        },
        chronology: [
            {
                year: "1963",
                title: "The Project",
                description: "Work begins on the final resting place of Tunisia's first president."
            },
            {
                year: "1980",
                title: "Completion",
                description: "The golden dome is inaugurated, becoming a national icon."
            }
        ],
        insider: [
            {
                title: "The Museum Wing",
                detail: "Don't miss the side rooms containing the president's 1960s luxury cars and private book collection."
            }
        ],
        seasons: {
            spring: "The gardens are a paradise of scent and color.",
            summer: "The marble stays naturally cool even in 40-degree heat.",
            autumn: "Brings a soft, golden afternoon light that matches the dome.",
            winter: "The white stone pops dramatically against the dark blue skies."
        },
        pledge: "I have stood in the light of the golden dome, I have honored the dream of a nation, I am a child of modern Tunisia.",
        recommendations: ["mausoleum-legacy", "museum-destination"]
    },
    "beaches-destination": {
        id: "beaches-destination",
        title: "Beaches",
        subtitle: "The Golden Coast",
        description: "Miles of fine sand and shallow turquoise waters, perfect for families and sun-seekers.",
        image: "/destinations/beach.webp",
        accentColor: "#FDE047",
        tags: ["Sun", "Family", "Watersports"],
        category: "destinations",
        facts: [
            { label: "Key Spot", value: "Skanes Beach" },
            { label: "Water", value: "Warm & Shallow" },
            { label: "Activity", value: "Jet Skiing" }
        ],
        story: "Monastir's beaches are famous for their golden texture and safety. Whether you're in the hotel zone of Skanes or the public beach of the city center, the Mediterranean here is as inviting as a warm bath.\n\nThe coast of Monastir is a gift of nature. The water stays shallow for hundreds of meters, making it a natural playground for families and a shimmering mirror for the Tunisian sun. But beyond the resorts, the beaches hold a deeper magic—they are the site of the ancient city of Ruspina, where history has been washed by the tides for two millennia.\n\nFrom the high-tech jet-skis of Skanes to the quiet, rhythmic throwing of cast-nets by local elders, the beaches are where Monastir's modern energy meets its timeless maritime soul. It is a place of absolute horizontal freedom, where the only boundary is the deep blue line of the horizon.",
        sensory: {
            scent: "Sun-Warm Salt & Cocoa Butter & Fresh Seaweed",
            sound: "Children's Laughter & Distant Jet-Ski Hums",
            touch: "Fine, Sifting Golden Sand",
            colors: ["#FBBF24", "#FDE047", "#06B6D4"]
        },
        kit: {
            footwear: "Flip-flops or Barefoot",
            photo: "Looking down the long curve of Skanes at sunset",
            hour: "4:00 PM for the perfect 'Tan' light"
        },
        quote: {
            text: "The sand is our carpet, the sea is our life.",
            author: "Local Beach-front Artisan"
        },
        chronology: [
            {
                year: "Eternal",
                title: "The Golden Coast",
                description: "The fine sands of the Sahel have drawn civilizations to these shores since the Phoenicians."
            }
        ],
        insider: [
            {
                title: "The Sand Secret",
                detail: "If you walk further towards Sahline, the sand becomes even finer, almost like silk powder. It's the locals' favorite spot for sand-baths."
            }
        ],
        seasons: {
            spring: "Perfect for long, meditative walks when the air is cool but the sun is bright.",
            summer: "The peak of life. The Mediterranean is a warm turquoise bath until midnight.",
            autumn: "Brings the 'Silver Water' effect when the light hits at a lower angle.",
            winter: "A place of raw power, perfect for witnessing the majesty of the winter Mediterranean."
        },
        pledge: "I have surrendered to the golden shore, I have been blessed by the turquoise deep, I am a soul of the sands.",
        recommendations: ["beach-solitude", "hammam-said-cove"]
    },
    "marina-destination": {
        id: "marina-destination",
        title: "Marina",
        subtitle: "The Port of Serenity",
        description: "A world-class harbor surrounded by cafes, restaurants, and the most beautiful yachts.",
        image: "/destinations/marina.webp",
        accentColor: "#06B6D4",
        tags: ["Elite", "Dining", "Sea"],
        category: "destinations",
        facts: [
            { label: "Dining", value: "Fresh Seafood" },
            { label: "Vibe", value: "Mediterranean Chic" },
            { label: "Activity", value: "Evening Stroll" }
        ],
        story: "Cap Monastir is the beating heart of the city's modern leisure. Stroll along the quays, watch the sunset over the masts, and enjoy a traditional lablabi or a high-end seafood dinner in a setting of absolute elegance.\n\nBuilt to mimic the charm of an old Mediterranean village, the Marina is a world of its own. It is where the pulse of the sea meets the pulse of the city's social life. You'll find everything here from elite yacht crews to local families enjoying a celebratory meal. It is clean, safe, and visually stunning—a white-and-blue oasis at the edge of the deep blue.\n\nAs the night falls, the energy shifts. The reflections of the masts dance on the water, and the sound of music from the cafes creates a sophisticated, cosmopolitan atmosphere. It is the best place in the Sahel to see how Monastir has mastered the art of the 'Good Life'.",
        sensory: {
            scent: "Sea Salt & Grilled Fish & Lemon",
            sound: "The Tinkling of Ropes on Aluminum Masts",
            touch: "Fresh Marine Air",
            colors: ["#06B6D4", "#E0F2FE", "#0284C7"]
        },
        kit: {
            footwear: "Smart-casual boat shoes or sandals",
            photo: "Looking back at the city from the far pier",
            hour: "7:00 PM for the blue-hour reflections"
        },
        quote: {
            text: "The Marina is where the Mediterranean comes to show off.",
            author: "Local Yacht Navigator"
        },
        chronology: [
            {
                year: "1980s",
                title: "The Urban Shift",
                description: "The transformation of the port area into a world-class tourism hub."
            }
        ],
        insider: [
            {
                title: "The Far Wall",
                detail: "Walk to the outer sea-wall. It's the best place to hear the open sea crashing only meters away from the calm harbor."
            }
        ],
        seasons: {
            spring: "Perfect for outdoors dining before the summer rush.",
            summer: "The peak of nightlife and international energy.",
            autumn: "The best time for watching the migratory birds in the bay.",
            winter: "Quiet and chic—the best time for fresh, cold-water seafood."
        },
        pledge: "I have shared the harbor's peace, I have seen the white sails home, I am a soul of the Marina.",
        recommendations: ["marina-twilight-escape", "old-port"]
    },
    "medina-destination": {
        id: "medina-destination",
        title: "Medina",
        subtitle: "The Walled Memory",
        description: "An authentic old city where every gate opens into a world of tradition and craft.",
        image: "/destinations/old medina.webp",
        accentColor: "#94a3b8",
        tags: ["Authentic", "Shopping", "History"],
        category: "destinations",
        facts: [
            { label: "Gates", value: "Bab el Gharbi" },
            { label: "Souk", value: "Traditional Textiles" },
            { label: "Taste", value: "Mint Tea & Brik" }
        ],
        story: "The Medina of Monastir is not a tourist trap—it's a living neighborhood. From the copper beaters to the spice sellers, the old city remains the soul of the community, where every stone has a story to tell.\n\nProtected by its massive walls, the Medina has preserved a way of life that is fast disappearing in a globalized world. Here, the 'Souq' is not just a market; it is a social contract. The rhythmic hammering of copper, the intense smell of 'Brik' being fried, and the intricate blue of the doors create a sensory experience that is 100% authentic.\n\nTo walk through the Medina is to participate in a thousand-year-old conversation. You are not a spectator; you are a guest in a world where hospitality is the first law. Every narrow corner holds a secret, from a hidden 17th-century courtyard to a master weaver who still uses a wooden loom his grandfather built.",
        sensory: {
            scent: "Frankincense & Deep-Fried Spices & Old Stone",
            sound: "Hammering Copper & Local Greeting Echoes",
            touch: "Rough Lime-Washed Brick",
            colors: ["#94a3b8", "#1D4ED8", "#F8FAFC"]
        },
        kit: {
            footwear: "Flat, comfortable walking shoes",
            photo: "A low-angle shot of a blue door with jasmine",
            hour: "11:00 AM when the market energy peaks"
        },
        quote: {
            text: "The Medina is a book; those who don't explore its alleys only read one page.",
            author: "Grandfather of the Souk"
        },
        chronology: [
            {
                year: "Medieval",
                title: "The Wall Birth",
                description: "The defensive walls are raised, creating the safe haven that would become the Medina."
            }
        ],
        insider: [
            {
                title: "The Spice Master",
                detail: "Find the shop with the copper pestle hanging out front. He has a secret 'Grandmother's Harissa' recipe you won't find anywhere else."
            }
        ],
        seasons: {
            spring: "The best time for wandering—the air is sweet with citrus blossoms.",
            summer: "The high walls provide natural shade and a cool micro-climate.",
            autumn: "The post-celebration quiet returns, great for serious craft-hunting.",
            winter: "Intimate and cozy. The tea shops are the warmest places in the world."
        },
        pledge: "I have walked the hall of memories, I have shared the community's heart, I am a keeper of the Medina's craft.",
        recommendations: ["medina-treasure-hunt", "medina-alleys"]
    },
    "mosque-destination": {
        id: "mosque-destination",
        title: "Great Mosque",
        subtitle: "A Fortress of Faith",
        description: "One of the most ancient mosques in North Africa, echoing the architectural spirit of the Ribat.",
        image: "/destinations/mosque.webp",
        accentColor: "#1e293b",
        tags: ["Religion", "Sober", "Ancient"],
        category: "destinations",
        facts: [
            { label: "Built", value: "9th Century" },
            { label: "Style", value: "Aghlabid" },
            { label: "Detail", value: "Antique Columns" }
        ],
        story: "Constructed with marble and columns salvaged from Roman and Byzantine ruins, the Great Mosque is a beautiful example of early Islamic austerity and power. It stands as a silent sentinel of faith in the city's heart.\n\nUnlike the more ornate mosques of later eras, the Great Mosque of Monastir (9th Century) is defined by its massive, fortress-like walls and its sober interior. The lack of excessive decoration is intentional—it is an architecture designed for focus, for prayer, and for a direct connection with the divine.\n\nInside, the forest of columns—each one slightly different, carrying the marks of the ancient craftsmen who built Ruspina—creates a space of profound architectural history. It is a bridge between the classical world and the Islamic era, a place where the stones themselves have been recycled into a new, eternal purpose.",
        sensory: {
            scent: "Cold Stone & Clean Carpets & Incense",
            sound: "The Profound Echo of the Adhan",
            touch: "Smooth Antique Marble Columns",
            colors: ["#1e293b", "#334155", "#F8FAFC"]
        },
        kit: {
            footwear: "Shoes to be removed at the door",
            photo: "The repeating perspective of the inner columns",
            hour: "Between prayers for the most peaceful silence"
        },
        quote: {
            text: "The mosque doesn't change; the world changes around it.",
            author: "Imam of Monastir"
        },
        chronology: [
            {
                year: "9th Century",
                title: "The Aghlabid Foundation",
                description: "Built during the golden age of Islamic expansion in North Africa."
            },
            {
                year: "Ongoing",
                title: "The Center",
                description: "Remains the spiritual and historical anchor for the entire Monastir region."
            }
        ],
        insider: [
            {
                title: "The Roman Stones",
                detail: "Look closely at the bases of the columns in the main hall. You can still see fragmentary Latin inscriptions from the city of Ruspina."
            }
        ],
        seasons: {
            spring: "The courtyard is bathed in a soft, clear morning light.",
            summer: "A sanctuary of deep shade and cool stone when the city is baking.",
            autumn: "Brings the most beautiful sunset reflections on the outer walls.",
            winter: "A cozy place of community when the storms hit the coast."
        },
        pledge: "I have heard the call of history, I have stood between the ancient columns, I am a witness of the Great Mosque.",
        recommendations: ["ribat-destination", "medina-destination"]
    },
    "museum-destination": {
        id: "museum-destination",
        title: "Museum",
        subtitle: "The Palace of Skanes",
        description: "Explore the presidential summer palace, a gem of mid-century Tunisian modernism.",
        image: "/destinations/bourguiba meusiem.webp",
        accentColor: "#d97706",
        tags: ["Art", "Royal", "History"],
        category: "destinations",
        facts: [
            { label: "Architect", value: "Olivier-Clément Cacoub" },
            { label: "Era", value: "1960s Modernism" },
            { label: "Fact", value: "Fully Preserved" }
        ],
        story: "The Skanes Palace Museum (Dar Bourguiba) is a flight back in time. It showcases the private life of Tunisia's first president amidst stunning gardens and avant-garde Tunisian architecture that still looks futuristic today.\n\nDesigned by the visionary architect Olivier-Clément Cacoub, the palace is a masterclass in 'Sahel Modernism'. It was designed to be a summer retreat where the light of the Mediterranean could be harnessed to highlight the clean lines and traditional motifs of the Tunisian identity. Every room is a capsule of 1960s aesthetic, from the custom-made furniture to the mosaic-tiled pool area.\n\nWalking through the presidential suites, you feel the weight of history in a setting of absolute luxury. It is not just a museum of objects, but a museum of an era—a time when Tunisia was defining its place in the modern world through education, women's rights, and a unique blend of heritage and progress.",
        sensory: {
            scent: "Hibiscus Flowers & Antique Paper",
            sound: "The Sound of Wind in the Palmetto Trees",
            touch: "Smooth Teak Wood & Cool Ceramic Tiles",
            colors: ["#d97706", "#FDE047", "#1E40AF"]
        },
        kit: {
            footwear: "Fashionable but comfortable flats",
            photo: "The reflection of the palace in the central pool",
            hour: "3:00 PM for the best garden light"
        },
        quote: {
            text: "This palace wasn't built for power; it was built for the vision of a new nation.",
            author: "Museum Curator"
        },
        chronology: [
            {
                year: "1960s",
                title: "The Vision",
                description: "The palace is built as the presidential summer residence in Skanes."
            },
            {
                year: "2013",
                title: "Opening to the World",
                description: "The private residence is transformed into a public museum, preserving every detail of its original interior."
            }
        ],
        insider: [
            {
                title: "The Hidden Map",
                detail: "Look for the large wooden desk in the study. Behind it is a hand-carved map of Tunisia that hides a secret compartment for important documents."
            }
        ],
        seasons: {
            spring: "The best time to see the presidential gardens in full bloom.",
            summer: "The palace pools and gardens offer a cool, regal escape from the heat.",
            autumn: "Brings a soft, nostalgic light to the 1960s interiors.",
            winter: "The museum is quiet and atmospheric, perfect for a deep dive into historical archives."
        },
        pledge: "I have walked the palace of the pioneer, I have seen the blueprint of a nation, I am a student of history.",
        recommendations: ["museum-museum", "mausoleum-destination"]
    }
};

// Helper function to get slug from ID
export const getSlugFromId = (id: string) => id;
