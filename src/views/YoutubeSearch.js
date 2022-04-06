import "./Blog.scss";
import moment from "moment";
import axios from "axios";
import { useState, useEffect } from "react";

const YoutubeSearch = () => {
  const [videos, setVideos] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {}, []);

  const handleSearchYoutube = async () => {
    // let res = await axios.get("https://www.googleapis.com/youtube/v3/search", {
    //   part: "snippet",
    //   maxResults: "20",
    //   key: "AIzaSyDamOtVJKthrkCLb9el-4HoJBNAesVzolg",
    //   type: "video",
    //   q: query,
    // });
    let res = await axios({
      method: "GET",
      url: "https://www.googleapis.com/youtube/v3/search",
      params: {
        part: "snippet",
        maxResults: "20",
        key: "AIzaSyDamOtVJKthrkCLb9el-4HoJBNAesVzolg",
        type: videos,
        q: query,
      },
    });

    if (res && res.data && res.data.items) {
      let raw = res.data.items;
      let result = [];
      if (raw && raw.length > 0) {
        raw.map((items) => {
          let object = {};
          object.id = items.id.videoId;
          object.title = items.snippet.title;
          object.createdAt = items.snippet.publishedAt;
          object.author = items.snippet.channelTitle;
          object.description = items.snippet.description;

          result.push(object);
        });
      }
      console.log("check result>>>>>", result);
      setVideos(result);
    }

    console.log("check respone data youtube :", res);
  };

  return (
    <div className="youtube-search-container">
      <div className="yt-search">
        <input
          type={"text"}
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button
          type="button"
          placeholder="Search"
          onClick={handleSearchYoutube}
        >
          Search
        </button>
      </div>

      {videos &&
        videos.length > 0 &&
        videos.map((items) => {
          return (
            <div className="yt-result" key={items.id}>
              <div className="left">
                <iframe
                  className="iframe-yt"
                  src={`https://www.youtube.com/embed/${items.id}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="right">
                <div className="title">{items.title}</div>
                <div className="created-at">
                  Created at:
                  {moment(items.createdAt).format("DD-MM-YYYY HH:mm:ss A")}
                </div>
                <div className="author">Author: {items.author}</div>
                <div className="discription">
                  Description: {items.description}
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default YoutubeSearch;

/*
{
  "kind": "youtube#searchListResponse",
  "etag": "gZIwTtiNdCdiCr-rBTibGN3skjk",
  "nextPageToken": "CAUQAA",
  "regionCode": "VN",
  "pageInfo": {
    "totalResults": 1000000,
    "resultsPerPage": 5
  },
  "itemss": [
    {
      "kind": "youtube#searchResult",
      "etag": "3PURJ4hkWd8yKsbQuVI1PxO2Qa4",
      "id": {
        "kind": "youtube#video",
        "videoId": "jV0PbW8fJKk"
      },
      "snippet": {
        "publishedAt": "2019-09-29T01:53:30Z",
        "channelId": "UCZrV-3Mvk8KPX1wyCqs7vGw",
        "title": "Lionel Messi ● 12 Most LEGENDARY Moments Ever in Football ►Impossible to Repeat◄",
        "description": "Messi 'Plays' That Will Not Be Repeated or Seen in Football Ever Again ||",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/jV0PbW8fJKk/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/jV0PbW8fJKk/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/jV0PbW8fJKk/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Messi Magic™",
        "liveBroadcastContent": "none",
        "publishTime": "2019-09-29T01:53:30Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "-uIQ5vD3VnnOqoe68-GCekZ50rw",
      "id": {
        "kind": "youtube#video",
        "videoId": "lxJ598TXa34"
      },
      "snippet": {
        "publishedAt": "2018-05-30T04:12:21Z",
        "channelId": "UCZrV-3Mvk8KPX1wyCqs7vGw",
        "title": "Too Good for ballon d&#39;Or ►20 Messi Class Highlights of 2018 ||HD||",
        "description": "20 Lionel Messi Highlights in 2018 That Were Too Good for ballon d'Or || Lionel Messi Moments & Highlights of 2018 That Can ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/lxJ598TXa34/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/lxJ598TXa34/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/lxJ598TXa34/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Messi Magic™",
        "liveBroadcastContent": "none",
        "publishTime": "2018-05-30T04:12:21Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "SLJUMuwHfdmw6a_4lEm2Zg2S7vM",
      "id": {
        "kind": "youtube#video",
        "videoId": "j9u1Uj5CPmg"
      },
      "snippet": {
        "publishedAt": "2016-02-06T04:24:46Z",
        "channelId": "UCleo0cLOSiib0W62-GK1KdQ",
        "title": "Lionel Messi - A God Amongst Men HD",
        "description": "Lionel Messi amazing dribbling skills & goals in career prior to 2016 ------------------------------------------------------------------ STAY ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/j9u1Uj5CPmg/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/j9u1Uj5CPmg/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/j9u1Uj5CPmg/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "JavierNathaniel",
        "liveBroadcastContent": "none",
        "publishTime": "2016-02-06T04:24:46Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "z_VR1D6m2jcs0qwQXvZMw5Om9Vo",
      "id": {
        "kind": "youtube#video",
        "videoId": "688U0EU3fAs"
      },
      "snippet": {
        "publishedAt": "2016-01-14T08:02:20Z",
        "channelId": "UC9rCHbmWkSHhuGnGa0F1Ppg",
        "title": "Những pha bóng kĩ thuật nhất của Lionel Messi  - Quả bóng vàng 2015 HD",
        "description": "Video những pha bóng kĩ thuật nhất của Lionel Messi,chủ nhân của quả bóng vàng FIFA 2015. Video Lionel Messi ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/688U0EU3fAs/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/688U0EU3fAs/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/688U0EU3fAs/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Vn Sport TV",
        "liveBroadcastContent": "none",
        "publishTime": "2016-01-14T08:02:20Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "sMj4LJVyuFh03M4BEgbsD18oa5Y",
      "id": {
        "kind": "youtube#video",
        "videoId": "QE7MAyHTNSY"
      },
      "snippet": {
        "publishedAt": "2020-05-09T13:08:04Z",
        "channelId": "UCn7Z7KuNnVPQqNUOu5BHtuw",
        "title": "34 Unbelievable Messi Magic Moments - With Commentaries",
        "description": "34 Unbelievable Messi Magic Moments - With Commentaries 34 Unbelievable Messi Magic Moments - With Commentaries ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/QE7MAyHTNSY/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/QE7MAyHTNSY/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/QE7MAyHTNSY/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "SherAli EDITS",
        "liveBroadcastContent": "none",
        "publishTime": "2020-05-09T13:08:04Z"
      }
    }
  ]
}
*/
