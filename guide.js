//
//
//
//
//
//
// 
//
//
//
//
// 
//
//
// 
//
//
//
//
const guides = [
    { 
        id: 1, 
        name: '', 
        description: 'T0<br>', 
        images: { 
            overall: '-.jpg', 
            weapon: '-.jpg', 
            team: '-.jpg', 
            sound: '-.jpg' 
        }, 
        guide: { 
            strength: 'T0', 
            weapon: '', 
            team: 'C', 
            sound: '×5', 
            skills: '' 
        }
    },

    { 
        id: 2, 
        name: '', 
        description: '', 
        images: { 
            overall: '-.jpg', 
            weapon: '-.jpg', 
            team: '-.jpg', 
            sound: '-.jpg' 
        }, 
        guide: { 
            strength: 'T0', 
            weapon: '', 
            team: 'C', 
            sound: '×5', 
            skills: '' 
        }
    },
    
    { 
        id: 3, 
        name: '', 
        description: 'T0', 
        images: { 
            overall: '-.jpg', 
            weapon: '-.jpg', 
            team: '-.jpg', 
            sound: '-.jpg' 
        }, 
        guide: { 
            strength: 'T0.5', 
            weapon: '', 
            team: 'C', 
            sound: '×5', 
            skills: '' 
        }
    },
        
    { 
        id: 4, 
        name: '', 
        description: 'T0', 
        images: { 
            overall: '-.jpg', 
            weapon: '-.jpg', 
            team: '-.jpg', 
            sound: '-.jpg' 
        }, 
        guide: { 
            strength: 'T0', 
            weapon: '', 
            team: '', 
            sound: '×5', 
            skills: '' 
        }
    },
            
    { 
        id: 5, 
        name: '', 
        description: 'C', 
        images: { 
            overall:'', 
            weapon: '-.jpg', 
            team: '-.jpg', 
            sound: '-.jpg' 
        }, 
        guide: { 
            strength: 'T0.5', 
            weapon: '', 
            team: 'C', 
            sound: '×5', 
            skills: '>>>>' 
        }
    },
    
    { 
        id:6 , 
        name: '', 
        description: '', 
        images: { 
            overall:'-', 
            weapon: '-.jpg', 
            team: '-.jpg', 
            sound: '-.jpg' 
        }, 
        guide: { 
            strength: 'T1', 
            weapon: '', 
            team: '', 
            sound: '×5', 
            skills: '' 
        }
    },
    
    { 
        id:7, 
        name: '', 
        description: '..', 
        images: { 
            overall:'-', 
            weapon: '-.jpg', 
            team: '-.jpg', 
            sound: '-.jpg' 
        }, 
        guide: { 
            strength: 'T0.5', 
            weapon: '', 
            team: '', 
            sound: '×5', 
            skills: '' 
        }
    },

{ 
        id: 8, 
        name: '', 
        description: '<br>', 
        images: { 
            overall:'', 
            weapon: '-.jpg', 
            team: '-.jpg', 
            sound: '-.jpg' 
        }, 
        guide: { 
            strength: 'T1', 
            weapon: '', 
            team: 'C', 
            sound: '', 
            skills: '' 
        }
    },

{ 
        id: , 
        name: '', 
        description: '', 
        images: { 
            overall:'-', 
            weapon: '-.jpg', 
            team: '-.jpg', 
            sound: '-.jpg' 
        }, 
        guide: { 
            strength: 'T', 
            weapon: '', 
            team: '', 
            sound: '', 
            skills: '' 
        }
    },

];


const content = document.getElementById('content');

function loadGameList() {
    let gameListHTML = '<h1></h1><ul>';
    guides.forEach(game => {
        gameListHTML += `
            <li>
                <a href="#" class="game-link" data-id="${game.id}">${game.name}</a>
                <p>${game.description}</p>
            </li>
        `;
    });
    gameListHTML += '</ul>';
    content.innerHTML = gameListHTML;

    document.querySelectorAll('.game-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const gameId = e.target.dataset.id;
            loadGuideDetails(gameId);
        });
    });
}

function loadGuideDetails(gameId) {
    const game = guides.find(g => g.id == gameId);
    content.innerHTML = `
        <h1>${game.name}</h1>
        <div class="guide-section">
            <div class="guide-title"></div>
            <div class="guide-content">${game.guide.strength}</div>
            
        </div>
        <div class="guide-section">
            <div class="guide-title"></div>
            <div class="guide-content">${game.guide.weapon}</div>
            <div class="guide-image"><img src="${game.images.weapon}" alt="${game.name} weapon"></div>
        </div>
        <div class="guide-section">
            <div class="guide-title"></div>
            <div class="guide-content">${game.guide.team}</div>
            <div class="guide-image"><img src="${game.images.team}" alt="${game.name} team"></div>
        </div>
        <div class="guide-section">
            <div class="guide-title"></div>
            <div class="guide-content">${game.guide.sound}</div>
            <div class="guide-image"><img src="${game.images.sound}" alt="${game.name} sound"></div>
        </div>
        <div class="guide-section">
            <div class="guide-title"></div>
            <div class="guide-content">${game.guide.skills}</div>
            <div class="guide-image"><img src="${game.images.overall}" alt="${game.name} overall"></div>
        </div>
        <a href="#" id="back-to-list"></a>
    `;

    document.getElementById('back-to-list').addEventListener('click', (e) => {
        e.preventDefault();
        loadGameList();
    });
}

loadGameList();