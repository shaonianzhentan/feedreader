from homeassistant.components.sensor import SensorEntity
from homeassistant.helpers.entity import DeviceInfo
import time
import requests
import pytz
from datetime import datetime

from .manifest import manifest
from .feedreader import feed


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
        # 读取配置
        self.url = entry.data.get('url').strip()
        options = entry.options
        self.scan_interval = options.get('scan_interval', 180) * 60
        self.save_local = options.get('save_local', True)

        self._attributes = {
            'custom_ui_more_info': 'feed-reader',
            'title': self._attr_name,
            'url': self.url
        }
        self._state = None
        self.update_at = None

    @property
    def state(self):
        return self._state

    @property
    def state_attributes(self):
        return self._attributes

    def download(self, url):
        filename = manifest.get_filename(url)
        response = requests.get(url)
        if response.status_code == 200:
            if response.text:
                with open(filename, 'w') as f:
                    f.write(response.text)
                    return filename

    async def async_update(self):
        now = time.time()
        is_fetch = False
        if self.update_at is not None:
            time_diff = now - self.update_at
            if time_diff > self.scan_interval:
                is_fetch = True
        else:
            is_fetch = True

        if is_fetch:
            url = self.url
            if url.startswith("http"):
                # 保存文件
                if self.save_local:
                    res = await self.hass.async_add_executor_job(self.download, url)
                    if res is not None:
                        url = res
            else:
                url = manifest.get_storage_dir(url)
            # 读取内容
            d = await self.hass.async_add_executor_job(feed.get_data, url)
            self.update_at = now
            count = len(d.get('list', []))
            if count > 0:
                self._state = datetime.now(pytz.timezone(self.hass.config.time_zone)).isoformat()
                self._attributes.update({
                    'author': d.get('author'),
                    'updated': d.get('updated'),
                    'count': count
                })
