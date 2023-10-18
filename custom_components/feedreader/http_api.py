import time, feedparser
from homeassistant.components.http import HomeAssistantView
from aiohttp import web

from .manifest import CURRENT_PATH

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
        response = web.Response(content_type='text/javascript')
        file_path =  f"{CURRENT_PATH}/feed-reader.js"
        with open(file_path, 'rb') as f:
            response.text = f.read().decode('utf-8')
        return response

    async def post(self, request):
        result = await self.async_validate_access_token(request)
        if result is not None:
            return result

        hass = request.app["hass"]
        body = await request.json()
        
        url = body.get('url')
        d = await hass.async_add_executor_job(feedparser.parse, url)
        _list = []
        for item in d.entries:
            _list.append({
                'id': item['id'],
                'title': item['title'],
                'content': item['summary'],
                'updated': time.strftime('%Y-%m-%d %H:%M:%S', item['updated_parsed'])
            })
        return self.json(_list)