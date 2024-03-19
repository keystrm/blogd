<template>
    <div class="dark:bg-surface-main-dark">
        <!-- Sticky Menu Bar -->
        <div ref="menuBarRef" class="sticky top-0 z-50 bg-white/70 dark:bg-surface-main-dark/70 backdrop-blur-sm">
            <MenuBar class="dark:bg-surface-main-dark/70 bg-surface-50/50 border-b" />
        </div>

        <!-- Page Content -->
        <div class="pt-5"> <!-- Adjust based on MainMenuBar height -->
            <div
                class="container mx-auto px-4 sm:max-w-full md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl space-y-8">

                <!-- Trending Section -->
                <div class="container mx-auto px-4 py-8 text-gray-900 dark:text-white">
                    <h2 class="text-2xl font-bold mb-6">Trending Articles</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <HomeTrendingArticle v-for="(article, index) in trendingArticles" :key="index"
                            :article="article" />
                    </div>
                </div>

                <!-- Adjusted Main Content and Suggested Tags -->
                <div class="flex flex-col lg:flex-row gap-8">
                    <!-- Suggested Tags, order-first in small screens -->
                    <div ref="tagsSectionRef" class="lg:w-1/3 lg:sticky lg:top-20 order-first lg:order-last">
                        <h2 class="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Discover more of what
                            matters to you</h2>
                        <div class="grid gap-4 mb-4">
                            <div v-for="chip in chips" :key="chip"
                                class="chip cursor-pointer text-sm font-medium py-2 px-4 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                                {{ chip }}
                            </div>
                        </div>
                        <button class="text-blue-600 dark:text-blue-400 hover:underline">See more topics</button>
                    </div>

                    <!-- Article List Here -->
                    <div class="flex-grow space-y-4">
                        <HomeArticle v-for="(article, index) in articles" :key="index" :article="article" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const chips =ref(["Programming", "Data Science", "Technology", "Self Improvement", "Writing", "Relationships", "Machine Learning", "Productivity", "Politics"])
const trendingArticles = ref<TrendingArticle[]>([
  {
      "title": "Exploring the Depths of Ocean Biodiversity",
      "author": "Marina Waters",
      "authorAvatar": "https://randomuser.me/api/portraits/women/44.jpg",
      "publishDate": "2024-03-10",
      "readTime": "5 min read"
  },
  {
      "title": "The Future of Renewable Energy: Beyond 2024",
      "author": "Elijah Green",
      "authorAvatar": "https://randomuser.me/api/portraits/men/32.jpg",
      "publishDate": "2024-03-12",
      "readTime": "7 min read"
  },
  {
      "title": "Decoding the Language of Dreams",
      "author": "Sophia Dreamcatcher",
      "authorAvatar": "https://randomuser.me/api/portraits/women/50.jpg",
      "publishDate": "2024-03-15",
      "readTime": "6 min read"
  },
  {
      "title": "Artificial Intelligence: The New Frontier",
      "author": "Leo Tech",
      "authorAvatar": "https://randomuser.me/api/portraits/men/29.jpg",
      "publishDate": "2024-03-05",
      "readTime": "8 min read"
  },
  {
      "title": "The Secrets of Successful Time Management",
      "author": "Claire Efficient",
      "authorAvatar": "https://randomuser.me/api/portraits/women/68.jpg",
      "publishDate": "2024-03-08",
      "readTime": "4 min read"
  },
  {
      "title": "Journey Through the World's Ancient Civilizations",
      "author": "Marcus Historia",
      "authorAvatar": "https://randomuser.me/api/portraits/men/77.jpg",
      "publishDate": "2024-03-14",
      "readTime": "10 min read"
  }
]
);

const articles = ref<Article[]>(
  [
      {
          "title": "Personal garden section road end raise thought.",
          "summary": "Office thank center difficult including laugh. Might though fish per industry. Product space trouble stage suffer design sign weight.",
          "author": "Kevin Simmons",
          "authorAvatar": "https://i.pravatar.cc/100?img=2",
          "publishDate": "2010-03-08",
          "readTime": "12 min read",
          "imageUrl": "https://picsum.photos/800/400?random=783"
      },
      {
          "title": "Need care south.",
          "summary": "Middle particularly marriage daughter argue hospital. Center system environment nice trip ten.\nClearly night look choose wide mission. Bad speak spend clearly paper. Daughter care such per.",
          "author": "Linda Roberts",
          "authorAvatar": "https://i.pravatar.cc/100?img=27",
          "publishDate": "1980-02-09",
          "readTime": "11 min read",
          "imageUrl": "https://picsum.photos/800/400?random=676"
      },
      {
          "title": "End today him stuff.",
          "summary": "Mr community forward security door. Range evening low benefit cultural remember blood myself.\nThree book a shake speech themselves. Behind north read church walk those. Stage husband animal.",
          "author": "Crystal Mcdonald",
          "authorAvatar": "https://i.pravatar.cc/100?img=19",
          "publishDate": "2006-12-24",
          "readTime": "5 min read",
          "imageUrl": "https://picsum.photos/800/400?random=262"
      },
      {
          "title": "Loss ok it next west.",
          "summary": "Tree cost sound pay performance. Now best any management same finish.\nConsumer prove view meet collection type. Who which ever rather expect require.",
          "author": "Jeremy Elliott",
          "authorAvatar": "https://i.pravatar.cc/100?img=66",
          "publishDate": "1976-01-31",
          "readTime": "6 min read",
          "imageUrl": "https://picsum.photos/800/400?random=123"
      },
      {
          "title": "Put theory bring left campaign appear establish.",
          "summary": "Many tonight career job. Film look gun exactly its that wind exist. Painting beat learn.",
          "author": "Gerald Wilson",
          "authorAvatar": "https://i.pravatar.cc/100?img=8",
          "publishDate": "1997-06-08",
          "readTime": "2 min read",
          "imageUrl": "https://picsum.photos/800/400?random=371"
      },
      {
          "title": "Affect modern accept scene check check control four.",
          "summary": "Blood husband first wait. We member protect build.\nChance form pressure still conference head. Deal remember particularly training capital wide.",
          "author": "Cynthia David",
          "authorAvatar": "https://i.pravatar.cc/100?img=11",
          "publishDate": "1991-11-30",
          "readTime": "4 min read",
          "imageUrl": "https://picsum.photos/800/400?random=837"
      },
      {
          "title": "Consumer seem remain itself protect paper any.",
          "summary": "Charge huge center attack arrive mouth. Brother some skin none pattern community just.",
          "author": "Brandon Macias",
          "authorAvatar": "https://i.pravatar.cc/100?img=67",
          "publishDate": "1999-06-25",
          "readTime": "5 min read",
          "imageUrl": "https://picsum.photos/800/400?random=177"
      },
      {
          "title": "Mind lot keep important boy break kind.",
          "summary": "Bad type order edge eight support measure arrive. Which game face level.\nIndicate before production. Quite win life town.",
          "author": "Keith Davis",
          "authorAvatar": "https://i.pravatar.cc/100?img=24",
          "publishDate": "1986-08-30",
          "readTime": "2 min read",
          "imageUrl": "https://picsum.photos/800/400?random=648"
      },
      {
          "title": "Institution read thousand himself.",
          "summary": "Just seem evidence say my. Federal simply day. Mother Democrat behavior never available heavy quickly.",
          "author": "Kenneth Patel",
          "authorAvatar": "https://i.pravatar.cc/100?img=19",
          "publishDate": "1991-05-09",
          "readTime": "8 min read",
          "imageUrl": "https://picsum.photos/800/400?random=749"
      },
      {
          "title": "Color fine radio party.",
          "summary": "Away degree nature contain. Product finish where effort. Red peace shake material.\nStudy discussion develop. Enter wrong Democrat audience main.",
          "author": "Sydney Collins",
          "authorAvatar": "https://i.pravatar.cc/100?img=40",
          "publishDate": "2005-10-26",
          "readTime": "4 min read",
          "imageUrl": "https://picsum.photos/800/400?random=336"
      },
      {
          "title": "Perhaps doctor my cover about.",
          "summary": "Market this north response word. Blood agreement study.",
          "author": "Timothy Morgan",
          "authorAvatar": "https://i.pravatar.cc/100?img=39",
          "publishDate": "2010-09-02",
          "readTime": "5 min read",
          "imageUrl": "https://picsum.photos/800/400?random=109"
      },
      {
          "title": "Military wonder plant population I design.",
          "summary": "Where tax summer whom range. Debate mention but part avoid market compare.\nWrong human he accept term leader compare interview. Opportunity they result.",
          "author": "Dylan English",
          "authorAvatar": "https://i.pravatar.cc/100?img=55",
          "publishDate": "2008-06-21",
          "readTime": "8 min read",
          "imageUrl": "https://picsum.photos/800/400?random=358"
      },
      {
          "title": "Indicate season leave rock.",
          "summary": "Ahead then computer safe save.\nAround pattern organization region. Public my feel beat white mission. Always individual necessary hope describe rest. Offer operation professional respond.",
          "author": "Noah Taylor",
          "authorAvatar": "https://i.pravatar.cc/100?img=3",
          "publishDate": "2024-01-10",
          "readTime": "15 min read",
          "imageUrl": "https://picsum.photos/800/400?random=429"
      },
      {
          "title": "Air surface sing.",
          "summary": "Ability once hour get fear. Summer street recognize face send evening. But southern authority social force pass chair.",
          "author": "Gregg Jensen",
          "authorAvatar": "https://i.pravatar.cc/100?img=60",
          "publishDate": "1974-04-19",
          "readTime": "5 min read",
          "imageUrl": "https://picsum.photos/800/400?random=793"
      },
      {
          "title": "Society picture if future.",
          "summary": "Himself race them leg. Unit size state culture. Use throw right but citizen official.\nDemocrat edge worker whose store force. Opportunity Mr arm interest nothing.",
          "author": "Tony West",
          "authorAvatar": "https://i.pravatar.cc/100?img=3",
          "publishDate": "2007-07-09",
          "readTime": "6 min read",
          "imageUrl": "https://picsum.photos/800/400?random=207"
      },
      {
          "title": "Budget a provide pull.",
          "summary": "Oil material option produce realize their. Evening drug resource something green than officer. Exist both assume wear total.\nBetter foot probably hold. Reason store hit suggest we morning.",
          "author": "Christopher Parker",
          "authorAvatar": "https://i.pravatar.cc/100?img=7",
          "publishDate": "2021-06-21",
          "readTime": "13 min read",
          "imageUrl": "https://picsum.photos/800/400?random=529"
      },
      {
          "title": "Time record building join Mr executive.",
          "summary": "Take race along the matter trial. Movie rise tell investment Mrs. Yourself very agent third rather.",
          "author": "Nicole Walters",
          "authorAvatar": "https://i.pravatar.cc/100?img=66",
          "publishDate": "2000-08-04",
          "readTime": "14 min read",
          "imageUrl": "https://picsum.photos/800/400?random=747"
      },
      {
          "title": "Message past down remember.",
          "summary": "Here consumer central street determine could small. Offer year behavior.\nClaim weight explain food bad science financial. By wind fill newspaper. Rather point new goal.",
          "author": "Claire Berg",
          "authorAvatar": "https://i.pravatar.cc/100?img=5",
          "publishDate": "1992-12-16",
          "readTime": "5 min read",
          "imageUrl": "https://picsum.photos/800/400?random=463"
      },
      {
          "title": "Agree single at though agency.",
          "summary": "Break sort collection never force large stage. Hope feel actually network. Remember special memory city growth become listen.",
          "author": "Tracy Kim",
          "authorAvatar": "https://i.pravatar.cc/100?img=27",
          "publishDate": "2016-05-23",
          "readTime": "13 min read",
          "imageUrl": "https://picsum.photos/800/400?random=192"
      },
      {
          "title": "Authority pass affect sense under mention art under.",
          "summary": "Parent computer small husband. Quickly green tonight control.\nAccount tonight mention hundred item its they. Off report through foot factor.",
          "author": "Alexa Griffin",
          "authorAvatar": "https://i.pravatar.cc/100?img=53",
          "publishDate": "1976-04-01",
          "readTime": "3 min read",
          "imageUrl": "https://picsum.photos/800/400?random=150"
      }
  ]
)

const menuBarRef: Ref<HTMLElement | null> = ref(null);
const tagsSectionRef: Ref<HTMLElement | null> = ref(null);

const handleScroll = () => {
  if (!menuBarRef.value || !tagsSectionRef.value) {
      return;
  }

  // Calculate the distance of the menu bar's bottom from the top of the viewport
  const menuBarBottom: number = menuBarRef.value.getBoundingClientRect().bottom + window.scrollY;

  // Get the scrolling container or window's scroll position
  const scrollPosition: number = window.scrollY;

  // Calculate the stopping point for the "Suggested Tags" div (you might adjust this based on your layout)
  const stopPoint: number = menuBarBottom - 50; // 20px from the bottom of the menu bar, adjust as needed

  // Check if the scroll position has reached or passed the stop point
  if (scrollPosition >= stopPoint) {
      const diff: number = scrollPosition - stopPoint;
      tagsSectionRef.value.style.transform = `translateY(${-diff}px)`;
  } else {
      tagsSectionRef.value.style.transform = 'translateY(0px)';
  }
};

onMounted(async () => {
  await nextTick();
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

</script>

<style scoped>
/* Additional styling can be added here, if needed */
</style>