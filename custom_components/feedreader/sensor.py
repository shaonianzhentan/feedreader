from homeassistant.components.sensor import SensorEntity
from homeassistant.helpers.entity import DeviceInfo, Entity
import time, feedparser, requests, hashlib, pytz, os
from datetime import datetime

from .manifest import manifest

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
        # 发起GET请求来下载文件
        response = requests.get(url, stream=True)
        # 检查请求是否成功
        if response.status_code == 200:
            # 打开一个文件，并将响应内容写入
            with open(filename, 'wb') as f:
                for chunk in response.iter_content(chunk_size=8192):
                    if chunk:
                        f.write(chunk)
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
            # 保存文件
            if self.save_local:
                res = await self.hass.async_add_executor_job(self.download, url)
                if res is not None:
                    url = res
            # 读取内容
            d = await self.hass.async_add_executor_job(feedparser.parse, url)
            feed = d['feed']
            self.update_at = now
            t = feed.get('updated_parsed')
            if t is not None:
                self._state = datetime(*t[:6], tzinfo=pytz.timezone(self.hass.config.time_zone))
                self._attributes.update({
                  'author': feed.get('author'),
                  'count': len(d.entries)
                })