from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant
import homeassistant.helpers.config_validation as cv

from .manifest import manifest
DOMAIN = manifest.domain

CONFIG_SCHEMA = cv.deprecated(DOMAIN)

async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:    
    url_path = entry.entry_id
    require_admin = entry.options.get('require_admin', False)
   
    static_path = f'/{url_path}'
    hass.http.register_static_path(static_path, hass.config.path("custom_components/" + DOMAIN + "/www"), False)

    module_url = f"{static_path}/feed-reader.js?v={manifest.version}"
    await hass.components.panel_custom.async_register_panel(
            frontend_url_path=DOMAIN,
            webcomponent_name="feed-reader",
            sidebar_title=manifest.name,
            sidebar_icon="mdi:book-lock-outline",
            module_url=module_url,
            config={},
            require_admin=require_admin
          )

    entry.async_on_unload(entry.add_update_listener(update_listener))
    return True

async def update_listener(hass, entry):
    """Handle options update."""
    await async_unload_entry(hass, entry)
    await async_setup_entry(hass, entry)

async def async_unload_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    hass.components.frontend.async_remove_panel(DOMAIN)
    return True