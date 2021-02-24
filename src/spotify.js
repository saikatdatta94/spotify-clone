const scopes = [
    'user-read-recently-played',
    'user-read-curently-playing',
    'user-modify-playback-state',
    'user-read-playback-state',
    'user-top-read'
]

const endpoint = "https://accounts.spotify.com/authorize";
const clientId = "820b3f08645c4652bbd1cf3a81c4cf78";
const redirectUri = "http%3A%2F%2Flocalhost%3A3000%2F";

export const getTokenFromResponse = () => {
    return window.location.hash
      .substring(1)
      .split("&")
      .reduce((initial, item) => {
        var parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
  
        return initial;
      }, {});
  };
// export const loginUri = `${endpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

// export const loginUri = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback&scope=user-read-private%20user-read-email&state=34fFs29kd09`;

export const loginUri = `https://accounts.spotify.com/authorize?client_id=${clientId}&scope=${scopes.join("%20")}&response_type=token&redirect_uri=${redirectUri}`;

console.log(scopes.join("%20"));