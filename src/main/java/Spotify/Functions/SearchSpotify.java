package Spotify.Functions;

import Handlers.FormatHandler;
import Spotify.API.SpotifyAPI;

import Spotify.Beans.*;
import Spotify.Users.UserSessions;
import com.google.gson.FieldAttributes;
import com.google.gson.JsonObject;
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.JsonNode;
import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;
import org.eclipse.jetty.io.EndPoint;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.json.JSONString;


/**
 * @author Sara Karic
 */

public class SearchSpotify {

    private final String SEARCH_ENDPOINT = "https://api.spotify.com/v1/search";
    private final String SEARCH_DOMAIN = "https://open.spotify.com/search/";
    private UserSessions userSessions;
    private HttpResponse<JsonNode> response;


    public SearchSpotify(UserSessions userSessions) {
        this.userSessions = userSessions;
    }

    public String requestSearch(String search, String session_id) {


        try {
            response = Unirest.get(SEARCH_ENDPOINT)
                    .header("Authorization", (userSessions.get(session_id).getToken().getToken_type() + " " + userSessions.get(session_id).getToken().getAccess_token()))
                    .queryString("q", search)
                    .queryString("type", "album,artist,playlist,track")
                    .asJson();


        } catch (UnirestException e) {
            e.printStackTrace();

        }
        return getSearch(response.getBody().getObject());

    }

    public String getSearch(JSONObject envelope) {
        JSONObject albums = envelope.getJSONObject("albums");
        JSONArray items = albums.getJSONArray("items");
        JSONObject itemsdata = items.getJSONObject(1);
        JSONArray artists = itemsdata.getJSONArray("artists");
        JSONObject artistsdata;
        artistsdata = artists.getJSONObject(0);
        String artistname;
        String uri;
        int amount = artists.length();
        AllArray arrayOfSearch = new AllArray(amount);
        JSONObject[] objectsofItems = new JSONObject[amount];
        JSONObject[] objectsofArtists = new JSONObject[amount];

        for(int i = 0; i < amount; i++){
            Artist artist = new Artist();
            objectsofItems[i] = items.getJSONObject(i);
            objectsofArtists[i] = artists.getJSONObject(i);

            itemsdata = items.getJSONObject(i);
            artists = itemsdata.getJSONArray("artists");
            artistsdata = artists.getJSONObject(i);
            artistname = artistsdata.getString("name");
            uri = artistsdata.getString("uri");

            artist.setArtist_name(objectsofArtists[i].getString("name"));
            artist.setArtist_uri(SEARCH_ENDPOINT + objectsofArtists[i].getString("uri"));
            System.out.println(artist.toString());
            arrayOfSearch.getArrayOfSearch()[i] = artist;

        }

        FormatHandler formatHandler = new FormatHandler();
        return formatHandler.getFormatAll(arrayOfSearch);


    }


}







    /*
        System.out.println(envelope);
        System.out.println(albums);
        System.out.println(items);
        System.out.println(itemsfirstdata);
        System.out.println(artists);
        System.out.println(artistsfirstdata);
        System.out.println(artistname);
        System.out.println(uri);
    */
