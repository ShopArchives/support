hrft33n87d = "Discord is a registered trademark of Discord Inc. Shop Archives is not affiliated with, endorsed or sponsored by Discord Inc.";
n78ndg290n = "Greetings Shop Archives Staff and/or Dataminer! This model has everything only available for developers, only use this if you know what you're doing. Don't break anything :)";
mgx2tmg9tx = "Experiments";
mn7829t62d = "Test out new features";
y5n875tx29 = "Dev Options";

document.body.classList.add('theme-dark');

// api = 'https://raw.githubusercontent.com/Yappering/api/main/v2';
api = 'https://shop-archives-api.vercel.app/api';
prvapi = 'https://raw.githubusercontent.com/Yappering/private-api/refs/heads/main/v2';
discordsupport = 'https://support.discord.com/hc/en-us/articles/';
discordblog = 'https://discord.com/blog/';
apidesignedurl = 'https://api.yapper.shop/v2';
yapperblog = 'https://yapper.shop/blog/';
cdn = 'https://cdn.yapper.shop/';
tmpapi = 'https://api.yapper.shop/tmp';

// if (localStorage.api_designed_url != "false") {
//     if (localStorage.experiment_2025_02_fetch_from_vercel_endpoits === "Treatment 1: Enabled") {
//         api = 'https://shop-archives-api.vercel.app/api'
//     } else {
//         api = apidesignedurl;
//     }
// }

function privateAPICheck() {
    // if (localStorage.force_all_api_to_fectch_private_api == "true") {
    //     api = prvapi;
    //     tmpapi = 'https://raw.githubusercontent.com/Yappering/api/main/tmp';
    // } else if (localStorage.api_designed_url != "false") {
    //     api = apidesignedurl;
    // } else {
    //     api = 'https://raw.githubusercontent.com/Yappering/api/main/v2';
    //     tmpapi = 'https://raw.githubusercontent.com/Yappering/api/main/tmp';
    // }
}


if (localStorage.experiment_2025_02_fetch_from_vercel_endpoits === "Treatment 1: Enabled") {
    endpoints = [
        COLLECTIBLES = "/collectibles-categories",
        COLLECTIBLES_IN_SHOP = "/collectibles-categories-published",
        CONSUMABLES = "/consumables",
        MISCELLANEOUS = "/miscellaneous-categories",
        PROFILES_PLUS = "/profiles-plus-categories",
        HOME_PAGE_ALL = "/preview-1",
        HOME_PAGE_LEAKS = "/preview-2",
        HOME_PAGE_PPLUS = "/preview-3",
        PROFILE_EFFECTS = "/user-profile-effects",
        DOWNLOADABLE_DATA = "/downloads",
        PROFILES_PLUS_EFFECTS = "/profiles-plus-profile-effects",
        LEAKS = "/leaked-categories",
        COLLECTIBLES_MARKETING = "/collectibles-marketing",
        COLLECTIBLES_VARIANTS = "/collectibles-categories-variants",
        EXPERIMENT_ROLLOUTS = "/rollout-handler",
        COLLECTIBLES_SHOP_HOME = "/collectibles-shop-home",
        NEW_ITEMS = "/new-items",
        ORBS_SHOP = "/orbs-shop",
        ORBS_SHOP_DEFAULT = "/orbs-shop-default",
        HEARTBEAT_DATA = "/heartbeat-data"
    ]
} else {
    endpoints = [
        COLLECTIBLES = "/collectibles-categories.json",
        COLLECTIBLES_IN_SHOP = "/collectibles-categories-published.json",
        CONSUMABLES = "/consumables.json",
        MISCELLANEOUS = "/miscellaneous-categories.json",
        PROFILES_PLUS = "/profiles-plus-categories.json",
        HOME_PAGE_ALL = "/preview-1.json",
        HOME_PAGE_LEAKS = "/preview-2.json",
        PROFILE_EFFECTS = "/user-profile-effects.json",
        DOWNLOADABLE_DATA = "/downloads.json",
        PROFILES_PLUS_EFFECTS = "/profiles-plus-profile-effects.json",
        LEAKS = "/leaked-categories.json",
        COLLECTIBLES_MARKETING = "/collectibles-marketing.json",
        COLLECTIBLES_VARIANTS = "/collectibles-categories-variants.json",
        EXPERIMENT_ROLLOUTS = "/rollout-handler.json",
        COLLECTIBLES_SHOP_HOME = "/collectibles-shop-home.json",
        NEW_ITEMS = "/new-items.json",
        ORBS_SHOP = "/orbs-shop.json",
        ORBS_SHOP_DEFAULT = "/orbs-shop-default.json"
    ]
}


yapper_categories = [
    WINDOWKILL = "profiles-plus-1",
    BOPL_BATTLE = "profiles-plus-2",
    PAPER_BEACH = "profiles-plus-3",
    WINDOWKILL_V2 = "profiles-plus-4",
    FIVE_NIGHTS_AT_FREDDYS = "profiles-plus-5",
    PLUS_SPECIAL_EVENT = "profiles-plus-6",
    GEOMETRY_DASH = "profiles-plus-7",
    PAPER_BEACH_V2 = "profiles-plus-8",
    RBXDOORS = "profiles-plus-9"
]


discord_categories = [
    FANTASY = "1144003461608906824",
    ANIME = "1144302037593497701",
    BREAKFAST = "1144054000099012659",
    DISXCORE = "1144058340327047249",
    FALL = "1157406994873991284",
    HALLOWEEN = "1157410718711304313",
    WINTER = "1174459301239197856",
    MONSTERS = "1179493515038818325",
    CYBERPUNK = "1197342727608746044",
    LUNAR_NEW_YEAR = "1202069709281828935",
    ELEMENTS = "1207046915880124426",
    ANIME_V2 = "1212565175790473246",
    SPECIAL_EVENTS = "1217175518781243583",
    SPECIAL_EVENTS_2 = "1309309974266118144",
    SPRINGTOONS = "1217622942175727736",
    SHY = "1220513972189663413",
    LOFI_VIBES = "1228243842684162121",
    GALAXY = "1232029045928099922",
    FEELIN_RETRO = "1237649643073044491",
    PIRATES = "1237653589896200272",
    ARCADE = "1245086656973901894",
    TIDE = "1252404112650407998",
    DARK_FANTASY = "1256321669388308595",
    ROBERT = "1262491137386614805",
    STORM = "1265375293397270650",
    DOJO = "1266520267946201099",
    THE_VAULT = "1277733175191277721",
    AUTUMN_EQUINOX = "1282816432056569866",
    BAND = "1285465421339693076",
    SPOOKY_NIGHT = "1287835634089594972",
    CHANCE = "1293373563494993952",
    MYTHICAL_CREATURES = "1298033986811068497",
    WARRIOR = "1303490165284802580",
    KAWAII_MODE = "1306330663213072494",
    LOFI_GIRL = "1309668861943218229",
    WINTER_WONDERLAND = "1314020997204283476",
    FANTASY_V2 = "1324454241254903829",
    STEAMPUNK = "1326333074241486859",
    PROGRESS = "1333278032999485461",
    RADIATE = "1336483992429658112",
    VALENTINES = "1333866045521395723",
    ORB = "1332505418219655258",
    ANIME_V3 = "1341506445249609728",
    INSOMNIA = "1343751621364027462",
    NAMEPLATE_TEST = "1344802365307621427",
    AESPA = "1346499610977243196"
]

category_types = [
    HERO = 0,
    FEATURED = 1,
    FEED = 2,
    WIDE_BANNER = 3
]

item_types = [
    NONE = 100,
    AVATAR_DECORATION = 0,
    PROFILE_EFFECT = 1,
    NAMEPLATE = 2,
    BUNDLE = 1e3,
    VARIANTS_GROUP = 2e3,
    EXTERNAL_SKU = 3e3
]

const nameplate_palettes = {
    crimson: {
        "darkBackground": "#900007",
        "lightBackground": "#E7040F"
    },
    berry: {
        "darkBackground": "#893A99",
        "lightBackground": "#B11FCF"
    },
    sky: {
        "darkBackground": "#0080B7",
        "lightBackground": "#56CCFF"
    },
    teal: {
        "darkBackground": "#086460",
        "lightBackground": "#7DEED7"
    },
    forest: {
        "darkBackground": "#2D5401",
        "lightBackground": "#6AA624"
    },
    bubble_gum: {
        "darkBackground": "#DC3E97",
        "lightBackground": "#F957B3"
    },
    violet: {
        "darkBackground": "#730BC8",
        "lightBackground": "#972FED"
    },
    cobalt: {
        "darkBackground": "#0131C2",
        "lightBackground": "#4278FF"
    },
    clover: {
        "darkBackground": "#047B20",
        "lightBackground": "#63CD5A"
    }
}


HELP_AVATAR_DECORATIONS = "13410113109911"
HELP_SHOP = "17162747936663"
HELP_PROFILE_EFFECTS = "17828465914263"
HELP_HD_STREAMING_POTION = "27343254089623"
HELP_CONFETTI_POTION = "29133681590679"


BLOG_AVATAR_DECORATIONS_PROFILE_EFFECTS = "avatar-decorations-collect-and-keep-the-newest-styles"


YAPPER_BLOG_2024_RECAP = "2024-recap"
YAPPER_BLOG_2025_RECAP = "2025-recap"


DISMISSIBLE_2024_RECAP = "assets/103.svg"
DISMISSIBLE_2025_RECAP = "assets/160.png"


m = ["1329609528441831537", "1329609528471195659", "1329609528492429332", "1329609528504746075", "1329609528525979658", "1329609528546693170", "1329609528571858975", "1329611507381829702", "1329611507402801312"];
g = new Date('2025-01-31');
newColorsSKUIDS = ["1144308439720394944", "1154896005045694555", "1144307257807491094", "1144305233707671573", "1144307629225672846", "1144308196723408958", "1144307957425778779", "1212569856189407352", "1212570343567261736", "1212570596970467378", "1212581390936178768", "1212569433839636530", "1212581147675205652", "1139323101881061466", "1139323093551165533", "1139323101008642101", "1212582298893946880", "1212582372877541427", "1212582452640350238", "1139323100568244355"];
newColorsExpireDate = new Date('2025-03-08');
N = new Date();
I = ["1212569433839636530", "1144308439720394944", "1314020996201713685", "1212570343567261736", "1314020996776329279", "1271174640026255380", "1271175049168031815", "1232073608168472638", "1293373563407175680", "1314020996327542894", "1139323093991575696", "1232071157746765906", "1232071712695386162", "1144307957425778779", "1306330662990643252", "1280621222496964630", "1306330663015809024", "1306330663070334996", "1243617249974288404", "1309668861578186803", "1303490165213237338", "1306330662898372639", "1298033986508951685", "1282816432026943488", "1306330663137443991", "1197344764174008452", "1298033986727055370", "1298033986571866112", "1271175120437641261", "1314020996361093171", "1309668861645426729", "1256321669467865088", "1314020996864413717", "1306752744278982737", "1271174732577767626", "1144307257807491094", "1144308196723408958", "1287835633787732070", "1306330663162609685", "1306330662940311726", "1309668861901279422", "1282816431871754281", "1287835633485877369", "1228234634379132958", "1144305233707671573", "1298033986643169360", "1139323093551165533", "1212569856189407352", "1282816431850782730", "1144307629225672846", "1232070870093008937", "1207047014769234001", "1212582298893946880", "1232073286582538261", "1282816431985004594", "1293373563381878836", "1282816431964028958", "1306752744258011166", "1309668861846753372", "1271174324375519273", "1256321669426053198", "1287835633615765524", "1286504131325853739", "1306330663183581247", "1139323099687436419", "1287835633590734848", "1256321669493166214", "1286504131518791816", "1243620093431119922", "1262492035558932604", "1306330662927859723", "1197344326133502032", "1228251351415263242", "1232073448415821854", "1158572178179108968", "1298033986752221204", "1262491137394868311", "1309668861620260874", "1271174241860980907", "1220513989729976411", "1282820582408192061", "1154896005045694555", "1207047597294886923", "1306330663036780695", "1309668861674786877", "1197344693630009424", "1306330662965477478", "1174460780842856588", "1271174907081789524", "1282816431813169272", "1298033986622328842", "1139323101881061466", "1262491690900656267", "1303490165171294268", "1139323100568244355", "1243619479645065287", "1262491690971955284", "1316087100260483174", "1139323101008642101", "1228251144065777765", "1207048289610899526", "1287835633561239683", "1232072121950146560", "1303490165045727317", "1228246010116050965", "1309668861871919316", "1207049364464345158", "1243618816639107223", "1265421074514841751", "1316087100277395607", "1159280677246742548", "1262492035558932607", "1207047808838799410", "1306752744299954306", "1298033986668335135", "1266160780928352268", "1262491137386614812", "1139323092645183591", "1220513977683935373", "1256321669467865091", "1237654942202990602", "1287835633536209079", "1262491137394868305", "1256321669493166217", "1212582452640350238", "1158572275507937342", "1306752744228524052", "1174459546748600481", "1262491137394868308", "1309668861599285249", "1262492035558932610", "1144046002110738634", "1293373563184877618", "1298033986693500960", "1285465421260263464", "1306330663091306608", "1287835633645125653", "1303490165074825296", "1298033986538569781", "1303490165150322698", "1262491690900656261", "1256321669467865094", "1207048656289534022", "1285681070196396177", "1287835633674620949", "1237654224712765440", "1293373563121696891", "1303490165255180298", "1303490165120962651", "1212582372877541427", "1287835634005970994", "1303490165099991143", "1271564593746939904", "1314020996629532686", "1316087100260483176", "1228233390260486164", "1287835633867559022", "1158572263411556373", "1303490165192265799", "1237654783209508904", "1309668861704146984", "1212581147675205652", "1309668861548957738", "1245088205330710539", "1287835633896783952", "1316087100260483178", "1139323099251232828", "1262491690900656258", "1232072859485208687", "1197344396983664670", "1309668861788033074", "1314020996600172554", "1159280847262859364", "1314020996461760542", "1220514048068812901", "1293373563302318110", "1228251846032756796", "1197344636558114986", "1282820582223642624", "1287835634035331072", "1298033986777387059", "1243619781362450442", "1282816432001777794", "1212570596970467378", "1157409074422481023", "1256321669426053195", "1146328961417224193", "1293373563327483984", "1303490165234208810", "1266160780978556969", "1228237157554978817", "1287835633947115570", "1282820582345408595", "1271174810227179562", "1282816431830077542", "1287835633842258022", "1283211414323990538", "1282820582303334482", "1282820582429298748", "1306330663116472371", "1157407831348228141", "1293373563210043442", "1287835633515102228", "1309668861758672997", "1287835633703845888", "1287835633733341224", "1197344575832981605", "1316087100260483180", "1237653964582031400", "1287835633817227297", "1266493591207940133", "1309668861817393263", "1316087100260483182", "1298033986555351132", "1237650542772228096", "1207049498065375343", "1287835633980669972", "1314020996516286485", "1285465421193154560", "1268362891946627103", "1282820582244880496", "1293373563352649961", "1220432740638523543", "1243620329331626044", "1220432697718083614", "1267521289330102344", "1146328960951668776", "1293373563457507463", "1245088094437507163", "1262491690900656264", "1314020996432400404", "1220513984273186816", "1293373563159449653", "1314020996721803306", "1285681070196396179", "1285465421050548345", "1282820582366511229", "1256321669467865097", "1285465421285429258", "1293373563239272458", "1271174154514595891", "1217625794382401577", "1228252219502100530", "1285465421029576704", "1243618548673417298", "1220432647453409384", "1266493591275044903", "1217626024540508170", "1232072520249643028", "1245088254647205991", "1237654867330469949", "1314020996570812506", "1314020996227006484", "1245087968759382207", "1144006094134456352", "1314020997166403624", "1144048390594908212", "1287835633762701382", "1212581390936178768", "1285465420995756065", "1217626509737459852", "1314020996491116575", "1309668861729312898", "1237650411410685972", "1245087661316898877", "1217627230818009171", "1256321669388308601", "1314020996310896672", "1274105879238676561", "1293373563432341574", "1314020996273016863", "1282816431943057460", "1220513995308400680", "1293373563264569416", "1228252042791878707", "1314020997078323200", "1237654031732703272", "1267521289355268154", "1298033986592837754", "1285465421214126100", "1245087724265013299", "1314020996990242816", "1314020996663087154", "1282820582282629171", "1282816431922085888", "1314020997107683411", "1237654124443734026", "1314020997137043578", "1266161342801383434", "1285465421096685639", "1237654692985700352", "1174459480348565554", "1314020997019602984", "1314020996252176444", "1144003752978829455", "1282816431901118474", "1285465421306400858", "1285465421239291904", "1285465420979245087", "1314020996692447234", "1144048977138946230", "1217627051217911848", "1217626219651006495", "1217625572168044604", "1286504131392962641", "1237650618777075712", "1207048049571139584", "1314020996289921154", "1237654615474962472", "1314020996927328276", "1286504131439366184", "1285465421016862730", "1217625289681801316", "1243619153688920206", "1217624148080332820", "1144049316009353338", "1245481938202918912", "1245088023452975104", "1314020996960882789", "1285465421121851445", "1243617981435478102", "1144049603109470370", "1285465421071519825", "1256321669426053192", "1245087912350187520", "1207049115339591681", "1144049924397334651", "1237649939027333232", "1237650103980920872", "1237650023794081823", "1237650179721527347", "1245087850177888356", "1285465421167988758", "1277733174797008931"];



const params = new URLSearchParams(window.location.search);

function setParams(params) {
    const url = new URL(window.location);

    // Clear all existing query parameters
    url.search = '';

    // Set the new query parameters from the provided object
    Object.entries(params).forEach(([key, value]) => {
        url.searchParams.set(key, value);
    });

    // Update the address bar without reloading the page
    history.replaceState(null, '', url);
}

function addParams(params) {
    const url = new URL(window.location);

    Object.entries(params).forEach(([key, value]) => {
        url.searchParams.set(key, value);
    });

    history.replaceState(null, '', url);
}

// Function to clear the shop data
function clearShopData() {
    const output = document.querySelector("[data-shop-output]");
    output.innerHTML = ''; // Clears the content of the shop category
    if (params.get("page") === "consumables" || params.get("page") === "orbs") {
        createPotionsCategoryLoadingElement()
    } else {
        createShopCategoryLoadingElement()
    }
}

// Function to fetch and display shop data
function fetchData() {
    if (params.get("page") === "nameplates") {
        createRecap2024Element()
    } else
    if (params.get("page") === "experiments") {
        createExperimentsElement()
    }
}

// Function to copy the emoji to clipboard
function copyEmoji(emoji) {
    navigator.clipboard.writeText(emoji)
}

// Redirect to Google if emojiCopy is null
function redirectToGoogle() {
    window.location.href = 'https://discord.gg/Mcwh7hGcWb';
}

const clickable_side_tabs_container = document.getElementById('clickable-side-tabs-container');
if (clickable_side_tabs_container) {  // Check if element exists
    document.getElementById('clickable-side-tabs-container').innerHTML = `
        <p class="center-text" style="font-size: 12px; display: flex; color: var(--white);">${hrft33n87d}</p>
        <div id="home-section">
            <button class="dm-button" id="experiments-tab" onclick="setParams({page: 'experiments'}); location.reload();">
                <p class="dm-button-text">Experiments</p>
            </button>
        </div>
        <div class="dm-divider">How to</div>
        <div id="collectibles-section">
            <button class="dm-button" id="recap-2024-tab" onclick="setParams({page: 'nameplates'}); location.reload();">
                <p class="dm-button-text">Nameplates</p>
            </button>
        </div>
    `;
}

// if (localStorage.experiment_2024_11_recap === "Treatment 1: Enabled") {
//     document.getElementById('recap-2024-tab-loading').innerHTML = `
//         <img class="recap-2024-tab-decoration" src="https://cdn.yapper.shop/assets/157.png">
//         <button class="dm-button" id="recap-2024-tab" onclick="setParams({page: 'year_recap'}); location.reload();">
//             <p class="dm-button-text">2025 Recap</p>
//         </button>

//     `;
//     document.getElementById('recap-2024-tab').style.backgroundImage = "linear-gradient(90deg, rgba(200, 91, 241, 0.00) 18.75%, #C85BF1 108.26%)";
// }

function pageCheck() {
    if (params.get("page") === "experiments") {
        document.title = "How to enable Experiments | Shop Archives";
        document.getElementById("experiments-tab").classList.add('dm-button-selected');
        document.getElementById("top-bar-container").innerHTML = `
            <h2 style="margin-left: 260px; margin-top: 10px;">How to enable Experiments</h2>
        `;
        fetchData()
    } else if (params.get("page") === "nameplates") {
        document.title = "How to get Nameplates early | Shop Archives";
        document.getElementById("recap-2024-tab").classList.add('dm-button-selected');
        document.getElementById("top-bar-container").innerHTML = `
            <h2 style="margin-left: 260px; margin-top: 10px;">How to get Nameplates early</h2>
        `;
        fetchData()
    } else {
        setParams({page: 'nameplates'});
        document.title = "How to get Nameplates early | Shop Archives";
        location.reload();
    }
}

pageCheck();

function setPage(params) {
    setParams({page: params});
    location.reload();
}


function createRecap2024Element() {
    document.getElementById("everything-housing-container").innerHTML = `
        <div class="thy-shop-category-idk" style="height: auto;">
            <img class="shop-category-marketing-bg" style="height: 100%; position: absolute; filter: blur(3px);" src="${cdn}assets/110.svg">

            <div style="height: 60px; padding-top: 30px;">
            </div>
            
            <div class="a2024-recap-text-card-1">
                <h1 class="center-text abcgintonord" style="font-size: 44px; margin-top: 0px; margin-bottom: 0px;">How to get Nameplates early</h1>

                <p class="center-text" style="font-size: 18px;">This tutorial will teach you how Discord Nameplates early.</p>
                <p class="center-text" style="font-size: 18px;">Requirements:</p>
                <a class="clickable" style="color: lightblue;" onClick="setPage('experiments')">Experiments Enabled</a>
            </div>

            <hr style="opacity: 0; height: 15px;">

            <div class="a2024-recap-text-card-1">
                <h1 class="center-text abcgintonord" style="font-size: 44px; margin-top: 0px; margin-bottom: 0px;">Step 1</h1>

                <p>Locate the ''Experiments'' tab in the user settings and set the experiment ''2025-02_nameplate_purchasing'' to ''Treatment 1: Can purchase''.</p>

                <img class="a2024-recap-img-1" src="${cdn}assets/163.png">
            </div>

            <hr style="opacity: 0; height: 30px;">

            <div class="a2024-recap-text-card-1">
                <h1 class="center-text abcgintonord" style="font-size: 44px; margin-top: 0px; margin-bottom: 0px;">Step 2</h1>

                <a style="color: lightblue;" href="https://yapper.shop/?page=miscellaneous">Visit Shop Archives and find the SKU ID of the Nameplate you want and copy it.</a>

                <p>Copy just the number e.g. ''1344802364934062152''.</p>

                <img class="a2024-recap-img-1" src="${cdn}assets/164.png">
            </div>

            <hr style="opacity: 0; height: 30px;">

            <div class="a2024-recap-text-card-1">
                <h1 class="center-text abcgintonord" style="font-size: 44px; margin-top: 0px; margin-bottom: 0px;">Step 3</h1>

                <p>on Discord, locate the ''Payment Flow Modals'' tab in the user settings and paste the SKU ID into the box under ''Collectibles Payment Modal Test'' and click ''Open Collectibles Payment Modal for SKU''.</p>

                <img class="a2024-recap-img-1" src="${cdn}assets/165.png">

                <p>If clicking ''Open Collectibles Payment Modal for SKU'' hardlocks Discord, (getting Nameplates has most likely been patched) refresh Discord.</p>
            </div>

            <hr style="opacity: 0; height: 30px;">

            <div class="a2024-recap-text-card-1">
                <h1 class="center-text abcgintonord" style="font-size: 44px; margin-top: 0px; margin-bottom: 0px;">Step 4</h1>

                <p>on Discord, locate the ''Payment Flow Modals'' tab in the user settings and paste the SKU ID into the box under ''Collectibles Payment Modal Test'' and click ''Open Collectibles Payment Modal for SKU''.</p>

                <img class="a2024-recap-img-1" src="${cdn}assets/165.png">

                <p>If clicking ''Open Collectibles Payment Modal for SKU'' hardlocks Discord, (getting Nameplates has most likely been patched) refresh Discord.</p>
            </div>

            <hr style="opacity: 0; height: 30px;">

            <div class="a2024-recap-text-card-1">
                <h1 class="center-text abcgintonord" style="font-size: 44px; margin-top: 0px; margin-bottom: 0px;">Step 5</h1>

                <p>Purchase your desired Nameplate.</p>

                <img class="a2024-recap-img-1" style="max-height: 700px; width: auto;" src="${cdn}assets/166.png">

                <p style="opacity: 0; width: 0px; height: 0px;">a</p>

                <a style="color: lightblue;" href="https://yapper.shop/?page=miscellaneous">Prices for Nameplates are shown on Shop Archives.</a>
            </div>

            <hr style="opacity: 0; height: 30px;">

            <div class="a2024-recap-text-card-1">
                <h1 class="center-text abcgintonord" style="font-size: 44px; margin-top: 0px; margin-bottom: 0px;">Step 6</h1>

                <p>You can now go to you profile settings and click ''Change Nameplate''.</p>

                <img class="a2024-recap-img-1" src="${cdn}assets/167.png">
            </div>

            <hr style="opacity: 0; height: 30px;">

            <div class="a2024-recap-text-card-1">
                <h1 class="center-text abcgintonord" style="font-size: 44px; margin-top: 0px; margin-bottom: 0px;">Step 7</h1>

                <p>Apply the Nameplate you purchased and your Nameplate will be visible to anyone with the experiment ''2025-02_name_plate_experiment'' set to ''Treatment 1: Can see'' or ''Treatment 2: Can see and buy''.</p>

                <img class="a2024-recap-img-1" src="${cdn}assets/168.png">
            </div>

            <hr style="opacity: 0; height: 30px;">

            <div class="a2024-recap-text-card-1" style="padding: 0px;">
                <p class="center-text" style="font-size: 18px;">Article written by DTACat</p>
                <p class="center-text" style="font-size: 18px;" title="DD/MM/YYYY">Article last updated on 8/03/2025</p>
            </div>
        </div>
    `;

}

function createExperimentsElement() {
    document.getElementById("everything-housing-container").innerHTML = `
        <div class="thy-shop-category-idk" style="height: auto;">
            <img class="shop-category-marketing-bg" style="height: 100%; position: absolute; filter: blur(3px);" src="${cdn}assets/110.svg">

            <div style="height: 60px; padding-top: 30px;">
            </div>
            
            <div class="a2024-recap-text-card-1">
                <h1 class="center-text abcgintonord" style="font-size: 44px; margin-top: 0px; margin-bottom: 0px;">How to enable Experiments</h1>

                <p class="center-text" style="font-size: 18px;">This tutorial will teach you how to enable Experiments on Discord.</p>
                <p class="center-text" style="font-size: 18px;">There are 2 ways of enabling Experiments on Discord.</p>
                <p class="center-text" style="font-size: 18px;">Snippet (Recommended) or client modifications (Limited)</p>
            </div>

            <hr style="opacity: 0; height: 30px;">

            <div class="a2024-recap-text-card-1">
                <h1 class="center-text abcgintonord" style="font-size: 44px; margin-top: 0px; margin-bottom: 0px;">Snippet (Recommended)</h1>
            </div>

            <hr style="opacity: 0; height: 15px;">

            <div class="a2024-recap-text-card-1">
                <h1 class="center-text abcgintonord" style="font-size: 44px; margin-top: 0px; margin-bottom: 0px;">Step 1</h1>

                <p>Open discord.com/app on a browser of your choice and make sure you're signed in.</p>
                <p>Open the Console by pressing F12 on your keyboard.</p>

                <img class="a2024-recap-img-1" src="${cdn}assets/161.png">
            </div>

            <hr style="opacity: 0; height: 15px;">

            <div class="a2024-recap-text-card-1">
                <h1 class="center-text abcgintonord" style="font-size: 44px; margin-top: 0px; margin-bottom: 0px;">Step 2</h1>

                <p>Copy and paste the Experiments snippet into the console (you may need to type "allow pasting").</p>

                <img class="a2024-recap-img-1" src="${cdn}assets/162.png">

                <div class="input-field">
                    <p>Experiments Snippet</p>
                    <textarea style="width: 100%; height: 200px; resize: none;" readonly>
let cache; webpackChunkdiscord_app.push([[Symbol()], {}, (e) => cache = e.c]); webpackChunkdiscord_app.pop();

let user = Object.values(cache).find(x => x?.exports?.default?.getUser).exports.default
nodes = Object.values(user._dispatcher._actionHandlers._dependencyGraph.nodes);
userr = user.getCurrentUser();
userr.flags = 1;
userr.isStaff = () => true;
userr.isStaffPersonal = () => true;

try {
    nodes.find(x => x.name == "ExperimentStore").actionHandler["OVERLAY_INITIALIZE"]({ user: userr });
} catch (error) {};

user.getCurrentUser = user.getNonImpersonatedCurrentUser = () => (userr);

nodes.find(x => x.name == "DeveloperExperimentStore").actionHandler["OVERLAY_INITIALIZE"]();
                    </textarea>
                </div>
            </div>

            <hr style="opacity: 0; height: 30px;">

            <div class="a2024-recap-text-card-1">
                <h1 class="center-text abcgintonord" style="font-size: 44px; margin-top: 0px; margin-bottom: 0px;">Client modifications (Limited)</h1>
                <a style="color: lightblue;" href="https://vencord.dev/plugins/Experiments">Read here to enable Experiments using Vencord</a>
            </div>

            <hr style="opacity: 0; height: 30px;">

            <div class="a2024-recap-text-card-1" style="padding: 0px;">
                <p class="center-text" style="font-size: 18px;">Article written by DTACat</p>
                <p class="center-text" style="font-size: 18px;" title="DD/MM/YYYY">Article last updated on 8/03/2025</p>
            </div>

        </div>
    `;

}