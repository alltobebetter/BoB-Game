// 资源加载管理
class ResourceLoader {
    constructor() {
        this.resources = [
            { type: 'audio', url: 'audio/background-music.mp3', weight: 30 },
            { type: 'story', url: 'readme.md', weight: 20 },
            { type: 'image', url: 'favicon.ico', weight: 10 }
            // 可以继续添加其他需要预加载的资源
        ];
        this.loadedWeight = 0;
        this.totalWeight = this.resources.reduce((sum, res) => sum + res.weight, 0);
        this.loadedResources = new Map();
    }

    async loadResource(resource) {
        try {
            let result;
            switch (resource.type) {
                case 'audio':
                    result = await this.loadAudio(resource.url);
                    break;
                case 'story':
                    result = await this.loadStory(resource.url);
                    break;
                case 'image':
                    result = await this.loadImage(resource.url);
                    break;
            }
            this.loadedResources.set(resource.url, result);
            this.loadedWeight += resource.weight;
            this.updateProgress();
            return result;
        } catch (error) {
            console.error(`Failed to load ${resource.url}:`, error);
            this.loadedWeight += resource.weight;
            this.updateProgress();
        }
    }

    updateProgress() {
        const progress = (this.loadedWeight / this.totalWeight) * 100;
        const progressBar = document.getElementById('progress-bar');
        const loadingText = document.getElementById('loading-text');
        
        progressBar.style.width = `${progress}%`;
        loadingText.textContent = `正在加载游戏资源... ${Math.round(progress)}%`;
    }

    async loadAudio(url) {
        return new Promise((resolve, reject) => {
            const audio = new Audio();
            audio.oncanplaythrough = () => resolve(audio);
            audio.onerror = reject;
            audio.src = url;
        });
    }

    async loadStory(url) {
        const response = await fetch(url);
        return await response.text();
    }

    async loadImage(url) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(img);
            img.onerror = reject;
            img.src = url;
        });
    }

    async loadAll() {
        const loadPromises = this.resources.map(resource => 
            this.loadResource(resource)
        );
        
        await Promise.allSettled(loadPromises);
        
        const loadingScreen = document.getElementById('loading-screen');
        const introScreen = document.getElementById('intro-screen');
        
        loadingScreen.style.opacity = '0';
        loadingScreen.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            introScreen.style.display = '';
            showIntro();
        }, 500);

        return this.loadedResources;
    }
}

let currentStory = {};
let currentBranch = 'main';
let currentLine = 0;
let bgm = document.getElementById('bgm');
let isAnimating = false;
let isTyping = false;
let typewriterSpeed = 50;
let currentTypewriterInterrupt = null;
let resourceLoader;
function showIntro() {
    const companyLogo = document.getElementById('company-logo');
    const studioText = document.getElementById('studio-text');
    const headphoneContainer = document.querySelector('.headphone-container');
    const introScreen = document.getElementById('intro-screen');

    setTimeout(() => {
        companyLogo.classList.add('show');
    }, 500);

    setTimeout(() => {
        studioText.classList.add('show');
    }, 1500);

    setTimeout(() => {
        companyLogo.style.opacity = '0';
        studioText.style.opacity = '0';
    }, 3000);

    setTimeout(() => {
        headphoneContainer.classList.add('show');
    }, 3500);

    setTimeout(() => {
        introScreen.style.opacity = '0';
        setTimeout(() => {
            introScreen.style.display = 'none';
            tryPlayAudio();
            const savedProgress = localStorage.getItem('gameProgress');
            if (savedProgress) {
                const progress = JSON.parse(savedProgress);
                showContinuePrompt(progress.branch, progress.line);
            } else {
                currentBranch = 'main';
                currentLine = 0;
                showCurrentLine();
            }
        }, 1000);
    }, 5000);
}

async function tryPlayAudio() {
    try {
        bgm.volume = 0.3;
        const playPromise = bgm.play();
        if (playPromise !== undefined) {
            playPromise.then(() => {
                updateBGMButton(true);
            }).catch(() => {
                const playOnClick = () => {
                    bgm.play().then(() => {
                        updateBGMButton(true);
                        document.removeEventListener('click', playOnClick);
                    });
                };
                document.addEventListener('click', playOnClick);
                updateBGMButton(false);
            });
        }
    } catch (err) {
        console.log('Auto-play prevented:', err);
        const playOnClick = () => {
            bgm.play().then(() => {
                updateBGMButton(true);
                document.removeEventListener('click', playOnClick);
            });
        };
        document.addEventListener('click', playOnClick);
        updateBGMButton(false);
    }
}

function updateBGMButton(isPlaying) {
    const button = document.getElementById('bgm-button');
    button.textContent = `音乐 ${isPlaying ? '开启' : '关闭'}`;
}

function showContinuePrompt(savedBranch, savedLine) {
    const continuePrompt = {
        character: "旁白",
        dialog: "我们已经记录您的游戏进程，是否要继续",
        options: [
            { text: "从本章继续", branch: savedBranch, line: savedLine },
            { text: "重新开始", branch: "main", line: 0 }
        ],
        image: "",
        color: "#FFFFFF"
    };
    displayLine(continuePrompt);
}

function parseStory(text) {
    const branches = {};
    let currentBranch = 'main';
    
    const lines = text.split('\n').filter(line => line.trim());
    
    for (let line of lines) {
        if (line.startsWith('# ')) {
            currentBranch = line.substring(2).trim();
            branches[currentBranch] = [];
            continue;
        }

        const match = line.match(/\[(.*?)\]\[(.*?)\]\[(.*?)\]\[(.*?)\](?:\[(.*?)\])?/);
        if (match) {
            const options = match[3] ? match[3].split('|').map(opt => {
                if (opt.includes('*')) {
                    const [text, link] = opt.split('*');
                    return { text, link };
                } else if (opt.includes('#')) {
                    const [text, branch] = opt.split('#');
                    return { text, branch };
                }
                return { text: opt };
            }) : [];

            branches[currentBranch].push({
                character: match[1],
                dialog: match[2],
                options: options,
                image: match[4].trim(),
                color: match[5] ? match[5].trim() : '#FFFFFF'
            });
        }
    }
    
    return branches;
}

function showCurrentLine() {
    if (!currentStory[currentBranch] || 
        currentLine >= currentStory[currentBranch].length) return;

    const line = currentStory[currentBranch][currentLine];
    displayLine(line);
    saveProgress();
}

function saveProgress() {
    localStorage.setItem('gameProgress', JSON.stringify({
        branch: currentBranch,
        line: currentLine
    }));
}

function typeWriter(element, text, callback) {
    let index = 0;
    isTyping = true;
    element.textContent = '';
    let interrupted = false;

    function type() {
        if (interrupted) {
            return;
        }
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, typewriterSpeed);
        } else {
            isTyping = false;
            if (callback) callback();
        }
    }

    type();

    return () => {
        interrupted = true;
        element.textContent = text;
        isTyping = false;
        if (callback) callback();
    };
}

function displayLine(line) {
    isAnimating = true;

    const characterElement = document.getElementById('character-name');
    const dialogElement = document.getElementById('dialog-text');
    const optionsContainer = document.getElementById('options-container');
    const backgroundOverlay = document.getElementById('background-overlay');

    characterElement.classList.remove('show');
    dialogElement.classList.remove('show');
    optionsContainer.classList.remove('show');
    backgroundOverlay.classList.remove('show');
    
    characterElement.textContent = line.character;
    dialogElement.textContent = '';
    
    if (line.color) {
        dialogElement.style.color = line.color;
        characterElement.style.color = line.color;
    } else {
        dialogElement.style.color = '#FFFFFF';
        characterElement.style.color = '#FFFFFF';
    }
    
    if (line.image) {
        const img = new Image();
        img.onload = () => {
            backgroundOverlay.style.backgroundImage = `url('${line.image}')`;
            setTimeout(() => {
                backgroundOverlay.classList.add('show');
            }, 50);
        };
        img.onerror = () => {
            console.error("图片加载失败:", line.image);
        };
        img.src = line.image;
    } else {
        backgroundOverlay.style.backgroundImage = 'none';
    }

    optionsContainer.innerHTML = '';

    requestAnimationFrame(() => {
        characterElement.classList.add('show');
        setTimeout(() => {
            dialogElement.classList.add('show');
            currentTypewriterInterrupt = typeWriter(dialogElement, line.dialog, () => {
                if (line.options && line.options.length > 0) {
                    line.options.forEach(option => {
                        const button = document.createElement('button');
                        button.className = 'option-button';
                        button.textContent = option.text;
                        if (line.color) {
                            button.style.color = line.color;
                            button.style.borderColor = line.color + '4D';
                        }
                        button.onclick = (e) => {
                            if (!optionsContainer.classList.contains('show')) {
                                return;
                            }
                            e.stopPropagation();
                            if (option.link) {
                                window.location.href = option.link;
                            } else if (option.branch) {
                                currentBranch = option.branch;
                                currentLine = option.line || 0;
                                showCurrentLine();
                            } else {
                                currentLine++;
                                showCurrentLine();
                            }
                        };
                        optionsContainer.appendChild(button);
                    });
                    setTimeout(() => {
                        optionsContainer.classList.add('show');
                        isAnimating = false;
                    }, 300);
                } else {
                    isAnimating = false;
                }
            });
        }, 300);
    });
}

document.addEventListener('click', (e) => {
    if (e.target.closest('#bgm-control')) return;
    if (e.target.closest('.option-button')) return;
    
    if (isTyping) {
        if (currentTypewriterInterrupt) {
            currentTypewriterInterrupt();
            currentTypewriterInterrupt = null;
        }
        return;
    }
    
    if (!isAnimating && currentStory[currentBranch] && 
        currentLine < currentStory[currentBranch].length) {
        const currentOptions = currentStory[currentBranch][currentLine].options;
        if (!currentOptions || currentOptions.length === 0) {
            currentLine++;
            showCurrentLine();
        }
    }
});

document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' || e.code === 'Enter') {
        if (isTyping) {
            if (currentTypewriterInterrupt) {
                currentTypewriterInterrupt();
                currentTypewriterInterrupt = null;
            }
            return;
        }

        if (!isAnimating && currentStory[currentBranch] && 
            currentLine < currentStory[currentBranch].length) {
            const currentOptions = currentStory[currentBranch][currentLine].options;
            if (!currentOptions || currentOptions.length === 0) {
                e.preventDefault();
                currentLine++;
                showCurrentLine();
            }
        }
    }
});

function toggleBGM() {
    if (bgm.paused) {
        bgm.play();
        updateBGMButton(true);
    } else {
        bgm.pause();
        updateBGMButton(false);
    }
}

window.onload = async () => {
    resourceLoader = new ResourceLoader();
    const resources = await resourceLoader.loadAll();
    
    if (resources.has('audio/background-music.mp3')) {
        bgm.src = 'audio/background-music.mp3';
    }
    
    if (resources.has('readme.md')) {
        currentStory = parseStory(resources.get('readme.md'));
    }
};
