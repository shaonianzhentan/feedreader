from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant
import homeassistant.helpers.config_validation as cv

from .manifest import manifest
from .http_api import HttpApiView
DOMAIN = manifest.domain

CONFIG_SCHEMA = cv.deprecated(DOMAIN)
PLATFORMS = ["sensor"]

async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    
    hass.http.register_view(HttpApiView)
    hass.components.frontend.add_extra_js_url(hass, '/api/feedreader')

    entry.async_on_unload(entry.add_update_listener(update_listener))
    await hass.config_entries.async_forward_entry_setups(entry, PLATFORMS)
    return True

async def update_listener(hass, entry):
    """Handle options update."""
    await async_unload_entry(hass, entry)
    await async_setup_entry(hass, entry)

async def async_unload_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    # 删除缓存文件
    manifest.remove_file(entry.data.get('url').strip())

    return await hass.config_entries.async_unload_platforms(entry, PLATFORMS)