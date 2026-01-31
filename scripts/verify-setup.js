const fs = require('fs');
const path = require('path');

function loadEnv() {
    // Try to use dotenv first
    try {
        const dotenv = require('dotenv');
        const envPath = path.join(process.cwd(), '.env.local');
        if (fs.existsSync(envPath)) {
            const result = dotenv.config({ path: envPath });
            if (result.error) {
                console.warn('⚠️  Error loading .env.local with dotenv:', result.error.message);
            } else {
                console.log('✅ Loaded .env.local via dotenv');
                return;
            }
        } else {
             console.warn('⚠️  .env.local file not found.');
             return;
        }
    } catch (e) {
        // Fallback to manual parsing if dotenv is not available (should not happen if installed)
        console.warn('⚠️  dotenv not found, falling back to manual parsing.');
        const envPath = path.join(process.cwd(), '.env.local');
        if (!fs.existsSync(envPath)) {
            console.warn('⚠️  .env.local file not found.');
            return;
        }

        const content = fs.readFileSync(envPath, 'utf8');
        const lines = content.split('\n');
        lines.forEach(line => {
            const match = line.match(/^([^=]+)=(.*)$/);
            if (match) {
                const key = match[1].trim();
                const value = match[2].trim().replace(/^['"]|['"]$/g, ''); // Remove quotes
                if (!process.env[key]) {
                    process.env[key] = value;
                }
            }
        });
        console.log('✅ Loaded .env.local (manual parse)');
    }
}

loadEnv();

const requiredKeys = ['GROQ_API_KEY', 'COMPOSIO_API_KEY'];
let missing = false;

requiredKeys.forEach(key => {
    if (!process.env[key]) {
        console.error(`❌ Missing environment variable: ${key}`);
        missing = true;
    } else {
        // Mask the key for security
        const value = process.env[key];
        const masked = value.length > 8 ? `${value.substring(0, 4)}...${value.substring(value.length - 4)}` : '****';
        console.log(`✅ ${key} is set (${masked})`);
    }
});

if (missing) {
    console.error('\nPlease check your .env.local file or environment variables.');
    process.exit(1);
} else {
    console.log('\n🎉 All required environment variables are set!');
    console.log('Verifying dependencies...');

    try {
        require('@ai-sdk/groq');
        console.log('✅ @ai-sdk/groq is installed.');
    } catch (e) {
        console.error('❌ @ai-sdk/groq is NOT installed.');
        process.exit(1);
    }

    try {
        require('@composio/core');
        console.log('✅ @composio/core is installed.');
    } catch (e) {
        console.error('❌ @composio/core is NOT installed.');
        process.exit(1);
    }

    console.log('\n🚀 Integration check complete. You are ready to go!');
}
