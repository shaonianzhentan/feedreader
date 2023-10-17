from __future__ import annotations

from typing import Any
import voluptuous as vol

from homeassistant.data_entry_flow import FlowResult

import homeassistant.helpers.config_validation as cv
from homeassistant.core import callback
from homeassistant.config_entries import ConfigFlow, OptionsFlow, ConfigEntry
import feedparser

from .manifest import manifest

DOMAIN = manifest.domain
DATA_SCHEMA = vol.Schema({
    vol.Required("url"): str
})

class SimpleConfigFlow(ConfigFlow, domain=DOMAIN):

    VERSION = 1

    async def async_step_user(
        self, user_input: dict[str, Any] | None = None
    ) -> FlowResult:

        if user_input is None:
            return self.async_show_form(step_id="user", data_schema=DATA_SCHEMA)

        url = user_input.get('url').strip()
        d = await self.hass.async_add_executor_job(feedparser.parse, url)
        title = d['feed']['title']
        return self.async_create_entry(title=title, data={
            'url': url
        })

    @staticmethod
    @callback
    def async_get_options_flow(entry: ConfigEntry):
        return OptionsFlowHandler(entry)


class OptionsFlowHandler(OptionsFlow):
    def __init__(self, config_entry: ConfigEntry):
        self.config_entry = config_entry

    async def async_step_init(self, user_input=None):
        return await self.async_step_user(user_input)

    async def async_step_user(self, user_input=None):
        errors = {}
        if user_input is None:
            options = self.config_entry.options
            errors = {}
            DATA_SCHEMA = vol.Schema({
                vol.Required("require_admin", default=options.get('require_admin', False)): bool
            })
            return self.async_show_form(step_id="user", data_schema=DATA_SCHEMA, errors=errors)
        return self.async_create_entry(title='', data=user_input)