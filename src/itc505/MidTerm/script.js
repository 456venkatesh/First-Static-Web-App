// script.js
const storyContainer = document.getElementById('story');
const choicesContainer = document.getElementById('choices');
const endingImage = document.getElementById('endingImage');

let currentStage = 'start';

const storyData = {
    start: {
        text: "You find yourself lost in a magical forest. A path leads in two directions.",
        choices: [
            { text: "Take the left path", nextStage: 'left' },
            { text: "Take the right path", nextStage: 'right' }
        ],
        image: 'Start.jpg'
    },
    left: {
        text: "You moved to the left path and see there is a Dark Cave and an Enchanted lake.",
        choices: [
            { text: "Enter into Dark Cave", nextStage: 'darkCave' },
            { text: "Take a way to Enchanted lake", nextStage: 'enchantedLake' }
        ],
        image: 'Left.jpg'
    },
    darkCave: {
        text: "You enter a dark cave. It's getting colder, and you hear strange noises.",
        choices: [
            { text: "Explore deeper into the cave", nextStage: 'dragonDen' },
            { text: "Exit the cave", nextStage: 'start' }
        ],
        image: 'darkCave.jpg'
    },
    dragonDen: {
        text: "Inside the cave, you encounter a dragon guarding a treasure.",
        choices: [
            { text: "Attempt to steal the treasure", nextStage: 'dragonwinEnd' },
            { text: "Try to befriend the dragon", nextStage: 'dragonlooseEnd' }
        ],
        image: 'dragonDen.jpg'
    },
    dragonwinEnd: {
        text: "Inside the cave, The dragon kills you Game Over.",
        choices: [],
        image: 'dragonwinEnd.jpg'
    },
    dragonlooseEnd: {
        text: "Inside the cave, You steal the treasure from the dragon you win the game with the dragon. Happy Ending",
        choices: [],
        image: 'dragonlooseEnd.jpg'
    },
    enchantedLake: {
        text: "You reach an enchanted lake with glowing water. A boat is waiting for you.",
        choices: [
            { text: "Take the boat across the lake", nextStage: 'mermaidGrotto' },
            { text: "Stay by the lake", nextStage: 'start' }
        ],
        image: 'enchantedLake.jpg'
    },
    mermaidGrotto: {
        text: "The boat takes you to a hidden grotto where you encounter a Lion. You have your weapons to fight with it. So what do you want to do?",
        choices: [
            { text: "Fight with Lion", nextStage: 'lionloseEnd' },
            { text: "Return to the lake", nextStage: 'lionwinEnd' }
        ],
        image: 'mermaidGrotto.jpg'
    },
    lionwinEnd: {
        text: "As you will be returning to the lake the lion will not leave you, and the lion will kill you. Game Over",
        choices: [],
        image: 'lionwinEnd.jpg'
    },
    lionloseEnd: {
        text: "As you have all the weapons to defeat the lion so you win the game. Happy Ending",
        choices: [],
        image: 'lionloseEnd.jpg'
    },
    right: {
        text: "You choose the right path you see a calm road and a beautiful girl standing in front of you. What do you like to do?",
        choices: [
            { text: "Enter the calm road", nextStage: 'road' },
            { text: "Talk with a beautiful girl", nextStage: 'beautifulgirl' }
        ],
        image: 'right.jpg'
    },
    road: {
        text: "You enter a calm road having only one farmer and one kid walking on the road.",
        choices: [
            { text: "Talk with the farmer", nextStage: 'farmerEnd' },
            { text: "Talk with the Kid", nextStage: 'kidEnd' }
        ],
        image: 'road.jpg'
    },
    farmerEnd: {
        text: "The farmer shows him the direction to go home. Happy Ending",
        choices: [],
        image: 'farmerEnd.jpg'
    },
    kidEnd: {
        text: "The kid starts playing with you but after a while you realize that the kid is a devil kid and he turns to kill you. Game Over.",
        choices: [],
        image: 'kidEnd.jpg'
    },
    beautifulgirl: {
        text: "A beautiful girl standing in front of you with her blue eyes and with open hair what do you like to do?",
        choices: [
            { text: "Talk with the girl", nextStage: 'beautifulgirlYesEnd' },
            { text: "Ignore the girl", nextStage: 'beautifulgirlNoEnd' }
        ],
        image: 'beautifulgirl.jpg'
    },
    beautifulgirlYesEnd: {
        text: "The girl keeps on talking with you and finally becomes a devil in your life in the form of a wife. Happy Ending",
        choices: [],
        image: 'beautifulgirlYesEnd.jpg'
    },
    beautifulgirlNoEnd: {
        text: "you ignored such a beautiful girl after which the beautiful girl got angry and killed you. Game Over.",
        choices: [],
        image: 'beautifulgirlNoEnd.jpg'
    },
};

function startGame() {
    currentStage = 'start';
    updatePage();
}

function makeChoice(choiceIndex) {
    const choice = storyData[currentStage].choices[choiceIndex];
    currentStage = choice.nextStage;
    updatePage();
}

function updatePage() {
    const stage = storyData[currentStage];
    storyContainer.textContent = stage.text;

    // Clear previous choices
    choicesContainer.innerHTML = '';

    // Display current choices
    stage.choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.addEventListener('click', () => makeChoice(index));
        choicesContainer.appendChild(button);
    });

    // Display image for ending
    if (stage.image) {
        endingImage.src = stage.image;
        endingImage.style.display = 'block';
    } else {
        endingImage.style.display = 'none';
    }
}

// Start the game
startGame();