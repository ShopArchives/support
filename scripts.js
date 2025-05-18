

const articles = {
    1: {
        title: "Reviews",
        body: `
            <div class="note-block">
                <p class="title">Note</p>
                <div class="inline-text">
                    <b>Writing reviews for categories</b><p>is is a feature for</p><a onclick="loadArticle('2')">Standard</a><p> users only.</p>
                </div>
            </div>
            <p>Shop Archives has a reviews feature so that users can share their likes and dislikes about a category.</p>
            <p>How to write a review:</p>
            <div class="grid-2">
                <div class="grid-card">
                    <h3>Step 1</h3>
                    <hr>
                    <p>Click on a category banner.</p>
                    <img src="https://cdn.yapper.shop/support-assets/reviews-how-to-review-1.png"></img>
                </div>
                <div class="grid-card">
                    <h3>Step 2</h3>
                    <hr>
                    <p>Click the 'Reviews' tab then write your review (star rating and review text) in the bar below.</p>
                    <img src="https://cdn.yapper.shop/support-assets/reviews-how-to-review-2.png"></img>
                </div>
            </div>
            <hr>
            <h2>Badges</h2>
            <p>On our platform, some users may be recognized with special badges next to their names when posting reviews.</p>
            <div class="note-block">
                <p class="title">Note</p>
                <p class="summary">All badge icons are placeholders and will change at some point in the future, for now we are using Discord badge icons.</p>
            </div>
            <div class="grid-1">
                <div class="grid-card">
                    <h3>Github Contributor</h3>
                    <hr>
                    <img src="https://cdn.yapper.shop/support-assets/reviews-github-contributor-badge.png"></img>
                    <p>Awarded to users who have contributed to the platform's development by having a pull request successfully merged on our public GitHub repository. You may also receive the Bug Hunter badge along with this one if your pull request fixes some bugs.</p>
                </div>
                <div class="grid-card">
                    <h3>Bug Hunter</h3>
                    <hr>
                    <img src="https://cdn.yapper.shop/support-assets/reviews-bug-hunter-badge.png"></img>
                    <p>Awarded to users who actively report bugs, glitches, or issues with the platform. This badge is a token of appreciation for helping improve the quality and stability of our service.</p>
                </div>
                <div class="grid-card">
                    <h3>Gold Bug Hunter</h3>
                    <hr>
                    <img src="https://cdn.yapper.shop/support-assets/reviews-gold-bug-hunter-badge.png"></img>
                    <p>Awarded to users who actively report severe bugs with the platform, such as vulnerabilities in our API. This badge is a token of appreciation for helping improve the quality, safety and stability of our service.</p>
                </div>
                <div class="grid-card">
                    <h3>Collectibles Dataminer</h3>
                    <hr>
                    <img src="https://cdn.yapper.shop/support-assets/reviews-collectibles-dataminer-badge.png"></img>
                    <p>Awarded to users who contribute to the accuracy and completeness of our collectible item listings by discovering and reporting unreleased or hidden items.</p>
                    <div class="important-block">
                        <p class="title">Important</p>
                        <p>Providing the SKU IDs for the following items will not award you this badge:</p>
                        <ul>
                            <li>Quest rewards</li>
                            <li>Collectibles already listed on Shop Archives</li>
                        </ul>
                    </div>
                </div>
                <div class="grid-card">
                    <h3>Staff</h3>
                    <hr>
                    <img src="https://cdn.yapper.shop/support-assets/reviews-staff-badge.png"></img>
                    <p>Indicates that the user is an official member of the team - such as a developer, moderator, or administrator. These users are responsible for managing the platform and assisting the community.</p>
                    <div class="note-block">
                        <p class="title">Note</p>
                        <p>We are currently not recruiting any new staff members.</p>
                    </div>
                </div>
            </div>
        `
    },
    2: {
        title: "Accounts",
        body: `
            <p>Since we've updated the log in system, you can now create two types of accounts.</p>
            <div class="grid-2">
                <div class="grid-card">
                    <h3>Basic</h3>
                    <hr>
                    <p>When you choose 'Basic' log in, You will have access to the following features:</p>
                    <ul>
                        <li>Preview your Discord profile across the website</li>
                    </ul>
                </div>
                <div class="grid-card">
                    <h3>Standard</h3>
                    <hr>
                    <p>When you choose 'Standard' log in, a new Shop Archives Token is created with your Discord User ID and Access Token.</p>
                    <p>By default your Shop Archives Token will expire within 30 days of creation (can be changed), and then you'll be logged out.</p>
                    <img src="https://cdn.yapper.shop/support-assets/accounts-standard-log-out-time.png"></img>
                    <div class="caution-block">
                        <p class="title">Caution</p>
                        <p>Shop Archives Staff will ever ask for your Token, DO NOT share your Token with anyone.</p>
                    </div>
                    <p>You will have access to the following features:</p>
                    <ul>
                        <li>Preview your Discord profile across the website</li>
                        <li>Write reviews for categories</li>
                        <li>Beta Program (Early access to new features)</li>
                    </ul>
                </div>
            </div>
        `
    },
    3: {
        title: "XP Perks & Events",
        body: `
            <div class="note-block">
                <p class="title">Note</p>
                <div class="inline-text">
                    <b>Earning and spending XP</b><p>is currently an experiment available to select</p><a onclick="loadArticle('2')">Standard</a><p> users only.</p>
                </div>
            </div>
            <h2>Events</h2>
            <p>Participating in events is a quick and easy way to earn free XP.</p>
            <img src="https://cdn.yapper.shop/support-assets/xp-perks-and-events-events-tab-preview.png"></img>
            <p>Users can claim 100 free XP if it's their first time logging in to a Standard account:</p>
            <div class="grid-2">
                <div class="grid-card">
                    <h3>Step 1</h3>
                    <hr>
                    <p>Once on the XP Events tab, locate the 'Free Login Reward' event and click 'Claim 100 XP'.</p>
                    <img src="https://cdn.yapper.shop/support-assets/xp-perks-and-events-100-xp-free-step-1.png"></img>
                </div>
                <div class="grid-card">
                    <h3>Step 2</h3>
                    <hr>
                    <p>A modal will open, then you can click 'Claim 100 XP' and you will claim the Free Login Reward for 100 XP.</p>
                    <img src="https://cdn.yapper.shop/support-assets/xp-perks-and-events-100-xp-free-step-2.png"></img>
                </div>
            </div>
            <p>There will sometimes be 'Leaks' events, when there are leaks for a new Discord collectibles category:</p>
            <div class="grid-2">
                <div class="grid-card">
                    <h3>Step 1</h3>
                    <hr>
                    <p>Once on the XP Events tab, locate the leaks event and click 'Take me there'.</p>
                    <img src="https://cdn.yapper.shop/support-assets/xp-perks-and-events-leaks-events-step-1.png"></img>
                </div>
                <div class="grid-card">
                    <h3>Step 2</h3>
                    <hr>
                    <p>On the leaks page, click on the latest category banner.</p>
                    <img src="https://cdn.yapper.shop/support-assets/xp-perks-and-events-leaks-events-step-2.png"></img>
                </div>
                <div class="grid-card">
                    <h3>Step 3</h3>
                    <hr>
                    <p>Click the 'XP Rewards' tab then 'Claim 20 XP'.</p>
                    <img src="https://cdn.yapper.shop/support-assets/xp-perks-and-events-leaks-events-step-3.png"></img>
                </div>
            </div>
            <hr>
            <h2>XP Shop</h2>
            <p>You can spend your collected XP in the XP Shop, where you can claim some of the following:</p>
            <div class="grid-2">
                <div class="grid-card">
                    <h3>Server Tag Preview</h3>
                    <hr>
                    <p>Show off your Discord server tag next to your name on reviews!</p>
                    <img src="https://cdn.yapper.shop/support-assets/xp-perks-and-events-shop-perks-1.png"></img>
                </div>
                <div class="grid-card">
                    <h3>Decoration Preview</h3>
                    <hr>
                    <p>Show off your Discord avatar decoration on reviews!</p>
                    <img src="https://cdn.yapper.shop/support-assets/xp-perks-and-events-shop-perks-2.png"></img>
                </div>
            </div>
            <p>To claim an item with XP, click on the item card and a claim modal will show up, click the green claim button and you will claim the perk.</p>
            <img src="https://cdn.yapper.shop/support-assets/xp-perks-and-events-claim-perk.png"></img>
        `
    }
};

function loadArticle(key, changePage) {
    const article = articles[key];
    const container = document.getElementById("article-content");
    document.querySelectorAll('.selected').forEach((el) => {
        el.classList.remove("selected");
    });
    if (!changePage) {
        window.location.hash = 'page=' + key;
    }
    document.getElementById('article-' + key).classList.add("selected");
    container.innerHTML = `<h2>${article.title}</h2>${article.body}`;
}
