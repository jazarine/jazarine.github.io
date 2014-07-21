/**
 * Created by jjamal1 on 7/19/14.
 */
var qindex = -1;

$("#nextButton").click(function () {
    var quotes = [
        "Smile at strangers. Any person at the cash register, person behind a customer service desk, cleaners/helpers at the mall, on road, etc. Make their day!",
        "Visit someone who is lonely.",
        "Buy water for Labourers working in the Scorching heat.",
        "Buy a homeless person food. And give it with a smile.",
        "Encourage someone.",
        "Introduce Yourself to a new Classmate.",
        "Give directions(with patience) to someone who is lost.",
        "Be kind to your neighbor",
        "Say something nice about someone",
        "If you get exceptional service, ask the waiter/ess to bring the manager over, and tell them both how wonderful the person was!",
        "Help someone Load or Unload their Groceries",
        "Send a book anonymously to a friend that they might like.",
        "Be generous with compliments.",
        "Include others in Decisions.",
        "Offer the handyman a drink",
        "Thank your Bus or Taxi Driver.",
        "Plant flowers",
        "Bring flowers to someone",
        "Donate old clothes and footwear to charity.",
        "Teach someone a language.",
        "Rub a loved one's back",
        "Stop and assist someone who has a puncture.",
        "Look for someone to pass your unexpired parking ticket to.",
        "Give Affirmation. Words can heal, they can bless, they can bring comfort and they can transform lives. So choose to be an affirming person.  Offer encouragement freely to your friends, co-workers, and family, and without any expectation of anything in return. You can always find something positive to say in any situation, it just depends on your perspective. Be generous with your words of affirmation to all those around you, and most importantly, to yourself.",
        "Stop Negative Conversations."
    ];

    $("#quote").text(quotes[(++qindex % quotes.length)])
})

$("#nextButton").click()
