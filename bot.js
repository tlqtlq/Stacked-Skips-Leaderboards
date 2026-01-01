const { Client, GatewayIntentBits, REST, Routes, SlashCommandBuilder } = require('discord.js');
const axios = require('axios');
const fs = require('fs');

// Configuration from environment variables
const CONFIG = {
    // Get token from environment variable (NOT hardcoded)
    BOT_TOKEN: process.env.BOT_TOKEN,
    
    // GitHub configuration (optional)
    GITHUB_USERNAME: process.env.GITHUB_USERNAME || '',
    GITHUB_REPO: process.env.GITHUB_REPO || '',
    GITHUB_TOKEN: process.env.GITHUB_TOKEN || '',
    
    // Discord restrictions
    ALLOWED_CHANNEL_ID: process.env.ALLOWED_CHANNEL_ID || '1397031491309011034',
    ALLOWED_USER_ID: process.env.ALLOWED_USER_ID || '1245548597022425113'
};

// Validate required environment variables
if (!CONFIG.BOT_TOKEN) {
    console.error('❌ ERROR: BOT_TOKEN environment variable is required!');
    console.error('Please set it in Replit Secrets or .env file');
    process.exit(1);
}

// Initialize Discord client
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages
    ]
});

// ... rest of the bot.js code remains the same as before ...
// [Keep all the command definitions and functions from the previous bot.js]
// ... just replace the CONFIG section at the top