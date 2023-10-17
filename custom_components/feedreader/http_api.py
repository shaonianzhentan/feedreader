import time, json, aiohttp, logging, feedparser
from homeassistant.components.http import HomeAssistantView
from homeassistant.util.json import load_json
from aiohttp import web

from .manifest import manifest
_LOGGER = logging.getLogger(__name__)

class HttpApiView(HomeAssistantView):

    url = "/api/feedreader"
    name = "api:feedreader"
    requires_auth = False

# region 权限验证

    def get_access_token(self, request):
        authorization = request.headers.get('Authorization')
        return str(authorization).replace('Bearer', '').strip()

    async def async_validate_access_token(self, request):
        ''' 授权验证 '''
        hass = request.app["hass"]
        hass_access_token = self.get_access_token(request)
        token = await hass.auth.async_validate_access_token(hass_access_token)
        if token is None:
            return self.json_message("未授权", status_code=401)

# endregion

    async def get(self, request):
        hass = request.app["hass"]
        response = web.Response(content_type='text/javascript')
        file_path = hass.config.path("custom_components/" + manifest.domain + "/www/feed-reader.js")
        with open(file_path, 'rb') as f:
            response.text = f.read().decode('utf-8')
        return response

    async def post(self, request):
        result = await self.async_validate_access_token(request)
        if result is not None:
            return result

        body = await request.json()
        
        url = body.get('url')
        d = await self.hass.async_add_executor_job(feedparser.parse, url)        
        return self.json(d.entries)