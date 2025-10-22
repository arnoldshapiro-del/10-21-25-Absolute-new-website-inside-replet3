#!/usr/bin/env node
import { execSync } from 'child_process';

let connectionSettings;

async function getAccessToken() {
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (!xReplitToken) {
    throw new Error('Not running in Replit environment');
  }

  connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=github',
    {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  const accessToken = connectionSettings?.settings?.access_token || connectionSettings.settings?.oauth?.credentials?.access_token;

  if (!accessToken) {
    throw new Error('GitHub not connected - please reconnect in Replit');
  }
  return accessToken;
}

async function main() {
  console.log('🔑 Getting GitHub access token...');
  const token = await getAccessToken();
  
  console.log('📦 Preparing to push 42 commits to GitHub...');
  console.log('   This will safely overwrite GitHub with your Replit version');
  console.log('');
  
  const remoteUrl = `https://x-access-token:${token}@github.com/arnoldshapiro-del/arnie-fixed-and-newest-website-for-loveable-from-replit.git`;
  
  try {
    console.log('⬆️  Pushing to GitHub (this may take 2-3 minutes for large uploads)...');
    execSync(`git push --force ${remoteUrl} main`, { 
      stdio: 'inherit',
      env: { ...process.env, GIT_TERMINAL_PROMPT: '0' }
    });
    
    console.log('');
    console.log('✅ SUCCESS! All 42 commits have been pushed to GitHub!');
    console.log('');
    console.log('🎉 Your repository is now synced!');
    console.log('📍 View it here: https://github.com/arnoldshapiro-del/arnie-fixed-and-newest-website-for-loveable-from-replit');
    console.log('');
    console.log('💡 The Git pane should now show a Push button for future changes.');
    
  } catch (error) {
    console.error('');
    console.error('❌ Push failed:', error.message);
    console.error('');
    console.error('📖 See SYNC_TO_GITHUB.md for manual instructions');
    process.exit(1);
  }
}

main().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});
