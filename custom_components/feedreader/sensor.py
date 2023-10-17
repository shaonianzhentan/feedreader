from homeassistant.components.sensor import SensorEntity
from homeassistant.helpers.entity import DeviceInfo, Entity
import time, feedparser
from .manifest import manifest
from datetime import datetime
import pytz

async def async_setup_entry(hass, config_entry, async_add_entities):
    async_add_entities([RssSensor(config_entry)])

class RssSensor(SensorEntity):

    def __init__(self, entry):
        self._attr_unique_id = entry.entry_id
        self._attr_name = entry.title
        self._attr_icon = 'mdi:rss-box'
        self._attr_device_class = 'timestamp'
        self._attr_device_info = DeviceInfo(
            name="RSS阅读器",
            manufacturer='shaonianzhentan',
            model='feedreader',
            configuration_url=manifest.documentation,
            identifiers={(manifest.domain, 'shaonianzhentan')},
        )
        self.url = entry.data.get('url').strip()
        self._attr_extra_state_attributes = {
            'source': 'rss',
            'url': self.url
        }
        self._state = None
        self.update_at = None

    @property
    def state(self):
        return self._state

    async def async_update(self):
        now = time.time()
        is_fetch = False
        if self.update_at is not None:
            time_diff = now - self.update_at
            if time_diff > 3600:
                is_fetch = True
        else:
            is_fetch = True

        if is_fetch:
            d = await self.hass.async_add_executor_job(feedparser.parse, self.url)
            feed = d['feed']
            self.update_at = now
            t = feed.get('updated_parsed')
            if t is not None:
                self._state = datetime(*t[:6], tzinfo=pytz.timezone(self.hass.config.time_zone))
                self._attr_extra_state_attributes = {
                    'source': 'rss',
                    'url': self.url,
                    'title': feed.get('title'),
                    'author': feed.get('author'),
                    'count': len(d.entries)
                }