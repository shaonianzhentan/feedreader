import feedparser, os, time
from .manifest import manifest
from homeassistant.util.json import load_json

class FeedReader():

    def __init__(self):
        pass

    def get_data(self, url):
        _list = []
        if manifest.is_json(url):
            return load_json(url)
        else:
            d = feedparser.parse(url)
            _feed = d['feed']
            updated_parsed = _feed.get('updated_parsed')
            for item in d.entries:
                updated = item.get('updated_parsed', updated_parsed)
                _list.append({
                    'id': item['id'],
                    'title': item['title'],
                    'content': item['summary'],
                    'updated': time.strftime('%Y-%m-%d %H:%M:%S', updated)
                })
            return {
                'title': _feed.get('title'),
                'author': _feed.get('author'),
                'updated': time.strftime('%Y-%m-%d %H:%M:%S', updated_parsed),
                'list': _list
            }

feed = FeedReader()